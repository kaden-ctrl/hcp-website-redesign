import { buildPage, section, prose, cards, checklist } from '../shared.mjs';
import { abs } from '../layout.mjs';
import { esc } from '../layout.mjs';

const GO = 'Who we serve';
const GSP = 'Specialties';
const crumbSpec = { label: 'Specialties', href: '/specialties/' };

const svc = (name, desc, url, audience) => ({
  '@type': 'Service', '@id': abs(url) + '#service', name, description: desc, url: abs(url),
  serviceType: 'Healthcare compliance', provider: { '@id': abs('/#organization') },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: audience }
});

/* =============== Organization-type pages =============== */

const practices = buildPage({
  path: '/medical-practices/',
  group: GO,
  llmsLabel: 'Medical Practices',
  title: 'Compliance for Medical Practices | HCP',
  description: 'HIPAA, OSHA and corporate compliance built for independent and group medical practices, with advisors who handle the work you cannot staff.',
  breadcrumbs: [{ label: 'Medical Practices', href: '/medical-practices/' }],
  eyebrow: 'For medical practices',
  h1: 'Compliance for practices without a compliance department',
  lead: 'Independent and group practices carry the same regulatory obligations as health systems, with a fraction of the staff. HCP supplies the expertise you cannot justify hiring.',
  bullets: [
    'One platform covering HIPAA, OSHA and corporate compliance',
    'Policies customized to your specialty, size and state',
    'Training assigned by role so nobody sits through the wrong course',
    'Assigned advisors who answer the phone when something happens'
  ],
  heroStat: 'Implementation typically completes in two to three weeks',
  heroPhoto: { src: '/assets/img/site/feature-comprehensive.webp', alt: 'A team of healthcare professionals standing together', title: 'Compliance for medical practices', width: 1000, height: 563 },
  extraSchema: [svc('Compliance for Medical Practices', 'HIPAA, OSHA and corporate compliance programs for independent and group medical practices.', '/medical-practices/', 'Medical practices')],
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'The staffing reality',
      h2: 'You are expected to run a program designed for organizations ten times your size',
      body: prose([
        `Regulatory obligations do not scale down with headcount. A four-provider practice must maintain the same customized policies, conduct the same security risk analysis, document the same workforce training, execute the same business associate agreements and respond to the same audit requests as an organization with a dedicated compliance department. What changes is who does the work — usually a practice administrator who is also handling scheduling, billing escalations, staffing and vendor management.`,
        `The predictable outcome is a program that exists but does not operate. Policies are written once. Training is completed by whoever remembers. The risk analysis is performed during implementation and never revisited. Business associate agreements are signed and filed. None of it is negligence; it is capacity, and capacity does not improve on its own.`,
        `HCP is built for exactly this situation. The platform automates the parts that should be automatic — assignment, reminders, expiration alerts, evidence capture — and your advisor team absorbs the parts that require expertise: policy customization, risk analysis, incident handling and audit response. Your administrator moves from doing compliance to overseeing it.`,
        `<h3>What practices typically start with</h3>`
      ]) + checklist([
        'A free risk assessment identifying the specific gaps in your current program',
        'Customized HIPAA Privacy and Security policies replacing generic templates',
        'A documented Security Risk Analysis with a tracked remediation plan',
        'Role-based HIPAA and OSHA training with automated reminders',
        'A complete business associate inventory with executed agreements',
        'An incident log and a documented breach assessment process',
        'OSHA exposure control and Hazard Communication programs',
        'Assigned advisors available year-round at no additional charge'
      ], 'checklist-2')
    })
  ],
  cases: [
    { tag: 'Family medicine', title: 'An OCR inquiry closed with no corrective action', challenge: 'A four-provider practice received an OCR data request with a 30-day deadline and no dedicated compliance staff.', approach: 'The advisor team assembled policies with revision history, per-employee training records, the current risk analysis and the risk management plan, and helped draft the response.', result: 'A complete response inside the deadline, and the file closed with no corrective action plan and no penalty.' },
    { tag: 'Multi-provider group', title: 'Six inherited manuals became one', challenge: 'Growth by acquisition left six locations with six different policy manuals and no shared view of training completion.', approach: 'HCP built one customized manual covering all sites, merged rosters and standardized training tracks by role.', result: 'One board-level completion report, and new-practice onboarding reduced from months to days.' },
    { tag: 'Independent specialist', title: 'Finding vendors with no BAA', challenge: 'A solo specialty practice assumed its vendor agreements were complete, having never inventoried PHI access.', approach: 'A vendor inventory against real systems and workflows identified three vendors with PHI access and no executed agreement.', result: 'All gaps closed within six weeks, with renewal reminders preventing recurrence.' }
  ],
  faqs: [
    { q: 'Is this affordable for a small practice?', a: 'Yes. Pricing scales with headcount, so a five-person practice pays a fraction of what a multi-site group pays. Every plan includes the same assigned advisor team, policy customization, training library and audit support.' },
    { q: 'How much of our staff time does this take?', a: 'Implementation requires roughly a two-hour discovery session, a roster export and a one-hour dashboard walkthrough. Ongoing, most staff log in a few times a year to complete training and acknowledge policy updates.' },
    { q: 'We already have a binder. Why change?', a: 'A binder proves you wrote policies. It does not prove staff read them, that training happened on time, or that your risk analysis is current. Investigators ask for date-stamped evidence, and that is what the platform generates as your team works.' },
    { q: 'Do we need all three programs?', a: 'Most practices run HIPAA and OSHA at minimum. Corporate compliance becomes important with Medicare Advantage or Medicaid managed care contracts, payer requirements, or any prospect of acquisition or investor diligence.' },
    { q: 'Who is our day-to-day contact?', a: 'A team of three to five named compliance professionals who know your practice. You call them directly, and they are included in your subscription rather than sold as premium support.' },
    { q: 'What if we are audited?', a: 'Your advisor team works the audit with you — pulling the documentation requested, preparing your written response and walking through the process. Audit support is included, not billed as an emergency engagement.' }
  ],
  related: [
    { href: '/compliance-solution/hipaa/', label: 'HIPAA Compliance', text: 'Privacy, Security and breach management.' },
    { href: '/compliance-solution/osha/', label: 'OSHA Compliance', text: 'Safety programs for clinical settings.' },
    { href: '/specialties/', label: 'Compliance by specialty', text: 'Programs tuned to your specialty.' },
    { href: '/compliance-assessment/', label: 'Free risk assessment', text: 'See exactly where your gaps are.' }
  ]
});

const hospitals = buildPage({
  path: '/hospitals-health-systems/',
  group: GO,
  llmsLabel: 'Hospitals & Health Systems',
  title: 'Compliance for Hospitals & Health Systems | HCP',
  description: 'Department-level compliance support, standardized training and consolidated reporting for hospitals, health systems and outpatient networks.',
  breadcrumbs: [{ label: 'Hospitals & Health Systems', href: '/hospitals-health-systems/' }],
  eyebrow: 'For hospitals & health systems',
  h1: 'Consistency across departments, visibility across the system',
  lead: 'Enterprise compliance usually fails at the edges — the acquired practice, the outpatient department, the service line running its own process. HCP standardizes the edges.',
  bullets: [
    'Standardized programs applied consistently across departments and sites',
    'Location and department-level reporting that rolls up to the enterprise',
    'Support for newly acquired practices joining an existing standard',
    'On-site walkthroughs and mock audits by department'
  ],
  heroStat: 'Built to complement, not replace, enterprise compliance leadership',
  extraSchema: [svc('Compliance for Hospitals and Health Systems', 'Department-level HIPAA, OSHA and corporate compliance support with enterprise reporting for hospitals and health systems.', '/hospitals-health-systems/', 'Hospitals and health systems')],
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'Where enterprise programs break',
      h2: 'The main campus is rarely the problem',
      body: prose([
        `Large organizations generally have capable compliance leadership, mature policies and a functioning committee structure. What they frequently lack is uniform execution at the periphery: the physician practice acquired eighteen months ago that still runs its own training vendor, the outpatient therapy site whose safety inspections stopped when a manager left, the service line that adopted its own documentation standard because the enterprise template did not fit.`,
        `These gaps are difficult to see from the center. Enterprise dashboards report on systems the periphery is not actually using, so completion looks acceptable while entire populations are unaccounted for. The gap typically surfaces during an inspection, an incident or a survey — at the site nobody was worried about.`,
        `HCP is commonly deployed alongside an existing enterprise program to cover exactly these populations: acquired practices, ambulatory sites, outpatient departments and affiliated groups. The standard is set centrally, applied uniformly, and reported back in a form the enterprise compliance officer can consolidate.`,
        `<h3>How deployment usually works</h3>`,
        `<ul>
          <li>Enterprise policy standards are mapped into the platform, with site-level variation only where state law or service mix requires it</li>
          <li>Each department or site receives its own dashboard, with an owner accountable for completion</li>
          <li>Training tracks are standardized by role across the system so a medical assistant receives the same curriculum everywhere</li>
          <li>Safety inspections run on a recurring schedule per location with photo documentation</li>
          <li>Reporting rolls up by department, by site and across the enterprise for board and committee review</li>
          <li>Newly acquired practices are onboarded against the existing standard rather than integrated case by case</li>
        </ul>`
      ])
    })
  ],
  diffH2: 'Why systems add HCP alongside an existing program',
  cases: [
    { tag: 'Outpatient department', title: 'Abating an OSHA citation', challenge: 'A hospital outpatient department was cited for an incomplete exposure control plan and inaccessible safety data sheets.', approach: 'HCP rebuilt the exposure control plan, moved SDS into a virtual binder available from any workstation, and implemented recurring inspection checklists.', result: 'The citation was abated within the response window, with inspection-ready records generated continuously thereafter.' },
    { tag: 'Acquired practices', title: 'Onboarding against one standard', challenge: 'A system acquiring physician practices integrated each one’s compliance program manually, taking months per practice.', approach: 'A standard program template was applied at close, with roster import, role-mapped training and site dashboards configured on a fixed timeline.', result: 'Integration time dropped substantially, and acquired sites reached the enterprise standard in weeks rather than quarters.' },
    { tag: 'Ambulatory network', title: 'Finding the unreported population', challenge: 'Enterprise reporting showed strong training completion, but several ambulatory sites were not in the reporting system at all.', approach: 'A full roster reconciliation identified unaccounted staff, who were loaded and assigned the correct role-based tracks.', result: 'Accurate enterprise completion reporting for the first time, and a materially different picture than the prior dashboard showed.' }
  ],
  faqs: [
    { q: 'Do we have to replace our enterprise compliance system?', a: 'No. Most health system clients deploy HCP for specific populations — acquired practices, ambulatory sites, outpatient departments — alongside an existing enterprise program, with reporting exported for consolidation.' },
    { q: 'Can policies vary by site?', a: 'Yes, where they need to. Enterprise standards apply by default, with site-level variation permitted where state law or service mix requires it, and the variation is documented rather than improvised.' },
    { q: 'How does reporting roll up?', a: 'Completion and compliance status report by individual, department, site and enterprise, and export in formats suitable for board packets, committee review and survey preparation.' },
    { q: 'Do you support survey and accreditation preparation?', a: 'Yes. Mock audits, facility walkthroughs and credential roster production are commonly scheduled ahead of surveys, with prioritized written findings.' },
    { q: 'How are newly acquired practices handled?', a: 'Against a standard template applied at or shortly after close: roster import, role-mapped training, policy adoption and a site dashboard, on a fixed timeline rather than a bespoke project.' },
    { q: 'Who supports departmental compliance leads?', a: 'Each site or department has access to the assigned advisor team, so a department manager is not dependent on enterprise compliance bandwidth for routine questions.' }
  ],
  related: [
    { href: '/on-site-services/', label: 'On-site services', text: 'Department walkthroughs and mock audits.' },
    { href: '/credential-manager/', label: 'Credential Manager', text: 'Credential visibility by department.' },
    { href: '/compliance-solution/lms/', label: 'Learning Management System', text: 'Standardized training across sites.' },
    { href: '/medical-practices/', label: 'For medical practices', text: 'Programs for acquired practice sites.' }
  ]
});

const ba = buildPage({
  path: '/business-associates/',
  group: GO,
  llmsLabel: 'Business Associates',
  title: 'HIPAA Compliance for Business Associates | HCP',
  description: 'Business associates are directly liable under HIPAA. Build a documented Security Rule program, answer client security reviews and track subcontractor BAAs.',
  breadcrumbs: [{ label: 'Business Associates', href: '/business-associates/' }],
  eyebrow: 'For business associates',
  h1: 'You are directly liable. Build the program that proves you take it seriously.',
  lead: 'Vendors handling protected health information face the same Security Rule and Breach Notification obligations as providers — and increasingly, client security reviews that gate every enterprise deal.',
  bullets: [
    'Security Rule policies written for a vendor, not a clinic',
    'Documented risk analysis you can hand to a client reviewer',
    'Subcontractor BAA inventory and renewal tracking',
    'Incident response procedures that satisfy your BAA notification clauses'
  ],
  heroStat: 'Turns security questionnaires from a scramble into a lookup',
  extraSchema: [svc('HIPAA Compliance for Business Associates', 'HIPAA Security Rule compliance programs for business associates, including risk analysis, workforce training, incident response and subcontractor BAA management.', '/business-associates/', 'Business associates and healthcare vendors')],
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'What changed',
      h2: 'Direct liability, and clients who now verify',
      body: prose([
        `Business associates have been directly liable for Security Rule compliance and for the Breach Notification Rule since the Omnibus Rule took effect. That means enforcement can reach you directly, not only through your covered entity client. It also means your client's obligations flow to you contractually: your BAA almost certainly commits you to notification timelines, safeguard requirements and audit cooperation.`,
        `The commercial change has been just as significant. Health systems and large provider groups now run formal vendor security reviews. A questionnaire arrives asking for your risk analysis date, your encryption standards, your incident response procedure, your workforce training records and your subcontractor management process. Vendors who can answer from existing documentation move forward. Vendors who cannot lose the deal, or spend six weeks building answers while the buyer's timeline moves on.`,
        `<h3>What a business associate program has to include</h3>`
      ]) + checklist([
        'Security Rule policies covering administrative, physical and technical safeguards',
        'A documented risk analysis reflecting your actual systems and data flows',
        'A risk management plan with owners, target dates and tracked status',
        'Workforce security policies: access authorization, termination procedures, sanctions',
        'Security awareness and HIPAA training for every workforce member, documented per person',
        'Incident response procedures aligned to your BAA notification timelines',
        'Breach risk assessment methodology and an incident log',
        'Subcontractor BAAs, with an inventory and renewal tracking',
        'Contingency planning: backup, disaster recovery and emergency mode operation',
        'Device and media controls, including encryption and disposal standards'
      ], 'checklist-2')
    })
  ],
  diffH2: 'Why vendors build their program with HCP',
  cases: [
    { tag: 'Medical billing', title: 'Compliance as a sales asset', challenge: 'A billing company was losing enterprise deals because it could not satisfy health system security questionnaires or evidence a formal HIPAA program.', approach: 'HCP implemented Security Rule policies, a documented risk analysis, workforce training, incident response procedures and subcontractor BAA tracking.', result: 'Questionnaires answered from existing documentation, and compliance posture became a differentiator in competitive RFPs.' },
    { tag: 'Health tech vendor', title: 'Passing a health system review', challenge: 'A software vendor selling into health systems repeatedly stalled at the security review stage with no formal risk analysis.', approach: 'A documented risk analysis was completed against real infrastructure and data flows, with a tracked remediation plan for identified gaps.', result: 'The review cleared, and subsequent reviews became a document-retrieval exercise rather than a project.' },
    { tag: 'Transcription service', title: 'Getting subcontractors under agreement', challenge: 'A transcription company used offshore contractors with no executed subcontractor BAAs, a direct BAA breach.', approach: 'The full subcontractor chain was inventoried, compliant agreements were executed, and renewal tracking was established.', result: 'A contractual exposure closed before a client audit surfaced it, with ongoing tracking preventing recurrence.' }
  ],
  faqs: [
    { q: 'Are we actually a business associate?', a: 'If you create, receive, maintain or transmit protected health information on behalf of a covered entity, generally yes. Billing companies, IT providers, cloud vendors, transcription services, shredding companies, answering services, consultants and many software vendors typically qualify.' },
    { q: 'Can we be penalized directly?', a: 'Yes. Business associates are directly liable for Security Rule compliance and for the Breach Notification Rule, and federal enforcement actions have been brought against them directly.' },
    { q: 'Do we need our own risk analysis?', a: 'Yes. Your client’s risk analysis covers their environment, not yours. You need an accurate, thorough assessment of risks to the ePHI you handle, in your systems, kept current as your infrastructure changes.' },
    { q: 'What about our subcontractors?', a: 'Any subcontractor that creates, receives, maintains or transmits PHI on your behalf requires a business associate agreement with you, carrying the same obligations down the chain. Maintaining that inventory is your responsibility.' },
    { q: 'How fast must we notify a client of an incident?', a: 'Your BAA controls, and terms vary — many require notice within 24 to 72 hours of discovery, which is considerably faster than the regulatory default. Your incident procedures should be built against your actual contractual commitments.' },
    { q: 'Will this help with client security questionnaires?', a: 'Substantially. Most questionnaires ask for exactly what the program produces: risk analysis date and scope, policy documentation, training records, incident procedures, encryption standards and subcontractor management. Answers become retrieval rather than research.' }
  ],
  related: [
    { href: '/medical-billing/', label: 'For billing companies', text: 'Programs built for billing partners.' },
    { href: '/compliance-solution/hipaa/', label: 'HIPAA Compliance', text: 'Privacy and Security Rule detail.' },
    { href: '/compliance-assessment/', label: 'Free risk assessment', text: 'See where your vendor program stands.' },
    { href: '/partners/', label: 'Partner program', text: 'Refer clients or bundle compliance.' }
  ]
});

const billing = buildPage({
  path: '/medical-billing/',
  group: GO,
  llmsLabel: 'Medical Billing Companies',
  title: 'Compliance for Medical Billing Companies | HCP',
  description: 'HIPAA and corporate compliance programs for billing companies: Security Rule documentation, coding integrity, FWA training and client security reviews.',
  breadcrumbs: [{ label: 'Medical Billing Companies', href: '/medical-billing/' }],
  eyebrow: 'For medical billing companies',
  h1: 'Compliance is a billing company’s credibility',
  lead: 'You handle protected health information and you touch the claim. That puts you squarely inside both HIPAA liability and billing integrity expectations — and your clients are increasingly checking.',
  bullets: [
    'Business associate HIPAA program with documented risk analysis',
    'Fraud, Waste & Abuse and False Claims Act training for coding staff',
    'Internal coding audits that demonstrate billing integrity',
    'Documentation that answers client security reviews directly'
  ],
  heroStat: 'Built for organizations that are both vendor and claims participant',
  extraSchema: [svc('Compliance for Medical Billing Companies', 'HIPAA business associate and corporate compliance programs for medical billing companies, including coding audits and FWA training.', '/medical-billing/', 'Medical billing companies')],
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'Two exposures at once',
      h2: 'You carry vendor liability and claims liability simultaneously',
      body: prose([
        `Most business associates worry about one thing: protecting the protected health information they hold. A billing company carries that exposure and a second one, because the work product is a claim submitted to a federal or commercial payer. If claims your organization prepares are not supported by documentation, the exposure is not purely your client's.`,
        `That dual position is why billing companies benefit from running both a HIPAA business associate program and a corporate compliance program. The HIPAA side covers Security Rule documentation, workforce training, incident response and subcontractor management. The corporate compliance side covers Fraud, Waste and Abuse training, a code of conduct, an anonymous reporting channel, exclusion screening and internal auditing of coding accuracy.`,
        `The commercial benefit is direct. When a prospective client's security review arrives, you answer it from existing documentation. When a client asks how you ensure coding accuracy, you show them an audit cycle with findings and corrective education rather than an assurance. Compliance stops being a cost of doing business and starts being a reason to choose you.`,
        `<h3>What billing companies typically run</h3>`
      ]) + checklist([
        'Security Rule policies scoped to a billing operation, not a clinic',
        'Documented risk analysis covering your systems, clearinghouse connections and data flows',
        'Workforce HIPAA and security awareness training, documented per individual',
        'Incident response aligned to the notification timelines in your client BAAs',
        'Subcontractor BAA inventory including offshore and overflow coding partners',
        'Code of conduct and billing integrity policies',
        'Fraud, Waste & Abuse and False Claims Act training for all coding and billing staff',
        'Anonymous compliance hotline with documented intake and disposition',
        'Monthly OIG and SAM exclusion screening of staff and contractors',
        'Recurring internal coding audits with provider and coder-level feedback'
      ], 'checklist-2')
    })
  ],
  diffH2: 'Why billing companies work with HCP',
  cases: [
    { tag: 'Regional billing company', title: 'Winning enterprise deals', challenge: 'Enterprise prospects required security documentation the company could not produce, stalling deals at the review stage.', approach: 'A complete business associate program was implemented, with risk analysis, policies, training records and subcontractor BAA tracking.', result: 'Security reviews cleared from existing documentation, and compliance became a competitive differentiator.' },
    { tag: 'Specialty billing', title: 'Demonstrating coding integrity', challenge: 'A client questioned coding accuracy after a payer inquiry, and the company had no internal audit program to point to.', approach: 'Recurring coder-level audits were established with findings, corrective education and trend reporting shared with clients.', result: 'The client relationship was retained, and audit reporting became a standard part of the service offering.' },
    { tag: 'Offshore-supported', title: 'Closing the subcontractor gap', challenge: 'Overflow coding was handled by offshore contractors with no executed subcontractor agreements.', approach: 'The full subcontractor chain was inventoried and brought under compliant agreements with renewal tracking.', result: 'A material contractual exposure closed before a client audit identified it.' }
  ],
  faqs: [
    { q: 'Do we need a corporate compliance program, or just HIPAA?', a: 'Both are advisable. HIPAA covers your business associate obligations. A corporate compliance program addresses billing integrity — FWA training, exclusion screening, a reporting channel and internal auditing — which is increasingly expected by clients and payers alike.' },
    { q: 'Are we liable for our clients’ coding decisions?', a: 'Liability depends on facts and on your contracts, but submitting claims you know or should know are unsupported creates exposure. An internal audit program that identifies and corrects patterns is the practical protection, and it is the sixth element of an effective compliance program.' },
    { q: 'Can this help us win business?', a: 'Consistently. Prospective clients ask for security documentation and evidence of billing integrity. Having both ready shortens sales cycles and removes an objection competitors often cannot answer.' },
    { q: 'What about our offshore partners?', a: 'Any subcontractor handling PHI requires a business associate agreement carrying the same obligations. Offshore arrangements draw particular scrutiny in client reviews, so inventory and documentation matter more, not less.' },
    { q: 'Do our coders need FWA training?', a: 'Yes. Anyone involved in preparing or submitting claims should receive Fraud, Waste and Abuse and False Claims Act training at hire and annually, documented per individual.' },
    { q: 'How often should we audit our own coding?', a: 'At least annually, with more frequent review for new coders, new clients or new specialties. Recurring cycles matter more than sample size, because the evidence regulators and clients want is that patterns were measured and corrected.' }
  ],
  related: [
    { href: '/coding-compliance/', label: 'SENTRY Coding Intelligence', text: 'Coder-level audits and education.' },
    { href: '/business-associates/', label: 'For business associates', text: 'Vendor HIPAA obligations in detail.' },
    { href: '/compliance-solution/corporate-compliance/', label: 'Corporate Compliance', text: 'FWA, hotline and exclusion screening.' },
    { href: '/partners/', label: 'Partner program', text: 'Offer compliance to your clients.' }
  ]
});

const pe = buildPage({
  path: '/privateequity/',
  group: GO,
  llmsLabel: 'Private Equity',
  title: 'Healthcare Compliance for Private Equity | HCP',
  description: 'Standardize compliance across a healthcare portfolio: diligence support, post-close integration, coding risk assessment and platform-level reporting.',
  breadcrumbs: [{ label: 'Private Equity', href: '/privateequity/' }],
  eyebrow: 'For private equity',
  h1: 'Compliance risk you can price, standardize and report',
  lead: 'Healthcare investments carry regulatory exposure that surfaces at the worst moments — diligence, lender review and exit. A consistent program across the portfolio makes that exposure knowable.',
  bullets: [
    'Pre-close compliance and coding risk assessment',
    'A standard program template applied at every add-on acquisition',
    'Platform-level reporting across all portfolio companies',
    'Documented programs that hold up in lender and exit diligence'
  ],
  heroStat: 'Designed for platform and buy-and-build strategies',
  extraSchema: [svc('Healthcare Compliance for Private Equity', 'Compliance diligence, post-close integration and portfolio-wide program standardization for private-equity-backed healthcare platforms.', '/privateequity/', 'Private equity healthcare investors')],
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'Where value leaks',
      h2: 'Compliance rarely kills a deal. It routinely delays and discounts one.',
      body: prose([
        `In a buy-and-build healthcare strategy, each add-on arrives with its own compliance posture — usually undocumented, occasionally absent. The issues are seldom catastrophic. They are coding patterns outside peer norms, a risk analysis that predates the current EHR, staff who were screened at hire and never again, business associate agreements nobody can locate. Individually minor; collectively, the sort of thing that produces a diligence finding, a holdback, or a re-trade.`,
        `The pattern compounds because integration bandwidth is scarce. Operating teams focus on revenue cycle, staffing and systems. Compliance integration is deferred, and by the time the platform reaches lender review or exit, there are eleven practices with eleven different programs and no consolidated evidence of anything.`,
        `<h3>Where HCP fits in the deal lifecycle</h3>`,
        `<ul>
          <li><strong>Pre-close.</strong> Compliance and coding risk assessment of the target: program maturity, coding distribution relative to peers, exclusion screening history, open findings and documentation gaps — quantified, with remediation cost estimates.</li>
          <li><strong>Post-close.</strong> The platform's standard program applied on a fixed timeline: policies adopted, roster imported, role-based training assigned, screening enabled, site dashboard configured.</li>
          <li><strong>Hold period.</strong> Recurring coding audits, monthly exclusion screening, annual risk analysis refresh and quarterly compliance reporting to the platform compliance officer and sponsor.</li>
          <li><strong>Exit.</strong> A documented, consistent program across every portfolio company, with evidence that can be produced on a data-room timeline rather than reconstructed.</li>
        </ul>`
      ])
    })
  ],
  diffH2: 'Why sponsors standardize on HCP',
  differentiators: [
    { icon: 'chart', title: 'Risk you can quantify', text: 'Pre-close assessment produces findings with remediation cost estimates, not a qualitative opinion.' },
    { icon: 'refresh', title: 'A repeatable template', text: 'The same program deploys at every add-on on a fixed timeline, so integration stops being bespoke.' },
    { icon: 'building', title: 'Portfolio-level reporting', text: 'Consolidated status across every portfolio company, in a format suited to sponsor and board review.' },
    { icon: 'scale', title: 'Diligence-ready evidence', text: 'Documentation produced continuously survives lender and buyer review without a reconstruction project.' },
    { icon: 'users', title: 'Leadership where it is missing', text: 'Fractional compliance officers cover platforms without the scale to justify a full-time hire.' },
    { icon: 'clipboard', title: 'Coding risk visibility', text: 'Recurring audits surface billing patterns before a payer or a buyer’s quality-of-earnings team finds them.' }
  ],
  compare: null,
  cases: [
    { tag: 'Dermatology platform', title: 'Standardizing across acquisitions', challenge: 'A platform needed consistent compliance posture across add-ons plus a defensible answer for investor diligence.', approach: 'A standard template was applied at each acquisition with exclusion screening, coding audits and portfolio-level rollup reporting.', result: 'Predictable diligence outcomes, faster post-close integration and a program that survived investor and lender review.' },
    { tag: 'Multi-state platform', title: 'Pre-close coding assessment', challenge: 'A target’s E/M distribution sat well above specialty norms, and the sponsor could not quantify the exposure before close.', approach: 'A pre-close coding audit sampled charts across providers and quantified documentation-supported versus billed levels.', result: 'Exposure quantified and reflected in deal terms, with a remediation plan executed in the first 90 days post-close.' },
    { tag: 'Behavioral health platform', title: 'Compliance leadership at scale', challenge: 'A growing platform had no compliance officer and no bandwidth to hire one before its next diligence cycle.', approach: 'A fractional compliance officer took the role across the platform, standing up committee governance and a work plan spanning all sites.', result: 'Documented governance and reporting in place ahead of lender review, with a path to an internal hire later.' }
  ],
  faqs: [
    { q: 'Can you support pre-close diligence?', a: 'Yes. We assess program maturity, coding distribution relative to peers, exclusion screening history, documentation gaps and open findings, and provide remediation cost estimates that can inform deal terms.' },
    { q: 'How fast can a newly acquired practice be integrated?', a: 'Most add-ons reach the platform standard within two to four weeks of close, because the template, training tracks and configuration already exist rather than being designed per deal.' },
    { q: 'What reporting do sponsors receive?', a: 'Portfolio-level status across all companies — training completion, screening currency, risk analysis dates, open corrective actions and audit findings — in a format suited to board and sponsor review.' },
    { q: 'Do you provide a compliance officer?', a: 'Yes. Fractional compliance officers commonly serve platforms lacking the scale for a full-time hire, covering governance, investigations, audit response and sponsor reporting.' },
    { q: 'How does this affect exit readiness?', a: 'Substantially. A consistent, documented program across every portfolio company means diligence requests are answered from existing evidence rather than reconstructed under a data-room timeline.' },
    { q: 'Can you assess coding risk across a portfolio?', a: 'Yes. Recurring audits can be run across portfolio companies with consistent methodology, so distributions are comparable and outliers are visible at the platform level.' }
  ],
  related: [
    { href: '/coding-compliance/', label: 'SENTRY Coding Intelligence', text: 'Portfolio coding risk assessment.' },
    { href: '/fractional-compliance-officer/', label: 'Fractional Compliance Officer', text: 'Compliance leadership for platforms.' },
    { href: '/compliance-solution/corporate-compliance/', label: 'Corporate Compliance', text: 'The governance diligence expects.' },
    { href: '/contact/', label: 'Discuss a portfolio', text: 'Scope diligence or integration support.' }
  ]
});

/* =============== Specialty pages =============== */

const SPECIALTY_PHOTOS = {'orthopedics': 'spec-physical-therapy', 'dermatology': 'spec-dermatology', 'radiology': 'svc-coding', 'ent': 'spec-audiology', 'family-medicine': 'feature-comprehensive', 'audiology': 'spec-audiology', 'behavioral-health': 'spec-behavioral-health', 'medspa': 'spec-medspa', 'pediatrics': 'spec-therapy-2', 'physical-therapy': 'spec-physical-therapy'};

const specialtyData = [
  {
    slug: 'orthopedics', name: 'Orthopedics',
    lead: 'High procedure volume, global periods and imaging in the office make orthopedic coding and safety documentation unusually exposed.',
    risks: [
      'Modifier 25 applied to office visits paired with injections or procedures',
      'Global surgical period billing and appropriate use of modifiers 24, 58, 78 and 79',
      'In-office imaging: supervision requirements and radiation safety documentation',
      'Durable medical equipment supplied in office, including documentation and supplier standards',
      'Sharps and sterilization safety in procedure rooms',
      'Physical therapy provided in office, including supervision and time-based billing'
    ],
    caseTitle: 'Correcting a modifier 25 pattern',
    caseChallenge: 'Modifier 25 appeared on nearly every visit paired with a procedure, a distribution well outside peer norms.',
    caseApproach: 'A targeted coding audit showed the separately identifiable service was often performed but not distinguishable in the note, and education addressed documentation structure.',
    caseResult: 'Modifier use aligned with documented services before a payer review began.'
  },
  {
    slug: 'dermatology', name: 'Dermatology',
    lead: 'Procedure-heavy visits, pathology workflows and cosmetic service lines create a distinctive mix of coding, privacy and safety obligations.',
    risks: [
      'Lesion destruction and excision coding, including size, site and margin documentation',
      'Mohs surgery documentation and stage reporting',
      'Pathology arrangements and the anti-markup and Stark implications of in-office labs',
      'Clinical photography: consent, storage and PHI handling on mobile devices',
      'Cosmetic versus medically necessary service separation and patient financial disclosure',
      'Chemical and laser safety, including hazard communication for peels and solvents'
    ],
    caseTitle: 'Getting clinical photography under control',
    caseChallenge: 'Clinicians photographed lesions on personal phones, with images synced to personal cloud accounts.',
    caseApproach: 'HCP established a clinical photography policy, moved capture onto managed devices, and trained staff on consent and storage requirements.',
    caseResult: 'A significant unaddressed PHI exposure closed, with documented consent workflow.'
  },
  {
    slug: 'radiology', name: 'Radiology & Imaging',
    lead: 'Imaging carries supervision requirements, radiation safety obligations and technologist credentialing that general programs rarely address.',
    risks: [
      'Physician supervision levels for diagnostic tests and documentation of that supervision',
      'Professional and technical component billing and modifier 26 and TC usage',
      'Radiation safety: dosimetry, shielding, equipment testing and state registration',
      'Technologist licensure and certification tracking, including continuing education',
      'MRI safety zoning, screening protocols and ferromagnetic controls',
      'Contrast administration protocols and adverse reaction preparedness'
    ],
    caseTitle: 'Specialty education plus CME in one system',
    caseChallenge: 'Technologists needed specialty-relevant education while clinicians needed accredited credit, delivered through two separate systems.',
    caseApproach: 'The imaging and radiology series was assigned to technologists and CME-eligible courses to clinicians, all within one platform.',
    caseResult: 'One system, one set of records, satisfying both licensure and compliance requirements.'
  },
  {
    slug: 'ent', name: 'ENT / Otolaryngology',
    lead: 'In-office procedures, allergy services, audiology components and scope reprocessing produce a broad compliance surface.',
    risks: [
      'In-office procedure coding including endoscopy, and appropriate bundling',
      'Allergy testing and immunotherapy: antigen preparation, dosing documentation and billing units',
      'Flexible endoscope reprocessing, high-level disinfection and documentation',
      'Audiology services furnished within the practice and hearing aid sales disclosures',
      'Chemical safety for disinfectants and sterilants used in reprocessing',
      'Balance and vestibular testing supervision requirements'
    ],
    caseTitle: 'Documenting scope reprocessing',
    caseChallenge: 'High-level disinfection was performed correctly but with no logs, leaving nothing to demonstrate in an inspection.',
    caseApproach: 'HCP implemented reprocessing logs, chemical exposure documentation and staff competency records within the safety program.',
    caseResult: 'A defensible reprocessing record maintained continuously rather than reconstructed.'
  },
  {
    slug: 'family-medicine', name: 'Family Medicine',
    lead: 'Broad scope, high visit volume and expanding care management services make documentation consistency the central compliance challenge.',
    risks: [
      'Evaluation and Management level selection based on medical decision making or time',
      'Chronic care management, transitional care and remote monitoring documentation and consent',
      'Annual wellness visit element completion and documentation',
      'Vaccine storage, handling and Vaccines for Children program requirements where applicable',
      'In-office laboratory testing and CLIA certificate scope',
      'Incident-to billing requirements and supervision documentation'
    ],
    caseTitle: 'Recovering value lost to undercoding',
    caseChallenge: 'Providers consistently billed lower-level visits than their documentation supported, out of caution after a prior audit.',
    caseApproach: 'An audit quantified documented-but-unbilled complexity by provider and trained clinicians on medical decision making criteria.',
    caseResult: 'Coding accuracy improved in both directions, supported by documentation rather than habit.'
  },
  {
    slug: 'audiology', name: 'Audiology',
    lead: 'Hearing aid sales, device-related privacy and supervision requirements create obligations that differ from a standard medical practice.',
    risks: [
      'Hearing aid sales disclosures, return periods and applicable state requirements',
      'Diagnostic testing supervision and medical necessity documentation',
      'Patient data on hearing devices and connected fitting software',
      'Bundled versus unbundled pricing disclosure practices',
      'Audiologist and assistant licensure tracking by state',
      'Infection control for earmold impressions and probe handling'
    ],
    caseTitle: 'Separating medical and retail workflows',
    caseChallenge: 'Diagnostic services and hearing aid retail ran through one workflow with inconsistent financial disclosure.',
    caseApproach: 'Policies and documentation were separated by service type, with disclosure requirements and staff training aligned to each.',
    caseResult: 'Clear separation of medical and retail obligations, with documented patient disclosure.'
  },
  {
    slug: 'behavioral-health', name: 'Behavioral Health',
    lead: 'Heightened confidentiality rules, time-based billing and supervision structures make behavioral health among the most compliance-sensitive settings.',
    risks: [
      '42 CFR Part 2 requirements where substance use disorder records are involved',
      'State confidentiality laws that exceed HIPAA for mental health records',
      'Time-based service documentation including start, stop and total duration',
      'Supervision of associate-level clinicians and what each licensure tier may bill',
      'Telehealth privacy, consent and cross-state licensure considerations',
      'Duty-to-warn and mandatory reporting obligations that vary by state'
    ],
    caseTitle: 'Cleaning up time-based documentation',
    caseChallenge: 'Time-based therapy codes were billed with notes that did not consistently record start, stop or total duration.',
    caseApproach: 'Templates were revised, staff trained on requirements, and a follow-up audit measured compliance.',
    caseResult: 'Documentation deficiencies largely eliminated within two audit cycles.'
  },
  {
    slug: 'medspa', name: 'MedSpa & Aesthetics',
    lead: 'Operating under a medical director with largely cash-pay services creates a compliance profile most vendors are not built to address.',
    risks: [
      'Scope of practice and delegation rules for injectables and energy-based devices, which vary sharply by state',
      'Medical director oversight requirements and documentation of supervision',
      'Good-faith examination requirements before treatment',
      'Laser and light-based device safety, including eyewear, controlled access and operator training',
      'Chemical hazard communication for peels, solvents and disinfectants',
      'Before-and-after photography consent, storage and marketing use'
    ],
    caseTitle: 'Building a program from zero',
    caseChallenge: 'A growing aesthetics practice had no formal HIPAA or OSHA program and was opening a second location.',
    caseApproach: 'HCP established policies scoped to the services performed, role-based training, an exposure control plan for injectables and laser procedures, and vendor BAAs.',
    caseResult: 'A defensible program in place before the second location opened, with a repeatable template for expansion.'
  },
  {
    slug: 'pediatrics', name: 'Pediatrics',
    lead: 'Minors, custody complexity, vaccine programs and school communication produce privacy questions general HIPAA training does not answer.',
    risks: [
      'Parental access to minor records, and the state-law exceptions where minors consent to their own care',
      'Custody arrangements and who may receive information or authorize treatment',
      'Vaccines for Children program storage, handling, temperature logs and eligibility screening',
      'School, daycare and sports physical form disclosures and authorization',
      'Developmental screening and behavioral health documentation for minors',
      'Mandatory reporting obligations and documentation of reports made'
    ],
    caseTitle: 'Answering custody questions consistently',
    caseChallenge: 'Front desk staff handled records requests from separated parents inconsistently, occasionally disclosing where they should not have.',
    caseApproach: 'A documented decision workflow was built around state law and custody documentation, with live training on the real scenarios staff encountered.',
    caseResult: 'Consistent, documented handling of a recurring and legally sensitive situation.'
  },
  {
    slug: 'physical-therapy', name: 'Physical Therapy',
    lead: 'Time-based units, supervision rules and plan-of-care requirements make PT documentation a frequent audit target.',
    risks: [
      'Time-based billing units and correct application of the eight-minute rule',
      'Supervision requirements for assistants and aides, which vary by payer and state',
      'Plan of care establishment, physician certification and recertification timing',
      'Therapy threshold documentation and medical necessity justification',
      'Group versus individual therapy documentation and billing distinction',
      'Equipment safety, modality use documentation and facility inspections'
    ],
    caseTitle: 'Fixing unit calculation errors',
    caseChallenge: 'Time-based unit calculations were inconsistent across therapists, producing both over and under-billing.',
    caseApproach: 'An audit measured unit accuracy by therapist, followed by targeted education on the eight-minute rule and documentation of treatment time.',
    caseResult: 'Unit accuracy improved substantially, with the remediation documented as corrective action.'
  }
];

// Their canonical specialty URLs are top-level, not nested under /specialties/.
const SPECIALTY_URLS = {'dermatology': '/dermatology-compliance-program/', 'behavioral-health': '/behavioral-health-compliance/', 'audiology': '/audiology-compliance-program/', 'physical-therapy': '/physical-therapy-compliance-program/', 'medspa': '/medspa/'};
const specialtyUrl = (slug) => SPECIALTY_URLS[slug] || `/specialties/${slug}/`;

const specialtyPages = specialtyData.map((s) => buildPage({
  path: specialtyUrl(s.slug),
  group: GSP,
  llmsLabel: `${s.name} compliance`,
  title: `${s.name} Compliance Program | HCP`,
  description: `HIPAA, OSHA and coding compliance built around ${s.name.toLowerCase()} workflows, with assigned advisors and role-based staff training.`.slice(0, 155),
  breadcrumbs: [crumbSpec, { label: s.name, href: specialtyUrl(s.slug) }],
  eyebrow: `${s.name} compliance`,
  h1: `Compliance built around how ${s.name.toLowerCase()} actually works`,
  lead: s.lead,
  bullets: [
    `Policies written for ${s.name.toLowerCase()} workflows, not a generic clinic`,
    'Role-based training covering the risks specific to your setting',
    'Coding audits by certified coders experienced in your specialty',
    'Assigned advisors who understand your service mix'
  ],
  heroStat: 'HIPAA, OSHA, corporate compliance and training in one platform',
  heroPhoto: { src: `/assets/img/site/${SPECIALTY_PHOTOS[s.slug] || 'feature-comprehensive'}.webp`, title: `${s.name} compliance`, width: 900, height: 600 },
  extraSchema: [svc(`${s.name} Compliance Program`, `Healthcare compliance program for ${s.name.toLowerCase()} practices, covering HIPAA, OSHA, corporate compliance, coding audits and staff training.`, specialtyUrl(s.slug), `${s.name} practices`)],
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'Specialty risk areas',
      h2: `Where ${s.name.toLowerCase()} programs most often fall short`,
      lead: 'Generic compliance content misses these because they only arise in your setting.',
      body: prose([
        `A compliance program assembled from general-purpose templates will address the obligations every healthcare organization shares — privacy policies, annual training, workplace safety basics. What it will not address is the specific set of risks that arise from your service mix, your procedures and your billing patterns. Those are where findings concentrate.`,
        `<h3>Risk areas we build into a ${s.name.toLowerCase()} program</h3>`,
        `<ul>${s.risks.map((r) => `<li>${r}</li>`).join('')}</ul>`,
        `Each of these translates into something concrete in your program: a policy provision, a training module assigned to the right roles, a documentation standard, an inspection checklist item or a coding audit focus area. Your advisor builds them in during implementation and revisits them as your service mix changes.`
      ])
    }),
    section({
      eyebrow: 'What you get',
      h2: `Your ${s.name.toLowerCase()} compliance program`,
      body: `<div class="split"><div class="split-copy">
        <p>The same four programs every HCP client runs, configured for your specialty and supported by advisors who know it.</p>
        ${checklist([
          `HIPAA Privacy and Security policies customized for ${s.name.toLowerCase()}`,
          'Documented Security Risk Analysis with a tracked remediation plan',
          'OSHA exposure control and Hazard Communication programs for your procedures',
          'Facility safety inspections scoped to your equipment and materials',
          'Role-based training including specialty-relevant modules',
          'Business Associate Agreement inventory and renewal tracking',
          'Corporate compliance program with FWA training and exclusion screening',
          'Coding audits by certified coders experienced in your specialty',
          'Incident logging, breach assessment and documented investigation workflow',
          'Included audit and inspection support from your assigned advisor team'
        ], 'checklist-2')}
      </div></div>`
    })
  ],
  diffH2: `Why ${s.name.toLowerCase()} practices choose HCP`,
  cases: [
    { tag: s.name, title: s.caseTitle, challenge: s.caseChallenge, approach: s.caseApproach, result: s.caseResult },
    { tag: 'Independent practice', title: 'An OCR inquiry answered on time', challenge: 'A patient complaint triggered a federal data request with a 30-day deadline at a practice with no compliance staff.', approach: 'The advisor team assembled policies with revision history, per-person training records, the current risk analysis and the remediation plan, then helped draft the response.', result: 'A complete response inside the deadline, with the file closed and no corrective action plan.' },
    { tag: 'Growing group', title: 'Standardizing across locations', challenge: 'Expansion left each site running its own documentation and training, with no shared completion view.', approach: 'One customized manual was built covering all sites, rosters were merged and training tracks standardized by role.', result: 'A single completion report for leadership, and new sites onboarded in days.' }
  ],
  faqs: [
    { q: `Do you have experience with ${s.name.toLowerCase()} specifically?`, a: `Yes. Your program is built around ${s.name.toLowerCase()} workflows and risk areas, and coding audits are performed by certified coders experienced in the specialty rather than generalists working from a rulebook.` },
    { q: 'How is this different from generic compliance software?', a: `Generic platforms cover obligations every organization shares and stop there. The findings that actually arise in ${s.name.toLowerCase()} come from your specific procedures, documentation patterns and service mix, and those are built into your policies, training and audit focus.` },
    { q: 'How long does implementation take?', a: 'Most practices are live in two to three weeks. Your advisor customizes policies, loads your roster and maps roles to training tracks; your team’s involvement is measured in hours.' },
    { q: 'Does this cover OSHA as well as HIPAA?', a: 'Yes, along with corporate compliance and workforce training. All four run from one dashboard with a single staff login, and the OSHA program is scoped to the equipment, chemicals and procedures your specialty actually uses.' },
    { q: 'What if we are audited?', a: 'Your advisor team works the audit with you: assembling the documentation requested, preparing your written response and walking through the process. Audit support is included in your subscription.' },
    { q: 'Can you audit our coding?', a: 'Yes. SENTRY coding audits review documentation against billed claims with provider-level findings and corrective education assigned through the platform, which also satisfies the monitoring and corrective action elements of your compliance program.' }
  ],
  related: [
    { href: '/specialties/', label: 'All specialties', text: 'Browse every specialty program.' },
    { href: '/coding-compliance/', label: 'SENTRY Coding Intelligence', text: 'Specialty coding audits.' },
    { href: '/compliance-solution/', label: 'SHIELD Compliance Solution', text: 'The full platform overview.' },
    { href: '/compliance-assessment/', label: 'Free risk assessment', text: 'See where your program stands.' }
  ]
}));

/* Specialties hub */
const specialtiesHub = buildPage({
  path: '/specialties/',
  group: GSP,
  llmsLabel: 'All specialties',
  title: 'Compliance by Medical Specialty | HCP',
  description: 'Compliance programs built around the workflows, procedures and coding patterns specific to your specialty. Browse all specialties we support.',
  breadcrumbs: [crumbSpec],
  eyebrow: 'Compliance by specialty',
  h1: 'Your specialty determines your risk profile',
  lead: 'Two practices of the same size can carry entirely different compliance exposure. What you do, what you bill and what you handle decides which requirements matter most.',
  bullets: [
    'Policies and training built around your procedures and service mix',
    'Coding audits by certified coders experienced in your specialty',
    'Safety programs scoped to your equipment, chemicals and materials',
    'Advisors who have worked with practices like yours'
  ],
  heroStat: 'Ten specialty programs, plus custom builds for anything not listed',
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'Choose your specialty',
      h2: 'Specialty compliance programs',
      lead: 'Each program covers HIPAA, OSHA, corporate compliance and training, configured for that setting.',
      body: `<ul class="dir">${specialtyData.map((s) =>
        `<li><a href="${specialtyUrl(s.slug)}"><strong>${esc(s.name)}</strong><span>${esc(s.lead.slice(0, 96))}…</span></a></li>`).join('')}</ul>
        <p class="center mt-2">Not listed? We build custom programs for any specialty. <a href="/contact/">Tell us what you do</a>.</p>`
    }),
    section({
      eyebrow: 'Why it matters',
      h2: 'Generic programs fail in specific places',
      body: prose([
        `Every healthcare organization shares a baseline: privacy policies, workforce training, workplace safety, business associate agreements. If that baseline were the whole obligation, generic compliance software would be adequate, and it largely is for the baseline.`,
        `The problem is that findings do not concentrate in the baseline. They concentrate in the specifics. A dermatology practice photographs lesions on mobile devices. An ENT practice reprocesses flexible endoscopes. A behavioral health provider holds records subject to confidentiality rules stricter than HIPAA. A medspa delegates injectable procedures under state rules that vary dramatically. A pediatric practice fields records requests from separated parents. None of these appear in a general-purpose policy manual, and each is exactly the kind of thing that produces a finding or an incident.`,
        `Specialty configuration is not cosmetic. It changes which policies you carry, which training each role receives, what your safety inspections look for, and where coding audits focus. Your advisor builds those specifics in during implementation and revisits them as your services change.`
      ])
    })
  ],
  diffH2: 'Why specialty practices choose HCP',
  cases: [
    { tag: 'Dermatology', title: 'Clinical photography brought under policy', challenge: 'Clinicians photographed lesions on personal phones, syncing images to personal cloud accounts.', approach: 'A clinical photography policy was established, capture moved to managed devices, and staff trained on consent and storage.', result: 'A significant unaddressed PHI exposure closed, with a documented consent workflow.' },
    { tag: 'Orthopedics', title: 'A coding pattern corrected early', challenge: 'Modifier 25 usage sat well outside peer norms, a common trigger for payer review.', approach: 'A targeted audit identified the documentation gap and education addressed note structure.', result: 'Usage aligned with documented services before any payer review began.' },
    { tag: 'Behavioral health', title: 'Documentation that survives audit', challenge: 'Time-based codes were billed on notes that did not consistently record duration.', approach: 'Templates were revised, staff trained, and a follow-up audit measured whether the pattern moved.', result: 'Deficiencies largely eliminated within two cycles, with remediation documented.' }
  ],
  faqs: [
    { q: 'What if my specialty is not listed?', a: 'We build custom programs for any specialty. The listed programs are simply the ones we support most frequently; the implementation process is identical, starting with a discovery session about your procedures, service mix and billing patterns.' },
    { q: 'Does specialty configuration cost extra?', a: 'No. Customization to your specialty, size and state is part of standard implementation. Pricing is driven by headcount and which programs you license, not by specialty complexity.' },
    { q: 'We are multi-specialty. How does that work?', a: 'Your program covers the union of what you do. Policies address every service line, and training is assigned by role and department so each group receives content relevant to their work.' },
    { q: 'Do coding auditors know my specialty?', a: 'Audits are assigned to certified coders with experience in the relevant specialty, because findings depend on understanding how those procedures are documented and billed in practice.' },
    { q: 'How often should specialty risk areas be revisited?', a: 'At minimum annually, and whenever your service mix changes — adding a procedure, a device, a location or a service line typically introduces requirements your prior program did not address.' },
    { q: 'Can you help if we are adding a new service line?', a: 'Yes. Your advisor reviews the compliance implications before launch: policy changes, training additions, safety requirements, coding considerations and any state-specific rules that apply.' }
  ],
  related: [
    { href: '/medical-practices/', label: 'For medical practices', text: 'Programs for independent and group practices.' },
    { href: '/coding-compliance/', label: 'SENTRY Coding Intelligence', text: 'Specialty coding audits.' },
    { href: '/compliance-solution/', label: 'SHIELD Compliance Solution', text: 'The full platform overview.' },
    { href: '/contact/', label: 'Talk to an advisor', text: 'Discuss a custom specialty build.' }
  ]
});

export default [practices, hospitals, ba, billing, pe, specialtiesHub, ...specialtyPages];
