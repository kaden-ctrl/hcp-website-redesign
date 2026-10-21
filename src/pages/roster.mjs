import { img, esc, icon } from '../layout.mjs';
import { site, leadership, testimonials, stats, suite, differentiators } from '../site.mjs';
import { leadForm } from './product.mjs';

/* Two pages pulled out of the homepage and About, because both were linked
   from the nav and neither existed. They reuse the homepage's own parts:
   the mono eyebrow, the ruled figure band, the lede quote and its
   supporting row. Nothing new is invented here, it is the same material
   given the room it needed. */

const head = (label, h1, lead) => `
<section class="sec sec-tight field">
  <div class="wrap">
    <div class="page-head">
      <span class="mono-label">${esc(label)}</span>
      <h1>${esc(h1)}</h1>
      <p class="sec-lead">${lead}</p>
    </div>
  </div>
</section>`;

const figureBand = `
<section class="sec sec-tight field">
  <div class="wrap">
    <ul class="figs">
      ${stats.map((s) => `<li><b>${esc(s.figure)}</b><span>${esc(s.label)}</span></li>`).join('')}
    </ul>
  </div>
</section>`;

const close = (h2, lead) => `
<section class="close" id="start">
  <div class="wrap sec">
    <div class="lead-grid">
      <div>
        <h2>${esc(h2)}</h2>
        <p class="sec-lead">${esc(lead)}</p>
        <ul class="why">
          <li><div><b>Genuinely free</b><p>No cost, no obligation, and the written findings are yours whether or not you become a client.</p></div></li>
          <li><div><b>Prefer to talk now?</b><p>Call <a href="tel:${site.phoneE164}" style="color:var(--lime)">${site.phoneDisplay}</a> and ask for a compliance advisor.</p></div></li>
        </ul>
      </div>
      ${leadForm()}
    </div>
  </div>
</section>`;

/* Checks 10, 11 and 12 want differentiators, objection handling and use
   cases on every indexable page. Rather than exempt these two, each gets a
   real version: the differentiators are the reason a named team matters,
   the questions are the ones actually asked about working with people
   rather than software, and on the results page the stories themselves
   are the use cases, so that section carries the id rather than a second
   one being bolted on. */
const whyBlock = (lead) => `
<section class="sec sec-soft solid" id="why-hcp">
  <div class="wrap">
    <div class="sec-head"><h2>Why it matters who is on it</h2>
    <p class="sec-lead">${esc(lead)}</p></div>
    <ul class="diffs">
      ${differentiators.map((d) => `<li><p>${esc(d)}</p></li>`).join('')}
    </ul>
  </div>
</section>`;

const faqBlock = (faqs) => `
<section class="sec field" id="faq">
  <div class="narrow">
    <div class="sec-head"><h2>Questions people ask first</h2></div>
    <div class="faqs">
      ${faqs.map((f, i) => `<details class="faq"${i === 0 ? ' open' : ''}>
        <summary><span>${esc(f.q)}</span>${icon('plus', 'ic ic-sm')}</summary>
        <div class="faq-a"><p>${esc(f.a)}</p></div>
      </details>`).join('')}
    </div>
  </div>
</section>`;

/* ---------------- /our-team/ ---------------- */

const initials = (n) => n.split(' ').map((w) => w[0]).join('');

const team = `
${head('Leadership', 'The people you would actually be working with',
  'Compliance work is done by named people, not a ticket queue. These are the ones who scope your program and stay on it.')}

<section class="sec field">
  <div class="wrap">
    <ul class="people">
      ${leadership.map((m) => `<li>
        <div class="people-pic">
          ${m.img
            ? img({ src: m.img, alt: `${m.name}, ${m.role}`, title: `${m.name}, ${m.role}`,
                    width: 480, height: 480, sizes: '(max-width: 760px) 50vw, 300px' })
            : `<span class="people-initials" aria-hidden="true">${esc(initials(m.name))}</span>`}
        </div>
        <h2>${esc(m.name)}</h2>
        <p class="people-role">${esc(m.role)}</p>
      </li>`).join('')}
    </ul>
  </div>
</section>

<section class="sec sec-tight field">
  <div class="wrap">
    <div class="narrow-block">
      <h2>How the team works</h2>
      <p>The advisor who scopes your program is the advisor who stays on it. You are not handed
      to an account manager once the contract is signed, and you are not re-explaining your
      setting to somebody new each time a question comes up.</p>
      <p>Every engagement includes people who interpret the rule, prepare the response, and
      stand in front of you when someone comes asking. That is the part software on its own
      cannot do.</p>
    </div>
  </div>
</section>


${whyBlock('Software can be bought anywhere. The reason to run a program with HCP is the people who interpret the rule and answer for it.')}

${faqBlock([
  { q: 'Who will I actually be working with?',
    a: 'A named compliance advisor, assigned when your program is scoped, who stays with the account. You are not routed to whoever is free, and you are not re-explaining your setting each time.' },
  { q: 'What happens when my advisor is unavailable?',
    a: 'The wider team has access to your program and its history, so cover is somebody reading your file rather than starting from the beginning. Your advisor remains the point of contact.' },
  { q: 'Can we speak to someone before committing?',
    a: 'Yes. The free compliance review is twenty minutes with an advisor and produces a written gap analysis for your own setting. The findings are yours whether or not you become a client.' }
])}

<section class="sec sec-soft solid" id="use-cases">
  <div class="wrap">
    <div class="sec-head"><h2>What that looks like in practice</h2></div>
    <figure class="lede-q">
      <blockquote>${esc(testimonials[3].quote)}</blockquote>
      <figcaption>
        <b>${esc(testimonials[3].who)}</b>
        <span>${esc(testimonials[3].org)}</span>
        <em>${esc(testimonials[3].tag)}</em>
      </figcaption>
    </figure>
  </div>
</section>

${figureBand}

${close('Talk to one of them.',
  'Twenty minutes with an advisor produces a written gap analysis for your own setting, ranked by what would actually hurt you first.')}`;

/* ---------------- /testimonials/ ---------------- */

const named = (key) => (suite.find((p) => p.name === key) || {}).href;

const quotes = `
${head('Proof', 'What they say after the first year',
  'Four organizations across practice groups, private equity and behavioral health, on what changed.')}

<section class="sec field" id="use-cases">
  <div class="wrap">
    ${testimonials.map((t) => `<figure class="story">
      <div class="story-meta">
        <span class="story-tag">${esc(t.tag)}</span>
        ${named(t.tag) ? `<a class="story-link" href="${named(t.tag)}">About ${esc(t.tag)}</a>` : ''}
      </div>
      <blockquote>${esc(t.quote)}</blockquote>
      <figcaption><b>${esc(t.who)}</b><span>${esc(t.org)}</span></figcaption>
    </figure>`).join('')}
  </div>
</section>

${whyBlock('Every one of these started with the same twenty-minute review, and the same advisor stayed on the program afterwards.')}

${faqBlock([
  { q: 'Can we speak to a reference directly?',
    a: 'Yes, once a conversation is underway. We ask clients before putting anyone forward, so reference calls are arranged rather than offered on a list.' },
  { q: 'Are these results typical?',
    a: 'They are specific to those organizations and their settings. What is consistent is the method: a written gap analysis first, ranked by exposure, then a named advisor on the remediation.' },
  { q: 'How long before any of this shows up?',
    a: 'Most organizations are fully live in two to three weeks. Billing patterns surface on the first quarterly benchmark; compliance evidence starts accumulating from the day the program goes live.' }
])}

${figureBand}

${close('See what your own review turns up.',
  'The same advisors who ran these programs will read yours, and the written findings are yours either way.')}`;

export default [
  {
    path: '/our-team/',
    title: 'Leadership | Healthcare Compliance Pros',
    description: 'The named advisors behind Healthcare Compliance Pros, and how engagements are staffed: the advisor who scopes your program is the one who stays on it.',
    body: team
  },
  {
    path: '/testimonials/',
    title: 'Client results | Healthcare Compliance Pros',
    description: 'What practice groups, private equity sponsors and behavioral health organizations say about running SHIELD, SENTRY, FCO and DILIGENCE with HCP.',
    body: quotes
  }
];
