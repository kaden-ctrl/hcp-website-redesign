import { esc } from '../layout.mjs';

/* Replacements for the struck-through list in section 01. Rendered in the
   real stylesheet so the pick is made against what would ship.
   noindex, out of the sitemap. Delete once a direction is chosen. */

const TOOLS = [
  'A separate learning system',
  'A policy tool',
  'An incident tracker',
  'A hotline vendor',
  'A spreadsheet nobody owns'
];

/* What each one actually costs you, for the options that need evidence
   rather than a complaint. */
const COST = ['Its own login', 'Its own export', 'Its own audit trail',
              'Its own invoice', 'Nobody owns it'];

const NOTE = 'Fine until somebody asks for proof on a deadline.';

/* A -- a brace collapses the five into one. The device makes the argument
   structurally, so no line has to be defaced to carry it. */
const optA = () => `
  <div class="xa">
    <div class="xa-list">
      <span class="xa-lbl">What most organizations run</span>
      <ul>${TOOLS.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
    </div>
    <div class="xa-brace" aria-hidden="true"></div>
    <div class="xa-one">
      <span class="xa-lbl xa-lbl-on">What replaces it</span>
      <b>SHIELD</b>
      <p>${esc(NOTE)}</p>
    </div>
  </div>`;

/* B -- the tally. Five is the number that matters, so the list is evidence
   rather than grievance: each row says what it separately costs. */
const optB = () => `
  <div class="xb">
    <div class="xb-head">
      <span class="xb-fig">5</span>
      <div>
        <b>systems, five logins, five places to look</b>
        <p>${esc(NOTE)}</p>
      </div>
    </div>
    <ol class="xb-rows">
      ${TOOLS.map((t, i) => `<li>
        <span class="xb-n">${String(i + 1).padStart(2, '0')}</span>
        <span class="xb-t">${esc(t)}</span>
        <span class="xb-c">${esc(COST[i])}</span>
      </li>`).join('')}
    </ol>
  </div>`;

/* C -- the pile. Nothing lines up, because that is the complaint. The one
   aligned block beside it is the only thing in the figure that does. */
const optC = () => `
  <div class="xc">
    <div class="xc-heap">
      <span class="xc-lbl">What most organizations run</span>
      <ul>${TOOLS.map((t, i) => `<li style="--o:${i}">${esc(t)}</li>`).join('')}</ul>
    </div>
    <div class="xc-block">
      <b>One system</b>
      <p>One login, one completion view, one documentation vault.</p>
      <span class="xc-note">${esc(NOTE)}</span>
    </div>
  </div>`;

/* D -- restraint. No device at all: the five sit quietly in small type and
   one figure carries the weight. */
const optD = () => `
  <div class="xd">
    <p class="xd-say">Compliance ends up spread across
      <b>five separate systems</b>, and the evidence with it.</p>
    <ul class="xd-list">${TOOLS.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
    <p class="xd-note">${esc(NOTE)}</p>
  </div>`;

const OPTIONS = [
  { k: 'A', name: 'The brace', cls: 'xa', html: optA,
    note: 'A brace gathers the five and points at the one. The device carries the argument, so no line has to be struck through to make it.' },
  { k: 'B', name: 'The tally', cls: 'xb', html: optB,
    note: 'Five is the number that matters, so it leads at display size. Each row then says what it separately costs you, which turns a list of complaints into evidence.' },
  { k: 'C', name: 'The pile', cls: 'xc', html: optC,
    note: 'Nothing in the stack lines up, because not lining up is the whole problem. The block beside it is the only aligned thing in the figure.' },
  { k: 'D', name: 'Quiet inventory', cls: 'xd', html: optD,
    note: 'No device at all. One sentence does the work, the five sit under it in small type, and the restraint is the difference from everything around it.' }
];

const body = `
<section class="sec sec-tight field">
  <div class="wrap">
    <div class="sec-head">
      <h1>Four replacements for the struck list</h1>
      <p class="sec-lead">Same five tools, same closing line, rendered in the real stylesheet.
      Tell me a letter and I will put it on the homepage.</p>
    </div>
  </div>
</section>

${OPTIONS.map((o, i) => `
<section class="sec ${i % 2 ? 'sec-soft solid' : 'field'}">
  <div class="wrap">
    <div class="opt-head">
      <span class="opt-k">Option ${o.k}</span>
      <div><h2>${esc(o.name)}</h2><p>${esc(o.note)}</p></div>
    </div>
    ${o.html()}
  </div>
</section>`).join('')}
`;

export default {
  path: '/design-options/',
  title: 'Section 01: four replacements | HCP',
  description: 'Four design replacements for the struck-through tool list in the first homepage section, rendered in the real stylesheet for comparison.',
  noindex: true,
  body
};
