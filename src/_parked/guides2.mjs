import { buildPage, section, prose, checklist, cards } from '../shared.mjs';
import { abs } from '../layout.mjs';
import { site } from '../site.mjs';

const G = 'Guides & answers';
const crumb = { label: 'Compliance Tips & FAQ', href: '/tips-faqs/' };
const article = (slug, name, desc) => ({
  '@type': 'Article', '@id': abs(`/${slug}/`) + '#article',
  headline: name, description: desc,
  author: { '@id': abs('/#organization') }, publisher: { '@id': abs('/#organization') },
  mainEntityOfPage: { '@id': abs(`/${slug}/`) + '#webpage' }, inLanguage: 'en-US'
});
const pages = [];

/* ---------------- Healthcare compliance examples ---------------- */
pages.push(buildPage({
  path: '/healthcare-compliance-examples/',
  group: G, llmsLabel: 'Healthcare Compliance Examples',
  title: 'Healthcare Compliance Examples | HCP',
  description: 'Concrete examples of healthcare compliance in practice across HIPAA, OSHA and corporate compliance — what good looks like day to day.',
  breadcrumbs: [crumb, { label: 'Compliance Examples', href: '/healthcare-compliance-examples/' }],
  eyebrow: 'Compliance guide',
  h1: '<em>Healthcare compliance examples</em><strong>what it looks like in practice</strong>',
  lead: 'Compliance is easier to understand through examples than definitions. Here is what each obligation looks like on an ordinary Tuesday.',
  heroPhoto: { src: '/assets/img/site/feature-comprehensive.webp', title: 'Healthcare compliance examples', width: 1000, height: 563 },
  heroStat: 'Examples drawn from real client situations, anonymised',
  extraSchema: [article('healthcare-compliance-examples', 'Healthcare Compliance Examples', 'Concrete examples of healthcare compliance in practice.')],
  sections: [
    section({ cls: 'sec-alt',
      body: prose([
        'People ask what healthcare compliance actually <em>is</em> and get an answer about statutes. That is accurate and almost useless. Compliance is a set of ordinary operational behaviours, repeated, that happen to leave evidence behind. Here is what that looks like in each domain.',
        '<h3>HIPAA in practice</h3>',
        '<p><strong>Good:</strong> A patient’s spouse calls asking for test results. The front desk coordinator checks whether an authorisation is on file, finds none, and explains politely that she cannot share it without the patient’s authorisation — then documents the request. <strong>Bad:</strong> She recognises the voice, assumes it is fine, and shares the results.</p>',
        '<p><strong>Good:</strong> A laptop is stolen from a car. It was encrypted, so the practice documents the loss, confirms the encryption status, and concludes the information was not unsecured. <strong>Bad:</strong> The laptop was unencrypted, nobody is certain what was on it, and the practice spends six weeks reconstructing that to decide whether to notify.</p>',
        '<h3>OSHA in practice</h3>',
        '<p><strong>Good:</strong> A medical assistant sustains a needlestick. She reports it immediately, the post-exposure evaluation procedure is followed, the sharps injury log is updated, and the device is flagged for consideration in the annual safer-device review. <strong>Bad:</strong> She rinses it, says nothing because she does not want the paperwork, and the same device injures someone else four months later.</p>',
        '<p><strong>Good:</strong> A new disinfectant arrives. It is added to the chemical inventory, its safety data sheet goes into the virtual binder, secondary containers get labelled, and affected staff are told. <strong>Bad:</strong> It goes under the sink.</p>',
        '<h3>Corporate compliance in practice</h3>',
        '<p><strong>Good:</strong> A coder notices a provider consistently billing a level that the documentation does not support. She raises it through the compliance channel, it is investigated, the provider receives education, and a follow-up audit confirms the pattern changed. <strong>Bad:</strong> She mentions it to a colleague, nothing happens, and it surfaces two years later in a payer audit with extrapolated repayment.</p>',
        '<p><strong>Good:</strong> Monthly exclusion screening flags a potential match on a contractor. It is worked through a documented verification process using additional identifiers, resolved as a false positive, and the resolution is recorded. <strong>Bad:</strong> Screening was run at hire in 2019 and never since.</p>',
        '<h3>What the good examples have in common</h3>',
        '<p>None of them require heroics. In each case someone followed a procedure that existed, and the act of following it produced a record. That is the whole mechanism: compliance that depends on people remembering to do something extra fails, and compliance that falls out of ordinary work does not.</p>'
      ]) })
  ],
  cases: [
    { tag: 'Front desk', title: 'A records request from a separated parent', challenge: 'Staff handled custody-related requests inconsistently, occasionally disclosing where they should not have.', approach: 'A documented decision workflow was built around state law and custody documentation, with training on the real scenarios.', result: 'Consistent, documented handling of a recurring and legally sensitive situation.' },
    { tag: 'Clinical', title: 'A needlestick reported properly', challenge: 'Under-reporting meant the practice had no accurate picture of device risk.', approach: 'Reporting was made frictionless and non-punitive, with the log reviewed at each safety meeting.', result: 'Reporting rose, and the annual safer-device review finally had real data behind it.' },
    { tag: 'Billing', title: 'A pattern caught internally', challenge: 'A coding pattern sat outside peer norms with nobody formally responsible for noticing.', approach: 'Recurring audits with a reporting channel surfaced it, followed by provider education.', result: 'Corrected before any payer review began, with the remediation documented.' }
  ],
  faqs: [
    { q: 'What is healthcare compliance in simple terms?', a: 'Following the rules that govern patient privacy, workplace safety and billing integrity — and being able to demonstrate you followed them. The second half is the part organizations underestimate.' },
    { q: 'What are the main areas?', a: 'HIPAA privacy and security, OSHA workplace safety, and corporate compliance covering billing integrity and federal program requirements. Most organizations carry all three.' },
    { q: 'Who is responsible for compliance?', a: 'Formally, a designated compliance officer. Practically, everyone — most violations happen at the front desk, in the treatment room or in the billing queue rather than in the compliance office.' },
    { q: 'What is the most common failure?', a: 'Not knowing something, but being unable to prove you did it. Training that happened but was never recorded per person is the clearest example.' },
    { q: 'How do small practices manage this?', a: 'The obligations do not scale down with headcount, so small practices either dedicate real capacity or buy the expertise. Automating evidence capture is what makes it tractable either way.' },
    { q: 'Where should we start?', a: 'With an honest assessment of where you stand. Our free risk assessment produces a written gap analysis prioritised by regulatory exposure.' }
  ],
  related: [
    { href: '/common-hipaa-violations/', label: 'Common HIPAA violations', text: 'What goes wrong most often.' },
    { href: '/checklists/', label: 'Compliance checklists', text: 'What to verify and how often.' },
    { href: '/compliance-assessment/', label: 'Free risk assessment', text: 'See where you stand.' },
    { href: '/tips-faqs/', label: 'Tips & FAQ', text: 'More plain answers.' }
  ]
}));

/* ---------------- Automating healthcare compliance ---------------- */
pages.push(buildPage({
  path: '/automating-healthcare-compliance/',
  group: G, llmsLabel: 'Automating Compliance',
  title: 'Automating Healthcare Compliance | HCP',
  description: 'What compliance automation should and should not do, which tasks automate cleanly, and where human judgment remains essential.',
  breadcrumbs: [crumb, { label: 'Automating Compliance', href: '/automating-healthcare-compliance/' }],
  eyebrow: 'Compliance guide',
  h1: '<em>Automating compliance</em><strong>what should and should not be automated</strong>',
  lead: 'Automation is genuinely transformative for some compliance work and actively dangerous for the rest. The distinction is worth getting right.',
  heroPhoto: { src: '/assets/img/site/band-walkthrough.webp', title: 'Automating healthcare compliance', width: 900, height: 600 },
  heroStat: 'Automate the mechanical; keep judgment human',
  extraSchema: [article('automating-healthcare-compliance', 'Automating Healthcare Compliance', 'What compliance automation should and should not do.')],
  sections: [
    section({ cls: 'sec-alt',
      body: prose([
        'Compliance contains two very different kinds of work. One is mechanical: assigning, reminding, tracking, expiring, logging, reporting. The other requires judgment: interpreting a rule against your specific circumstances, deciding whether an incident is reportable, determining whether a vendor is a business associate. Automating the first is the single biggest efficiency gain available. Automating the second produces confident, well-formatted wrong answers.',
        '<h3>Automates cleanly</h3>',
        '<ul>' +
        '<li><strong>Training assignment</strong> — by role, department and location, firing on hire date and on policy change</li>' +
        '<li><strong>Reminders and escalation</strong> — scheduled, escalating to managers, without anyone remembering to send them</li>' +
        '<li><strong>Acknowledgement capture</strong> — a policy revision prompts affected staff and timestamps the response</li>' +
        '<li><strong>Expiration alerts</strong> — licences, certifications, insurance, scheduled reviews, alerting before rather than after</li>' +
        '<li><strong>Exclusion screening</strong> — monthly, across employees, contractors and vendors, with dated retention</li>' +
        '<li><strong>Reporting</strong> — completion by person, department and site, exported on demand</li>' +
        '</ul>',
        '<h3>Should stay human</h3>',
        '<ul>' +
        '<li><strong>Breach determination</strong> — the four-factor assessment turns on specifics an automated tool cannot weigh, and the documented reasoning is your defence</li>' +
        '<li><strong>Risk analysis</strong> — a questionnaire producing a PDF is not an accurate and thorough assessment of your environment</li>' +
        '<li><strong>Policy customization</strong> — a generated policy that does not describe your workflows creates a documented deviation, which is worse than none</li>' +
        '<li><strong>Investigations</strong> — hotline reports and incidents require judgment about credibility, scope and remedy</li>' +
        '<li><strong>Scope determinations</strong> — whether a vendor is a business associate depends on what they actually do with the data</li>' +
        '</ul>',
        '<h3>A note on AI tools</h3>',
        '<p>The most common incident pattern we now see is not a vendor failure. It is a staff member pasting patient information into a general-purpose consumer AI tool that is not under agreement and may retain what it receives. That is an impermissible disclosure, and it happens because nobody told them not to. Inventory what is actually in use, execute agreements for anything touching PHI, write an acceptable use policy, and train on it.</p>',
        '<h3>The test worth applying</h3>',
        '<p>Ask what happens when the automation is wrong. A missed reminder is recoverable. An incorrect breach determination, made confidently and acted on, is not. Automate where errors are cheap and visible; keep judgment where they are expensive and quiet.</p>'
      ]) })
  ],
  cases: [
    { tag: 'Multi-site practice', title: 'Chasing replaced by escalation', challenge: 'An administrator spent most of a day weekly chasing training completion across sites.', approach: 'Role-based assignment with automated manager escalation replaced manual tracking.', result: 'Completion became visible weekly instead of discovered annually, and the time went back to operations.' },
    { tag: 'AI exposure', title: 'A tool nobody had approved', challenge: 'An inventory found staff pasting clinical notes into a consumer AI assistant with no agreement in place.', approach: 'An acceptable use policy was written, approved tools named, and staff trained and acknowledged.', result: 'An unaddressed disclosure route closed before it produced an incident.' },
    { tag: 'Screening', title: 'Monthly instead of once', challenge: 'Exclusion screening had run at hire and never again, leaving years of exposure.', approach: 'A baseline screen ran across the roster, then monthly recurring screening with dated retention.', result: 'A clean baseline and continuous evidence going forward.' }
  ],
  faqs: [
    { q: 'What compliance tasks automate best?', a: 'Anything mechanical and repetitive: assignment, reminders, acknowledgement capture, expiration alerts, recurring screening and reporting. These are also the tasks that consume the most administrative time.' },
    { q: 'Can AI write our policies?', a: 'It can produce something that reads like a policy. Whether it describes your actual workflows, your state’s requirements and your systems is a different question — and a policy that does not is a documented deviation.' },
    { q: 'Can software determine whether a breach is reportable?', a: 'It can structure the four-factor assessment and record it. The determination itself turns on specifics that need judgment, and the documented reasoning is what defends the conclusion later.' },
    { q: 'Is a self-service risk analysis sufficient?', a: 'Rarely. A questionnaire producing a PDF is not an accurate and thorough assessment of risks to ePHI in your environment, and inadequate risk analysis remains the most cited HIPAA deficiency.' },
    { q: 'What about AI tools our staff already use?', a: 'Inventory what is genuinely in use — this reliably surprises people — then execute agreements for anything touching PHI, write an acceptable use policy naming approved tools, and train on it.' },
    { q: 'Does HCP use AI on client data?', a: 'Client compliance data is not used to train models, and is not disclosed to other clients or third parties except as you direct, as our agreement requires, or as law requires.' }
  ],
  related: [
    { href: '/unpacking-ai-compliance-what-every-business-needs-to-know/', label: 'AI compliance', text: 'HIPAA and AI tools in depth.' },
    { href: '/compliance-solution/', label: 'SHIELD Compliance Solution', text: 'What we automate.' },
    { href: '/solutions/support/', label: 'Support', text: 'Where human judgment comes in.' },
    { href: '/privacypolicy/', label: 'Privacy policy', text: 'How we handle your data.' }
  ]
}));

export default pages;
