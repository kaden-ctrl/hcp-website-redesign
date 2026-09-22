import { buildPage, section, prose, checklist, cards } from '../shared.mjs';
import { abs } from '../layout.mjs';
import { site } from '../site.mjs';

const G = 'Resources';
const pages = [];

/* ---------------- Checklists ---------------- */
pages.push(buildPage({
  path: '/checklists/',
  group: G, llmsLabel: 'Compliance Checklists',
  title: 'Healthcare Compliance Checklists | HCP',
  description: 'Practical checklists for HIPAA, OSHA and corporate compliance — what to verify, how often, and what evidence each check should produce.',
  breadcrumbs: [{ label: 'Compliance Checklists', href: '/checklists/' }],
  eyebrow: 'Resources',
  h1: '<em>Compliance checklists</em><strong>you can actually work through</strong>',
  lead: 'Checklists fail when they list obligations without saying what evidence each one has to produce. These do not.',
  heroPhoto: { src: '/assets/img/site/band-baa.webp', title: 'Compliance checklists', width: 900, height: 600 },
  heroStat: 'Use them free — no form, no registration',
  sections: [
    section({ cls: 'sec-alt', h2: '<em>Annual compliance checklist</em><strong>what to verify every year</strong>',
      body: prose(['Work through this once a year, and after any material change — a new EHR, a new location, a merger, a significant incident. For each item, the question is not only "have we done it" but "can we produce the evidence".'])
        + checklist([
          '<strong>Security Risk Analysis</strong> — performed within the last 12 months and reflecting current systems; risk management plan has owners, dates and status',
          '<strong>Policies</strong> — reviewed and dated; revisions pushed to staff with acknowledgements recorded',
          '<strong>Training</strong> — every workforce member current, evidenced per individual, per topic, with dates',
          '<strong>Business associates</strong> — vendor inventory rebuilt from systems and workflows, not the contract folder; every agreement executed and in date',
          '<strong>Exclusion screening</strong> — run monthly for employees, contractors and vendors, with dated results retained',
          '<strong>Incident log</strong> — every incident recorded with investigation, four-factor assessment and disposition, including those judged non-reportable',
          '<strong>Exposure control plan</strong> — reviewed annually with documented consideration of safer devices and frontline employee input',
          '<strong>Safety data sheets</strong> — accessible to every employee on every shift, with no locked door in the way',
          '<strong>Credentials</strong> — licences, certifications, DEA registrations and immunisations current, with alerts set before expiry',
          '<strong>Compliance committee</strong> — met on schedule with dated minutes and closed action items',
          '<strong>Contingency plan</strong> — backups tested by actual restoration, not just verified as running',
          '<strong>Device encryption</strong> — every laptop, tablet and portable drive holding PHI encrypted, or the alternative documented'
        ], 'checklist-2') }),
    section({ h2: '<em>Quick checks</em><strong>worth doing this month</strong>',
      body: cards([
        { icon: 'search', title: 'Date your risk analysis', text: 'Find it and read the date and scope. If it predates your current EHR, a location change or a major system change, it no longer describes your environment — the single most cited HIPAA deficiency.' },
        { icon: 'doc', title: 'Walk to your SDS binder', text: 'Physically go where safety data sheets live and ask whether an evening staff member could reach them. Inaccessible SDS is among the most common OSHA findings in healthcare.' },
        { icon: 'users', title: 'Test one employee record', text: 'Pick a person and try to produce every course they completed with topic and date. If it takes more than a few minutes, an auditor’s request will take weeks.' },
        { icon: 'refresh', title: 'Check screening frequency', text: 'Confirm exclusion screening runs monthly rather than only at hire. Liability attaches from the effective date of exclusion, not from your discovery of it.' }
      ]) })
  ],
  cases: [
    { tag: 'Independent practice', title: 'One check, one significant gap', challenge: 'An administrator worked the annual checklist and found the risk analysis predated two system migrations.', approach: 'A current analysis was completed with findings tracked to closure.', result: 'The highest-exposure gap closed before anything tested it.' },
    { tag: 'Specialty group', title: 'Vendors nobody had listed', challenge: 'The vendor check was run from systems rather than the contract folder for the first time.', approach: 'Every system and workflow touching PHI was mapped to a vendor.', result: 'Three vendors with access and no agreement identified and brought under contract.' },
    { tag: 'Outpatient clinic', title: 'A locked door', challenge: 'The SDS check revealed the binder lived in an office that locked at 5pm while evening staff still handled chemicals.', approach: 'Safety data sheets moved to a virtual binder reachable from any workstation.', result: 'A common citation avoided before an inspection found it.' }
  ],
  faqs: [
    { q: 'Are these free to use?', a: 'Yes. No form, no registration. Gating practical compliance guidance behind a lead capture would be a strange thing to do.' },
    { q: 'How often should we work through the annual list?', a: 'Once a year at minimum, and again after any material change — a new EHR, a new location, a merger, or a significant incident.' },
    { q: 'Is a checklist enough on its own?', a: 'No. It tells you what to verify; it does not generate the evidence. The value is in what each check produces and retains, which is where a platform earns its place.' },
    { q: 'Can you run these with us?', a: `Yes — that is essentially what the free risk assessment is, conducted by an advisor. Call ${site.phoneDisplay} or request one online.` },
    { q: 'Do you have specialty-specific versions?', a: 'Yes. Risk areas differ substantially by specialty, and client checklists are configured to the procedures and materials each practice actually uses.' },
    { q: 'What if a check fails?', a: 'Note it, rank it by regulatory exposure, and fix the highest-exposure item first. Trying to close everything simultaneously is the most common reason remediation stalls.' }
  ],
  related: [
    { href: '/tips-faqs/', label: 'Compliance tips & FAQ', text: 'Short answers to frequent questions.' },
    { href: '/compliance-assessment/', label: 'Free risk assessment', text: 'An advisor works these with you.' },
    { href: '/common-hipaa-violations/', label: 'Common HIPAA violations', text: 'What these checks prevent.' },
    { href: '/blog/', label: 'Compliance blog', text: 'Longer-form guidance.' }
  ]
}));

/* ---------------- Additional tools ---------------- */
pages.push(buildPage({
  path: '/compliance-solution/additional-tools/',
  group: G, llmsLabel: 'Additional Tools',
  title: 'Additional Compliance Tools | HCP',
  description: 'Tools included alongside the core programs: document library, incident log, reporting, acknowledgement tracking and virtual binders.',
  breadcrumbs: [{ label: 'Solutions', href: '/compliance-solution/' }, { label: 'Additional Tools', href: '/compliance-solution/additional-tools/' }],
  eyebrow: 'Platform',
  h1: '<em>Additional tools</em><strong>included with your program</strong>',
  lead: 'The parts of the platform that rarely get demonstrated, and that clients end up using every week.',
  heroPhoto: { src: '/assets/img/site/band-walkthrough.webp', title: 'Additional compliance tools', width: 900, height: 600 },
  heroStat: 'Included with the core programs, not sold separately',
  sections: [
    section({ cls: 'sec-alt', h2: '<em>What else is in there</em><strong>beyond policies and training</strong>',
      body: cards([
        { icon: 'doc', title: 'Document library', text: 'Forms, notices, logs and templates stored with revision history and date stamps, so the version in force at any point is knowable rather than guessed.' },
        { icon: 'alert', title: 'Incident log', text: 'Record, investigate and disposition every incident — including those judged non-reportable, where the documented reasoning is the defence.' },
        { icon: 'chart', title: 'Reporting & dashboards', text: 'Completion by individual, department, site and organization, exportable for boards, payers, surveyors and investigators.' },
        { icon: 'check', title: 'Acknowledgement tracking', text: 'When a policy is issued or revised, affected staff are prompted and their acknowledgement is timestamped — the cheapest evidence to generate and the most commonly missing.' },
        { icon: 'book', title: 'Virtual binders', text: 'Safety data sheets and reference material reachable from any workstation, rather than locked in an office after hours.' },
        { icon: 'clock', title: 'Expiration alerts', text: 'Credentials, licences, insurance and required reviews all alert before the date rather than reporting after it.' }
      ]) })
  ],
  cases: [
    { tag: 'Audit response', title: 'One employee record, produced in minutes', challenge: 'An auditor requested the complete compliance history for named individuals.', approach: 'Acknowledgements, completions, certificates and screening results were exported from a single profile per person.', result: 'A complete response inside the deadline with no manual assembly.' },
    { tag: 'Policy revision', title: 'Evidence the change was communicated', challenge: 'A policy change needed to reach affected staff with proof of receipt.', approach: 'The revision triggered acknowledgement requests to the workforce members it applied to.', result: 'Timestamped acknowledgements recorded without anyone chasing signatures.' },
    { tag: 'Board reporting', title: 'A quarterly pack without the scramble', challenge: 'Preparing board compliance reporting took days of manual collation each quarter.', approach: 'Standing reports were configured against live completion and screening data.', result: 'The pack now exports in minutes.' }
  ],
  faqs: [
    { q: 'Are these included or extra?', a: 'Included with the core programs. They are not separately licensed modules.' },
    { q: 'Can we upload our own documents?', a: 'Yes. Your own forms and reference materials can live in the library with the same revision history and acknowledgement tracking.' },
    { q: 'Who can see the reports?', a: 'Access is role-based. Site leads typically see their own location; the compliance officer sees the organization.' },
    { q: 'Can we export everything?', a: 'Yes. Your policies, records, acknowledgements, certificates and logs are your records, exportable in standard formats on request.' },
    { q: 'Does the incident log handle non-reportable incidents?', a: 'Yes, and it should. A documented four-factor analysis showing why notification was not required is a defence; an undocumented decision is a gap.' },
    { q: 'How far back does history go?', a: 'For the duration of your program with us, and imported historical records where they could be validated during migration.' }
  ],
  related: [
    { href: '/compliance-solution/', label: 'SHIELD Compliance Solution', text: 'The platform overview.' },
    { href: '/credential-manager/', label: 'Credential Manager', text: 'Expiration tracking in depth.' },
    { href: '/compliance-solution/lms/', label: 'Learning Management System', text: 'Training assignment and records.' },
    { href: '/contact/', label: 'See a demo', text: 'Walk through it with an advisor.' }
  ]
}));

/* ---------------- HIPAA experts ---------------- */
pages.push(buildPage({
  path: '/hipaa-experts/',
  group: G, llmsLabel: 'HIPAA Experts',
  title: 'Talk to a HIPAA Expert | HCP',
  description: 'Speak with an experienced HIPAA compliance advisor about risk analysis, breach assessment, business associate agreements or an active audit.',
  breadcrumbs: [{ label: 'HIPAA Experts', href: '/hipaa-experts/' }],
  eyebrow: 'Expertise',
  h1: '<em>Talk to someone</em><strong>who has handled this before</strong>',
  lead: 'Most HIPAA questions have a clear answer. The difficulty is finding someone who will give it to you plainly.',
  primaryCta: { label: `Call ${site.phoneDisplay}`, href: `tel:${site.phoneE164}` },
  secondaryCta: { label: 'Request a consultation', href: '/contact/' },
  heroPhoto: { src: '/assets/img/site/band-sra.webp', title: 'HIPAA experts', width: 900, height: 600 },
  heroStat: 'Assigned advisors, included audit support, no per-incident fee',
  sections: [
    section({ cls: 'sec-alt', h2: '<em>What our advisors handle</em><strong>day to day</strong>',
      body: prose([
        'Our advisors come from healthcare operations, compliance, coding and workplace safety backgrounds. What the strongest ones share is not a particular credential but an instinct: when a client calls with a problem, they ask what actually happened before reaching for what the regulation says.',
        'Guidance that ignores operational reality gets ignored, and rightly.',
        '<h3>Questions we get constantly</h3>'
      ]) + checklist([
        'Is our Security Risk Analysis still valid after a system change?',
        'Does this vendor need a business associate agreement?',
        'A laptop was stolen — is this a reportable breach?',
        'A patient’s spouse is asking for results; what can we say?',
        'How do we handle a records request from a separated parent?',
        'We received an OCR data request — what do we do first?',
        'Can we text patients? Can we email records?',
        'What do we do about an employee who looked at a record they should not have?'
      ], 'checklist-2') })
  ],
  cases: [
    { tag: 'Same-day', title: 'A breach determination before the weekend', challenge: 'A practice discovered a potential impermissible disclosure late on a Friday.', approach: 'An advisor worked the four-factor assessment with them and documented the reasoning.', result: 'A defensible determination the same day rather than an anxious wait.' },
    { tag: 'One question', title: 'A call that cost nothing', challenge: 'An administrator wanted to know whether their risk analysis survived an EHR migration.', approach: 'An advisor reviewed scope and dates on a short call and answered directly.', result: 'A clear answer at no cost; they engaged months later when ready.' },
    { tag: 'Active audit', title: 'A federal request answered on time', challenge: 'A practice with no compliance staff received a 30-day OCR data request.', approach: 'The advisor team assembled the documentation and helped draft the response.', result: 'Closed with no corrective action plan and no penalty.' }
  ],
  faqs: [
    { q: 'Can I just ask one question?', a: 'Yes, and plenty of people do. Call and ask. We will give you a straight answer, and tell you if it needs a lawyer rather than us.' },
    { q: 'Are you a law firm?', a: 'No. We provide compliance program development, software, training and advisory support. We work alongside your counsel where a matter needs legal judgment.' },
    { q: 'What does it cost to talk to someone?', a: 'Nothing for an initial conversation or the risk assessment. For clients, advisory access is included with no per-incident fee.' },
    { q: 'How fast can you respond to an incident?', a: 'For clients, response is measured in hours and incident support is included. If you are not a client and have an active incident, call and we will tell you honestly whether we can help.' },
    { q: 'What credentials do advisors hold?', a: 'The team includes certified coders, privacy and security certified professionals, workplace safety specialists and experienced healthcare operations leaders. Specific credentials are available on request.' },
    { q: 'Will I get the same person each time?', a: 'You are assigned a team of three to five who know your organization, so you are not re-explaining context every call.' }
  ],
  related: [
    { href: '/compliance-solution/hipaa/', label: 'HIPAA Compliance', text: 'The program itself.' },
    { href: '/solutions/support/', label: 'Support', text: 'What included support covers.' },
    { href: '/our-team/', label: 'Our team', text: 'Who you would work with.' },
    { href: '/tips-faqs/', label: 'Tips & FAQ', text: 'Answers to common questions.' }
  ]
}));

export default pages;
