import { icon, img, esc } from '../layout.mjs';
import {
  site, suite, stats, specialties, markets,
  differentiators, leadership, testimonials, sevenElements, directory
} from '../site.mjs';

/* The page answers three questions in order: what is it, who is it for,
   what is offered. The order carries that on its own; it was numbered
   01/02/03, which read as a sequence of steps to follow rather than a
   structure to read. Everything after those three is supporting evidence:
   why us, proof, the people, objections, and the ask. */

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

// The fragmented stack HCP replaces. Used by the "what is it" section.
const scattered = [
  'A separate learning system',
  'A policy tool',
  'An incident tracker',
  'A hotline vendor',
  'A spreadsheet nobody owns'
];

const body = `
<section class="hero">
  <!-- Tech layer: a particle field, a fine grid and an orbital diagram.
       All decorative, so aria-hidden, and all of it stands down under
       prefers-reduced-motion. -->
  <canvas class="hero-particles" id="particles" aria-hidden="true"></canvas>
  <div class="hero-grid" aria-hidden="true"></div>
  <div class="hero-orbit" aria-hidden="true">
    <div class="orbit-ring r1"></div>
    <div class="orbit-ring r2"></div>
    <div class="orbit-ring r3"></div>
    <div class="orbit-sweep"></div>
    <div class="orbit-core"></div>
    <div class="orbit-node w1"><span class="dot"></span></div>
    <div class="orbit-node w2"><span class="dot"></span></div>
    <p class="orbit-tick">1,000+ PROVIDERS</p>
  </div>
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
  </div>
</section>

<section class="band">
  <div class="wrap band-in">
    <p>A decade of trust. Over a thousand organizations protected.</p>
  </div>
</section>

<!-- The four products, named high on the page, each on its own surface.
     Text on the same ground never fully separates from the page no matter
     how large it is set; a filled tile does it immediately. -->
<section class="prodstrip">
  <div class="wrap">
    <ul class="ps rv">
      ${suite.map((p) => `<li><a href="#what-we-offer">
        <b>${esc(p.name)}</b>
        <span>${esc(p.kind)}</span>
      </a></li>`).join('')}
    </ul>
  </div>
</section>

<!-- ============ 01. What is it? ============ -->
<section class="sec sec-loose field" id="what-it-is">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>One platform that runs your compliance program and watches your billing.</h2>
      <p class="sec-lead">Healthcare Compliance Pros is a compliance and revenue integrity partner for
      healthcare providers. <strong>SHIELD</strong> runs the compliance program: policies, training, risk
      analysis and the documentation an investigator asks for. <strong>SENTRY</strong> watches the revenue
      side, benchmarking your claims every quarter against your specialty. Behind both sit named advisors
      and, when you need one, a <strong>fractional compliance officer</strong> or a transaction-grade
      <strong>diligence</strong> review.</p>
    </div>

    <!-- No cards here. The argument is five things crossed out against one
         thing that is not, so the strikethrough carries it and a box would
         only get in the way. The ramp in opacity is the point: the further
         down the stack, the less anyone can find it. -->
    <div class="recko rv">
      <div class="recko-was">
        <span class="recko-lbl">What most organizations run</span>
        <ul class="strike">
          ${scattered.map((x, i) => `<li style="--i:${i}">${esc(x)}</li>`).join('')}
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

    <!-- Stats as a ruled band rather than four tiles. Hairlines between the
         cells, nothing around them. -->
    <ul class="figs rv">
      ${stats.map((s) => {
        const n = (s.figure.match(/[\d,]+/) || [''])[0];
        const num = n.replace(/,/g, '');
        const pre = s.figure.slice(0, s.figure.indexOf(n));
        const post = s.figure.slice(s.figure.indexOf(n) + n.length);
        return `<li><b data-count="${num}" data-pre="${esc(pre)}" data-post="${esc(post)}">${esc(s.figure)}</b><span>${esc(s.label)}</span></li>`;
      }).join('')}
    </ul>
  </div>
</section>

<!-- ============ 02. Who is it for? ============ -->
<section class="sec sec-soft sec-loose solid" id="who-its-for">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>Three distinct markets. One unified platform.</h2>
      <p class="sec-lead">From a four-provider practice through to a private equity sponsor mid-transaction,
      the same platform underneath, scoped and priced to the organization using it.</p>
    </div>

    <!-- The cards are gone. Each market is a photo with its numeral sitting
         across the lower edge and the text on the open field underneath.
         The overlap is what stops three of anything reading as a grid. -->
    <ol class="mk rv">
      ${markets.map((m, i) => `<li>
        <div class="mk-pic">
          ${img({ src: m.img, alt: m.alt, title: m.title, width: 900, height: 506, sizes: '(max-width: 900px) 100vw, 380px' })}
          <span class="mk-n" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
        </div>
        <h3>${esc(m.title)}</h3>
        <p>${esc(m.body)}</p>
      </li>`).join('')}
    </ol>

    <!-- 30+ set at display size so one number anchors the section, with the
         specialties running past it. -->
    <div class="spec rv">
      <div class="spec-head">
        <span class="spec-fig">30<i>+</i></span>
        <p>Clinical specialties served nationwide. Benchmarks, policy sets and training are
        calibrated to the specialty rather than issued generically, which is what makes
        the findings usable.</p>
      </div>
      <div class="marquee" aria-label="Clinical specialties served">
        <ul class="marquee-track">
          ${specialties.map((x) => `<li>${esc(x)}</li>`).join('')}
          ${specialties.map((x) => `<li aria-hidden="true">${esc(x)}</li>`).join('')}
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="photoband">
  ${img({ src: '/assets/img/site/about-2.webp', alt: '', title: 'Clinical staff in a compliance training session',
          width: 1600, height: 700, sizes: '100vw' })}
  <div class="wrap photoband-in">
    <p>We do not just check boxes. We build a culture of compliance and give you a plan to keep improving.</p>
    <p class="sub">Automation handles the tasks. Your team handles the questions, and ours is on the other
    end of the phone when the question is hard.</p>
  </div>
</section>

<!-- ============ 03. What is offered? ============ -->
<section class="sec sec-loose field" id="what-we-offer">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>Defense and offense. Compliance and revenue.</h2>
      <p class="sec-lead">Four products that work as one relationship. Take the whole suite or the single
      piece you are missing.</p>
    </div>

    ${[['defense', 'Defense', 'Protect the program'],
       ['offense', 'Offense', 'Protect the revenue']].map(([key, label, line]) => {
      /* The two rows were already the two sides the heading promises; they
         just never said so. Naming them and inverting offense to the navy
         tile makes the split land before the reader works it out. */
      const on = key === 'offense';
      return `<div class="side rv">
        <div class="side-head">
          <span class="side-label${on ? ' side-label-on' : ''}">${label}</span>
          <span class="side-rule"></span>
          <span class="side-line">${line}</span>
        </div>
        <ul class="suite">
          ${suite.filter((p) => p.side === key).map((p) => `<li class="prod${on ? ' prod-dark' : ''}">
            <div class="prod-h">
              <span class="prod-name">${esc(p.name)}</span>
              <span class="prod-kind">${esc(p.kind)}</span>
            </div>
            <p class="prod-blurb">${esc(p.blurb)}</p>
            <ul>${p.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
            <a class="prod-link" href="${p.href}">Explore ${esc(p.name)}</a>
          </li>`).join('')}
        </ul>
      </div>`;
    }).join('')}

    <div class="seven-block rv">
      <div class="showcase">
        <div>
          <h3>The seven elements. Covered.</h3>
          <p class="sec-lead" style="font-size:1rem;margin-bottom:1.5rem">The Office of Inspector General
          defines what an effective compliance program requires. SHIELD delivers all seven.</p>
          <ol class="seven">
            ${sevenElements.map((e) => `<li><span>${esc(e)}</span></li>`).join('')}
          </ol>
        </div>
        <div class="showcase-media">
          ${img({ src: '/assets/img/site/feature-map.webp', alt: 'Two colleagues reviewing compliance status together on a laptop',
                  title: 'Reviewing a live compliance program', width: 1400, height: 1050, sizes: '(max-width: 880px) 100vw, 520px' })}
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec sec-soft solid" id="why-hcp">
  <div class="wrap">
    <div class="sec-head rv">
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
      <h2>A decade of trust. Over a thousand providers protected.</h2>
      <p class="sec-lead">How organizations across practice groups, private equity and behavioral health
      put the platform to work.</p>
    </div>
    <!-- Four equal cards made four equal claims and none of them landed.
         The first quote carries the section at display size on the open
         field; the rest sit under it as a ruled row. -->
    <figure class="lede-q rv">
      <blockquote>${esc(testimonials[0].quote)}</blockquote>
      <figcaption>
        <b>${esc(testimonials[0].who)}</b>
        <span>${esc(testimonials[0].org)}</span>
        <em>${esc(testimonials[0].tag)}</em>
      </figcaption>
    </figure>
    <ul class="sub-q rv">
      ${testimonials.slice(1).map((t) => `<li>
        <span class="sub-q-tag">${esc(t.tag)}</span>
        <blockquote>${esc(t.quote)}</blockquote>
        <figcaption><b>${esc(t.who)}</b><span>${esc(t.org)}</span></figcaption>
      </li>`).join('')}
    </ul>
  </div>
</section>

<section class="sec sec-soft solid" id="about">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>About Healthcare Compliance Pros</h2>
      <p class="sec-lead">We have spent more than fifteen years on one problem: making compliance
      something a healthcare organization can prove rather than assert. The work started with policy and
      training, and grew into the things practices kept asking for next, which were risk analysis,
      incident response and exclusion monitoring, and then billing intelligence once it was clear that
      compliance exposure and revenue leakage come from the same blind spot.</p>
    </div>

    <div class="about-grid rv">
      <div class="about-copy">
        <p>Today that is one platform and a named team, working with more than a thousand provider
        groups across all fifty states and over thirty clinical specialties. The advisor who scopes your
        program is the advisor who stays on it, which is the part software on its own cannot do.</p>
        <p>We are not a self-serve tool with a support inbox. Every engagement includes people who
        interpret the rule, prepare the response, and stand in front of you when someone comes asking.</p>
        <ul class="about-facts">
          <li><b>1,000+</b><span>Provider groups protected</span></li>
          <li><b>50</b><span>States with active clients</span></li>
          <li><b>30+</b><span>Clinical specialties served</span></li>
          <li><b>15+</b><span>Years in healthcare compliance</span></li>
        </ul>
      </div>
      <div class="about-media">
        ${img({ src: '/assets/img/site/about-2.webp', alt: 'The Healthcare Compliance Pros team at work',
                title: 'Healthcare Compliance Pros', width: 1400, height: 1050,
                sizes: '(max-width: 880px) 100vw, 520px' })}
      </div>
    </div>

    <div class="about-team rv">
      <span class="about-team-lbl">The people you would actually be working with</span>
      <ul class="team">
        ${leadership.map((m) => `<li>
          ${m.img
            ? img({ src: m.img, alt: `${m.name}, ${m.role}`, title: `${m.name}, ${m.role}`, width: 124, height: 124, sizes: '62px' })
            : `<span class="team-initials" aria-hidden="true">${esc(m.name.split(' ').map((w) => w[0]).join(''))}</span>`}
          <span><b>${esc(m.name)}</b><span>${esc(m.role)}</span></span>
        </li>`).join('')}
      </ul>
    </div>
  </div>
</section>

<section class="sec field" id="faq">
  <div class="narrow">
    <div class="sec-head rv">
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

<section class="close" id="start">
  <div class="wrap sec">
    <div class="lead-grid">
      <div class="rv">
        <h2>Let us talk compliance.</h2>
        <p class="sec-lead">Whether you are an independent practice looking to get compliant, a private
        equity sponsor evaluating a healthcare acquisition, or a law firm looking for a compliance partner
        for your clients, HCP is made for you.</p>
        <ul class="why">
          <li><div><b>Genuinely free</b><p>No cost, no obligation, and the written findings are yours whether or not you become a client.</p></div></li>
          <li><div><b>An advisor, not a sales script</b><p>Your first conversation is with someone who can actually answer compliance questions.</p></div></li>
          <li><div><b>About twenty minutes</b><p>Scoped to respect your time. A deeper review happens only if the first pass suggests it is warranted.</p></div></li>
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
