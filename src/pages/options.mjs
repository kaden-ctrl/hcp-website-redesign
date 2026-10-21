import { esc } from '../layout.mjs';

/* Replacements for the struck list. The current version runs a 2px rule
   through every glyph, which measures fine for contrast and still reads
   badly: contrast was the wrong thing to measure. None of these put a line
   through the words.
   noindex, out of the sitemap. Delete once a direction is chosen. */

const TOOLS = [
  'A separate learning system',
  'A policy tool',
  'An incident tracker',
  'A hotline vendor',
  'A spreadsheet nobody owns'
];

const REPLACED = ['Learning', 'Policies', 'Incidents', 'Hotline', 'Evidence'];

/* The closing line, in four registers. The current one is too indirect:
   it has to be read twice to land. */
const LINES = [
  ['Current', 'Fine until somebody asks for proof on a deadline.'],
  ['Plainer', 'It works until an auditor gives you two weeks to produce the evidence.'],
  ['Blunter', 'Then the request arrives, and the proof is in five places.'],
  ['Concrete', 'An OIG letter gives you 30 days. Five systems do not add up to one answer.']
];

/* A -- superseded, not crossed out. Each tool is dimmed and carries the
   thing that replaces it, so the eye reads a swap rather than a deletion. */
const optA = () => `
  <div class="xa">
    <span class="xa-lbl">What most organizations run</span>
    <ul class="xa-list">
      ${TOOLS.map((t, i) => `<li>
        <span class="xa-old">${esc(t)}</span>
        <span class="xa-arrow" aria-hidden="true">&rarr;</span>
        <span class="xa-new">${esc(REPLACED[i])}</span>
      </li>`).join('')}
    </ul>
    <p class="xa-note">All five live in SHIELD, in one place, with dated records.</p>
  </div>`;

/* B -- the count leads. One figure carries the argument and the tools sit
   under it as plain text, fully legible, no device at all. */
const optB = () => `
  <div class="xb">
    <div class="xb-head">
      <span class="xb-fig">5</span>
      <div>
        <b>systems. Five logins. Five places to look.</b>
        <p>A learning system, a policy tool, an incident tracker, a hotline vendor,
        and a spreadsheet nobody owns.</p>
      </div>
    </div>
  </div>`;

/* C -- the ledger. Two columns facing each other: what you run now, what
   replaces it. Opposition does the work instead of typography. */
const optC = () => `
  <div class="xc">
    <div class="xc-col">
      <span class="xc-lbl">Today</span>
      <ul>${TOOLS.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      <p class="xc-foot">Five contracts, five renewal dates, five exports.</p>
    </div>
    <span class="xc-seam" aria-hidden="true"></span>
    <div class="xc-col xc-on">
      <span class="xc-lbl xc-lbl-on">With SHIELD</span>
      <ul>${REPLACED.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      <p class="xc-foot">One login, one completion view, one documentation vault.</p>
    </div>
  </div>`;

/* D -- struck, but beside the word rather than through it. Keeps the
   crossed-off reading that the current version was after, without putting
   anything across the letterforms. */
const optD = () => `
  <div class="xd">
    <span class="xd-lbl">What most organizations run</span>
    <ul class="xd-list">
      ${TOOLS.map((t) => `<li><span class="xd-mark" aria-hidden="true"></span>${esc(t)}</li>`).join('')}
    </ul>
    <p class="xd-note">Every one of them replaced by a single system.</p>
  </div>`;

const OPTIONS = [
  { k: 'A', name: 'Superseded, not crossed out', cls: 'xa', html: optA,
    note: 'Each tool is dimmed and paired with what replaces it. The eye reads a swap rather than a deletion, and nothing sits on top of the words.' },
  { k: 'B', name: 'The count leads', cls: 'xb', html: optB,
    note: 'One figure carries the argument; the tools become a plain sentence underneath. No device at all, which makes it the most legible and the least decorated.' },
  { k: 'C', name: 'The ledger', cls: 'xc', html: optC,
    note: 'Two columns facing across a lit seam: what you run today, what replaces it. Opposition does the work instead of typography.' },
  { k: 'D', name: 'Struck beside, not through', cls: 'xd', html: optD,
    note: 'Keeps the crossed-off reading the current version wanted, with the mark to the left of each item instead of across the letterforms.' }
];

const body = `
<section class="sec sec-tight field">
  <div class="wrap">
    <div class="sec-head">
      <h1>Four replacements for the struck list</h1>
      <p class="sec-lead">None of these run a line through the words. Tell me a letter and a
      closing line, and I will put it on the homepage.</p>
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

<section class="sec field">
  <div class="wrap">
    <div class="opt-head">
      <span class="opt-k">Closing line</span>
      <div><h2>And the sentence underneath</h2>
      <p>You asked what the current one means: it means the scattered setup works day to day,
      until someone demands documentation by a date. If it needs explaining, it is too indirect.</p></div>
    </div>
    <ul class="xline">
      ${LINES.map(([k, t]) => `<li><span class="xline-k">${esc(k)}</span><p>${esc(t)}</p></li>`).join('')}
    </ul>
  </div>
</section>
`;

export default {
  path: '/design-options/',
  title: 'Section 01: legibility options | HCP',
  description: 'Four replacements for the struck-through tool list on the homepage, none of which run a rule through the text, plus four versions of the closing line.',
  noindex: true,
  body
};
