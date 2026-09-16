import { buildPage, section, prose, checklist, cards } from '../shared.mjs';
import { abs } from '../layout.mjs';
import { site } from '../site.mjs';

const G = 'Training & courses';
const crumb = { label: 'Learning Management System', href: '/compliance-solution/lms/' };

/* Each entry becomes a course landing page. `why` and `covers` carry the
   substance; the shared page factory supplies differentiators, use cases,
   FAQ and the services band. */
const courses = [
  { slug: 'clinical-training', name: 'Clinical Training',
    photo: 'prog-lms', audience: 'clinical staff',
    lead: 'Role-based clinical education that keeps licensed and unlicensed staff current on the procedures, precautions and documentation their work depends on.',
    why: 'Clinical staff carry the highest regulatory exposure in most organizations: they handle sharps, administer treatment, document encounters and touch protected health information constantly. Generic annual training does not reach the specifics of what they actually do.',
    covers: ['Standard and transmission-based precautions', 'Sharps handling and safe injection practice', 'Documentation standards that support what is billed', 'Patient privacy during clinical encounters', 'Emergency response and escalation', 'Scope-of-practice boundaries by role'] },

  { slug: 'osha-training', name: 'OSHA Training',
    photo: 'prog-osha', audience: 'all staff with occupational exposure',
    lead: 'Annual and new-hire OSHA training built for clinical settings, covering the standards that actually generate citations in healthcare.',
    why: 'OSHA citations in healthcare are most often written for administrative failures rather than dramatic unsafe conditions: a stale written programme, inaccessible safety data sheets, incomplete training records, a missing sharps injury log.',
    covers: ['Bloodborne Pathogens and the exposure control plan', 'Hazard Communication and safety data sheets', 'Personal protective equipment selection and use', 'Emergency action and fire prevention', 'Injury reporting and recordkeeping', 'Workplace violence prevention'] },

  { slug: 'osha-series', name: 'OSHA Series',
    photo: 'prog-osha', audience: 'clinical and support staff',
    lead: 'A structured series covering each OSHA standard that applies in a healthcare environment, assignable module by module.',
    why: 'A single annual session cannot carry every OSHA requirement at a depth staff retain. Splitting the material into focused modules raises completion and makes it far easier to evidence which topics each person actually received.',
    covers: ['Bloodborne Pathogens', 'Hazard Communication', 'Ergonomics and safe lifting', 'Fire and emergency preparedness', 'Electrical and equipment safety', 'Recordkeeping obligations'] },

  { slug: 'osha-series-general-safety', name: 'OSHA General Safety',
    photo: 'svc-onsite', audience: 'all employees',
    lead: 'General workplace safety for every employee, including non-clinical staff whose roles still carry obligations under OSHA.',
    why: 'Front desk, billing and administrative staff are frequently left out of safety training on the assumption that exposure is clinical. Emergency action, fire prevention and ergonomics apply to everyone in the building.',
    covers: ['Emergency action and evacuation routes', 'Fire prevention and extinguisher access', 'Slips, trips and falls', 'Office ergonomics', 'Reporting injuries and near misses', 'General hazard awareness'] },

  { slug: 'osha-standard-precautions', name: 'Standard Precautions',
    photo: 'prog-osha', audience: 'clinical staff',
    lead: 'Standard precautions training: treating every patient interaction as potentially infectious, regardless of known diagnosis.',
    why: 'Standard precautions exist because infection status is frequently unknown at the point of care. Applying them selectively — based on assumption about a particular patient — is both a clinical risk and a compliance failure.',
    covers: ['Hand hygiene at the five moments', 'Glove, gown, mask and eye protection selection', 'Safe injection practices', 'Respiratory hygiene and cough etiquette', 'Environmental cleaning and disinfection', 'Safe handling of contaminated equipment'] },

  { slug: 'hand-hygiene', name: 'Hand Hygiene',
    photo: 'spec-behavioral-health', audience: 'all clinical and support staff',
    lead: 'The single highest-impact infection prevention practice, trained to the moments that matter rather than as a poster on a wall.',
    why: 'Hand hygiene compliance is measured and reported in most clinical settings, and it remains the most effective single intervention against healthcare-associated infection. Training works when it addresses the specific moments staff routinely miss.',
    covers: ['The five moments for hand hygiene', 'Soap and water versus alcohol-based rub', 'Correct technique and contact time', 'Glove use is not a substitute', 'Skin integrity and dermatitis prevention', 'Monitoring and feedback'] },

  { slug: 'ppe', name: 'Personal Protective Equipment',
    photo: 'prog-osha', audience: 'staff with occupational exposure',
    lead: 'Selecting, donning, doffing and disposing of PPE correctly — where most contamination actually occurs.',
    why: 'Contamination during removal is more common than contamination during use. PPE training that covers selection but not doffing sequence leaves the highest-risk step untrained.',
    covers: ['Hazard assessment and PPE selection by task', 'Donning sequence', 'Doffing sequence and contamination avoidance', 'Respirator fit testing requirements', 'Reuse, disposal and storage', 'Employer obligation to provide at no cost'] },

  { slug: 'safe-patient-handling-techniques', name: 'Safe Patient Handling',
    photo: 'spec-physical-therapy', audience: 'clinical and direct-care staff',
    lead: 'Techniques and equipment that protect both patient and caregiver during transfers, repositioning and mobilisation.',
    why: 'Musculoskeletal injury from patient handling is among the most common and most costly workplace injuries in healthcare, and it is largely preventable with correct technique and available equipment.',
    covers: ['Assessing a patient before transfer', 'Body mechanics and load positioning', 'Mechanical lift and slide sheet use', 'Team transfers and communication', 'Recognising and reporting strain', 'Equipment inspection and availability'] },

  { slug: 'wound-cleaning-and-healing', name: 'Wound Care',
    photo: 'spec-dermatology', audience: 'clinical staff',
    lead: 'Assessment, cleaning and documentation of wounds, with the infection control and record-keeping obligations that accompany them.',
    why: 'Wound care sits at the intersection of clinical practice, infection control and documentation. Each of the three carries its own regulatory expectation, and gaps in the third are what typically surface in an audit.',
    covers: ['Wound assessment and staging', 'Cleaning and irrigation technique', 'Dressing selection', 'Infection recognition and escalation', 'Documentation that supports the care given', 'Sharps and waste disposal'] },

  { slug: 'allergic-reactions-anaphylaxis', name: 'Anaphylaxis Response',
    photo: 'spec-medspa', audience: 'all clinical staff',
    lead: 'Recognising anaphylaxis quickly and responding correctly, including in practices that administer injectables or perform allergy testing.',
    why: 'Anaphylaxis is time-critical and rare enough that staff rarely have recent experience of it. Training that is not refreshed tends to fail at exactly the moment it is needed.',
    covers: ['Recognising early signs and distinguishing from milder reactions', 'Epinephrine indications, dosing and administration', 'Positioning and airway management', 'When and how to activate emergency services', 'Post-event observation and documentation', 'Emergency kit contents and expiry checks'] },

  { slug: 'records-management', name: 'Records Management',
    photo: 'band-baa', audience: 'administrative and clinical staff',
    lead: 'How records are created, stored, accessed, retained and destroyed — and the retention periods each obligation actually requires.',
    why: 'HIPAA requires documentation to be retained for six years from creation or from when it was last in effect, whichever is later. OSHA retention varies by record type, with some exposure records requiring far longer. Destroying records early is as much a violation as losing them.',
    covers: ['Designated record set and what belongs in it', 'Retention periods by record type', 'Access, amendment and accounting of disclosures', 'Secure storage, physical and electronic', 'Secure destruction and vendor agreements', 'Litigation hold considerations'] },

  { slug: 'disaster-recovery-plan', name: 'Disaster Recovery Planning',
    photo: 'aud-pe-2', audience: 'leadership and IT-responsible staff',
    lead: 'Contingency planning required under the Security Rule: backup, disaster recovery and emergency mode operation.',
    why: 'Contingency planning is a required Security Rule standard, not an optional one. Most organisations have backups; far fewer have a tested restoration procedure or a documented plan for operating while systems are down.',
    covers: ['Data backup plan and verification', 'Disaster recovery procedures', 'Emergency mode operation plan', 'Testing and revision on a schedule', 'Applications and data criticality analysis', 'Documentation an auditor will request'] },

  { slug: 'medical-identity-theft-prevention', name: 'Medical Identity Theft Prevention',
    photo: 'band-incident', audience: 'front office and billing staff',
    lead: 'Recognising and preventing medical identity theft, including the Red Flags Rule obligations that apply to many practices.',
    why: 'Medical identity theft harms patients clinically as well as financially, because fraudulent treatment enters their record. Front office staff are the practical control point, and they are rarely trained on what to look for.',
    covers: ['Red flags at registration and check-in', 'Identity verification practices', 'Detecting altered or borrowed insurance cards', 'Responding to a suspected incident', 'Correcting a contaminated record', 'Patient notification obligations'] },

  { slug: 'cyber-security-awareness-spanish', name: 'Cybersecurity Awareness (Spanish)',
    photo: 'band-walkthrough', audience: 'Spanish-speaking staff',
    lead: 'Security awareness training delivered in Spanish, covering the same phishing, password and device practices as the English course.',
    why: 'Security awareness only works if staff genuinely understand it. Delivering the material in an employee&rsquo;s primary language materially improves comprehension, and the Security Rule requires awareness training for the entire workforce.',
    covers: ['Phishing and social engineering recognition', 'Password practice and multi-factor authentication', 'Device encryption and physical security', 'Safe handling of PHI on mobile devices', 'Reporting a suspected incident', 'Acceptable use of workplace systems'] },

  { slug: 'suicide-prevention', name: 'Suicide Prevention',
    photo: 'spec-behavioral-health', audience: 'clinical and behavioral health staff',
    lead: 'Recognising risk, responding safely, and meeting the training requirements several states now impose on licensed professionals.',
    why: 'A number of states mandate suicide prevention training for licence renewal in specified professions, with requirements that differ by state and by licence type. Beyond the mandate, clinical staff frequently encounter risk without a clear protocol.',
    covers: ['Recognising warning signs and risk factors', 'Asking directly about suicidal ideation', 'Risk assessment frameworks', 'Safety planning and means restriction', 'Referral, escalation and follow-up', 'Documentation and confidentiality considerations'] },

  { slug: 'trauma-informed-care', name: 'Trauma-Informed Care',
    photo: 'spec-therapy-2', audience: 'clinical and front-line staff',
    lead: 'Practising in a way that recognises the prevalence of trauma and avoids re-traumatising patients during routine care.',
    why: 'Trauma-informed practice is increasingly expected by payers and accreditors in behavioral health and beyond. It also reduces escalation and improves engagement in ordinary clinical settings.',
    covers: ['Prevalence and effects of trauma', 'Recognising trauma responses in a clinical setting', 'Safety, trustworthiness and choice as practice principles', 'Language and communication that avoids re-traumatising', 'De-escalation approaches', 'Staff wellbeing and vicarious trauma'] },

  { slug: 'sexual-harassment-prevention-cme', name: 'Sexual Harassment Prevention',
    photo: 'feature-comprehensive', audience: 'all staff and supervisors',
    lead: 'Harassment prevention training meeting state mandates, with CME-eligible versions available for clinicians.',
    why: 'Several states mandate sexual harassment prevention training at defined intervals, often with separate, longer requirements for supervisors. Requirements vary materially by state and by employer size.',
    covers: ['What constitutes harassment under federal and state law', 'Supervisor-specific obligations', 'Bystander intervention', 'Reporting channels and non-retaliation', 'Investigation expectations', 'Documentation and record retention'] },

  { slug: 'mandated-reporter-training', name: 'Mandated Reporter Training',
    photo: 'spec-therapy-2', audience: 'licensed professionals and designated staff',
    lead: 'Recognising and reporting suspected abuse or neglect, with the thresholds, timelines and immunities that apply in your state.',
    why: 'Mandated reporter obligations vary considerably by state: who must report, what triggers a report, how quickly, and to whom. Failing to report where required carries personal as well as organizational consequence.',
    covers: ['Who qualifies as a mandated reporter', 'Recognising indicators of abuse and neglect', 'Reasonable suspicion as the reporting threshold', 'Reporting timelines and receiving agencies', 'Immunity and confidentiality protections', 'Documenting a report internally'] },

  { slug: 'clia-series-training', name: 'CLIA Series',
    photo: 'svc-coding', audience: 'laboratory and clinical staff',
    lead: 'Training for practices operating under a CLIA certificate, covering testing personnel, quality control and proficiency obligations.',
    view: true,
    why: 'A CLIA certificate carries obligations proportionate to the complexity of testing performed. Practices frequently drift beyond the scope of their certificate without realising it, which is a finding in its own right.',
    covers: ['Certificate types and permitted test complexity', 'Testing personnel qualifications', 'Quality control and calibration', 'Proficiency testing requirements', 'Specimen handling and labelling', 'Documentation and inspection readiness'] },

  { slug: 'state-specific-courses', name: 'State-Specific Courses',
    photo: 'about-1', audience: 'staff in states with additional mandates',
    lead: 'Courses that satisfy requirements imposed by individual states on top of federal obligations.',
    why: 'Federal requirements are a floor, not a ceiling. Many states impose additional mandates on training frequency, topics and documentation, and some carry them at the licence level rather than the employer level.',
    covers: ['State-mandated harassment prevention', 'State suicide prevention requirements', 'Mandated reporter variations by state', 'State privacy laws exceeding HIPAA', 'Licence renewal education requirements', 'Documentation accepted by each state board'] }
];

const pages = courses.map((c) => buildPage({
  path: `/${c.slug}/`,
  group: G,
  llmsLabel: `${c.name} training`,
  title: `${c.name} Training | HCP`.length > 60 ? `${c.name} | HCP` : `${c.name} Training | HCP`,
  description: `${c.name} training for ${c.audience}, assigned by role with automated reminders and per-person completion records.`.slice(0, 155),
  breadcrumbs: [crumb, { label: c.name, href: `/${c.slug}/` }],
  eyebrow: 'Compliance training',
  h1: `<em>${c.name}</em><strong>Training for ${c.audience}</strong>`,
  lead: c.lead,
  heroPhoto: { src: `/assets/img/site/${c.photo}.webp`, title: `${c.name} training`, width: 900, height: 600 },
  heroStat: 'Assigned by role, tracked per person, included in your plan',
  extraSchema: [{
    '@type': 'Course',
    '@id': abs(`/${c.slug}/`) + '#course',
    name: `${c.name} Training`,
    description: c.lead.replace(/<[^>]+>/g, ''),
    provider: { '@id': abs('/#organization') },
    inLanguage: c.slug.includes('spanish') ? 'es' : 'en-US',
    isAccessibleForFree: false,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'PT1H'
    }
  }],
  sections: [
    section({
      cls: 'sec-alt',
      h2: `<em>Why this training matters</em><strong>${c.name}</strong>`,
      body: prose([
        c.why,
        `<h3>What the course covers</h3>`,
        `<ul>${c.covers.map((x) => `<li>${x}</li>`).join('')}</ul>`,
        `Courses are assigned automatically based on role, department and location, with reminders that escalate to managers as a due date approaches. Completion is recorded per individual with a date stamp, and a certificate is generated and stored against that person&rsquo;s record &mdash; which is the form auditors and payers actually ask for.`
      ])
    }),
    section({
      h2: 'How training is delivered and tracked',
      body: cards([
        { icon: 'users', title: 'Assigned by role', text: 'Staff receive the courses relevant to what they actually do, rather than a blanket assignment that teaches people to ignore notifications.' },
        { icon: 'clock', title: 'Reminders that escalate', text: 'Automated reminders go out on a schedule and escalate to managers as the due date approaches, so completion stops being a chase.' },
        { icon: 'doc', title: 'Evidence generated automatically', text: 'Per-person, per-topic, date-stamped records with stored certificates &mdash; produced in minutes rather than reconstructed under deadline.' },
        { icon: 'grad', title: 'Refreshed on schedule', text: 'Annual refreshers and new-hire assignments fire automatically, including when a policy change requires re-acknowledgement.' }
      ])
    })
  ],
  cases: [
    { tag: 'Multi-site practice', title: 'Completion became visible weekly', challenge: `${c.name} training was tracked in a spreadsheet, and the compliance year routinely closed with a large share of staff incomplete.`, approach: 'Role-based assignment replaced blanket assignment, with automated reminders and a live dashboard for each site lead.', result: 'Gaps became visible while there was still time to close them, and records closed the year complete and date-stamped.' },
    { tag: 'New hire onboarding', title: 'Training complete before day one', challenge: 'New staff routinely started before their required training had been assigned, let alone completed.', approach: `${c.name} was added to a role-based onboarding track that fires automatically on the hire date.`, result: 'New hires reach their start date with required training complete and evidence on file.' },
    { tag: 'Audit response', title: 'Records produced in an afternoon', challenge: 'A payer requested training records for named individuals covering a multi-year period.', approach: 'Per-person completion history and stored certificates were exported directly from the platform.', result: 'A complete response inside the deadline, with no reconstruction from email archives.' }
  ],
  faqs: [
    { q: `Who should be assigned ${c.name.toLowerCase()} training?`, a: `Typically ${c.audience}. Your advisor maps roles to training tracks during implementation, so the right people are assigned automatically as staff join, change role or move site.` },
    { q: 'How often does it need to be repeated?', a: 'Annually is the widely accepted standard for most compliance topics, with new-hire assignment on start and re-acknowledgement whenever a related policy materially changes. Some state mandates set their own intervals, which your advisor applies.' },
    { q: 'How long does the course take?', a: 'Most courses are built in focused modules rather than hour-long blocks, because retention falls sharply beyond that. Staff can complete a module in one sitting and pick up where they left off.' },
    { q: 'What evidence does it produce?', a: 'A per-individual, per-topic completion record with a date stamp and a stored certificate. That is the form an investigator, payer or accreditor expects &mdash; not a sign-in sheet from a staff meeting.' },
    { q: 'Can we add our own content?', a: 'Yes. The custom course builder supports narration, video, embedded documents, quizzes and certificates, so your own protocols can be assigned and tracked exactly like library content.' },
    { q: 'Is this included in our plan?', a: `Library access is included with the learning management system. Call ${site.phoneDisplay} or request a consultation and we will confirm what your current plan covers.` }
  ],
  related: [
    { href: '/compliance-solution/lms/', label: 'Learning Management System', text: 'How assignment and tracking work.' },
    { href: '/compliance-solution/osha/', label: 'OSHA Compliance', text: 'The programme much of this supports.' },
    { href: '/compliance-solution/hipaa/', label: 'HIPAA Compliance', text: 'Privacy and security obligations.' },
    { href: '/contact/', label: 'Talk to an advisor', text: 'Ask what your plan includes.' }
  ]
}));

export default pages;
