import { buildPage, section, prose, cards, checklist, steps, quotes } from '../shared.mjs';
import { abs } from '../layout.mjs';

const G = 'Compliance solutions';
const GS = 'Expert services';
const crumbSolutions = { label: 'Solutions', href: '/compliance-solution/' };

const serviceSchema = (name, desc, url) => ({
  '@type': 'Service',
  '@id': abs(url) + '#service',
  name,
  description: desc,
  url: abs(url),
  serviceType: 'Healthcare compliance',
  provider: { '@id': abs('/#organization') },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'Healthcare organizations and business associates' }
});

/* ================= SHIELD platform overview ================= */
const shield = buildPage({
  path: '/compliance-solution/',
  group: G,
  llmsLabel: 'SHIELD Compliance Solution',
  title: 'SHIELD Compliance Solution | Healthcare Compliance Pros',
  description: 'One platform for HIPAA, OSHA and corporate compliance, with assigned advisors, 130+ training courses and included audit support.',
  breadcrumbs: [{ label: 'Solutions', href: '/compliance-solution/' }],
  eyebrow: 'The platform',
  h1: 'SHIELD: your entire compliance program in one place',
  lead: 'SHIELD brings HIPAA, OSHA, corporate compliance and workforce training into a single dashboard, maintained by advisors who know your organization by name.',
  bullets: [
    'One staff login covering every compliance obligation you carry',
    'Documentation that updates as regulations change',
    'Evidence generated continuously, not reconstructed under deadline',
    'Included audit support from the team that built your program'
  ],
  heroStat: 'Implementation typically completes in two to three weeks',
  heroPhoto: { src: '/assets/img/site/feature-map.webp', alt: 'Two healthcare professionals reviewing compliance documentation', title: 'SHIELD compliance platform', width: 1400, height: 812 },
  extraSchema: [serviceSchema('SHIELD Compliance Solution', 'Integrated HIPAA, OSHA and corporate compliance management platform with assigned compliance advisors.', '/compliance-solution/')],
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'What SHIELD replaces',
      h2: 'Four programs that usually live in four different places',
      lead: 'Most organizations assemble compliance from a binder, a training vendor, a spreadsheet and somebody’s memory. SHIELD replaces all four.',
      body: prose([
        `A healthcare compliance program has a fairly small number of moving parts, but they are interdependent in ways that make fragmentation expensive. Your policies define what your training must cover. Your training records prove your policies were communicated. Your risk analysis determines which safeguards you are obligated to implement, and your incident log demonstrates whether those safeguards are working. Split these across separate systems and the connections break silently.`,
        `SHIELD holds them together. When a regulation changes, your advisor revises the affected policy, the platform pushes an acknowledgement request to the workforce members it applies to, and the completion record updates on your dashboard. That chain — change, communicate, acknowledge, evidence — is the part that fails in nearly every program we are brought in to repair.`,
        `<h3>What sits inside the platform</h3>`
      ]) + `<div class="prose"></div>` + cards([
        { icon: 'lock', title: 'HIPAA Privacy & Security', text: 'Customized policies, workforce training, Security Risk Analysis, BAA tracking, incident and breach management.', href: '/compliance-solution/hipaa/', linkLabel: 'HIPAA details' },
        { icon: 'alert', title: 'OSHA workplace safety', text: 'Exposure control planning, Hazard Communication, virtual SDS binder, inspections and safety training.', href: '/compliance-solution/osha/', linkLabel: 'OSHA details' },
        { icon: 'scale', title: 'Corporate compliance', text: 'The seven elements, FWA training, anonymous hotline, exclusion monitoring and committee records.', href: '/compliance-solution/corporate-compliance/', linkLabel: 'Corporate details' },
        { icon: 'grad', title: 'Learning management', text: '130+ courses assigned by role, with reminders, certificates and CME credit on select titles.', href: '/compliance-solution/lms/', linkLabel: 'LMS details' },
        { icon: 'chart', title: 'Reporting & dashboards', text: 'Completion status by person, department and location, exportable for boards, payers and investigators.', href: '/solutions/the-hcp-difference/', linkLabel: 'The HCP difference' },
        { icon: 'clipboard', title: 'Document library', text: 'Forms, notices, logs and acknowledgement records stored with revision history and date stamps.', href: '/tips-faqs/', linkLabel: 'Compliance FAQ' }
      ])
    }),
    section({
      eyebrow: 'Implementation',
      h2: 'What the first month looks like',
      lead: 'Your advisor runs the build. Your team’s involvement is measured in hours, not weeks.',
      body: steps([
        { title: 'Discovery', text: 'A structured review of your current documentation, staffing, locations, systems and any open findings or past incidents.' },
        { title: 'Build', text: 'We customize your policy manual, configure your roster and locations, and map every role to the correct training track.' },
        { title: 'Launch', text: 'Staff receive assignments with automated reminders. Your compliance officer gets a live walkthrough of the dashboard and reports.' },
        { title: 'Operate', text: 'Quarterly check-ins, regulatory updates pushed into your program, and year-round advisor access for questions and incidents.' }
      ])
    })
  ],
  cases: [
    { tag: 'Multi-site group', title: 'Six locations, one program', challenge: 'An orthopedic group had grown by acquisition to six sites with six inherited policy manuals and no shared completion view.', approach: 'SHIELD consolidated documentation into one customized manual, merged rosters, and standardized training tracks by role.', result: 'A single board-level completion report, and new-practice onboarding cut from months to days.' },
    { tag: 'Independent practice', title: 'From binder to evidence', challenge: 'A four-provider practice had thorough written policies but no record of who had read them or completed training.', approach: 'Policies were migrated into SHIELD with acknowledgement requests pushed to every workforce member and training assigned by role.', result: 'Complete, date-stamped evidence within one quarter, produced on demand rather than reconstructed.' },
    { tag: 'Health system department', title: 'Unifying three vendors', challenge: 'A hospital outpatient division ran HIPAA training, OSHA safety and FWA modules through three unrelated vendors.', approach: 'All three programs moved into SHIELD under a single staff login with one consolidated dashboard.', result: 'Administrative time on compliance reporting dropped substantially, and staff stopped missing assignments across systems.' }
  ],
  faqs: [
    { q: 'Do we have to adopt all four programs?', a: 'No. Many clients start with HIPAA and add OSHA or corporate compliance later. The programs are designed to work together, but they are licensed separately and you can phase adoption over time.' },
    { q: 'Will SHIELD work across multiple locations?', a: 'Yes. Locations are first-class in the platform: policies can vary where state law requires, staff are assigned to sites, and reporting rolls up by site, department or the whole organization.' },
    { q: 'How much staff time does implementation take?', a: 'Expect a two-hour discovery session with your compliance officer or administrator, a roster export, and a one-hour dashboard walkthrough. Your advisor does the policy customization and configuration.' },
    { q: 'What happens when a regulation changes?', a: 'Your advisor revises affected policies and courses, and the platform pushes acknowledgement requests to the workforce members the change applies to. You do not have to monitor the Federal Register yourself.' },
    { q: 'Can we export our data if we leave?', a: 'Yes. Your policies, training records, certificates and logs are your records. We provide a full export on request, in standard formats.' },
    { q: 'Is there a long-term contract?', a: 'Plans are annual, and your advisor team, policy customization, training library and audit support are included for the term. There is no separate charge to call your advisor with a question.' }
  ],
  related: [
    { href: '/compliance-solution/hipaa/', label: 'HIPAA Compliance', text: 'Privacy, Security and breach management.' },
    { href: '/compliance-solution/osha/', label: 'OSHA Compliance', text: 'Exposure control and workplace safety.' },
    { href: '/compliance-solution/corporate-compliance/', label: 'Corporate Compliance', text: 'The seven elements, documented.' },
    { href: '/compliance-solution/lms/', label: 'Learning Management System', text: '130+ courses, assigned by role.' }
  ]
});

/* ================= HIPAA ================= */
const hipaa = buildPage({
  path: '/compliance-solution/hipaa/',
  group: G,
  llmsLabel: 'HIPAA Compliance',
  title: 'HIPAA Compliance Software & Support | HCP',
  description: 'Customized HIPAA policies, workforce training, Security Risk Analysis, BAA tracking and breach response, backed by assigned advisors.',
  breadcrumbs: [crumbSolutions, { label: 'HIPAA Compliance', href: '/compliance-solution/hipaa/' }],
  eyebrow: 'HIPAA compliance',
  h1: 'HIPAA compliance you can actually evidence',
  lead: 'Policies customized to your practice, training assigned by role, a documented Security Risk Analysis, and advisors who work your incidents with you.',
  bullets: [
    'Privacy Rule and Security Rule policies written for your organization',
    'Security Risk Analysis with a tracked risk management plan',
    'Business Associate Agreement inventory and renewal tracking',
    'Breach risk assessment and notification guidance when it counts'
  ],
  heroStat: 'OCR inquiry support is included in every plan',
  heroPhoto: { src: '/assets/img/site/prog-hipaa.webp', alt: 'Clinician interacting with a HIPAA data security interface', title: 'HIPAA compliance program', width: 900, height: 601 },
  extraSchema: [serviceSchema('HIPAA Compliance Program', 'HIPAA Privacy and Security Rule compliance software, training, risk analysis and advisory support for covered entities and business associates.', '/compliance-solution/hipaa/')],
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'What the rule requires',
      h2: 'The four obligations that drive almost every HIPAA finding',
      lead: 'HIPAA is long, but enforcement concentrates in a small number of places. These are the ones that generate corrective action plans.',
      body: prose([
        `<h3>1. A current, documented Security Risk Analysis</h3>`,
        `<p>The Security Rule requires an accurate and thorough assessment of the potential risks and vulnerabilities to the confidentiality, integrity and availability of electronic protected health information. This is the single most commonly cited deficiency in federal enforcement actions. A risk analysis is not a checklist, and it is not a one-time event — it has to reflect your current systems, and it has to be paired with a risk management plan showing what you did about what you found.</p>`,
        `<h3>2. Policies that match how you actually operate</h3>`,
        `<p>Generic templates fail because they describe an organization that does not exist. If your policy says PHI is never emailed and your front desk emails referrals daily, the policy is worse than nothing — it documents a known, unaddressed deviation. HCP customizes policies to your specialty, your systems, your workflows and your state, so the document describes your real practice.</p>`,
        `<h3>3. Workforce training, with proof</h3>`,
        `<p>Every workforce member must be trained on your policies, and you must be able to demonstrate it. "Demonstrate" means per-individual, per-topic, date-stamped records — not a sign-in sheet from a staff meeting three years ago. Training must also be repeated when policies materially change and delivered to new hires within a reasonable period.</p>`,
        `<h3>4. Business associate agreements for every vendor touching PHI</h3>`,
        `<p>Your billing company, your IT provider, your shredding service, your cloud EHR, your transcription vendor, your answering service. Each requires an executed BAA with the required provisions, and you are expected to know which vendors are in scope. Most practices we assess discover at least two vendors with access to PHI and no agreement on file.</p>`
      ])
    }),
    section({
      eyebrow: 'What is included',
      h2: 'Your HIPAA program, component by component',
      body: `<div class="split">
        <div class="split-copy">
          <h2 class="visually-hidden">Included components</h2>
          <p>Every HIPAA plan includes the documentation, training and support required to build and maintain a defensible program — plus the advisor team to operate it with you.</p>
          ${checklist([
            'Customized Privacy Rule policies and procedures',
            'Customized Security Rule policies, including administrative, physical and technical safeguards',
            'Notice of Privacy Practices tailored to your organization',
            'Annual HIPAA training plus role-based modules and new-hire assignments',
            'Guided Security Risk Analysis with documented findings',
            'Risk management plan with owners, target dates and status tracking',
            'Business Associate Agreement templates, inventory and renewal reminders',
            'Patient rights workflows: access, amendment, accounting of disclosures, restrictions',
            'Incident logging, investigation workflow and four-factor breach risk assessment',
            'Breach notification guidance including timelines and required content',
            'Sanction policy and workforce disciplinary documentation',
            'OCR inquiry and investigation support from your advisor team'
          ], 'checklist-2')}
        </div>
      </div>`
    }),
    section({
      cls: 'sec-alt',
      eyebrow: 'When something goes wrong',
      h2: 'Incident response, walked through with you',
      lead: 'A lost laptop, a misdirected fax, a phishing click, an employee looking at a record they should not have opened.',
      body: prose([
        `Most HIPAA incidents are not dramatic. They are ordinary human errors, and the regulatory question is always the same: was protected health information compromised, and does that trigger notification? Getting that determination right matters, because over-reporting damages your organization unnecessarily and under-reporting is itself a violation.`,
        `HCP gives you a documented workflow and a person to walk it with. Your advisor helps you run the four-factor risk assessment the Breach Notification Rule requires — the nature and extent of the PHI involved, who received or accessed it, whether it was actually acquired or viewed, and the extent to which risk has been mitigated. The analysis is recorded in your incident log with the reasoning, so that if the determination is questioned later, your basis for it is documented contemporaneously.`,
        `If notification is required, your advisor helps you meet the deadlines and content requirements: individual notice without unreasonable delay and no later than 60 days from discovery, media notice where a breach affects 500 or more residents of a state or jurisdiction, and notice to the Secretary of Health and Human Services on the applicable schedule.`
      ])
    })
  ],
  diffH2: 'Why HIPAA programs built with HCP hold up',
  cases: [
    { tag: 'Family medicine', title: 'An OCR inquiry closed with no corrective action', challenge: 'A patient complaint triggered an OCR data request with a 30-day deadline at a four-provider practice with no dedicated compliance staff.', approach: 'The advisor team assembled the policy manual with revision history, per-employee training records, the current risk analysis and the risk management plan, then helped draft the written response.', result: 'A complete response inside the deadline, and the file closed with no corrective action plan and no penalty.' },
    { tag: 'Specialty practice', title: 'Finding the BAAs nobody knew were missing', challenge: 'A gastroenterology group assumed its vendor agreements were complete, having never inventoried which vendors could access PHI.', approach: 'HCP ran a vendor inventory against systems and workflows, identified three vendors with PHI access and no executed agreement, and provided compliant templates.', result: 'All gaps closed within six weeks, with renewal reminders preventing recurrence.' },
    { tag: 'Dental group', title: 'A stolen laptop handled correctly', challenge: 'An unencrypted laptop was taken from a staff member’s vehicle, and the practice did not know whether notification was required.', approach: 'The advisor ran the four-factor breach risk assessment with the practice, documented the analysis, and established what data was actually resident on the device.', result: 'A documented, defensible determination with notification handled on the required timeline and the encryption gap remediated organization-wide.' }
  ],
  faqs: [
    { q: 'How often do we need a Security Risk Analysis?', a: 'At minimum annually, and again whenever something material changes — a new EHR, a new location, a merger, a significant system change or a security incident. Citing a six-year-old analysis is one of the most common findings in federal enforcement actions.' },
    { q: 'Does HIPAA training have to be annual?', a: 'The Privacy Rule requires training for each new workforce member within a reasonable period and again when policies materially change. The Security Rule requires ongoing security awareness. Annual training is the widely accepted standard, and it is what most auditors expect to see documented.' },
    { q: 'We are a business associate, not a provider. Does this apply to us?', a: 'Yes. Business associates are directly liable for Security Rule compliance and for the Breach Notification Rule, and are subject to the same enforcement. HCP builds business associate programs specifically, including subcontractor BAA management.' },
    { q: 'Is a template policy manual good enough?', a: 'Rarely. A template that does not describe your actual workflows creates a documented gap between stated policy and real practice, which is worse in an investigation than an honest, accurate policy. Customization is the point.' },
    { q: 'What counts as a reportable breach?', a: 'An impermissible use or disclosure of unsecured PHI is presumed to be a breach unless you can demonstrate a low probability that the information was compromised, based on a documented four-factor risk assessment. Your advisor runs that analysis with you and records the reasoning.' },
    { q: 'Do we need encryption?', a: 'Encryption is an addressable implementation specification, not optional in the casual sense. If you determine it is not reasonable and appropriate, you must document why and implement an equivalent alternative. In practice, encrypting laptops and portable media is the single highest-value safeguard most practices can adopt.' },
    { q: 'How fast can you help if we have an incident today?', a: 'Call your advisor team directly. Incident and breach support is included in your subscription, and response is measured in hours, not a ticket queue.' }
  ],
  related: [
    { href: '/compliance-solution/osha/', label: 'OSHA Compliance', text: 'Workplace safety for clinical settings.' },
    { href: '/business-associates/', label: 'For business associates', text: 'Programs built for vendors handling PHI.' },
    { href: '/compliance-assessment/', label: 'Free risk assessment', text: 'See where your HIPAA program stands.' },
    { href: '/tips-faqs/', label: 'Compliance tips & FAQ', text: 'Plain answers to common questions.' }
  ]
});

/* ================= OSHA ================= */
const osha = buildPage({
  path: '/compliance-solution/osha/',
  group: G,
  llmsLabel: 'OSHA Compliance',
  title: 'OSHA Compliance for Healthcare | HCP',
  description: 'Bloodborne Pathogens exposure control, Hazard Communication, virtual SDS binder, safety inspections and training for clinical settings.',
  breadcrumbs: [crumbSolutions, { label: 'OSHA Compliance', href: '/compliance-solution/osha/' }],
  eyebrow: 'OSHA compliance',
  h1: 'OSHA compliance built for clinical environments',
  lead: 'Exposure control, hazard communication and safety training designed around sharps, chemicals and infectious material — not generic industrial templates.',
  bullets: [
    'Bloodborne Pathogens exposure control plan, reviewed annually',
    'Hazard Communication program with a searchable virtual SDS binder',
    'Facility safety inspections with checklists and photo documentation',
    'Inspection response support from your advisor team'
  ],
  heroStat: 'Written programs, training records and logs in one place',
  heroPhoto: { src: '/assets/img/site/prog-osha.webp', alt: 'Clinical staff member in surgical gown, mask and gloves', title: 'OSHA compliance program', width: 900, height: 601 },
  extraSchema: [serviceSchema('OSHA Compliance Program', 'OSHA workplace safety compliance for healthcare, including Bloodborne Pathogens exposure control, Hazard Communication, SDS management, inspections and training.', '/compliance-solution/osha/')],
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'Why healthcare is different',
      h2: 'Your OSHA exposure is not the same as an office’s',
      lead: 'Clinical settings carry hazards that general workplace safety programs were never written to address.',
      body: prose([
        `A medical practice handles contaminated sharps, blood and other potentially infectious materials, disinfectants and sterilants, compressed gases, and in many specialties lasers or radiologic equipment. Staff move quickly, often in tight treatment rooms, with patients present. That combination produces a specific set of regulatory obligations, and a generic safety manual downloaded from a general-business source will not satisfy them.`,
        `<h3>The standards that apply most often</h3>`,
        `<ul>
          <li><strong>Bloodborne Pathogens (29 CFR 1910.1030)</strong> — a written exposure control plan reviewed and updated at least annually, engineering and work practice controls, safer sharps evaluation with frontline employee input, hepatitis B vaccination offered to at-risk employees, post-exposure evaluation and follow-up, a sharps injury log, and annual training.</li>
          <li><strong>Hazard Communication (29 CFR 1910.1200)</strong> — a written program, a chemical inventory, safety data sheets readily accessible to employees during every shift, proper labeling of secondary containers, and training on the hazards present.</li>
          <li><strong>Personal Protective Equipment (29 CFR 1910.132)</strong> — hazard assessment, provision of appropriate PPE at no cost to the employee, and training on selection, use and disposal.</li>
          <li><strong>Emergency Action and Fire Prevention</strong> — written plans, exit routes kept clear, extinguisher access and staff training.</li>
          <li><strong>Injury and illness recordkeeping</strong> — OSHA 300, 300A and 301 forms where required, with the annual summary posted February through April.</li>
        </ul>`,
        `Each of these produces documentation an inspector can ask to see on arrival. Citations in healthcare settings are most commonly written for missing or stale written programs, inaccessible safety data sheets, incomplete training records and missing sharps injury logs — administrative failures rather than dramatic unsafe conditions.`
      ])
    }),
    section({
      eyebrow: 'What is included',
      h2: 'Your OSHA program, component by component',
      body: `<div class="split"><div class="split-copy">
        <p>HCP builds and maintains the written programs, delivers the training, and gives you the recurring inspection tooling that keeps records current between visits.</p>
        ${checklist([
          'Written Bloodborne Pathogens exposure control plan, customized and reviewed annually',
          'Safer sharps evaluation documentation with employee input records',
          'Hepatitis B vaccination offer and declination tracking',
          'Post-exposure evaluation procedure and sharps injury log',
          'Written Hazard Communication program and chemical inventory',
          'Virtual SDS binder, searchable and accessible from any workstation',
          'Secondary container labeling guidance and supplies list',
          'PPE hazard assessment and written selection guidance',
          'Emergency action and fire prevention plans',
          'Recurring facility safety inspection checklists with photo documentation',
          'Annual and new-hire safety training assigned automatically by role',
          'OSHA recordkeeping guidance and inspection response support'
        ], 'checklist-2')}
      </div></div>`
    })
  ],
  diffH2: 'Why OSHA programs built with HCP hold up',
  cases: [
    { tag: 'Hospital outpatient', title: 'Abating a citation inside the response window', challenge: 'An outpatient department was cited for an incomplete exposure control plan and safety data sheets stored in a locked office.', approach: 'HCP rebuilt the exposure control plan, moved SDS into a virtual binder reachable from every workstation, and implemented recurring inspection checklists.', result: 'Citation abated within the response window, with inspection-ready records now generated continuously.' },
    { tag: 'Surgery center', title: 'Sharps program that survives scrutiny', challenge: 'A center had safer sharps devices in use but no documentation of the required annual evaluation or frontline employee input.', approach: 'A structured device evaluation was run with clinical staff, documented in the exposure control plan, and scheduled to recur annually.', result: 'A defensible, documented sharps program and a sharps injury log maintained in the platform.' },
    { tag: 'MedSpa', title: 'Chemical inventory built from scratch', challenge: 'An aesthetics practice using peels, solvents and disinfectants had no written Hazard Communication program or chemical inventory.', approach: 'HCP inventoried every product in use, built the written program, loaded the SDS library and trained staff on labeling and handling.', result: 'A complete HazCom program in place before a planned second location opened.' }
  ],
  faqs: [
    { q: 'Does OSHA actually inspect medical practices?', a: 'Yes. Inspections are triggered by employee complaints, reported injuries, referrals and programmed emphasis initiatives. Healthcare is not exempt, and most practices are inspected with little or no advance notice.' },
    { q: 'How often does the exposure control plan need updating?', a: 'At least annually, and whenever new tasks or procedures affect occupational exposure. The annual review must also document consideration of safer medical devices and reflect input from frontline employees who use sharps.' },
    { q: 'Can we keep paper safety data sheets?', a: 'You can, provided they are readily accessible to every employee during every shift with no barriers. In practice a virtual binder is easier to defend, because access does not depend on someone having a key to the right office.' },
    { q: 'Are we required to keep OSHA 300 logs?', a: 'It depends on your size and industry classification. Many small practices are partially exempt from routine recordkeeping but still must report severe injuries. Your advisor determines your specific obligation and documents the basis.' },
    { q: 'Who needs Bloodborne Pathogens training?', a: 'Every employee with reasonably anticipated occupational exposure to blood or other potentially infectious materials — which in a clinical setting typically includes clinical staff and anyone handling contaminated items, at hire and annually thereafter.' },
    { q: 'What if an inspector arrives today?', a: 'Call your advisor team. Inspection support is included, and your written programs, training records, inspection logs and SDS library are already in one place rather than scattered across offices.' }
  ],
  related: [
    { href: '/compliance-solution/hipaa/', label: 'HIPAA Compliance', text: 'Privacy, Security and breach management.' },
    { href: '/on-site-services/', label: 'On-site services', text: 'In-person training and facility walkthroughs.' },
    { href: '/compliance-assessment/', label: 'Free risk assessment', text: 'Find your safety documentation gaps.' },
    { href: '/compliance-solution/lms/', label: 'Learning Management System', text: 'Safety training assigned by role.' }
  ]
});

/* ================= Corporate compliance ================= */
const corporate = buildPage({
  path: '/compliance-solution/corporate-compliance/',
  group: G,
  llmsLabel: 'Corporate Compliance',
  title: 'Corporate Compliance Program | HCP',
  description: 'A documented corporate compliance program built on the seven elements: FWA training, hotline, exclusion monitoring, auditing and committee records.',
  breadcrumbs: [crumbSolutions, { label: 'Corporate Compliance', href: '/compliance-solution/corporate-compliance/' }],
  eyebrow: 'Corporate compliance',
  h1: 'A corporate compliance program that stands up to scrutiny',
  lead: 'Built on the seven elements of an effective compliance program that CMS and the Office of Inspector General expect to see, and documented well enough to prove it.',
  bullets: [
    'Code of conduct and compliance policies written for your organization',
    'Fraud, Waste & Abuse and False Claims Act training',
    'Anonymous compliance hotline with documented intake and follow-up',
    'OIG and SAM exclusion screening, run and recorded on schedule'
  ],
  heroStat: 'Required for many payer, Medicare Advantage and PE diligence reviews',
  heroPhoto: { src: '/assets/img/site/prog-corporate.webp', alt: 'Illustration representing billing integrity and financial compliance risk', title: 'Corporate compliance program', width: 900, height: 506 },
  extraSchema: [serviceSchema('Corporate Compliance Program', 'Healthcare corporate compliance program covering the seven elements, Fraud Waste and Abuse training, exclusion monitoring, hotline and internal auditing.', '/compliance-solution/corporate-compliance/')],
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'The framework',
      h2: 'The seven elements, and what each one has to produce',
      lead: 'An effective program is judged by its artifacts. Each element must generate documentation someone outside your organization can review.',
      body: prose([
        `<ol>
          <li><strong>Written policies, procedures and standards of conduct.</strong> A code of conduct distributed to every workforce member, with acknowledgement records, plus policies covering billing integrity, documentation standards, conflicts of interest, and non-retaliation.</li>
          <li><strong>Designated compliance officer and committee.</strong> A named individual with real authority and access to leadership, supported by a committee that meets on a defined schedule and keeps minutes.</li>
          <li><strong>Effective training and education.</strong> General compliance and Fraud, Waste &amp; Abuse training at hire and annually, with role-specific content for billing, coding and clinical documentation staff, all tracked per individual.</li>
          <li><strong>Effective lines of communication.</strong> An anonymous reporting mechanism — typically a hotline — with documented intake, investigation and disposition for every report, and a demonstrated non-retaliation posture.</li>
          <li><strong>Well-publicized disciplinary standards.</strong> A sanction policy applied consistently, with documentation showing enforcement actually occurs.</li>
          <li><strong>Effective system for routine monitoring and auditing.</strong> Scheduled internal audits of coding and billing, exclusion screening of employees, contractors and vendors, and identification of risk areas specific to your specialty.</li>
          <li><strong>Prompt response to detected offenses and corrective action.</strong> Documented investigation, root cause analysis, corrective action plans with owners and dates, and where applicable, repayment of identified overpayments within the required timeframe.</li>
        </ol>`,
        `The distinction that matters in a review is between a program that exists on paper and a program that is operating. Auditors look for evidence of activity: dated committee minutes, hotline reports with dispositions, audit findings with corrective actions closed out, exclusion screening run monthly with results retained. HCP structures each element so that operating the program produces that evidence automatically.`
      ])
    }),
    section({
      eyebrow: 'Exclusion screening',
      h2: 'The obligation most organizations underestimate',
      body: prose([
        `Federal health care programs will not pay for items or services furnished, ordered or prescribed by an excluded individual or entity. The liability is not limited to clinicians — it extends to anyone whose services are paid for directly or indirectly by a federal program, including administrative and billing staff, contractors and vendors.`,
        `The practical requirement is straightforward but easy to neglect: screen every employee, contractor and vendor against the OIG List of Excluded Individuals and Entities and the System for Award Management at hire and on a recurring basis, typically monthly, and retain the results. Many organizations screen at hire and never again, which leaves years of exposure because exclusion can occur at any time during employment.`,
        `HCP runs screening on schedule, records the results with date stamps, flags potential matches for review, and keeps the retained evidence in your compliance record so it can be produced on request.`
      ])
    })
  ],
  diffH2: 'Why corporate compliance programs built with HCP hold up',
  cases: [
    { tag: 'Private equity platform', title: 'Surviving investor diligence', challenge: 'A PE-backed platform needed a defensible compliance program across a growing set of acquired practices ahead of a lender review.', approach: 'A standardized program template was deployed at each site with exclusion screening, coding audits and portfolio-level rollup reporting.', result: 'Diligence completed without compliance findings, and post-close integration timelines became predictable.' },
    { tag: 'Medicare Advantage contractor', title: 'Meeting FWA training obligations', challenge: 'A provider group under Medicare Advantage contracts could not evidence annual FWA training for all in-scope staff.', approach: 'FWA and False Claims Act training were assigned by role with automated annual refreshers and per-person completion records.', result: 'Payer attestation requirements satisfied from existing platform reports rather than a manual scramble.' },
    { tag: 'Billing company', title: 'Standing up a hotline that works', challenge: 'A billing company had a compliance policy referencing a hotline that had never actually been implemented.', approach: 'HCP established the anonymous reporting line, documented intake and investigation procedures, and trained managers on non-retaliation.', result: 'A functioning reporting channel with documented dispositions, closing a gap that would have failed any serious review.' }
  ],
  faqs: [
    { q: 'Is a corporate compliance program legally required?', a: 'It depends on your payer mix and contracts. It is a condition of participation for many Medicare Advantage and Medicaid managed care arrangements, is required under many payer contracts, and is effectively expected in any acquisition or lender diligence. Even where not strictly mandated, an effective program is a recognized mitigating factor in enforcement.' },
    { q: 'How often should exclusion screening run?', a: 'Monthly is the widely accepted standard and what most payers and auditors expect. Screening at hire alone leaves exposure for the entire duration of employment, since exclusion can occur at any point.' },
    { q: 'Who can serve as compliance officer?', a: 'Typically a practice administrator, operations leader or clinician with real authority and direct access to leadership. The role must not be structurally conflicted — putting the person who bills under the person who audits billing is a common finding. If you do not have a suitable internal candidate, our fractional compliance officer service fills the role.' },
    { q: 'What do we do with an anonymous report?', a: 'Log it, investigate it, document the findings and the disposition, and take corrective action where warranted — with no retaliation against the reporter. The documentation trail matters as much as the outcome; your advisor guides the process.' },
    { q: 'What if an internal audit finds an overpayment?', a: 'Identified overpayments generally must be reported and returned within 60 days of identification. Your advisor helps you quantify the issue, document the analysis and work through the repayment process with your billing team or counsel.' },
    { q: 'How do committee meetings get documented?', a: 'The platform provides agenda templates, attendance tracking and minutes storage, so the meeting cadence and the topics covered are evidenced rather than remembered.' }
  ],
  related: [
    { href: '/coding-compliance/', label: 'SENTRY Coding Intelligence', text: 'Coding audits and billing integrity.' },
    { href: '/fractional-compliance-officer/', label: 'Fractional Compliance Officer', text: 'Fill the role without a full-time hire.' },
    { href: '/privateequity/', label: 'For private equity', text: 'Portfolio-wide compliance standardization.' },
    { href: '/background-checks/', label: 'Background checks', text: 'Screening built into onboarding.' }
  ]
});

/* ================= LMS ================= */
const lms = buildPage({
  path: '/compliance-solution/lms/',
  group: G,
  llmsLabel: 'Learning Management System',
  title: 'Healthcare Learning Management System | HCP',
  description: '130+ compliance courses with automated role-based assignment, reminders, certificates and CME credit on select titles.',
  breadcrumbs: [crumbSolutions, { label: 'Learning Management System', href: '/compliance-solution/lms/' }],
  eyebrow: 'Learning management',
  h1: 'Training your staff will actually finish',
  lead: 'A 130+ course library with automated assignment by role, reminders that go out without you chasing anyone, and completion records that hold up in an audit.',
  bullets: [
    'Courses assigned automatically based on role, department and location',
    'Automated scheduling, reminders and annual refreshers',
    'AMA PRA Category 1 Credits™ available on select courses',
    'Custom course builder with narration, video, quizzes and certificates'
  ],
  heroStat: 'Completion reporting by person, department and site',
  heroPhoto: { src: '/assets/img/site/prog-lms.webp', alt: 'Clinician completing online compliance training at a desk', title: 'Learning management system', width: 900, height: 600 },
  extraSchema: [serviceSchema('HCP Learning Management System', 'Healthcare compliance learning management system with 130+ courses, automated role-based assignment, CME credit and completion tracking.', '/compliance-solution/lms/')],
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'The library',
      h2: 'What your team can be assigned',
      lead: 'Compliance fundamentals through specialty-specific and professional development content.',
      body: cards([
        { icon: 'lock', title: 'HIPAA Privacy & Security', text: 'Annual HIPAA training, security awareness, phishing and social engineering, patient rights, minimum necessary, and role-based modules for front desk, clinical and IT staff.' },
        { icon: 'alert', title: 'OSHA & workplace safety', text: 'Bloodborne Pathogens, Hazard Communication, PPE, ergonomics, emergency action, fire safety, workplace violence prevention and infection control.' },
        { icon: 'scale', title: 'Corporate compliance', text: 'Fraud, Waste & Abuse, False Claims Act, Anti-Kickback Statute and Stark Law basics, conflicts of interest, and code of conduct.' },
        { icon: 'clipboard', title: 'Coding & documentation', text: 'Evaluation and management documentation, modifier use, medical necessity, incident-to billing and specialty coding fundamentals.' },
        { icon: 'users', title: 'HR & workplace conduct', text: 'Harassment prevention, ADA and reasonable accommodation, FMLA basics, and manager-level supervisory training.' },
        { icon: 'grad', title: 'Clinical & specialty', text: 'Imaging and radiology series, behavioral health considerations, laser and injectable safety, and infection prevention for procedural settings.' }
      ])
    }),
    section({
      eyebrow: 'Why completion rates go up',
      h2: 'Adoption is a design problem, not a discipline problem',
      body: prose([
        `Compliance training fails for predictable reasons. Staff are assigned content that does not apply to them, so they learn the training is noise. Reminders come from an administrator who has to remember to send them. Courses run long past the point of retention. Certificates live in an inbox somewhere. Nobody can tell who is behind until an auditor asks.`,
        `The HCP LMS attacks each of these directly. Assignment is driven by role, department and location, so a front desk coordinator is not sitting through sharps handling and a clinical assistant is not skipping it. Reminders are automated on a schedule, escalating to managers when a due date approaches. Courses are built in focused modules rather than hour-long blocks. Certificates are generated and stored automatically against the individual's record. And the dashboard shows completion status live, by person and by department, so gaps are visible while there is still time to close them.`,
        `<h3>Custom courses for what is specific to you</h3>`,
        `<p>Standard library content covers regulatory requirements. Your own onboarding, your EHR workflows, your specialty protocols and your policies are specific to you, and those can be built as custom courses with voice narration, video, embedded documents, quizzes and completion certificates — then assigned and tracked exactly like library content.</p>`
      ])
    })
  ],
  diffH2: 'Why training works better inside HCP',
  cases: [
    { tag: 'Multi-site practice', title: 'From 60% to near-full completion', challenge: 'A group practice tracked training in a spreadsheet and regularly finished the compliance year with a large share of staff incomplete.', approach: 'Role-based assignment replaced blanket assignment, automated reminders with manager escalation were enabled, and a live dashboard was given to each site lead.', result: 'Completion became visible weekly rather than discovered annually, and the compliance year closed with records complete and date-stamped.' },
    { tag: 'Imaging center', title: 'Specialty content plus CME', challenge: 'Radiologic technologists needed specialty-relevant education and clinicians needed accredited credit, delivered through two separate systems.', approach: 'The imaging and radiology series was assigned to technologists while CME-eligible courses were assigned to clinicians, all within one platform.', result: 'One system, one set of records, and licensure-relevant credit satisfied alongside compliance requirements.' },
    { tag: 'Behavioral health', title: 'Custom onboarding built once', challenge: 'A behavioral health provider repeated the same four-hour onboarding session in person for every new hire.', approach: 'The session was rebuilt as narrated custom modules with quizzes, assigned automatically on the new hire’s start date.', result: 'Onboarding became consistent and self-service, freeing clinical supervisors and producing a completion record for every hire.' }
  ],
  faqs: [
    { q: 'How many courses are included?', a: 'More than 130 in the standard library, spanning HIPAA, OSHA, corporate compliance, coding and documentation, HR and workplace conduct, and specialty clinical topics. Library access is included with your plan.' },
    { q: 'Do courses offer CME credit?', a: 'Select courses offer AMA PRA Category 1 Credits™, which helps clinicians meet licensure and credentialing requirements without a separate CME vendor. Eligible titles are flagged in the catalog.' },
    { q: 'Can we upload our own training?', a: 'Yes. The custom course builder supports voice narration, video, embedded documents, quizzes and certificates. Custom courses are assigned and tracked exactly like library content.' },
    { q: 'How do staff access training?', a: 'Through a browser on any device with a single login. Assignments and due dates appear on their dashboard, and reminders arrive by email on an automated schedule.' },
    { q: 'What reporting do managers get?', a: 'Live completion status by individual, department and location, plus exportable reports for boards, payers and auditors. Certificates are stored automatically against each person’s record.' },
    { q: 'Does the LMS work without the rest of the platform?', a: 'It can be licensed on its own, though most clients run it alongside their HIPAA and OSHA programs so that a policy revision automatically drives the corresponding training assignment.' }
  ],
  related: [
    { href: '/compliance-solution/', label: 'SHIELD Compliance Solution', text: 'The full platform overview.' },
    { href: '/compliance-solution/hipaa/', label: 'HIPAA Compliance', text: 'Where HIPAA training assignments come from.' },
    { href: '/specialties/radiology/', label: 'Radiology & imaging', text: 'Specialty series for imaging teams.' },
    { href: '/contact/', label: 'See a demo', text: 'Walk through the platform with an advisor.' }
  ]
});

export default [shield, hipaa, osha, corporate, lms];
