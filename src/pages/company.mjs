import { icon, img, esc } from '../layout.mjs';
import { site, stats, leadership, differentiators, testimonials, suite } from '../site.mjs';
import { leadForm } from './product.mjs';

/* About and Contact, built differently from each other and from the
   homepage. About is editorial: a long column, a pull quote, the team
   given real room. Contact is a utility page: the phone number is the
   largest thing on it, there are three routes and almost no marketing,
   because somebody on a contact page has already decided to get in touch.

   Two things the live site does NOT state, and which are therefore not
   claimed here: a founding year and a street address. site.mjs still holds
   placeholders for both; neither reaches the copy. */

const aboutFaqs = [
  { q: 'Who actually does the work?',
    a: 'Healthcare and legal professionals with decades of experience across healthcare administration, compliance and IT. Every client is assigned an account specialist who gives direct access to that team, with check-ins through the year rather than a conversation at renewal.' },
  { q: 'Is the program customised, or off the shelf?',
    a: 'Customised. The training modules, forms and materials are built around your office, your policies and your procedures. A template program is the single most common reason an organization fails an audit it should have passed.' },
  { q: 'What do you actually cover?',
    a: 'HIPAA, OSHA and corporate compliance in one system, with the human resources requirements alongside them, plus billing and coding intelligence. The point is that the obligations stop living in separate places.' },
  { q: 'Who do you work with?',
    a: 'Medical practices, hospitals and health systems, medical billing organizations and business associates, across more than thirty clinical specialties.' }
];

const contactFaqs = [
  { q: 'Is the compliance review really free?',
    a: 'Yes. No cost, no obligation, and the written findings are yours to keep whether or not you become a client.' },
  { q: 'I am an existing client with a question.',
    a: `Call ${site.phoneDisplay} and ask for your account specialist, or sign in through the client login. Every client is assigned a specialist rather than a general support queue.` },
  { q: 'Can we talk before sharing any details?',
    a: `Call ${site.phoneDisplay}. You do not need to fill in a form first, and nothing about a first conversation requires you to share patient information.` }
];

const about = {
  path: '/about/',
  title: 'About Healthcare Compliance Pros | HCP',
  description: 'Healthcare and legal professionals with decades of experience in healthcare administration, compliance and IT. One platform, a named team, 1,000+ groups.',
  faqs: aboutFaqs,
  body: `
<section class="statement">
  <div class="wrap">
    <p class="statement-kicker rv">About Healthcare Compliance Pros</p>
    <h1 class="statement-h rv">You did not take the job to become a compliance officer.</h1>
    <p class="statement-sub rv">We are healthcare and legal professionals with decades of experience
    across healthcare administration, compliance and IT. We build the program, keep the records, and
    stand in front of you when someone comes asking.</p>
  </div>
</section>

<section class="sec field" id="what-we-do">
  <div class="wrap">
    <div class="essay rv">
      <div class="essay-body">
        <p class="essay-lead">Healthcare organizations are asked to manage HIPAA, OSHA, corporate
        compliance and human resources requirements at once, usually without a compliance department
        to do any of it.</p>
        <p>Our objective is plainly stated: deliver the tools, training and support our clients need to
        create quality systems. Superior care for their patients, and safety for their employees.</p>
        <p>That means online interactive training modules, forms and materials customised to your office,
        your policies and your procedures. Not a library you are left to configure. A template program is
        the most common reason an organization fails an audit it should have passed, because templates
        describe a practice nobody actually runs.</p>
        <p>It also means a person. Every client is assigned an account specialist who gives direct access
        to our expert team, with check-ins through the year rather than a conversation when a contract
        comes up for renewal.</p>
      </div>
      <aside class="essay-pull">
        <p>Software runs the program. People answer the question that software cannot.</p>
      </aside>
    </div>
  </div>
</section>

<section class="numbers-band">
  <div class="wrap">
    <ul class="numbers rv">
      ${stats.map((s) => `<li><b>${esc(s.figure)}</b><span>${esc(s.label)}</span></li>`).join('')}
    </ul>
  </div>
</section>

<section class="sec solid" id="leadership">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>The people behind it</h2>
      <p class="sec-lead">Operators from compliance, revenue integrity, healthcare M&amp;A, operations
      and technology.</p>
    </div>
    <ul class="roster rv">
      ${leadership.map((m) => `<li>
        ${m.img
          ? img({ src: m.img, alt: `${m.name}, ${m.role}`, title: `${m.name}, ${m.role}`, width: 320, height: 320, sizes: '(max-width: 760px) 50vw, 190px' })
          : `<span class="roster-initials" aria-hidden="true">${esc(m.name.split(' ').map((w) => w[0]).join(''))}</span>`}
        <b>${esc(m.name)}</b><span>${esc(m.role)}</span>
      </li>`).join('')}
    </ul>
  </div>
</section>

<section class="sec sec-soft field" id="why-hcp">
  <div class="wrap">
    <div class="sec-head rv"><h2>What we believe</h2></div>
    <ol class="manifesto rv">
      ${differentiators.map((d) => `<li>${esc(d)}</li>`).join('')}
    </ol>
  </div>
</section>

<section class="sec solid" id="use-cases">
  <div class="wrap">
    <div class="sec-head rv"><h2>In their words</h2></div>
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
    <div class="sec-head rv"><h2>Questions about working with us</h2></div>
    <div class="faqs rv">
      ${aboutFaqs.map((f, i) => `<details class="faq"${i === 0 ? ' open' : ''}>
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
<!-- A contact page is a utility, not a pitch. The phone number is the
     largest element, the three routes come next, and the marketing is
     kept to almost nothing because the visitor has already decided. -->
<section class="callout">
  <div class="wrap">
    <h1 class="callout-kicker rv">Talk to a compliance advisor</h1>
    <a class="callout-tel rv" href="tel:${site.phoneE164}">${site.phoneDisplay}</a>
    <p class="callout-sub rv">Ask for a compliance advisor, or for your account specialist if you are
    already a client. No form required first.</p>
  </div>
</section>

<section class="sec sec-tight solid" id="ways">
  <div class="wrap">
    <ul class="routes rv">
      <li>
        <span class="routes-n">01</span>
        <b>Call</b>
        <p>The fastest route, and the one most people use. ${esc(site.phoneDisplay)}.</p>
      </li>
      <li>
        <span class="routes-n">02</span>
        <b>Request a free review</b>
        <p>Twenty minutes, a written gap analysis ranked by exposure, yours to keep either way.</p>
      </li>
      <li>
        <span class="routes-n">03</span>
        <b>Client login</b>
        <p>Already with us? Sign in, or ask for your account specialist by name.</p>
      </li>
    </ul>
  </div>
</section>

<section class="sec field" id="what-happens">
  <div class="wrap">
    <div class="sec-head rv"><h2>What happens after you get in touch</h2></div>
    <ol class="steps-line rv">
      <li><span>Within one business day</span><p>An advisor familiar with your setting gets in touch. Not a sales development rep working from a script.</p></li>
      <li><span>About twenty minutes</span><p>A conversation about what you run and what you are exposed on, scoped to respect your time.</p></li>
      <li><span>A written gap analysis</span><p>Ranked by what would actually hurt you first, and yours to keep whether or not you become a client.</p></li>
    </ol>
  </div>
</section>

<section class="sec sec-soft solid" id="why-hcp">
  <div class="wrap">
    <div class="sec-head rv"><h2>Why people call us</h2></div>
    <ul class="whygrid rv">
      ${differentiators.map((x, i) => `<li><span class="whygrid-n">${String(i + 1).padStart(2, '0')}</span><p>${esc(x)}</p></li>`).join('')}
    </ul>
  </div>
</section>

<section class="sec field" id="use-cases">
  <div class="wrap">
    <div class="sec-head rv"><h2>In practice</h2></div>
    <figure class="bigquote rv">
      <blockquote>${esc(testimonials[0].quote)}</blockquote>
      <figcaption>${esc(testimonials[0].who)}<span>${esc(testimonials[0].org)}</span></figcaption>
    </figure>
  </div>
</section>

<section class="sec sec-soft solid" id="faq">
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

<section class="close" id="start">
  <div class="wrap sec">
    <div class="lead-grid">
      <div class="rv">
        <h2>Request your free compliance review.</h2>
        <p class="sec-lead">Tell us roughly what you are and an advisor familiar with that setting will
        follow up, usually within one business day.</p>
        <ul class="why">
          <li><div><b>Prefer to talk now?</b><p>Call <a href="tel:${site.phoneE164}" style="color:var(--lime)">${site.phoneDisplay}</a> and ask for a compliance advisor.</p></div></li>
          <li><div><b>Already a client?</b><p>Sign in through the <a href="${site.loginUrl}" rel="nofollow" style="color:var(--lime)">client login</a>, or ask for your account specialist.</p></div></li>
        </ul>
      </div>
      ${leadForm('Request your free compliance review', 'No cost, no obligation, and the findings are yours either way.')}
    </div>
  </div>
</section>
`
};

export default [about, contact];
