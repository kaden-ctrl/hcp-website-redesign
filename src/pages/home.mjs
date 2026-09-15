import {
  hero, section, prose, cards, checklist, steps, stats,
  differentiators, useCases, faqSection, quotes, cta, related, icon,
  pillar, services, media
} from '../components.mjs';
import { img } from '../layout.mjs';
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
    variant: 'light',
    h1: '<em>Simplify Compliance</em><strong>with HIPAA Compliant Software</strong>',
    lead: `Best Healthcare Compliance Software, backed by Compliance Experts.`,
    primary: { label: 'Check Your Compliance Risk', href: '/compliance-assessment/' },
    secondary: { label: 'Request a Consultation', href: '/contact/' },
    offers: [
      { icon: 'breach', label: 'Breach Support' },
      { icon: 'policy', label: 'Custom Policies &amp; Procedures' },
      { icon: 'training', label: 'Online Training' },
      { icon: 'audit', label: 'Expert Audit Support' },
      { icon: 'risk', label: 'Security Risk Analysis' },
      { icon: 'hotline', label: 'Compliance Hotline' }
    ]
  }),

  section({
    h2: '<em>Your Trusted Partner</em><strong>in Healthcare Compliance Software</strong>',
    lead: 'Navigate compliance regulations with ease, backed by experts who are with you every step of the way.',
    body: `<div class="trust-photo">${img({
        src: '/assets/img/site/feature-map.webp',
        alt: 'Two healthcare professionals reviewing compliance documentation together',
        title: 'Healthcare teams supported by HCP compliance advisors',
        width: 1400, height: 812, loading: 'eager'
      })}</div>
    <ul class="trust">
      <li><span class="n" aria-hidden="true">1</span><h3>Dedicated Compliance Support Team</h3>
        <p>Every client is assigned a team of 3&ndash;5 experienced compliance professionals, available to provide personalized guidance and support.</p></li>
      <li><span class="n" aria-hidden="true">2</span><h3>Comprehensive Audit Support</h3>
        <p>Expert assistance for any HIPAA, OSHA or corporate compliance audit, ensuring your organization is well prepared and protected.</p></li>
      <li><span class="n" aria-hidden="true">3</span><h3>Policy &amp; Procedure Management</h3>
        <p>Customized policies and procedures updated regularly to meet changing regulations, with employee acknowledgement tracking.</p></li>
      <li><span class="n" aria-hidden="true">4</span><h3>Technical Support</h3>
        <p>Year-round access to a dedicated support team for troubleshooting and getting the most out of the platform.</p></li>
      <li><span class="n" aria-hidden="true">5</span><h3>Centralized Resources</h3>
        <p>A robust library of company forms, compliance guides and training materials, all updated to meet the latest standards.</p></li>
    </ul>`
  }),

  section({
    h2: '<em>Manage Your</em><strong>HIPAA &amp; OSHA Compliance Requirements</strong>',
    lead: 'Powered by HCP SHIELD software &mdash; four connected programs, one staff login, one dashboard.',
    body: `<div class="pillars">
      ${pillar({
        tag: 'HIPAA', title: 'HIPAA Compliance',
        text: 'Privacy and Security Rule coverage from documentation through incident response.',
        image: { src: '/assets/img/site/prog-hipaa.webp', alt: 'Clinician interacting with a HIPAA data security interface', title: 'HIPAA compliance program', width: 900, height: 601 },
        badgeIcon: '/assets/img/site/tab-hipaa.webp',
        items: ['Customized Privacy &amp; Security policies', 'Annual and role-based HIPAA training', 'Security Risk Analysis with tracked remediation', 'Business Associate Agreement management', 'Breach risk assessment and notification guidance', 'Expert audit and investigation support'],
        href: '/compliance-solution/hipaa/', cta: 'Explore HIPAA compliance'
      })}
      ${pillar({
        tag: 'OSHA', title: 'OSHA Compliance',
        text: 'Workplace safety built for clinical environments, not generic industrial templates.',
        image: { src: '/assets/img/site/prog-osha.webp', alt: 'Clinical staff member in surgical gown, mask and gloves', title: 'OSHA compliance program', width: 900, height: 601 },
        badgeIcon: '/assets/img/site/tab-osha.webp',
        items: ['Bloodborne Pathogens exposure control plan', 'Hazard Communication and virtual SDS binder', 'Facility safety inspection checklists and logs', 'Hazard and risk assessments', 'Annual and new-hire safety training', 'Inspection preparation and response support'],
        href: '/compliance-solution/osha/', cta: 'Explore OSHA compliance'
      })}
      ${pillar({
        tag: 'Corporate', title: 'Corporate Compliance',
        text: 'A documented program built on the seven elements CMS and the OIG expect to see.',
        image: { src: '/assets/img/site/prog-corporate.webp', alt: 'Illustration representing billing integrity and fraud, waste and abuse risk', title: 'Corporate compliance program', width: 900, height: 506, cut: true },
        badgeIcon: '/assets/img/site/tab-corporate.webp',
        items: ['Code of conduct and compliance policies', 'Fraud, Waste &amp; Abuse and False Claims Act training', 'Anonymous compliance hotline', 'OIG and SAM exclusion monitoring', 'Compliance committee structure and records', 'Internal auditing and corrective action tracking'],
        href: '/compliance-solution/corporate-compliance/', cta: 'Explore corporate compliance'
      })}
      ${pillar({
        tag: 'LMS', title: 'Learning Management System',
        text: '130+ courses with automated assignment, reminders and certificate tracking.',
        image: { src: '/assets/img/site/prog-lms.webp', alt: 'Clinician completing online compliance training at a desk', title: 'Learning management system', width: 900, height: 600 },
        badgeIcon: '/assets/img/site/tab-lms.webp',
        items: ['Role-based training tracks assigned automatically', 'Automated scheduling, reminders and refreshers', 'AMA PRA Category 1 Credits&trade; on select courses', 'Custom course builder with narration and quizzes', 'Real-time completion reporting', 'Certificates generated and stored automatically'],
        href: '/compliance-solution/lms/', cta: 'Explore the LMS'
      })}
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
    h2: 'Looking for more ways to enhance your compliance strategy?',
    lead: 'Expert services that plug into your program when you need capability the software alone cannot provide.',
    body: services([
      { icon: '/assets/img/site/icon-fractional.svg', title: 'Fractional Compliance Officer', text: 'Fill the role without a full-time hire', href: '/fractional-compliance-officer/' },
      { icon: '/assets/img/site/icon-onsite.svg', title: 'On-Site Services', text: 'Training, walkthroughs and mock audits', href: '/on-site-services/' },
      { icon: '/assets/img/site/icon-credential.svg', title: 'Credential Manager', text: 'Licences tracked before they lapse', href: '/credential-manager/' },
      { icon: '/assets/img/site/icon-background.svg', title: 'Background Checks', text: 'Screening that continues after hire', href: '/background-checks/' },
      { icon: '/assets/img/site/tab-corporate.webp', title: 'Coding Auditing', text: 'Find coding risk before a payer does', href: '/coding-compliance/' }
    ])
  }),

  section({
    cls: 'sec-stats',
    h2: '<em>Why Compliance Matters</em><strong>The Risks of Non-Compliance</strong>',
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
    cls: 'sec-alt',
    body: `<div class="split">
      <div class="split-copy">
        <h2><em>Comprehensive Healthcare Compliance Software</em><strong>Stay Current. Avoid Penalties.</strong></h2>
        <p>Healthcare organizations face relentless regulatory oversight across HIPAA, OSHA, corporate
        compliance and human resources. Most have struggled to find an efficient, affordable way to stay
        current with obligations that carry high overhead and no revenue.</p>
        <p>HCP was built to remove that burden: online tools that generate evidence as your team works,
        paired with compliance professionals who know your organization by name. You focus on patient
        care; we handle the detail.</p>
        <p class="hero-cta"><a class="btn btn-primary" href="/solutions/the-hcp-difference/">Explore the HCP difference</a></p>
      </div>
      <div class="split-media">${media({
        src: '/assets/img/site/feature-comprehensive.webp',
        alt: 'A team of healthcare professionals standing together',
        title: 'The Healthcare Compliance Pros approach',
        width: 1000, height: 563, cut: true
      })}</div>
    </div>`
  }),

  section({
    h2: '<em>Hear What Our</em><strong>Clients Have To Say</strong>',
    lead: 'The consistent theme: responsiveness, and no longer carrying the program alone.',
    body: quotes([
      { text: 'We moved from a binder nobody opened to a system that tells me exactly who is behind on training. When our advisor says she will call back, she calls back.', name: 'Practice Administrator', role: 'Multi-provider family medicine group', portrait: '/assets/img/site/person-1.webp' },
      { text: 'The audit support alone justified the subscription. Having someone who had done this before on the phone within the hour changed the whole experience.', name: 'Compliance Officer', role: 'Regional specialty network', portrait: '/assets/img/site/person-2.webp' },
      { text: 'Our staff finishes their training now, which was never true before. The assignments show up, the reminders go out, and I stop chasing people.', name: 'Office Manager', role: 'Independent dermatology practice', portrait: '/assets/img/site/person-3.webp' }
    ]) + `<p class="center mt-2"><a class="btn btn-ghost" href="/testimonials/">Read more client stories</a></p>`
  }),

  faqSection({
    h2: 'Questions healthcare organizations ask before switching',
    lead: 'Straight answers to what most prospective clients raise on the first call.',
    faqs
  }),

  section({
    cls: 'sec-alt',
    h2: 'Recommended Articles',
    lead: 'Practical guidance from the advisors who handle these situations with clients.',
    body: `<ul class="posts">
      <li class="post"><div class="post-media">${img({ src: '/assets/img/site/article-tools.webp', alt: 'Compliance management tools illustration', title: 'Compliance management tools', width: 800, height: 533 })}</div>
        <div class="post-body"><p class="post-meta">Program management · 8 min read</p>
        <h3><a href="/the-essential-compliance-management-tools-every-business-needs/">The compliance management tools every healthcare organization needs</a></h3>
        <p>Compliance tooling is often bought backwards — training first, evidence last. Here is the order that actually works.</p>
        <p><a class="card-link" href="/the-essential-compliance-management-tools-every-business-needs/">Continue reading</a></p></div></li>
      <li class="post"><div class="post-media">${img({ src: '/assets/img/site/article-ai.webp', alt: 'Artificial intelligence and compliance illustration', title: 'AI compliance', width: 800, height: 533 })}</div>
        <div class="post-body"><p class="post-meta">Emerging risk · 9 min read</p>
        <h3><a href="/unpacking-ai-compliance-what-every-business-needs-to-know/">Unpacking AI compliance: what healthcare organizations need to know</a></h3>
        <p>Ambient scribes and coding assistants are already in clinical workflows. The HIPAA questions they raise need answers now.</p>
        <p><a class="card-link" href="/unpacking-ai-compliance-what-every-business-needs-to-know/">Continue reading</a></p></div></li>
      <li class="post"><div class="post-media">${img({ src: '/assets/img/site/article-software.webp', alt: 'Compliance software evaluation illustration', title: 'Compliance software solutions', width: 800, height: 533 })}</div>
        <div class="post-body"><p class="post-meta">Buying guide · 7 min read</p>
        <h3><a href="/discover-the-top-compliance-software-solutions-for-your-organization/">How to evaluate compliance software without getting burned</a></h3>
        <p>Most demos show the same four screens. These are the questions that reveal whether a platform will hold up.</p>
        <p><a class="card-link" href="/discover-the-top-compliance-software-solutions-for-your-organization/">Continue reading</a></p></div></li>
    </ul>`
  }),

  related([
    { href: '/compliance-solution/', label: 'SHIELD Compliance Solution', text: 'The full platform, module by module.' },
    { href: '/coding-compliance/', label: 'SENTRY Coding Intelligence', text: 'Coding audits and billing integrity.' },
    { href: '/fractional-compliance-officer/', label: 'Fractional Compliance Officer', text: 'An experienced officer without a full-time hire.' },
    { href: '/specialties/', label: 'Compliance by specialty', text: 'Programs tuned to how your specialty actually works.' }
  ]),

  cta({
    h2: '<em>A User Friendly, Simple Compliance Program</em><strong>Healthcare Compliance Software</strong>',
    text: 'The free risk assessment takes about 20 minutes and produces a written gap analysis against HIPAA, OSHA and corporate compliance requirements. No obligation, and the findings are yours to keep.',
    primary: { label: 'Simplify Compliance Today!', href: '/compliance-assessment/' },
    secondary: { label: 'Talk to an advisor', href: '/contact/' }
  }),

  section({
    cls: 'sec-alt',
    body: `<div class="news-in">
      <div>
        <h2>Stay Informed &amp; Educated</h2>
        <p>Subscribers learn from Compliance Advisors who share:</p>
        <ul>
          <li>The latest regulatory updates you don&rsquo;t want to miss</li>
          <li>Trending topics so your organization can get ahead</li>
          <li>Access to resources that help you stay compliant</li>
        </ul>
      </div>
      <div>
        <form class="news-form" action="/contact/" method="get">
          <label class="visually-hidden" for="news-email">Work email</label>
          <input type="email" id="news-email" name="email" placeholder="Your work email" required>
          <button type="submit" class="btn btn-primary">Subscribe</button>
        </form>
        <p class="form-note">We use your email only to send compliance updates. Unsubscribe any time &mdash;
          see our <a href="/privacypolicy/">privacy policy</a>.</p>
      </div>
    </div>`
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
