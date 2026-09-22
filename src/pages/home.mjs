import { icon, img, abs, esc } from '../layout.mjs';
import { site } from '../site.mjs';

const faqs = [
  { q: 'How fast can we actually be compliant?',
    a: 'Most practices are fully live in two to three weeks. Your advisor does the heavy lifting — policy customisation, staff roster, training assignments. Your team spends about three hours total.' },
  { q: 'We already have policies. Why would we need you?',
    a: 'Policies prove you wrote something. They do not prove your staff read them, that training happened on time, or that your risk analysis reflects your current systems. Investigators ask for dated evidence, and that is what most practices cannot produce.' },
  { q: 'What does it cost?',
    a: `Pricing scales with headcount, so a five-person practice pays a fraction of what a multi-site group pays. Every plan includes the same advisor team, policy customisation, training library and audit support. Call ${site.phoneDisplay} for a number against your actual size.` },
  { q: 'What happens if we get audited?',
    a: 'Your advisor team works it with you — pulling the documentation requested, preparing your written response, walking you through the process. Audit support is included, not billed as emergency consulting at the worst possible moment.' },
  { q: 'Is this just software, or do we get real help?',
    a: 'Both, and we do not sell them separately. Every client gets three to five named compliance professionals who learn your organisation. You call them directly. There is no premium tier that unlocks the ability to ask a question.' },
  { q: 'What if we are already with another vendor?',
    a: 'Migrations are routine. Your advisor reviews your existing documentation, keeps what is still accurate, rebuilds what is not, and imports your historical training records wherever they can be validated.' },
  { q: 'Do you cover OSHA and corporate compliance too?',
    a: 'All three, in one platform, under one staff login. HIPAA Privacy and Security, OSHA workplace safety, and a corporate compliance program built on the seven elements CMS and the OIG expect.' },
  { q: 'What is the catch with the free assessment?',
    a: 'There is not one. It takes about twenty minutes, produces a written gap analysis, and the findings are yours whether or not you hire us. If your program is in good shape, we will tell you that.' }
];

const body = `
<section class="hero">
  <div class="hero-bg" aria-hidden="true">
    ${img({ src: '/assets/video/hero-poster.webp', alt: '', title: 'Healthcare professional reviewing compliance records', width: 1920, height: 1012, loading: 'eager', fetchpriority: 'high' })}
    <video id="heroVid" autoplay muted loop playsinline preload="metadata" poster="/assets/video/hero-poster.webp" tabindex="-1">
      <source src="/assets/video/hero.webm" type="video/webm">
      <source src="/assets/video/hero.mp4" type="video/mp4">
    </video>
  </div>
  <div class="wrap hero-in">
    <div class="hero-grid">
      <div>
        <p class="eyebrow">HIPAA · OSHA · Corporate Compliance</p>
        <h1>Stop guessing whether you&rsquo;d <span class="hl">survive an audit</span>.</h1>
        <p class="hero-lead">Healthcare Compliance Pros gives you a complete compliance program &mdash; policies, training, risk analysis and audit-ready evidence &mdash; run by a named team of advisors who answer when you call.</p>
        <p class="hero-cta">
          <a class="btn btn-lime btn-lg" href="#get-started">Get your free risk assessment</a>
          <a class="btn btn-ghost btn-lg" href="tel:${site.phoneE164}">Call ${site.phoneDisplay}</a>
        </p>
        <p class="hero-note">${icon('shield','ic ic-sm')}<span>Free, no obligation &mdash; the written findings are yours either way.</span></p>
      </div>
      <div class="hero-panel">
        <p class="hero-panel-h"><span>Compliance status</span><span class="dot" aria-hidden="true"></span></p>
        <ul class="hero-stats">
          <li><b>2&ndash;3 wks</b><span>From first call to fully live</span></li>
          <li><b>3&ndash;5</b><span>Named advisors on your account</span></li>
        </ul>
        <ul class="hero-rows">
          <li>${icon('check','ic ic-sm')}<span>Security Risk Analysis</span><span class="pill">Current</span></li>
          <li>${icon('check','ic ic-sm')}<span>Staff training</span><span class="pill">Tracked</span></li>
          <li>${icon('check','ic ic-sm')}<span>Business associate agreements</span><span class="pill">On file</span></li>
          <li>${icon('check','ic ic-sm')}<span>OSHA exposure control</span><span class="pill">Documented</span></li>
          <li>${icon('check','ic ic-sm')}<span>Audit support</span><span class="pill">Included</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="trustbar">
  <div class="wrap trustbar-in">
    <p class="trustbar-item">${icon('building','ic ic-sm')}Serving healthcare organizations nationwide <span>since ${site.founded}</span></p>
    <p class="trustbar-item">${icon('users','ic ic-sm')}Practices, hospitals, billing companies <span>&amp; business associates</span></p>
    <p class="trustbar-item">${icon('shield','ic ic-sm')}Audit support included <span>in every plan</span></p>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sec-head rv">
      <p class="eyebrow">01 &mdash; The problem</p>
      <h2>Compliance fails in the gap between knowing and proving</h2>
      <p class="sec-lead">Almost every practice knows what the rules require. What breaks down is the evidence &mdash; and evidence is the only thing an investigator will accept.</p>
    </div>
    <ul class="stakes rv">
      <li><b><span data-count="16" data-pre="$" data-post="M">$16M</span></b><p>Largest single HIPAA settlement on record, resolving one breach.</p></li>
      <li><b><span data-count="2" data-pre="~" data-post="/day">~2/day</span></b><p>Healthcare breaches of 500+ records reported to federal regulators.</p></li>
      <li><b><span data-count="60" data-post=" days">60 days</span></b><p>Maximum window to notify individuals after discovering a breach.</p></li>
      <li><b><span data-count="2" data-pre="$" data-post="B+">$2B+</span></b><p>Recovered through CMS and OIG audits in a single reporting year.</p></li>
    </ul>
    <p class="center" style="margin-top:2.5rem;max-width:52rem;margin-inline:auto">The organisations that get hurt are rarely the ones that ignored compliance. They are the ones whose program quietly drifted &mdash; a risk analysis from three systems ago, training nobody logged, a vendor with access and no agreement on file. It looks fine right up until someone asks for proof on a 30-day deadline.</p>
  </div>
</section>

<section class="sec sec-alt" id="who-we-serve">
  <div class="wrap">
    <div class="sec-head rv">
      <p class="eyebrow">02 &mdash; Who this affects</p>
      <h2>Built for the organisations that carry the obligation</h2>
      <p class="sec-lead">From solo practices to multi-site groups, billing companies and private-equity-backed platforms.</p>
    </div>
    <ul class="serve rv">
      <li>${img({ src: '/assets/img/site/feature-comprehensive.webp', style: 'object-position:center 22%', alt: 'Medical practice team', title: 'Medical practices', width: 1000, height: 563, sizes: '(max-width: 900px) 50vw, 260px' })}<span>Medical practices</span></li>
      <li>${img({ src: '/assets/img/site/aud-business-associates.webp', style: 'object-position:center 40%', alt: 'Business associates and healthcare vendors', title: 'Business associates', width: 900, height: 589, sizes: '(max-width: 900px) 50vw, 260px' })}<span>Business associates</span></li>
      <li>${img({ src: '/assets/img/site/svc-coding.webp', style: 'object-position:center 42%', alt: 'Medical billing and coding team', title: 'Medical billing companies', width: 900, height: 385, sizes: '(max-width: 900px) 50vw, 260px' })}<span>Billing companies</span></li>
      <li>${img({ src: '/assets/img/site/aud-private-equity.webp', style: 'object-position:center 45%', alt: 'Private equity healthcare platform', title: 'Private equity platforms', width: 900, height: 395, sizes: '(max-width: 900px) 50vw, 260px' })}<span>PE-backed platforms</span></li>
    </ul>
  </div>
</section>

<section class="sec" id="what-you-get">
  <div class="wrap">
    <div class="sec-head rv">
      <p class="eyebrow">03 &mdash; The solution</p>
      <h2>One platform. Every obligation you carry.</h2>
      <p class="sec-lead">Four connected programs, one staff login, one dashboard showing exactly where each requirement stands.</p>
    </div>
    <ul class="cards rv">
      <li class="card">
        <div class="card-media">${img({ src: '/assets/img/site/prog-hipaa.webp', style: 'object-position:center 38%', alt: 'Clinician working with HIPAA compliance tools', title: 'Clinician working with HIPAA compliance tools', width: 900, height: 600, sizes: '(max-width: 900px) 100vw, 280px' })}</div>
        <span class="card-ic">${icon('lock')}</span>
        <h3>HIPAA Compliance</h3>
        <p>Privacy and Security coverage from documentation through incident response.</p>
        <ul>
          <li>${icon('check','ic ic-xs')}<span>Policies customised to your practice</span></li>
          <li>${icon('check','ic ic-xs')}<span>Security Risk Analysis with tracked remediation</span></li>
          <li>${icon('check','ic ic-xs')}<span>Business associate agreement management</span></li>
          <li>${icon('check','ic ic-xs')}<span>Breach assessment and notification guidance</span></li>
        </ul>
        <a class="card-link" href="#get-started">Get started${icon('arrow','ic ic-xs')}</a>
      </li>
      <li class="card">
        <div class="card-media">${img({ src: '/assets/img/site/prog-osha.webp', style: 'object-position:center 30%', alt: 'Clinical staff member in personal protective equipment', title: 'Clinical staff member in personal protective equipment', width: 900, height: 600, sizes: '(max-width: 900px) 100vw, 280px' })}</div>
        <span class="card-ic">${icon('alert')}</span>
        <h3>OSHA Compliance</h3>
        <p>Workplace safety built for clinical environments, not generic templates.</p>
        <ul>
          <li>${icon('check','ic ic-xs')}<span>Bloodborne Pathogens exposure control plan</span></li>
          <li>${icon('check','ic ic-xs')}<span>Hazard Communication and virtual SDS binder</span></li>
          <li>${icon('check','ic ic-xs')}<span>Facility safety inspections and logs</span></li>
          <li>${icon('check','ic ic-xs')}<span>Inspection response support</span></li>
        </ul>
        <a class="card-link" href="#get-started">Get started${icon('arrow','ic ic-xs')}</a>
      </li>
      <li class="card">
        <div class="card-media">${img({ src: '/assets/img/site/prog-corporate.webp', style: 'object-position:center 45%', alt: 'Billing and corporate compliance review', title: 'Billing and corporate compliance review', width: 900, height: 600, sizes: '(max-width: 900px) 100vw, 280px' })}</div>
        <span class="card-ic">${icon('scale')}</span>
        <h3>Corporate Compliance</h3>
        <p>A documented program built on the seven elements CMS and the OIG expect.</p>
        <ul>
          <li>${icon('check','ic ic-xs')}<span>Code of conduct and compliance policies</span></li>
          <li>${icon('check','ic ic-xs')}<span>Fraud, Waste &amp; Abuse training</span></li>
          <li>${icon('check','ic ic-xs')}<span>Anonymous compliance hotline</span></li>
          <li>${icon('check','ic ic-xs')}<span>OIG and SAM exclusion monitoring</span></li>
        </ul>
        <a class="card-link" href="#get-started">Get started${icon('arrow','ic ic-xs')}</a>
      </li>
      <li class="card">
        <div class="card-media">${img({ src: '/assets/img/site/prog-lms.webp', style: 'object-position:center 35%', alt: 'Clinician completing online compliance training', title: 'Clinician completing online compliance training', width: 900, height: 600, sizes: '(max-width: 900px) 100vw, 280px' })}</div>
        <span class="card-ic">${icon('grad')}</span>
        <h3>Staff Training</h3>
        <p>130+ courses assigned by role, with reminders that stop you chasing people.</p>
        <ul>
          <li>${icon('check','ic ic-xs')}<span>Automatic assignment by role and location</span></li>
          <li>${icon('check','ic ic-xs')}<span>Reminders that escalate to managers</span></li>
          <li>${icon('check','ic ic-xs')}<span>AMA PRA Category 1 Credits&trade; available</span></li>
          <li>${icon('check','ic ic-xs')}<span>Certificates stored against each person</span></li>
        </ul>
        <a class="card-link" href="#get-started">Get started${icon('arrow','ic ic-xs')}</a>
      </li>
    </ul>
  </div>
</section>

<section class="sec sec-alt">
  <div class="wrap showcase rv">
    <div>
      <p class="eyebrow">04 &mdash; See it working</p>
      <h2>Everyone sees exactly what they need to</h2>
      <p>Your compliance officer sees completion status by person, department and location. Your staff see the handful of things assigned to them. Nobody has to chase a spreadsheet or wonder whether the training actually happened.</p>
      <ul>
        <li>${icon('check','ic ic-sm')}<span>Live completion status across every location</span></li>
        <li>${icon('check','ic ic-sm')}<span>Certificates stored automatically against each person</span></li>
        <li>${icon('check','ic ic-sm')}<span>Exportable evidence for auditors, payers and boards</span></li>
        <li>${icon('check','ic ic-sm')}<span>Policy revisions pushed with acknowledgement tracking</span></li>
      </ul>
    </div>
    <div class="showcase-media">${img({ src: '/assets/img/site/feature-map.webp', style: 'object-position:center 30%', alt: 'Two healthcare professionals reviewing compliance documentation together', title: 'Healthcare teams working with the HCP platform', width: 1400, height: 812, sizes: '(max-width: 880px) 100vw, 540px' })}</div>
  </div>
</section>

<section class="sec" id="how-it-works">
  <div class="wrap">
    <div class="sec-head rv">
      <p class="eyebrow">05 &mdash; Getting started</p>
      <h2>Audit-ready in about three weeks</h2>
      <p class="sec-lead">Your advisor runs the build. Your team&rsquo;s involvement is measured in hours, not weeks.</p>
    </div>
    <ol class="steps rv">
      <li><span class="n" aria-hidden="true">1</span>
        <h3>Free risk assessment</h3>
        <p>Twenty minutes with an advisor. You get a written gap analysis ranked by regulatory exposure &mdash; yours to keep either way.</p></li>
      <li><span class="n" aria-hidden="true">2</span>
        <h3>We build your program</h3>
        <p>Policies customised to your specialty, size and state. Staff loaded, roles mapped to the right training. You review; we do the work.</p></li>
      <li><span class="n" aria-hidden="true">3</span>
        <h3>Evidence builds itself</h3>
        <p>Acknowledgements, completions, screenings and inspections generate dated records as your team works. An audit request becomes a lookup.</p></li>
    </ol>
  </div>
</section>

<section class="sec sec-alt" id="results">
  <div class="wrap">
    <div class="sec-head rv">
      <p class="eyebrow">06 &mdash; The proof</p>
      <h2>What happens when the program actually works</h2>
      <p class="sec-lead">Representative engagements across the settings we work in most.</p>
    </div>
    <ul class="proof rv" id="use-cases">
      <li>
        <span class="tag">Family medicine</span>
        <h3>Federal inquiry closed with no corrective action</h3>
        <p>A four-provider practice received an OCR data request with a 30-day deadline and no compliance staff.</p>
        <p>Their advisor team assembled policies with revision history, per-employee training records and the current risk analysis, then helped draft the response.</p>
        <p class="res"><strong>Result:</strong> complete response inside the deadline. File closed, no penalty.</p>
      </li>
      <li>
        <span class="tag">Multi-site group</span>
        <h3>Six locations onto one program</h3>
        <p>Growth by acquisition left six sites with six inherited manuals and no shared view of training completion.</p>
        <p>One customised manual replaced all six, rosters merged, training standardised by role across every location.</p>
        <p class="res"><strong>Result:</strong> one board-level report, and new-practice onboarding cut from months to days.</p>
      </li>
      <li>
        <span class="tag">Business associate</span>
        <h3>Compliance became a sales asset</h3>
        <p>A billing company kept losing enterprise deals because it could not satisfy health-system security reviews.</p>
        <p>A full business associate program was implemented: documented risk analysis, workforce training, incident response, subcontractor agreements.</p>
        <p class="res"><strong>Result:</strong> security questionnaires answered from existing documentation instead of stalling deals.</p>
      </li>
    </ul>
    <ul class="quotes rv" style="margin-top:1.4rem">
      <li><figure class="quote">
        <div class="quote-top">
          <span class="quote-pic">${img({ src: '/assets/img/site/person-1.webp', alt: 'Practice Administrator', title: 'Practice Administrator', width: 425, height: 700, sizes: '56px' })}</span>
          <span class="quote-who">Practice Administrator<span>Multi-provider family medicine group</span></span>
        </div>
        <blockquote>&ldquo;We went from a binder nobody opened to a system that tells me exactly who is behind. When our advisor says she&rsquo;ll call back, she calls back.&rdquo;</blockquote>
      </figure></li>
      <li><figure class="quote">
        <div class="quote-top">
          <span class="quote-pic">${img({ src: '/assets/img/site/person-2.webp', alt: 'Compliance Officer', title: 'Compliance Officer', width: 425, height: 700, sizes: '56px' })}</span>
          <span class="quote-who">Compliance Officer<span>Regional specialty network</span></span>
        </div>
        <blockquote>&ldquo;The audit support alone justified the subscription. Having someone who had done this before on the phone within the hour changed the whole experience.&rdquo;</blockquote>
      </figure></li>
      <li><figure class="quote">
        <div class="quote-top">
          <span class="quote-pic">${img({ src: '/assets/img/site/person-3.webp', alt: 'Office Manager', title: 'Office Manager', width: 425, height: 700, sizes: '56px' })}</span>
          <span class="quote-who">Office Manager<span>Independent dermatology practice</span></span>
        </div>
        <blockquote>&ldquo;Our staff finishes their training now, which was never true before. The assignments show up, the reminders go out, and I stop chasing people.&rdquo;</blockquote>
      </figure></li>
    </ul>
  </div>
</section>

<section class="sec" id="why-hcp">
  <div class="wrap">
    <div class="sec-head rv">
      <p class="eyebrow">07 &mdash; Why us</p>
      <h2>Most vendors sell software or consulting. The gap between them is where programs fail.</h2>
      <p class="sec-lead">We refuse to sell one without the other &mdash; which is why the comparison below looks the way it does.</p>
    </div>
    <div class="table-scroll rv">
      <table class="compare">
        <caption>HCP compared with a typical healthcare compliance vendor</caption>
        <thead><tr><th scope="col">What matters</th><th scope="col">Healthcare Compliance Pros</th><th scope="col">Typical vendor</th></tr></thead>
        <tbody>
          <tr><th scope="row">Who you talk to</th><td class="yes">${icon('check','ic ic-sm')}<span>3&ndash;5 named advisors who know your organisation</span></td><td class="no">A shared support inbox or ticket queue</td></tr>
          <tr><th scope="row">Audit &amp; incident support</th><td class="yes">${icon('check','ic ic-sm')}<span>Included in every plan</span></td><td class="no">Billed hourly, exactly when you need it most</td></tr>
          <tr><th scope="row">Your policies</th><td class="yes">${icon('check','ic ic-sm')}<span>Customised to specialty and state, revised as rules change</span></td><td class="no">Templates you download and maintain yourself</td></tr>
          <tr><th scope="row">Coverage</th><td class="yes">${icon('check','ic ic-sm')}<span>HIPAA, OSHA and corporate compliance in one platform</span></td><td class="no">One domain, or separate products to license</td></tr>
          <tr><th scope="row">Risk analysis</th><td class="yes">${icon('check','ic ic-sm')}<span>Conducted against your real systems, with tracked remediation</span></td><td class="no">A self-service questionnaire producing a PDF</td></tr>
          <tr><th scope="row">Pricing</th><td class="yes">${icon('check','ic ic-sm')}<span>Scales with headcount &mdash; small practices get the same team</span></td><td class="no">Enterprise pricing, or a stripped-down small-business tier</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="sec sec-alt" id="faq">
  <div class="narrow">
    <div class="sec-head rv">
      <p class="eyebrow">08 &mdash; Your questions</p>
      <h2>The questions everyone asks first</h2>
    </div>
    <div class="faqs rv">
      ${faqs.map((f, i) => `<details class="faq"${i === 0 ? ' open' : ''}>
        <summary><span>${esc(f.q)}</span>${icon('plus','ic ic-sm')}</summary>
        <div class="faq-a"><p>${f.a}</p></div>
      </details>`).join('')}
    </div>
  </div>
</section>

<section class="close" id="get-started">
  <div class="wrap">
    <div class="sec-head rv">
      <p class="eyebrow">No cost, no obligation</p>
      <h2>Find out what an auditor would find</h2>
      <p class="sec-lead">Twenty minutes with a compliance advisor produces a written gap analysis &mdash; ranked by what would actually hurt you first. The findings are yours to keep, whether you hire us or not.</p>
    </div>
    <div class="lead-grid rv">
      <div class="lead-form">
        <h3>Request your free assessment</h3>
        <p>An advisor familiar with your setting will follow up, usually within one business day.</p>
        <form data-lead novalidate>
          <div class="f-row f-row-2">
            <div class="f"><label for="name">Your name <span class="req">*</span></label>
              <input type="text" id="name" name="name" autocomplete="name" placeholder="Jane Whitfield" required></div>
            <div class="f"><label for="org">Organisation <span class="req">*</span></label>
              <input type="text" id="org" name="organization" autocomplete="organization" placeholder="Riverside Family Medicine" required></div>
          </div>
          <div class="f-row f-row-2">
            <div class="f"><label for="email">Work email <span class="req">*</span></label>
              <input type="email" id="email" name="email" autocomplete="email" placeholder="jane@practice.com" required></div>
            <div class="f"><label for="phone">Phone</label>
              <input type="tel" id="phone" name="phone" autocomplete="tel" placeholder="(555) 123-4567"></div>
          </div>
          <div class="f-row f-row-2">
            <div class="f"><label for="size">Staff size</label>
              <select id="size" name="size">
                <option value="">Select&hellip;</option><option>1&ndash;10</option><option>11&ndash;25</option>
                <option>26&ndash;50</option><option>51&ndash;200</option><option>201+</option>
              </select></div>
            <div class="f"><label for="need">Most urgent need</label>
              <select id="need" name="need">
                <option value="">Select&hellip;</option>
                <option>Free risk assessment</option><option>HIPAA compliance</option>
                <option>OSHA compliance</option><option>Corporate compliance</option>
                <option>Staff training</option><option>Active audit or incident</option>
              </select></div>
          </div>
          <div class="f-row">
            <div class="f"><label for="msg">Anything we should know?</label>
              <textarea id="msg" name="message" placeholder="Specialty, number of locations, any deadline you&rsquo;re working against&hellip;"></textarea></div>
          </div>
          <p style="margin:0"><button type="submit" class="btn btn-lime btn-block btn-lg">Get my free assessment</button></p>
          <p class="f-note">We use your details only to respond to this request &mdash; see our <a href="/privacypolicy/">privacy policy</a>. Please don&rsquo;t include patient information.</p>
        </form>
      </div>
      <div>
        <ul class="lead-why">
          <li>${icon('shield','ic')}<div><b>Genuinely free</b><p>No cost, no obligation, and the written findings are yours whether or not you become a client.</p></div></li>
          <li>${icon('users','ic')}<div><b>An advisor, not a sales script</b><p>Your first conversation is with someone who can actually answer compliance questions.</p></div></li>
          <li>${icon('clock','ic')}<div><b>About twenty minutes</b><p>Scoped to respect your time. Deeper review only if the first pass suggests it&rsquo;s warranted.</p></div></li>
          <li>${icon('doc','ic')}<div><b>Straight answers</b><p>If your program is in good shape, we&rsquo;ll tell you that. If a gap is serious, we&rsquo;ll say so plainly.</p></div></li>
          <li>${icon('phone','ic')}<div><b>Prefer to talk now?</b><p>Call <a href="tel:${site.phoneE164}">${site.phoneDisplay}</a> and ask for a compliance advisor.</p></div></li>
        </ul>
      </div>
    </div>
  </div>
</section>`;

export default {
  path: '/',
  title: 'Healthcare Compliance Software | HIPAA, OSHA & Corporate',
  description: `HIPAA, OSHA and corporate compliance software backed by named advisors. Audit support included. Free risk assessment — call ${site.phoneDisplay}.`,
  ogTitle: 'Stop guessing whether you’d survive an audit',
  breadcrumbs: [],
  faqs,
  extraSchema: [{
    '@type': 'Service',
    '@id': abs('/#service'),
    name: 'Healthcare Compliance Program',
    description: 'HIPAA, OSHA and corporate compliance software with assigned compliance advisors, staff training and included audit support.',
    provider: { '@id': abs('/#organization') },
    areaServed: { '@type': 'Country', name: 'United States' },
    serviceType: 'Healthcare compliance',
    offers: { '@type': 'Offer', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: abs('/') }
  }],
  body
};
