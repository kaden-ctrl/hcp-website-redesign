# Healthcare Compliance Pros — website rebuild

A static, dependency-free rebuild of healthcarecompliancepros.com. Pages are generated
from content modules by `build.mjs`, which also **fails the build** if any page regresses
one of the twelve SEO/AEO audit findings this rebuild was commissioned to fix.

## Commands

```bash
node build.mjs             # build clean-URL site into dist/     (for deploying)
node build.mjs --serve     # build, then serve dist/ on :8080
node build.mjs --report    # build + per-page size / words / ratio table

node build-standalone.mjs  # build flat .html files into standalone/ (for opening)
```

No `npm install`. No dependencies. Node 18+.

## Two builds, same content

| | `dist/` | `standalone/` |
|---|---|---|
| URLs | `/compliance-solution/hipaa/` | `compliance-solution-hipaa.html` |
| Open by double-click | No — needs a server | **Yes** |
| CSS | external, async (non-blocking) | inlined into each page |
| Content-to-code | ~22% | ~16% |
| Best for | deploying to a host | emailing, reviewing, archiving |

Both pass all twelve audit checks. `standalone/` inlines the CSS because a
double-clicked `file://` page cannot rely on the preload→stylesheet swap firing
consistently across browsers, and inline `<style>` is not an external
render-blocking request. Keep the `assets/` folder next to the HTML files —
fonts, logo and JS still live there.

## Layout

```
build.mjs            generator + audit validator + sitemap/robots/llms.txt
src/
  site.mjs           brand, contact details, navigation, palette  <- edit this first
  layout.mjs         <head>, header, footer, JSON-LD graph builders
  components.mjs     reusable section builders
  shared.mjs         page factory; guarantees the 3 required AEO sections
  icons.mjs          29-icon set, inlined per page (only symbols actually used)
  pages/*.mjs        page content, one module per group
  _headers           security + caching headers (Netlify / Cloudflare Pages)
assets/
  css/critical.css   inlined into every <head>
  css/main.css       loaded non-render-blocking
  js/main.js         deferred; site works fully without it
  fonts/             self-hosted Lato + Plus Jakarta Sans (OFL), latin subset
  img/               logo, favicon, OG card
build-standalone.mjs flat-file build (relative paths, inlined CSS)
dist/                generated clean-URL output — deploy this
standalone/          generated flat .html files — open these directly
```

## How the 12 audit findings are fixed

| # | Finding | Fix |
|---|---------|-----|
| 1 | WebSite schema missing | `@graph` node on every page, with `SearchAction` |
| 2 | Organization schema missing | `@graph` node with logo, address, `contactPoint`, `sameAs` |
| 3 | BreadcrumbList missing | Generated from each page's `breadcrumbs`, mirrored by a visible trail |
| 4 | Missing llms.txt | Generated at `/llms.txt` from page metadata, so it cannot drift |
| 5 | Content-to-code ratio low | Lean semantic markup + long-form copy — averages ~22%, min gate 10% |
| 6 | Render-blocking resources | Inline critical CSS, preload/onload swap for the rest, deferred JS, self-hosted fonts |
| 7 | Charset not detected | `<meta charset="utf-8">` is the first element in `<head>`, asserted by the build |
| 8 | Meta description too long | Enforced 70–155 chars per page (build fails outside that range) |
| 9 | Image title attributes | `img()` helper *requires* both `alt` and `title`; build re-checks every `<img>` |
| 10 | No differentiators | `#why-hcp` section + comparison table, required on every indexable page |
| 11 | No FAQ / objections | `#faq` section + `FAQPage` schema, required on every indexable page |
| 12 | No use cases | `#use-cases` section, required on every indexable page |

Utility pages (`/404/`, `/search/`) are `noindex` and exempt from 5, 10, 11 and 12.

## Adding a page

Add an object to a module in `src/pages/`. Using `buildPage()` from `src/shared.mjs`
gives you the three required AEO sections automatically:

```js
export default [buildPage({
  path: '/new-page/',
  title: 'Page Title | HCP',          // <= 65 chars
  description: '...',                  // 70-155 chars
  breadcrumbs: [{ label: 'New Page', href: '/new-page/' }],
  group: 'Compliance solutions',       // groups it in llms.txt
  h1: '...', lead: '...',
  sections: [ /* section(), prose(), cards()... */ ],
  cases: [ /* 3+ use cases */ ],
  faqs:  [ /* 6+ Q&A, also becomes FAQPage schema */ ],
})];
```

Run `node build.mjs`. If anything is missing, the build tells you which finding regressed.

## Before going live

- [ ] **Replace placeholder contact details** in `src/site.mjs` — the street address and
      `info@` email are best guesses and must be confirmed.
- [ ] **Legal review** of `/privacypolicy/` and `/fulfillment-policy/` (drafts, not counsel-reviewed).
- [ ] **Swap testimonials** in `src/pages/company.mjs` + `home.mjs` for real approved client quotes.
- [ ] **Add real team bios/photos** to `/our-team/` — currently role descriptions, no named individuals.
- [ ] **Wire the contact form** to a real endpoint (set `action` on the form in
      `src/pages/company.mjs`); it currently falls back to `mailto:`.
- [ ] Confirm the statistics in the homepage stats band against current published sources.
- [ ] Point `/index/login-page` at the live client portal URL.
- [ ] Add analytics if wanted — keep it `defer`/`async` to preserve finding #6.
