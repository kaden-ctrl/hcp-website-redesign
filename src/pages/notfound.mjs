import { esc } from '../layout.mjs';
import { site, suite } from '../site.mjs';

/* The 404. netlify.toml has routed /* here since the site was set up, but
   nothing ever built the file, so Netlify fell back to its own generic
   page: 3.4KB, no nav, no branding, no way back. Found by testing a dead
   URL rather than by reading the config, which looked correct.

   It matters more than usual right now. The article archive moved 45 URLs
   onto their real paths, their own site has pages we have not carried over,
   and anything inbound from the old CMS can land anywhere. Somebody
   arriving here is mid-task, so the page is a set of routes rather than an
   apology.

   noindex, and out of the sitemap, so the audit's sales-page checks do not
   apply. Everything else still does. */

const routes = [
  ...suite.map((p) => [p.name, p.kind, p.href]),
  ['Specialties', 'Programs calibrated by setting', '/specialties/'],
  ['Compliance Insider', 'The whole article archive, 2011 to today', '/blog/'],
  ['Contact', 'Talk to a compliance advisor', '/contact/']
];

const body = `
<section class="sec sec-tight field">
  <div class="wrap">
    <div class="page-head">
      <span class="mono-label">404</span>
      <h1>That page is not here.</h1>
      <p class="sec-lead">The link may be out of date, or the address may have a typo in it.
      Nothing is wrong with your account or your program. Here is where most people are
      heading.</p>
    </div>
  </div>
</section>

<section class="sec sec-tight field">
  <div class="wrap">
    <ul class="nf-routes">
      ${routes.map(([name, note, href]) => `<li>
        <a href="${href}">
          <b>${esc(name)}</b>
          <span>${esc(note)}</span>
        </a>
      </li>`).join('')}
    </ul>

    <div class="nf-foot">
      <p>Looking for an article? The archive runs from 2011 and everything in it is still
      published, so it is almost certainly there under a slightly different address.
      <a class="inline-link" href="/blog/">Browse the archive</a>.</p>
      <p>Trying to sign in? Use the
      <a class="inline-link" href="${site.loginUrl}" rel="nofollow">client login</a>.</p>
      <p>Still stuck? Call <a class="inline-link" href="tel:${site.phoneE164}">${site.phoneDisplay}</a>
      and ask for a compliance advisor.</p>
    </div>
  </div>
</section>`;

export default {
  path: '/404/',
  title: 'Page not found | Healthcare Compliance Pros',
  description: 'That page is not here. Routes through to the compliance platform, the specialty programs, the article archive and a compliance advisor.',
  noindex: true,
  body
};
