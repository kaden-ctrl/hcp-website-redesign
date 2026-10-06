import { icon, esc } from '../layout.mjs';
import { site } from '../site.mjs';
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

/* Blog: the 50 most recent posts from the migrated archive.

   Images are stripped entirely, as asked. That covers the cover photo and
   also every inline <img> in the body, because the two are the same asset
   library and half-removing them would leave 405 broken references across
   the archive. Figures and picture wrappers go with them, so nothing is
   left holding an empty caption.

   The body HTML is from their CMS, so it is sanitised rather than trusted:
   script, style, iframe and event handlers are removed, and the surviving
   markup is restricted to the tags the posts actually use. */

/* fileURLToPath, not URL().pathname: the latter percent-encodes, and this
   project lives in a directory with a space in its name, so the raw
   pathname resolves to "HCP%20New%20Website" and the read fails. */
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const dir = path.join(root, 'content', 'blog');

const ALLOWED = new Set([
  'p','br','strong','em','b','i','u','a','ul','ol','li','h2','h3','h4',
  'blockquote','table','thead','tbody','tr','td','th','hr','sup','sub','span','div'
]);

function sanitise(html) {
  let s = html;
  // whole elements that should never survive a migration
  s = s.replace(/<(script|style|iframe|object|embed|form|input|button)[\s\S]*?<\/\1>/gi, '');
  s = s.replace(/<(script|style|iframe|object|embed|input)\b[^>]*\/?>/gi, '');
  // every image, and the wrappers that exist only to hold one
  s = s.replace(/<img\b[^>]*>/gi, '');
  s = s.replace(/<picture\b[\s\S]*?<\/picture>/gi, '');
  s = s.replace(/<figure\b[^>]*>([\s\S]*?)<\/figure>/gi, (m, inner) =>
    /<(p|ul|ol|table|h[2-4])\b/i.test(inner) ? inner : '');
  s = s.replace(/<figcaption\b[\s\S]*?<\/figcaption>/gi, '');
  // inline handlers and javascript: urls
  s = s.replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '');
  s = s.replace(/(href|src)\s*=\s*(["'])\s*javascript:[^"']*\2/gi, '$1="#"');
  // drop any tag outside the allow-list, keeping its contents
  s = s.replace(/<\/?([a-zA-Z][\w-]*)\b[^>]*>/g, (m, tag) =>
    ALLOWED.has(tag.toLowerCase()) ? m : '');
  // external links open safely
  s = s.replace(/<a\b([^>]*href="https?:\/\/[^"]*"[^>]*)>/gi,
    (m, attrs) => /rel=/i.test(attrs) ? m : `<a${attrs} rel="noopener">`);
  /* Em dashes. The house rule is none on the site, and these are their own
     published articles rather than copy we wrote, so this edits their text:
     113 of them across the 50 posts, almost all appositive (word-dash-word).
     A comma carries that correctly where the next word is lower case; where
     it is capitalised the dash was doing the work of a colon, so a colon
     goes in instead. Both read as written rather than as substituted. */
  s = s.replace(/\s*(?:&mdash;|\u2014)\s*(<[^>]+>)?\s*([A-Za-z0-9&])/g,
    (m, tag, ch) => (ch === ch.toUpperCase() && /[A-Za-z]/.test(ch) ? ': ' : ', ') + (tag || '') + ch);
  // tidy anything the substitution doubled up
  s = s.replace(/,\s*,/g, ',').replace(/\s+,/g, ',').replace(/,\s*([.;:!?])/g, '$1');

  // empty paragraphs left behind by the removals
  s = s.replace(/<p>\s*(?:&nbsp;|\s)*<\/p>/gi, '');
  return s.trim();
}

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function pretty(iso) {
  const [y, m, d] = (iso || '').split('-').map(Number);
  if (!y) return '';
  return `${String(d).padStart(2, '0')} ${MONTHS[m - 1]} ${y}`;
}

const posts = readdirSync(dir)
  .filter((f) => f.endsWith('.json'))
  .map((f) => JSON.parse(readFileSync(path.join(dir, f), 'utf8')))
  .filter((p) => p.title && p.date && p.body)
  .sort((a, b) => (a.date < b.date ? 1 : -1))
  .slice(0, 50)
  .map((p) => ({ ...p, clean: sanitise(p.body) }));

/* ---------------- index ---------------- */

const byYear = posts.reduce((acc, p) => {
  const y = p.date.slice(0, 4);
  (acc[y] = acc[y] || []).push(p);
  return acc;
}, {});

const indexBody = `
<section class="statement field">
  <div class="wrap">
    <p class="statement-kicker rv">Compliance Insider</p>
    <h1 class="statement-h rv">What changed, and what it means for your program.</h1>
    <p class="statement-sub rv">Enforcement actions, rule changes and the practical consequences for
    healthcare organizations, written by the advisors who field the questions.</p>
  </div>
</section>

<section class="sec solid" id="posts">
  <div class="wrap">
    ${Object.keys(byYear).sort().reverse().map((y) => `
    <div class="postyear rv">
      <h2>${esc(y)}</h2>
      <ul class="postlist">
        ${byYear[y].map((p) => `<li>
          <a href="/blog/${esc(p.slug)}/">
            <time datetime="${esc(p.date)}">${esc(pretty(p.date))}</time>
            <b>${esc(p.title)}</b>
            ${p.description ? `<span>${esc(p.description)}</span>` : ''}
          </a>
        </li>`).join('')}
      </ul>
    </div>`).join('')}
  </div>
</section>

<section class="sec field" id="why-hcp">
  <div class="wrap">
    <div class="sec-head rv"><h2>Why organizations read this</h2></div>
    <ul class="whygrid rv">
      <li><span class="whygrid-n">01</span><p>Written by the advisors who answer the phone, not by a content team.</p></li>
      <li><span class="whygrid-n">02</span><p>Enforcement actions explained in terms of what you would have had to produce.</p></li>
      <li><span class="whygrid-n">03</span><p>Rule changes with the practical consequence, not the press release.</p></li>
      <li><span class="whygrid-n">04</span><p>Specialty-calibrated, because the same rule lands differently by setting.</p></li>
    </ul>
  </div>
</section>

<section class="sec sec-soft solid" id="use-cases">
  <div class="wrap">
    <div class="sec-head rv"><h2>In practice</h2></div>
    <figure class="bigquote rv">
      <blockquote>The HCP team does not just hand you software; they become part of your compliance
      operations. Having a Fractional Compliance Officer who actually understands cardiology billing
      made all the difference when we faced our first OIG inquiry.</blockquote>
      <figcaption>Practice Administrator<span>Cardiology group, Mid-Atlantic</span></figcaption>
    </figure>
  </div>
</section>

<section class="sec field" id="faq">
  <div class="narrow">
    <div class="sec-head rv"><h2>About the Compliance Insider</h2></div>
    <div class="faqs rv">
      <details class="faq" open><summary><span>How often do you publish?</span>${icon('plus','ic ic-sm')}</summary>
        <div class="faq-a"><p>Whenever something changes that affects how a healthcare organization has to operate. That means enforcement actions, rule changes and deadlines, rather than a fixed schedule filled with whatever was available.</p></div></details>
      <details class="faq"><summary><span>Who writes it?</span>${icon('plus','ic ic-sm')}</summary>
        <div class="faq-a"><p>The compliance advisors and coding specialists who work with client programmes day to day, which is why the pieces tend to be about what you would have had to produce rather than about the headline.</p></div></details>
      <details class="faq"><summary><span>Can we ask about something covered here?</span>${icon('plus','ic ic-sm')}</summary>
        <div class="faq-a"><p>Yes. Call ${esc(site.phoneDisplay)} and ask for a compliance advisor. If you are already a client, ask for your account specialist by name.</p></div></details>
    </div>
  </div>
</section>
`;

const index = {
  path: '/blog/',
  title: 'Compliance Insider: HIPAA, OSHA and Billing News | HCP',
  description: 'Enforcement actions, rule changes and what they mean for healthcare organizations, written by the compliance advisors who field the questions.',
  body: indexBody,
  faqs: [
    { q: 'How often do you publish?', a: 'Whenever something changes that affects how a healthcare organization has to operate, rather than on a fixed schedule.' },
    { q: 'Who writes it?', a: 'The compliance advisors and coding specialists who work with client programmes day to day.' }
  ]
};

/* ---------------- individual posts ---------------- */

const postPages = posts.map((p, i) => {
  const prev = posts[i + 1];
  const next = posts[i - 1];
  const body = `
<article>
  <header class="posthead field">
    <div class="narrow">
      <p class="post-kicker rv"><a href="/blog/">Compliance Insider</a> &middot;
        <time datetime="${esc(p.date)}">${esc(pretty(p.date))}</time></p>
      <h1 class="rv">${esc(p.title)}</h1>
      ${p.description ? `<p class="post-standfirst rv">${esc(p.description)}</p>` : ''}
    </div>
  </header>

  <div class="sec solid">
    <div class="narrow prose rv">
      ${p.clean}
    </div>
  </div>
</article>

<section class="sec field" id="use-cases">
  <div class="narrow">
    <nav class="postnav rv" aria-label="More posts">
      ${prev ? `<a class="postnav-prev" href="/blog/${esc(prev.slug)}/"><span>Previous</span><b>${esc(prev.title)}</b></a>` : ''}
      ${next ? `<a class="postnav-next" href="/blog/${esc(next.slug)}/"><span>Next</span><b>${esc(next.title)}</b></a>` : ''}
    </nav>
  </div>
</section>

<section class="sec sec-soft solid" id="why-hcp">
  <div class="wrap">
    <div class="sec-head rv"><h2>Who writes this</h2></div>
    <ul class="whygrid rv">
      <li><span class="whygrid-n">01</span><p>The advisors who answer the phone, not a content team.</p></li>
      <li><span class="whygrid-n">02</span><p>Enforcement explained as what you would have had to produce.</p></li>
      <li><span class="whygrid-n">03</span><p>Rule changes with the practical consequence attached.</p></li>
      <li><span class="whygrid-n">04</span><p>Specialty-calibrated, because the same rule lands differently.</p></li>
    </ul>
  </div>
</section>

<section class="sec field" id="faq">
  <div class="narrow">
    <div class="sec-head rv"><h2>Have a question about this?</h2></div>
    <div class="faqs rv">
      <details class="faq" open><summary><span>Can we ask an advisor about this directly?</span>${icon('plus','ic ic-sm')}</summary>
        <div class="faq-a"><p>Yes. Call ${esc(site.phoneDisplay)} and ask for a compliance advisor. There is no charge for the conversation and you do not need to be a client.</p></div></details>
      <details class="faq"><summary><span>Does this apply to our specialty?</span>${icon('plus','ic ic-sm')}</summary>
        <div class="faq-a"><p>The underlying rule usually does; what differs is the documentation and billing exposure it creates in your setting. That is the kind of thing a free compliance review is for.</p></div></details>
    </div>
  </div>
</section>

<section class="close" id="start">
  <div class="wrap sec">
    <div class="lead-grid">
      <div class="rv">
        <h2>Where would this leave you?</h2>
        <p class="sec-lead">Twenty minutes with an advisor produces a written gap analysis for your own
        setting, ranked by what would actually hurt you first.</p>
        <ul class="why">
          <li><div><b>Genuinely free</b><p>No cost, no obligation, and the written findings are yours whether or not you become a client.</p></div></li>
          <li><div><b>Prefer to talk now?</b><p>Call <a href="tel:${site.phoneE164}" style="color:var(--lime)">${site.phoneDisplay}</a> and ask for a compliance advisor.</p></div></li>
        </ul>
      </div>
      ${leadFormLazy()}
    </div>
  </div>
</section>
`;

  const title = (p.titleTag || p.title).slice(0, 52) + ' | HCP';
  let description = (p.description || '').trim();
  if (description.length > 155) description = description.slice(0, 152).replace(/\s+\S*$/, '') + '...';
  if (description.length < 70) {
    description = `${p.title}. Compliance guidance for healthcare organizations from Healthcare Compliance Pros.`.slice(0, 155);
  }

  return {
    path: `/blog/${p.slug}/`,
    title: title.length > 65 ? title.slice(0, 62) + '...' : title,
    description,
    body,
    ogType: 'article',
    parent: { name: 'Compliance Insider', path: '/blog/' },
    article: { published: p.date, modified: p.updated || p.date, headline: p.title }
  };
});

/* Imported lazily to avoid a circular import with product.mjs. */
function leadFormLazy() {
  return `<form class="lead-form f rv" data-lead="${site.email}" novalidate>
    <h3>Request your free compliance review</h3>
    <p>An advisor familiar with your setting will follow up, usually within one business day.</p>
    <div class="f-row f-row-2">
      <div><label for="name">Your name *</label><input id="name" name="name" type="text" autocomplete="name" required placeholder="Jane Whitfield"></div>
      <div><label for="organization">Organization *</label><input id="organization" name="organization" type="text" autocomplete="organization" required placeholder="Riverside Family Medicine"></div>
    </div>
    <div class="f-row f-row-2">
      <div><label for="email">Work email *</label><input id="email" name="email" type="email" autocomplete="email" required placeholder="jane@practice.com"></div>
      <div><label for="phone">Phone</label><input id="phone" name="phone" type="tel" autocomplete="tel" placeholder="(555) 123-4567"></div>
    </div>
    <div class="f-row">
      <div><label for="notes">Anything we should know?</label>
      <textarea id="notes" name="notes" placeholder="Number of locations, any deadline you are working against..."></textarea></div>
    </div>
    <button class="btn btn-ink" type="submit" style="width:100%">Request my free review</button>
    <p class="f-note">We use your details only to respond to this request. See our
    <a href="/privacypolicy/">privacy policy</a>. Please do not include patient information.</p>
  </form>`;
}

export default [index, ...postPages];
