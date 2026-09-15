import { buildPage, section, prose, cards, checklist, steps } from '../shared.mjs';
import { abs } from '../layout.mjs';

const G = 'Expert services';
const crumb = { label: 'Solutions', href: '/compliance-solution/' };
const svc = (name, desc, url) => ({
  '@type': 'Service', '@id': abs(url) + '#service', name, description: desc, url: abs(url),
  serviceType: 'Healthcare compliance', provider: { '@id': abs('/#organization') },
  areaServed: { '@type': 'Country', name: 'United States' }
});

/* ---------------- SENTRY coding ---------------- */
const coding = buildPage({
  path: '/coding-compliance/',
  group: G,
  llmsLabel: 'SENTRY Coding Intelligence',
  title: 'Medical Coding Audits & Compliance | HCP SENTRY',
  description: 'Certified coder audits of E/M, modifiers and documentation, with provider-level feedback and corrective education that reduces denials.',
  breadcrumbs: [crumb, { label: 'SENTRY Coding Intelligence', href: '/coding-compliance/' }],
  eyebrow: 'SENTRY coding intelligence',
  h1: 'Find coding risk before a payer does',
  lead: 'Certified coder audits of your documentation and claims, with provider-specific findings and the education to correct patterns rather than just report them.',
  bullets: [
    'Prospective and retrospective chart audits by certified coders',
    'Evaluation and Management leveling, modifier and medical necessity review',
    'Provider-level scorecards with specific, actionable feedback',
    'Corrective education delivered through your existing training platform'
  ],
  heroStat: 'Supports the monitoring and auditing element of your compliance program',
  extraSchema: [svc('SENTRY Coding Intelligence', 'Medical coding and documentation audits by certified coders, with provider feedback and corrective education.', '/coding-compliance/')],
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'Why audit coding',
      h2: 'Coding risk runs in both directions',
      lead: 'Upcoding draws enforcement. Undercoding quietly costs you revenue you earned. Both are documentation problems.',
      body: prose([
        `Most coding problems are not fraud. They are habit. A provider learns to document a certain way in residency and repeats it for fifteen years. A practice adopts a template that pre-populates elements nobody verifies. A new hire codes conservatively because nobody ever reviewed their work. None of these are malicious, and all of them produce a pattern that looks, from the outside, like a deliberate practice.`,
        `That pattern is what payer analytics detect. Comparative billing reports, targeted probe and educate reviews, and payer audits all start by identifying providers whose distribution differs from peers. An audit that begins with a statistical outlier and finds documentation that does not support the level billed can be extrapolated across a claims universe, which is how a modest per-claim issue becomes a substantial repayment demand.`,
        `<h3>What a SENTRY audit reviews</h3>`,
        `<ul>
          <li>Evaluation and Management level selection against documented medical decision making or time</li>
          <li>Documentation sufficiency: does the note support what was billed, and is it authenticated and dated</li>
          <li>Modifier application, particularly 25, 59 and the X modifiers</li>
          <li>Medical necessity and diagnosis linkage</li>
          <li>Incident-to and split or shared visit requirements where applicable</li>
          <li>Template and copy-forward patterns that undermine note credibility</li>
          <li>Specialty-specific procedure coding and global period handling</li>
        </ul>`,
        `Findings are returned by provider, with the specific charts, the specific issue and the correct approach — not a summary percentage. Where a pattern appears across providers, corrective education is assigned through the platform so the fix is documented alongside the finding, which is exactly what the monitoring and corrective action elements of a compliance program require.`
      ])
    }),
    section({
      eyebrow: 'How it works',
      h2: 'A repeatable audit cycle',
      body: steps([
        { title: 'Scope', text: 'We select a statistically reasonable sample by provider, service line and payer, weighted toward your highest-risk code families.' },
        { title: 'Audit', text: 'Certified coders review documentation against the billed claim, recording agreement, over-documentation, under-documentation and modifier findings.' },
        { title: 'Report', text: 'You receive provider-level scorecards, aggregate trends, financial exposure estimates and specific chart-level examples.' },
        { title: 'Correct', text: 'Education is assigned to the providers and staff involved, corrective actions are tracked to closure, and the next cycle measures whether the pattern moved.' }
      ])
    })
  ],
  diffH2: 'Why practices run coding audits with HCP',
  differentiators: [
    { icon: 'users', title: 'Certified coders, specialty matched', text: 'Auditors experienced in your specialty review your charts, so findings account for how your procedures are actually documented.' },
    { icon: 'chart', title: 'Findings you can act on', text: 'Provider-level detail with specific charts and corrections, not an aggregate percentage that tells nobody what to change.' },
    { icon: 'grad', title: 'Correction built in', text: 'Education is assigned through the same platform that holds your compliance training, so remediation is documented automatically.' },
    { icon: 'refresh', title: 'A cycle, not an event', text: 'Recurring audits measure whether patterns actually moved, which is the evidence a compliance program is expected to produce.' },
    { icon: 'shield', title: 'Connected to your program', text: 'Audit results feed the monitoring, auditing and corrective action elements of your corporate compliance program directly.' },
    { icon: 'scale', title: 'Both directions', text: 'We flag under-documentation and missed revenue alongside overbilling risk, because accuracy is the goal rather than conservatism.' }
  ],
  compare: null,
  cases: [
    { tag: 'Orthopedics', title: 'Correcting a modifier 25 pattern', challenge: 'A practice applied modifier 25 on nearly every visit paired with a procedure, a distribution well outside peer norms.', approach: 'A targeted audit showed the separately identifiable service was frequently documented but not distinguishable in the note, and education addressed documentation structure.', result: 'Modifier use aligned with documented services, and the pattern that would have drawn payer attention resolved before a review began.' },
    { tag: 'Family medicine', title: 'Recovering value from undercoding', challenge: 'Providers consistently billed lower-level visits than their documentation supported, out of caution after a prior practice audit.', approach: 'The audit quantified documented-but-unbilled complexity by provider and trained clinicians on medical decision making criteria.', result: 'Coding accuracy improved in both directions, with levels supported by documentation rather than habit.' },
    { tag: 'Behavioral health', title: 'Cleaning up time-based documentation', challenge: 'Time-based therapy codes were billed with notes that did not consistently record start and stop times or total duration.', approach: 'Templates were revised, staff trained on time documentation requirements, and a follow-up audit measured compliance.', result: 'Documentation deficiencies largely eliminated within two cycles, with the remediation trail recorded.' }
  ],
  faqs: [
    { q: 'How many charts do you review?', a: 'Scope depends on provider count, specialty and risk. A common starting point is 10 to 20 charts per provider annually, weighted toward higher-risk code families, with expanded sampling where findings suggest a pattern.' },
    { q: 'Will an audit create a repayment obligation?', a: 'If an audit identifies overpayments, they generally must be reported and returned within 60 days of identification. That is precisely why finding issues internally is preferable — the exposure is bounded, and voluntary correction is a recognized mitigating factor.' },
    { q: 'Do you audit prospectively or retrospectively?', a: 'Both. Prospective review catches issues before claims go out and is common for new providers or new service lines. Retrospective review measures existing patterns and is what most compliance programs schedule annually.' },
    { q: 'Do providers see their own results?', a: 'Yes. Each provider receives a scorecard with their specific charts and findings. Aggregate trends go to leadership. The goal is behavior change, which requires the person doing the documenting to see the detail.' },
    { q: 'Is this the same as our billing company’s review?', a: 'Usually not. A billing company reviews claims for clean submission and denial avoidance. A compliance audit asks whether documentation supports what was billed — a different question, and one an entity with a financial interest in the claim should not be the sole judge of.' },
    { q: 'How does this connect to our compliance program?', a: 'Directly. Routine monitoring and auditing is the sixth element of an effective compliance program, and prompt corrective action is the seventh. SENTRY generates the documentation for both.' }
  ],
  related: [
    { href: '/compliance-solution/corporate-compliance/', label: 'Corporate Compliance', text: 'Where audit findings are documented.' },
    { href: '/medical-billing/', label: 'For billing companies', text: 'Compliance programs for billing partners.' },
    { href: '/privateequity/', label: 'For private equity', text: 'Portfolio coding risk assessment.' },
    { href: '/compliance-solution/lms/', label: 'Learning Management System', text: 'Where corrective education is assigned.' }
  ]
});

/* ---------------- Fractional compliance officer ---------------- */
const fco = buildPage({
  path: '/fractional-compliance-officer/',
  group: G,
  llmsLabel: 'Fractional Compliance Officer',
  title: 'Fractional Compliance Officer Services | HCP',
  description: 'An experienced healthcare compliance officer on a part-time basis — program ownership, committee leadership and audit response without a full-time hire.',
  breadcrumbs: [crumb, { label: 'Fractional Compliance Officer', href: '/fractional-compliance-officer/' }],
  eyebrow: 'Fractional compliance officer',
  h1: 'An experienced compliance officer, without the full-time hire',
  lead: 'Designating a compliance officer is required. Finding someone qualified, affordable and genuinely independent is the hard part. We fill the role.',
  bullets: [
    'A named, experienced compliance professional accountable for your program',
    'Compliance committee leadership, agendas and documented minutes',
    'Investigation of hotline reports and incidents, with documented dispositions',
    'Board and leadership reporting on a defined cadence'
  ],
  heroStat: 'Scales from a few hours monthly to embedded, ongoing leadership',
  extraSchema: [svc('Fractional Compliance Officer', 'Part-time designated healthcare compliance officer services including program ownership, committee leadership, investigations and audit response.', '/fractional-compliance-officer/')],
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'The staffing problem',
      h2: 'Most organizations assign this role to someone who cannot win',
      lead: 'The compliance officer is usually whoever had the least ability to refuse.',
      body: prose([
        `The seven elements require a designated compliance officer with real authority and access to leadership. In practice, small and mid-sized organizations hand the title to a practice administrator or office manager who already has a demanding full-time role, no formal compliance training, and — critically — a reporting line that undermines the independence the role requires.`,
        `That arrangement creates two problems. The first is capacity: the work that produces evidence, running committee meetings, closing corrective actions, reviewing audits, gets deferred behind operational urgency until an auditor asks for it. The second is structural: when the person responsible for billing operations also audits billing, the program has a conflict that any serious reviewer will identify immediately.`,
        `A fractional compliance officer solves both. You get someone who has done the work before, who is not competing with operational duties, and whose independence is structural rather than aspirational — at a fraction of the cost of a qualified full-time hire.`,
        `<h3>What the engagement covers</h3>`
      ]) + checklist([
        'Serving as your designated compliance officer of record',
        'Owning the compliance work plan and holding it to schedule',
        'Chairing the compliance committee with agendas and documented minutes',
        'Reviewing and closing audit findings and corrective action plans',
        'Investigating hotline reports and incidents with documented dispositions',
        'Overseeing exclusion screening, policy review cycles and training completion',
        'Preparing board, ownership and payer reporting',
        'Leading the response to OCR inquiries, OSHA inspections and payer audits',
        'Advising leadership on regulatory change and risk',
        'Preparing the organization for diligence, credentialing and payer reviews'
      ], 'checklist-2')
    })
  ],
  diffH2: 'Why a fractional officer works',
  differentiators: [
    { icon: 'users', title: 'Experience from day one', text: 'You get someone who has run compliance programs and handled real audits, not someone learning the role on your organization.' },
    { icon: 'scale', title: 'Structural independence', text: 'Your compliance officer does not report to the operations they oversee, which removes the conflict reviewers look for first.' },
    { icon: 'clock', title: 'Right-sized cost', text: 'A fraction of a qualified full-time salary, scaled to what your organization actually needs each month.' },
    { icon: 'gauge', title: 'Backed by the platform', text: 'Your officer works inside the same system that holds your policies, training and evidence, so nothing lives in a personal spreadsheet.' },
    { icon: 'refresh', title: 'Continuity through turnover', text: 'When an administrator leaves, the compliance program does not leave with them.' },
    { icon: 'shield', title: 'Escalation to a full team', text: 'Your officer draws on HCP advisors, coders and safety specialists as issues require.' }
  ],
  compare: null,
  cases: [
    { tag: 'Growing group practice', title: 'Replacing an overloaded administrator', challenge: 'A ten-provider group had named its practice administrator as compliance officer, and the program had not produced committee minutes in two years.', approach: 'A fractional officer assumed the role, restarted the committee on a quarterly cadence, and rebuilt the work plan with tracked deadlines.', result: 'A documented, operating program within two quarters, and the administrator returned to operations.' },
    { tag: 'Post-acquisition', title: 'Compliance leadership during integration', challenge: 'A platform acquired three practices in eight months with no compliance leadership bandwidth to integrate them.', approach: 'A fractional officer standardized policies across the acquired sites, consolidated training and reported integration status to ownership monthly.', result: 'Consistent posture across all sites and a defensible position for the next diligence cycle.' },
    { tag: 'Behavioral health', title: 'Covering a departure', challenge: 'The compliance officer at a behavioral health organization resigned with two weeks’ notice, mid-audit.', approach: 'A fractional officer stepped in immediately, took over the audit response, and maintained program continuity during the search for a permanent hire.', result: 'The audit was completed on schedule and the new hire inherited a documented, current program.' }
  ],
  faqs: [
    { q: 'How many hours are typical?', a: 'Engagements commonly run from a few hours per month for a small practice to a standing weekly commitment for a multi-site organization. Scope is set during discovery and adjusted as your program matures or your organization grows.' },
    { q: 'Can a fractional officer satisfy the designation requirement?', a: 'Yes. The requirement is a designated individual with appropriate authority and access to leadership. Your engagement letter documents the designation, the authority granted and the reporting relationship.' },
    { q: 'Do they work on site?', a: 'Most work is remote, with on-site visits scheduled where they add value — initial assessment, committee meetings, staff training and inspection preparation. On-site services can be scheduled separately.' },
    { q: 'What if we later hire internally?', a: 'A common and intended path. The fractional officer builds the program, documents it, and transitions it to your internal hire, often staying on in an advisory capacity during the handoff.' },
    { q: 'Do they have authority to make decisions?', a: 'Your engagement defines the scope of authority. Most clients grant authority over the compliance work plan, investigations and corrective action tracking, with escalation to ownership or the board for matters with financial or legal consequence.' },
    { q: 'Is the platform included?', a: 'The fractional officer service is typically paired with the SHIELD platform so the program runs on documented, shared infrastructure rather than in an individual’s files.' }
  ],
  related: [
    { href: '/compliance-solution/corporate-compliance/', label: 'Corporate Compliance', text: 'The program your officer will run.' },
    { href: '/on-site-services/', label: 'On-site services', text: 'In-person training and walkthroughs.' },
    { href: '/privateequity/', label: 'For private equity', text: 'Compliance leadership across a portfolio.' },
    { href: '/contact/', label: 'Discuss an engagement', text: 'Scope the right level of support.' }
  ]
});

/* ---------------- On-site services ---------------- */
const onsite = buildPage({
  path: '/on-site-services/',
  group: G,
  llmsLabel: 'On-Site Services',
  title: 'On-Site Compliance Services & Training | HCP',
  description: 'In-person compliance training, mock audits, facility safety walkthroughs and program assessments delivered at your location by HCP specialists.',
  breadcrumbs: [crumb, { label: 'On-Site Services', href: '/on-site-services/' }],
  eyebrow: 'On-site services',
  h1: 'When compliance work needs someone in the building',
  lead: 'Some things cannot be done remotely: walking your treatment rooms, watching your check-in workflow, or getting a skeptical clinical team genuinely engaged in a training session.',
  bullets: [
    'In-person HIPAA, OSHA and corporate compliance training',
    'Facility safety walkthroughs with documented findings and photos',
    'Mock OCR and OSHA audits with a written report',
    'Workflow observation that surfaces gaps no questionnaire would find'
  ],
  heroStat: 'Scheduled annually, at onboarding, or ahead of an expected review',
  extraSchema: [svc('On-Site Compliance Services', 'On-site healthcare compliance training, mock audits, facility safety walkthroughs and program assessments.', '/on-site-services/')],
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'What we do on site',
      h2: 'Four engagements that consistently produce findings',
      body: cards([
        { icon: 'grad', title: 'Live staff training', text: 'Interactive HIPAA, OSHA and compliance sessions tailored to your specialty, where staff ask the questions they would never submit in writing. Attendance is recorded against each individual.' },
        { icon: 'search', title: 'Mock audit', text: 'We run the inquiry the way a regulator would: document requests, staff interviews, evidence review. You receive a written report with prioritized findings and remediation steps.' },
        { icon: 'alert', title: 'Facility safety walkthrough', text: 'Sharps containers, eyewash stations, chemical storage, secondary labeling, exit routes, PPE availability and SDS accessibility, documented with photographs.' },
        { icon: 'users', title: 'Workflow observation', text: 'Watching check-in, rooming, records release and disposal as they actually happen. This is where the gap between written policy and real practice becomes visible.' }
      ])
    }),
    section({
      eyebrow: 'Why it finds things remote review does not',
      h2: 'Questionnaires capture what people believe is true',
      body: prose([
        `A remote assessment relies on self-reported answers. Someone tells you safety data sheets are accessible, and they genuinely believe it, because they know where the binder is. On site, you discover the binder lives in an office that locks at 5pm while evening staff are still handling chemicals. That is a finding no questionnaire produces.`,
        `The same pattern repeats across the physical and procedural environment. A screen angled toward the waiting room. A shared workstation left logged in. Paper records in an unlocked bin awaiting shredding. A conversation at the front desk audible from the lobby. An eyewash station with a box stacked in front of it. None of these appear in a policy review, and all of them are the sort of thing an inspector notices in the first ten minutes.`,
        `On-site engagements are also where training changes from a compliance task to something clinical staff engage with. A live session with someone who can answer "what do we do when a patient's spouse calls asking about their results" builds judgment that a recorded module cannot.`
      ])
    })
  ],
  diffH2: 'Why clients schedule on-site work',
  differentiators: [
    { icon: 'search', title: 'Findings you cannot self-report', text: 'Physical and workflow gaps surface only when someone walks the space and watches the work happen.' },
    { icon: 'users', title: 'Engagement that sticks', text: 'Live sessions let staff ask the real questions, which is where practical judgment actually forms.' },
    { icon: 'doc', title: 'A written report you can act on', text: 'Prioritized findings with photographs, remediation steps and owners, not a verbal summary.' },
    { icon: 'shield', title: 'Rehearsal before the real thing', text: 'A mock audit surfaces what you cannot produce while there is still time to build it.' },
    { icon: 'refresh', title: 'Tracked to closure', text: 'Findings load into your platform as corrective actions with owners and dates, so they get closed rather than filed.' },
    { icon: 'building', title: 'Multi-site coverage', text: 'Walkthroughs can be scheduled across locations with consistent criteria and comparable reporting.' }
  ],
  compare: null,
  cases: [
    { tag: 'Surgery center', title: 'A mock audit before a real one', challenge: 'A center anticipated a payer audit and had no idea whether its documentation would hold up under a formal request.', approach: 'HCP ran a full mock audit including document requests, staff interviews and evidence review, delivering a prioritized findings report.', result: 'Eleven gaps identified and closed in the six weeks before the actual audit, which concluded without material findings.' },
    { tag: 'Multi-site practice', title: 'Consistency across eight locations', challenge: 'A practice had no way to know whether its sites were actually operating the same program or just reporting that they were.', approach: 'Standardized walkthroughs were conducted at every location with identical criteria and photo documentation.', result: 'Substantial variation identified between sites, with site-specific corrective actions tracked to closure in the platform.' },
    { tag: 'Behavioral health', title: 'Training that changed behavior', challenge: 'Online modules were being completed, but privacy incidents at the front desk continued.', approach: 'An on-site session worked through the actual scenarios staff faced, including family member inquiries and lobby conversations.', result: 'Front desk incident reports declined noticeably in the following quarter.' }
  ],
  faqs: [
    { q: 'What geographic areas do you cover?', a: 'We schedule on-site engagements nationwide. Travel is coordinated during scheduling, and multi-site organizations are typically sequenced to cover several locations in one trip.' },
    { q: 'How long does a visit take?', a: 'A focused training session or safety walkthrough is usually a half day. A full mock audit with interviews and evidence review typically runs one to two days depending on size and complexity.' },
    { q: 'Do we need to close for a visit?', a: 'No. Walkthroughs and workflow observation are designed to happen during normal operations, since that is the point. Training sessions are commonly scheduled during a staff meeting, a lunch hour or a lighter clinic day.' },
    { q: 'Does training attendance count as documented training?', a: 'Yes. Attendance is recorded against each individual in the platform, with the topics covered, exactly like a completed online course.' },
    { q: 'Is on-site work included in our subscription?', a: 'On-site services are scheduled separately from the platform subscription. Some plans include an annual visit; additional engagements are quoted by scope.' },
    { q: 'What do we receive afterward?', a: 'A written report with prioritized findings, photographs where relevant, recommended remediation and suggested owners. Findings can be loaded into your platform as tracked corrective actions.' }
  ],
  related: [
    { href: '/compliance-solution/osha/', label: 'OSHA Compliance', text: 'The programs a walkthrough evaluates.' },
    { href: '/fractional-compliance-officer/', label: 'Fractional Compliance Officer', text: 'Ongoing leadership between visits.' },
    { href: '/compliance-assessment/', label: 'Free risk assessment', text: 'Start with a remote gap analysis.' },
    { href: '/hospitals-health-systems/', label: 'For hospitals', text: 'Department-level on-site support.' }
  ]
});

/* ---------------- Credential manager ---------------- */
const credential = buildPage({
  path: '/credential-manager/',
  group: G,
  llmsLabel: 'Credential Manager',
  title: 'Credential Management for Healthcare | HCP',
  description: 'Track licenses, certifications, DEA registrations and immunizations with automated expiration alerts and audit-ready documentation.',
  breadcrumbs: [crumb, { label: 'Credential Manager', href: '/credential-manager/' }],
  eyebrow: 'Credential manager',
  h1: 'No more expired licenses discovered during an audit',
  lead: 'Every license, certification, DEA registration, immunization record and malpractice policy tracked in one place, with alerts that fire before expiration rather than after.',
  bullets: [
    'Central repository for every credential your organization must verify',
    'Automated expiration alerts to the individual and their manager',
    'Primary source verification documentation stored with each record',
    'Exportable rosters for payers, credentialing bodies and surveys'
  ],
  heroStat: 'Connected to exclusion screening and onboarding workflows',
  extraSchema: [svc('Credential Manager', 'Healthcare credential tracking for licenses, certifications, DEA registrations, immunizations and insurance, with expiration alerting.', '/credential-manager/')],
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'The exposure',
      h2: 'An expired credential is a billing problem, not just an HR problem',
      body: prose([
        `When a clinician's license lapses, the services they furnish during the lapse may not be billable, and claims already submitted may become overpayments subject to the 60-day repayment rule. A lapsed BLS certification can put you out of compliance with accreditation standards. A missing hepatitis B declination form is an OSHA finding. An expired malpractice policy can breach payer contracts and hospital privileges simultaneously.`,
        `These lapses almost never happen because someone decided to let a credential expire. They happen because tracking lives in a spreadsheet that one person maintains, renewal dates arrive during a busy quarter, and nobody is alerted until the credential is already expired — often discovered during a payer audit or a credentialing cycle, when the remedy is expensive.`,
        `<h3>What gets tracked</h3>`,
        `<ul>
          <li>State professional licenses for every licensed role, with license numbers and expiration dates</li>
          <li>DEA registrations and state controlled substance registrations</li>
          <li>Board certifications and specialty credentials</li>
          <li>BLS, ACLS, PALS and other clinical certifications</li>
          <li>Immunization records and TB screening, including hepatitis B vaccination and declination forms</li>
          <li>Malpractice and professional liability coverage</li>
          <li>CME and continuing education progress toward licensure requirements</li>
          <li>Background check and exclusion screening results</li>
          <li>Required annual training completions</li>
        </ul>`
      ])
    })
  ],
  diffH2: 'Why credential tracking belongs in your compliance platform',
  differentiators: [
    { icon: 'clock', title: 'Alerts before, not after', text: 'Notifications escalate to the individual and their manager well ahead of expiration, when renewal is still routine.' },
    { icon: 'users', title: 'One record per person', text: 'Credentials, training completions, acknowledgements and screening results live on the same profile rather than in four systems.' },
    { icon: 'doc', title: 'Verification documented', text: 'Primary source verification evidence is stored with each credential, which is what surveyors and payers ask to see.' },
    { icon: 'chart', title: 'Rosters on demand', text: 'Export a current, complete credential roster for a payer, a credentialing body or a survey in minutes.' },
    { icon: 'shield', title: 'Linked to exclusion screening', text: 'Monthly OIG and SAM screening results attach to the same profile, closing a gap most tracking spreadsheets miss.' },
    { icon: 'building', title: 'Multi-site aware', text: 'Requirements can differ by location and role, with reporting rolled up across the organization.' }
  ],
  compare: null,
  cases: [
    { tag: 'Multi-specialty group', title: 'Catching lapses before billing did', challenge: 'A group discovered during a payer credentialing cycle that two clinicians had practiced briefly under expired state licenses.', approach: 'All credentials were migrated into Credential Manager with automated alerting at 90, 60 and 30 days, escalating to department managers.', result: 'No further lapses, and renewal became a routine calendar item rather than an annual emergency.' },
    { tag: 'Urgent care network', title: 'Survey preparation in an afternoon', challenge: 'Preparing a credential roster for an accreditation survey historically took weeks of collecting documents by email.', approach: 'Credentials and verification documentation were centralized with standing requirements per role and location.', result: 'The survey roster was produced from the platform in a single afternoon, with verification attached to each record.' },
    { tag: 'Behavioral health', title: 'Tracking supervision and licensure tiers', challenge: 'Associate-level clinicians under supervision had differing requirements, tracked informally by supervisors.', approach: 'Role-based credential requirements were configured by licensure tier with supervision documentation attached to each profile.', result: 'Clear visibility into which clinicians could bill which services, and documented supervision records.' }
  ],
  faqs: [
    { q: 'Does this handle payer enrollment or privileging?', a: 'Credential Manager is a tracking and documentation system, not a delegated credentialing service. It holds the records, verification evidence and expirations that enrollment and privileging processes depend on, and produces the rosters those processes require.' },
    { q: 'Who gets alerted before an expiration?', a: 'The credential holder and their designated manager, on an escalating schedule you configure — commonly 90, 60 and 30 days out, then more frequently as the date approaches.' },
    { q: 'Can staff upload their own documents?', a: 'Yes. Individuals can upload renewals directly to their profile, which an administrator then reviews and verifies, so the administrative burden does not sit entirely with one person.' },
    { q: 'Does it track immunizations?', a: 'Yes, including hepatitis B vaccination and declination records required under the Bloodborne Pathogens standard, TB screening and other immunization documentation your policies require.' },
    { q: 'How does this connect to exclusion screening?', a: 'Monthly OIG and SAM screening results attach to the same individual profile, so credential status and exclusion status are reviewed together rather than in separate systems.' },
    { q: 'Can requirements differ by role?', a: 'Yes. Requirements are configured per role and per location, so a medical assistant, a nurse practitioner and a physician each carry the correct credential set automatically.' }
  ],
  related: [
    { href: '/background-checks/', label: 'Background checks', text: 'Screening built into onboarding.' },
    { href: '/compliance-solution/corporate-compliance/', label: 'Corporate Compliance', text: 'Where exclusion screening is required.' },
    { href: '/compliance-solution/lms/', label: 'Learning Management System', text: 'Training completions on the same profile.' },
    { href: '/hospitals-health-systems/', label: 'For hospitals', text: 'Department-level credential visibility.' }
  ]
});

/* ---------------- Background checks ---------------- */
const background = buildPage({
  path: '/background-checks/',
  group: G,
  llmsLabel: 'Background Checks',
  title: 'Healthcare Background Screening | HCP',
  description: 'Pre-employment background checks and ongoing OIG and SAM exclusion monitoring built into your compliance program and onboarding workflow.',
  breadcrumbs: [crumb, { label: 'Background Checks', href: '/background-checks/' }],
  eyebrow: 'Background screening',
  h1: 'Screening that continues after the hire date',
  lead: 'Pre-employment background checks plus recurring OIG and SAM exclusion monitoring, documented in the same system that holds the rest of your compliance evidence.',
  bullets: [
    'Criminal history, employment and education verification',
    'OIG LEIE and SAM exclusion screening at hire and monthly thereafter',
    'Results retained with date stamps as compliance evidence',
    'Integrated with credential tracking and onboarding assignments'
  ],
  heroStat: 'Addresses the screening obligations most programs perform only once',
  extraSchema: [svc('Healthcare Background Screening', 'Pre-employment background checks and ongoing OIG and SAM exclusion monitoring for healthcare organizations.', '/background-checks/')],
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'Two obligations, often confused',
      h2: 'Background checks and exclusion screening are not the same thing',
      body: prose([
        `A background check tells you about someone's history at a point in time: criminal records, verified employment, verified education, and where applicable, license verification and motor vehicle records. It is a hiring decision input, governed by the Fair Credit Reporting Act and by state law that varies considerably in what may be considered and when.`,
        `Exclusion screening asks a narrower but more consequential question: has this individual or entity been excluded from participation in federal health care programs? Federal programs will not pay for items or services furnished, ordered or prescribed by an excluded party, and that prohibition extends to administrative and support staff whose work is paid for indirectly. Employing an excluded individual can result in civil monetary penalties and repayment of amounts paid for their services.`,
        `The operational difference matters. A background check happens once, at hire. Exclusion screening must recur, because exclusion can occur at any point during employment and your liability begins the day it takes effect — not the day you discover it. Screening at hire and never again is one of the most common gaps we find, and it accumulates silently.`,
        `<h3>What HCP provides</h3>`
      ]) + checklist([
        'Pre-employment criminal history searches at the appropriate jurisdictional levels',
        'Employment, education and professional license verification',
        'FCRA-compliant disclosure, authorization and adverse action workflow support',
        'OIG List of Excluded Individuals and Entities screening',
        'System for Award Management (SAM) exclusion screening',
        'State Medicaid exclusion list screening where applicable',
        'Monthly recurring screening of employees, contractors and vendors',
        'Potential-match review workflow with documented resolution',
        'Date-stamped result retention as compliance evidence',
        'Integration with credential records and onboarding training assignments'
      ], 'checklist-2')
    })
  ],
  diffH2: 'Why screening belongs inside your compliance program',
  differentiators: [
    { icon: 'refresh', title: 'Recurring, not one-time', text: 'Monthly screening closes the exposure window that hire-date-only screening leaves open for years.' },
    { icon: 'doc', title: 'Evidence retained automatically', text: 'Date-stamped results live in your compliance record, ready to produce rather than reconstructed from a vendor portal.' },
    { icon: 'users', title: 'Vendors and contractors too', text: 'Screening extends beyond employees to the contracted parties your obligation actually covers.' },
    { icon: 'search', title: 'Potential matches reviewed', text: 'Name matches are worked through a documented resolution process rather than dismissed or escalated indiscriminately.' },
    { icon: 'gauge', title: 'One profile per person', text: 'Screening results, credentials and training completions live together, so onboarding is one workflow.' },
    { icon: 'scale', title: 'Process support, not just data', text: 'Your advisor helps you apply results consistently and document the basis for decisions.' }
  ],
  compare: null,
  cases: [
    { tag: 'Multi-site practice', title: 'Closing a years-long screening gap', challenge: 'A practice had screened every employee at hire but never rescreened, leaving no evidence of ongoing compliance for staff hired years earlier.', approach: 'A baseline screen was run across the entire roster, then monthly recurring screening was enabled with documented retention.', result: 'A clean baseline and a continuous, evidenced screening record going forward.' },
    { tag: 'Billing company', title: 'Extending screening to subcontractors', challenge: 'A billing company screened its own employees but not the contractors it used for overflow coding work.', approach: 'The screening scope was expanded to contracted parties, with results tracked alongside their subcontractor BAAs.', result: 'A defensible position in client security reviews, and an exposure closed before a client audit found it.' },
    { tag: 'Home health', title: 'Onboarding as one workflow', challenge: 'Background checks, credential collection and compliance training ran through three separate processes, and new hires routinely started with one incomplete.', approach: 'Screening, credential requirements and training assignments were consolidated into a single onboarding workflow per role.', result: 'New hires reach their start date with all three complete, and gaps are visible before day one rather than after.' }
  ],
  faqs: [
    { q: 'How often should exclusion screening run?', a: 'Monthly is the widely accepted standard and what most payers and auditors expect. Because liability attaches from the effective date of exclusion rather than from discovery, longer intervals leave meaningful exposure.' },
    { q: 'Who has to be screened?', a: 'Employees, contractors and vendors whose items or services are paid for directly or indirectly by federal health care programs. In practice most organizations screen all staff plus contracted parties with a role in furnishing, ordering or billing services.' },
    { q: 'What happens on a potential match?', a: 'Potential matches are worked through a documented verification process using additional identifiers before any employment action is taken. The review and its resolution are recorded, which matters as much as the outcome.' },
    { q: 'Do background checks have to precede employment?', a: 'Timing and permissible content vary by state, and FCRA governs disclosure, authorization and the adverse action process. Your advisor helps you build a workflow that fits your jurisdictions.' },
    { q: 'Can we screen volunteers and students?', a: 'Yes, and many organizations do, particularly where volunteers or students have patient contact or access to PHI. Requirements can be configured by role type.' },
    { q: 'Are the results stored as compliance evidence?', a: 'Yes. Results are retained with date stamps on the individual’s profile, so screening history can be produced on request rather than pulled from a separate vendor portal under deadline.' }
  ],
  related: [
    { href: '/credential-manager/', label: 'Credential Manager', text: 'Licenses and certifications on the same profile.' },
    { href: '/compliance-solution/corporate-compliance/', label: 'Corporate Compliance', text: 'Where screening obligations originate.' },
    { href: '/compliance-solution/lms/', label: 'Learning Management System', text: 'Onboarding training assignments.' },
    { href: '/contact/', label: 'Talk to an advisor', text: 'Scope screening for your organization.' }
  ]
});

export default [coding, fco, onsite, credential, background];
