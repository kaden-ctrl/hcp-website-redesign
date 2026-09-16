import {
  hero, section, prose, cards, checklist, steps, stats,
  differentiators, useCases, faqSection, quotes, cta, related, icon,
  pillar, services, media, featureRow, programTabs
} from './components.mjs';

/* The "more ways to enhance your compliance strategy" band appears on every
   page of the live site, not just the homepage. */
export const servicesBand = () => section({
  h2: 'Looking for more ways to enhance your compliance strategy?',
  lead: 'Expert services that plug into your program when you need capability the software alone cannot provide.',
  body: services([
    { icon: '/assets/img/site/icon-fractional.svg', title: 'Fractional Compliance Officer', text: 'Fill the role without a full-time hire', href: '/fractional-compliance-officer/' },
    { icon: '/assets/img/site/icon-onsite.svg', title: 'On-Site Services', text: 'Training, walkthroughs and mock audits', href: '/on-site-services/' },
    { icon: '/assets/img/site/icon-credential.svg', title: 'Credential Manager', text: 'Licences tracked before they lapse', href: '/credential-manager/' },
    { icon: '/assets/img/site/icon-background.svg', title: 'Background Checks', text: 'Screening that continues after hire', href: '/background-checks/' },
    { icon: '/assets/img/site/tab-corporate.webp', title: 'Coding Auditing', text: 'Find coding risk before a payer does', href: '/coding-compliance/' }
  ])
});

/* Differentiators reused where a page has no more specific angle. */
export const coreDifferentiators = [
  { icon: 'users', title: 'A named advisor team, not a ticket queue', text: 'Every client is assigned 3–5 experienced compliance professionals who learn your organization and answer when you call.' },
  { icon: 'shield', title: 'Audit support is included', text: 'HIPAA, OSHA and payer audit response is covered by your subscription rather than billed as emergency consulting.' },
  { icon: 'doc', title: 'Customized, maintained documentation', text: 'Policies reflect your specialty, size and state, and are revised when regulations change instead of quietly aging.' },
  { icon: 'gauge', title: 'Three programs, one dashboard', text: 'HIPAA, OSHA and corporate compliance share one login and one completion view — no stitching vendors together.' },
  { icon: 'grad', title: 'Training people actually finish', text: '130+ role-based courses with automated assignment and reminders, so completion stops being a chase.' },
  { icon: 'scale', title: 'Priced for real practices', text: 'Plans scale with headcount. Small practices get the same advisors and audit support as multi-site groups.' }
];

export const coreCompare = [
  { capability: 'Assigned compliance advisors', hcp: '3–5 named professionals, included', them: 'Shared support inbox or tiered ticketing' },
  { capability: 'Audit &amp; investigation support', hcp: 'Included in every plan', them: 'Billed hourly as a separate engagement' },
  { capability: 'Policies &amp; procedures', hcp: 'Customized to specialty and state, revised on change', them: 'Downloadable templates you maintain yourself' },
  { capability: 'Program coverage', hcp: 'HIPAA + OSHA + corporate compliance in one platform', them: 'Single-domain, or separate products to license' },
  { capability: 'Regulatory updates', hcp: 'Pushed into your policies and courses', them: 'Emailed newsletter; updates are your responsibility' }
];

/**
 * Assemble a standard interior page. Guarantees the three AEO sections the
 * audit requires (differentiators, use cases, FAQ) are present on every page.
 */
export function buildPage(cfg) {
  const parts = [
    hero({
      eyebrow: cfg.eyebrow,
      h1: cfg.h1,
      lead: cfg.lead,
      bullets: cfg.bullets || [],
      primary: cfg.primaryCta || { label: 'Get a free risk assessment', href: '/compliance-assessment/' },
      secondary: cfg.secondaryCta || { label: 'Schedule a consultation', href: '/contact/' },
      stat: cfg.heroStat,
      variant: cfg.heroVariant || 'dark',
      media: cfg.heroMedia,
      offers: cfg.heroOffers,
      photo: cfg.heroPhoto || { src: '/assets/img/site/feature-comprehensive.webp', title: cfg.h1.replace(/<[^>]+>/g, ' ').trim(), width: 1000, height: 563 }
    }),
    ...(cfg.sections || []),
    differentiators({
      h2: cfg.diffH2 || 'Why organizations choose HCP',
      lead: cfg.diffLead || 'Most vendors sell either software or consulting. The gap between them is where compliance programs fail, so we deliver both under one subscription.',
      items: cfg.differentiators || coreDifferentiators,
      compare: cfg.compare === null ? null : (cfg.compare || coreCompare)
    }),
    useCases({
      h2: cfg.casesH2 || 'How organizations use this in practice',
      lead: cfg.casesLead || 'Representative engagements drawn from the settings we work in most often.',
      items: cfg.cases
    }),
    faqSection({ h2: cfg.faqH2, lead: cfg.faqLead, faqs: cfg.faqs }),
    ...(cfg.related ? [related(cfg.related)] : []),
    // Their interior pages close with "Compliance Made Simple", then the
    // shared additional-services band.
    cta(cfg.cta || {
      h2: '<em>Compliance Made Simple</em><strong>Comprehensive Solutions for a Secure Organization</strong>',
      text: 'Simplify compliance with expert-led services including training, credentialing, risk assessments and incident management &mdash; backed by advisors who know your organization.',
      primary: { label: 'Contact us today to get started', href: '/contact/' },
      secondary: { label: 'Check your compliance risk', href: '/compliance-assessment/' }
    }),
    ...(cfg.servicesBand === false ? [] : [servicesBand()])
  ];

  return {
    path: cfg.path,
    title: cfg.title,
    description: cfg.description,
    ogTitle: cfg.ogTitle,
    breadcrumbs: cfg.breadcrumbs,
    faqs: cfg.faqs,
    group: cfg.group,
    llmsLabel: cfg.llmsLabel,
    llmsNote: cfg.llmsNote,
    extraSchema: cfg.extraSchema,
    pageType: cfg.pageType,
    noindex: cfg.noindex,
    body: parts.join('\n')
  };
}

export { hero, section, prose, cards, checklist, steps, stats, quotes, related, cta, icon, faqSection, useCases, differentiators, pillar, services, media, featureRow, programTabs };
