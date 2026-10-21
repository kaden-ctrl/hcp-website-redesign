import { esc } from '../layout.mjs';
import { stats } from '../site.mjs';

/* Review page for homepage section 01, the "what is it" section with the
   struck list in it. Two separate decisions live here and they compose:
   the background the section sits on, and the list treatment inside it.

   Part one repeats the whole section six times, once per ground, with the
   section exactly as it ships today. The site's own fixed grid and aurora
   stay on, because the question is what a section ground does on top of
   the page ground, not what it looks like in isolation.

   Every ground is painted with layered `background` on the section itself
   rather than a pseudo-element. The previous version of this page used
   `::before{z-index:-1}` over an opaque section background: a negative
   z-index child of a positioned element that is not a stacking context
   paints below that element's own background, so five of the six textures
   were never visible and the page showed flat ground six times.

   noindex, out of the sitemap. Delete once a direction is chosen. */

const SCATTERED = [
  'A separate learning system',
  'A policy tool',
  'An incident tracker',
  'A hotline vendor',
  'A spreadsheet nobody owns'
];

const REPLACED = ['Learning', 'Policies', 'Incidents', 'Hotline', 'Evidence'];

/* ---------------- Part 1: the section ground ---------------- */

/* Section 01, reproduced. Same copy, same markup, same classes, so the
   only variable between the six is the ground underneath. */
const section01 = `
  <div class="sec-head">
    <h2>One platform that runs your compliance program and watches your billing.</h2>
    <p class="sec-lead">Healthcare Compliance Pros is a compliance and revenue integrity partner for
    healthcare providers. <strong>SHIELD</strong> runs the compliance program: policies, training, risk
    analysis and the documentation an investigator asks for. <strong>SENTRY</strong> watches the revenue
    side, benchmarking your claims every quarter against your specialty.</p>
  </div>

  <div class="recko">
    <div class="recko-was">
      <span class="recko-lbl">What most organizations run</span>
      <ul class="strike">
        ${SCATTERED.map((x) => `<li><span class="strike-mark" aria-hidden="true"></span>${esc(x)}</li>`).join('')}
      </ul>
      <p class="recko-note">Fine until somebody asks for proof on a deadline.</p>
    </div>
    <div class="recko-is">
      <span class="recko-lbl recko-lbl-on">What you run instead</span>
      <p class="recko-big">Your whole program, documented in one place.</p>
      <p>One platform, one login, one completion view across every location, with dated
      records generated as your team works rather than assembled after the request arrives.</p>
      <p class="recko-sig">SHIELD runs it. SENTRY watches the revenue. People stand behind both.</p>
    </div>
  </div>

  <ul class="figs">
    ${stats.map((s) => `<li><b>${esc(s.figure)}</b><span>${esc(s.label)}</span></li>`).join('')}
  </ul>`;

const GROUNDS = [
  ['a', 'Raised panel',
   'The section lifts off the page as one lighter slab, hairlines top and bottom. The simplest way to say this is a distinct part of the argument.'],
  ['b', 'Inset trough',
   'The opposite move. The section sinks below the page with the edges shaded, which reads quieter and keeps all the lift for the sections around it.'],
  ['c', 'Lit on the right',
   'Flat ground that brightens across the section from left to right, so the half carrying the answer is physically lighter than the half carrying the problem.'],
  ['d', 'Blueprint panel',
   'A raised panel with the column grid drawn inside it. The technical texture belongs to this section rather than running the length of the page.'],
  ['e', 'Edge glow, no panel',
   'No fill at all. Two soft glows bleed in from opposite corners over the page ground, so the section is marked by light rather than by a surface.'],
  ['f', 'Framed card (now live)',
   'The content sits inside a bordered panel with a lime top edge, inset from where the surrounding sections start. The strongest separation of the six, and the one now on the homepage.']
];

const groundOptions = GROUNDS.map(([k, name, note]) => `
<section class="sec sec-tight">
  <div class="wrap">
    <div class="opt-head">
      <span class="opt-k">Ground ${esc(k.toUpperCase())}</span>
      <div><h2>${esc(name)}</h2><p>${esc(note)}</p></div>
    </div>
  </div>
</section>

<section class="sec sec-loose s01 s01-${k}">
  <div class="wrap">
    ${k === 'f' ? `<div class="s01-card">${section01}</div>` : section01}
  </div>
</section>`).join('');

/* ---------------- Part 2: the list inside it ---------------- */

/* A -- superseded, not crossed out. Each tool is dimmed and carries the
   thing that replaces it, so the eye reads a swap rather than a deletion. */
const optA = () => `
  <div class="xa">
    <span class="xa-lbl">What most organizations run</span>
    <ul class="xa-list">
      ${SCATTERED.map((t, i) => `<li>
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
      <ul>${SCATTERED.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
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
      ${SCATTERED.map((t) => `<li><span class="xd-mark" aria-hidden="true"></span>${esc(t)}</li>`).join('')}
    </ul>
    <p class="xd-note">Every one of them replaced by a single system.</p>
  </div>`;

const LIST_OPTIONS = [
  { k: 'A', name: 'Superseded, not crossed out', html: optA,
    note: 'Each tool is dimmed and paired with what replaces it. The eye reads a swap rather than a deletion, and nothing sits on top of the words.' },
  { k: 'B', name: 'The count leads', html: optB,
    note: 'One figure carries the argument; the tools become a plain sentence underneath. No device at all, which makes it the most legible and the least decorated.' },
  { k: 'C', name: 'The ledger', html: optC,
    note: 'Two columns facing across a lit seam: what you run today, what replaces it. Opposition does the work instead of typography.' },
  { k: 'D', name: 'Struck beside, not through (now live)', html: optD,
    note: 'Keeps the crossed-off reading the old version wanted, with the mark to the left of each item instead of across the letterforms. This is what the homepage runs now.' }
];

/* The closing line, in four registers. The current one is too indirect:
   it has to be read twice to land. */
const LINES = [
  ['Current', 'Fine until somebody asks for proof on a deadline.'],
  ['Plainer', 'It works until an auditor gives you two weeks to produce the evidence.'],
  ['Blunter', 'Then the request arrives, and the proof is in five places.'],
  ['Concrete', 'An OIG letter gives you 30 days. Five systems do not add up to one answer.']
];

const body = `
<section class="sec sec-tight">
  <div class="wrap">
    <div class="page-head">
      <span class="mono-label">Section 01</span>
      <h1>Six grounds for one section</h1>
      <p class="sec-lead">The homepage now runs ground F with list treatment D: a framed panel
      with a lime top edge, and a mark beside each item rather than a rule through it. The five
      other grounds are below, then the three other list treatments and four versions of the
      closing line. Any of them can replace what is live in a minute.</p>
    </div>
  </div>
</section>

${groundOptions}

<section class="sec sec-tight">
  <div class="wrap">
    <div class="opt-head">
      <span class="opt-k">The list</span>
      <div><h2>Four treatments for that list</h2>
      <p>None of these run a rule through the words. D is the one now live on the homepage,
      because it keeps the crossed-off reading without competing with the column beside it.
      Shown on plain ground so the treatment is the only thing being judged.</p></div>
    </div>
  </div>
</section>

${LIST_OPTIONS.map((o) => `
<section class="sec sec-tight">
  <div class="wrap">
    <div class="opt-head">
      <span class="opt-k">List ${o.k}</span>
      <div><h2>${esc(o.name)}</h2><p>${esc(o.note)}</p></div>
    </div>
    ${o.html()}
  </div>
</section>`).join('')}

<section class="sec sec-tight">
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
  title: 'Section 01 options | HCP',
  description: 'Six background treatments for homepage section 01, each shown with the real section on top, plus four list treatments and four closing lines.',
  noindex: true,
  body
};
