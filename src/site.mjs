// Global site configuration: brand, contact, navigation, palette.
// Everything that is "the same across every page" lives here so the
// generator can guarantee consistency (and so the SEO/AEO audit checks
// can be enforced in one place).

export const site = {
  name: 'Healthcare Compliance Pros',
  shortName: 'HCP',
  legalName: 'Healthcare Compliance Pros, LLC',
  origin: 'https://www.healthcarecompliancepros.com',
  tagline: 'Healthcare compliance software, backed by compliance experts.',
  founded: '2009',
  phone: '855-427-0427',
  phoneE164: '+1-855-427-0427',
  phoneDisplay: '(855) 427-0427',
  email: 'info@healthcarecompliancepros.com',
  hours: 'Mo-Fr 08:00-18:00',
  address: {
    street: '1305 N Commerce Dr, Suite 240',
    locality: 'Saratoga Springs',
    region: 'UT',
    postalCode: '84045',
    country: 'US'
  },
  social: [
    'https://www.facebook.com/healthcarecompliancepros',
    'https://x.com/HCPcompliance',
    'https://www.youtube.com/user/hcpros',
    'https://www.linkedin.com/company/healthcare-compliance-pros/'
  ],
  loginUrl: 'https://www.healthcarecompliancepros.com/index/login-page'
};

// Brand palette sampled directly from the HCP deck (DAHQINhWUQ0, dark pages).
// The signature of that system is light cards sitting on a deep navy ground,
// not dark-on-dark, so `card` is a real surface colour rather than a tint.
export const palette = {
  navy: '#051f33',          // ground, 19.7% of the dark slides
  navyDeep: '#03151f',
  navySoft: '#0b2437',      // the wireframe texture reads as this against the ground
  navyTile: '#1f4e79',      // stat tiles and product tags
  navyTileLift: '#2a6296',
  lime: '#a3c739',          // accent, 6.7%
  limeBright: '#b8d95a',
  limeDeep: '#8aac2b',
  card: '#f4f4f4',          // 31.7%: the white cards
  cardPure: '#ffffff',
  ink: '#10202c',           // type on light cards
  inkSoft: '#48586a',
  onDark: '#ffffff',
  onDarkSoft: '#c3d2de',
  onDarkMuted: '#93a7b8',
  line: 'rgba(255,255,255,.14)',
  lineInk: '#e0e5ea'
};

// Primary navigation. `mega` renders a multi-column dropdown.
export const nav = [
  {
    label: 'Solutions',
    href: '/compliance-solution/',
    items: [
      { label: 'SHIELD Compliance Solution', href: '/compliance-solution/' },
      { label: 'HIPAA Compliance', href: '/compliance-solution/hipaa/' },
      { label: 'OSHA Compliance', href: '/compliance-solution/osha/' },
      { label: 'Corporate Compliance', href: '/compliance-solution/corporate-compliance/' },
      { label: 'SENTRY Coding Intelligence', href: '/coding-compliance/' },
      { label: 'Learning Management System', href: '/compliance-solution/lms/' },
      { label: 'Fractional Compliance Officer', href: '/fractional-compliance-officer/' }
    ]
  },
  { label: 'Specialties', href: '/specialties/' },
  {
    label: 'News & Events',
    href: '/blog/',
    items: [
      { label: 'Blog', href: '/blog/' },
      { label: 'Events', href: '/events/' },
      { label: 'Podcasts', href: '/podcasts/' },
      { label: 'Webinars', href: '/webinars/' },
      { label: 'FAQ', href: '/tips-faqs/' }
    ]
  },
  {
    label: 'About',
    href: '/about/',
    items: [
      { label: 'Our Team', href: '/our-team/' },
      { label: 'About Us', href: '/about/' },
      { label: 'Partners', href: '/partners/' },
      { label: 'Testimonials', href: '/testimonials/' },
      { label: 'Careers', href: '/careers/' }
    ]
  },
  { label: 'Contact', href: '/contact/' }
];

export const footerNav = [
  {
    heading: 'Compliance Solutions',
    links: [
      { label: 'SHIELD Compliance Solution', href: '/compliance-solution/' },
      { label: 'HIPAA Compliance', href: '/compliance-solution/hipaa/' },
      { label: 'OSHA Compliance', href: '/compliance-solution/osha/' },
      { label: 'Corporate Compliance', href: '/compliance-solution/corporate-compliance/' },
      { label: 'Learning Management System', href: '/compliance-solution/lms/' },
      { label: 'SENTRY Coding Intelligence', href: '/coding-compliance/' }
    ]
  },
  {
    heading: 'Expert Services',
    links: [
      { label: 'Fractional Compliance Officer', href: '/fractional-compliance-officer/' },
      { label: 'On-Site Services', href: '/on-site-services/' },
      { label: 'Credential Manager', href: '/credential-manager/' },
      { label: 'Background Checks', href: '/background-checks/' },
      { label: 'Free Risk Assessment', href: '/compliance-assessment/' }
    ]
  },
  {
    heading: 'Who We Serve',
    links: [
      { label: 'Medical Practices', href: '/medical-practices/' },
      { label: 'Hospitals & Health Systems', href: '/hospitals-health-systems/' },
      { label: 'Business Associates', href: '/business-associates/' },
      { label: 'Medical Billing Companies', href: '/medical-billing/' },
      { label: 'Private Equity', href: '/privateequity/' },
      { label: 'All Specialties', href: '/specialties/' }
    ]
  },
  {
    heading: 'Company',
    links: [
      { label: 'About HCP', href: '/about/' },
      { label: 'Our Team', href: '/our-team/' },
      { label: 'Partner Program', href: '/partners/' },
      { label: 'Testimonials', href: '/testimonials/' },
      { label: 'Careers', href: '/careers/' },
      { label: 'Contact', href: '/contact/' }
    ]
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog', href: '/blog/' },
      { label: 'Webinars', href: '/webinars/' },
      { label: 'Podcasts', href: '/podcasts/' },
      { label: 'Events', href: '/events/' },
      { label: 'Compliance Tips & FAQ', href: '/tips-faqs/' }
    ]
  }
];


/* ---------------------------------------------------------------
   Content architecture, taken from the HCP decks rather than
   invented. Product names, claims, figures, people and quotes all
   come from "HCP" (DAHQINhWUQ0) and "HCP Shield - MM" (DAHPfBlPmAc).
   --------------------------------------------------------------- */

// The four products. Defence and offence, which is how the deck frames it.
export const suite = [
  { side: 'defense', key: 'shield', posture: 'DEFENSIVE', tagline: 'The audit that never surprises you, because it never stopped running.', name: 'SHIELD', kind: 'Compliance software', icon: 'shield',
    href: '/compliance-solution/',
    blurb: 'Your whole compliance program in one system. HIPAA, OSHA and corporate compliance, with a real team behind every element.',
    items: ['Real-time compliance dashboard', 'Policy and documentation management',
            'Security Risk Analysis (SRA)', 'Learning management system',
            'Exclusion monitoring and incident management'] },
  { side: 'defense', key: 'fco', posture: 'STRATEGIC', tagline: 'Compliance expertise on call, without a headcount line.', name: 'FCO', kind: 'Fractional compliance officer', icon: 'users',
    href: '/fractional-compliance-officer/',
    blurb: 'A dedicated compliance expert on call, without carrying the role as a full-time hire.',
    items: ['Dedicated compliance expert', 'On-call regulatory guidance',
            'OIG and CMS policy interpretation', 'Staff education and culture building',
            'Scalable engagement model'] },
  { side: 'offense', key: 'sentry', posture: 'OFFENSIVE', tagline: 'Revenue leakage does not hide from software that never blinks.', name: 'SENTRY', kind: 'Billing intelligence software', icon: 'chart',
    href: '/coding-compliance/',
    blurb: 'Payers downcode automatically and send no notice. SENTRY finds the pattern in the quarter it starts.',
    items: ['Continuous claims monitoring', 'Specialty benchmark comparison',
            'Revenue optimisation alerts', 'Denial pattern detection',
            'Compliance risk scoring'] },
  { side: 'offense', key: 'diligence', posture: 'TRANSACTIONAL', tagline: 'Every claim gets read before the deal does.', name: 'DILIGENCE', kind: 'Billing and coding audit', icon: 'doc',
    href: '/diligence/',
    blurb: 'Transaction-grade review for buyers and sellers, written for the deal room.',
    items: ['12 to 24 months of claims data reviewed', 'CPC-certified coding specialists',
            'Deal-room ready findings report', 'RWI underwriter documentation',
            'Post-close remediation roadmap'] }
];

export const stats = [
  { figure: '1,000+', label: 'Provider groups currently protected' },
  { figure: '50',     label: 'States with active clients' },
  { figure: '15+',    label: 'Years in healthcare compliance' },
  { figure: '100%',   label: 'Cloud-based and audit-ready platform' }
];

export const specialties = [
  'Behavioral Health', 'Cardiology', 'Dermatology', 'ENT', 'Gastroenterology',
  'Medspa / Aesthetics', 'OB/GYN', 'Oncology', 'Ophthalmology', 'Orthopedics',
  'Pain Management', 'Pediatrics', 'Physical Therapy', 'Primary Care', 'Psychiatry',
  'Radiology', 'Rheumatology', 'Urgent Care', 'Urology', 'Wound Care'
];

// Three distinct markets, one platform.
export const markets = [
  { n: '01', title: 'Independent and group practices',
    body: 'Independent and group practices through to business associates, 1 to 100+ physicians across all major specialties.',
    img: '/assets/img/site/about-1.webp',
    alt: 'A clinician reviewing records on a tablet in a practice corridor' },
  { n: '02', title: 'PE-backed portfolio companies',
    body: 'Healthcare platform builds, add-on acquisitions, and portfolio ops teams requiring pre- and post-close compliance infrastructure.',
    img: '/assets/img/site/aud-private-equity.webp',
    alt: 'Two people shaking hands after closing a healthcare transaction' },
  { n: '03', title: 'Channel and referral partners',
    body: 'Healthcare law firms, malpractice carriers, RCM companies and M&A advisory firms refer HCP to their provider clients.',
    img: '/assets/img/site/svc-fractional.webp',
    alt: 'Two advisors reviewing a client compliance program together' }
];

export const differentiators = [
  'The only platform covering both compliance and revenue.',
  'Designed for PE transactions, not just steady-state operations.',
  'Specialty-calibrated, not generic.',
  'Software and expert services in one relationship.'
];

/* A photo is set only where the asset genuinely depicts that person. The
   library has portraits of Bryan, Eric and Mystee, but no Mitchell Steffens
   or Lara Schiffman, and putting somebody else's face under a named role
   would be a straightforward misattribution. Those two fall back to
   initials until real portraits are supplied. */
export const leadership = [
  { name: 'Adam Laing',        role: 'Chief Executive Officer', img: '/assets/img/site/team-adam.webp' },
  { name: 'Chad Schiffman',    role: 'Director of Risk',        img: '/assets/img/site/team-chad.webp' },
  { name: 'Mitchell Steffens', role: 'Chief Growth Officer',    img: null },
  { name: 'Jeremy Winn',       role: 'Director of Sales',       img: '/assets/img/site/team-jeremy.webp' },
  { name: 'Kristin Torrest',   role: 'Director of Operations',  img: '/assets/img/site/team-kristin.webp' },
  { name: 'Lara Schiffman',    role: 'Director of Coding',      img: null }
];

export const testimonials = [
  { tag: 'SHIELD',
    quote: 'Before HCP Shield, our compliance program existed on a spreadsheet. Now our PE sponsor can pull a real-time dashboard showing every open item, every training completion, and every policy acknowledgment across all three locations. It completely changed how we present ourselves in a transaction.',
    who: 'Chief Operating Officer', org: 'Multi-site orthopedic group, Southeast' },
  { tag: 'SENTRY',
    quote: 'We thought we were billing correctly. Sentry showed us in the first 90 days that we were leaving over $300,000 a year on the table, not because of fraud, but because nobody was watching the patterns. Now somebody is.',
    who: 'Chief Executive Officer', org: 'Behavioral health group, Midwest' },
  { tag: 'DILIGENCE',
    quote: 'HCP\u2019s diligence report gave us exactly what we needed to negotiate the right protections into the deal, and to walk into closing with our eyes open. The 8-minute rule finding alone would have been a significant post-close liability. Instead, it became a structured term in the purchase agreement.',
    who: 'Managing Director', org: 'Healthcare private equity firm' },
  { tag: 'FCO',
    quote: 'The HCP team does not just hand you software; they become part of your compliance operations. Having a Fractional Compliance Officer who actually understands cardiology billing made all the difference when we faced our first OIG inquiry.',
    who: 'Practice Administrator', org: 'Cardiology group, Mid-Atlantic' }
];

// The OIG's seven elements, which SHIELD is built around.
export const sevenElements = [
  'Written policies and procedures',
  'Compliance leadership and oversight',
  'Training and education',
  'Lines of communication',
  'Enforcing standards',
  'Risk assessment, auditing and monitoring',
  'Response and corrective action'
];


/* ---------------------------------------------------------------
   Specialty and organization directory. One page routes to all of
   these, rather than a twenty-item dropdown nobody can scan.
   `kind` drives the filter on that page.
   --------------------------------------------------------------- */
export const directory = [
  // Organizations: what kind of business you are.
  { kind: 'organization', name: 'Medical practices', href: '/medical-practices/',
    blurb: 'Independent and group practices, one location or many.' },
  { kind: 'organization', name: 'Hospitals and health systems', href: '/hospitals-health-systems/',
    blurb: 'Multi-site systems with departmental compliance obligations.' },
  { kind: 'organization', name: 'Business associates', href: '/business-associates/',
    blurb: 'Vendors handling protected health information under a BAA.' },
  { kind: 'organization', name: 'Medical billing companies', href: '/medical-billing/',
    blurb: 'RCM and billing firms answering to their provider clients.' },
  { kind: 'organization', name: 'Private equity', href: '/privateequity/',
    blurb: 'Platform builds, add-on acquisitions and portfolio operations.' },

  // Specialties: what kind of care you deliver.
  { kind: 'specialty', name: 'Behavioral health', href: '/behavioral-health-compliance/' },
  { kind: 'specialty', name: 'Cardiology', href: '/specialties/cardiology/' },
  { kind: 'specialty', name: 'Dermatology', href: '/dermatology-compliance-program/' },
  { kind: 'specialty', name: 'ENT', href: '/specialties/ent/' },
  { kind: 'specialty', name: 'Audiology', href: '/audiology-compliance-program/' },
  { kind: 'specialty', name: 'Family medicine', href: '/specialties/family-medicine/' },
  { kind: 'specialty', name: 'Gastroenterology', href: '/specialties/gastroenterology/' },
  { kind: 'specialty', name: 'Medspa, aesthetics and wellness', href: '/medspa/' },
  { kind: 'specialty', name: 'OB/GYN', href: '/specialties/obgyn/' },
  { kind: 'specialty', name: 'Oncology', href: '/specialties/oncology/' },
  { kind: 'specialty', name: 'Ophthalmology', href: '/specialties/ophthalmology/' },
  { kind: 'specialty', name: 'Orthopedics', href: '/specialties/orthopedics/' },
  { kind: 'specialty', name: 'Pain management', href: '/specialties/pain-management/' },
  { kind: 'specialty', name: 'Pediatrics', href: '/specialties/pediatrics/' },
  { kind: 'specialty', name: 'Physical therapy', href: '/physical-therapy-compliance-program/' },
  { kind: 'specialty', name: 'Primary care', href: '/specialties/primary-care/' },
  { kind: 'specialty', name: 'Psychiatry', href: '/specialties/psychiatry/' },
  { kind: 'specialty', name: 'Radiology', href: '/specialties/radiology/' },
  { kind: 'specialty', name: 'Rheumatology', href: '/specialties/rheumatology/' },
  { kind: 'specialty', name: 'Urgent care', href: '/specialties/urgent-care/' },
  { kind: 'specialty', name: 'Urology', href: '/specialties/urology/' },
  { kind: 'specialty', name: 'Wound care', href: '/specialties/wound-care/' }
];


/* ---------------------------------------------------------------
   Specialty and organization page content, from the HCP slide deck
   (hcp-slidedeck.netlify.app). These figures and risk framings are
   generic to healthcare rather than specific to any one specialty,
   which is how the deck uses them too: the setting name is
   substituted, the underlying argument does not change.
   --------------------------------------------------------------- */

export const challengeStats = [
  { figure: '$935B', label: 'in estimated annual healthcare billing errors across the US' },
  { figure: '83%',   label: 'of provider groups lack a structured compliance program' },
  { figure: '6 to 8x', label: 'the cost to remediate a billing violation versus preventing it' }
];

export const risks = [
  { tag: 'Compliance risk',
    body: 'OIG enforcement activity reached a ten-year high in 2024. Physician groups face False Claims Act exposure, CMS clawbacks and Corporate Integrity Agreements, many of them stemming from billing errors that were preventable with the right monitoring in place.' },
  { tag: 'Revenue leakage',
    body: 'The same providers leaving money on the table through undercoding, conservative code selection, missed add-ons and undocumented complexity often do not know it until an outside auditor tells them. Most groups recover only 60 to 80 cents on the dollar they legitimately earned.' },
  { tag: 'Transaction risk',
    body: 'For private equity sponsors, pre-existing billing liability survives acquisition. The DOJ has held buyers liable for compliance failures they inherited but failed to identify in diligence, a gap that can derail a close or invalidate representations and warranties insurance.' }
];


/* ---------------------------------------------------------------
   Product page detail, taken from the live site:
     SHIELD  /compliance-solution/
     SENTRY  /coding-compliance/
     FCO     /fractional-compliance-officer/
   DILIGENCE is not on the live site; its detail comes from the deck.
   --------------------------------------------------------------- */

export const productDetail = {
  shield: {
    lede: 'Your whole compliance program in one system, so the evidence exists before anybody asks for it.',
    groups: [
      { name: 'HIPAA Privacy and Security', items: [
        ['Security Risk Analysis', 'A full assessment with expert guidance and a tailored action plan, not a questionnaire that produces a PDF.'],
        ['Business Associate Agreements', 'Agreements tracked, compliance monitored and renewals managed, so a lapsed BAA does not surface during an investigation.'],
        ['Incident management', 'Online tools, expert support and step-by-step guidance from the moment something is reported.'],
        ['HIPAA assessment', 'A virtual walkthrough that documents vulnerabilities in the way an investigator would look for them.']
      ]},
      { name: 'OSHA', items: [
        ['Hazard risk assessment', 'Identifies the risks in your setting and specifies the protective equipment each one calls for.'],
        ['Virtual SDS binder', 'Every Safety Data Sheet in one place, available to download and print.'],
        ['Self-guided inspection', 'Simulates the real inspection so the gaps are found by you rather than by an inspector.']
      ]},
      { name: 'Corporate compliance', items: [
        ['Compliance hotline', 'Anonymous reporting, online and toll-free.'],
        ['Exclusion monitoring', 'Screened monthly against the LEIE, SAM and state Medicaid lists.'],
        ['Committee meetings', 'Scheduling and documentation automated, so the minutes exist without anybody chasing them.']
      ]},
      { name: 'Learning management', items: [
        ['130+ course titles', 'With CME and CEU credit available.'],
        ['Automatic assignment', 'Roles mapped to the right training, with reminders that escalate.'],
        ['Custom courses', 'Your own material delivered alongside the library.'],
        ['Certificates', 'Personalised, stored against each person as they complete.']
      ]}
    ],
    elements: true
  },
  sentry: {
    lede: 'Claims data turned into intelligence, every quarter, so a downcoding pattern is found in the quarter it begins.',
    groups: [
      { name: 'What the analytics look for', items: [
        ['Provider outliers', 'Billing profiles that sit outside expected utilisation for the specialty.'],
        ['Revenue at risk', 'The estimated exposure tied to coding or billing activity outside expected patterns.'],
        ['Revenue leakage', 'Work performed but billed below the level it qualified for.'],
        ['Denial and downcoding patterns', 'Where payer behaviour suggests reimbursement is being quietly suppressed.']
      ]},
      { name: 'The quarterly cycle', items: [
        ['Analytics, every quarter', 'Run across every provider in all four quarters, not once a year.'],
        ['Audits on rotation', 'Providers grouped and audited in turn, with re-checks in the third and fourth quarters.'],
        ['Guidance', 'Baseline guidance in the first quarter, then targeted at the highest-risk providers.'],
        ['Benchmarks', 'Compared against national benchmarks for your specialty.']
      ]},
      { name: 'What you receive', items: [
        ['Summary dashboard', 'Overall risk scoring across the organisation.'],
        ['Quarterly analytics report', 'The full picture, broken down by provider.'],
        ['Targeted audit findings', 'Charts selected by the data rather than at random.'],
        ['Provider-specific guidance', 'Education built from your own findings, not generic coding advice.']
      ]}
    ]
  },
  fco: {
    lede: 'A dedicated team of compliance professionals on call, without carrying the role as a full-time hire.',
    groups: [
      { name: 'What your officer does', items: [
        ['Primary compliance liaison', 'For your staff, for third parties and for government agencies.'],
        ['Audit and investigation response', 'Including the corrective action that follows.'],
        ['Reporting channels', 'Retaliation-free, including hotline submissions.'],
        ['HR coordination', 'On the state-specific regulations that differ from the federal baseline.'],
        ['Billing and coding review', 'Procedures reviewed, with recommendations.'],
        ['Programme alignment', 'HIPAA, OSHA and corporate compliance kept in step with each other.']
      ]},
      { name: 'How the engagement runs', items: [
        ['Committee cadence', 'Monthly for the first six months, quarterly after that.'],
        ['Up to ten hours a month', 'Of dedicated support, with additional hours available at $300 per hour.'],
        ['Scalable', 'Sized to the organisation, for a long-term partnership or interim cover.']
      ]}
    ]
  },
  diligence: {
    lede: 'Transaction-grade review of the billing, written for the deal room rather than for the file.',
    groups: [
      { name: 'What the review covers', items: [
        ['12 to 24 months of claims data', 'Reviewed rather than sampled.'],
        ['CPC-certified coding specialists', 'Reading the charts, not a model inferring from them.'],
        ['Deal-room ready findings report', 'Structured for the people who will negotiate against it.'],
        ['RWI underwriter documentation', 'In the form representations and warranties insurers expect.'],
        ['Post-close remediation roadmap', 'So a finding becomes a plan rather than a surprise.']
      ]}
    ]
  }
};


/* ---------------------------------------------------------------
   Page-specific material. Each product page is built around its own
   structure rather than a shared set of blocks, so this is the data
   those structures need.
   --------------------------------------------------------------- */

// SENTRY: the four-step loop and the quarterly cadence, from the deck.
export const sentryLoop = [
  { n: '01', name: 'Analyze',  body: 'Every claim line is processed and benchmarked against your specialty, at state and national level.' },
  { n: '02', name: 'Audit',    body: 'Charts are selected by the data rather than at random, focused where risk and revenue opportunity are greatest.' },
  { n: '03', name: 'Educate',  body: 'Provider-level education is built from your own audit findings, not from generic coding guidance.' },
  { n: '04', name: 'Optimize', body: 'Coding is corrected, revenue is protected, and the full cycle is documented for your compliance program.' }
];

export const sentryQuarters = [
  { q: 'Q1', analytics: 'All providers', audit: 'Group A', guidance: 'Baseline, all providers' },
  { q: 'Q2', analytics: 'All providers', audit: 'Group B', guidance: 'Targeted' },
  { q: 'Q3', analytics: 'All providers', audit: 'Group A re-check', guidance: 'Targeted' },
  { q: 'Q4', analytics: 'All providers', audit: 'Group B re-check', guidance: 'Targeted' }
];

export const sentryDirections = [
  { tag: 'Undercoding', body: 'Work that was performed but billed below the level it qualified for, losing reimbursement on every visit.' },
  { tag: 'Overcoding',  body: 'Billing patterns that attract payer scrutiny and audit exposure, whether or not the documentation supports them.' }
];

export const sentryCompare = [
  { label: 'Reviews a year',  annual: '1',  quarterly: '4' },
  { label: 'Audits a year',   annual: '1',  quarterly: '4' },
  { label: 'Trainings a year', annual: '0', quarterly: '3' },
  { label: 'Blind months',    annual: '12', quarterly: '0' }
];

// FCO: how the engagement actually runs over time.
export const fcoTimeline = [
  { when: 'Week 1',      what: 'Your officer is assigned and the programme is scoped against what you already have.' },
  { when: 'Months 1 to 6', what: 'Compliance committee meets monthly. Policies, reporting channels and training are brought into line.' },
  { when: 'Month 7 on',  what: 'Committee moves to quarterly. The officer stays the same person throughout.' },
  { when: 'As needed',   what: 'Audit and investigation response, with the corrective action that follows it.' }
];

// DILIGENCE: where the work sits relative to a transaction.
export const diligenceStages = [
  { stage: 'Pre-close',  title: 'Read the claims before the deal',
    body: 'Twelve to twenty-four months of claims data reviewed by CPC-certified specialists. Not a sample, and not a model inferring from one.' },
  { stage: 'At close',   title: 'Findings the deal room can use',
    body: 'A report structured for the people who will negotiate against it, with documentation in the form representations and warranties underwriters expect.' },
  { stage: 'Post-close', title: 'A roadmap, not a surprise',
    body: 'Remediation sequenced so a finding becomes a plan. Pre-existing billing liability survives acquisition; the DOJ has held buyers liable for failures they inherited.' }
];


/* ---------------------------------------------------------------
   SHIELD's four modules as pages of their own. Detail is from the
   live site's own compliance-solution page; nothing is invented.
   --------------------------------------------------------------- */
export const modules = [
  {
    key: 'hipaa', name: 'HIPAA compliance', href: '/compliance-solution/hipaa/',
    tag: 'Privacy and Security',
    lede: 'Privacy and Security coverage from the risk analysis through to incident response, with the dated evidence an investigator asks for.',
    img: '/assets/img/site/prog-hipaa.webp',
    features: [
      ['Security Risk Analysis', 'A comprehensive assessment with expert guidance and a tailored action plan. The SRA is the first thing requested in an investigation and the most common thing missing.'],
      ['Business Associate Agreements', 'Agreements tracked, compliance monitored and renewals managed, so a lapsed BAA is not discovered by somebody else.'],
      ['Incident management', 'Online tools, expert support and detailed guidance from the moment something is reported, aligned to the Breach Notification Rule.'],
      ['HIPAA assessment', 'A virtual walkthrough that documents vulnerabilities the way an investigator would look for them.']
    ],
    why: 'Policies prove you wrote something. They do not prove your risk analysis reflects the systems you run today.'
  },
  {
    key: 'osha', name: 'OSHA compliance', href: '/compliance-solution/osha/',
    tag: 'Workplace safety',
    lede: 'Workplace safety built for clinical environments rather than issued as a generic template.',
    img: '/assets/img/site/prog-osha.webp',
    features: [
      ['Hazard risk assessment', 'Identifies the risks present in your setting and specifies the protective equipment each one calls for.'],
      ['Virtual SDS binder', 'Centralised access to every Safety Data Sheet, available to download and to print.'],
      ['Self-guided inspection', 'Simulates the official inspection, so the gaps are found by you rather than by an inspector.']
    ],
    why: 'A binder nobody can find during an inspection is the same as no binder at all.'
  },
  {
    key: 'corporate', name: 'Corporate compliance', href: '/compliance-solution/corporate-compliance/',
    tag: 'The seven elements',
    lede: 'The seven elements of an effective compliance program, maintained rather than written once and filed.',
    img: '/assets/img/site/about-2.webp',
    features: [
      ['Compliance hotline', 'Anonymous reporting, available online and on a toll-free number, so a concern has somewhere to go that is not a manager.'],
      ['Exclusion monitoring', 'Screened monthly against the LEIE, SAM and state Medicaid lists. Employing an excluded individual is a per-claim liability.'],
      ['Compliance committee meetings', 'Scheduling and documentation automated, so the minutes exist without anybody chasing them.']
    ],
    why: 'The OIG does not ask whether you intended to run a program. It asks for the records the program produced.'
  },
  {
    key: 'lms', name: 'Learning management', href: '/compliance-solution/lms/',
    tag: 'Training and education',
    lede: 'More than 130 course titles, assigned by role, with completion tracked for every employee.',
    img: '/assets/img/site/prog-lms.webp',
    features: [
      ['130+ course titles', 'With CME and CEU credit available, covering HIPAA, OSHA, corporate compliance and the specialty material around them.'],
      ['Automatic assignment', 'Roles mapped to the right training, with reminders that escalate rather than arriving once and expiring.'],
      ['Custom course creation', 'Your own material delivered through the same system, so staff have one place to go.'],
      ['Interactive assessments', 'Completion that means something, rather than a page somebody scrolled past.'],
      ['Personalised certificates', 'Issued and stored against each person as they complete, so the evidence assembles itself.']
    ],
    why: 'Training nobody logged is indistinguishable, to an investigator, from training that never happened.'
  }
];
