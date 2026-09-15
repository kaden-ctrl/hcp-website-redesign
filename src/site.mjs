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

// Brand palette lifted from the existing site so the rebuild is visually identical.
export const palette = {
  navy: '#094879',
  navyDeep: '#011a2e',
  navyMid: '#0b3a5e',
  green: '#a6cb39',
  greenDark: '#8bb028',
  blueLight: '#64a2da',
  blueTint: '#ecf7fd',
  ink: '#16202b',
  slate: '#4a5a6a',
  line: '#dde5ec',
  offWhite: '#f4f7fa'
};

// Primary navigation. `mega` renders a multi-column dropdown.
export const nav = [
  {
    label: 'Solutions',
    href: '/compliance-solution/',
    mega: [
      {
        heading: 'Compliance Programs',
        links: [
          { label: 'SHIELD Compliance Solution', href: '/compliance-solution/' },
          { label: 'HIPAA Compliance', href: '/compliance-solution/hipaa/' },
          { label: 'OSHA Compliance', href: '/compliance-solution/osha/' },
          { label: 'Corporate Compliance', href: '/compliance-solution/corporate-compliance/' },
          { label: 'Learning Management System', href: '/compliance-solution/lms/' }
        ]
      },
      {
        heading: 'Expert Services',
        links: [
          { label: 'SENTRY Coding Intelligence', href: '/coding-compliance/' },
          { label: 'Fractional Compliance Officer', href: '/fractional-compliance-officer/' },
          { label: 'On-Site Services', href: '/on-site-services/' },
          { label: 'Credential Manager', href: '/credential-manager/' },
          { label: 'Background Checks', href: '/background-checks/' }
        ]
      },
      {
        heading: 'Get Started',
        links: [
          { label: 'Free Compliance Risk Assessment', href: '/compliance-assessment/' },
          { label: 'The HCP Difference', href: '/solutions/the-hcp-difference/' },
          { label: 'Request a Consultation', href: '/contact/' }
        ]
      }
    ]
  },
  {
    label: 'Who We Serve',
    href: '/specialties/',
    mega: [
      {
        heading: 'Organizations',
        links: [
          { label: 'Medical Practices', href: '/medical-practices/' },
          { label: 'Hospitals & Health Systems', href: '/hospitals-health-systems/' },
          { label: 'Business Associates', href: '/business-associates/' },
          { label: 'Medical Billing Companies', href: '/medical-billing/' },
          { label: 'Private Equity', href: '/privateequity/' }
        ]
      },
      {
        heading: 'Specialties',
        links: [
          { label: 'Orthopedics', href: '/specialties/orthopedics/' },
          { label: 'Dermatology', href: '/specialties/dermatology/' },
          { label: 'Radiology & Imaging', href: '/specialties/radiology/' },
          { label: 'ENT', href: '/specialties/ent/' },
          { label: 'Family Medicine', href: '/specialties/family-medicine/' }
        ]
      },
      {
        heading: 'More Specialties',
        links: [
          { label: 'Audiology', href: '/specialties/audiology/' },
          { label: 'Behavioral Health', href: '/specialties/behavioral-health/' },
          { label: 'MedSpa & Aesthetics', href: '/specialties/medspa/' },
          { label: 'Pediatrics', href: '/specialties/pediatrics/' },
          { label: 'Physical Therapy', href: '/specialties/physical-therapy/' },
          { label: 'View All Specialties', href: '/specialties/' }
        ]
      }
    ]
  },
  { label: 'Partners', href: '/partners/' },
  {
    label: 'Resources',
    href: '/blog/',
    mega: [
      {
        heading: 'Learn',
        links: [
          { label: 'Blog', href: '/blog/' },
          { label: 'Webinars', href: '/webinars/' },
          { label: 'Podcasts', href: '/podcasts/' },
          { label: 'Events', href: '/events/' }
        ]
      },
      {
        heading: 'Answers',
        links: [
          { label: 'Compliance Tips & FAQ', href: '/tips-faqs/' },
          { label: 'Client Testimonials', href: '/testimonials/' }
        ]
      }
    ]
  },
  {
    label: 'About',
    href: '/about/',
    mega: [
      {
        heading: 'Company',
        links: [
          { label: 'About HCP', href: '/about/' },
          { label: 'Our Team', href: '/our-team/' },
          { label: 'Careers', href: '/careers/' },
          { label: 'Contact Us', href: '/contact/' }
        ]
      }
    ]
  }
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
