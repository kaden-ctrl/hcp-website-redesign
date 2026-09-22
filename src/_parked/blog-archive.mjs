import { readdirSync, readFileSync } from 'node:fs';
import { renderPage, abs, esc } from '../layout.mjs';
import { site } from '../site.mjs';

/* The migrated blog archive, generated from the Octane CSV export
   (tools/convert-export.py -> content/blog/*.json).

   Archive posts are editorial content, so they are exempt from the
   differentiators / use-cases / FAQ requirements that apply to the marketing
   pages — repeating a sales FAQ on 1,000 articles would be noise. Every other
   check (schema, charset, meta length, image titles, no render-blocking)
   still applies. */

const dir = 'content/blog';
let posts = [];
try {
  posts = readdirSync(dir).filter((f) => f.endsWith('.json'))
    .map((f) => JSON.parse(readFileSync(`${dir}/${f}`, 'utf8')));
} catch { posts = []; }

posts.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

const fmt = (d) => {
  if (!d) return '';
  const [y, m, day] = d.split('-');
  return new Date(Date.UTC(+y, +m - 1, +day)).toLocaleDateString('en-US',
    { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
};

/** Trim/pad a description into the 70-155 window the build enforces.
 *  Length is measured AFTER HTML escaping, because the validator reads the
 *  escaped attribute value and "&" expands to "&amp;" (+4 chars). */
const escLen = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;').length;

function metaDesc(p) {
  let d = (p.description || '').replace(/\s+/g, ' ').trim();
  if (!d) d = (p.body || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  d = d.replace(/["<>]/g, '');                     // cheapest way to avoid escape inflation

  if (escLen(d) < 70) {
    d = (d + ' — compliance guidance from the Healthcare Compliance Pros advisory team.').trim();
  }
  // trim word-by-word until the escaped form fits
  while (escLen(d) > 155) {
    const cut = d.replace(/\s*\S+$/, '');
    if (!cut || cut.length < 40) { d = d.slice(0, 120); break; }
    d = cut;
  }
  if (escLen(d) > 155) d = d.slice(0, 100);
  return d;
}

const pages = posts.map((p) => {
  const title = (p.titleTag || p.title).trim();
  const short = title.length > 60 ? title.slice(0, 57).trim() + '…' : title;
  const body = `
<article class="post-single">
  <div class="wrap wrap-narrow">
    <p class="post-meta">${p.date ? `<time datetime="${p.date}">${fmt(p.date)}</time>` : 'Compliance guidance'}${p.words ? ` · ${Math.max(1, Math.round(p.words / 220))} min read` : ''}</p>
    <h1>${esc(p.title)}</h1>
    <div class="prose post-body">${p.body}</div>
    <p class="post-back"><a href="/blog/">&larr; All articles</a></p>
  </div>
</article>
<section class="sec sec-cta">
  <div class="wrap wrap-narrow cta-in">
    <h2>Questions about your own compliance program?</h2>
    <p>A free risk assessment produces a written gap analysis against HIPAA, OSHA and corporate compliance requirements. No obligation.</p>
    <p class="cta-btns">
      <a class="btn btn-accent" href="/compliance-assessment/">Get a free assessment</a>
      <a class="btn btn-outline-light" href="/contact/">Talk to an advisor</a>
    </p>
    <p class="cta-alt">Or call <a href="tel:${site.phoneE164}">${site.phoneDisplay}</a>.</p>
  </div>
</section>`;

  return {
    path: p.url,
    title: short,
    description: metaDesc(p),
    breadcrumbs: [{ label: 'Blog', href: '/blog/' }, { label: p.title.slice(0, 60), href: p.url }],
    group: 'Blog archive',
    llmsLabel: p.title,
    archive: true,                 // exempt from the marketing-page content checks
    noindex: p.thin,               // thin posts stay crawlable but out of the index
    ogType: 'article',
    datePublished: p.date || undefined,
    dateModified: p.updated || p.date || undefined,
    extraSchema: [{
      '@type': 'BlogPosting',
      '@id': abs(p.url) + '#article',
      headline: p.title.slice(0, 110),
      description: metaDesc(p),
      ...(p.date ? { datePublished: p.date } : {}),
      ...(p.updated ? { dateModified: p.updated } : {}),
      author: { '@id': abs('/#organization') },
      publisher: { '@id': abs('/#organization') },
      mainEntityOfPage: { '@id': abs(p.url) + '#webpage' },
      wordCount: p.words,
      inLanguage: 'en-US'
    }],
    body
  };
});

export default pages;
