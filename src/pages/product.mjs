import { icon, img, esc } from '../layout.mjs';
import {
  site, suite, productDetail, sevenElements, stats,
  differentiators, testimonials
} from '../site.mjs';

/* One template, four product pages. Detail comes from the live site for
   SHIELD, SENTRY and FCO; DILIGENCE is not published there, so its detail
   comes from the deck. Nothing here is invented: where the live site gives
   a number (130+ courses, 10 hours a month, $300/hour) it is used as
   written, and where it gives none, none is claimed. */

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

function build(p) {
  const d = productDetail[p.key];
  const faqs = faqsFor(p);
  const others = suite.filter((o) => o.key !== p.key);

  const body = `
<section class="hero hero-short">
  <div class="hero-media">
    ${img({ src: '/assets/img/site/feature-comprehensive.webp', alt: '',
            title: `${p.name}: ${p.kind}`, width: 1600, height: 720,
            loading: 'eager', fetchpriority: 'high', sizes: '100vw' })}
  </div>
  <div class="wrap hero-in">
    <p class="prod-posture" style="color:var(--lime)">${esc(p.posture)} &middot; ${esc(p.kind)}</p>
    <h1>${esc(p.name)}</h1>
    <p class="hero-lead">${esc(d.lede)}</p>
    <p class="hero-cta">
      <a class="btn btn-primary" href="#start">Get your free compliance review</a>
      <a class="btn btn-ghost" href="tel:${site.phoneE164}">Call ${site.phoneDisplay}</a>
    </p>
  </div>
</section>

<section class="band">
  <div class="wrap band-in"><p>${esc(p.tagline)}</p></div>
</section>

<section class="sec sec-loose field" id="what-it-is">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>What ${esc(p.name)} covers</h2>
      <p class="sec-lead">${esc(p.blurb)}</p>
    </div>
    ${d.groups.map((g) => `<div class="pgroup rv">
      <h3>${esc(g.name)}</h3>
      <ul class="pfeat">
        ${g.items.map(([t, b]) => `<li><b>${esc(t)}</b><span>${esc(b)}</span></li>`).join('')}
      </ul>
    </div>`).join('')}
  </div>
</section>

${d.elements ? `<section class="sec sec-soft field" id="seven-elements">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>The seven elements. Covered.</h2>
      <p class="sec-lead">The Office of Inspector General defines what an effective compliance program
      requires. ${esc(p.name)} delivers all seven.</p>
    </div>
    <ol class="seven rv">${sevenElements.map((e) => `<li><span>${esc(e)}</span></li>`).join('')}</ol>
  </div>
</section>` : ''}

<section class="photoband">
  ${img({ src: '/assets/img/site/about-2.webp', alt: '', title: 'Clinical staff in a compliance session',
          width: 1600, height: 620, sizes: '100vw' })}
  <div class="wrap photoband-in">
    <p>Software that runs it, people who stand behind it.</p>
    <p class="sub">Anyone can sell you a login. Every engagement includes named advisors who interpret the
    rule, prepare the response, and stand in front of you when someone comes asking.</p>
  </div>
</section>

<section class="sec field" id="why-hcp">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>What makes HCP different</h2>
      <p class="sec-lead">Most vendors are betting healthcare compliance stays a back-office function.
      We are betting it becomes a board-level advantage.</p>
    </div>
    <ul class="diffs rv">
      ${differentiators.map((x) => `<li><span class="bar" aria-hidden="true"></span><p>${esc(x)}</p></li>`).join('')}
    </ul>
  </div>
</section>

<section class="sec sec-soft field" id="use-cases">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>What this looks like in practice</h2>
      <p class="sec-lead">A decade of trust, across practice groups, private equity and behavioral health.</p>
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

<section class="sec field" id="rest-of-suite">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>The rest of the suite</h2>
      <p class="sec-lead">Each product stands on its own. Together they are one platform rather than
      four tools you have to join up yourself.</p>
    </div>
    <ul class="suite rv">
      ${others.map((o) => `<li class="prod">
        <div class="prod-h">
          <span class="prod-posture">${esc(o.posture)}</span>
          <span class="prod-name">${esc(o.name)}</span>
          <span class="prod-kind">${esc(o.kind)}</span>
        </div>
        <p class="prod-tagline">${esc(o.tagline)}</p>
        <ul>${o.items.slice(0, 4).map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
        <a class="prod-link" href="${o.href}">Explore ${esc(o.name)}</a>
      </li>`).join('')}
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

<section class="close field" id="start">
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

/* The lead form is identical across these pages; it will be swapped for a
   HubSpot embed, so it is written once here rather than copied four times. */
export function leadForm() {
  return `<form class="lead-form f rv" data-lead="${site.email}" novalidate>
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
  </form>`;
}

export default suite.map(build);
