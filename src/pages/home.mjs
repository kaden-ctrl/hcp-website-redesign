import { icon, img, esc } from '../layout.mjs';
import {
  site, suite, stats, specialties, markets,
  differentiators, leadership, testimonials, sevenElements
} from '../site.mjs';

const faqs = [
  { q: 'What does HCP actually do?',
    a: 'Two things most vendors split apart. SHIELD runs your compliance program: HIPAA, OSHA and corporate compliance, policies, training, risk analysis and the documentation an investigator asks for. SENTRY watches the revenue side, benchmarking your claims every quarter against your specialty. Both are backed by people, not a ticket queue.' },
  { q: 'How is this different from buying compliance software?',
    a: 'Anyone can sell you a login. A login does not help when protected health information goes to the wrong patient at 4pm on a Friday. Every HCP engagement includes named advisors who answer the phone, interpret the rule, and stand in front of you when someone comes asking.' },
  { q: 'We already have policies. Why would we need you?',
    a: 'Policies prove you wrote something. They do not prove your staff read them, that training happened on time, or that your risk analysis reflects the systems you actually run today. Investigators ask for dated evidence, and that is the part most organizations cannot produce on a 30-day deadline.' },
  { q: 'How fast can we be up and running?',
    a: 'Most practices are fully live in two to three weeks. Your advisor does the heavy lifting: policy customization, staff roster, training assignment. Your team spends about three hours in total.' },
  { q: 'What is downcoding, and why does SENTRY matter?',
    a: 'When a payer decides a provider bills higher-level visits more often than their peers, it may quietly reimburse some of those visits at a lower level. No notice is sent and there is rarely an appeal. Left undetected the pattern runs for six, nine or twelve months. SENTRY finds it in the quarter it starts.' },
  { q: 'Do you work with private equity sponsors?',
    a: 'Yes. DILIGENCE reviews 12 to 24 months of claims data and produces a deal-room ready findings report, including documentation an RWI underwriter will accept and a post-close remediation roadmap. Portfolio operators use SHIELD across platform builds and add-on acquisitions.' },
  { q: 'Which specialties do you support?',
    a: 'More than 30 clinical specialties nationwide, from behavioral health and cardiology through to urgent care and wound care. Benchmarks and policy sets are calibrated to the specialty rather than issued generically.' },
  { q: 'What does it cost?',
    a: 'Pricing scales with the size of your organization and the products you use, so a four-provider practice is not quoted an enterprise number. The compliance review that starts the conversation is free, and the written findings are yours whether or not you become a client.' }
];

const body = `
<section class="hero">
  <div class="hero-media">
    ${img({ src: '/assets/img/site/hero-hipaa.webp', alt: '', title: 'Healthcare professionals at work',
            width: 1600, height: 900, loading: 'eager', fetchpriority: 'high', sizes: '100vw' })}
  </div>
  <div class="wrap hero-in">
    <h1>Compliance. Revenue.<br><em>Confidence.</em></h1>
    <p class="hero-lead">The only partner built to protect providers, optimize revenue and de-risk
    healthcare transactions, all in one platform.</p>
    <p class="hero-cta">
      <a class="btn btn-primary" href="#start">Get your free compliance review</a>
      <a class="btn btn-ghost" href="tel:${site.phoneE164}">Call ${site.phoneDisplay}</a>
    </p>
    <p class="hero-note">${icon('shield', 'ic ic-sm')}<span>No obligation. The written findings are yours either way.</span></p>
  </div>
</section>

<section class="band">
  <div class="wrap band-in">
    ${icon('check', 'ic')}
    <p>A decade of trust. Over a thousand organizations protected.</p>
  </div>
</section>

<section class="sec field" id="by-the-numbers">
  <div class="wrap">
    <div class="sec-head rv">
      <p class="mark"><span>HCP by the numbers</span></p>
      <h2>A trusted compliance and revenue integrity partner</h2>
      <p class="sec-lead">Working with more than a thousand healthcare provider groups across the
      United States, in every state, for over fifteen years.</p>
    </div>
    <ul class="stats rv">
      ${stats.map((s) => `<li class="stat">${icon('check', 'ic ic-sm')}<b>${esc(s.figure)}</b><span>${esc(s.label)}</span></li>`).join('')}
    </ul>
  </div>
</section>

<section class="sec sec-soft sec-loose field" id="solutions">
  <div class="wrap">
    <div class="sec-head rv">
      <p class="mark"><span>The HCP solution suite</span></p>
      <h2>Defense and offense. Compliance and revenue. One integrated partner.</h2>
      <p class="sec-lead">Most organizations run compliance across a separate learning system, a policy
      tool, an incident tracker, a hotline vendor and a spreadsheet nobody owns. HCP replaces all of it.</p>
    </div>
    <ul class="suite rv">
      ${suite.map((p) => `<li class="prod">
        <div class="prod-h">
          <span class="prod-ic">${icon(p.icon, 'ic')}</span>
          <span><span class="prod-name">${esc(p.name)}</span><span class="prod-kind">${esc(p.kind)}</span></span>
        </div>
        <p class="prod-blurb">${esc(p.blurb)}</p>
        <ul>${p.items.map((i) => `<li>${icon('check', 'ic ic-sm')}<span>${esc(i)}</span></li>`).join('')}</ul>
        <a class="prod-link" href="${p.href}">Explore ${esc(p.name)}${icon('arrow', 'ic ic-sm')}</a>
      </li>`).join('')}
    </ul>
  </div>
</section>

<section class="sec field" id="the-problem">
  <div class="wrap">
    <div class="sec-head rv">
      <p class="mark"><span>The problem</span></p>
      <h2>You do not do your own taxes.</h2>
      <p class="sec-lead">Nobody knows every rule, every year, on top of a full-time job. You provide the
      clinical care. We build the program, keep the records, and stand in front of you when someone comes
      asking. That is why it is called SHIELD.</p>
    </div>
    <div class="sec-head rv" style="margin-bottom:1.6rem">
      <h3 style="font-size:1.35rem">The seven elements. Covered.</h3>
      <p class="sec-lead" style="font-size:1rem">The Office of Inspector General defines what an effective
      compliance program requires. SHIELD delivers all seven.</p>
    </div>
    <ol class="seven rv">
      ${sevenElements.map((e) => `<li><span>${esc(e)}</span></li>`).join('')}
    </ol>
  </div>
</section>

<section class="sec sec-soft field" id="markets">
  <div class="wrap">
    <div class="sec-head rv">
      <p class="mark"><span>Who we serve</span></p>
      <h2>Three distinct markets. One unified platform.</h2>
    </div>
    <ul class="markets rv">
      ${markets.map((m) => `<li class="market">
        <div class="market-h"><b>${esc(m.n)}</b><span>${esc(m.title)}</span></div>
        <div class="market-b"><span class="lbl">Ideal profile</span><p>${esc(m.body)}</p></div>
      </li>`).join('')}
    </ul>
  </div>
</section>

<section class="sec field" id="specialties">
  <div class="wrap">
    <div class="sec-head rv">
      <p class="spec-lead"><b>30+</b><span>Clinical specialties served nationwide</span></p>
      <p class="sec-lead">Benchmarks, policy sets and training are calibrated to the specialty rather than
      issued generically, which is what makes the findings usable.</p>
    </div>
    <ul class="chips rv">
      ${specialties.map((s) => `<li>${esc(s)}</li>`).join('')}
    </ul>
  </div>
</section>

<section class="sec sec-soft sec-loose field" id="why-hcp">
  <div class="wrap">
    <div class="sec-head rv">
      <p class="mark"><span>What makes HCP different</span></p>
      <h2>Software alone does not make you compliant.</h2>
      <p class="sec-lead">Anyone can sell you a login. When protected health information goes to the wrong
      patient, a login does not help. Your team does.</p>
    </div>
    <ul class="diffs rv">
      ${differentiators.map((d) => `<li><span class="bar" aria-hidden="true"></span><p>${esc(d)}</p></li>`).join('')}
    </ul>
  </div>
</section>

<section class="sec field" id="use-cases">
  <div class="wrap">
    <div class="sec-head rv">
      <p class="mark"><span>Case studies</span></p>
      <h2>A decade of trust. Over a thousand providers protected.</h2>
      <p class="sec-lead">How organizations across practice groups, private equity and behavioral health
      put the platform to work.</p>
    </div>
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

<section class="sec sec-soft field" id="leadership">
  <div class="wrap">
    <div class="sec-head rv">
      <p class="mark"><span>Leadership</span></p>
      <h2>The people behind the program</h2>
    </div>
    <ul class="team rv">
      ${leadership.map((m) => `<li>
        ${m.img
          ? img({ src: m.img, alt: `${m.name}, ${m.role}`, title: `${m.name}, ${m.role}`, width: 124, height: 124, sizes: '62px' })
          : `<span class="team-initials" aria-hidden="true">${esc(m.name.split(' ').map((w) => w[0]).join(''))}</span>`}
        <span><b>${esc(m.name)}</b><span>${esc(m.role)}</span></span>
      </li>`).join('')}
    </ul>
  </div>
</section>

<section class="sec field" id="faq">
  <div class="narrow">
    <div class="sec-head rv">
      <p class="mark"><span>Questions</span></p>
      <h2>The questions everyone asks first</h2>
    </div>
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
        <p class="mark"><span>Get started</span></p>
        <h2>Let us talk compliance.</h2>
        <p class="sec-lead">Whether you are an independent practice looking to get compliant, a private
        equity sponsor evaluating a healthcare acquisition, or a law firm looking for a compliance partner
        for your clients, HCP is made for you.</p>
        <ul class="why">
          <li>${icon('check', 'ic ic-sm')}<div><b>Genuinely free</b><p>No cost, no obligation, and the written findings are yours whether or not you become a client.</p></div></li>
          <li>${icon('users', 'ic ic-sm')}<div><b>An advisor, not a sales script</b><p>Your first conversation is with someone who can actually answer compliance questions.</p></div></li>
          <li>${icon('clock', 'ic ic-sm')}<div><b>About twenty minutes</b><p>Scoped to respect your time. A deeper review happens only if the first pass suggests it is warranted.</p></div></li>
          <li>${icon('phone', 'ic ic-sm')}<div><b>Prefer to talk now?</b><p>Call <a href="tel:${site.phoneE164}" style="color:var(--lime)">${site.phoneDisplay}</a> and ask for a compliance advisor.</p></div></li>
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
          <textarea id="notes" name="notes" placeholder="Specialty, number of locations, any deadline you are working against..."></textarea></div>
        </div>
        <button class="btn btn-ink" type="submit" style="width:100%">Request my free review</button>
        <p class="f-note">We use your details only to respond to this request. See our
        <a href="/privacypolicy/">privacy policy</a>. Please do not include patient information.</p>
      </form>
    </div>
  </div>
</section>
`;

export default {
  path: '/',
  title: 'Healthcare Compliance Software and Billing Intelligence | HCP',
  description: 'HIPAA, OSHA and corporate compliance plus quarterly billing intelligence, backed by named advisors. Trusted by 1,000+ provider groups. Free review.',
  body,
  faqs
};
