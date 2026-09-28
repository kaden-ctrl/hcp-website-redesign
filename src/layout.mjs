import { site, nav, footerNav } from './site.mjs';
import { spriteFor } from './icons.mjs';
import { createRequire } from 'node:module';
const manifest = createRequire(import.meta.url)('./image-manifest.json');

/* ------------------------------------------------------------------ *
 * Small helpers
 * ------------------------------------------------------------------ */

// Entity-aware: a bare & is escaped, but an already-valid entity such as
// &amp; or &mdash; is left alone. Without this, copy written with HTML
// entities gets double-escaped and renders as literal "&amp;" on the page.
export const esc = (s = '') =>
  String(s)
    .replace(/&(?!(?:[a-zA-Z][a-zA-Z0-9]*|#[0-9]+|#x[0-9a-fA-F]+);)/g, '&amp;')
    .replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const abs = (path) => site.origin + path;

/**
 * Every <img> on this site goes through here, which is how we guarantee
 * the audit's "image title attributes not found" issue can never regress:
 * alt AND title are both required arguments.
 */
export function img({ src, alt, title, width, height, cls = '', loading = 'lazy', fetchpriority, sizes, style }) {
  // `title` is always required (audit finding #9). `alt` must always be present,
  // but may be deliberately empty for decorative images that sit beside a
  // visible text label — an empty alt is the correct accessibility choice there.
  if (alt === undefined || alt === null) throw new Error(`img() requires an alt attribute (src: ${src})`);
  if (!title) throw new Error(`img() requires a title attribute (src: ${src})`);

  // Responsive variants let the browser download a correctly sized file rather
  // than one desktop-width image for every viewport.
  const entry = manifest[src];
  let srcset = '';
  if (entry && entry.variants.length > 1) {
    const seen = new Set();
    const set = entry.variants
      .filter((v) => (seen.has(v.w) ? false : seen.add(v.w)))
      .sort((a, b) => a.w - b.w)
      .map((v) => `${v.file} ${v.w}w`)
      .join(', ');
    srcset = ` srcset="${set}" sizes="${sizes || '(max-width: 900px) 100vw, 50vw'}"`;
  }

  return `<img src="${src}"${srcset} alt="${esc(alt)}" title="${esc(title)}" width="${width}" height="${height}"` +
    (cls ? ` class="${cls}"` : '') +
    (style ? ` style="${style}"` : '') +
    ` loading="${loading}" decoding="async"` +
    (fetchpriority ? ` fetchpriority="${fetchpriority}"` : '') + '>';
}

/** Reference an icon from the per-page inline sprite (keeps markup lean). */
export const icon = (name, cls = 'ic') =>
  `<svg class="${cls}" aria-hidden="true" focusable="false"><use href="#${name}"></use></svg>`;

/* ------------------------------------------------------------------ *
 * Structured data (audit issues 1, 2, 3 + FAQPage)
 * ------------------------------------------------------------------ */

function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': abs('/#organization'),
    name: site.name,
    legalName: site.legalName,
    alternateName: site.shortName,
    url: abs('/'),
    logo: {
      '@type': 'ImageObject',
      '@id': abs('/#logo'),
      url: abs('/assets/img/logo.png'),
      contentUrl: abs('/assets/img/logo.png'),
      width: 1440,
      height: 576,
      caption: `${site.name} logo`
    },
    image: { '@id': abs('/#logo') },
    description:
      'Healthcare Compliance Pros provides HIPAA, OSHA and corporate compliance software, ' +
      'training and expert support for medical practices, hospitals and business associates.',
    foundingDate: site.founded,
    telephone: site.phoneE164,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: site.phoneE164,
        contactType: 'sales',
        areaServed: 'US',
        availableLanguage: 'English'
      },
      {
        '@type': 'ContactPoint',
        telephone: site.phoneE164,
        contactType: 'customer support',
        areaServed: 'US',
        availableLanguage: 'English'
      }
    ],
    sameAs: site.social,
    knowsAbout: [
      'HIPAA compliance', 'OSHA compliance', 'Corporate compliance', 'HIPAA Security Risk Analysis',
      'Fraud, Waste and Abuse training', 'Medical coding audits', 'Healthcare compliance training'
    ],
    areaServed: { '@type': 'Country', name: 'United States' }
  };
}

function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': abs('/#website'),
    url: abs('/'),
    name: site.name,
    alternateName: `${site.shortName} Compliance`,
    description: site.tagline,
    inLanguage: 'en-US',
    publisher: { '@id': abs('/#organization') },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: abs('/search/?q={search_term_string}') },
      'query-input': 'required name=search_term_string'
    }
  };
}

function breadcrumbSchema(page) {
  const trail = [{ label: 'Home', href: '/' }, ...(page.breadcrumbs || [])];
  return {
    '@type': 'BreadcrumbList',
    '@id': abs(page.path) + '#breadcrumb',
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: abs(c.href)
    }))
  };
}

function webPageSchema(page) {
  return {
    '@type': page.pageType || 'WebPage',
    '@id': abs(page.path) + '#webpage',
    url: abs(page.path),
    name: page.title,
    description: page.description,
    isPartOf: { '@id': abs('/#website') },
    about: { '@id': abs('/#organization') },
    breadcrumb: { '@id': abs(page.path) + '#breadcrumb' },
    inLanguage: 'en-US',
    datePublished: page.datePublished || '2026-01-06',
    dateModified: page.dateModified || '2026-09-15',
    primaryImageOfPage: { '@id': abs('/#logo') }
  };
}

function faqSchema(page) {
  if (!page.faqs || !page.faqs.length) return null;
  return {
    '@type': 'FAQPage',
    '@id': abs(page.path) + '#faq',
    mainEntity: page.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') }
    }))
  };
}

function buildGraph(page) {
  const graph = [
    organizationSchema(),
    websiteSchema(),
    webPageSchema(page),
    breadcrumbSchema(page)
  ];
  const faq = faqSchema(page);
  if (faq) graph.push(faq);
  if (page.extraSchema) graph.push(...page.extraSchema);
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}

/* ------------------------------------------------------------------ *
 * Head
 * ------------------------------------------------------------------ */

function head(page, criticalCss, cssHash) {
  const canonical = abs(page.path);
  const ogImage = abs(page.ogImage || '/assets/img/og-default.png');
  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="${page.noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'}">
<meta name="theme-color" content="#051f33">
<meta property="og:type" content="${page.ogType || 'website'}">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:locale" content="en_US">
<meta property="og:url" content="${canonical}">
<meta property="og:title" content="${esc(page.ogTitle || page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:image" content="${ogImage}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@HCPcompliance">
<meta name="twitter:title" content="${esc(page.ogTitle || page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${ogImage}">
<link rel="icon" href="/assets/img/favicon.png" type="image/png" sizes="48x48">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="sitemap" type="application/xml" href="/sitemap.xml">
<style>${criticalCss}</style>
<noscript><link rel="stylesheet" href="/assets/css/main.css?v=${cssHash}"><style>.rv{opacity:1!important;transform:none!important;animation:none!important}</style></noscript>
<script type="application/ld+json">${buildGraph(page)}</script>`;
}

/* ------------------------------------------------------------------ *
 * Header / navigation
 * ------------------------------------------------------------------ */

// The official HCP logo, taken from the live site (1440x576 source, 2.5:1).
// Displayed at 230x92; serve a 2x asset rather than the 1440px original,
// which is kept only as the Organization schema logo.
const logoMark = () =>
  `<img src="/assets/img/logo-230.png" srcset="/assets/img/logo-230.png 230w, /assets/img/logo-460.png 460w" sizes="196px" alt="Healthcare Compliance Pros" title="Healthcare Compliance Pros" width="230" height="92" decoding="async" fetchpriority="high">`;

/* Mirrors the menu structure on their existing site. Until the secondary
   pages are built, each item resolves to the matching section on this page
   rather than a dead link. */
function header() {
  const top = nav.map((m) => {
    if (!m.items && !m.columns) return `<li><a href="${m.href}">${esc(m.label)}</a></li>`;
    const panel = m.columns
      ? `<ul class="menu menu-wide">${m.columns.map((c) =>
          `<li><h5>${esc(c.heading)}</h5><ul>${c.links.map((l) =>
            `<li><a href="${l.href}">${esc(l.label)}</a></li>`).join('')}</ul></li>`).join('')}</ul>`
      : `<ul class="menu">${m.items.map((l) =>
          `<li><a href="${l.href}">${esc(l.label)}</a></li>`).join('')}</ul>`;
    return `<li><a href="${m.href}">${esc(m.label)}${icon('chevron', 'ic caret')}</a>${panel}</li>`;
  }).join('');

  return `<a class="visually-hidden" href="#main">Skip to main content</a>
<header class="site-head">
  <div class="wrap head-in">
    <a class="brand" href="/">${logoMark()}</a>
    <nav aria-label="Primary"><ul class="nav">${top}</ul></nav>
    <div class="head-cta">
      <a class="head-tel" href="tel:${site.phoneE164}">${site.phoneDisplay}</a>
      <a class="btn btn-primary" href="#start">Free review</a>
    </div>
    <button type="button" class="burger" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="mobile-nav" id="mobile-nav" hidden>
    <div class="wrap">
      <nav aria-label="Mobile"><ul class="mnav">
        ${nav.map((m) => `<li><a href="${m.href}">${esc(m.label)}</a></li>`).join('')}
      </ul></nav>
      <p class="mnav-cta">
        <a class="btn btn-primary" href="#start">Free compliance review</a>
        <a class="btn btn-ghost" style="color:var(--ink);border-color:rgba(5,31,51,.25)" href="tel:${site.phoneE164}">Call ${site.phoneDisplay}</a>
      </p>
    </div>
  </div>
</header>`;
}

function breadcrumbNav() { return ''; }

const socialLabels = { facebook: 'Facebook', x: 'X (Twitter)', youtube: 'YouTube', linkedin: 'LinkedIn' };

function footer() {
  const cols = footerNav.map((c) => `<nav aria-label="${esc(c.heading)}">
      <h4>${esc(c.heading)}</h4>
      <ul>${c.links.map((l) => `<li><a href="${l.href}">${esc(l.label)}</a></li>`).join('')}</ul>
    </nav>`).join('');

  const social = site.social.map((u) => {
    const k = u.includes('facebook') ? 'facebook' : u.includes('x.com') ? 'x'
      : u.includes('youtube') ? 'youtube' : 'linkedin';
    return `<li><a href="${u}" rel="noopener me" target="_blank" aria-label="${socialLabels[k]}" title="${socialLabels[k]}">${icon(k, 'ic ic-sm')}</a></li>`;
  }).join('');

  return `<footer class="site-foot" id="footer">
  <div class="wrap">
    <div class="foot-cols">${cols}</div>
    <div class="foot-base">
      <p style="margin:0">&copy; ${new Date().getFullYear()} ${esc(site.legalName)}. All rights reserved.</p>
      <ul class="foot-social">${social}</ul>
      <p style="margin:0">
        <a href="/privacypolicy/">Privacy policy</a> &nbsp;&middot;&nbsp;
        <a href="/fulfillment-policy/">Fulfillment policy</a> &nbsp;&middot;&nbsp;
        <a href="${site.loginUrl}" rel="nofollow">Client login</a>
      </p>
    </div>
  </div>
</footer>`;
}

/* ------------------------------------------------------------------ *
 * Page shell
 * ------------------------------------------------------------------ */

export function renderPage(page, { criticalCss, cssHash, jsHash }) {
  const shell = `${header(page)}
${breadcrumbNav(page)}
<main id="main">
${page.body}
</main>
${footer()}`;
  return `<!doctype html>
<html lang="en-US" data-css="/assets/css/main.css?v=${cssHash}">
<head>
${head(page, criticalCss, cssHash)}
</head>
<body class="${page.bodyClass || ''}">
${spriteFor(shell)}
${shell}
<script src="/assets/js/main.js?v=${jsHash}" defer></script>
</body>
</html>`;
}
