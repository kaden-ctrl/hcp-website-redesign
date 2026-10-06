import { icon, img, esc } from '../layout.mjs';
import { site, stats, leadership, suite, differentiators, testimonials } from '../site.mjs';
import { leadForm } from './product.mjs';

/* About and Contact.
   Content comes from the live site's own About and Contact pages. Two
   things that page does NOT state, and which are therefore not claimed
   here: a founding year, and a street address. site.mjs still carries a
   placeholder for both; until they are confirmed, neither appears in the
   copy. The Contact page leads with the phone number because that is what
   the live site leads with. */

const aboutFaqs = [
  { q: 'Who actually does the work?',
    a: 'Healthcare and legal professionals with decades of experience across healthcare administration, compliance and IT. Every client is assigned an account specialist who gives direct access to that team, with check-ins through the year rather than an annual review.' },
  { q: 'Is the program customised, or off the shelf?',
    a: 'Customised. The training modules, forms and materials are built around your office, your policies and your procedures. Generic templates are the single most common reason a program fails an audit it should have passed.' },
  { q: 'What do you actually cover?',
    a: 'HIPAA, OSHA and corporate compliance in one system, with human resources requirements alongside them, plus billing and coding intelligence. The point is that the obligations stop living in separate places.' },
  { q: 'Who do you work with?',
    a: 'Medical practices, hospitals and health systems, medical billing organizations and business associates, across more than thirty clinical specialties.' }
];

const contactFaqs = [
  { q: 'What happens after I get in touch?',
    a: 'An advisor familiar with your setting follows up, usually within one business day. The first conversation is roughly twenty minutes and produces a written gap analysis ranked by what would actually hurt you first.' },
  { q: 'Is the compliance review really free?',
    a: 'Yes. No cost, no obligation, and the written findings are yours to keep whether or not you become a client.' },
  { q: 'I am an existing client with a question.',
    a: `Call ${site.phoneDisplay} and ask for your account specialist, or sign in through the client login. Every client is assigned a specialist rather than a general support queue.` },
  { q: 'Can we talk to someone before sharing any details?',
    a: `Call ${site.phoneDisplay}. You do not need to fill in a form first, and nothing about the first conversation requires you to share patient information.` }
];

const about = {
  path: '/about/',
  title: 'About Healthcare Compliance Pros | HCP',
  description: 'Healthcare and legal professionals with decades of experience in healthcare administration, compliance and IT. One platform, a named team, 1,000+ groups.',
  faqs: aboutFaqs,
  body: `
<section class="hero hero-short">
  <div class="hero-media">
    ${img({ src: '/assets/img/site/about-2.webp', alt: '', title: 'The Healthcare Compliance Pros team',
            width: 1600, height: 720, loading: 'eager', fetchpriority: 'high', sizes: '100vw' })}
  </div>
  <div class="wrap hero-in">
    <h1>Compliance should not be the thing you worry about.</h1>
    <p class="hero-lead">Healthcare Compliance Pros is staffed by healthcare and legal professionals with
    decades of experience across healthcare administration, compliance and IT. We build the program, keep
    the records, and stand in front of you when someone comes asking.</p>
    <p class="hero-cta">
      <a class="btn btn-primary" href="/contact/">Talk to an advisor</a>
      <a class="btn btn-ghost" href="tel:${site.phoneE164}">Call ${site.phoneDisplay}</a>
    </p>
  </div>
</section>

<section class="band"><div class="wrap band-in"><p>A decade of trust. Over a thousand organizations protected.</p></div></section>

<section class="sec sec-loose field" id="what-we-do">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>What we set out to do</h2>
      <p class="sec-lead">Healthcare organizations are asked to manage HIPAA, OSHA, corporate compliance
      and human resources requirements at once, usually without a compliance department to do it. Our
      objective is to deliver the tools, training and support our clients need to create quality systems:
      superior care for their patients, and safety for their employees.</p>
    </div>
    <div class="split rv">
      <div class="split-a">
        <h3>Not one size, fitted to nobody</h3>
        <p>Online interactive training modules, forms and materials, customised to your office, your
        policies and your procedures. A template program is the most common reason an organization fails
        an audit it should have passed.</p>
      </div>
      <div class="split-b">
        <h3>A named specialist, not a queue</h3>
        <p>Every client is assigned an account specialist who gives direct access to our expert team,
        with check-ins through the year rather than a conversation once a contract is up for renewal.</p>
        <p class="split-note">Software runs the program. People answer the hard question.</p>
      </div>
    </div>
    <ul class="stats rv" style="margin-top:clamp(2.5rem,2rem + 2vw,3.5rem)">
      ${stats.map((s) => `<li class="stat"><b>${esc(s.figure)}</b><span>${esc(s.label)}</span></li>`).join('')}
    </ul>
  </div>
</section>

<section class="sec sec-soft field" id="why-hcp">
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

<section class="sec field" id="leadership">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>Leadership</h2>
      <p class="sec-lead">Operators from compliance, revenue integrity, healthcare M&amp;A, operations
      and technology.</p>
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

<section class="sec sec-soft field" id="use-cases">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>What this looks like in practice</h2>
      <p class="sec-lead">Across practice groups, private equity and behavioral health.</p>
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

<section class="sec field" id="faq">
  <div class="narrow">
    <div class="sec-head rv"><h2>Questions about working with us</h2></div>
    <div class="faqs rv">
      ${aboutFaqs.map((f, i) => `<details class="faq"${i === 0 ? ' open' : ''}>
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
          <li><div><b>Prefer to talk now?</b><p>Call <a href="tel:${site.phoneE164}" style="color:var(--lime)">${site.phoneDisplay}</a> and ask for a compliance advisor.</p></div></li>
        </ul>
      </div>
      ${leadForm()}
    </div>
  </div>
</section>
`
};

const contact = {
  path: '/contact/',
  title: 'Contact Healthcare Compliance Pros | HCP',
  description: `Talk to a compliance advisor. Call ${site.phoneDisplay} or request a free compliance review and get written findings for your own setting.`,
  faqs: contactFaqs,
  body: `
<section class="hero hero-short">
  <div class="hero-media">
    ${img({ src: '/assets/img/site/feature-map.webp', alt: '', title: 'Speak to a compliance advisor',
            width: 1600, height: 720, loading: 'eager', fetchpriority: 'high', sizes: '100vw' })}
  </div>
  <div class="wrap hero-in">
    <h1>Talk to a compliance advisor.</h1>
    <p class="hero-lead">Call and ask for one, or request a free compliance review and we will come to
    you. Either way the first conversation is about your setting, not a product demonstration.</p>
    <p class="hero-cta">
      <a class="btn btn-primary" href="tel:${site.phoneE164}">Call ${site.phoneDisplay}</a>
      <a class="btn btn-ghost" href="#start">Request a free review</a>
    </p>
  </div>
</section>

<section class="sec sec-tight field" id="ways">
  <div class="wrap">
    <ul class="ways rv">
      <li>
        <span class="ways-label">By phone</span>
        <a class="ways-main" href="tel:${site.phoneE164}">${site.phoneDisplay}</a>
        <p>The fastest route. Ask for a compliance advisor, or for your account specialist if you are
        already a client.</p>
      </li>
      <li>
        <span class="ways-label">Free compliance review</span>
        <a class="ways-main" href="#start">Request a review</a>
        <p>Twenty minutes, a written gap analysis ranked by exposure, and the findings are yours whether
        or not you become a client.</p>
      </li>
      <li>
        <span class="ways-label">Existing clients</span>
        <a class="ways-main" href="${site.loginUrl}" rel="nofollow">Client login</a>
        <p>Sign in to your program. Every client is assigned an account specialist rather than a general
        support queue.</p>
      </li>
    </ul>
  </div>
</section>

<section class="photoband">
  ${img({ src: '/assets/img/site/about-2.webp', alt: '', title: 'Clinical staff in a compliance session',
          width: 1600, height: 620, sizes: '100vw' })}
  <div class="wrap photoband-in">
    <p>An advisor, not a sales script.</p>
    <p class="sub">Your first conversation is with someone who can answer a compliance question, because
    that is usually the thing standing between you and a decision.</p>
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
      <p class="sec-lead">Across practice groups, private equity and behavioral health.</p>
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

<section class="sec field" id="faq">
  <div class="narrow">
    <div class="sec-head rv"><h2>Before you get in touch</h2></div>
    <div class="faqs rv">
      ${contactFaqs.map((f, i) => `<details class="faq"${i === 0 ? ' open' : ''}>
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
        <h2>Request your free compliance review.</h2>
        <p class="sec-lead">Tell us roughly what you are and an advisor familiar with that setting will
        follow up, usually within one business day.</p>
        <ul class="why">
          <li><div><b>Genuinely free</b><p>No cost, no obligation, and the written findings are yours whether or not you become a client.</p></div></li>
          <li><div><b>About twenty minutes</b><p>Scoped to respect your time. A deeper review happens only if the first pass suggests it is warranted.</p></div></li>
          <li><div><b>Prefer to talk now?</b><p>Call <a href="tel:${site.phoneE164}" style="color:var(--lime)">${site.phoneDisplay}</a> and ask for a compliance advisor.</p></div></li>
        </ul>
      </div>
      ${leadForm()}
    </div>
  </div>
</section>
`
};

export default [about, contact];
