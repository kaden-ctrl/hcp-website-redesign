import { esc, icon, img } from './layout.mjs';
import { site } from './site.mjs';

/* Hero -------------------------------------------------------------- */
export function hero({ eyebrow, h1, lead, bullets = [], primary, secondary, stat, variant = 'dark' }) {
  return `<section class="hero hero-${variant}">
  <div class="wrap hero-in">
    <div class="hero-copy">
      ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
      <h1>${h1}</h1>
      <p class="lead">${lead}</p>
      ${bullets.length ? `<ul class="hero-bullets">${bullets.map((b) => `<li>${icon('check', 'ic ic-sm')}<span>${b}</span></li>`).join('')}</ul>` : ''}
      <p class="hero-cta">
        <a class="btn btn-accent" href="${primary.href}">${esc(primary.label)}</a>
        ${secondary ? `<a class="btn btn-outline" href="${secondary.href}">${esc(secondary.label)}</a>` : ''}
      </p>
      ${stat ? `<p class="hero-trust">${icon('shield', 'ic ic-sm')}<span>${stat}</span></p>` : ''}
    </div>
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
  <figcaption>${esc(q.name)}<span>${esc(q.role)}</span></figcaption>
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
