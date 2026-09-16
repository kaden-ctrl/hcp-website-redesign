import { buildPage, section, prose, checklist, cards, steps } from '../shared.mjs';
import { abs } from '../layout.mjs';
import { site } from '../site.mjs';

const G = 'Solutions & packages';
const svc = (name, desc, url) => ({
  '@type': 'Service', '@id': abs(url) + '#service', name, description: desc, url: abs(url),
  serviceType: 'Healthcare compliance', provider: { '@id': abs('/#organization') },
  areaServed: { '@type': 'Country', name: 'United States' }
});

const pages = [];

/* ---------------- HR compliance ---------------- */
pages.push(buildPage({
  path: '/solutions/human-resources/',
  group: G, llmsLabel: 'Human Resources Compliance',
  title: 'HR Compliance for Healthcare | HCP',
  description: 'Employment law, harassment prevention, onboarding documentation and personnel file requirements for healthcare employers.',
  breadcrumbs: [{ label: 'Solutions', href: '/compliance-solution/' }, { label: 'Human Resources', href: '/solutions/human-resources/' }],
  eyebrow: 'Human resources',
  h1: '<em>HR compliance</em><strong>for healthcare employers</strong>',
  lead: 'Healthcare employers carry employment obligations alongside clinical ones, and the two are frequently managed by the same overstretched person.',
  heroPhoto: { src: '/assets/img/site/feature-comprehensive.webp', title: 'HR compliance', width: 1000, height: 563 },
  heroStat: 'Training, documentation and personnel file requirements in one place',
  extraSchema: [svc('HR Compliance for Healthcare', 'Human resources compliance including harassment prevention training, onboarding documentation and personnel file management for healthcare employers.', '/solutions/human-resources/')],
  sections: [
    section({ cls: 'sec-alt', h2: '<em>Where HR and compliance overlap</em><strong>more than most practices expect</strong>',
      body: prose([
        'In most practices the administrator who owns HIPAA also owns hiring, onboarding, personnel files and the awkward conversations. The two bodies of obligation interact constantly: exclusion screening is an HR process with a compliance consequence; a sanction policy is a compliance requirement enforced through HR; harassment prevention is an employment mandate delivered through the same training platform as Bloodborne Pathogens.',
        'Treating them as separate systems is what produces the familiar failure: a new hire who started three weeks ago with no training assigned, no screening run, no signed acknowledgements and no I-9 on file.',
        '<h3>What the HR module covers</h3>'
      ]) + checklist([
        'Harassment prevention training meeting state mandates, with supervisor-specific versions',
        'ADA, FMLA and reasonable accommodation fundamentals',
        'Onboarding checklists tying screening, credentials and training to a start date',
        'Personnel file structure and what must be kept separately',
        'Job description and scope-of-practice documentation',
        'Sanction policy applied consistently and documented',
        'Workplace violence prevention',
        'Termination documentation and access revocation'
      ], 'checklist-2') })
  ],
  cases: [
    { tag: 'Growing practice', title: 'Onboarding became one workflow', challenge: 'Background checks, credentials and training ran as three separate processes and new hires routinely started with at least one incomplete.', approach: 'A single role-based onboarding track was configured to fire on the hire date.', result: 'New hires reach day one with all three complete and evidence on file.' },
    { tag: 'Multi-state group', title: 'Meeting differing state mandates', challenge: 'Harassment prevention requirements differed across the states the group operated in, with separate supervisor obligations.', approach: 'State-specific courses were assigned by work location and role.', result: 'Each employee received the version their state requires, documented per person.' },
    { tag: 'Post-termination', title: 'Access revoked the same day', challenge: 'Departing staff retained system access for weeks, a Security Rule workforce-security failure.', approach: 'Termination procedures were tied to an access revocation checklist with sign-off.', result: 'Access now ends with employment, and the step is evidenced.' }
  ],
  faqs: [
    { q: 'Is HR compliance part of the standard plan?', a: `HR training sits in the course library included with the learning management system. Broader HR advisory is scoped separately — call ${site.phoneDisplay} and we will tell you what your plan covers.` },
    { q: 'Do you provide legal employment advice?', a: 'No. We are not a law firm. We provide training, documentation structure and process guidance, and we work alongside your employment counsel where a matter needs legal judgment.' },
    { q: 'Which states mandate harassment training?', a: 'Several, with requirements differing on frequency, duration and whether supervisors need a longer course. Your advisor applies the rules for the states you operate in rather than assuming a single standard.' },
    { q: 'What belongs in a separate file?', a: 'Medical information, including immunization records and any accommodation documentation, must be kept separately from the general personnel file. I-9s are also commonly kept separately to simplify audits.' },
    { q: 'Does this cover exclusion screening?', a: 'Screening is part of the corporate compliance program, but it is triggered by HR events — hire, contract, periodic review — so the two are configured together in onboarding.' },
    { q: 'Can supervisors get different training?', a: 'Yes, and in several states they must. Supervisor-specific modules are assigned by role automatically.' }
  ],
  related: [
    { href: '/background-checks/', label: 'Background checks', text: 'Screening inside onboarding.' },
    { href: '/credential-manager/', label: 'Credential Manager', text: 'Licences tracked per person.' },
    { href: '/sexual-harassment-prevention-cme/', label: 'Harassment prevention', text: 'State-mandated training.' },
    { href: '/compliance-solution/lms/', label: 'Learning Management System', text: 'Where training is assigned.' }
  ]
}));

/* ---------------- Support ---------------- */
pages.push(buildPage({
  path: '/solutions/support/',
  group: G, llmsLabel: 'Compliance Support',
  title: 'Compliance Support & Advisors | HCP',
  description: 'What included support actually means: named advisors, audit response, incident help and technical support, with no per-incident charge.',
  breadcrumbs: [{ label: 'Solutions', href: '/compliance-solution/' }, { label: 'Support', href: '/solutions/support/' }],
  eyebrow: 'Support',
  h1: '<em>Support that is included</em><strong>not metered</strong>',
  lead: 'Compliance vendors have a reputation for charging most at the moment you need help most. We priced deliberately against that.',
  heroPhoto: { src: '/assets/img/site/about-2.webp', title: 'Compliance support', width: 1000, height: 667 },
  heroStat: 'Monday–Friday, 8:00am–6:00pm Mountain Time',
  extraSchema: [svc('Compliance Advisory Support', 'Included advisory, audit and technical support for healthcare compliance clients, with named advisor teams.', '/solutions/support/')],
  sections: [
    section({ cls: 'sec-alt', h2: '<em>What you get</em><strong>when you call</strong>',
      body: prose([
        'Every client is assigned three to five named compliance professionals at implementation. You have their contact details, they know your organization, and they handle your questions, incidents and audits. It is not a rotating pool, a tiered queue, or a premium add-on.',
        'There is no per-incident fee and no hourly billing for audit response. We consider metered support a structural problem: it discourages exactly the early call that stops a small issue becoming a large one.',
        '<h3>What support covers</h3>'
      ]) + checklist([
        'Day-to-day compliance questions, without a ticket threshold',
        'HIPAA, OSHA and payer audit response',
        'Incident and breach risk assessment, worked with you',
        'Policy interpretation for your specific situation',
        'Regulatory change guidance as rules shift',
        'Platform configuration, reporting and access issues',
        'Client security questionnaire support for business associates',
        'Escalation to coders, safety specialists and risk analysts as needed'
      ], 'checklist-2') })
  ],
  cases: [
    { tag: 'Friday afternoon', title: 'An incident that could not wait', challenge: 'A practice discovered a potential impermissible disclosure late on a Friday.', approach: 'The advisor worked the four-factor assessment with them the same day and documented the analysis.', result: 'A defensible determination before the weekend, not an anxious wait and a Monday invoice.' },
    { tag: 'Active audit', title: 'A 30-day deadline met', challenge: 'A federal data request arrived at a practice with no compliance staff.', approach: 'The advisor team assembled the documentation and helped draft the written response.', result: 'A complete response inside the deadline, closed with no corrective action plan.' },
    { tag: 'Sales blocker', title: 'A security questionnaire answered', challenge: 'A business associate stalled on an enterprise security review.', approach: 'The advisor supplied risk analysis scope, safeguard documentation and training evidence.', result: 'The review cleared and the deal progressed.' }
  ],
  faqs: [
    { q: 'Is audit support genuinely included?', a: 'Yes, for HIPAA, OSHA and payer audits, in every plan. There is no per-incident charge and no premium tier required to reach your advisor.' },
    { q: 'What hours is support available?', a: 'Monday through Friday, 8:00am to 6:00pm Mountain Time. Active incidents and audit deadlines are escalated, and your team will tell you how to reach them in a genuine emergency.' },
    { q: 'How many advisors will we have?', a: 'Typically three to five, depending on your size and which programs you run. You will know their names and contact details.' },
    { q: 'What if our advisor leaves?', a: 'You are assigned a team rather than an individual, and your program history lives in the platform rather than in one person’s files, so continuity holds.' },
    { q: 'Is there a limit on questions?', a: 'No. Hesitating to call is how small problems become large ones, so we removed the reason to hesitate.' },
    { q: 'Do you support non-clients in an emergency?', a: `If you have an active incident and are not a client, call ${site.phoneDisplay}. We will tell you honestly whether we can help and what it would involve.` }
  ],
  related: [
    { href: '/solutions/the-hcp-difference/', label: 'The HCP difference', text: 'Why support is not metered.' },
    { href: '/our-team/', label: 'Our team', text: 'Who you would be working with.' },
    { href: '/testimonials/', label: 'Testimonials', text: 'What clients say about response.' },
    { href: '/contact/', label: 'Contact us', text: 'Talk to an advisor.' }
  ]
}));

/* ---------------- Packages ---------------- */
const packs = [
  { slug: 'osha-plus', name: 'OSHA Plus', photo: 'prog-osha',
    title: 'OSHA Plus Package | HCP',
    desc: 'An expanded OSHA program adding on-site inspection support, expanded training and deeper hazard assessment to the standard package.',
    lead: 'The standard OSHA program covers the written plans, training and records. OSHA Plus adds the in-person work that only happens when someone walks your space.',
    adds: ['Annual on-site facility safety walkthrough with photo documentation', 'Live, in-person staff safety training', 'Expanded hazard and risk assessment across all locations', 'Mock OSHA inspection with a prioritised written report', 'Priority inspection response support', 'Equipment and reprocessing documentation review'],
    base: '/compliance-solution/osha/' },
  { slug: 'corporate-compliance-plus', name: 'Corporate Compliance Plus', photo: 'band-sra',
    title: 'Corporate Compliance Plus | HCP',
    desc: 'An expanded corporate compliance package adding coding audits, committee facilitation and board-level reporting to the standard program.',
    lead: 'The seven elements are the floor. Corporate Compliance Plus adds the auditing and governance work that demonstrates the program is genuinely operating.',
    adds: ['Recurring coder-level audits with provider feedback', 'Compliance committee facilitation and minute-taking', 'Board and ownership reporting on a defined cadence', 'Expanded exclusion screening across vendors and contractors', 'Hotline investigation support', 'Annual program effectiveness review'],
    base: '/compliance-solution/corporate-compliance/' }
];

packs.forEach((p) => pages.push(buildPage({
  path: `/${p.slug}/`,
  group: G, llmsLabel: p.name,
  title: p.title,
  description: p.desc.slice(0, 155),
  breadcrumbs: [{ label: 'Solutions', href: '/compliance-solution/' }, { label: p.name, href: `/${p.slug}/` }],
  eyebrow: 'Package',
  h1: `<em>${p.name}</em><strong>for organizations that need more depth</strong>`,
  lead: p.lead,
  heroPhoto: { src: `/assets/img/site/${p.photo}.webp`, title: p.name, width: 900, height: 600 },
  heroStat: 'Built on the standard program, not a replacement for it',
  extraSchema: [svc(p.name, p.desc, `/${p.slug}/`)],
  sections: [
    section({ cls: 'sec-alt', h2: `<em>What ${p.name} adds</em><strong>on top of the standard program</strong>`,
      body: prose([
        `Everything in the standard program is included. ${p.name} exists for organizations whose size, risk profile or payer mix means the baseline is not sufficient — multi-site groups, practices under active scrutiny, and organizations preparing for diligence or accreditation.`,
        '<h3>Included in addition</h3>'
      ]) + checklist(p.adds, 'checklist-2') + `<p class="center mt-2"><a class="btn btn-ghost" href="${p.base}">See the standard program first</a></p>` })
  ],
  cases: [
    { tag: 'Multi-site group', title: 'Consistency proven across locations', challenge: 'Leadership could not tell whether sites were genuinely operating the same program or just reporting that they were.', approach: 'Standardised walkthroughs and expanded assessment ran at every location with identical criteria.', result: 'Real variation identified between sites, with corrective actions tracked to closure.' },
    { tag: 'Pre-diligence', title: 'Ready before the reviewers arrived', challenge: 'A platform faced lender review with an undocumented program.', approach: 'The expanded package established governance, reporting and audit evidence on a fixed timeline.', result: 'Diligence completed without compliance findings.' },
    { tag: 'After a finding', title: 'Closing a citation properly', challenge: 'An organization had abated a citation but had no assurance the underlying gap was fixed everywhere.', approach: 'Expanded assessment and mock inspection tested the remediation across the organization.', result: 'Two further instances found and closed before the next inspection cycle.' }
  ],
  faqs: [
    { q: `Who is ${p.name} for?`, a: 'Organizations whose size, risk profile or payer mix means the standard program is not sufficient — typically multi-site groups, those under active scrutiny, or those preparing for diligence or accreditation.' },
    { q: 'Does it replace the standard program?', a: 'No. Everything in the standard program is included; this adds depth on top of it.' },
    { q: 'How is it priced?', a: `Pricing depends on headcount, locations and which additions you need. Call ${site.phoneDisplay} and we will scope it against what you actually require rather than sell the whole package by default.` },
    { q: 'Can we add it mid-term?', a: 'Yes, with prorated pricing aligned to your existing renewal date, so you do not wait for a renewal cycle.' },
    { q: 'Can we start standard and upgrade?', a: 'That is the common path. Many clients start with the standard program, then add depth once they can see where their actual gaps are.' },
    { q: 'Is on-site work included?', a: p.slug === 'osha-plus' ? 'Yes — an annual facility walkthrough and live training are part of the package. Additional visits are quoted by scope.' : 'Committee facilitation can be delivered remotely or on site. On-site visits beyond the included scope are quoted separately.' }
  ],
  related: [
    { href: p.base, label: 'The standard program', text: 'What this builds on.' },
    { href: '/on-site-services/', label: 'On-site services', text: 'In-person training and audits.' },
    { href: '/coding-compliance/', label: 'SENTRY Coding Intelligence', text: 'Coder-level auditing.' },
    { href: '/contact/', label: 'Scope a package', text: 'Talk it through with an advisor.' }
  ]
})));

export default pages;
