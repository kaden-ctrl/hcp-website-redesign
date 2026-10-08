import { esc } from '../layout.mjs';
import { suite } from '../site.mjs';

/* Design options for the product section, rendered in the real stylesheet
   so what gets picked is what gets built. noindex, and out of the sitemap.
   Delete this file once a direction is chosen. */

const defense = suite.filter((p) => p.side === 'defense');
const offense = suite.filter((p) => p.side === 'offense');
const SIDE = {
  defense: { label: 'Defense', line: 'Protect the program' },
  offense: { label: 'Offense', line: 'Protect the revenue' }
};

/* A -- the rows are already the two sides; this just says so, and flips the
   offense row to navy so the split is visible before it is read. */
function optA() {
  const row = (list, key, invert) => `
    <div class="oa-side">
      <div class="oa-head">
        <span class="oa-label${invert ? ' oa-label-on' : ''}">${SIDE[key].label}</span>
        <span class="oa-rule"></span>
        <span class="oa-line">${SIDE[key].line}</span>
      </div>
      <ul class="oa-grid">
        ${list.map((p) => `<li class="oa-card${invert ? ' oa-card-dark' : ''}">
          <span class="oa-name">${esc(p.name)}</span>
          <span class="oa-kind">${esc(p.kind)}</span>
          <p>${esc(p.blurb)}</p>
          <a href="${p.href}">Explore ${esc(p.name)}</a>
        </li>`).join('')}
      </ul>
    </div>`;
  return row(defense, 'defense', false) + row(offense, 'offense', true);
}

/* B -- two columns with a lit seam between them. The products stop being
   cards and become rows, so the column itself is the object. */
function optB() {
  const col = (list, key) => `
    <div class="ob-col ob-${key}">
      <span class="ob-label">${SIDE[key].label}</span>
      <span class="ob-sub">${SIDE[key].line}</span>
      <ul>
        ${list.map((p) => `<li>
          <span class="ob-name">${esc(p.name)}</span>
          <span class="ob-kind">${esc(p.kind)}</span>
          <p>${esc(p.blurb)}</p>
          <a href="${p.href}">Explore ${esc(p.name)}</a>
        </li>`).join('')}
      </ul>
    </div>`;
  return `<div class="ob-split">${col(defense, 'defense')}<span class="ob-seam" aria-hidden="true"></span>${col(offense, 'offense')}</div>`;
}

/* C -- no boxes at all. Scale does the work: the name is the largest thing
   on the page, the side label sits behind it as a watermark. */
function optC() {
  const block = (list, key) => `
    <div class="oc-block oc-${key}">
      <span class="oc-ghost" aria-hidden="true">${SIDE[key].label}</span>
      <span class="oc-tag">${SIDE[key].label} &middot; ${SIDE[key].line}</span>
      ${list.map((p) => `<article class="oc-row">
        <h3><a href="${p.href}">${esc(p.name)}</a></h3>
        <span class="oc-kind">${esc(p.kind)}</span>
        <p>${esc(p.blurb)}</p>
        <p class="oc-items">${p.items.map(esc).join(' &middot; ')}</p>
      </article>`).join('')}
    </div>`;
  return block(defense, 'defense') + block(offense, 'offense');
}

/* D -- unequal on purpose. SHIELD and SENTRY carry the business, so they get
   the room; FCO and DILIGENCE sit under them as the specialist pair. */
function optD() {
  const lead = (p, key) => `
    <div class="od-lead od-${key}">
      <span class="od-label">${SIDE[key].label}</span>
      <span class="od-name">${esc(p.name)}</span>
      <span class="od-kind">${esc(p.kind)}</span>
      <p class="od-tag">${esc(p.tagline)}</p>
      <ul>${p.items.slice(0, 3).map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
      <a href="${p.href}">Explore ${esc(p.name)}</a>
    </div>`;
  const sub = (p) => `
    <div class="od-sub">
      <span class="od-sub-name">${esc(p.name)}</span>
      <span class="od-sub-kind">${esc(p.kind)}</span>
      <p>${esc(p.blurb)}</p>
      <a href="${p.href}">Explore ${esc(p.name)}</a>
    </div>`;
  return `
    <div class="od-leads">${lead(defense[0], 'defense')}${lead(offense[0], 'offense')}</div>
    <div class="od-subs">${sub(defense[1])}${sub(offense[1])}</div>`;
}

const OPTIONS = [
  { k: 'A', name: 'Labelled sides',
    note: 'The smallest change. Your two rows already are the two sides, so this names them and flips offense to navy. The split is visible before it is read, and nothing else about the section moves.',
    html: optA, cls: 'oa' },
  { k: 'B', name: 'Two columns, lit seam',
    note: 'Defense and offense face each other across a lit divide. The products stop being cards and become rows, so the column is the object rather than four tiles. Reads as a diagram.',
    html: optB, cls: 'ob' },
  { k: 'C', name: 'Typographic, no boxes',
    note: 'The boxes come off entirely and scale does the work: product names at four times body size, the side label ghosted behind them. Most different from the rest of the page, which is the point.',
    html: optC, cls: 'oc' },
  { k: 'D', name: 'Flagship and specialist',
    note: 'Unequal on purpose. SHIELD and SENTRY get the room because they carry the business; FCO and DILIGENCE sit beneath as the specialist pair. Hierarchy instead of a flat grid.',
    html: optD, cls: 'od' }
];

const body = `
<section class="sec sec-tight field">
  <div class="wrap">
    <div class="sec-head">
      <h1>Four directions for the product section</h1>
      <p class="sec-lead">Each one below is the same four products and the same copy, rendered in the real
      stylesheet. Tell me a letter and I will build it out, then carry the language into the other sections.</p>
    </div>
  </div>
</section>

${OPTIONS.map((o, i) => `
<section class="sec ${i % 2 ? 'sec-soft solid' : 'field'} opt-sec">
  <div class="wrap">
    <div class="opt-head">
      <span class="opt-k">Option ${o.k}</span>
      <div>
        <h2>${esc(o.name)}</h2>
        <p>${esc(o.note)}</p>
      </div>
    </div>
    <div class="opt-stage ${o.cls}">${o.html()}</div>
  </div>
</section>`).join('')}
`;

export default {
  path: '/design-options/',
  title: 'Product section: four directions | HCP',
  description: 'Four design directions for the product section of the homepage, rendered in the real stylesheet for comparison before one is chosen and built.',
  noindex: true,
  body
};
