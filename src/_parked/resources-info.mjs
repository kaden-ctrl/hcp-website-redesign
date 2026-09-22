import { buildPage, section, prose, checklist, cards } from '../shared.mjs';
import { abs } from '../layout.mjs';
import { site } from '../site.mjs';

const G = 'Guides & answers';
const crumb = { label: 'Compliance Tips & FAQ', href: '/tips-faqs/' };

/* Informational pages that answer a specific question. These carry real
   search intent, so each gets substantive original guidance rather than a
   thin landing page. */
const guides = [
  {
    slug: 'common-hipaa-violations', name: 'Common HIPAA Violations',
    photo: 'band-incident',
    title: 'Most Common HIPAA Violations | HCP',
    desc: 'The HIPAA violations that generate the most enforcement activity, why they happen, and the specific control that prevents each one.',
    h1: '<em>The HIPAA violations</em><strong>that actually get organizations fined</strong>',
    lead: 'Enforcement concentrates in a surprisingly small number of places. These are the ones that recur, and what prevents each.',
    intro: 'Most HIPAA violations are not dramatic. They are ordinary operational gaps that persisted because nobody owned them, and they surface when a complaint, a breach or an audit forces someone to look. The pattern repeats across organizations of every size.',
    blocks: [
      ['A stale or missing Security Risk Analysis', 'This is the single most frequently cited deficiency in federal enforcement. The failure is rarely the total absence of an analysis — it is an analysis performed years ago, before the current EHR, before a new location, before a cloud migration. An analysis that does not describe your current environment is not an accurate assessment of your current risk. <strong>The control:</strong> perform it at least annually and again whenever something material changes, and pair every finding with a risk management plan that has an owner and a date.'],
      ['Business associate agreements that do not exist', 'Practices routinely discover vendors with access to protected health information and no executed agreement — the shredding service, the answering service, the cloud backup, the IT contractor. The gap exists because the vendor list was built from the contract folder rather than from the systems people actually use. <strong>The control:</strong> inventory vendors by walking your workflows and systems, not your filing cabinet, then track renewals.'],
      ['Impermissible disclosure to family members', 'Front desk and clinical staff face this constantly: a spouse calls asking about results, a parent asks about an adult child, a relative arrives to collect records. Staff want to be helpful, and the rules are genuinely nuanced. <strong>The control:</strong> a documented decision workflow plus training on the real scenarios staff encounter, rather than a generic module that never mentions them.'],
      ['Unencrypted devices', 'A lost or stolen laptop holding PHI is a reportable breach. The same device encrypted is generally not, because the information is not considered unsecured. Encryption is an addressable specification, which is often misread as optional. <strong>The control:</strong> encrypt laptops, tablets and portable media, and document the decision where you determine an alternative is reasonable and appropriate.'],
      ['Snooping in records', 'Workforce members accessing records they have no business reason to open — a neighbour, a colleague, a public figure. It is detectable through audit logs, and it is one of the clearest violations to establish. <strong>The control:</strong> review access logs on a schedule, make it known that reviews happen, and apply your sanction policy consistently when they surface something.'],
      ['Delayed or missing breach notification', 'The Breach Notification Rule sets a maximum of 60 days from discovery for individual notice, and the clock starts at discovery, not at confirmation. Organizations lose time deciding whether an incident qualifies. <strong>The control:</strong> log every incident, run the four-factor assessment promptly, and document the reasoning even when you conclude notification is not required.'],
      ['Training that cannot be evidenced', 'Staff may genuinely have been trained, but a sign-in sheet from a staff meeting three years ago does not establish who received what, on which topic, when. <strong>The control:</strong> per-individual, per-topic, date-stamped completion records with stored certificates.'],
      ['Improper disposal', 'Paper records in an unsecured bin, devices discarded without sanitisation, a filing cabinet sold with contents intact. Disposal is the step that gets skipped when an office moves or closes. <strong>The control:</strong> a documented disposal procedure covering paper and electronic media, with agreements in place for any vendor handling it.']
    ],
    faqs: [
      { q: 'What is the most common HIPAA violation?', a: 'An inadequate or outdated Security Risk Analysis is the most frequently cited deficiency in federal enforcement actions. It is also among the most straightforward to fix, which is why it is worth checking the date on yours first.' },
      { q: 'Can a single employee cause a violation?', a: 'Yes, and the organization generally bears responsibility for it. That is precisely why training, access controls, audit log review and a consistently applied sanction policy matter — they are the controls that demonstrate the organization took reasonable steps.' },
      { q: 'What are the penalty tiers?', a: 'Civil monetary penalties are tiered by culpability, from unknowing violations through wilful neglect, with per-violation amounts that are adjusted annually for inflation and annual caps per identical provision. Wilful neglect that is not corrected carries the highest exposure.' },
      { q: 'Does self-reporting reduce penalties?', a: 'Prompt correction is a recognised mitigating factor, and a documented compliance program demonstrably operating in good faith weighs in your favour. Discovering and correcting an issue yourself is materially better than having it found for you.' },
      { q: 'How long do we have to respond to an OCR request?', a: 'Data requests typically carry a 10 to 30 day deadline depending on scope. Organizations that maintain evidence continuously answer inside it; those reconstructing records under deadline frequently cannot.' },
      { q: 'Is an accidental disclosure always a breach?', a: 'No. An impermissible use or disclosure is presumed to be a breach unless you can demonstrate a low probability that the information was compromised, based on a documented four-factor risk assessment. Some incidents also fall under specific exceptions.' }
    ]
  },
  {
    slug: 'hipaa-stands-for', name: 'What HIPAA Stands For',
    photo: 'band-sra',
    title: 'What Does HIPAA Stand For? | HCP',
    desc: 'HIPAA stands for the Health Insurance Portability and Accountability Act. What each rule requires, and who has to comply.',
    h1: '<em>What does HIPAA</em><strong>actually stand for?</strong>',
    lead: 'HIPAA is the Health Insurance Portability and Accountability Act of 1996 — and the portability half is the part most people have forgotten.',
    intro: 'HIPAA stands for the <strong>Health Insurance Portability and Accountability Act</strong>, enacted in 1996. The name reflects its original purpose: making health coverage portable between jobs. The privacy and security obligations everyone now associates with the acronym came from the administrative simplification provisions, and were built out through rules issued over the following two decades.',
    blocks: [
      ['The Privacy Rule', 'Governs how protected health information may be used and disclosed. It establishes the minimum necessary standard, defines permitted disclosures, and creates individual rights — including the right of access to your own designated record set, the right to request amendment, and the right to an accounting of certain disclosures.'],
      ['The Security Rule', 'Applies specifically to electronic protected health information and requires administrative, physical and technical safeguards. Some specifications are required; others are addressable, meaning you implement them where reasonable and appropriate, or document why not and adopt an equivalent alternative.'],
      ['The Breach Notification Rule', 'Requires notification to affected individuals, to the Secretary of Health and Human Services, and in larger breaches to the media. An impermissible use or disclosure is presumed to be a breach unless a documented four-factor risk assessment demonstrates a low probability of compromise.'],
      ['The Enforcement Rule and HITECH', 'Establishes investigation procedures and the tiered penalty structure. The HITECH Act and the subsequent Omnibus Rule extended direct liability to business associates and strengthened enforcement considerably.'],
      ['Who has to comply', 'Covered entities — health plans, health care clearinghouses, and providers who transmit health information electronically in connection with covered transactions — plus business associates who create, receive, maintain or transmit PHI on their behalf, and their subcontractors down the chain.']
    ],
    faqs: [
      { q: 'What does HIPAA stand for?', a: 'The Health Insurance Portability and Accountability Act of 1996. It is frequently misspelled "HIPPA"; the correct spelling has two As, reflecting Accountability.' },
      { q: 'Is HIPAA the same as the Privacy Rule?', a: 'No. The Privacy Rule is one rule issued under HIPAA. The Security Rule, Breach Notification Rule and Enforcement Rule are separate, and each carries its own obligations.' },
      { q: 'Does HIPAA apply to employers?', a: 'Not to employment records generally. An employer is only subject to HIPAA in its capacity as a group health plan sponsor handling PHI, not for ordinary personnel files, which are governed by other law.' },
      { q: 'Does HIPAA cover paper records?', a: 'Yes. The Privacy Rule applies to protected health information in any form. The Security Rule is specific to electronic PHI, but paper is fully covered by privacy and disposal requirements.' },
      { q: 'Who enforces HIPAA?', a: 'The Office for Civil Rights within the Department of Health and Human Services handles enforcement, with the Department of Justice taking criminal matters. State attorneys general also have authority to bring actions.' },
      { q: 'What is PHI?', a: 'Protected health information: individually identifiable health information relating to a person’s physical or mental health, the provision of care, or payment for care. The identifiers that make it individually identifiable are specifically enumerated.' }
    ]
  },
  {
    slug: 'data-breach-consequences', name: 'Consequences of a Data Breach',
    photo: 'band-walkthrough',
    title: 'Healthcare Data Breach Consequences | HCP',
    desc: 'What a healthcare data breach actually costs: regulatory penalties, notification obligations, operational disruption and patient trust.',
    h1: '<em>What a data breach</em><strong>actually costs a practice</strong>',
    lead: 'The penalty is rarely the largest line item. The notification, the investigation, the remediation and the lost patients usually exceed it.',
    intro: 'Organizations tend to think about breach exposure as a fine. In practice the regulatory penalty is one component among several, and frequently not the biggest. Understanding the full cost is what makes preventative spending look proportionate.',
    blocks: [
      ['Notification costs', 'Individual notice is required without unreasonable delay and no later than 60 days from discovery. For breaches affecting 500 or more residents of a state or jurisdiction, media notice is required as well. The direct cost of identifying affected individuals, producing notices and staffing the resulting call volume scales with the size of the breach.'],
      ['Regulatory penalties', 'Civil monetary penalties are tiered by culpability, from unknowing through wilful neglect, with per-violation amounts adjusted annually and annual caps per identical provision. State attorneys general may bring separate actions, and some state laws carry their own penalties.'],
      ['Investigation and remediation', 'Forensic investigation, outside counsel, credit monitoring for affected individuals, and the technical remediation the incident exposes. A corrective action plan imposed by regulators can run for years and carries its own ongoing reporting burden.'],
      ['Operational disruption', 'Ransomware in particular can halt scheduling, documentation and billing for days or weeks. Revenue lost during downtime, and the backlog afterwards, frequently exceeds every other category combined.'],
      ['Patient trust and attrition', 'Harder to quantify but real. Patients who lose confidence in how their information is handled do leave, and in a competitive market the reputational effect persists well beyond the news cycle.'],
      ['Contractual consequences', 'For business associates, a breach can trigger notification obligations under every client BAA simultaneously, and may breach service commitments in ways that end relationships.']
    ],
    faqs: [
      { q: 'How much does a healthcare data breach cost?', a: 'It varies enormously with size and type, but the total is generally dominated by notification, investigation, remediation and downtime rather than by the regulatory penalty itself. Ransomware incidents skew highest because of operational disruption.' },
      { q: 'When do we have to notify?', a: 'Individual notice without unreasonable delay and no later than 60 days from discovery. Breaches affecting 500 or more residents of a state also require media notice and prompt notice to the Secretary; smaller breaches are reported on an annual schedule.' },
      { q: 'Does cyber insurance cover this?', a: 'Policies commonly cover forensic investigation, notification, credit monitoring and legal costs, often with sub-limits. Coverage for regulatory penalties varies by policy and jurisdiction. Read the exclusions carefully, particularly around unencrypted devices and unpatched systems.' },
      { q: 'What reduces the cost most?', a: 'Encryption, because encrypted data is generally not considered unsecured and a loss may not be a reportable breach at all. After that: tested backups, which determine whether a ransomware incident is a bad week or an existential event.' },
      { q: 'Do we have to notify if we are a business associate?', a: 'You must notify the covered entity, on the timeline your BAA specifies — frequently far shorter than the regulatory default. The covered entity then handles individual notification unless your agreement assigns it to you.' },
      { q: 'How fast can HCP help during an incident?', a: `Call your advisor team directly. Incident and breach support is included in your subscription and response is measured in hours. If you are not a client and have an active incident, call ${site.phoneDisplay}.` }
    ]
  }
];

const pages = guides.map((g) => buildPage({
  path: `/${g.slug}/`,
  group: G,
  llmsLabel: g.name,
  title: g.title,
  description: g.desc.slice(0, 155),
  breadcrumbs: [crumb, { label: g.name, href: `/${g.slug}/` }],
  eyebrow: 'Compliance guide',
  h1: g.h1,
  lead: g.lead,
  heroPhoto: { src: `/assets/img/site/${g.photo}.webp`, title: g.name, width: 900, height: 600 },
  heroStat: 'Written by the HCP advisory team',
  extraSchema: [{
    '@type': 'Article',
    '@id': abs(`/${g.slug}/`) + '#article',
    headline: g.name,
    description: g.desc,
    author: { '@id': abs('/#organization') },
    publisher: { '@id': abs('/#organization') },
    mainEntityOfPage: { '@id': abs(`/${g.slug}/`) + '#webpage' },
    inLanguage: 'en-US'
  }],
  sections: [
    section({
      cls: 'sec-alt',
      body: prose([g.intro, ...g.blocks.map(([h, b]) => `<h3>${h}</h3><p>${b}</p>`)])
    })
  ],
  cases: [
    { tag: 'Independent practice', title: 'A gap closed before it was tested', challenge: 'A practice reviewed this list and found its security risk analysis predated two system migrations.', approach: 'A current analysis was completed against the real environment, with findings tracked to closure.', result: 'The organization’s highest-exposure gap closed before any inquiry tested it.' },
    { tag: 'Specialty group', title: 'Vendors nobody had inventoried', challenge: 'A group assumed its business associate agreements were complete.', approach: 'Vendors were mapped from systems and workflows rather than from the contract folder.', result: 'Three vendors with PHI access and no agreement identified and brought under contract.' },
    { tag: 'Business associate', title: 'Evidence ready before it was asked for', challenge: 'A vendor could not produce training or risk analysis documentation during a client security review.', approach: 'A documented program was implemented with evidence generated as work happens.', result: 'Subsequent reviews became a retrieval exercise rather than a project.' }
  ],
  faqs: g.faqs,
  related: [
    { href: '/tips-faqs/', label: 'Compliance tips & FAQ', text: 'More answers to common questions.' },
    { href: '/compliance-solution/hipaa/', label: 'HIPAA Compliance', text: 'The program that prevents these.' },
    { href: '/compliance-assessment/', label: 'Free risk assessment', text: 'Check your own exposure.' },
    { href: '/blog/', label: 'Compliance blog', text: 'Practical guidance from our advisors.' }
  ]
}));

export default pages;
