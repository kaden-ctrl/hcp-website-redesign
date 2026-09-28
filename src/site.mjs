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
  { key: 'shield', name: 'SHIELD', kind: 'Compliance software', icon: 'shield',
    href: '/compliance-solution/',
    blurb: 'Your whole compliance program in one system. HIPAA, OSHA and corporate compliance, with a real team behind every element.',
    items: ['Real-time compliance dashboard', 'Policy and documentation management',
            'Security Risk Analysis (SRA)', 'Learning management system',
            'Exclusion monitoring and incident management'] },
  { key: 'fco', name: 'FCO', kind: 'Fractional compliance officer', icon: 'users',
    href: '/fractional-compliance-officer/',
    blurb: 'A dedicated compliance expert on call, without carrying the role as a full-time hire.',
    items: ['Dedicated compliance expert', 'On-call regulatory guidance',
            'OIG and CMS policy interpretation', 'Staff education and culture building',
            'Scalable engagement model'] },
  { key: 'sentry', name: 'SENTRY', kind: 'Billing intelligence software', icon: 'chart',
    href: '/coding-compliance/',
    blurb: 'Payers downcode automatically and send no notice. SENTRY finds the pattern in the quarter it starts.',
    items: ['Continuous claims monitoring', 'Specialty benchmark comparison',
            'Revenue optimisation alerts', 'Denial pattern detection',
            'Compliance risk scoring'] },
  { key: 'diligence', name: 'DILIGENCE', kind: 'Billing and coding audit', icon: 'doc',
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
