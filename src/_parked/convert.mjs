import { buildPage, section, prose, checklist, cards, steps } from '../shared.mjs';
import { abs } from '../layout.mjs';
import { site } from '../site.mjs';

const G = 'Get started';
const svc = (name, desc, url) => ({
  '@type': 'Service', '@id': abs(url) + '#service', name, description: desc, url: abs(url),
  serviceType: 'Healthcare compliance', provider: { '@id': abs('/#organization') },
  areaServed: { '@type': 'Country', name: 'United States' }
});
const pages = [];

/* ---------------- Get compliant ---------------- */
pages.push(buildPage({
  path: '/getcompliant/',
  group: G, llmsLabel: 'Get Compliant',
  title: 'Get Compliant | Healthcare Compliance Pros',
  description: 'A clear path from wherever your compliance program is today to a documented, defensible one — usually inside three weeks.',
  breadcrumbs: [{ label: 'Get Compliant', href: '/getcompliant/' }],
  eyebrow: 'Get started',
  h1: '<em>Get compliant</em><strong>without stopping everything else</strong>',
  lead: 'Most practices know roughly what they should be doing. What they lack is a sequence, and the time to run it.',
  heroPhoto: { src: '/assets/img/site/feature-map.webp', title: 'Get compliant', width: 1400, height: 812 },
  heroStat: 'Most organizations are live in two to three weeks',
  extraSchema: [svc('Compliance Program Implementation', 'Guided implementation of a HIPAA, OSHA and corporate compliance program for healthcare organizations.', '/getcompliant/')],
  sections: [
    section({ cls: 'sec-alt', h2: '<em>The sequence that works</em><strong>when you have no spare capacity</strong>',
      body: prose([
        'Compliance programs fail far more often from sequencing than from ignorance. Organizations start with whatever feels most urgent, run out of time, and end up with three half-finished workstreams and no evidence for any of them.',
        'This is the order we run, and the reason for it: establish where you actually stand, fix the highest-exposure gap first, then build the machinery that keeps it current without further heroics.'
      ]) + steps([
        { title: 'Find out where you stand', text: 'A free risk assessment produces a written gap analysis against HIPAA, OSHA and corporate compliance. Twenty minutes, no obligation, findings yours either way.' },
        { title: 'Close the highest-exposure gap', text: 'Usually the security risk analysis or missing business associate agreements. We fix the thing most likely to be asked about first, not the easiest thing.' },
        { title: 'Build the documentation', text: 'Policies customized to your specialty, size and state — replacing templates that describe an organization you are not.' },
        { title: 'Assign training by role', text: 'Staff receive what applies to them, with automated reminders. Completion becomes visible weekly rather than discovered annually.' },
        { title: 'Let evidence accumulate', text: 'Acknowledgements, completions, screenings and inspections generate date-stamped records as work happens, so an audit request is a retrieval rather than a reconstruction.' }
      ]) })
  ],
  cases: [
    { tag: 'Four-provider practice', title: 'From nothing documented to audit-ready', challenge: 'A practice had policies written years earlier and no record of training, acknowledgements or risk analysis.', approach: 'The sequence above ran over three weeks, starting with a current risk analysis.', result: 'A documented program producing evidence continuously, without anyone taking time off clinic to build it.' },
    { tag: 'Deadline-driven', title: 'In place before a payer deadline', challenge: 'A group needed a documented program before a payer contract start date six weeks out.', approach: 'Discovery was scheduled within days and policy work ran parallel to roster configuration.', result: 'Operating before the deadline, with training assigned and acknowledgements underway.' },
    { tag: 'Switching vendors', title: 'Migrating without losing history', challenge: 'A practice leaving a prior vendor worried about losing years of training records.', approach: 'Historical records were validated where defensible and imported alongside the new program.', result: 'Evidence continuity preserved across the transition.' }
  ],
  faqs: [
    { q: 'How long does it actually take?', a: 'Most organizations are live in two to three weeks from the discovery session. Your team’s involvement is roughly a two-hour discovery, a roster export and a one-hour dashboard walkthrough.' },
    { q: 'What if we are starting from nothing?', a: 'That is a common starting point and in some ways simpler — there is no inaccurate documentation to unpick. Your advisor builds the program from your actual workflows.' },
    { q: 'What if we already have a program?', a: 'Your advisor reviews it, keeps what remains accurate, rebuilds what does not, and imports historical training records where they can be validated.' },
    { q: 'Do we need to fix everything at once?', a: 'No, and trying to is why programs stall. Findings are prioritised by regulatory exposure so you close the things most likely to be asked about first.' },
    { q: 'What does it cost?', a: `Pricing scales with headcount and which programs you license. Call ${site.phoneDisplay} and we will quote against what you actually need.` },
    { q: 'Can we start with just the assessment?', a: 'Yes, and many do. The assessment is free, carries no obligation, and the written findings are yours whether or not you go further.' }
  ],
  related: [
    { href: '/compliance-assessment/', label: 'Free risk assessment', text: 'Step one, at no cost.' },
    { href: '/compliance-solution/', label: 'SHIELD Compliance Solution', text: 'What you are implementing.' },
    { href: '/solutions/support/', label: 'Support', text: 'Who helps you run it.' },
    { href: '/contact/', label: 'Talk to an advisor', text: 'Start the conversation.' }
  ]
}));

/* ---------------- ROI ---------------- */
pages.push(buildPage({
  path: '/roi/',
  group: G, llmsLabel: 'Return on Investment',
  title: 'The ROI of Healthcare Compliance | HCP',
  description: 'How to think about compliance spend: avoided penalties, recovered administrative time, protected revenue and reduced coding risk.',
  breadcrumbs: [{ label: 'Return on Investment', href: '/roi/' }],
  eyebrow: 'Value',
  h1: '<em>What compliance actually returns</em><strong>when you do it properly</strong>',
  lead: 'Compliance is usually justified as insurance against a penalty. That undersells it, and it is the weakest part of the argument.',
  heroPhoto: { src: '/assets/img/site/aud-pe-2.webp', title: 'Compliance return on investment', width: 900, height: 600 },
  heroStat: 'Four categories of return, only one of which is avoided penalties',
  sections: [
    section({ cls: 'sec-alt', h2: '<em>Four returns</em><strong>and the order they usually arrive in</strong>',
      body: prose([
        'Framing compliance purely as penalty avoidance makes it a grudge purchase competing against things that generate revenue. It also happens to be the least reliable part of the case, because most organizations correctly assume they will not be audited this year.',
        'The returns that actually show up are more mundane and more certain.',
        '<h3>1. Administrative time recovered</h3><p>The clearest and fastest return. An administrator manually tracking training, chasing acknowledgements, rebuilding rosters and assembling records for a payer request is spending hours weekly on work that automates cleanly. That time has a direct cost and an opportunity cost.</p>',
        '<h3>2. Coding accuracy, in both directions</h3><p>Audits find undercoding as often as overcoding. Providers who bill conservatively out of caution after a prior scare leave documented, earned revenue uncollected. Correcting that is a direct, measurable return that frequently exceeds the subscription.</p>',
        '<h3>3. Revenue protected from disruption</h3><p>A ransomware incident that halts scheduling, documentation and billing for a week costs more than most compliance programs cost in a decade. Tested backups and a documented contingency plan are the difference between a bad week and an existential one.</p>',
        '<h3>4. Penalties and repayment avoided</h3><p>Real, but probabilistic. The more useful framing is that identified overpayments generally must be returned within 60 days of identification — so finding issues internally bounds the exposure, whereas having them found for you does not.</p>',
        '<h3>What a defensible calculation looks like</h3><p>Estimate administrative hours currently spent on compliance tasks and price them at loaded cost. Add the measured result of a coding audit, if you have run one. Treat breach and penalty avoidance as risk reduction rather than as a line item, because presenting a probabilistic number as certain revenue undermines the rest of the case.</p>'
      ]) })
  ],
  cases: [
    { tag: 'Family medicine', title: 'Undercoding corrected', challenge: 'Providers consistently billed below what their documentation supported, following a prior audit scare.', approach: 'An audit quantified documented-but-unbilled complexity per provider, followed by targeted education.', result: 'Coding accuracy improved in both directions, supported by documentation rather than by caution.' },
    { tag: 'Multi-site group', title: 'Administrative hours returned', challenge: 'A practice administrator spent most of a day each week chasing training completion across sites.', approach: 'Role-based assignment with automated escalation replaced manual tracking.', result: 'That time returned to operations, with completion visible on a dashboard instead.' },
    { tag: 'After an incident', title: 'Downtime bounded by a tested plan', challenge: 'An organization suffered a ransomware event affecting scheduling and billing.', approach: 'A tested backup and contingency plan meant restoration followed a documented procedure.', result: 'Operations resumed in days rather than weeks, which dominated every other cost in the event.' }
  ],
  faqs: [
    { q: 'What does compliance software cost?', a: `Pricing scales with headcount and the programs you license, so a five-person practice pays a fraction of what a multi-site group pays. Call ${site.phoneDisplay} for a quote against your actual size.` },
    { q: 'How do we justify it to ownership?', a: 'Lead with recovered administrative time and coding accuracy, which are measurable. Treat penalty avoidance as risk reduction rather than as projected revenue — overstating it weakens an otherwise strong case.' },
    { q: 'Can you quantify our coding exposure first?', a: 'Yes. A coding audit measures documented-versus-billed levels per provider and produces a financial estimate in both directions, which is usually the most concrete number available.' },
    { q: 'Is there a payback period?', a: 'It depends heavily on your starting point. Organizations recovering significant administrative time or correcting a coding pattern typically see it quickly; those already well run are buying risk reduction, which is a different calculation.' },
    { q: 'What is the cost of doing nothing?', a: 'Unbounded, which is precisely the problem with it. The costs that actually materialise are usually notification, investigation, remediation and downtime rather than the penalty itself.' },
    { q: 'Do you offer a trial?', a: 'We offer a free risk assessment instead, which we think is more useful — you get a written gap analysis of your own program rather than a tour of software.' }
  ],
  related: [
    { href: '/coding-compliance/', label: 'SENTRY Coding Intelligence', text: 'Where the measurable return usually is.' },
    { href: '/data-breach-consequences/', label: 'Breach consequences', text: 'What the downside actually costs.' },
    { href: '/compliance-assessment/', label: 'Free risk assessment', text: 'Quantify your starting point.' },
    { href: '/contact/', label: 'Get a quote', text: 'Pricing for your size.' }
  ]
}));

/* ---------------- Referral program ---------------- */
pages.push(buildPage({
  path: '/referral-program/',
  group: G, llmsLabel: 'Referral Program',
  title: 'Referral Program | Healthcare Compliance Pros',
  description: 'Refer a healthcare organization to HCP. Simple introduction, compensation on closed business, and a client experience that reflects well on you.',
  breadcrumbs: [{ label: 'Referral Program', href: '/referral-program/' }],
  eyebrow: 'Referrals',
  h1: '<em>Refer a practice</em><strong>you would want us to look after</strong>',
  lead: 'A referral is your reputation, not just an introduction. That is the standard we try to meet with anyone you send.',
  primaryCta: { label: 'Refer an organization', href: '/contact/' },
  heroPhoto: { src: '/assets/img/site/aud-business-associates.webp', title: 'Referral program', width: 900, height: 589 },
  heroStat: 'Compensation on closed business, no obligation to participate',
  sections: [
    section({ cls: 'sec-alt', h2: '<em>How it works</em><strong>and what we ask of you</strong>',
      body: prose([
        'Most of our clients arrive through someone who already trusted us — an administrator who moved practices, a billing partner, a consultant who had seen the work. The referral program formalises that without making it complicated.',
        '<h3>What you do</h3><p>Make an introduction. That is genuinely it. You do not need compliance expertise, you do not present anything, and you are under no obligation to advocate for us beyond saying we are worth a conversation.</p>',
        '<h3>What we do</h3><p>Run the free risk assessment, tell the organization honestly what we find — including if their program is in decent shape and they do not need us — and keep you informed about the outcome of anyone you send.</p>',
        '<h3>What you receive</h3><p>Compensation on closed business, structured at the point of referral. If you would rather not take compensation, plenty of people refer without it and we are glad of it either way.</p>'
      ]) + checklist([
        'No compliance expertise required on your part',
        'A named contact rather than a generic channel inbox',
        'Visibility into the status of anyone you introduce',
        'The same assigned advisor team and included audit support every client gets',
        'An honest assessment, including when the answer is that they do not need us'
      ], 'checklist-2') })
  ],
  cases: [
    { tag: 'Administrator', title: 'Carried the relationship to a new practice', challenge: 'An administrator who had used HCP moved to a larger group with no formal program.', approach: 'They made an introduction; the assessment surfaced three closable gaps.', result: 'The new group implemented, and the administrator kept a system they already knew.' },
    { tag: 'Billing partner', title: 'Answering a question they could not', challenge: 'A billing company was regularly asked compliance questions by clients and could only offer informal advice.', approach: 'They began referring clients rather than improvising answers.', result: 'Clients got real help and the billing company stopped carrying unearned risk.' },
    { tag: 'Consultant', title: 'Extending beyond an assessment', challenge: 'A consultant delivered compliance assessments but had no way to help clients operate a program afterwards.', approach: 'Assessment findings were handed to HCP for implementation.', result: 'Clients got continuity and the consultant stayed in their own lane.' }
  ],
  faqs: [
    { q: 'How is compensation structured?', a: 'On closed business, agreed at the point of referral so there are no surprises. Get in touch and we will set it out in writing before you send anyone.' },
    { q: 'Do I need to know anything about compliance?', a: 'No. An introduction is all that is required. We handle the assessment, the explanation and the implementation.' },
    { q: 'What if the organization does not need you?', a: 'We tell them so. If their program is in reasonable shape we say that plainly, which is the only way a referral programme stays worth participating in.' },
    { q: 'Will I know what happened?', a: 'Yes. You get visibility into the status of anyone you introduce, without us sharing anything confidential about their program.' },
    { q: 'Is this different from the partner program?', a: 'Yes. Referrals are introductions. The partner program is for organizations that want to bundle compliance into their own service offering under partner pricing.' },
    { q: 'Can I refer without compensation?', a: 'Of course, and many do. Tell us and we will simply treat it as an introduction.' }
  ],
  related: [
    { href: '/partners/', label: 'Partner program', text: 'For bundling compliance into your offering.' },
    { href: '/compliance-assessment/', label: 'Free risk assessment', text: 'What your referral receives first.' },
    { href: '/solutions/the-hcp-difference/', label: 'The HCP difference', text: 'What they can expect from us.' },
    { href: '/contact/', label: 'Make a referral', text: 'Send us an introduction.' }
  ]
}));

export default pages;
