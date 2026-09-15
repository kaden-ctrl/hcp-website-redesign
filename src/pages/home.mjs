import {
  hero, section, prose, cards, checklist, steps, stats,
  differentiators, useCases, faqSection, quotes, cta, related, icon
} from '../components.mjs';
import { site } from '../site.mjs';
import { abs } from '../layout.mjs';

const faqs = [
  {
    q: 'How quickly can our organization be up and running?',
    a: 'Most practices are live within two to three weeks. Your implementation advisor handles the heavy lifting: we build your customized policy manual, load your staff roster, assign the correct training tracks by role, and walk your compliance officer through the dashboard. You are not handed a login and left to figure it out.'
  },
  {
    q: 'We already have a compliance binder. Why would we need software?',
    a: 'A binder proves you wrote policies. It does not prove your staff read them, that training was completed on time, that your security risk analysis is current, or that incidents were investigated. In an OCR or OSHA inquiry, investigators ask for date-stamped evidence. HCP keeps that evidence generated automatically as your team works, so producing it takes minutes rather than weeks.'
  },
  {
    q: 'Is this affordable for a small practice?',
    a: 'Yes. Pricing scales with headcount, so a five-person practice pays a fraction of what a multi-site group pays, and every plan includes the same assigned advisor team, policy customization, training library and audit support. There is no separate charge to call your advisor with a question.'
  },
  {
    q: 'What happens if we are audited or have a breach?',
    a: 'Your advisor team works the event with you. That includes pulling the documentation an investigator will request, walking through the four-factor breach risk assessment, helping determine notification obligations and timelines, and preparing your written response. Audit support is included in your subscription, not billed as an emergency engagement.'
  },
  {
    q: 'Do you cover OSHA and corporate compliance, or only HIPAA?',
    a: 'All three, in one platform. HIPAA Privacy and Security, OSHA workplace safety including Bloodborne Pathogens and Hazard Communication, and corporate compliance built on the seven elements of an effective compliance program that CMS and the OIG expect. Most clients run all three from a single dashboard and a single staff login.'
  },
  {
    q: 'Who actually uses the platform day to day?',
    a: 'Your compliance officer or practice administrator lives in the dashboard and reviews completion status. Everyone else logs in a few times a year to complete assigned training and acknowledge updated policies. The experience is deliberately simple so adoption does not become its own project.'
  },
  {
    q: 'How is HCP different from a training-only vendor?',
    a: 'Training is one component of a compliance program, not the program itself. HCP delivers customized policies and procedures, a documented security risk analysis, business associate agreement tracking, incident and breach management, exclusion screening, safety inspections and audit support, alongside the training library, with named advisors supporting all of it.'
  },
  {
    q: 'Can we keep our existing policies?',
    a: 'Yes. During onboarding your advisor reviews what you already have, maps it against current regulatory requirements, and folds the language you want to keep into your customized manual. You are not forced to abandon documentation your team already knows.'
  }
];

const body = [
  hero({
    eyebrow: 'Healthcare compliance software',
    h1: 'Compliance that runs quietly in the background',
    lead: `HIPAA, OSHA and corporate compliance in one platform, backed by a named team of compliance advisors who know your organization. Built for medical practices, hospitals, billing companies and business associates.`,
    bullets: [
      'Customized policies and procedures, kept current as regulations change',
      'Role-based training with automated assignments, reminders and certificates',
      'Documented security risk analysis and audit-ready evidence on demand',
      '3–5 assigned compliance advisors — included, not an upsell'
    ],
    primary: { label: 'Get a free risk assessment', href: '/compliance-assessment/' },
    secondary: { label: 'Schedule a consultation', href: '/contact/' },
    stat: `Trusted by healthcare organizations nationwide since ${site.founded}`
  }),

  section({
    cls: 'sec-alt',
    eyebrow: 'The problem',
    h2: 'Compliance fails in the gap between knowing and proving',
    lead: 'Almost every practice knows what the rules require. What breaks down is the evidence — and evidence is what investigators ask for.',
    body: prose([
      `Healthcare organizations carry an unusual regulatory load. HIPAA governs how patient information is stored, transmitted and disclosed. OSHA governs a physical environment that includes sharps, chemicals and infectious material. CMS and the Office of Inspector General expect a documented corporate compliance program covering billing integrity, exclusion screening and a channel for reporting concerns. Each of these is a full body of requirements, and none of them are the reason clinicians went into medicine.`,
      `The common failure mode is not ignorance. It is drift. A policy manual is written thoroughly in year one and never revised. Annual training is completed by most of the staff, but nobody can say which ones. A security risk analysis is performed once, then cited for six years as if the network never changed. Business associate agreements are signed and filed somewhere nobody can locate. The program looks fine right up until someone asks for proof on a deadline.`,
      `<h3>What regulators actually request</h3>`,
      `<p>When the Office for Civil Rights opens an inquiry, or an OSHA inspector arrives, or a payer initiates an audit, the request is specific and time-bound. Expect to produce, typically within 10 to 30 days:</p>`,
      `<ul>
        <li>Your current written policies and procedures, with revision dates</li>
        <li>Evidence each workforce member received and acknowledged them</li>
        <li>Training completion records by individual, by topic, with dates</li>
        <li>Your most recent security risk analysis and the risk management plan addressing what it found</li>
        <li>Executed business associate agreements for every vendor touching PHI</li>
        <li>Incident logs, investigations and breach risk assessments</li>
        <li>Exclusion screening results for staff and contracted vendors</li>
        <li>Safety inspection records, SDS access and exposure control documentation</li>
      </ul>`,
      `Organizations that maintain this continuously answer in an afternoon. Organizations that reconstruct it under deadline spend weeks, pay outside counsel, and frequently discover gaps they cannot close retroactively. That difference — continuous versus reconstructed — is the entire design premise of the HCP platform.`
    ])
  }),

  section({
    eyebrow: 'What you get',
    h2: 'One platform for every compliance obligation you carry',
    lead: 'Four connected programs, one staff login, one dashboard showing where every requirement stands.',
    body: `<div class="pillars">
      <article class="pillar">
        <p class="pillar-tag">Program</p>
        <h3>HIPAA Compliance</h3>
        <p>Privacy and Security Rule coverage from documentation through incident response.</p>
        ${checklist([
          'Customized Privacy &amp; Security policies and procedures',
          'Annual and role-based HIPAA training',
          'Security Risk Analysis with a tracked remediation plan',
          'Business Associate Agreement management',
          'Breach risk assessment and notification guidance',
          'Expert audit and investigation support'
        ])}
        <a class="btn btn-ghost" href="/compliance-solution/hipaa/">Explore HIPAA compliance</a>
      </article>
      <article class="pillar">
        <p class="pillar-tag">Program</p>
        <h3>OSHA Compliance</h3>
        <p>Workplace safety built for clinical environments, not generic industrial templates.</p>
        ${checklist([
          'Bloodborne Pathogens exposure control plan',
          'Hazard Communication and virtual SDS binder',
          'Facility safety inspection checklists and logs',
          'Hazard and risk assessments',
          'Annual and new-hire safety training',
          'Inspection preparation and response support'
        ])}
        <a class="btn btn-ghost" href="/compliance-solution/osha/">Explore OSHA compliance</a>
      </article>
      <article class="pillar">
        <p class="pillar-tag">Program</p>
        <h3>Corporate Compliance</h3>
        <p>A documented program built on the seven elements CMS and the OIG expect to see.</p>
        ${checklist([
          'Code of conduct and compliance policies',
          'Fraud, Waste &amp; Abuse and False Claims Act training',
          'Anonymous compliance hotline',
          'OIG and SAM exclusion monitoring',
          'Compliance committee structure and meeting records',
          'Internal auditing and corrective action tracking'
        ])}
        <a class="btn btn-ghost" href="/compliance-solution/corporate-compliance/">Explore corporate compliance</a>
      </article>
      <article class="pillar">
        <p class="pillar-tag">Platform</p>
        <h3>Learning Management System</h3>
        <p>130+ courses with automated assignment, reminders and certificate tracking.</p>
        ${checklist([
          'Role-based training tracks assigned automatically',
          'Automated scheduling, reminders and annual refreshers',
          'AMA PRA Category 1 Credits&trade; on select courses',
          'Custom course builder with narration, video and quizzes',
          'Real-time completion reporting by person and department',
          'Certificates generated and stored automatically'
        ])}
        <a class="btn btn-ghost" href="/compliance-solution/lms/">Explore the LMS</a>
      </article>
    </div>`
  }),

  section({
    cls: 'sec-alt',
    eyebrow: 'How it works',
    h2: 'From first call to audit-ready in about three weeks',
    lead: 'A structured onboarding your advisor runs with you, not a self-serve setup wizard.',
    body: steps([
      { title: 'Risk assessment', text: 'We review your current program against HIPAA, OSHA and corporate compliance requirements and give you a written gap analysis. No cost, no obligation.' },
      { title: 'Program build', text: 'Your advisor customizes policies to your specialty, size and state, loads your staff roster, and maps each role to the right training track.' },
      { title: 'Launch &amp; train', text: 'Staff receive their assignments with automated reminders. Your compliance officer gets a walkthrough of the dashboard and reporting.' },
      { title: 'Stay current', text: 'Regulatory updates flow into your policies and courses. Your advisor team stays available year-round for questions, incidents and audits.' }
    ])
  }),

  differentiators({
    h2: 'What makes HCP different from other compliance vendors',
    lead: 'Most vendors sell either software or consulting. The gap between them is where compliance programs fail, so we deliver both under one subscription.',
    items: [
      { icon: 'users', title: 'A named advisor team, not a ticket queue', text: 'Every client is assigned 3–5 experienced compliance professionals who learn your organization. You call the people who built your program, and they answer.' },
      { icon: 'shield', title: 'Audit support is included', text: 'HIPAA, OSHA and payer audits are covered by your subscription. Competitors typically bill audit response as emergency consulting at the worst possible moment.' },
      { icon: 'doc', title: 'Policies customized, not templated', text: 'Your manual reflects your specialty, headcount, state law and workflows — and it gets revised when regulations change, not left to age quietly.' },
      { icon: 'gauge', title: 'Three programs, one dashboard', text: 'HIPAA, OSHA and corporate compliance share one login and one completion view. No stitching together three vendors and three exports.' },
      { icon: 'grad', title: 'Training people actually finish', text: '130+ courses, assigned by role, with automated reminders and CME credit on select titles. Completion rates go up because the friction goes down.' },
      { icon: 'scale', title: 'Priced for real practices', text: 'Plans scale with headcount. A small independent practice gets the same advisors, policy customization and audit support as a multi-site group.' }
    ],
    compare: [
      { capability: 'Assigned compliance advisors', hcp: '3–5 named professionals, included', them: 'Shared support inbox or tiered ticketing' },
      { capability: 'Audit &amp; investigation support', hcp: 'Included in every plan', them: 'Billed hourly as a separate engagement' },
      { capability: 'Policies &amp; procedures', hcp: 'Customized to specialty and state, revised on change', them: 'Downloadable templates you maintain yourself' },
      { capability: 'Program coverage', hcp: 'HIPAA + OSHA + corporate compliance in one platform', them: 'Single-domain, or separate products to license' },
      { capability: 'Security Risk Analysis', hcp: 'Guided, documented, with tracked remediation', them: 'Self-service questionnaire with a PDF output' },
      { capability: 'Regulatory updates', hcp: 'Pushed into your policies and courses', them: 'Emailed newsletter; updates are your responsibility' }
    ]
  }),

  section({
    cls: 'sec-stats',
    eyebrow: 'Why it matters',
    h2: 'The cost of getting this wrong keeps rising',
    lead: 'Enforcement activity, breach volume and audit recovery have all trended upward across the last decade.',
    body: stats([
      { value: '$16M', label: 'Largest single HIPAA settlement on record, resolving a breach affecting nearly 79 million people.' },
      { value: '~2/day', label: 'Healthcare data breaches of 500+ records reported to federal regulators, on average.' },
      { value: '60 days', label: 'Maximum window to notify affected individuals after discovering a reportable breach.' },
      { value: '$2B+', label: 'Recovered through CMS and OIG program integrity audits in a single reporting year.' }
    ]) + `<p class="stats-note">Figures reflect published federal enforcement and breach reporting data.
      See <a href="/tips-faqs/">compliance tips &amp; FAQ</a> for current guidance and sources.</p>`
  }),

  useCases({
    h2: 'How organizations use HCP',
    lead: 'Representative engagements across the settings we serve most often.',
    items: [
      {
        tag: 'Multi-site specialty group',
        title: 'Consolidating six locations onto one program',
        challenge: 'An orthopedic group had grown through acquisition to six sites, each with its own inherited policy manual, its own training vendor and no shared view of completion.',
        approach: 'HCP built a single customized policy set covering all six locations, migrated every staff record into one roster, mapped roles to standardized training tracks, and gave the corporate compliance officer a site-by-site dashboard.',
        result: 'One manual instead of six, a single completion report for the board, and onboarding for newly acquired practices reduced from months to days.'
      },
      {
        tag: 'Independent practice',
        title: 'Passing an OCR inquiry without outside counsel',
        challenge: 'A four-provider family medicine practice received an OCR data request following a patient complaint, with a 30-day response deadline and no dedicated compliance staff.',
        approach: 'The assigned advisor team pulled the policy manual with revision history, per-employee training records, the current security risk analysis and the risk management plan, then helped draft the written response.',
        result: 'A complete, documented response submitted inside the deadline. The inquiry closed with no corrective action plan and no penalty.'
      },
      {
        tag: 'Business associate',
        title: 'Turning compliance into a sales asset',
        challenge: 'A medical billing company was losing enterprise deals because it could not satisfy health system security questionnaires or produce evidence of a formal HIPAA program.',
        approach: 'HCP implemented a full business associate program: Security Rule policies, documented risk analysis, workforce training, incident response procedures and BAA tracking across its own subcontractors.',
        result: 'Security questionnaires answered from existing documentation, and compliance posture became a differentiator in competitive RFPs rather than an obstacle.'
      },
      {
        tag: 'Private equity platform',
        title: 'Standardizing diligence across a portfolio',
        challenge: 'A PE-backed dermatology platform needed consistent compliance posture across acquisitions, plus a defensible answer for investor diligence.',
        approach: 'A standard program template was applied at every add-on acquisition, with exclusion screening, coding audits and portfolio-level reporting rolled up to the platform compliance officer.',
        result: 'Predictable diligence outcomes, faster post-close integration, and a documented program that survived investor and lender review.'
      },
      {
        tag: 'Hospital department',
        title: 'Closing an OSHA inspection finding',
        challenge: 'A hospital outpatient department was cited during an inspection for incomplete Bloodborne Pathogens documentation and an inaccessible SDS binder.',
        approach: 'HCP rebuilt the exposure control plan, moved safety data sheets into a virtual binder accessible from any workstation, and implemented recurring inspection checklists with photo documentation.',
        result: 'The citation was abated within the response window, and the department now generates inspection-ready records continuously.'
      },
      {
        tag: 'MedSpa / aesthetics',
        title: 'Building a program from zero',
        challenge: 'A growing aesthetics practice operating under a medical director had no formal HIPAA or OSHA program and was expanding into a second location.',
        approach: 'HCP established the full compliance foundation: policies scoped to the services performed, staff training by role, an exposure control plan for injectables and laser procedures, and BAAs with its technology vendors.',
        result: 'A defensible program in place before the second location opened, and a repeatable template for continued expansion.'
      }
    ]
  }),

  section({
    eyebrow: 'Client feedback',
    h2: 'What compliance officers tell us',
    lead: 'The consistent theme: responsiveness, and no longer carrying the program alone.',
    body: quotes([
      { text: 'We moved from a binder nobody opened to a system that tells me exactly who is behind on training. When our advisor says she will call back, she calls back.', name: 'Practice Administrator', role: 'Multi-provider family medicine group' },
      { text: 'The audit support alone justified the subscription. Having someone who had done this before on the phone within the hour changed the whole experience.', name: 'Compliance Officer', role: 'Regional specialty network' },
      { text: 'Our staff finishes their training now, which was never true before. The assignments show up, the reminders go out, and I stop chasing people.', name: 'Office Manager', role: 'Independent dermatology practice' }
    ]) + `<p class="center mt-2"><a class="btn btn-ghost" href="/testimonials/">Read more client stories</a></p>`
  }),

  faqSection({
    h2: 'Questions healthcare organizations ask before switching',
    lead: 'Straight answers to what most prospective clients raise on the first call.',
    faqs
  }),

  related([
    { href: '/compliance-solution/', label: 'SHIELD Compliance Solution', text: 'The full platform, module by module.' },
    { href: '/coding-compliance/', label: 'SENTRY Coding Intelligence', text: 'Coding audits and billing integrity.' },
    { href: '/fractional-compliance-officer/', label: 'Fractional Compliance Officer', text: 'An experienced officer without a full-time hire.' },
    { href: '/specialties/', label: 'Compliance by specialty', text: 'Programs tuned to how your specialty actually works.' }
  ]),

  cta({
    h2: 'See where your program actually stands',
    text: 'The free risk assessment takes about 20 minutes and produces a written gap analysis against HIPAA, OSHA and corporate compliance requirements. No obligation, and the findings are yours to keep.',
    primary: { label: 'Start your free assessment', href: '/compliance-assessment/' },
    secondary: { label: 'Talk to an advisor', href: '/contact/' }
  })
].join('\n');

export default {
  path: '/',
  title: 'Healthcare Compliance Software | Healthcare Compliance Pros',
  description: 'HIPAA, OSHA and corporate compliance software backed by assigned compliance advisors. Free risk assessment. Call (855) 427-0427.',
  ogTitle: 'Healthcare Compliance Software That Runs in the Background',
  breadcrumbs: [],
  faqs,
  extraSchema: [
    {
      '@type': 'SoftwareApplication',
      '@id': abs('/#shield'),
      name: 'HCP SHIELD Compliance Solution',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Healthcare compliance management software',
      operatingSystem: 'Web browser',
      url: abs('/compliance-solution/'),
      publisher: { '@id': abs('/#organization') },
      featureList: [
        'Customized HIPAA policies and procedures',
        'OSHA exposure control and safety inspections',
        'Corporate compliance program management',
        'Learning management system with 130+ courses',
        'Security Risk Analysis',
        'Business Associate Agreement tracking',
        'Exclusion monitoring',
        'Audit support'
      ],
      offers: { '@type': 'Offer', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: abs('/contact/') }
    }
  ],
  body
};
