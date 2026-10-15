import { esc, icon } from './layout.mjs';
import { site, stats, differentiators } from './site.mjs';
import { leadForm } from './pages/product.mjs';

/* Shared page furniture. These were written inline in roster.mjs and are now
   used by the ported pages too, so they live in one place rather than being
   copied: the nav labels already taught us what happens when two copies of
   the same thing are maintained by hand. */

export const pageHead = (label, h1, lead) => `
<section class="sec sec-tight field">
  <div class="wrap">
    <div class="page-head">
      <span class="mono-label">${esc(label)}</span>
      <h1>${esc(h1)}</h1>
      ${lead ? `<p class="sec-lead">${esc(lead)}</p>` : ''}
    </div>
  </div>
</section>`;

export const figureBand = `
<section class="sec sec-tight field">
  <div class="wrap">
    <ul class="figs">
      ${stats.map((s) => `<li><b>${esc(s.figure)}</b><span>${esc(s.label)}</span></li>`).join('')}
    </ul>
  </div>
</section>`;

/* Checks 10, 11 and 12 require differentiators, objection handling and use
   cases on every indexable page. These supply them for pages that have no
   section of their own to carry the id. */
export const whyBlock = (lead) => `
<section class="sec sec-soft solid" id="why-hcp">
  <div class="wrap">
    <div class="sec-head">
      <h2>Why run it with HCP</h2>
      <p class="sec-lead">${esc(lead)}</p>
    </div>
    <ul class="diffs">
      ${differentiators.map((d) => `<li><span class="bar" aria-hidden="true"></span><p>${esc(d)}</p></li>`).join('')}
    </ul>
  </div>
</section>`;

export const faqBlock = (faqs) => `
<section class="sec field" id="faq">
  <div class="narrow">
    <div class="sec-head"><h2>Questions people ask first</h2></div>
    <div class="faqs">
      ${faqs.map((f, i) => `<details class="faq"${i === 0 ? ' open' : ''}>
        <summary><span>${esc(f.q)}</span>${icon('plus', 'ic ic-sm')}</summary>
        <div class="faq-a"><p>${esc(f.a)}</p></div>
      </details>`).join('')}
    </div>
  </div>
</section>`;

export const useCases = (heading, quote) => `
<section class="sec sec-soft solid" id="use-cases">
  <div class="wrap">
    <div class="sec-head"><h2>${esc(heading)}</h2></div>
    <figure class="lede-q">
      <blockquote>${esc(quote.quote)}</blockquote>
      <figcaption>
        <b>${esc(quote.who)}</b>
        <span>${esc(quote.org)}</span>
        <em>${esc(quote.tag)}</em>
      </figcaption>
    </figure>
  </div>
</section>`;

export const closeBlock = (h2, lead) => `
<section class="close" id="start">
  <div class="wrap sec">
    <div class="lead-grid">
      <div>
        <h2>${esc(h2)}</h2>
        <p class="sec-lead">${esc(lead)}</p>
        <ul class="why">
          <li><div><b>Genuinely free</b><p>No cost, no obligation, and the written findings are yours whether or not you become a client.</p></div></li>
          <li><div><b>Prefer to talk now?</b><p>Call <a href="tel:${site.phoneE164}" style="color:var(--lime)">${site.phoneDisplay}</a> and ask for a compliance advisor.</p></div></li>
        </ul>
      </div>
      ${leadForm()}
    </div>
  </div>
</section>`;
