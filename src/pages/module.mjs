import { icon, img, esc } from '../layout.mjs';
import { site, modules, suite, sevenElements, stats, differentiators, testimonials } from '../site.mjs';
import { leadForm } from './product.mjs';

/* The four SHIELD modules as pages of their own.
   These are siblings rather than four more product pages: each opens on
   its own claim, lists what it actually covers, then places itself back
   inside SHIELD rather than pretending to be a standalone product. The
   corporate module is the one that carries the seven elements, because
   that is where they belong. */

const faqsFor = (m) => {
  const own = {
    hipaa: [
      { q: 'How often does the Security Risk Analysis need redoing?',
        a: 'Whenever your systems change materially, and at least annually. An SRA describing a practice you no longer run is the most common finding in an investigation, because it was accurate once and then nobody revisited it.' },
      { q: 'What happens when we report an incident?',
        a: 'You get online tools, expert support and step-by-step guidance from the moment it is logged, aligned to the Breach Notification Rule. The point is that the clock starts immediately and somebody who has done this before is on it.' }
    ],
    osha: [
      { q: 'Does this cover our Safety Data Sheets?',
        a: 'Yes. Every sheet lives in a virtual binder, available to download and print, so it can be produced during an inspection rather than hunted for.' },
      { q: 'What is a self-guided inspection?',
        a: 'A walkthrough that simulates the official one. You find what an inspector would find, in your own time, with the chance to fix it first.' }
    ],
    corporate: [
      { q: 'Why does exclusion monitoring need to be monthly?',
        a: 'Employing an excluded individual creates liability on every claim their work touches, and exclusion lists change continuously. Monthly screening against the LEIE, SAM and state Medicaid lists is what keeps that from accumulating quietly.' },
      { q: 'Does the hotline have to be anonymous?',
        a: 'An effective programme needs a route that does not run through somebody’s manager. Reports can be made anonymously, online or on a toll-free number.' }
    ],
    lms: [
      { q: 'Does the training carry CME or CEU credit?',
        a: 'Yes, across more than 130 course titles. Credit is available where the course qualifies, and certificates are stored against each person as they complete.' },
      { q: 'Can we deliver our own material through it?',
        a: 'Yes. Custom courses sit alongside the library, so staff have one place to go rather than a compliance system and a separate internal one.' }
    ]
  };
  return own[m.key].concat([
    { q: 'Is this sold separately from SHIELD?',
      a: 'It is part of SHIELD rather than a separate product. SHIELD is the system of record; this is one of the four modules inside it, and the evidence it produces lands in the same place as everything else.' },
    { q: 'How fast can we be up and running?',
      a: 'Most organizations are fully live in two to three weeks. Your advisor does the heavy lifting: policy customization, staff roster, training assignment. Your team spends about three hours in total.' }
  ]);
};

function build(m) {
  const faqs = faqsFor(m);
  const siblings = modules.filter((o) => o.key !== m.key);

  const body = `
<section class="hero hero-short">
  <div class="hero-media">
    ${img({ src: m.img, alt: '', title: m.name, width: 1600, height: 720,
            loading: 'eager', fetchpriority: 'high', sizes: '100vw' })}
  </div>
  <div class="wrap hero-in">
    <p class="prod-posture" style="color:var(--lime)">SHIELD module &middot; ${esc(m.tag)}</p>
    <h1>${esc(m.name)}</h1>
    <p class="hero-lead">${esc(m.lede)}</p>
    <p class="hero-cta">
      <a class="btn btn-primary" href="#start">Get your free compliance review</a>
      <a class="btn btn-ghost" href="/compliance-solution/">See all of SHIELD</a>
    </p>
  </div>
</section>

<section class="band"><div class="wrap band-in"><p>${esc(m.why)}</p></div></section>

<section class="sec sec-loose field" id="what-it-covers">
  <div class="wrap">
    <div class="sec-head rv"><h2>What it covers</h2></div>
    <ol class="modfeat rv">
      ${m.features.map(([t, b], i) => `<li>
        <span class="modfeat-n">${String(i + 1).padStart(2, '0')}</span>
        <div><b>${esc(t)}</b><p>${esc(b)}</p></div>
      </li>`).join('')}
    </ol>
  </div>
</section>

${m.key === 'corporate' ? `<section class="sec sec-soft solid" id="seven-elements">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>The seven elements</h2>
      <p class="sec-lead">The Office of Inspector General defines what an effective compliance program
      requires. This module is where all seven are maintained.</p>
    </div>
    <ol class="chain rv">
      ${sevenElements.map((e, i) => `<li><span class="chain-n">${String(i + 1).padStart(2, '0')}</span><span class="chain-t">${esc(e)}</span></li>`).join('')}
    </ol>
  </div>
</section>` : `<section class="sec sec-soft solid" id="in-shield">
  <div class="wrap">
    <div class="sec-head rv">
      <h2>Where this sits</h2>
      <p class="sec-lead">${esc(m.name)} is one of four modules inside SHIELD. They share one login, one
      completion view and one documentation vault, which is the whole point of not buying them separately.</p>
    </div>
    <ul class="modsibs rv">
      ${siblings.map((o) => `<li><a href="${o.href}"><b>${esc(o.name)}</b><span>${esc(o.tag)}</span></a></li>`).join('')}
    </ul>
  </div>
</section>`}

<section class="sec field" id="why-hcp">
  <div class="wrap">
    <div class="sec-head rv"><h2>Why run it with HCP</h2></div>
    <ul class="whygrid rv">
      ${differentiators.map((x, i) => `<li><span class="whygrid-n">${String(i + 1).padStart(2, '0')}</span><p>${esc(x)}</p></li>`).join('')}
    </ul>
  </div>
</section>

<section class="sec sec-soft solid" id="use-cases">
  <div class="wrap">
    <div class="sec-head rv"><h2>In practice</h2></div>
    <figure class="bigquote rv">
      <blockquote>${esc(testimonials[0].quote)}</blockquote>
      <figcaption>${esc(testimonials[0].who)}<span>${esc(testimonials[0].org)}</span></figcaption>
    </figure>
    <ul class="stats rv">
      ${stats.map((s) => `<li class="stat"><b>${esc(s.figure)}</b><span>${esc(s.label)}</span></li>`).join('')}
    </ul>
  </div>
</section>

<section class="sec field" id="faq">
  <div class="narrow">
    <div class="sec-head rv"><h2>Questions about ${esc(m.name.toLowerCase())}</h2></div>
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
        <h2>See where you stand on ${esc(m.name.toLowerCase())}.</h2>
        <p class="sec-lead">Twenty minutes with an advisor produces a written gap analysis for your own
        setting, ranked by what would actually hurt you first.</p>
        <ul class="why">
          <li><div><b>Genuinely free</b><p>No cost, no obligation, and the written findings are yours whether or not you become a client.</p></div></li>
          <li><div><b>Prefer to talk now?</b><p>Call <a href="tel:${site.phoneE164}" style="color:var(--lime)">${site.phoneDisplay}</a> and ask for a compliance advisor.</p></div></li>
        </ul>
      </div>
      ${leadForm()}
    </div>
  </div>
</section>
`;

  return {
    path: m.href,
    title: `${m.name} | SHIELD | HCP`,
    description: `${m.lede}`.slice(0, 154),
    body,
    faqs,
    parent: { name: 'SHIELD', path: '/compliance-solution/' }
  };
}

export default modules.map(build);
