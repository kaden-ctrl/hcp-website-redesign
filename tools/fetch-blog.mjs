#!/usr/bin/env node
/**
 * Fetch HCP's own blog archive and normalise it into a JSON content store.
 *
 *   node tools/fetch-blog.mjs --limit 5      # sample
 *   node tools/fetch-blog.mjs                # everything in the sitemap
 *
 * Polite by design: sequential, with a delay between requests. Writes one
 * JSON file per post to content/blog/ and skips anything already fetched,
 * so the run is resumable.
 */
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';

const ORIGIN = 'https://www.healthcarecompliancepros.com';
const OUT = 'content/blog';
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36';
const DELAY_MS = 350;

const args = process.argv.slice(2);
const limit = args.includes('--limit') ? Number(args[args.indexOf('--limit') + 1]) : Infinity;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const decode = (s) => s
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;|&rsquo;/g, "'").replace(/&ldquo;|&rdquo;/g, '"')
  .replace(/&mdash;/g, '—').replace(/&ndash;/g, '–').replace(/&hellip;/g, '…');

const strip = (h) => decode(h.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();

/**
 * Pull the article body. Their posts have no <article> element and <main>
 * holds only a fraction of the content, so instead: strip page chrome, collect
 * every content block in document order, then keep the densest contiguous run
 * — which is the article itself rather than nav lists and footer boilerplate.
 */
function extractBody(html) {
  let frag = html.replace(/<(script|style|nav|header|footer|form|noscript|svg|aside|select)[\s\S]*?<\/\1>/gi, ' ');

  const blocks = [];
  const re = /<(h1|h2|h3|h4|p|ul|ol|blockquote)\b[^>]*>([\s\S]*?)<\/\1>/gi;
  let n;
  while ((n = re.exec(frag))) {
    const tag = n[1].toLowerCase();
    const inner = n[2];
    if (/<(p|div|h[1-4])\b/i.test(inner)) continue;      // skip wrappers holding other blocks
    if (tag === 'ul' || tag === 'ol') {
      const items = [...inner.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)]
        .map((li) => strip(li[1])).filter((t) => t && t.length > 2);
      if (items.length) blocks.push({ tag, items, weight: items.join(' ').length });
      continue;
    }
    const text = strip(inner);
    if (!text || text.length < 3) continue;
    if (/^(share|tags?|posted in|categories|read more|continue reading|previous|next|search|menu|skip to)\b/i.test(text)) continue;
    blocks.push({ tag, text, weight: text.length });
  }

  // Densest contiguous run: walk the list, break the run when several
  // consecutive low-weight blocks appear (nav/boilerplate clusters).
  const runs = [];
  let cur = [];
  let thin = 0;
  for (const b of blocks) {
    const substantial = b.weight >= 60;
    if (substantial) { thin = 0; cur.push(b); }
    else {
      thin++;
      if (thin >= 3 && cur.length) { runs.push(cur); cur = []; }
      else if (cur.length) cur.push(b);
    }
  }
  if (cur.length) runs.push(cur);
  if (!runs.length) return [];

  const best = runs.sort((a, b) => b.reduce((s, x) => s + x.weight, 0) - a.reduce((s, x) => s + x.weight, 0))[0];
  return best
    .map(({ weight, ...rest }) => rest)
    .filter((b, i, a) => i === 0 || JSON.stringify(b) !== JSON.stringify(a[i - 1]));
}

function parsePost(url, html) {
  const title = decode((html.match(/<title>([^<]*)<\/title>/i) || [, ''])[1])
    .split('|')[0].trim();
  const desc = decode((html.match(/<meta name="description" content="([^"]*)"/i) || [, ''])[1]);
  // Their posts do not expose a publication date in static HTML; capture one
  // where present, otherwise leave it empty and let the template omit it
  // rather than inventing a date.
  const date = (html.match(/"datePublished"\s*:\s*"([^"]+)"/i)
    || html.match(/<meta property="article:published_time" content="([^"]+)"/i)
    || html.match(/<time[^>]*datetime="([^"]+)"/i)
    || [, ''])[1].slice(0, 10);
  const image = (html.match(/<meta property="og:image" content="([^"]+)"/i) || [, ''])[1];
  const blocks = extractBody(html);
  const words = blocks.reduce((a, b) => a + (b.text ? b.text.split(' ').length : (b.items || []).join(' ').split(' ').length), 0);
  return { url, slug: url.replace(ORIGIN, '').replace(/^\/|\/$/g, ''), title, description: desc, date, image, blocks, words };
}

/* ---- run ---- */
await mkdir(OUT, { recursive: true });
const done = new Set((await readdir(OUT)).map((f) => f.replace(/\.json$/, '')));

const xml = await readFile('../../../private/tmp/theirs.xml', 'utf8').catch(() => null)
  || await fetch(`${ORIGIN}/sitemap.xml`, { headers: { 'user-agent': UA } }).then((r) => r.text());
const urls = [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)]
  .map((m) => m[1].trim())
  .filter((u) => u.includes('/blog/'));

console.log(`  ${urls.length} blog URLs in sitemap, ${done.size} already fetched`);
let ok = 0, skip = 0, fail = 0;

for (const url of urls) {
  if (ok >= limit) break;
  const key = url.replace(ORIGIN, '').replace(/^\/|\/$/g, '').replace(/\//g, '__');
  if (done.has(key)) { skip++; continue; }
  try {
    const res = await fetch(url, { headers: { 'user-agent': UA } });
    if (!res.ok) { fail++; continue; }
    const post = parsePost(url, await res.text());
    if (post.words < 60) { fail++; continue; }          // too thin to be a real post
    await writeFile(path.join(OUT, `${key}.json`), JSON.stringify(post, null, 1));
    ok++;
    if (ok % 25 === 0) console.log(`    ${ok} fetched…`);
  } catch { fail++; }
  await sleep(DELAY_MS);
}
console.log(`  fetched ${ok}, skipped ${skip}, failed/thin ${fail}`);

/* NOTE ON FIDELITY
 * Measured on a 35-post sample: ~34% extract cleanly, the rest come back
 * under the word threshold. Their posts have no <article> element, <main>
 * holds only a fraction of the body, and no publication date is exposed in
 * static HTML (no JSON-LD, no article:published_time, no <time datetime>).
 * A CMS export is the correct source for this migration; this scraper is a
 * fallback, not a substitute.
 */
