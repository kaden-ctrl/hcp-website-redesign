#!/usr/bin/env node
/**
 * Standalone build — flat .html files with relative paths that work when
 * opened directly from disk (file://), with no server and no build step.
 *
 *   node build-standalone.mjs
 *
 * Output goes to ./standalone. Trade-offs vs. the dist/ build:
 *   - URLs become /about.html instead of the cleaner /about/
 *   - canonical, og:url and JSON-LD @ids are rewritten to match, so whichever
 *     version you deploy stays internally consistent
 * The same twelve audit checks run against this output.
 */
import { readFile, writeFile, mkdir, rm, cp } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { renderPage } from './src/layout.mjs';
import { site } from './src/site.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(root, 'standalone');

/* ---------- clean path -> flat filename ---------- */
export function flatName(p) {
  if (p === '/') return 'index.html';
  return p.replace(/^\/|\/$/g, '').replace(/\//g, '-') + '.html';
}

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * Rewrite a rendered page so every internal reference is relative and flat.
 * Order matters: absolute URLs are handled before root-relative ones.
 */
function rewrite(html, map) {
  // 1. Absolute URLs (canonical, og:url, JSON-LD @id / item / url).
  //    Leave anything not in the page map (e.g. /assets/img/og-default.png) alone.
  const absRe = new RegExp(esc(site.origin) + '(/[^"#\\s]*)', 'g');
  html = html.replace(absRe, (m, p) => (map.has(p) ? site.origin + '/' + map.get(p) : m));

  // 2. Root-relative asset paths -> relative (pages are flat at the root).
  html = html.replace(/(href|src)="\/assets\//g, '$1="assets/');

  // 3. Root-relative page links -> flat filenames, preserving #fragments.
  html = html.replace(/href="(\/[^"#]*)(#[^"]*)?"/g, (m, p, frag) => {
    if (!map.has(p)) return m;
    return `href="${map.get(p)}${frag || ''}"`;
  });

  // 4. Root-level files.
  html = html.replace(/href="\/(sitemap\.xml|llms\.txt|site\.webmanifest)"/g, 'href="$1"');
  html = html.replace(/href="\/assets\//g, 'href="assets/');

  // 5. Fonts inside the inlined critical CSS.
  html = html.replace(/url\(\/assets\/fonts\//g, 'url(assets/fonts/');

  return html;
}

async function loadPages() {
  const dir = path.join(root, 'src/pages');
  const files = (await readdir(dir)).filter((f) => f.endsWith('.mjs')).sort();
  const pages = [];
  for (const f of files) {
    const mod = await import(path.join(dir, f));
    const ex = mod.default;
    for (const p of Array.isArray(ex) ? ex : [ex]) if (p) pages.push(p);
  }
  return pages;
}

/* ---------- audit checks (same twelve) ---------- */
function textOf(html) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ').replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();
}

function check(page, html) {
  const e = [];
  if (!/<head>\s*<meta charset="utf-8">/.test(html)) e.push('#7 charset not first in <head>');
  const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!ld) e.push('#1 no JSON-LD');
  else {
    let g = [];
    try { g = JSON.parse(ld[1])['@graph'] || []; } catch (err) { e.push('#1 JSON-LD parse: ' + err.message); }
    const t = g.map((n) => n['@type']);
    if (!t.includes('WebSite')) e.push('#1 WebSite schema missing');
    if (!t.includes('Organization')) e.push('#2 Organization schema missing');
    if (!t.includes('BreadcrumbList')) e.push('#3 BreadcrumbList missing');
    if (page.faqs?.length && !t.includes('FAQPage')) e.push('#11 FAQPage missing');
  }
  const d = html.match(/<meta name="description" content="([^"]*)"/);
  if (!d) e.push('#8 description missing');
  else if (d[1].length > 155 || d[1].length < 70) e.push(`#8 description ${d[1].length} chars`);
  const head = html.split('</head>')[0].replace(/<noscript>[\s\S]*?<\/noscript>/g, '');
  if (/<link[^>]+rel="stylesheet"/.test(head)) e.push('#6 render-blocking stylesheet');
  if (/main\.css/.test(html)) e.push('standalone: external stylesheet reference survived');
  if (/<script(?![^>]*(defer|async|application\/ld\+json))[^>]*src=/.test(html)) e.push('#6 blocking script');
  for (const tag of html.match(/<img\b[^>]*>/g) || []) {
    if (!/\btitle="/.test(tag)) e.push('#9 img without title');
    if (!/\balt="/.test(tag)) e.push('#9 img without alt');
  }
  const ratio = Buffer.byteLength(textOf(html)) / Buffer.byteLength(html);
  if (!page.noindex) {
    if (!/id="why-hcp"/.test(html)) e.push('#10 no differentiators section');
    if (!/id="faq"/.test(html)) e.push('#11 no FAQ section');
    if (!/id="use-cases"/.test(html)) e.push('#12 no use cases section');
    if (ratio < 0.10) e.push(`#5 content-to-code ${(ratio * 100).toFixed(1)}%`);
  }
  // standalone-specific: no absolute-root references may survive
  const leaks = (html.match(/(?:href|src)="\/(?!\/)/g) || []).length;
  if (leaks) e.push(`${leaks} root-relative reference(s) left — would break over file://`);
  return { e, ratio };
}

/* ---------- build ---------- */
const pages = await loadPages();
const map = new Map(pages.map((p) => [p.path, flatName(p.path)]));

const criticalCss = (await readFile(path.join(root, 'assets/css/critical.css'), 'utf8'))
  .replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s*\n\s*/g, '').trim();
const mainCss = await readFile(path.join(root, 'assets/css/main.css'), 'utf8');
const mainJs = await readFile(path.join(root, 'assets/js/main.js'), 'utf8');
const mainCssMin = mainCss.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s*\n\s*/g, '').trim();
const h = (s) => createHash('sha1').update(s).digest('hex').slice(0, 8);

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(path.join(root, 'assets'), path.join(out, 'assets'), { recursive: true });

let failures = 0;
const rows = [];

for (const page of pages) {
  // Inline ALL css for the standalone build. A double-clicked file:// page
  // cannot rely on the preload -> stylesheet swap firing consistently across
  // browsers, so we remove the external stylesheet entirely.
  const raw = renderPage(page, { criticalCss: criticalCss + '\n' + mainCssMin, cssHash: h(mainCss), jsHash: h(mainJs) });
  const html = rewrite(raw, map)
    .replace(/<link rel="preload" href="\/?assets\/css\/main\.css[^>]*>\n?/, '')
    .replace(/<noscript><link rel="stylesheet" href="\/?assets\/css\/main\.css[^>]*><\/noscript>\n?/, '');
  const file = flatName(page.path);
  await writeFile(path.join(out, file), html);
  const { e, ratio } = check(page, html);
  rows.push({ file, kb: (Buffer.byteLength(html) / 1024).toFixed(1), ratio });
  if (e.length) {
    failures += e.length;
    console.error(`\n  FAIL ${file}`);
    e.forEach((x) => console.error(`       ${x}`));
  }
}

// Root files, with flat URLs so they match this build.
const url = (p) => site.origin + '/' + map.get(p);
await writeFile(path.join(out, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  pages.filter((p) => !p.noindex).map((p) =>
    `  <url>\n    <loc>${url(p.path)}</loc>\n    <lastmod>${p.dateModified || '2026-09-15'}</lastmod>\n  </url>`).join('\n') +
  `\n</urlset>\n`);

const llms = await readFile(path.join(root, 'dist/llms.txt'), 'utf8').catch(() => null);
if (llms) {
  let t = llms;
  for (const [p, f] of map) t = t.split(site.origin + p).join(site.origin + '/' + f);
  await writeFile(path.join(out, 'llms.txt'), t);
}
await cp(path.join(root, 'dist/robots.txt'), path.join(out, 'robots.txt')).catch(() => {});
await cp(path.join(root, 'dist/site.webmanifest'), path.join(out, 'site.webmanifest')).catch(() => {});

const avg = rows.reduce((a, r) => a + r.ratio, 0) / rows.length;
console.log(`\n  ${rows.length} standalone pages -> standalone/`);
console.log(`  avg content-to-code ${(avg * 100).toFixed(1)}%  |  avg page ${(rows.reduce((a, r) => a + Number(r.kb), 0) / rows.length).toFixed(1)} KB`);
if (failures) { console.error(`\n  BUILD FAILED — ${failures} issue(s)\n`); process.exit(1); }
console.log('  All 12 audit checks passed. Every reference is relative.\n');
