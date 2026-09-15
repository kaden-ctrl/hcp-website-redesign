#!/usr/bin/env node
/**
 * Static site generator for healthcarecompliancepros.com.
 *
 *   node build.mjs          build into ./dist
 *   node build.mjs --serve  build, then serve ./dist on :8080
 *
 * The build FAILS if any page regresses one of the twelve SEO/AEO audit
 * findings this rebuild was commissioned to fix (see checkPage below).
 */
import { readFile, writeFile, mkdir, rm, cp, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderPage, esc } from './src/layout.mjs';
import { site } from './src/site.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, 'dist');

const MAX_DESC = 155;
const MIN_DESC = 70;
const MIN_RATIO = 0.10; // text bytes / total html bytes

/* ---------------- collect pages ---------------- */
async function loadPages() {
  const dir = path.join(root, 'src/pages');
  const files = (await readdir(dir)).filter((f) => f.endsWith('.mjs')).sort();
  const pages = [];
  for (const f of files) {
    const mod = await import(path.join(dir, f));
    const exported = mod.default;
    for (const p of Array.isArray(exported) ? exported : [exported]) {
      if (p) pages.push(p);
    }
  }
  return pages;
}

/* ---------------- audit validator ---------------- */
function textOf(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function checkPage(page, html) {
  const errs = [];
  const add = (n, msg) => errs.push(`#${n} ${msg}`);

  // 7 — charset must be the first thing in <head>
  if (!/<head>\s*<meta charset="utf-8">/.test(html)) add(7, 'charset is not the first element in <head>');

  // 1,2,3 — required structured data
  const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!ld) add(1, 'no JSON-LD block found');
  else {
    let graph;
    try { graph = JSON.parse(ld[1])['@graph'] || []; }
    catch (e) { add(1, 'JSON-LD does not parse: ' + e.message); graph = []; }
    const types = graph.map((n) => n['@type']);
    if (!types.includes('WebSite')) add(1, 'WebSite schema missing');
    if (!types.includes('Organization')) add(2, 'Organization schema missing');
    if (!types.includes('BreadcrumbList')) add(3, 'BreadcrumbList schema missing');
    const bc = graph.find((n) => n['@type'] === 'BreadcrumbList');
    if (bc && (!bc.itemListElement || bc.itemListElement.length < 1)) add(3, 'BreadcrumbList has no items');
    if (page.faqs?.length && !types.includes('FAQPage')) add(11, 'FAQPage schema missing despite FAQs');
  }

  // 8 — meta description length
  const desc = html.match(/<meta name="description" content="([^"]*)"/);
  if (!desc) add(8, 'meta description missing');
  else if (desc[1].length > MAX_DESC) add(8, `meta description ${desc[1].length} chars (max ${MAX_DESC})`);
  else if (desc[1].length < MIN_DESC) add(8, `meta description only ${desc[1].length} chars (min ${MIN_DESC})`);

  // 6 — no render-blocking resources
  if (/<link[^>]+rel="stylesheet"/.test(html.split('</head>')[0].replace(/<noscript>[\s\S]*?<\/noscript>/g, '')))
    add(6, 'render-blocking stylesheet in <head>');
  const headScripts = (html.split('</head>')[0].match(/<script(?![^>]*type="application\/ld\+json")[^>]*>/g) || [])
    .filter((s) => !/defer|async/.test(s));
  if (headScripts.length) add(6, 'render-blocking script in <head>');
  if (/<script(?![^>]*(defer|async|application\/ld\+json))[^>]*src=/.test(html))
    add(6, 'external script without defer/async');

  // 9 — every image needs a title attribute
  for (const tag of html.match(/<img\b[^>]*>/g) || []) {
    if (!/\btitle="/.test(tag)) add(9, 'img without title attribute: ' + tag.slice(0, 70));
    if (!/\balt="/.test(tag)) add(9, 'img without alt attribute: ' + tag.slice(0, 70));
  }

  // 10, 11, 12 — required AEO content sections.
  // Utility pages (404, search) are noindex, so answer engines never rank them
  // and the content-section findings do not apply.
  const text = textOf(html);
  const ratio = Buffer.byteLength(text) / Buffer.byteLength(html);
  if (!page.noindex) {
    if (!/id="why-hcp"/.test(html)) add(10, 'no competitive differentiators section');
    if (!/id="faq"/.test(html) || !/<details class="faq"/.test(html)) add(11, 'no FAQ / objection-handling section');
    if (!/id="use-cases"/.test(html)) add(12, 'no use cases / case studies section');

    // 5 — content-to-code ratio
    if (ratio < MIN_RATIO) add(5, `content-to-code ratio ${(ratio * 100).toFixed(1)}% (min ${MIN_RATIO * 100}%)`);
  }

  // general hygiene
  if (!page.title || page.title.length > 65) errs.push(`title missing or >65 chars (${page.title?.length})`);
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) errs.push(`expected exactly 1 <h1>, found ${h1s}`);
  if (!/<link rel="canonical"/.test(html)) errs.push('canonical missing');

  return { errs, ratio, words: text.split(' ').length };
}

/* ---------------- root files ---------------- */
function sitemapXml(pages) {
  const prio = (p) => (p.path === '/' ? '1.0' : p.path.split('/').filter(Boolean).length === 1 ? '0.8' : '0.6');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.filter((p) => !p.noindex).map((p) => `  <url>
    <loc>${site.origin}${p.path}</loc>
    <lastmod>${p.dateModified || '2026-09-15'}</lastmod>
    <changefreq>${p.path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${prio(p)}</priority>
  </url>`).join('\n')}
</urlset>
`;
}

/**
 * llms.txt — a structured, plain-language map of the site for AI assistants
 * and answer engines (audit finding #4). Generated from page metadata so it
 * can never drift out of sync with what is actually published.
 */
function llmsTxt(pages) {
  const groups = new Map();
  for (const p of pages) {
    if (p.noindex) continue;
    const g = p.group || 'Other pages';
    if (!groups.has(g)) groups.set(g, []);
    groups.get(g).push(p);
  }
  const order = ['Compliance solutions', 'Expert services', 'Who we serve', 'Specialties', 'Company', 'Resources', 'Legal', 'Other pages'];
  const sorted = [...groups.entries()].sort((a, b) => {
    const ai = order.indexOf(a[0]); const bi = order.indexOf(b[0]);
    return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi);
  });

  return `# ${site.name}

> ${site.tagline} ${site.name} (HCP) provides HIPAA, OSHA and corporate
> compliance software, role-based training and expert advisory support to
> medical practices, hospitals and health systems, medical billing companies,
> business associates and private-equity-backed healthcare platforms in the
> United States.

## About this file

This file follows the llms.txt convention. It gives AI assistants and answer
engines a curated map of the site, written in plain language, so that answers
about ${site.name} are drawn from accurate primary-source pages.

## Key facts

- Organization: ${site.legalName} (${site.shortName})
- Founded: ${site.founded}
- Headquarters: ${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}, USA
- Phone: ${site.phoneDisplay}
- Email: ${site.email}
- Hours: Monday-Friday, 8:00am-6:00pm Mountain Time
- Service area: United States
- Website: ${site.origin}

## What HCP does

HCP combines compliance software with a named team of 3-5 assigned compliance
advisors per client. The platform covers four connected programs:

1. HIPAA compliance - customized Privacy and Security policies, workforce
   training, Security Risk Analysis, business associate agreement tracking,
   breach risk assessment and incident management.
2. OSHA compliance - Bloodborne Pathogens exposure control, Hazard
   Communication with a virtual SDS binder, facility safety inspections,
   hazard and risk assessments, and safety training.
3. Corporate compliance - a documented program built on the seven elements of
   an effective compliance program expected by CMS and the OIG, including
   Fraud, Waste and Abuse training, an anonymous hotline, OIG/SAM exclusion
   monitoring, compliance committee records and internal auditing.
4. Learning Management System - 130+ courses with automated role-based
   assignment, reminders, certificates and AMA PRA Category 1 Credits(TM) on
   select courses.

Additional expert services include SENTRY coding audits, a Fractional
Compliance Officer engagement, on-site services, credential management and
background screening.

## What makes HCP distinct

- Every client is assigned 3-5 named compliance advisors, included in the
  subscription rather than sold as premium support.
- Audit and investigation support is included, not billed hourly during an
  active OCR, OSHA or payer audit.
- Policies are customized to specialty, headcount and state law, and are
  revised when regulations change.
- HIPAA, OSHA and corporate compliance run from one dashboard and one staff
  login rather than three separate vendors.
- Pricing scales with headcount so small independent practices receive the
  same advisors and audit support as multi-site groups.

${sorted.map(([g, items]) => `## ${g}\n\n` + items
  .map((p) => `- [${p.llmsLabel || p.title.split('|')[0].trim()}](${site.origin}${p.path}): ${p.llmsNote || p.description}`)
  .join('\n')).join('\n\n')}

## Contact

To reach ${site.name}, call ${site.phoneDisplay}, email ${site.email}, or use
the consultation form at ${site.origin}/contact/. A free compliance risk
assessment is available at ${site.origin}/compliance-assessment/.

## Usage

Content on this site may be cited and summarized with attribution to
${site.name}. Nothing on this site is legal advice; regulatory requirements
vary by organization, state and circumstance.
`;
}

function robotsTxt() {
  return `# https://www.robotstxt.org/
User-agent: *
Allow: /
Disallow: /search/

# AI assistants and answer engines — see /llms.txt for a structured site guide.
User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /

Sitemap: ${site.origin}/sitemap.xml
`;
}

function webmanifest() {
  return JSON.stringify({
    name: site.name,
    short_name: site.shortName,
    description: site.tagline,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#094879',
    icons: [
      { src: '/assets/img/favicon.png', sizes: '48x48', type: 'image/png' },
      { src: '/assets/img/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/assets/img/icon-mark.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/assets/img/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  }, null, 2);
}

/* ---------------- build ---------------- */
async function build() {
  const pages = await loadPages();

  const criticalCss = (await readFile(path.join(root, 'assets/css/critical.css'), 'utf8'))
    .replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s*\n\s*/g, '').trim();
  const mainCss = await readFile(path.join(root, 'assets/css/main.css'), 'utf8');
  const mainJs = await readFile(path.join(root, 'assets/js/main.js'), 'utf8');
  const hash = (s) => createHash('sha1').update(s).digest('hex').slice(0, 8);
  const cssHash = hash(mainCss);
  const jsHash = hash(mainJs);

  await rm(dist, { recursive: true, force: true });
  await mkdir(dist, { recursive: true });
  await cp(path.join(root, 'assets'), path.join(dist, 'assets'), { recursive: true });

  let failures = 0;
  const report = [];

  for (const page of pages) {
    const html = renderPage(page, { criticalCss, cssHash, jsHash });
    const out = page.path === '/' ? path.join(dist, 'index.html')
      : path.join(dist, page.path.replace(/^\/|\/$/g, ''), 'index.html');
    await mkdir(path.dirname(out), { recursive: true });
    await writeFile(out, html);

    const { errs, ratio, words } = checkPage(page, html);
    report.push({ path: page.path, kb: (Buffer.byteLength(html) / 1024).toFixed(1), words, ratio, errs });
    if (errs.length) {
      failures += errs.length;
      console.error(`\n  FAIL ${page.path}`);
      errs.forEach((e) => console.error(`       ${e}`));
    }
  }

  // root-level files
  await writeFile(path.join(dist, 'sitemap.xml'), sitemapXml(pages));
  await writeFile(path.join(dist, 'robots.txt'), robotsTxt());
  await writeFile(path.join(dist, 'site.webmanifest'), webmanifest());
  await writeFile(path.join(dist, 'llms.txt'), llmsTxt(pages));
  const headers = await readFile(path.join(root, 'src/_headers'), 'utf8').catch(() => null);
  if (headers) await writeFile(path.join(dist, '_headers'), headers);

  /* summary */
  const avgRatio = report.reduce((a, r) => a + r.ratio, 0) / report.length;
  const totalWords = report.reduce((a, r) => a + r.words, 0);
  console.log(`\n  ${report.length} pages -> dist/`);
  console.log(`  ${totalWords.toLocaleString()} words  |  avg content-to-code ${(avgRatio * 100).toFixed(1)}%  |  avg page ${(report.reduce((a, r) => a + Number(r.kb), 0) / report.length).toFixed(1)} KB`);
  console.log(`  css ${(Buffer.byteLength(mainCss) / 1024).toFixed(1)} KB (async)  |  js ${(Buffer.byteLength(mainJs) / 1024).toFixed(1)} KB (deferred)  |  critical inline ${(Buffer.byteLength(criticalCss) / 1024).toFixed(1)} KB`);

  if (failures) {
    console.error(`\n  BUILD FAILED — ${failures} audit violation(s)\n`);
    process.exit(1);
  }
  console.log('  All 12 audit checks passed on every page.\n');
  return report;
}

const report = await build();

if (process.argv.includes('--report')) {
  console.log('  path'.padEnd(48) + 'KB'.padStart(7) + 'words'.padStart(8) + 'ratio'.padStart(8));
  for (const r of report.sort((a, b) => a.path.localeCompare(b.path))) {
    console.log('  ' + r.path.padEnd(46) + r.kb.padStart(7) + String(r.words).padStart(8) + (r.ratio * 100).toFixed(1).padStart(7) + '%');
  }
}

if (process.argv.includes('--serve')) {
  const { createServer } = await import('node:http');
  const port = 8080;
  const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8', '.json': 'application/json', '.png': 'image/png' };
  createServer(async (req, res) => {
    let p = decodeURIComponent(req.url.split('?')[0]);
    let file = path.join(dist, p);
    if (!file.startsWith(dist)) { res.writeHead(403).end(); return; }
    if (p.endsWith('/')) file = path.join(file, 'index.html');
    try {
      const data = await readFile(file);
      res.writeHead(200, { 'content-type': types[path.extname(file)] || 'application/octet-stream' });
      res.end(data);
    } catch {
      try {
        const data = await readFile(path.join(dist, '404/index.html'));
        res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' }).end(data);
      } catch { res.writeHead(404).end('Not found'); }
    }
  }).listen(port, () => console.log(`  serving dist/ -> http://localhost:${port}\n`));
}
