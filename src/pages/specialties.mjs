import { icon, img, esc } from '../layout.mjs';
import { site, directory, suite, testimonials, differentiators } from '../site.mjs';

/* One page replaces the twenty-item dropdown. Its job is routing: work out
   what the visitor is, then send them to the right page. Two axes, because
   people arrive thinking in either one:
     what kind of organization am I    (practice, hospital, BA, billing, PE)
     what kind of care do I deliver    (the clinical specialty)
   The finder is progressive enhancement. Without script every entry is
   listed and every link works; script only filters what is already there. */

const orgs = directory.filter((d) => d.kind === 'organization');
const specs = directory.filter((d) => d.kind === 'specialty');

const faqs = [
  { q: 'My specialty is not listed. Can you still help?',
    a: 'Yes. The list covers where we work most often, not the limit of what we support. Policy sets and benchmarks are built per engagement, so an unlisted specialty is a scoping conversation rather than a refusal.' },
  { q: 'What actually changes between specialties?',
    a: 'The risk profile and the benchmarks. A dermatology practice and a behavioral health group face different documentation exposure, different billing patterns and different state overlays. Generic policy templates are the single most common reason a program fails an audit it should have passed.' },
  { q: 'We are a billing company, not a provider. Which applies to us?',
    a: 'Start with the organization route rather than the specialty route. Billing companies and other business associates carry obligations under their BAAs that look different from a provider practice, even when serving the same specialty.' },
  { q: 'We operate across several specialties. Which page is right?',
    a: 'Pick the organization that describes you and treat the specialty pages as reference. Multi-specialty groups are configured once at the organization level, with the specialty calibration applied per department.' }
];

const body = `
<section class="hero hero-short">
  <div class="hero-media">
    ${img({ src: '/assets/img/site/feature-comprehensive.webp', alt: '', title: 'Healthcare teams across specialties',
            width: 1600, height: 720, loading: 'eager', fetchpriority: 'high', sizes: '100vw' })}
  </div>
  <div class="wrap hero-in">
    <h1>Find the program built for <em>your</em> setting.</h1>
    <p class="hero-lead">Compliance exposure is not the same for a dermatology practice, a billing company
    and a private equity platform. Tell us which one you are and we will take you to the right place.</p>
  </div>
</section>

<section class="sec sec-tight field" id="finder">
  <div class="wrap">
    <div class="finder rv" data-finder>
      <div class="finder-bar">
        <label class="finder-search">
          <span class="visually-hidden">Search specialties and organizations</span>
          <input type="search" id="q" placeholder="Search: orthopedics, billing, private equity..." autocomplete="off" data-finder-input>
        </label>
        <div class="finder-tabs" role="group" aria-label="Filter by type">
          <button type="button" class="ft is-on" data-filter="all" aria-pressed="true">Everything</button>
          <button type="button" class="ft" data-filter="organization" aria-pressed="false">By organization</button>
          <button type="button" class="ft" data-filter="specialty" aria-pressed="false">By specialty</button>
        </div>
      </div>
      <p class="finder-count" data-finder-count aria-live="polite"></p>
    </div>

    <div class="rv">
      <h2 class="group-h" data-group="organization">What kind of organization are you?</h2>
      <p class="group-lead" data-group="organization">Start here if your obligations come from what your
      business does rather than the care it delivers.</p>
      <ul class="dir dir-org" data-list>
        ${orgs.map((d) => `<li data-kind="organization" data-name="${esc(d.name.toLowerCase())}">
          <a href="${d.href}">
            <b>${esc(d.name)}</b>
            <span>${esc(d.blurb)}</span>
          </a>
        </li>`).join('')}
      </ul>
    </div>

    <div class="rv" style="margin-top:clamp(2.5rem,2rem + 2vw,3.5rem)">
      <h2 class="group-h" data-group="specialty">What kind of care do you deliver?</h2>
      <p class="group-lead" data-group="specialty">Benchmarks, policy sets and training are calibrated to
      the specialty, which is what makes the findings usable rather than generic.</p>
      <ul class="dir dir-spec" data-list>
        ${specs.map((d) => `<li data-kind="specialty" data-name="${esc(d.name.toLowerCase())}">
          <a href="${d.href}"><b>${esc(d.name)}</b></a>
        </li>`).join('')}
        <li class="dir-other" data-kind="specialty" data-name="other not listed something else">
          <a href="/specialties/other/"><b>Something else</b><span>Not listed, or spanning several settings.</span></a>
        </li>
      </ul>
    </div>

    <div class="finder-empty" data-finder-empty hidden>
      <p>Nothing matches that. The list covers where we work most often rather than the limit of what we
      support, so an unlisted setting is a scoping conversation rather than a no.</p>
      <p style="margin:0">
        <a class="btn btn-primary" href="/specialties/other/">See the program for any setting</a>
      </p>
    </div>
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

<section class="sec field" id="what-we-offer">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>The same four products underneath.</h2>
      <p class="sec-lead">Your setting changes the configuration, not the platform. Take the whole suite or
      the single piece you are missing.</p>
    </div>
    <ul class="suite rv">
      ${suite.map((p) => `<li class="prod">
        <div class="prod-h">
          <span class="prod-name">${esc(p.name)}</span>
          <span class="prod-kind">${esc(p.kind)}</span>
        </div>
        <p class="prod-blurb">${esc(p.blurb)}</p>
        <ul>${p.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
        <a class="prod-link" href="${p.href}">Explore ${esc(p.name)}</a>
      </li>`).join('')}
    </ul>
  </div>
</section>

<section class="sec sec-soft field" id="why-hcp">
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
      <h2>What this looks like in practice</h2>
      <p class="sec-lead">Organizations across orthopedics, behavioral health, cardiology and private
      equity, each configured for their own setting.</p>
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

<section class="sec sec-soft field" id="faq">
  <div class="narrow">
    <div class="sec-head rv">
      <h2>Choosing the right route</h2>
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
        <h2>Not sure which one you are?</h2>
        <p class="sec-lead">Plenty of organizations sit across more than one of these. Twenty minutes with
        an advisor settles it, and you leave with a written gap analysis for your actual setting.</p>
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
          <div><label for="need">Your setting</label><select id="need" name="need">
            <option value="">Select...</option>
            ${orgs.map((d) => `<option>${esc(d.name)}</option>`).join('')}
            <option>A clinical specialty practice</option><option>Not sure yet</option></select></div>
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
  path: '/specialties/',
  title: 'Specialties and Organizations We Serve | HCP',
  description: 'Find the compliance program built for your setting. Medical practices, hospitals, billing companies, private equity and 20+ clinical specialties.',
  body,
  faqs
};
