import { site, nav, footerNav } from './site.mjs';
import { spriteFor } from './icons.mjs';
import { createRequire } from 'node:module';
const manifest = createRequire(import.meta.url)('./image-manifest.json');

/* ------------------------------------------------------------------ *
 * Small helpers
 * ------------------------------------------------------------------ */

export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const abs = (path) => site.origin + path;

/**
 * Every <img> on this site goes through here, which is how we guarantee
 * the audit's "image title attributes not found" issue can never regress:
 * alt AND title are both required arguments.
 */
export function img({ src, alt, title, width, height, cls = '', loading = 'lazy', fetchpriority, sizes }) {
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
<meta name="theme-color" content="#094879">
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
<script type="application/ld+json">${buildGraph(page)}</script>`;
}

/* ------------------------------------------------------------------ *
 * Header / navigation
 * ------------------------------------------------------------------ */

// The official HCP logo, taken from the live site (1440x576 source, 2.5:1).
const logoMark = (cls) =>
  `<img src="/assets/img/logo.png" alt="Healthcare Compliance Pros" title="Healthcare Compliance Pros home" width="1440" height="576" class="${cls}" decoding="async" fetchpriority="high">`;

function navMarkup(currentPath) {
  return nav.map((item, i) => {
    const active = currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href));
    if (!item.items && !item.columns) {
      return `<li><a href="${item.href}"${active ? ' aria-current="page"' : ''}>${esc(item.label)}</a></li>`;
    }
    const id = `dd-${i}`;
    const panel = item.columns
      ? `<div class="dd-cols">${item.columns.map((c) =>
          `<div class="dd-col"><p class="dd-h">${c.heading}</p><ul>` +
          c.links.map((l) => `<li><a href="${l.href}">${esc(l.label)}</a></li>`).join('') +
          `</ul></div>`).join('')}</div>`
      : `<ul>${item.items.map((l) => `<li><a href="${l.href}">${esc(l.label)}</a></li>`).join('')}</ul>`;
    return `<li class="has-menu">
<button type="button" class="nav-trigger" aria-expanded="false" aria-controls="${id}"${active ? ' data-active="true"' : ''}>${esc(item.label)}${icon('chevron', 'ic ic-xs')}</button>
<div class="dd${item.columns ? ' dd-wide' : ''}" id="${id}" hidden>${panel}</div>
</li>`;
  }).join('');
}

function header(page) {
  return `<a class="skip" href="#main">Skip to main content</a>
<header class="site-head">
  <div class="wrap head-in">
    <a class="brand" href="/">${logoMark('brand-img')}</a>
    <div class="head-right">
      <div class="head-top">
        <a class="head-phone" href="tel:${site.phoneE164}">${icon('phone', 'ic ic-sm')}<span>${site.phone.replace(/-/g, '.')}</span></a>
        <a class="head-login" href="${site.loginUrl}" rel="nofollow">Login</a>
        <a class="btn btn-primary head-quote" href="/contact/">Schedule a Free Consultation</a>
      </div>
      <nav class="primary" aria-label="Primary">
        <ul class="nav-list">${navMarkup(page.path)}</ul>
        <a class="nav-search" href="/search/" aria-label="Search this site" title="Search">${icon('search', 'ic ic-sm')}</a>
      </nav>
    </div>
    <button type="button" class="burger" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="mobile-nav" id="mobile-nav" hidden>
    <nav aria-label="Mobile">
      <ul class="mnav">
        ${nav.map((item, i) => (item.items || item.columns)
          ? `<li><button type="button" class="macc" aria-expanded="false" aria-controls="macc-${i}">${esc(item.label)}${icon('chevron', 'ic ic-xs')}</button>
<div class="macc-panel" id="macc-${i}" hidden>${
              item.columns
                ? item.columns.map((c) => `${c.heading.trim() ? `<p class="dd-h">${c.heading}</p>` : ''}<ul>${c.links.map((l) => `<li><a href="${l.href}">${esc(l.label)}</a></li>`).join('')}</ul>`).join('')
                : `<ul>${item.items.map((l) => `<li><a href="${l.href}">${esc(l.label)}</a></li>`).join('')}</ul>`
            }</div></li>`
          : `<li><a href="${item.href}">${esc(item.label)}</a></li>`).join('')}
        <li><a href="${site.loginUrl}" rel="nofollow">Login</a></li>
      </ul>
      <div class="mnav-cta">
        <a class="btn btn-primary btn-block" href="/contact/">Schedule a Free Consultation</a>
        <a class="btn btn-ghost btn-block" href="tel:${site.phoneE164}">Call ${site.phoneDisplay}</a>
      </div>
    </nav>
  </div>
</header>`;
}

/** Visible breadcrumb trail, mirroring the BreadcrumbList schema. */
function breadcrumbNav(page) {
  if (page.path === '/') return '';
  const trail = [{ label: 'Home', href: '/' }, ...(page.breadcrumbs || [])];
  return `<nav class="crumbs" aria-label="Breadcrumb"><div class="wrap"><ol>` +
    trail.map((c, i) =>
      i === trail.length - 1
        ? `<li><span aria-current="page">${esc(c.label)}</span></li>`
        : `<li><a href="${c.href}">${esc(c.label)}</a></li>`
    ).join('') +
    `</ol></div></nav>`;
}

/* ------------------------------------------------------------------ *
 * Footer
 * ------------------------------------------------------------------ */

const socialLabels = { facebook: 'Facebook', x: 'X (Twitter)', youtube: 'YouTube', linkedin: 'LinkedIn' };

function footer() {
  const year = 2026;
  const socialLinks = site.social.map((url) => {
    const key = url.includes('facebook') ? 'facebook'
      : url.includes('x.com') ? 'x'
      : url.includes('youtube') ? 'youtube' : 'linkedin';
    return `<li><a href="${url}" rel="noopener me" target="_blank" aria-label="${socialLabels[key]}" title="${socialLabels[key]}">${icon(key, 'ic')}</a></li>`;
  }).join('');

  // The live site uses a single minimal footer bar rather than a sitemap
  // footer. Crawlability is carried by the primary nav, breadcrumbs and the
  // per-page "keep exploring" links.
  return `<footer class="site-foot" id="footer">
  <div class="wrap foot-bar">
    <p class="foot-copy">Copyright &copy; ${year} All Rights Reserved.</p>
    <ul class="foot-legal">
      <li><a href="/privacypolicy/">Privacy Policy</a></li>
      <li><a href="/fulfillment-policy/">Fulfillment Policy</a></li>
      <li><a href="tel:${site.phoneE164}">${site.phone}</a></li>
    </ul>
    <ul class="social">${socialLinks}</ul>
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
<html lang="en-US">
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
