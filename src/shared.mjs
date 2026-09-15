import {
  hero, section, prose, cards, checklist, steps, stats,
  differentiators, useCases, faqSection, quotes, cta, related, icon,
  pillar, services, media
} from './components.mjs';

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
      offers: cfg.heroOffers
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
    cta(cfg.cta || {
      h2: 'See where your compliance program actually stands',
      text: 'The free risk assessment takes about 20 minutes and produces a written gap analysis against HIPAA, OSHA and corporate compliance requirements. No obligation.',
      primary: { label: 'Start your free assessment', href: '/compliance-assessment/' },
      secondary: { label: 'Talk to an advisor', href: '/contact/' }
    })
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

export { hero, section, prose, cards, checklist, steps, stats, quotes, related, cta, icon, faqSection, useCases, differentiators, pillar, services, media };
