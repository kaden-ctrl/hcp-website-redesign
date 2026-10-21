import { esc } from '../layout.mjs';
import { stats, sevenElements, testimonials, site } from '../site.mjs';

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

/* ---------------- Part 1: the OIG seven elements ----------------
   Seven is an odd number and the block is currently a two column grid, so
   the last cell is an empty hole and the items that wrap to two lines pull
   the two columns out of line with each other. Each of these answers that
   a different way. */

const n2 = (i) => String(i + 1).padStart(2, '0');

const sevenA = () => `
  <ul class="sv7a">
    ${sevenElements.map((e, i) => `<li><b>${n2(i)}</b><span>${esc(e)}</span></li>`).join('')}
  </ul>`;

const sevenB = () => `
  <ul class="sv7b">
    ${sevenElements.map((e, i) => `<li><b>${n2(i)}</b><span>${esc(e)}</span></li>`).join('')}
  </ul>`;

const sevenC = () => `
  <ol class="seven">
    ${sevenElements.map((e) => `<li><span>${esc(e)}</span></li>`).join('')}
  </ol>`;

const sevenD = () => `
  <ul class="sv7d">
    ${sevenElements.map((e, i) => `<li><b>${n2(i)}</b><span>${esc(e)}</span></li>`).join('')}
  </ul>`;

const SEVEN = [
  { k: 'A', name: 'One band of seven', html: sevenA,
    note: 'Seven equal columns across the full width, numeral above label, divided by hairlines. The odd count stops being a problem because the row is the shape, so nothing is left over and there is no second column to fall out of line with.' },
  { k: 'B', name: 'Open four and three', html: sevenB,
    note: 'No rules at all, just type and space. Four across, then three, with the short second row reading as deliberate rather than as a gap. The most open of the four and the one that looks least like a table.' },
  { k: 'C', name: 'The thread', html: sevenC,
    note: 'A single lime hairline down the left with a tick at each element. The seven read as a program running in order rather than as an inventory of parts.' },
  { k: 'D', name: 'The running index', html: sevenD,
    note: 'Set as one continuous run that wraps like prose, the lime numerals doing the separating. The lightest of the four and the one that takes the least height.' }
];

const sevenOptions = SEVEN.map((o) => `
<section class="sec sec-tight">
  <div class="wrap">
    <div class="opt-head">
      <span class="opt-k">Seven ${o.k}</span>
      <div><h2>${esc(o.name)}</h2><p>${esc(o.note)}</p></div>
    </div>
    <div class="seven-block">
      <h3 style="margin:0 0 .4rem">The seven elements. Covered.</h3>
      <p class="sec-lead" style="font-size:1rem;margin-bottom:1.5rem">The Office of Inspector General
      defines what an effective compliance program requires. SHIELD delivers all seven.</p>
      ${o.html()}
    </div>
  </div>
</section>`).join('');

/* ---------------- Part 2: filling the right of Seven C ----------------
   C is one narrow column, so the right half of the page sits empty beside
   it. Four ways to use that half. None of them adds a panel or a fill,
   and only one of them needs copy that does not already exist.

   The element descriptions in the third are plain restatements of the
   public OIG framework, written here rather than taken from the client's
   SHIELD deck: that deck's seven element detail is flagged draft
   throughout, with its own authors asking for compliance review before
   anything goes public. These still need their sign-off before launch. */

const ELEMENT_DETAIL = [
  'Standards of conduct and the policies that put them into practice, written for your setting and acknowledged by the people they bind.',
  'A named compliance officer with the authority to act, and a governing body that actually reviews what the officer reports.',
  'Role appropriate training for everyone the rule touches, assigned on a schedule and recorded as it is completed.',
  'A route for staff to raise a concern, including anonymously, and a documented policy that nobody is punished for using it.',
  'Published consequences applied the same way every time, because a standard nobody enforces is not a standard.',
  'Auditing against your own risk areas on a schedule, with the findings written down while they are still findings.',
  'Investigating what surfaces, correcting it, and keeping the record of both, which is the part an investigator asks to see.'
];

const threadPlain = `
  <ol class="seven">
    ${sevenElements.map((e) => `<li><span>${esc(e)}</span></li>`).join('')}
  </ol>`;

const threadPick = `
  <ol class="seven seven-pick">
    ${sevenElements.map((e, i) => `<li>
      <label for="sv7p${i + 1}">
        <input class="sv7pick" type="radio" name="sv7pick" id="sv7p${i + 1}"${i === 0 ? ' checked' : ''}>
        <b>${n2(i)}</b><span>${esc(e)}</span>
      </label>
    </li>`).join('')}
  </ol>`;

const shield = testimonials[0];

const RIGHT = [
  { k: '1', name: 'The heading moves across', cls: 'sv7r-said',
    note: 'The heading and the OIG sentence leave the top and sit opposite the thread, with a link through to SHIELD underneath. No new copy at all, and the section stops being a column with a title over it.',
    left: threadPlain,
    right: `<div class="sv7r-said">
      <h3>The seven elements. Covered.</h3>
      <p>The Office of Inspector General defines what an effective compliance program requires.
      SHIELD delivers all seven, in one place, with the dated records to show for each.</p>
      <a class="sv7r-link" href="/compliance-solution/">How SHIELD runs them</a>
    </div>` },

  { k: '2', name: 'Proof beside the program', cls: 'sv7r-proof',
    note: 'The right side carries a client on what changed, and the two figures that bear on it. Everything here is already on the site, so it costs nothing to approve.',
    left: threadPlain,
    right: `<div class="sv7r-proof">
      <figure style="margin:0">
        <blockquote>${esc(shield.quote)}</blockquote>
        <figcaption><b>${esc(shield.who)}</b>${esc(shield.org)}</figcaption>
      </figure>
      <ul class="sv7r-figs">
        ${stats.slice(0, 2).map((x) => `<li><b>${esc(x.figure)}</b><span>${esc(x.label)}</span></li>`).join('')}
      </ul>
    </div>` },

  { k: '3', name: 'The right side answers the left', cls: 'sv7r-detail',
    note: 'The thread becomes selectable and the right half says what that element actually requires. Click or arrow through it. This is the only one that needs new copy, and that copy is about regulatory requirements, so it needs the client to sign it off before launch.',
    left: threadPick,
    right: `<div class="sv7det">
      <span class="sv7det-lbl">What the element requires</span>
      ${ELEMENT_DETAIL.map((d, i) => `<p class="d${i + 1}">${esc(d)}</p>`).join('')}
    </div>` },

  { k: '4', name: 'The empty half becomes the ask (now live)', cls: 'seven-call',
    note: 'The dead space turns into the point of the section. Somebody reading a list of seven obligations is exactly the person who wants to know where they stand, and the nearest way to ask used to be the foot of the page. This is what the homepage runs now.',
    left: threadPlain,
    right: `<div class="seven-call">
      <h3>Which of the seven are you missing?</h3>
      <p>Twenty minutes with an advisor produces a written gap analysis against all seven,
      ranked by what would actually hurt you first. The findings are yours whether or not
      you become a client.</p>
      <a class="btn btn-primary" href="/contact/">Book the free review</a>
      <span class="seven-tel">Or call <a href="tel:${site.phoneE164}">${site.phoneDisplay}</a>
      and ask for a compliance advisor.</span>
    </div>` }
];

const rightOptions = RIGHT.map((o) => `
<section class="sec sec-tight">
  <div class="wrap">
    <div class="opt-head">
      <span class="opt-k">Right ${o.k}</span>
      <div><h2>${esc(o.name)}</h2><p>${esc(o.note)}</p></div>
    </div>
    <div class="seven-block">
      ${o.k === '1' ? '' : `<h3 style="margin:0 0 .4rem">The seven elements. Covered.</h3>
      <p class="sec-lead" style="font-size:1rem;margin-bottom:1.5rem">The Office of Inspector General
      defines what an effective compliance program requires. SHIELD delivers all seven.</p>`}
      <div class="seven-grid ${o.cls}">
        ${o.left}
        ${o.right}
      </div>
    </div>
  </div>
</section>`).join('');

/* ---------------- Part 3: the section 01 ground ---------------- */

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

/* ---------------- Part 4: the list inside section 01 ---------------- */

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

const body = `
<section class="sec sec-tight">
  <div class="wrap">
    <div class="page-head">
      <span class="mono-label">Review</span>
      <h1>Open design decisions</h1>
      <p class="sec-lead">Section 03 now runs Seven C, the thread, with Right 4 beside it: the
      empty half carries the free review. The other three right hand options are kept below,
      then the three seven treatments you did not pick, then the five section 01 grounds and
      three list treatments.</p>
    </div>
  </div>
</section>

<section class="sec sec-tight">
  <div class="wrap">
    <div class="opt-head">
      <span class="opt-k">The seven</span>
      <div><h2>Four ways to fill the right of C</h2>
      <p>The thread is one narrow column, so half the width sits empty beside it. None of these
      adds a panel or a fill, and only the third needs copy that does not already exist on the
      site. Right 4 is the one now live.</p></div>
    </div>
  </div>
</section>

${rightOptions}

<section class="sec sec-tight">
  <div class="wrap">
    <div class="opt-head">
      <span class="opt-k">For reference</span>
      <div><h2>The other three seven treatments</h2>
      <p>C is the one you picked and it is the first of these. A, B and D are kept here until
      the right hand side is settled.</p></div>
    </div>
  </div>
</section>

${sevenOptions}

<section class="sec sec-tight">
  <div class="wrap">
    <div class="opt-head">
      <span class="opt-k">The ground</span>
      <div><h2>The five section 01 grounds you did not pick</h2>
      <p>F is live. The rest are here in case you want to see them against the current section
      again before they are deleted.</p></div>
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
      Shown on plain ground so the treatment is the only thing being judged. The closing
      lines that used to sit under this section are gone with the line itself.</p></div>
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

`;

export default {
  path: '/design-options/',
  title: 'Open design decisions | HCP',
  description: 'Open design decisions for the homepage: four treatments for the OIG seven elements, plus the section 01 grounds and list treatments still on the table.',
  noindex: true,
  body
};
