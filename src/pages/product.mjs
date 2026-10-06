import { icon, img, esc } from '../layout.mjs';
import {
  site, suite, productDetail, sevenElements, stats, differentiators, testimonials,
  sentryLoop, sentryQuarters, sentryDirections, sentryCompare,
  fcoTimeline, diligenceStages
} from '../site.mjs';

/* Four product pages, four different pages.
   Each one is built around the shape of its own subject rather than from a
   shared stack of blocks: SHIELD is a console of modules, SENTRY is a
   quarterly cycle, FCO is a timeline of an engagement, DILIGENCE is a
   transaction. The audit still requires differentiators, use cases and an
   FAQ on each, so those are present, but implemented differently per page
   rather than pasted in identically. */

const FORM_FIELDS = `
  <div class="f-row f-row-2">
    <div><label for="name">Your name *</label><input id="name" name="name" type="text" autocomplete="name" required placeholder="Jane Whitfield"></div>
    <div><label for="organization">Organization *</label><input id="organization" name="organization" type="text" autocomplete="organization" required placeholder="Riverside Family Medicine"></div>
  </div>
  <div class="f-row f-row-2">
    <div><label for="email">Work email *</label><input id="email" name="email" type="email" autocomplete="email" required placeholder="jane@practice.com"></div>
    <div><label for="phone">Phone</label><input id="phone" name="phone" type="tel" autocomplete="tel" placeholder="(555) 123-4567"></div>
  </div>
  <div class="f-row f-row-2">
    <div><label for="staff">Staff size</label><select id="staff" name="staff">
      <option value="">Select...</option><option>1 to 10</option><option>11 to 50</option>
      <option>51 to 200</option><option>201 to 500</option><option>500+</option></select></div>
    <div><label for="need">Most urgent need</label><select id="need" name="need">
      <option value="">Select...</option><option>HIPAA compliance</option><option>OSHA compliance</option>
      <option>Corporate compliance</option><option>Billing and coding review</option>
      <option>Transaction diligence</option><option>Not sure yet</option></select></div>
  </div>
  <div class="f-row">
    <div><label for="notes">Anything we should know?</label>
    <textarea id="notes" name="notes" placeholder="Number of locations, any deadline you are working against..."></textarea></div>
  </div>
  <button class="btn btn-ink" type="submit" style="width:100%">Request my free review</button>
  <p class="f-note">We use your details only to respond to this request. See our
  <a href="/privacypolicy/">privacy policy</a>. Please do not include patient information.</p>`;

/* Written once, because it will be replaced wholesale by a HubSpot embed. */
export function leadForm(heading, sub) {
  return `<form class="lead-form f rv" data-lead="${site.email}" novalidate>
    <h3>${esc(heading || 'Request your free compliance review')}</h3>
    <p>${esc(sub || 'An advisor familiar with your setting will follow up, usually within one business day.')}</p>
    ${FORM_FIELDS}
  </form>`;
}

const faqsFor = (p) => {
  const shared = [
    { q: 'How fast can we be up and running?',
      a: 'Most organizations are fully live in two to three weeks. Your advisor does the heavy lifting: policy customization, staff roster, training assignment. Your team spends about three hours in total.' },
    { q: 'Do we have to take the whole suite?',
      a: 'No. The four products work as one platform when you take them together, but each is sold on its own. Most organizations start with the piece they are most exposed on and add from there.' },
    { q: 'What does it cost?',
      a: 'Pricing scales with the size of your organization and the products you use, so a four-provider group is not quoted an enterprise number. The compliance review that starts the conversation is free, and the written findings are yours whether or not you become a client.' }
  ];
  const own = {
    shield: [
      { q: 'We already have policies. Why would we need SHIELD?',
        a: 'Policies prove you wrote something. They do not prove your staff read them, that training happened on time, or that your risk analysis reflects the systems you actually run today. SHIELD generates dated evidence as your team works, so an audit request becomes a lookup rather than a scramble.' },
      { q: 'Does the training carry CME or CEU credit?',
        a: 'Yes. The library runs to more than 130 course titles with CME and CEU credit available, assigned automatically by role, with reminders that escalate and certificates stored against each person as they complete.' }
    ],
    sentry: [
      { q: 'What is downcoding, and why does it matter?',
        a: 'When a payer decides a provider bills higher-level visits more often than their peers, it may quietly reimburse some of those visits at a lower level. No notice is sent and there is rarely an appeal. Left undetected the pattern runs for six, nine or twelve months. Quarterly analytics find it in the quarter it starts.' },
      { q: 'How is this different from an annual coding audit?',
        a: 'An annual audit tells you what happened last year. Analytics run every quarter across every provider, audits rotate so each one is reviewed in turn, and guidance is built from your own findings rather than generic coding material.' }
    ],
    fco: [
      { q: 'How many hours do we get?',
        a: 'Up to ten hours a month of dedicated support, with additional hours available at $300 per hour. Compliance committee meetings run monthly for the first six months and quarterly after that.' },
      { q: 'Is this a person or a team?',
        a: 'A dedicated team of compliance professionals, with your officer as the primary liaison for staff, third parties and government agencies. The engagement scales to the organization, and works as interim cover as well as a long-term arrangement.' }
    ],
    diligence: [
      { q: 'How far back does the review go?',
        a: 'Twelve to twenty-four months of claims data, reviewed by CPC-certified coding specialists rather than sampled or inferred by a model.' },
      { q: 'Will the findings hold up with an underwriter?',
        a: 'The report is produced in the form representations and warranties underwriters expect, and comes with a post-close remediation roadmap so a finding becomes a plan rather than a surprise at closing.' }
    ]
  };
  return own[p.key].concat(shared);
};

/* ---------- per-product signature sections ---------- */

const signature = {
  // SHIELD reads as a console: four modules, each a panel of its own.
  shield: (p, d) => `
<section class="sec sec-loose field" id="what-it-is">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>Four modules, one system of record</h2>
      <p class="sec-lead">${esc(p.blurb)}</p>
    </div>
    <div class="console rv">
      ${d.groups.map((g, i) => `<article class="console-mod">
        <header>
          <span class="console-idx">${String(i + 1).padStart(2, '0')}</span>
          <h3>${esc(g.name)}</h3>
        </header>
        <ul>${g.items.map(([t, b]) => `<li><b>${esc(t)}</b><span>${esc(b)}</span></li>`).join('')}</ul>
      </article>`).join('')}
    </div>
  </div>
</section>

<section class="sec sec-soft solid" id="seven-elements">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>The seven elements, as a sequence</h2>
      <p class="sec-lead">The Office of Inspector General defines what an effective compliance program
      requires. These are not a checklist to tick once; they run as a loop.</p>
    </div>
    <ol class="chain rv">
      ${sevenElements.map((e, i) => `<li><span class="chain-n">${String(i + 1).padStart(2, '0')}</span><span class="chain-t">${esc(e)}</span></li>`).join('')}
    </ol>
  </div>
</section>`,

  // SENTRY reads as data: a calendar, a two-way risk split, a loop, a comparison.
  sentry: (p, d) => `
<section class="sec sec-loose field" id="what-it-is">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>Risk runs in both directions</h2>
      <p class="sec-lead">${esc(p.blurb)}</p>
    </div>
    <ul class="bidir rv">
      ${sentryDirections.map((x) => `<li><span class="bidir-tag">${esc(x.tag)}</span><p>${esc(x.body)}</p></li>`).join('')}
    </ul>
  </div>
</section>

<section class="sec sec-soft solid" id="cycle">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>Every quarter. Not every year.</h2>
      <p class="sec-lead">Analytics run across every provider in all four quarters. Audits rotate so each
      group is reviewed and then re-checked. Guidance starts as a baseline and then targets the providers
      carrying the most risk.</p>
    </div>
    <div class="qgrid rv">
      <div class="qrow qhead"><span></span><span>Analytics</span><span>Audit</span><span>Guidance</span></div>
      ${sentryQuarters.map((q) => `<div class="qrow">
        <span class="qlabel">${esc(q.q)}</span>
        <span>${esc(q.analytics)}</span>
        <span>${esc(q.audit)}</span>
        <span>${esc(q.guidance)}</span>
      </div>`).join('')}
    </div>
    <ul class="compare-bars rv">
      ${sentryCompare.map((c) => `<li>
        <span class="cb-label">${esc(c.label)}</span>
        <span class="cb-pair"><em>Annual</em><b>${esc(c.annual)}</b></span>
        <span class="cb-pair is-on"><em>Quarterly</em><b>${esc(c.quarterly)}</b></span>
      </li>`).join('')}
    </ul>
  </div>
</section>

<section class="sec field" id="loop">
  <div class="wrap">
    <div class="sec-head rv"><h2>The loop</h2></div>
    <ol class="loop rv">
      ${sentryLoop.map((l) => `<li><span class="loop-n">${esc(l.n)}</span><b>${esc(l.name)}</b><p>${esc(l.body)}</p></li>`).join('')}
    </ol>
  </div>
</section>`,

  // FCO reads as an engagement: a timeline, then the role itself.
  fco: (p, d) => `
<section class="sec sec-loose solid" id="what-it-is">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>How the engagement runs</h2>
      <p class="sec-lead">${esc(p.blurb)}</p>
    </div>
    <ol class="tline rv">
      ${fcoTimeline.map((t) => `<li><span class="tline-when">${esc(t.when)}</span><p>${esc(t.what)}</p></li>`).join('')}
    </ol>
    <div class="hours rv">
      <div class="hours-fig"><b>10</b><span>hours a month of dedicated support, included</span></div>
      <div class="hours-note">
        <p>Additional hours are available at $300 each. The committee meets monthly for the first six
        months and quarterly after that, and your officer is the same person throughout.</p>
      </div>
    </div>
  </div>
</section>

<section class="sec sec-soft field" id="the-role">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>What your officer actually does</h2>
      <p class="sec-lead">The primary compliance liaison for your staff, for third parties and for
      government agencies.</p>
    </div>
    ${d.groups.map((g) => `<div class="pgroup rv">
      <h3>${esc(g.name)}</h3>
      <ul class="pfeat">${g.items.map(([t, b]) => `<li><b>${esc(t)}</b><span>${esc(b)}</span></li>`).join('')}</ul>
    </div>`).join('')}
  </div>
</section>`,

  // DILIGENCE reads as a transaction: three stages across a deal.
  diligence: (p, d) => `
<section class="sec sec-loose solid" id="what-it-is">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>Where the work sits in a deal</h2>
      <p class="sec-lead">${esc(p.blurb)}</p>
    </div>
    <ol class="deal rv">
      ${diligenceStages.map((s) => `<li>
        <span class="deal-stage">${esc(s.stage)}</span>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.body)}</p>
      </li>`).join('')}
    </ol>
  </div>
</section>

<section class="sec sec-soft field" id="the-review">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>What the review covers</h2>
      <p class="sec-lead">Produced as a document the other side of the table will read closely.</p>
    </div>
    ${d.groups.map((g) => `<div class="pgroup rv">
      <ul class="pfeat">${g.items.map(([t, b]) => `<li><b>${esc(t)}</b><span>${esc(b)}</span></li>`).join('')}</ul>
    </div>`).join('')}
  </div>
</section>`
};

/* ---------- per-product hero ---------- */
const heroFor = (p, d) => {
  if (p.key === 'sentry') {
    return `<div class="wrap hero-in">
      <p class="prod-posture" style="color:var(--lime)">${esc(p.posture)} &middot; ${esc(p.kind)}</p>
      <h1>${esc(p.name)}</h1>
      <p class="hero-lead">${esc(d.lede)}</p>
      <p class="hero-cta"><a class="btn btn-primary" href="#start">See what is leaking</a>
        <a class="btn btn-ghost" href="tel:${site.phoneE164}">Call ${site.phoneDisplay}</a></p>
    </div>`;
  }
  return `<div class="wrap hero-in">
    <p class="prod-posture" style="color:var(--lime)">${esc(p.posture)} &middot; ${esc(p.kind)}</p>
    <h1>${esc(p.name)}</h1>
    <p class="hero-lead">${esc(d.lede)}</p>
    <p class="hero-cta"><a class="btn btn-primary" href="#start">Get your free compliance review</a>
      <a class="btn btn-ghost" href="tel:${site.phoneE164}">Call ${site.phoneDisplay}</a></p>
  </div>`;
};

const HERO_IMG = {
  shield: '/assets/img/site/prog-hipaa.webp',
  sentry: '/assets/img/site/svc-coding.webp',
  fco: '/assets/img/site/svc-fractional.webp',
  diligence: '/assets/img/site/aud-private-equity.webp'
};

function build(p) {
  const d = productDetail[p.key];
  const faqs = faqsFor(p);
  const others = suite.filter((o) => o.key !== p.key);

  const body = `
<section class="hero hero-short hero-${p.key}">
  <div class="hero-media">
    ${img({ src: HERO_IMG[p.key], alt: '', title: `${p.name}: ${p.kind}`,
            width: 1600, height: 720, loading: 'eager', fetchpriority: 'high', sizes: '100vw' })}
  </div>
  ${heroFor(p, d)}
</section>

<section class="band"><div class="wrap band-in"><p>${esc(p.tagline)}</p></div></section>

${signature[p.key](p, d)}

<section class="sec solid" id="why-hcp">
  <div class="wrap">
    <div class="sec-head rv"><h2>Why ${esc(p.name)} rather than a point tool</h2></div>
    <ul class="whygrid rv">
      ${differentiators.map((x, i) => `<li><span class="whygrid-n">${String(i + 1).padStart(2, '0')}</span><p>${esc(x)}</p></li>`).join('')}
    </ul>
  </div>
</section>

<section class="sec sec-soft field" id="use-cases">
  <div class="wrap">
    <div class="sec-head rv"><h2>In practice</h2></div>
    <figure class="bigquote rv">
      <blockquote>${esc(testimonials.find((t) => t.tag === p.name) ? testimonials.find((t) => t.tag === p.name).quote : testimonials[0].quote)}</blockquote>
      <figcaption>${esc((testimonials.find((t) => t.tag === p.name) || testimonials[0]).who)}
        <span>${esc((testimonials.find((t) => t.tag === p.name) || testimonials[0]).org)}</span></figcaption>
    </figure>
    <ul class="stats rv">
      ${stats.map((s) => `<li class="stat"><b>${esc(s.figure)}</b><span>${esc(s.label)}</span></li>`).join('')}
    </ul>
  </div>
</section>

<section class="sec solid" id="rest-of-suite">
  <div class="wrap">
    <div class="sec-head rv"><h2>The rest of the suite</h2></div>
    <ul class="siblings rv">
      ${others.map((o) => `<li><a href="${o.href}">
        <span class="sib-posture">${esc(o.posture)}</span>
        <b>${esc(o.name)}</b>
        <span class="sib-kind">${esc(o.kind)}</span>
      </a></li>`).join('')}
    </ul>
  </div>
</section>

<section class="sec sec-soft field" id="faq">
  <div class="narrow">
    <div class="sec-head rv"><h2>Questions about ${esc(p.name)}</h2></div>
    <div class="faqs rv">
      ${faqs.map((f, i) => `<details class="faq"${i === 0 ? ' open' : ''}>
        <summary><span>${esc(f.q)}</span>${icon('plus', 'ic ic-sm')}</summary>
        <div class="faq-a"><p>${esc(f.a)}</p></div>
      </details>`).join('')}
    </div>
  </div>
</section>

<section class="close" id="start">
  <div class="wrap sec">
    <div class="lead-grid">
      <div class="rv">
        <h2>See what ${esc(p.name)} would find.</h2>
        <p class="sec-lead">Twenty minutes with an advisor produces a written gap analysis for your own
        setting, ranked by what would actually hurt you first.</p>
        <ul class="why">
          <li><div><b>Genuinely free</b><p>No cost, no obligation, and the written findings are yours whether or not you become a client.</p></div></li>
          <li><div><b>An advisor, not a sales script</b><p>Your first conversation is with someone who can actually answer compliance questions.</p></div></li>
          <li><div><b>Prefer to talk now?</b><p>Call <a href="tel:${site.phoneE164}" style="color:var(--lime)">${site.phoneDisplay}</a> and ask for a compliance advisor.</p></div></li>
        </ul>
      </div>
      ${leadForm()}
    </div>
  </div>
</section>
`;

  return {
    path: p.href,
    title: `${p.name}: ${p.kind} | HCP`,
    description: `${p.name}, ${p.kind.toLowerCase()} from Healthcare Compliance Pros. ${d.lede.slice(0, 80)}`.slice(0, 154),
    body,
    faqs,
    parent: { name: 'Solutions', path: '/compliance-solution/' }
  };
}

export default suite.map(build);
