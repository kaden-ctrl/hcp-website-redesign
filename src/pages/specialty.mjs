import { icon, img, esc } from '../layout.mjs';
import {
  site, directory, suite, stats, markets,
  differentiators, testimonials, challengeStats, risks
} from '../site.mjs';

/* One template generates every specialty and organization page, plus an
   unlisted-setting fallback. The paths come from the directory, so the
   finder on /specialties/ links to pages that actually exist.

   A note on the content. The risk framing and the figures are generic to
   healthcare rather than specific to any one specialty, which is how the
   source deck uses them too: the setting name is substituted and the
   underlying argument does not change. Nothing here claims a
   specialty-specific statistic, because we do not have specialty-specific
   data. When real per-specialty benchmarks exist they should replace the
   shared `risks` block rather than sit alongside it. */

// The fallback. Same argument, no setting named.
const OTHER = {
  kind: 'other',
  name: null,
  href: '/specialties/other/',
  blurb: 'For settings that are not listed, or organizations that span several.'
};

const entries = [...directory, OTHER];

/* Copy helpers. `subject` is the phrase used mid-sentence, `Subject`
   starts a sentence, and both collapse to something neutral on the
   fallback page so it never reads as though a word went missing. */
function voice(d) {
  if (d.kind === 'other') {
    return {
      h1: 'Compliance and revenue integrity, built around your setting',
      subject: 'your organization',
      Subject: 'Your organization',
      practices: 'the organizations we work with',
      challengeH: 'Compounding risk needs a technology answer.',
      suiteH: 'Defense and offense. Compliance and revenue.',
      marketH: 'Three distinct markets. One platform.',
      diffH: 'What makes HCP different.',
      numbersH: 'A decade of trust, engineered into every relationship.'
    };
  }
  const n = d.name;
  const lower = n.charAt(0).toLowerCase() + n.slice(1);
  const unit = d.kind === 'organization' ? lower : `${lower} practices`;
  return {
    h1: `Compliance and revenue integrity for ${lower}`,
    subject: unit,
    Subject: unit.charAt(0).toUpperCase() + unit.slice(1),
    practices: unit,
    challengeH: `Compounding risk in ${lower} needs a technology answer.`,
    suiteH: `Defense and offense. Compliance and revenue for ${lower}.`,
    marketH: `Three distinct markets. One platform calibrated for ${lower}.`,
    diffH: `What makes HCP different for ${lower}.`,
    numbersH: `A decade of trust, engineered into every ${lower} relationship.`
  };
}

function faqsFor(v, d) {
  return [
    { q: `What does HCP do for ${v.subject}?`,
      a: `Two things most vendors split apart. SHIELD runs the compliance program: policies, training, risk analysis and the documentation an investigator asks for. SENTRY watches the revenue side, benchmarking claims every quarter against the relevant specialty. Both are backed by named advisors rather than a ticket queue.` },
    { q: 'What actually changes between settings?',
      a: 'The risk profile and the benchmarks. Documentation exposure, billing patterns and state overlays differ, and generic policy templates are the single most common reason a program fails an audit it should have passed. Policy sets and benchmarks are calibrated rather than issued off the shelf.' },
    { q: 'How fast can we be up and running?',
      a: 'Most organizations are fully live in two to three weeks. Your advisor does the heavy lifting: policy customization, staff roster, training assignment. Your team spends about three hours in total.' },
    { q: 'What is downcoding, and why does it matter here?',
      a: 'When a payer decides a provider bills higher-level visits more often than their peers, it may quietly reimburse some of those visits at a lower level. No notice is sent and there is rarely an appeal. Left undetected the pattern runs for six, nine or twelve months. SENTRY finds it in the quarter it starts.' },
    { q: 'What does it cost?',
      a: 'Pricing scales with the size of your organization and the products you use, so a four-provider group is not quoted an enterprise number. The compliance review that starts the conversation is free, and the written findings are yours whether or not you become a client.' }
  ];
}

function build(d) {
  const v = voice(d);
  const faqs = faqsFor(v, d);
  const label = d.kind === 'other' ? 'Your setting' : d.name;

  const body = `
<section class="hero hero-short">
  <div class="hero-media">
    ${img({ src: '/assets/img/site/feature-comprehensive.webp', alt: '',
            title: `Healthcare teams in ${label.toLowerCase()}`,
            width: 1600, height: 720, loading: 'eager', fetchpriority: 'high', sizes: '100vw' })}
  </div>
  <div class="wrap hero-in">
    <h1>${esc(v.h1)}</h1>
    <p class="hero-lead">Healthcare compliance has always been played on defense. We built the offense.
    One partner to protect ${esc(v.subject)}, optimize revenue and de-risk healthcare transactions.</p>
    <p class="hero-cta">
      <a class="btn btn-primary" href="#start">Get your free compliance review</a>
      <a class="btn btn-ghost" href="tel:${site.phoneE164}">Call ${site.phoneDisplay}</a>
    </p>
  </div>
</section>

<section class="band">
  <div class="wrap band-in">
    <p>A decade of trust. Over a thousand organizations protected.</p>
  </div>
</section>

<section class="sec sec-loose field" id="the-challenge">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>${esc(v.challengeH)}</h2>
      <p class="sec-lead">Compliance exposure and revenue leakage are not separate problems. They come
      from the same gap: no real-time system watching the data. That is the infrastructure HCP builds.</p>
    </div>
    <ul class="stats rv">
      ${challengeStats.map((s) => `<li class="stat"><b>${esc(s.figure)}</b><span>${esc(s.label)}</span></li>`).join('')}
    </ul>
    <ul class="risks rv">
      ${risks.map((r) => `<li><span class="lbl">${esc(r.tag)}</span><p>${esc(r.body)}</p></li>`).join('')}
    </ul>
    <p class="risk-note rv">Every one of these traces back to the same root cause: nobody is watching in
    real time. That is the gap HCP was built to close.</p>
  </div>
</section>

<section class="sec sec-soft sec-loose field" id="what-we-offer">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>${esc(v.suiteH)}</h2>
      <p class="sec-lead">SHIELD and FCO play defense. DILIGENCE and SENTRY play offense. Together they
      are one connected platform rather than four tools you have to join up yourself.</p>
    </div>
    <ul class="suite rv">
      ${suite.map((p) => `<li class="prod">
        <div class="prod-h">
          <span class="prod-posture">${esc(p.posture)}</span>
          <span class="prod-name">${esc(p.name)}</span>
          <span class="prod-kind">${esc(p.kind)}</span>
        </div>
        <p class="prod-tagline">${esc(p.tagline)}</p>
        <ul>${p.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
        <a class="prod-link" href="${p.href}">Explore ${esc(p.name)}</a>
      </li>`).join('')}
    </ul>
  </div>
</section>

<section class="photoband">
  ${img({ src: '/assets/img/site/about-2.webp', alt: '', title: 'Clinical staff in a compliance session',
          width: 1600, height: 620, sizes: '100vw' })}
  <div class="wrap photoband-in">
    <p>Specialty-calibrated, not generic.</p>
    <p class="sub">Generic policy templates are the most common reason a program fails an audit it should
    have passed. Yours are built for the care you actually deliver.</p>
  </div>
</section>

<section class="sec field" id="markets">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>${esc(v.marketH)}</h2>
      <p class="sec-lead">From a single-site clinic through to a private equity backed platform, the same
      system underneath, scoped to the complexity you actually carry.</p>
    </div>
    <ul class="markets rv">
      ${markets.map((m) => `<li class="market">
        <div class="market-pic">${img({ src: m.img, alt: m.alt, title: m.title, width: 900, height: 506, sizes: '(max-width: 900px) 100vw, 380px' })}</div>
        <div class="market-h"><b>${esc(m.n)}</b><span>${esc(m.title)}</span></div>
        <div class="market-b"><span class="lbl">Ideal profile</span><p>${esc(m.body)}</p></div>
      </li>`).join('')}
    </ul>
  </div>
</section>

<section class="sec sec-soft field" id="why-hcp">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>${esc(v.diffH)}</h2>
      <p class="sec-lead">Most vendors are betting healthcare compliance stays a back-office function.
      We are betting it becomes a board-level advantage.</p>
    </div>
    <ul class="diffs rv">
      ${differentiators.map((x) => `<li><span class="bar" aria-hidden="true"></span><p>${esc(x)}</p></li>`).join('')}
    </ul>
  </div>
</section>

<section class="sec field" id="use-cases">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>Trusted across the deal table.</h2>
      <p class="sec-lead">${esc(v.numbersH)}</p>
    </div>
    <ul class="stats rv" style="margin-bottom:clamp(2.2rem,1.8rem + 1.6vw,3.2rem)">
      ${stats.map((s) => `<li class="stat"><b>${esc(s.figure)}</b><span>${esc(s.label)}</span></li>`).join('')}
    </ul>
    <ul class="quotes rv">
      ${testimonials.map((t) => `<li><figure class="quote">
        <span class="quote-tag">${esc(t.tag)}</span>
        <span class="quote-mk" aria-hidden="true">&ldquo;</span>
        <blockquote>${esc(t.quote)}</blockquote>
        <figcaption>${esc(t.who)}<span>${esc(t.org)}</span></figcaption>
      </figure></li>`).join('')}
    </ul>
  </div>
</section>

<section class="sec sec-soft field" id="faq">
  <div class="narrow">
    <div class="sec-head rv"><h2>The questions we get asked first</h2></div>
    <div class="faqs rv">
      ${faqs.map((f, i) => `<details class="faq"${i === 0 ? ' open' : ''}>
        <summary><span>${esc(f.q)}</span>${icon('plus', 'ic ic-sm')}</summary>
        <div class="faq-a"><p>${esc(f.a)}</p></div>
      </details>`).join('')}
    </div>
  </div>
</section>

<section class="close field" id="start">
  <div class="wrap sec">
    <div class="lead-grid">
      <div class="rv">
        <h2>Let us talk compliance.</h2>
        <p class="sec-lead">Twenty minutes with an advisor produces a written gap analysis for your own
        setting, ranked by what would actually hurt you first.</p>
        <ul class="why">
          <li><div><b>Genuinely free</b><p>No cost, no obligation, and the written findings are yours whether or not you become a client.</p></div></li>
          <li><div><b>An advisor, not a sales script</b><p>Your first conversation is with someone who can actually answer compliance questions.</p></div></li>
          <li><div><b>Scoped to your setting</b><p>The review is built around the care you deliver and the obligations your organization carries.</p></div></li>
          <li><div><b>Prefer to talk now?</b><p>Call <a href="tel:${site.phoneE164}" style="color:var(--lime)">${site.phoneDisplay}</a> and ask for a compliance advisor.</p></div></li>
        </ul>
      </div>
      <form class="lead-form f rv" data-lead="${site.email}" novalidate>
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
        <a href="/privacypolicy/">privacy policy</a>. Please do not include patient information.</p>
      </form>
    </div>
  </div>
</section>
`;

  // Title must stay under 65 characters and the description between 70 and
  // 155 once escaped, so both are built to fit rather than hoped for.
  /* Directory names are sentence case ("Behavioral health", "Medical
     billing companies"), so title-casing the words after them produced
     "Behavioral health Compliance Programs", which reads as a mistake.
     Lower case after the name keeps it a sentence. */
  const title = d.kind === 'other'
    ? 'Compliance programs for every healthcare setting | HCP'
    : `${d.name} compliance programs | HCP`;

  /* The description has to land between 70 and 155 characters, and the
     setting name varies from "ENT" to "Medspa, aesthetics and wellness
     practices", a 38-character swing. Pick the fullest phrasing that fits
     rather than writing one and hoping it clears both bounds. */
  const variants = d.kind === 'other'
    ? ['Compliance and billing intelligence for healthcare organizations of every kind. Named advisors, audit-ready evidence and a free compliance review.']
    : [
        `Compliance and billing intelligence built for ${v.subject}. Named advisors, audit-ready evidence and quarterly benchmarks. Free review.`,
        `Compliance and billing intelligence for ${v.subject}. Named advisors and audit-ready evidence. Free compliance review.`,
        `Compliance and billing intelligence for ${v.subject}. Named advisors, audit-ready evidence.`
      ];
  const fits = (t) => t.length >= 70 && t.length <= 155;
  const description = variants.find(fits) || variants[variants.length - 1];

  return { path: d.href, title, description, body, faqs, parent: { name: 'Specialties', path: '/specialties/' } };
}

export default entries.map(build);
