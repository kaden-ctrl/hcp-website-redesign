import { buildPage, section, prose, cards, checklist, steps, quotes } from '../shared.mjs';
import { abs, esc, img } from '../layout.mjs';
import { site } from '../site.mjs';

const G = 'Company';
const GS = 'Expert services';

/* ---------------- The HCP difference ---------------- */
const difference = buildPage({
  path: '/solutions/the-hcp-difference/',
  group: GS,
  llmsLabel: 'The HCP Difference',
  title: 'The HCP Difference | Healthcare Compliance Pros',
  description: 'What separates HCP from other compliance vendors: assigned advisor teams, included audit support and customized documentation that stays current.',
  breadcrumbs: [{ label: 'Solutions', href: '/compliance-solution/' }, { label: 'The HCP Difference', href: '/solutions/the-hcp-difference/' }],
  eyebrow: 'The HCP difference',
  h1: 'Software alone has never made anyone compliant',
  lead: 'Compliance fails in the space between a platform and the expertise to operate it. We refuse to sell one without the other.',
  bullets: [
    'Every client is assigned 3–5 named compliance professionals',
    'Audit and incident support is included, never billed as an emergency',
    'Documentation is customized to your organization and maintained over time',
    'One platform covering HIPAA, OSHA, corporate compliance and training'
  ],
  heroStat: `Serving healthcare organizations nationwide since ${site.founded}`,
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'The industry pattern',
      h2: 'Two vendor models, both incomplete',
      body: prose([
        `The compliance market has largely split in two. On one side are software platforms: a policy library, a training catalog, a dashboard, and a support email address. They are inexpensive and they scale, and they work reasonably well for an organization that already has a compliance professional capable of operating them. On the other side are consulting firms: genuine expertise, billed hourly, producing documents that are excellent on the day they are delivered and progressively less accurate every month afterward.`,
        `Most healthcare organizations need both and can afford neither on its own. They lack the internal expertise to make a platform effective, and they lack the budget to keep consultants engaged continuously. So they buy the platform, use perhaps a third of it, and discover during an audit that owning a policy library is not the same as having a compliance program.`,
        `HCP was built specifically for that gap. The platform handles what software should handle: assignment, reminders, tracking, evidence capture, reporting. The advisor team handles what requires judgment: customizing documentation, running the risk analysis, assessing an incident, preparing an audit response. Neither is sold separately, because neither works alone.`
      ])
    }),
    section({
      eyebrow: 'What that means in practice',
      h2: 'Four commitments that shape how we work',
      body: cards([
        { icon: 'users', title: 'You get people, by name', text: 'Three to five compliance professionals are assigned to your organization at implementation. They learn your specialty, your systems and your history, and you contact them directly rather than opening a ticket. Continuity is the point: the person who answers your incident call is the person who built your program.' },
        { icon: 'shield', title: 'Support is not metered', text: 'There is no per-incident fee, no hourly billing for audit response, and no premium tier that unlocks the ability to speak to someone. Calling your advisor when you are unsure is exactly the behavior a compliance program should encourage, so we removed the reason to hesitate.' },
        { icon: 'doc', title: 'Documentation reflects reality', text: 'A policy describing an organization you are not is a documented deviation, which is worse in an investigation than no policy at all. We customize to your actual workflows and revise when regulations or your operations change.' },
        { icon: 'gauge', title: 'Evidence accumulates automatically', text: 'The difference between a program that passes an audit and one that does not is usually evidence, generated continuously rather than reconstructed under deadline. Every acknowledgement, completion, screening and inspection is captured with a date stamp as work happens.' }
      ])
    })
  ],
  diffH2: 'Where HCP differs, concretely',
  cases: [
    { tag: 'Independent practice', title: 'The call that mattered', challenge: 'A practice discovered a potential impermissible disclosure late on a Friday and did not know whether notification was required.', approach: 'The assigned advisor worked the four-factor breach risk assessment with them, documented the analysis and established what was actually disclosed.', result: 'A documented, defensible determination reached the same day rather than an anxious weekend and an outside counsel invoice.' },
    { tag: 'Multi-site group', title: 'Policies that kept up', challenge: 'A group’s prior vendor delivered an excellent manual at implementation that was never revised over the following four years.', approach: 'HCP rebuilt the manual to current requirements and put it on a maintained revision cycle with acknowledgement tracking.', result: 'Documentation that reflects current regulation and current operations, with evidence that staff received each revision.' },
    { tag: 'Business associate', title: 'Expertise without a hire', challenge: 'A vendor needed Security Rule expertise it could not justify hiring full time, and consultants had quoted a project fee with no ongoing support.', approach: 'The advisor team delivered the risk analysis and program build, then remained available for questions, client security reviews and incidents.', result: 'Ongoing access to expertise at a fraction of either alternative.' }
  ],
  faqs: [
    { q: 'What does "assigned advisor team" actually mean?', a: 'Three to five named compliance professionals attached to your account at implementation. You have their contact information, they know your organization, and they handle your questions, incidents and audits. It is not a rotating pool or a tiered queue.' },
    { q: 'Is audit support really included?', a: 'Yes, for HIPAA, OSHA and payer audits, in every plan. We consider metered audit support a structural problem: it discourages exactly the early call that keeps a small issue from becoming a large one.' },
    { q: 'How do you keep documentation current?', a: 'Regulatory monitoring feeds policy and course revisions, which the platform pushes as acknowledgement requests to the workforce members affected. You do not have to track rulemaking yourself.' },
    { q: 'Do you work with organizations that already have a compliance officer?', a: 'Frequently. In that case we function as infrastructure and backup — the platform your officer runs the program on, plus specialists for risk analysis, coding audits and inspections.' },
    { q: 'What sizes of organization do you serve?', a: 'From solo practitioners to multi-site groups, health system departments and PE-backed platforms. Pricing scales with headcount so the model works at both ends.' },
    { q: 'What if we are already with another vendor?', a: 'Migrations are routine. Your advisor reviews your existing documentation, retains what remains accurate, rebuilds what does not, and imports your historical training records where they can be validated.' }
  ],
  related: [
    { href: '/about/', label: 'About HCP', text: 'Who we are and how we work.' },
    { href: '/testimonials/', label: 'Client testimonials', text: 'What clients say about the experience.' },
    { href: '/compliance-solution/', label: 'SHIELD Compliance Solution', text: 'The platform in detail.' },
    { href: '/compliance-assessment/', label: 'Free risk assessment', text: 'Start with a gap analysis.' }
  ]
});

/* ---------------- Compliance assessment ---------------- */
const assessment = buildPage({
  path: '/compliance-assessment/',
  group: GS,
  llmsLabel: 'Free Compliance Risk Assessment',
  title: 'Free Compliance Risk Assessment | HCP',
  description: 'A no-cost, no-obligation review of your HIPAA, OSHA and corporate compliance program, with a written gap analysis you keep either way.',
  breadcrumbs: [{ label: 'Free Risk Assessment', href: '/compliance-assessment/' }],
  eyebrow: 'Free risk assessment',
  h1: 'Find out what an auditor would find',
  lead: 'A structured review of your current program against HIPAA, OSHA and corporate compliance requirements. About 20 minutes of your time, and the written findings are yours regardless of what you decide.',
  bullets: [
    'A prioritized written gap analysis, not a sales summary',
    'Covers HIPAA Privacy and Security, OSHA and corporate compliance',
    'Conducted by a compliance advisor, not an automated quiz',
    'No cost, no obligation, and the findings are yours to keep'
  ],
  primaryCta: { label: 'Request your assessment', href: '/contact/' },
  secondaryCta: { label: `Call ${site.phoneDisplay}`, href: `tel:${site.phoneE164}` },
  heroStat: 'Most assessments are scheduled within a few business days',
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'What we review',
      h2: 'The areas where findings actually concentrate',
      lead: 'We work through the same categories a regulator or auditor would request, in roughly the same order.',
      body: `<div class="split"><div class="split-copy">
        <p>The assessment is a guided conversation with a compliance advisor, supported by a short document review where you are able to share materials. We are looking for gaps between what your program says and what it can demonstrate.</p>
        ${checklist([
          'Policy and procedure currency, scope and revision history',
          'Evidence that workforce members received and acknowledged policies',
          'Training completion records by individual, topic and date',
          'Security Risk Analysis currency, scope and the associated risk management plan',
          'Business associate inventory and executed agreement coverage',
          'Incident logging, investigation and breach assessment practice',
          'OSHA written programs: exposure control and hazard communication',
          'SDS accessibility, safety inspections and sharps injury logging',
          'Exclusion screening frequency and evidence retention',
          'Compliance officer designation, committee activity and reporting',
          'Coding and documentation risk indicators for your specialty',
          'Credential and license expiration tracking'
        ], 'checklist-2')}
      </div></div>`
    }),
    section({
      eyebrow: 'What you receive',
      h2: 'A written gap analysis you can act on',
      body: steps([
        { title: 'Schedule', text: 'Tell us your specialty, size and locations. We match you with an advisor familiar with your setting and book about 20 minutes.' },
        { title: 'Review', text: 'A structured walkthrough of your current program, plus review of any documentation you choose to share.' },
        { title: 'Report', text: 'A written summary of findings, prioritized by regulatory exposure, with specific remediation recommendations for each.' },
        { title: 'Decide', text: 'Use the findings however you like. If you want help closing them, we will scope it. If not, the report is still yours.' }
      ]) + prose([
        `<h3>Why we give this away</h3>`,
        `<p>Two reasons, and neither is complicated. The first is that most organizations genuinely do not know where they stand. They have a program, it feels adequate, and nobody has tested it against what an investigator would actually request. A structured review usually surfaces three to six specific, closable gaps — and knowing about them is strictly better than not, whoever ends up fixing them.</p>`,
        `<p>The second is commercial honesty. We would rather show you a concrete gap analysis than deliver a product demonstration. If the findings are minor, you should not buy anything, and we will tell you so. If they are significant, you will have a specific list to evaluate us against rather than a general impression.</p>`
      ])
    })
  ],
  diffH2: 'Why start with an assessment',
  differentiators: [
    { icon: 'search', title: 'Specific, not general', text: 'You receive named gaps with regulatory citations, not a maturity score or a color-coded grid.' },
    { icon: 'users', title: 'A person, not a quiz', text: 'An experienced advisor conducts the review, so follow-up questions go where the risk actually is.' },
    { icon: 'scale', title: 'Prioritized by exposure', text: 'Findings are ranked by regulatory consequence, so you know what to fix first if you fix only some.' },
    { icon: 'doc', title: 'Yours to keep', text: 'The written report belongs to you whether or not you become a client. There is no gate on the findings.' },
    { icon: 'clock', title: 'Twenty minutes', text: 'Scoped to respect your time. Deeper review is available if the initial pass suggests it is warranted.' },
    { icon: 'shield', title: 'All three domains', text: 'HIPAA, OSHA and corporate compliance in one pass, because gaps in one often indicate gaps in another.' }
  ],
  compare: null,
  cases: [
    { tag: 'Specialty practice', title: 'Three vendors with no BAA', challenge: 'A practice believed its vendor agreements were complete and had never inventoried which vendors could access PHI.', approach: 'The assessment mapped vendors against actual systems and workflows rather than against the contract folder.', result: 'Three vendors with PHI access and no executed agreement identified, all closed within six weeks.' },
    { tag: 'Multi-site group', title: 'A risk analysis five years stale', challenge: 'A group cited a security risk analysis performed before two EHR migrations and a new location opened.', approach: 'The assessment established that the analysis no longer described the environment, the single most commonly cited HIPAA deficiency.', result: 'A current analysis completed with a tracked remediation plan, closing the organization’s highest-exposure gap.' },
    { tag: 'Outpatient clinic', title: 'Training nobody could evidence', challenge: 'Staff had completed annual training, but records consisted of undated sign-in sheets.', approach: 'The assessment tested whether per-individual, per-topic, date-stamped records could actually be produced.', result: 'The gap was identified before an audit tested it, and evidence-generating training was implemented.' }
  ],
  faqs: [
    { q: 'Is this really free?', a: 'Yes. There is no cost, no obligation and no requirement to share anything you are not comfortable sharing. The written findings are yours regardless of what you decide afterward.' },
    { q: 'How long does it take?', a: 'The conversation is scoped to about 20 minutes. If you share documentation for review, expect a few business days before you receive the written report.' },
    { q: 'What do we need to prepare?', a: 'Nothing mandatory. It helps to know roughly when your policies were last revised, when your security risk analysis was performed, and how training is currently tracked, but the advisor will work through it with you.' },
    { q: 'Will this turn into a sales call?', a: 'The review comes first and the findings are delivered either way. If the gaps are minor we will say so. If you want help closing them, we will scope that separately.' },
    { q: 'Is what we share confidential?', a: 'Yes. Information shared during an assessment is treated as confidential, and we can execute a confidentiality agreement or business associate agreement beforehand if you prefer.' },
    { q: 'What if the findings are bad?', a: 'That is the useful outcome. Nearly every organization has gaps; the ones that get into trouble are the ones that discover them during an investigation rather than before one.' }
  ],
  related: [
    { href: '/contact/', label: 'Schedule a consultation', text: 'Request your assessment directly.' },
    { href: '/compliance-solution/', label: 'SHIELD Compliance Solution', text: 'What closing the gaps looks like.' },
    { href: '/tips-faqs/', label: 'Compliance tips & FAQ', text: 'Answers to common questions.' },
    { href: '/solutions/the-hcp-difference/', label: 'The HCP difference', text: 'How we work with clients.' }
  ]
});

/* ---------------- About ---------------- */
const about = buildPage({
  path: '/about/',
  group: G,
  llmsLabel: 'About HCP',
  title: 'About Healthcare Compliance Pros',
  description: 'Healthcare Compliance Pros pairs compliance software with assigned advisor teams so HIPAA, OSHA and corporate compliance become routine.',
  breadcrumbs: [{ label: 'About', href: '/about/' }],
  eyebrow: 'About HCP',
  h1: 'We built the company we wished existed',
  lead: `Healthcare Compliance Pros has helped healthcare organizations build and maintain defensible compliance programs since ${site.founded}, by pairing software with people who know the regulations.`,
  bullets: [
    'Headquartered in Utah, serving healthcare organizations nationwide',
    'HIPAA, OSHA, corporate compliance and workforce training in one platform',
    'Every client assigned a team of compliance professionals',
    'Clients from solo practices to health system departments and PE platforms'
  ],
  heroStat: `Founded in ${site.founded}`,
  heroPhoto: { src: '/assets/img/site/feature-comprehensive.webp', alt: 'A team of healthcare professionals standing together', title: 'The Healthcare Compliance Pros team', width: 1000, height: 563 },
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'Why we exist',
      h2: 'Compliance was being sold badly',
      body: prose([
        `The healthcare industry has faced steadily expanding regulatory oversight for decades: HIPAA Privacy and Security, OSHA workplace safety, corporate compliance expectations from CMS and the Office of Inspector General, and a growing body of state law layered on top. For a large health system with a compliance department, that load is manageable. For the practices, clinics and vendors that make up most of the industry, it became a genuine operational problem — high overhead, no revenue, and consequences severe enough that ignoring it was not an option.`,
        `What the market offered them was unsatisfying. Consultants produced excellent documentation at a price most practices could not sustain, and the documents began aging the day they were delivered. Software vendors offered affordable platforms that assumed a level of internal compliance expertise the buyer did not have. Practices bought one or the other, used a fraction of it, and remained exposed in ways they could not see.`,
        `HCP was founded to close that gap by refusing to sell the halves separately. Clients get the platform — policies, training, tracking, evidence, reporting — and they get a team of compliance professionals assigned to them, included. That combination is the entire proposition, and it has not changed since the company started.`,
        `<h3>How we work</h3>`,
        `<ul>
          <li><strong>Customization over templates.</strong> Documentation that does not describe your organization creates a documented gap between policy and practice. We build to your specialty, size, systems and state.</li>
          <li><strong>Evidence over assertion.</strong> Programs are judged by what they can produce on demand. Everything the platform does is oriented toward generating date-stamped evidence as work happens.</li>
          <li><strong>Access over tiers.</strong> Advisors are included. There is no premium tier that unlocks the ability to ask a question, because hesitating to call is how small issues become large ones.</li>
          <li><strong>Plain language.</strong> Regulations are complex; explanations do not have to be. If a client cannot act on our guidance, we have not finished the work.</li>
        </ul>`
      ])
    }),
    section({
      eyebrow: 'Who we serve',
      h2: 'The organizations we work with',
      body: cards([
        { icon: 'building', title: 'Medical practices', text: 'Independent and group practices carrying health-system obligations with a fraction of the staff.', href: '/medical-practices/' },
        { icon: 'users', title: 'Hospitals & health systems', text: 'Department-level and ambulatory coverage that standardizes the edges of an enterprise program.', href: '/hospitals-health-systems/' },
        { icon: 'lock', title: 'Business associates', text: 'Vendors directly liable under HIPAA and increasingly subject to client security review.', href: '/business-associates/' },
        { icon: 'clipboard', title: 'Medical billing companies', text: 'Organizations carrying vendor liability and claims integrity exposure simultaneously.', href: '/medical-billing/' },
        { icon: 'chart', title: 'Private equity platforms', text: 'Buy-and-build strategies needing consistent, diligence-ready programs across a portfolio.', href: '/privateequity/' },
        { icon: 'star', title: 'Specialty practices', text: 'Programs built around the procedures, documentation and coding specific to a specialty.', href: '/specialties/' }
      ])
    })
  ],
  diffH2: 'What we do differently',
  cases: [
    { tag: 'Independent practice', title: 'A federal inquiry closed cleanly', challenge: 'A four-provider practice faced an OCR data request with a 30-day deadline and no compliance staff.', approach: 'The advisor team assembled policies, training records, the risk analysis and the remediation plan, and helped draft the response.', result: 'A complete response inside the deadline, with no corrective action plan and no penalty.' },
    { tag: 'Multi-site group', title: 'Six programs became one', challenge: 'Growth by acquisition left six locations with six inherited manuals and no shared completion view.', approach: 'One customized manual was built covering all sites, rosters merged and training standardized by role.', result: 'A single board-level report, and new-practice onboarding reduced from months to days.' },
    { tag: 'Business associate', title: 'Compliance that won business', challenge: 'A billing company was losing enterprise deals at the security review stage.', approach: 'A full business associate program was implemented with documented risk analysis and subcontractor BAA tracking.', result: 'Security reviews cleared from existing documentation, turning an obstacle into a differentiator.' }
  ],
  faqs: [
    { q: 'How long has HCP been in business?', a: `Since ${site.founded}. We have worked with healthcare organizations through the HITECH Act, the Omnibus Rule, successive OSHA emphasis programs and the steady expansion of corporate compliance expectations.` },
    { q: 'Where are you located?', a: `Our headquarters is in ${site.address.locality}, ${site.address.region}, and we serve healthcare organizations throughout the United States. Most work is done remotely, with on-site services scheduled nationwide.` },
    { q: 'What size organizations do you work with?', a: 'From solo practitioners to multi-site groups, hospital departments and private-equity-backed platforms. Pricing scales with headcount, which keeps the model viable at both ends of that range.' },
    { q: 'Are you a law firm?', a: 'No. We provide compliance program development, software, training and advisory support. We are not providing legal advice, and we work alongside your counsel when a matter requires legal judgment.' },
    { q: 'Do you sell software without the advisory support?', a: 'No, and that is deliberate. A platform without expertise to operate it is the failure mode we were founded to fix. Advisors are included in every plan.' },
    { q: 'How do I reach someone?', a: `Call ${site.phoneDisplay}, email ${site.email}, or request a consultation through the contact form. Existing clients contact their assigned advisor team directly.` }
  ],
  related: [
    { href: '/our-team/', label: 'Our team', text: 'The people behind the programs.' },
    { href: '/solutions/the-hcp-difference/', label: 'The HCP difference', text: 'What separates our approach.' },
    { href: '/careers/', label: 'Careers', text: 'Work with us.' },
    { href: '/contact/', label: 'Contact', text: 'Talk to an advisor.' }
  ]
});

/* ---------------- Our team ---------------- */
const team = buildPage({
  path: '/our-team/',
  group: G,
  llmsLabel: 'Our Team',
  title: 'Our Team | Healthcare Compliance Pros',
  description: 'Meet the compliance advisors, certified coders, safety specialists and support staff assigned to HCP client programs.',
  breadcrumbs: [{ label: 'About', href: '/about/' }, { label: 'Our Team', href: '/our-team/' }],
  eyebrow: 'Our team',
  h1: 'The people assigned to your program',
  lead: 'Every client works with a named team drawn from these roles. Which specialists you get depends on your specialty, size and the programs you run.',
  bullets: [
    'Compliance advisors who own your program day to day',
    'Certified coders who audit documentation in your specialty',
    'Workplace safety specialists for OSHA programs and inspections',
    'Implementation and technical support for the platform itself'
  ],
  heroStat: 'Three to five named professionals per client organization',
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'Roles on your team',
      h2: 'Who does what',
      lead: 'Compliance work spans several disciplines. Rather than one generalist, you get specialists for each.',
      body: `<ul class="people people-photo">
        <li class="person"><span class="person-photo">${img({ src: '/assets/img/site/team-eric.webp', alt: 'Eric Christensen', title: 'Eric Christensen, Owner / Co-Founder', width: 520, height: 520 })}</span>
          <h3>Eric Christensen</h3><p class="person-role">Owner / Co-Founder</p></li>
        <li class="person"><span class="person-photo">${img({ src: '/assets/img/site/team-bryan.webp', alt: 'Bryan Roberts', title: 'Bryan Roberts, Owner / Co-Founder', width: 520, height: 520 })}</span>
          <h3>Bryan Roberts</h3><p class="person-role">Owner / Co-Founder</p></li>
        <li class="person"><span class="person-photo">${img({ src: '/assets/img/site/team-adam.webp', alt: 'Adam Laing', title: 'Adam Laing, Chief Executive Officer', width: 520, height: 520 })}</span>
          <h3>Adam Laing</h3><p class="person-role">Chief Executive Officer</p></li>
        <li class="person"><span class="person-photo">${img({ src: '/assets/img/site/team-chad.webp', alt: 'Chad Schiffman', title: 'Chad Schiffman, Director of Risk Management', width: 520, height: 520 })}</span>
          <h3>Chad Schiffman</h3><p class="person-role">Director of Risk Management</p></li>
        <li class="person"><span class="person-photo">${img({ src: '/assets/img/site/team-mystee.webp', alt: 'Mystee Sudbury', title: 'Mystee Sudbury, Director of Operations', width: 520, height: 520 })}</span>
          <h3>Mystee Sudbury</h3><p class="person-role">Director of Operations</p></li>
        <li class="person"><span class="person-photo">${img({ src: '/assets/img/site/team-kristin.webp', alt: 'Kristin Torres', title: 'Kristin Torres, Operations Manager', width: 520, height: 520 })}</span>
          <h3>Kristin Torres</h3><p class="person-role">Operations Manager</p></li>
        <li class="person"><span class="person-photo">${img({ src: '/assets/img/site/team-jeremy.webp', alt: 'Jeremy Winn', title: 'Jeremy Winn, Director of Sales', width: 520, height: 520 })}</span>
          <h3>Jeremy Winn</h3><p class="person-role">Director of Sales</p></li>
      </ul>
      <p class="center mt-2">Beyond the leadership team, every client is supported by assigned advisors,
      certified coders, safety specialists and implementation staff —
      <a href="/contact/">ask to meet your team</a> before you commit.</p>`
    }),
    section({
      eyebrow: 'How we hire',
      h2: 'What we look for',
      body: prose([
        `Compliance advising is an unusual job. It requires genuine regulatory depth, because the answers matter and the stakes are real. It also requires the ability to explain a Security Rule implementation specification to a practice administrator who has fourteen other things happening, in a way that leads to action rather than anxiety. People who have one without the other are not effective in the role.`,
        `We hire from healthcare operations, compliance, coding, workplace safety and clinical backgrounds. What the strongest advisors share is not a particular credential but a specific instinct: when a client calls with a problem, they ask what actually happened before reaching for what the regulation says. Compliance guidance that ignores operational reality gets ignored, and rightly.`,
        `Team members maintain continuing education in their disciplines, including coding credentials, privacy and security certifications and safety training, because the regulatory environment does not hold still and neither can the people advising on it.`
      ])
    })
  ],
  diffH2: 'Why the team model matters',
  cases: [
    { tag: 'Continuity', title: 'The advisor who already knew', challenge: 'A practice called about a potential disclosure involving a workflow they had discussed with their advisor months earlier.', approach: 'Because the same advisor held the relationship, the conversation started at the specifics rather than at background.', result: 'A documented determination reached the same day, with no re-explaining of the practice’s systems.' },
    { tag: 'Specialization', title: 'The right specialist on the call', challenge: 'An OSHA inspection question arose that was outside the compliance advisor’s primary depth.', approach: 'The safety specialist on the assigned team joined directly rather than the question being routed through a queue.', result: 'An accurate answer within hours, from someone who conducts these inspections regularly.' },
    { tag: 'Turnover', title: 'Program survived a departure', challenge: 'A client’s practice administrator, who held all institutional compliance knowledge, resigned abruptly.', approach: 'The advisor team held program continuity and onboarded the replacement against documented, current materials.', result: 'No interruption to the compliance program during a transition that would otherwise have reset it.' }
  ],
  faqs: [
    { q: 'How many people are on my team?', a: 'Typically three to five, depending on your size and which programs you run. A practice running HIPAA and OSHA has a smaller team than a multi-site group adding coding audits and corporate compliance.' },
    { q: 'Can I meet my team before signing?', a: 'Yes, and we encourage it. Ask during your consultation and we will introduce the advisors who would be assigned to your organization.' },
    { q: 'What if my advisor leaves HCP?', a: 'Because you are assigned a team rather than an individual, continuity is preserved. Your program documentation, history and notes live in the platform, not in one person’s files.' },
    { q: 'Are advisors available outside business hours?', a: 'Standard advisory hours are Monday through Friday. Incidents that cannot wait are escalated, and your team will tell you how to reach them in a genuine emergency.' },
    { q: 'What credentials does the team hold?', a: 'The team includes certified coders, privacy and security certified professionals, workplace safety specialists and experienced healthcare operations leaders. Specific credentials of your assigned advisors are available on request.' },
    { q: 'Do you work with our existing compliance officer?', a: 'Often. Where you have internal compliance leadership, the team functions as specialist support and infrastructure rather than replacing the role.' }
  ],
  related: [
    { href: '/about/', label: 'About HCP', text: 'Why the company exists.' },
    { href: '/careers/', label: 'Careers', text: 'Join the team.' },
    { href: '/fractional-compliance-officer/', label: 'Fractional Compliance Officer', text: 'When you need the role filled.' },
    { href: '/contact/', label: 'Meet your team', text: 'Ask to be introduced.' }
  ]
});

/* ---------------- Testimonials ---------------- */
const testimonials = buildPage({
  path: '/testimonials/',
  group: G,
  llmsLabel: 'Client Testimonials',
  title: 'Client Testimonials | Healthcare Compliance Pros',
  description: 'What compliance officers, administrators and practice owners say about working with HCP advisors and the compliance platform.',
  breadcrumbs: [{ label: 'Testimonials', href: '/testimonials/' }],
  eyebrow: 'Client feedback',
  h1: 'What clients say about working with us',
  lead: 'The themes are consistent: advisors who respond, training that gets completed, and no longer carrying the compliance program alone.',
  bullets: [
    'Feedback from practice administrators and compliance officers',
    'Organizations from solo practices to multi-site groups',
    'Consistent themes around responsiveness and audit support'
  ],
  heroStat: 'Client feedback gathered across specialties and organization sizes',
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'In their words',
      h2: 'Client feedback',
      body: quotes([
        { text: 'We moved from a binder nobody opened to a system that tells me exactly who is behind on training. When our advisor says she will call back, she calls back.', name: 'Practice Administrator', role: 'Multi-provider family medicine group' },
        { text: 'The audit support alone justified the subscription. Having someone who had done this before on the phone within the hour changed the whole experience.', name: 'Compliance Officer', role: 'Regional specialty network' },
        { text: 'Our staff finishes their training now, which was never true before. The assignments show up, the reminders go out, and I stop chasing people.', name: 'Office Manager', role: 'Independent dermatology practice' },
        { text: 'I inherited a compliance program I did not understand. Our advisor walked me through what mattered first instead of handing me a 200-page manual.', name: 'Operations Director', role: 'Behavioral health organization' },
        { text: 'The risk assessment found three vendors with access to patient data and no agreement on file. We had no idea. That alone was worth the call.', name: 'Practice Owner', role: 'Independent specialty practice' },
        { text: 'As a billing company, security questionnaires used to stall every enterprise deal. Now we answer them from documentation we already have.', name: 'Chief Operating Officer', role: 'Medical billing company' }
      ]) + `<p class="case-note">Quotes reflect client feedback and are attributed by role rather than by name at
      client request. Named references are available on request during evaluation.</p>`
    })
  ],
  diffH2: 'What clients consistently point to',
  cases: [
    { tag: 'Audit response', title: 'Support when it counted', challenge: 'A practice received a federal data request with a 30-day deadline and no internal compliance staff.', approach: 'The assigned advisor team assembled the requested documentation and helped draft the written response.', result: 'A complete response inside the deadline, closed with no corrective action plan.' },
    { tag: 'Training adoption', title: 'Completion stopped being a chase', challenge: 'A group practice regularly closed the compliance year with a large share of staff training incomplete.', approach: 'Role-based assignment and automated reminders with manager escalation replaced manual tracking.', result: 'Completion became visible weekly rather than discovered annually.' },
    { tag: 'Sales enablement', title: 'Compliance as a differentiator', challenge: 'A business associate kept losing enterprise deals at the vendor security review stage.', approach: 'A documented Security Rule program with risk analysis and subcontractor tracking was implemented.', result: 'Security reviews became a document retrieval exercise rather than a project.' }
  ],
  faqs: [
    { q: 'Can we speak with a reference?', a: 'Yes. During evaluation we can arrange a conversation with a current client of similar size and specialty, subject to their availability and consent.' },
    { q: 'Why are testimonials attributed by role rather than name?', a: 'Many clients prefer their compliance arrangements not be public, which is a reasonable position in this field. Named references are available directly during evaluation.' },
    { q: 'Do you have clients in our specialty?', a: 'Likely. We work across primary care, surgical and procedural specialties, behavioral health, imaging, therapy, aesthetics and business associates. Ask and we will tell you directly.' },
    { q: 'What do clients most often say they wish they had done sooner?', a: 'Two things consistently: running a real risk analysis rather than assuming the original one still applied, and inventorying vendors with PHI access rather than trusting the contract folder.' },
    { q: 'What is the most common complaint?', a: 'That implementation requires more input than clients expect at the start — particularly the roster work and the discovery session. It front-loads effort deliberately, because a program built on inaccurate inputs produces inaccurate evidence.' },
    { q: 'How long do clients typically stay?', a: 'Compliance is an ongoing obligation rather than a project, and most client relationships are multi-year. The programs that lapse are usually the ones that were never operating in the first place.' }
  ],
  related: [
    { href: '/solutions/the-hcp-difference/', label: 'The HCP difference', text: 'What clients are describing.' },
    { href: '/about/', label: 'About HCP', text: 'Who we are.' },
    { href: '/compliance-assessment/', label: 'Free risk assessment', text: 'Start the way most clients did.' },
    { href: '/contact/', label: 'Request a reference', text: 'Speak with a current client.' }
  ]
});

/* ---------------- Partners ---------------- */
const partners = buildPage({
  path: '/partners/',
  group: G,
  llmsLabel: 'Partner Program',
  title: 'Partner Program | Healthcare Compliance Pros',
  description: 'Refer clients or bundle HCP compliance into your offering. Built for MSOs, billing companies, EHR vendors, brokers and consultants.',
  breadcrumbs: [{ label: 'Partners', href: '/partners/' }],
  eyebrow: 'Partner program',
  h1: 'Add compliance to what you already deliver',
  lead: 'Organizations serving healthcare clients are asked about compliance constantly. The partner program lets you answer without building the capability yourself.',
  bullets: [
    'Referral and reseller arrangements available',
    'Co-branded materials and partner-supported onboarding',
    'A named partner contact, not a generic channel inbox',
    'Built for MSOs, billing companies, EHR vendors, brokers and consultants'
  ],
  primaryCta: { label: 'Become a partner', href: '/contact/' },
  heroStat: 'Partners keep the client relationship; we supply the compliance capability',
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'Who partners with us',
      h2: 'Organizations already trusted by healthcare clients',
      body: cards([
        { icon: 'building', title: 'MSOs & practice management', text: 'Compliance is a standing expectation of a management services relationship. Offer a real program rather than a referral to someone you do not control.' },
        { icon: 'clipboard', title: 'Medical billing companies', text: 'Your clients ask about HIPAA and coding compliance constantly. Bundle a program and turn a recurring question into an additional service line.' },
        { icon: 'gear', title: 'EHR & health tech vendors', text: 'Your customers need compliance programs alongside your software, and your own business associate obligations run in parallel. We handle both.' },
        { icon: 'hands', title: 'Insurance brokers & agencies', text: 'Malpractice and cyber clients are asked about their compliance posture during underwriting. Compliance support strengthens both the placement and the relationship.' },
        { icon: 'users', title: 'Consultants & advisors', text: 'Extend your engagement beyond assessment into ongoing program operation, without hiring compliance staff.' },
        { icon: 'chart', title: 'Private equity & investors', text: 'Standardize compliance across a portfolio and reduce diligence friction at every add-on and at exit.' }
      ])
    }),
    section({
      eyebrow: 'How it works',
      h2: 'Two ways to partner',
      body: `<div class="split">
        <div class="panel">
          <h3>Referral partner</h3>
          <p>You introduce the client and stay informed. We handle sales, implementation, support and billing directly.</p>
          ${checklist([
            'Simple introduction process with a named partner contact',
            'Referral compensation on closed business',
            'Visibility into the status of clients you introduce',
            'No compliance expertise or delivery obligation on your side'
          ])}
        </div>
        <div class="panel panel-dark">
          <h3>Reseller / bundled partner</h3>
          <p>Compliance becomes part of your offering, under your relationship and often your brand.</p>
          ${checklist([
            'Partner pricing that supports bundling into your service',
            'Co-branded materials and joint onboarding where appropriate',
            'Dedicated partner support alongside client advisor teams',
            'Consolidated reporting across your client base'
          ])}
        </div>
      </div>`
    })
  ],
  diffH2: 'Why partners choose HCP',
  differentiators: [
    { icon: 'hands', title: 'You keep the relationship', text: 'We support your client rather than competing for them. The relationship stays yours.' },
    { icon: 'users', title: 'Delivery you can stand behind', text: 'Assigned advisors and included audit support mean a referral reflects well on you months later, not just at signing.' },
    { icon: 'gauge', title: 'One platform, four programs', text: 'HIPAA, OSHA, corporate compliance and training in a single offering, so you are not assembling vendors.' },
    { icon: 'doc', title: 'Materials that help you sell', text: 'Co-branded collateral, joint consultations and a named partner contact rather than a channel inbox.' },
    { icon: 'scale', title: 'Pricing that supports bundling', text: 'Partner pricing structured so compliance can be packaged into your existing service economics.' },
    { icon: 'lock', title: 'We handle our own obligations', text: 'As a business associate ourselves, we can satisfy the security review your clients will run on us.' }
  ],
  compare: null,
  cases: [
    { tag: 'Billing company partner', title: 'A new service line', challenge: 'A billing company fielded constant client compliance questions with no way to help beyond informal advice.', approach: 'Compliance was bundled into their service under a reseller arrangement with partner pricing and co-branded onboarding.', result: 'A recurring service line added without hiring compliance staff, and stronger client retention.' },
    { tag: 'MSO partner', title: 'Standardizing managed practices', challenge: 'An MSO managed practices with inconsistent compliance programs and inherited each one’s exposure.', approach: 'A standard HCP program was deployed across all managed practices with consolidated reporting to the MSO.', result: 'Consistent posture across the managed base and a clear answer for prospective practices.' },
    { tag: 'Broker partner', title: 'Strengthening placements', challenge: 'A broker’s healthcare clients struggled with cyber underwriting questions about their security and privacy programs.', approach: 'Clients were referred for risk assessments and program implementation ahead of renewal.', result: 'Better-prepared submissions and a differentiated service in a commoditized placement market.' }
  ],
  faqs: [
    { q: 'What does the partner program cost?', a: 'Nothing to join. Referral partners receive compensation on closed business; reseller partners receive partner pricing structured to support bundling into their own offering.' },
    { q: 'Do we need compliance expertise?', a: 'No. Referral partners simply make an introduction. Reseller partners may want enough familiarity to position the offering, and we provide enablement and joint consultations for that.' },
    { q: 'Who owns the client relationship?', a: 'You do. We support your client and coordinate with you. Reseller arrangements can be structured so we are largely invisible to the end client.' },
    { q: 'Can we use our own branding?', a: 'Co-branded materials are standard for reseller partners, and further white-labeling can be discussed depending on the arrangement and volume.' },
    { q: 'How are partner clients supported?', a: 'Identically to direct clients: an assigned advisor team, included audit support and full platform access. Partners also receive a dedicated partner contact.' },
    { q: 'Do you have your own compliance program?', a: 'Yes. We are a business associate and maintain our own HIPAA program, including risk analysis, workforce training and subcontractor management, so we can satisfy security reviews your clients run.' }
  ],
  related: [
    { href: '/medical-billing/', label: 'For billing companies', text: 'A common partner profile.' },
    { href: '/business-associates/', label: 'For business associates', text: 'Vendor HIPAA obligations.' },
    { href: '/privateequity/', label: 'For private equity', text: 'Portfolio-wide standardization.' },
    { href: '/contact/', label: 'Start a conversation', text: 'Discuss a partnership.' }
  ]
});

/* ---------------- Careers ---------------- */
const careers = buildPage({
  path: '/careers/',
  group: G,
  llmsLabel: 'Careers',
  title: 'Careers | Healthcare Compliance Pros',
  description: 'Join a team helping healthcare organizations build compliance programs that hold up. See roles, how we work and how to apply.',
  breadcrumbs: [{ label: 'About', href: '/about/' }, { label: 'Careers', href: '/careers/' }],
  eyebrow: 'Careers',
  h1: 'Work that stays with the client',
  lead: 'Compliance advising is not a ticket queue. You are assigned to organizations, you learn how they operate, and you are the person they call when something goes wrong.',
  bullets: [
    'Long-term client relationships rather than transactional support',
    'Specialist roles across compliance, coding, safety and implementation',
    'Continuing education supported as part of the job',
    'Remote and Utah-based positions'
  ],
  primaryCta: { label: 'Send us your resume', href: `mailto:${site.email}?subject=Careers%20inquiry` },
  secondaryCta: { label: 'Learn about the team', href: '/our-team/' },
  heroStat: `Headquartered in ${site.address.locality}, ${site.address.region}, with remote roles`,
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'Roles we hire for',
      h2: 'Where people fit',
      body: cards([
        { icon: 'users', title: 'Compliance Advisor', text: 'Own a portfolio of client programs. Customize policies, guide incidents, support audits and act as the primary contact. Suits people from healthcare operations, compliance or clinical administration.' },
        { icon: 'clipboard', title: 'Certified Coder / Auditor', text: 'Audit documentation against billed claims, produce provider-level findings and build corrective education. Requires an active coding credential and specialty depth.' },
        { icon: 'alert', title: 'Workplace Safety Specialist', text: 'Build exposure control and hazard communication programs, conduct facility walkthroughs and support inspection response in clinical environments.' },
        { icon: 'gear', title: 'Implementation Specialist', text: 'Run client onboarding end to end: discovery, policy customization, roster configuration and training the client’s compliance officer.' },
        { icon: 'lock', title: 'Security Risk Analyst', text: 'Conduct Security Risk Analyses against real systems and data flows, document findings and build tracked remediation plans.' },
        { icon: 'grad', title: 'Instructional Designer', text: 'Build training that people finish: focused modules, realistic scenarios and assessments that measure something worth measuring.' }
      ]) + `<p class="center mt-2">Open positions are posted as they become available. Send a resume and a note about
      what you want to work on to <a href="mailto:${site.email}">${site.email}</a> and we will keep it on file.</p>`
    }),
    section({
      eyebrow: 'How we work',
      h2: 'What to expect here',
      body: prose([
        `The core of the job is relationships. Advisors are assigned to client organizations and stay with them, which means you learn a practice's systems, history and quirks, and you are the person they call at 4:45 on a Friday when something has gone wrong. That continuity is the product, and it only works if the people doing it are given enough time per client to actually know them.`,
        `We deliberately do not run a volume support model. There is no queue to clear and no average-handle-time target, because the behavior those metrics produce is the opposite of what compliance advising requires. What we measure instead is whether clients' programs are actually current and whether they call before problems get large.`,
        `<h3>What we look for</h3>`,
        `<ul>
          <li><strong>Regulatory depth, or the appetite to build it.</strong> You do not need every credential on day one, but you need genuine interest in getting the answer right.</li>
          <li><strong>Translation ability.</strong> Explaining an implementation specification to a busy administrator so they act on it is a distinct skill from knowing the specification.</li>
          <li><strong>Operational realism.</strong> Guidance that ignores how a clinic actually runs gets ignored. The best advisors ask what happened before reaching for what the rule says.</li>
          <li><strong>Comfort with being the expert.</strong> Clients call because they do not know. You have to be willing to give a clear answer, and equally willing to say you will find out.</li>
        </ul>`,
        `Continuing education is supported as part of the role, including coding credentials, privacy and security certifications and safety training, because the regulatory environment does not hold still.`
      ])
    })
  ],
  diffH2: 'Why people stay',
  differentiators: [
    { icon: 'users', title: 'Real client relationships', text: 'Assigned portfolios rather than a rotating queue, so your work compounds instead of resetting.' },
    { icon: 'clock', title: 'No volume metrics', text: 'We measure whether client programs are current, not how fast you closed a ticket.' },
    { icon: 'grad', title: 'Education supported', text: 'Credentials and continuing education are part of the job, not something you fit around it.' },
    { icon: 'star', title: 'Specialist depth', text: 'Roles are specialized. You go deep in coding, safety, security or advisory rather than spreading thin.' },
    { icon: 'building', title: 'Remote and in-office', text: 'Utah-based and remote roles, with flexibility depending on the position.' },
    { icon: 'shield', title: 'Work that matters', text: 'Clients call because they are worried. Being the person who resolves that is a reasonable way to spend a career.' }
  ],
  compare: null,
  cases: [
    { tag: 'Advisor role', title: 'Handling an incident end to end', challenge: 'A client discovered a potential impermissible disclosure and did not know whether notification was required.', approach: 'The advisor worked the four-factor breach risk assessment with them, documented the analysis and established the facts.', result: 'A defensible determination the same day — the kind of work advisors here do regularly.' },
    { tag: 'Coder role', title: 'Changing how a group documents', challenge: 'A specialty group had a modifier pattern well outside peer norms with no idea why.', approach: 'The auditor identified the documentation gap and built targeted provider education rather than reporting a percentage.', result: 'A pattern corrected before any payer review, and measurable change in the following audit cycle.' },
    { tag: 'Safety role', title: 'Closing a citation', challenge: 'A client department was cited for an incomplete exposure control plan and inaccessible safety data sheets.', approach: 'The safety specialist rebuilt the program, moved SDS to a virtual binder and implemented recurring inspections.', result: 'Citation abated within the response window.' }
  ],
  faqs: [
    { q: 'Are positions remote?', a: 'Many are. We are headquartered in Utah and have both in-office and remote roles depending on the position. On-site service roles involve travel to client locations.' },
    { q: 'Do I need a compliance certification?', a: 'It depends on the role. Coding roles require an active credential. Advisory roles value healthcare operations or compliance experience, and we support earning certifications once you are here.' },
    { q: 'What backgrounds do advisors come from?', a: 'Practice administration, healthcare compliance, revenue cycle, clinical roles and workplace safety. The common thread is understanding how a healthcare organization actually operates.' },
    { q: 'Is there travel?', a: 'For most roles, minimal. On-site services specialists travel to client locations for training, walkthroughs and mock audits, scheduled in advance.' },
    { q: 'How do I apply if nothing is posted?', a: `Send a resume and a short note about what you want to work on to ${site.email}. We keep strong applications on file and reach out when a matching role opens.` },
    { q: 'What is the interview process?', a: 'Typically an initial conversation, a role-specific discussion with the team you would join, and a practical exercise reflecting real work — reviewing a scenario or a documentation sample rather than solving a puzzle.' }
  ],
  related: [
    { href: '/our-team/', label: 'Our team', text: 'The roles you would join.' },
    { href: '/about/', label: 'About HCP', text: 'Why the company exists.' },
    { href: '/solutions/the-hcp-difference/', label: 'The HCP difference', text: 'How we work with clients.' },
    { href: '/contact/', label: 'Contact', text: 'Get in touch.' }
  ]
});

/* ---------------- Contact ---------------- */
const contactForm = `<section class="sec" id="contact-form">
  <div class="wrap">
    <div class="contact-grid">
      <div>
        <h2>Request a consultation</h2>
        <p>Tell us a little about your organization and an advisor familiar with your setting will follow up,
        usually within one business day. There is no cost and no obligation.</p>
        <form data-contact novalidate>
          <div class="form-row form-row-2">
            <div class="field"><label for="name">Your name <span class="req" aria-hidden="true">*</span></label>
              <input type="text" id="name" name="name" autocomplete="name" required></div>
            <div class="field"><label for="organization">Organization <span class="req" aria-hidden="true">*</span></label>
              <input type="text" id="organization" name="organization" autocomplete="organization" required></div>
          </div>
          <div class="form-row form-row-2">
            <div class="field"><label for="email">Work email <span class="req" aria-hidden="true">*</span></label>
              <input type="email" id="email" name="email" autocomplete="email" required></div>
            <div class="field"><label for="phone">Phone</label>
              <input type="tel" id="phone" name="phone" autocomplete="tel"></div>
          </div>
          <div class="form-row form-row-2">
            <div class="field"><label for="size">Number of employees</label>
              <select id="size" name="size">
                <option value="">Select…</option><option>1–10</option><option>11–25</option>
                <option>26–50</option><option>51–200</option><option>201+</option>
              </select></div>
            <div class="field"><label for="interest">I am interested in</label>
              <select id="interest" name="interest">
                <option value="">Select…</option>
                <option>Free compliance risk assessment</option>
                <option>HIPAA compliance</option><option>OSHA compliance</option>
                <option>Corporate compliance</option><option>Learning management system</option>
                <option>Coding audits (SENTRY)</option><option>Fractional compliance officer</option>
                <option>Partner program</option><option>Something else</option>
              </select></div>
          </div>
          <div class="form-row">
            <div class="field"><label for="message">What would you like help with?</label>
              <textarea id="message" name="message" placeholder="Specialty, locations, current program, anything urgent…"></textarea></div>
          </div>
          <p><button type="submit" class="btn btn-primary">Request my consultation</button></p>
          <p class="form-note">We use your information only to respond to this request. See our
            <a href="/privacypolicy/">privacy policy</a>. Please do not include protected health information.</p>
        </form>
      </div>
      <div>
        <h2>Reach us directly</h2>
        <ul class="contact-facts">
          <li><svg class="ic" aria-hidden="true" focusable="false"><use href="#phone"></use></svg>
            <span><strong>Phone</strong><a href="tel:${site.phoneE164}">${site.phoneDisplay}</a></span></li>
          <li><svg class="ic" aria-hidden="true" focusable="false"><use href="#mail"></use></svg>
            <span><strong>Email</strong><a href="mailto:${site.email}">${site.email}</a></span></li>
          <li><svg class="ic" aria-hidden="true" focusable="false"><use href="#pin"></use></svg>
            <span><strong>Headquarters</strong>${esc(site.address.street)}<br>${esc(site.address.locality)}, ${site.address.region} ${site.address.postalCode}</span></li>
          <li><svg class="ic" aria-hidden="true" focusable="false"><use href="#clock"></use></svg>
            <span><strong>Hours</strong>Monday–Friday, 8:00am–6:00pm Mountain Time</span></li>
          <li><svg class="ic" aria-hidden="true" focusable="false"><use href="#lock"></use></svg>
            <span><strong>Existing clients</strong>Contact your assigned advisor team directly, or
            <a href="${site.loginUrl}" rel="nofollow">sign in to the platform</a>.</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>`;

const contact = buildPage({
  path: '/contact/',
  group: G,
  llmsLabel: 'Contact',
  title: 'Contact Healthcare Compliance Pros',
  description: `Talk to a compliance advisor about HIPAA, OSHA or corporate compliance. Call ${site.phoneDisplay} or request a free consultation online.`,
  breadcrumbs: [{ label: 'Contact', href: '/contact/' }],
  pageType: 'ContactPage',
  eyebrow: 'Contact us',
  h1: 'Talk to a compliance advisor',
  lead: 'Whether you need a full program, help with a specific problem, or just a straight answer to a question, start here.',
  bullets: [
    'Free risk assessment with a written gap analysis',
    'Advisors familiar with your specialty and organization size',
    'Typical response within one business day',
    'Existing clients: contact your assigned team directly'
  ],
  primaryCta: { label: 'Jump to the form', href: '#contact-form' },
  secondaryCta: { label: `Call ${site.phoneDisplay}`, href: `tel:${site.phoneE164}` },
  heroStat: 'Monday–Friday, 8:00am–6:00pm Mountain Time',
  sections: [contactForm],
  diffH2: 'What to expect when you reach out',
  differentiators: [
    { icon: 'users', title: 'An advisor, not a sales sequence', text: 'Your first conversation is with someone who can answer compliance questions, not a qualifier reading a script.' },
    { icon: 'search', title: 'A real assessment first', text: 'We would rather show you a gap analysis than a product demo. The findings are yours regardless.' },
    { icon: 'clock', title: 'Fast response', text: 'Most inquiries receive a response within one business day, and urgent situations are escalated immediately.' },
    { icon: 'doc', title: 'Straight answers', text: 'If your program is in decent shape, we will say so. If a gap is serious, we will say that too.' },
    { icon: 'lock', title: 'Confidential', text: 'What you share is treated as confidential. We can execute an NDA or BAA before a detailed review.' },
    { icon: 'scale', title: 'No pressure', text: 'Compliance decisions are operational decisions. We will give you what you need to make one and leave the timing to you.' }
  ],
  compare: null,
  cases: [
    { tag: 'Urgent', title: 'An incident that could not wait', challenge: 'A practice discovered a potential disclosure on a Friday afternoon and did not know their obligations.', approach: 'An advisor worked the breach risk assessment with them the same day and documented the analysis.', result: 'A defensible determination before the weekend, rather than an anxious wait and outside counsel on Monday.' },
    { tag: 'Evaluating', title: 'A question before committing', challenge: 'An administrator wanted to know whether their existing risk analysis was still valid after an EHR migration.', approach: 'An advisor reviewed the scope and dates on a short call and gave a direct answer.', result: 'A clear answer at no cost, and the practice engaged months later when they were ready.' },
    { tag: 'Switching vendors', title: 'Migrating an existing program', challenge: 'A group was unhappy with a prior vendor but worried about losing years of training records.', approach: 'The advisor reviewed what could be validated and imported, and rebuilt what was no longer accurate.', result: 'A clean migration that preserved historical evidence where it was defensible.' }
  ],
  faqs: [
    { q: 'How quickly will someone respond?', a: 'Most inquiries receive a response within one business day. If you have an active incident or an audit deadline, say so in your message or call directly and we will escalate.' },
    { q: 'Do I have to buy anything to get the assessment?', a: 'No. The risk assessment is free, carries no obligation, and the written findings are yours whether or not you become a client.' },
    { q: 'Can I just ask a question?', a: 'Yes. Plenty of people call with a single question about an incident, a training requirement or a BAA. We will give you a straight answer.' },
    { q: 'I am an existing client — where do I go?', a: 'Contact your assigned advisor team directly using the contact information they provided, or sign in to the platform. This form routes to new inquiries and may be slower.' },
    { q: 'Should I include patient information?', a: 'No. Please do not include protected health information in the form or in email. If a matter requires discussing specifics, your advisor will arrange a secure channel.' },
    { q: 'Do you work outside the United States?', a: 'Our programs are built around United States federal and state regulation. We work with US organizations, including those with offshore subcontractors whose arrangements we help bring under agreement.' }
  ],
  related: [
    { href: '/compliance-assessment/', label: 'Free risk assessment', text: 'What the first conversation covers.' },
    { href: '/tips-faqs/', label: 'Compliance tips & FAQ', text: 'Answers to common questions.' },
    { href: '/about/', label: 'About HCP', text: 'Who you would be working with.' },
    { href: '/partners/', label: 'Partner program', text: 'Partnership inquiries.' }
  ],
  cta: {
    h2: 'Prefer to talk right now?',
    text: `Call ${site.phoneDisplay} during business hours and ask for a compliance advisor. If you have an active incident or audit deadline, say so and we will prioritize it.`,
    primary: { label: `Call ${site.phoneDisplay}`, href: `tel:${site.phoneE164}` },
    secondary: { label: 'Email us', href: `mailto:${site.email}` }
  }
});

export default [difference, assessment, about, team, testimonials, partners, careers, contact];
