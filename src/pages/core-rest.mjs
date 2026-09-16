import { buildPage, section, prose, checklist, cards, steps } from '../shared.mjs';
import { abs } from '../layout.mjs';
import { site } from '../site.mjs';

const G = 'Resources';
const pages = [];
const svc = (name, desc, url) => ({
  '@type': 'Service', '@id': abs(url) + '#service', name, description: desc, url: abs(url),
  serviceType: 'Healthcare compliance', provider: { '@id': abs('/#organization') },
  areaServed: { '@type': 'Country', name: 'United States' }
});

/* ---------------- Newsletter ---------------- */
pages.push(buildPage({
  path: '/newsletter/',
  group: G, llmsLabel: 'Compliance Newsletter',
  title: 'Compliance Newsletter | HCP',
  description: 'Regulatory updates, enforcement trends and practical guidance from HCP compliance advisors. No cost, unsubscribe any time.',
  breadcrumbs: [{ label: 'Newsletter', href: '/newsletter/' }],
  eyebrow: 'Stay informed',
  h1: '<em>Compliance updates</em><strong>from people who handle this daily</strong>',
  lead: 'Regulatory change, enforcement patterns and the questions clients are actually asking — sent when there is something worth saying.',
  primaryCta: { label: 'Subscribe', href: '/contact/' },
  secondaryCta: { label: 'Read the blog', href: '/blog/' },
  heroPhoto: { src: '/assets/img/site/about-1.webp', title: 'Compliance newsletter', width: 1000, height: 673 },
  heroStat: 'No cost, no sales sequence, unsubscribe any time',
  sections: [
    section({ cls: 'sec-alt', h2: '<em>What subscribers get</em><strong>and what they do not</strong>',
      body: prose([
        'Most compliance newsletters are either a press release with a subject line, or a summary of a rule you could have read yourself. We try to write the thing our advisors would tell a client on the phone: what changed, whether it affects you, and what to do differently.'
      ]) + checklist([
        'Regulatory changes that actually affect healthcare organizations, with what to do about them',
        'Enforcement patterns — what recent settlements suggest regulators are focused on',
        'Practical guidance on the questions clients raise most in a given quarter',
        'Advance notice of webinars and live sessions',
        'Occasional checklists and reference material'
      ], 'checklist-2') + prose([
        '<h3>What you will not get</h3>',
        '<p>A weekly send for the sake of cadence, your details passed to anyone else, or a sales sequence dressed as education. We send when there is something worth saying, and unsubscribing takes one click.</p>'
      ]) })
  ],
  cases: [
    { tag: 'From update to action', title: 'A rule change that mattered', challenge: 'A subscriber read about risk analysis currency and realised theirs predated two system migrations.', approach: 'They requested an assessment, which confirmed the analysis no longer described their environment.', result: 'A current analysis completed with a tracked remediation plan.' },
    { tag: 'Team distribution', title: 'Forwarded to a committee', challenge: 'A compliance officer wanted current regulatory material for quarterly committee meetings.', approach: 'Updates were circulated ahead of each meeting and discussed against their own program.', result: 'Better-informed governance and documented ongoing education.' },
    { tag: 'Early warning', title: 'Ahead of an emphasis programme', challenge: 'An organization learned of an inspection emphasis area before it reached their region.', approach: 'They reviewed the relevant written programs and closed two documentation gaps.', result: 'Prepared rather than surprised.' }
  ],
  faqs: [
    { q: 'How often is it sent?', a: 'When there is something genuinely worth saying rather than on a fixed cadence. In practice that tends to be monthly, with occasional extra sends when a significant change lands.' },
    { q: 'Do I need to be a client?', a: 'No. It is free and open to anyone working in healthcare compliance.' },
    { q: 'Will my details be shared?', a: 'No. We do not sell personal information and do not share it with third parties for their marketing. See our privacy policy.' },
    { q: 'How do I unsubscribe?', a: 'One click in any message, or email us. No retention attempt.' },
    { q: 'Can I suggest a topic?', a: `Yes, and the best ones come from practitioners. Email ${site.email} with what you are trying to figure out.` },
    { q: 'Is this different from the blog?', a: 'The blog is longer-form and always public. The newsletter is shorter, timelier, and flags things you may need to act on.' }
  ],
  related: [
    { href: '/blog/', label: 'Compliance blog', text: 'Longer-form written guidance.' },
    { href: '/webinars/', label: 'Webinars', text: 'Live sessions with Q&A.' },
    { href: '/tips-faqs/', label: 'Tips & FAQ', text: 'Short answers to common questions.' },
    { href: '/privacypolicy/', label: 'Privacy policy', text: 'How we handle your details.' }
  ]
}));

/* ---------------- Audit results / mock audit ---------------- */
pages.push(buildPage({
  path: '/audit-results/',
  group: G, llmsLabel: 'Audit Results & Findings',
  title: 'Compliance Audit Findings | HCP',
  description: 'What compliance audits typically find, how findings are prioritised by regulatory exposure, and what a corrective action plan should contain.',
  breadcrumbs: [{ label: 'Audit Findings', href: '/audit-results/' }],
  eyebrow: 'Auditing',
  h1: '<em>Audit findings</em><strong>and what to do with them</strong>',
  lead: 'Receiving findings is the easy part. Prioritising them honestly and closing them with evidence is where programs succeed or stall.',
  heroPhoto: { src: '/assets/img/site/band-sra.webp', title: 'Compliance audit findings', width: 900, height: 600 },
  heroStat: 'Findings ranked by regulatory exposure, not by ease of fixing',
  extraSchema: [svc('Compliance Auditing', 'Internal compliance audits with prioritised findings and tracked corrective action for healthcare organizations.', '/audit-results/')],
  sections: [
    section({ cls: 'sec-alt', h2: '<em>What audits actually find</em><strong>in most organizations</strong>',
      body: prose([
        'Across assessments the same findings recur, in roughly the same order. None of them are exotic, and all of them are closable — which is exactly why discovering them internally is so much better than having them found for you.',
        '<h3>The recurring findings</h3>'
      ]) + checklist([
        'Security risk analysis stale, or not reflecting current systems',
        'Risk findings with no owner, target date or status — an assessment without a management plan',
        'Vendors with PHI access and no executed business associate agreement',
        'Training completed but not evidenced per individual, per topic, with dates',
        'Exclusion screening run at hire and never repeated',
        'Incident log absent, or missing the incidents judged non-reportable',
        'Exposure control plan not reviewed annually with employee input documented',
        'Safety data sheets not genuinely accessible on every shift',
        'Policies describing workflows the organization does not actually follow',
        'Credentials tracked informally, with expiry discovered after the fact'
      ], 'checklist-2') }),
    section({ h2: '<em>Closing findings properly</em><strong>what a corrective action plan needs</strong>',
      body: steps([
        { title: 'Rank by exposure', text: 'Order findings by regulatory consequence, not by how quick they are to fix. Closing five easy items while the risk analysis stays stale is motion without progress.' },
        { title: 'Assign an owner', text: 'A finding without a named owner does not close. "The practice" is not an owner.' },
        { title: 'Set a real date', text: 'Target dates that pass without consequence train everyone to ignore them. Fewer, honest dates beat a full list of optimistic ones.' },
        { title: 'Evidence the fix', text: 'Closure means an artefact — an executed agreement, a completed analysis, a training record — not an assertion that it was handled.' },
        { title: 'Re-test', text: 'The next audit cycle should measure whether the pattern actually moved. That measurement is what demonstrates the program operates.' }
      ]) })
  ],
  cases: [
    { tag: 'Mock audit', title: 'Eleven gaps found before the real one', challenge: 'A surgery centre anticipated a payer audit with no idea whether its documentation would hold up.', approach: 'A full mock audit ran with document requests, staff interviews and evidence review.', result: 'Eleven gaps closed in six weeks; the actual audit concluded without material findings.' },
    { tag: 'Coding audit', title: 'A pattern measured, then moved', challenge: 'A modifier pattern sat well outside peer norms with no internal monitoring.', approach: 'Provider-level findings drove targeted education, and a follow-up cycle re-measured.', result: 'The pattern corrected, with the remediation documented as corrective action.' },
    { tag: 'Multi-site', title: 'Variation nobody could see', challenge: 'Leadership assumed all sites ran the same program.', approach: 'Standardised walkthroughs applied identical criteria at every location.', result: 'Real variation surfaced, with site-specific corrective actions tracked to closure.' }
  ],
  faqs: [
    { q: 'What is the most common finding?', a: 'An inadequate or outdated security risk analysis, by a clear margin. It is also the most frequently cited deficiency in federal HIPAA enforcement.' },
    { q: 'Should we audit ourselves?', a: 'Yes — routine monitoring and auditing is the sixth element of an effective compliance program, and prompt corrective action is the seventh. Internal discovery also bounds your exposure.' },
    { q: 'What if an audit finds an overpayment?', a: 'Identified overpayments generally must be reported and returned within 60 days of identification. Your advisor helps quantify it and work through repayment with your billing team or counsel.' },
    { q: 'How often should audits run?', a: 'Coding audits at least annually, with more frequent review for new providers, clients or service lines. Program-level assessment annually and after material change.' },
    { q: 'Does a finding mean we are non-compliant?', a: 'It means you found something before someone else did, which is what a functioning program is supposed to do. A program with no findings is usually a program that is not looking.' },
    { q: 'Can you run a mock audit for us?', a: 'Yes. Mock audits run on site or remotely, with document requests, staff interviews and a prioritised written report.' }
  ],
  related: [
    { href: '/coding-compliance/', label: 'SENTRY Coding Intelligence', text: 'Coder-level auditing.' },
    { href: '/on-site-services/', label: 'On-site services', text: 'Mock audits and walkthroughs.' },
    { href: '/checklists/', label: 'Compliance checklists', text: 'Self-audit before we do.' },
    { href: '/compliance-assessment/', label: 'Free risk assessment', text: 'Start with a gap analysis.' }
  ]
}));

/* ---------------- Medical assistant credentialing ---------------- */
pages.push(buildPage({
  path: '/medical-assistant-credentialing/',
  group: G, llmsLabel: 'Medical Assistant Credentialing',
  title: 'Medical Assistant Credentialing | HCP',
  description: 'Tracking medical assistant certifications, scope of practice and required training, with alerts before credentials lapse.',
  breadcrumbs: [{ label: 'Credential Manager', href: '/credential-manager/' }, { label: 'Medical Assistants', href: '/medical-assistant-credentialing/' }],
  eyebrow: 'Credentialing',
  h1: '<em>Medical assistant credentialing</em><strong>tracked before it lapses</strong>',
  lead: 'Medical assistants carry certification, scope-of-practice and training obligations that vary by state — and are frequently tracked in a spreadsheet nobody owns.',
  heroPhoto: { src: '/assets/img/site/spec-therapy-2.webp', title: 'Medical assistant credentialing', width: 900, height: 599 },
  heroStat: 'Alerts fire before expiry, not after',
  extraSchema: [svc('Medical Assistant Credential Tracking', 'Certification, scope of practice and training tracking for medical assistants.', '/medical-assistant-credentialing/')],
  sections: [
    section({ cls: 'sec-alt', h2: '<em>Why this goes wrong</em><strong>more often than it should</strong>',
      body: prose([
        'Medical assistants are central to how most practices actually run, and their obligations are unusually easy to lose track of. Certification is voluntary in some states and required in others. Scope of practice — what an MA may do, and under whose supervision — varies considerably, and delegating beyond it creates exposure for the supervising clinician as well as the practice.',
        'Add BLS certification, immunisation records, annual compliance training and, in some settings, specific competency documentation, and it becomes a per-person record set that a shared spreadsheet handles badly.',
        '<h3>What gets tracked</h3>'
      ]) + checklist([
        'Certification status and issuing body, where applicable',
        'State scope-of-practice requirements and any delegation documentation',
        'BLS and other clinical certifications with expiry dates',
        'Immunisation records, including hepatitis B vaccination and declination',
        'Annual compliance and safety training completion',
        'Competency assessments where your policies require them',
        'Background check and monthly exclusion screening results',
        'Continuing education progress where certification requires it'
      ], 'checklist-2') })
  ],
  cases: [
    { tag: 'Multi-site practice', title: 'Expiries caught in advance', challenge: 'BLS certifications lapsed regularly and were discovered during audits rather than beforehand.', approach: 'Credentials were centralised with alerts at 90, 60 and 30 days escalating to managers.', result: 'Renewal became routine rather than an annual emergency.' },
    { tag: 'Scope question', title: 'Delegation documented properly', challenge: 'A practice was unsure whether certain tasks were within MA scope in their state.', approach: 'Requirements were reviewed and delegation documentation was built into role definitions.', result: 'Clear, documented boundaries protecting both the MA and the supervising clinician.' },
    { tag: 'Onboarding', title: 'Complete before day one', challenge: 'New MAs started with credentials uncollected and training unassigned.', approach: 'Screening, credential collection and training were consolidated into one role-based onboarding track.', result: 'New hires reach their start date complete, with evidence on file.' }
  ],
  faqs: [
    { q: 'Is medical assistant certification required?', a: 'It depends on the state and sometimes on the tasks performed. Some states require it for specific delegated duties; others do not require it at all. Your advisor applies the rules for the states you operate in.' },
    { q: 'What can a medical assistant do?', a: 'Scope of practice varies by state and by what a supervising clinician may delegate. Because delegating beyond scope creates exposure for the clinician too, documenting the boundary is worth doing explicitly.' },
    { q: 'What happens if a certification lapses?', a: 'Depending on your state and payer contracts it may affect what the MA may perform and what is billable. Alerting well before expiry is far cheaper than resolving it afterwards.' },
    { q: 'Do MAs need exclusion screening?', a: 'Yes. Screening applies to anyone whose services are paid for directly or indirectly by federal health care programs, which includes administrative and clinical support staff.' },
    { q: 'Can staff upload their own renewals?', a: 'Yes. Individuals upload directly to their profile and an administrator verifies, so the burden does not sit with one person.' },
    { q: 'Does this cover other roles?', a: 'Yes. Credential Manager tracks every licensed and certified role, with requirements configured per role and location.' }
  ],
  related: [
    { href: '/credential-manager/', label: 'Credential Manager', text: 'Full credential tracking.' },
    { href: '/background-checks/', label: 'Background checks', text: 'Screening inside onboarding.' },
    { href: '/clinical-training/', label: 'Clinical training', text: 'Role-based education.' },
    { href: '/solutions/human-resources/', label: 'HR compliance', text: 'Onboarding and personnel files.' }
  ]
}));

export default pages;
