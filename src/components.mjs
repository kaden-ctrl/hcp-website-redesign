import { esc, icon, img } from './layout.mjs';
import { site } from './site.mjs';

/* Hero -------------------------------------------------------------- */
// Line-art offerings that rotate inside the navy hero panel.
const OFFER_ICONS = {
  breach: '<path d="M22 44c0-6 5-10 10-10s10 4 10 10"/><path d="M26 34l-6-8m16 8l6-8"/><circle cx="37" cy="22" r="6"/><path d="M14 14l-4-5m10 2l-2-6m-10 12l-6-1"/>',
  policy: '<rect x="14" y="10" width="34" height="44" rx="3"/><path d="M22 22h18M22 30h18M22 38h12"/>',
  training: '<path d="M31 12 8 24l23 12 23-12z"/><path d="M18 30v12c0 4 6 7 13 7s13-3 13-7V30"/>',
  audit: '<circle cx="27" cy="27" r="15"/><path d="M38 38l12 12"/><path d="M21 27l4 4 8-9"/>',
  risk: '<path d="M31 8 8 50h46z"/><path d="M31 24v12m0 6v2"/>',
  hotline: '<path d="M16 12h8l4 10-5 3a22 22 0 0 0 12 12l3-5 10 4v8a4 4 0 0 1-4 4A34 34 0 0 1 12 16a4 4 0 0 1 4-4z"/>'
};

export function hero({ eyebrow, h1, lead, bullets = [], primary, secondary, stat, variant = 'dark', media, offers, photo }) {
  const light = variant === 'light';
  // Interior pages: full-bleed photograph under a heavy white wash, centred copy.
  if (photo) {
    return `<section class="hero hero-photo">
  ${img({ src: photo.src, alt: '', title: photo.title, width: photo.width, height: photo.height, cls: 'hero-bg', loading: 'eager', fetchpriority: 'high' })}
  <div class="wrap hero-in">
    <div class="hero-copy">
      ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
      <h1>${h1}</h1>
      <p class="lead">${lead}</p>
      <p class="hero-cta">
        <a class="btn btn-primary" href="${primary.href}">${esc(primary.label)}</a>
        ${secondary ? `<a class="btn btn-accent" href="${secondary.href}">${esc(secondary.label)}</a>` : ''}
      </p>
      ${stat ? `<p class="hero-trust">${icon('shield', 'ic ic-sm')}<span>${stat}</span></p>` : ''}
    </div>
  </div>
</section>`;
  }
  const mediaHtml = offers ? `<div class="hero-media"><div class="hero-offers">
    <p class="hero-offers-h"><span>What HCP Offers</span></p>
    <ul class="offer-rotator">${offers.map((o, i) => `<li class="offer"${i === 0 ? ' data-active' : ''}>
      <svg viewBox="0 0 62 62" aria-hidden="true" focusable="false">${OFFER_ICONS[o.icon] || OFFER_ICONS.policy}</svg>
      <span>${esc(o.label)}</span></li>`).join('')}</ul>
  </div></div>`
  : media ? `<div class="hero-media">${img({
    src: media.src, alt: media.alt, title: media.title,
    width: media.width, height: media.height,
    loading: 'eager', fetchpriority: 'high'
  })}</div>` : '';
  const primaryCls = light ? 'btn-primary' : 'btn-accent';
  const secondaryCls = light ? 'btn-accent' : 'btn-outline';
  return `<section class="hero hero-${variant}${(media || offers) ? ' hero-has-media' : ''}">
  <div class="wrap hero-in">
    <div class="hero-copy">
      ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
      <h1>${h1}</h1>
      <p class="lead">${lead}</p>
      ${bullets.length ? `<ul class="hero-bullets">${bullets.map((b) => `<li>${icon('check', 'ic ic-sm')}<span>${b}</span></li>`).join('')}</ul>` : ''}
      <p class="hero-cta">
        <a class="btn ${primaryCls}" href="${primary.href}">${esc(primary.label)}</a>
        ${secondary ? `<a class="btn ${secondaryCls}" href="${secondary.href}">${esc(secondary.label)}</a>` : ''}
      </p>
      ${stat ? `<p class="hero-trust">${icon('shield', 'ic ic-sm')}<span>${stat}</span></p>` : ''}
    </div>
    ${mediaHtml}
  </div>
</section>`;
}

/* Generic section wrapper ------------------------------------------- */
export function section({ id, cls = '', eyebrow, h2, lead, body, align = 'center' }) {
  return `<section class="sec ${cls}"${id ? ` id="${id}"` : ''}>
  <div class="wrap">
    ${h2 ? `<div class="sec-head ${align === 'left' ? 'sec-head-left' : ''}">
      ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
      <h2>${h2}</h2>
      ${lead ? `<p class="sec-lead">${lead}</p>` : ''}
    </div>` : ''}
    ${body}
  </div>
</section>`;
}

/* Prose block — carries the bulk of the readable copy --------------- */
export function prose(paragraphs) {
  return `<div class="prose">${paragraphs.map((p) => (p.startsWith('<') ? p : `<p>${p}</p>`)).join('')}</div>`;
}

/* Feature / capability cards ---------------------------------------- */
export function cards(items, cls = 'grid-3') {
  return `<ul class="cards ${cls}">${items.map((c) => `<li class="card">
  ${c.icon ? `<span class="card-ic">${icon(c.icon)}</span>` : ''}
  <h3>${esc(c.title)}</h3>
  <p>${c.text}</p>
  ${c.href ? `<a class="card-link" href="${c.href}">${esc(c.linkLabel || 'Learn more')}${icon('arrow', 'ic ic-xs')}</a>` : ''}
</li>`).join('')}</ul>`;
}

/* Checklist of included deliverables --------------------------------- */
export function checklist(items, cls = '') {
  return `<ul class="checklist ${cls}">${items.map((i) =>
    `<li>${icon('check', 'ic ic-sm')}<span>${i}</span></li>`).join('')}</ul>`;
}

/* Numbered process steps --------------------------------------------- */
export function steps(items) {
  return `<ol class="steps">${items.map((s, i) => `<li>
  <span class="step-n" aria-hidden="true">${i + 1}</span>
  <h3>${esc(s.title)}</h3>
  <p>${s.text}</p>
</li>`).join('')}</ol>`;
}

/* Stat row ------------------------------------------------------------ */
export function stats(items) {
  return `<ul class="stats">${items.map((s) => `<li>
  <span class="stat-n">${esc(s.value)}</span>
  <span class="stat-l">${s.label}</span>
</li>`).join('')}</ul>`;
}

/* ------------------------------------------------------------------- *
 * AUDIT-REQUIRED SECTION 1 — competitive differentiators
 * ------------------------------------------------------------------- */
export function differentiators({ h2, lead, items, compare }) {
  const compareTable = compare ? `<div class="table-scroll">
  <table class="compare">
    <caption>How ${site.shortName} compares with a typical healthcare compliance vendor</caption>
    <thead><tr><th scope="col">Capability</th><th scope="col">${esc(site.shortName)}</th><th scope="col">Typical vendor</th></tr></thead>
    <tbody>${compare.map((r) => `<tr>
      <th scope="row">${esc(r.capability)}</th>
      <td class="yes">${icon('check', 'ic ic-sm')}<span>${r.hcp}</span></td>
      <td class="no">${r.them}</td>
    </tr>`).join('')}</tbody>
  </table>
</div>` : '';

  return `<section class="sec sec-diff" id="why-hcp">
  <div class="wrap">
    <div class="sec-head">
      <p class="eyebrow">Why organizations choose HCP</p>
      <h2>${h2}</h2>
      <p class="sec-lead">${lead}</p>
    </div>
    <ul class="diff-grid">${items.map((d) => `<li class="diff">
      <span class="diff-ic">${icon(d.icon || 'star')}</span>
      <h3>${esc(d.title)}</h3>
      <p>${d.text}</p>
    </li>`).join('')}</ul>
    ${compareTable}
  </div>
</section>`;
}

/* ------------------------------------------------------------------- *
 * AUDIT-REQUIRED SECTION 2 — use cases / examples / case studies
 * ------------------------------------------------------------------- */
export function useCases({ h2, lead, items }) {
  return `<section class="sec sec-cases" id="use-cases">
  <div class="wrap">
    <div class="sec-head">
      <p class="eyebrow">Use cases &amp; client outcomes</p>
      <h2>${h2}</h2>
      <p class="sec-lead">${lead}</p>
    </div>
    <ul class="case-grid">${items.map((c) => `<li class="case">
      <p class="case-tag">${esc(c.tag)}</p>
      <h3>${esc(c.title)}</h3>
      <p class="case-ch"><strong>Challenge:</strong> ${c.challenge}</p>
      <p class="case-ap"><strong>What HCP did:</strong> ${c.approach}</p>
      <p class="case-re"><strong>Result:</strong> ${c.result}</p>
    </li>`).join('')}</ul>
    <p class="case-note">Outcomes describe representative client engagements. Results vary by organization
    size, specialty and the state of your existing compliance program.</p>
  </div>
</section>`;
}

/* ------------------------------------------------------------------- *
 * AUDIT-REQUIRED SECTION 3 — FAQ / objection handling
 * (paired with FAQPage schema emitted by layout.mjs)
 * ------------------------------------------------------------------- */
export function faqSection({ h2, lead, faqs }) {
  return `<section class="sec sec-faq" id="faq">
  <div class="wrap wrap-narrow">
    <div class="sec-head">
      <p class="eyebrow">Questions &amp; common objections</p>
      <h2>${h2 || 'Frequently asked questions'}</h2>
      ${lead ? `<p class="sec-lead">${lead}</p>` : ''}
    </div>
    <div class="faq-list">${faqs.map((f, i) => `<details class="faq"${i === 0 ? ' open' : ''}>
      <summary><span>${esc(f.q)}</span>${icon('plus', 'ic ic-sm faq-ic')}</summary>
      <div class="faq-a">${f.a.startsWith('<') ? f.a : `<p>${f.a}</p>`}</div>
    </details>`).join('')}</div>
    <p class="faq-more">Still deciding? Talk to a compliance advisor at
      <a href="tel:${site.phoneE164}">${site.phoneDisplay}</a> or
      <a href="/contact/">schedule a free consultation</a>.</p>
  </div>
</section>`;
}

/* Testimonial quotes -------------------------------------------------- */
export function quotes(items) {
  return `<ul class="quotes">${items.map((q) => `<li><figure class="quote">
  <blockquote><p>${q.text}</p></blockquote>
  ${q.portrait ? `<figcaption class="quote-person">
    <span class="quote-portrait">${img({ src: q.portrait, alt: `${q.name}, ${q.role}`, title: q.name, width: 425, height: 700 })}</span>
    <span>${esc(q.name)}<span>${esc(q.role)}</span></span>
  </figcaption>` : `<figcaption>${esc(q.name)}<span>${esc(q.role)}</span></figcaption>`}
</figure></li>`).join('')}</ul>`;
}

/* Closing call to action ---------------------------------------------- */
export function cta({ h2, text, primary, secondary }) {
  return `<section class="sec sec-cta">
  <div class="wrap wrap-narrow cta-in">
    <h2>${h2}</h2>
    <p>${text}</p>
    <p class="cta-btns">
      <a class="btn btn-accent" href="${primary.href}">${esc(primary.label)}</a>
      ${secondary ? `<a class="btn btn-outline-light" href="${secondary.href}">${esc(secondary.label)}</a>` : ''}
    </p>
    <p class="cta-alt">Prefer to talk it through? Call <a href="tel:${site.phoneE164}">${site.phoneDisplay}</a>.</p>
  </div>
</section>`;
}

/* Related links / internal linking ------------------------------------ */
export function related(items, heading = 'Keep exploring') {
  return `<section class="sec sec-rel">
  <div class="wrap">
    <h2 class="rel-h">${esc(heading)}</h2>
    <ul class="rel-list">${items.map((r) =>
      `<li><a href="${r.href}"><strong>${esc(r.label)}</strong><span>${esc(r.text)}</span>${icon('arrow', 'ic ic-xs')}</a></li>`).join('')}</ul>
  </div>
</section>`;
}

export { img, icon };

/* Image-led program pillar (HIPAA / OSHA / Corporate / LMS). */
export function pillar({ tag, title, text, image, badgeIcon, items, href, cta }) {
  return `<article class="pillar">
  <div class="pillar-media${image.cut ? ' pillar-media-cut' : ''}">
    ${img({ src: image.src, alt: image.alt, title: image.title, width: image.width, height: image.height })}
    ${badgeIcon ? `<span class="pillar-badge">${img({ src: badgeIcon, alt: '', title: esc(title) })}<span>${esc(tag)}</span></span>` : ''}
  </div>
  <div class="pillar-body">
    <h3>${esc(title)}</h3>
    <p>${text}</p>
    ${checklist(items)}
    <a class="btn btn-ghost" href="${href}">${esc(cta)}</a>
  </div>
</article>`;
}

/* Additional-services row using the brand line icons. */
export function services(items) {
  return `<ul class="svcs">${items.map((s) => `<li><a href="${s.href}">
  <span class="svc-ic">${img({ src: s.icon, alt: '', title: esc(s.title) })}</span>
  <strong>${esc(s.title)}</strong>
  <span>${esc(s.text)}</span>
</a></li>`).join('')}</ul>`;
}

/* A framed photograph or a cut-out subject on a colour field. */
export function media({ src, alt, title, width, height, cut = false, dark = false, cls = '' }) {
  const inner = img({ src, alt, title, width, height });
  return cut
    ? `<div class="media-cut${dark ? ' media-cut-dark' : ''} ${cls}">${inner}</div>`
    : `<div class="media-frame ${cls}">${inner}</div>`;
}
