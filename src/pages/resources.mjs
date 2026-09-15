import { buildPage, section, prose, cards, checklist } from '../shared.mjs';
import { abs, esc } from '../layout.mjs';
import { site } from '../site.mjs';

const G = 'Resources';
const crumbBlog = { label: 'Blog', href: '/blog/' };

const articles = [
  {
    slug: 'the-essential-compliance-management-tools-every-business-needs',
    title: 'The compliance management tools every healthcare organization needs',
    date: '2026-08-18', dateLabel: 'August 18, 2026', read: '8 min read', topic: 'Program management',
    excerpt: 'Compliance tooling is often bought backwards — a training catalog first, evidence last. Here is the order that actually works, and what each tool has to produce.',
    desc: 'The six compliance management tools healthcare organizations actually need, in the order they should be adopted and what each must produce.'
  },
  {
    slug: 'unpacking-ai-compliance-what-every-business-needs-to-know',
    title: 'Unpacking AI compliance: what healthcare organizations need to know',
    date: '2026-07-02', dateLabel: 'July 2, 2026', read: '9 min read', topic: 'Emerging risk',
    excerpt: 'Ambient scribes, chatbots and coding assistants are already in clinical workflows. The HIPAA questions they raise are not new — but the answers require decisions most practices have not made.',
    desc: 'How HIPAA applies to AI scribes, chatbots and coding assistants, and the business associate questions practices must answer before deployment.'
  },
  {
    slug: 'discover-the-top-compliance-software-solutions-for-your-organization',
    title: 'How to evaluate compliance software without getting burned',
    date: '2026-05-20', dateLabel: 'May 20, 2026', read: '7 min read', topic: 'Buying guide',
    excerpt: 'Most compliance software demos show you the same four screens. Here are the questions that actually separate a platform that will hold up from one that will not.',
    desc: 'A practical framework for evaluating healthcare compliance software, including the questions that reveal whether a platform will hold up in an audit.'
  }
];

const articleBodies = {
  'the-essential-compliance-management-tools-every-business-needs': [
    section({
      cls: 'sec-alt',
      h2: 'Start with evidence, not training',
      body: prose([
        `Most healthcare organizations buy compliance tooling in roughly the reverse of the useful order. Training comes first, because it is the most visible obligation and the easiest to purchase. Policy templates come second. Evidence capture — the thing an investigator will actually ask for — comes last, if at all, usually assembled in a spreadsheet by whoever drew the short straw.`,
        `The consequence is predictable. An organization can complete every course in its catalog and still fail an audit, because completion that cannot be demonstrated per individual, per topic, with dates, is not evidence. Reordering the purchase around what must be produced, rather than what must be done, changes the entire shape of the program.`,
        `<h3>1. A document system with revision history</h3>`,
        `<p>Your policies are the foundation of everything else: they define what training must cover, what staff must acknowledge, and what an investigator compares your practice against. The requirement is not merely to have them but to know which version was in effect when, and who acknowledged it. A shared drive with files named "HIPAA_Policy_final_v3_REVISED.docx" does not satisfy this, and it is what most organizations are actually running.</p>`,
        `<h3>2. Acknowledgement tracking</h3>`,
        `<p>Writing a policy proves nothing about whether your workforce received it. Acknowledgement tracking closes that gap: when a policy is issued or revised, the affected workforce members are prompted, and their acknowledgement is recorded with a timestamp. This is the single cheapest piece of evidence to generate and among the most frequently missing.</p>`,
        `<h3>3. Role-based training assignment</h3>`,
        `<p>Blanket assignment is why completion rates are poor. When a front desk coordinator is assigned sharps handling and a clinical assistant is assigned the same generic module as everyone else, staff learn that assignments are noise and treat them accordingly. Assignment driven by role, department and location makes each assignment relevant, which is the only sustainable path to high completion.</p>`,
        `<h3>4. A risk analysis instrument with remediation tracking</h3>`,
        `<p>The Security Risk Analysis is the most commonly cited deficiency in federal HIPAA enforcement, and the most common failure is not the absence of an analysis but the absence of what follows it. A finding with no owner, no target date and no status is not a risk management plan. The tool has to carry the remediation, not just produce the assessment.</p>`,
        `<h3>5. An incident log</h3>`,
        `<p>Every impermissible use or disclosure needs to be recorded, assessed and dispositioned, including the ones you conclude are not reportable. The reasoning matters as much as the conclusion — a documented four-factor analysis showing why notification was not required is a defense; an undocumented decision is a gap.</p>`,
        `<h3>6. Recurring screening and expiration monitoring</h3>`,
        `<p>Exclusion screening, license expirations, certification renewals and insurance coverage all share a property: they are fine until suddenly they are not, and the failure is silent. Any tool covering these must alert before the date rather than report after it, and must retain dated evidence that the check was performed.</p>`,
        `<h3>What this looks like assembled</h3>`,
        `<p>Organizations that get this right are not running six tools. They are running one system where a policy revision automatically generates acknowledgement requests and training assignments, where risk findings become tracked corrective actions, and where every one of those events leaves a dated record. The integration is the value; six disconnected tools reproduce the spreadsheet problem with a larger invoice.</p>`
      ])
    })
  ],
  'unpacking-ai-compliance-what-every-business-needs-to-know': [
    section({
      cls: 'sec-alt',
      h2: 'The questions are old; the deployments are new',
      body: prose([
        `Artificial intelligence has moved into clinical and administrative workflows faster than most compliance programs have adapted. Ambient documentation tools listen to encounters and draft notes. Chat interfaces answer patient questions. Coding assistants suggest levels and modifiers. Scheduling and triage tools handle patient contact directly.`,
        `The reassuring news is that HIPAA does not require a new framework to address these. The uncomfortable news is that applying the existing framework requires answering questions most organizations have not yet asked about tools their staff are, in many cases, already using.`,
        `<h3>Is the vendor a business associate?</h3>`,
        `<p>If a tool creates, receives, maintains or transmits protected health information on your behalf, the vendor is a business associate and requires an executed agreement. An ambient scribe processing encounter audio is handling PHI. A chatbot collecting symptoms and contact details is handling PHI. The determination is not about whether the tool is "AI" — it is the same analysis you would apply to any vendor.</p>`,
        `<h3>Where does the data go, and what happens to it there?</h3>`,
        `<p>This is the question that separates AI vendors from conventional ones. Ask specifically: is our data used to train models, ours or anyone else's? Is it retained after processing, and for how long? Is it processed or stored outside the United States? Are subcontractors involved, and are they under agreement? A vendor that cannot answer these clearly in writing has told you something important.</p>`,
        `<h3>Who is accountable for the output?</h3>`,
        `<p>An AI-drafted note is still the clinician's documentation, and an AI-suggested code is still your claim. If the note contains content the encounter does not support, the exposure is yours, not the vendor's. This makes review workflow a compliance control rather than a convenience preference — and it makes "the AI generated it" a position with no regulatory standing.</p>`,
        `<h3>Have staff been trained on appropriate use?</h3>`,
        `<p>The most common incident pattern we see is not a vendor failure. It is a staff member pasting patient information into a general-purpose consumer AI tool that is not under agreement, was never evaluated, and may retain what it receives. That is an impermissible disclosure, and it happens because nobody told them not to. An acceptable use policy plus training on it is inexpensive and addresses the most likely failure directly.</p>`,
        `<h3>What we recommend</h3>`,
        `<ul>
          <li>Inventory what is actually in use, including tools staff adopted without approval — this exercise reliably surprises people</li>
          <li>Execute business associate agreements for every tool touching PHI, with explicit terms on training use, retention and subcontractors</li>
          <li>Update your risk analysis to include AI tools as systems handling ePHI</li>
          <li>Write an acceptable use policy that names which tools are approved and states plainly that others are not</li>
          <li>Train staff on it, and document the training</li>
          <li>Define review requirements for AI-generated documentation and coding suggestions</li>
        </ul>`,
        `<p>None of this requires waiting for new regulation. The existing framework answers these questions; the work is applying it before a tool is in production rather than after an incident.</p>`
      ])
    })
  ],
  'discover-the-top-compliance-software-solutions-for-your-organization': [
    section({
      cls: 'sec-alt',
      h2: 'Demos show capability; audits test evidence',
      body: prose([
        `Compliance software demonstrations converge on the same four screens: a policy library, a course catalog, a completion dashboard and a reporting export. They all look competent, because at that level of abstraction they largely are. The differences that matter emerge eighteen months later, during an audit, and are not visible in a demo unless you ask for them specifically.`,
        `Here are the questions that surface those differences.`,
        `<h3>"Show me the evidence package for one employee."</h3>`,
        `<p>Ask the vendor to produce, for a single individual, every policy they acknowledged with dates and versions, every course completed with dates and scores, their credential status and their screening history. This is what an investigator requests. If it takes multiple exports and manual assembly in the demo, it will take days in an audit.</p>`,
        `<h3>"What happens when a regulation changes?"</h3>`,
        `<p>There is a meaningful difference between a vendor that emails you a newsletter and one that revises your policies, updates affected courses and pushes acknowledgement requests to the workforce members concerned. The first shifts the work to you while appearing to provide a service. Ask for a specific recent example of a regulatory change and exactly what the vendor did about it.</p>`,
        `<h3>"Are these policies customized or templated?"</h3>`,
        `<p>Ask to see two policy manuals from different clients in different specialties. If they are substantially identical, you are buying a template with your name inserted — which creates a documented gap between your stated policy and your actual practice. That gap is worse in an investigation than an honest, accurate policy.</p>`,
        `<h3>"What does support cost during an audit?"</h3>`,
        `<p>This is the question that most reliably separates vendors. Many include support for routine questions and bill audit response as a separate engagement at consulting rates — precisely when you have the least leverage and the most urgency. Ask directly, and ask for it in writing.</p>`,
        `<h3>"Who conducts the Security Risk Analysis?"</h3>`,
        `<p>A self-service questionnaire producing a PDF is not a risk analysis in the sense the Security Rule contemplates. Ask who conducts it, what their background is, whether it examines your actual systems and data flows, and whether the output includes a risk management plan with owners and dates.</p>`,
        `<h3>"Can we export everything if we leave?"</h3>`,
        `<p>Your training records, acknowledgements, policies and logs are your compliance evidence. If a vendor cannot commit to a complete export in standard formats, your evidence is hostage to a commercial relationship, which is an unacceptable position for records you may need for years.</p>`,
        `<h3>A note on price</h3>`,
        `<p>Compliance software spans a wide price range, and the cheap end is genuinely cheap. The relevant comparison is not the subscription against a competing subscription; it is the subscription against the cost of reconstructing evidence under a 30-day deadline, with outside counsel, while running a practice. Organizations that have been through that comparison rarely optimize for the lowest line item afterward.</p>`
      ])
    })
  ]
};

const articlePages = articles.map((a) => buildPage({
  path: `/${a.slug}/`,
  group: G,
  llmsLabel: a.title,
  title: a.title.length > 60 ? a.title.slice(0, 57) + '…' : a.title,
  description: a.desc.slice(0, 155),
  breadcrumbs: [crumbBlog, { label: a.title, href: `/${a.slug}/` }],
  pageType: 'Article',
  ogType: 'article',
  datePublished: a.date,
  eyebrow: `${a.topic} · ${a.read}`,
  h1: a.title,
  lead: a.excerpt,
  primaryCta: { label: 'Get a free risk assessment', href: '/compliance-assessment/' },
  secondaryCta: { label: 'Read more articles', href: '/blog/' },
  heroStat: `Published ${a.dateLabel} by the Healthcare Compliance Pros advisory team`,
  extraSchema: [{
    '@type': 'Article',
    '@id': abs(`/${a.slug}/`) + '#article',
    headline: a.title,
    description: a.desc,
    datePublished: a.date,
    dateModified: a.date,
    author: { '@id': abs('/#organization') },
    publisher: { '@id': abs('/#organization') },
    mainEntityOfPage: { '@id': abs(`/${a.slug}/`) + '#webpage' },
    articleSection: a.topic,
    inLanguage: 'en-US'
  }],
  sections: articleBodies[a.slug],
  diffH2: 'How HCP applies this',
  cases: [
    { tag: 'Independent practice', title: 'Evidence produced in an afternoon', challenge: 'An OCR data request arrived with a 30-day deadline at a practice with no compliance staff.', approach: 'Policies with revision history, per-person training records, the risk analysis and remediation plan were pulled from one system.', result: 'A complete response inside the deadline, closed with no corrective action plan.' },
    { tag: 'Multi-site group', title: 'A vendor inventory that surprised everyone', challenge: 'A group believed its business associate agreements were complete.', approach: 'Vendors were mapped against actual systems and workflows rather than against the contract folder.', result: 'Three vendors with PHI access and no agreement identified and closed within six weeks.' },
    { tag: 'Business associate', title: 'Documentation that answered the reviewer', challenge: 'A vendor stalled repeatedly at enterprise security reviews.', approach: 'A documented risk analysis, policies, training records and subcontractor tracking were put in place.', result: 'Reviews became a retrieval exercise rather than a project.' }
  ],
  faqs: [
    { q: 'Is this article legal advice?', a: 'No. It is general compliance guidance from our advisory team. Regulatory requirements vary by organization, state and circumstance, and specific situations should be discussed with your compliance advisor or counsel.' },
    { q: 'How current is this information?', a: `This article was published ${a.dateLabel}. Regulatory guidance changes; HCP clients receive updates through their advisor team and through policy and course revisions pushed into their programs.` },
    { q: 'Where can I ask a specific question?', a: `Call ${site.phoneDisplay} or request a consultation. Plenty of people call with a single question, and we will give you a straight answer at no cost.` },
    { q: 'Can we reuse this content?', a: 'You are welcome to cite and link to it with attribution to Healthcare Compliance Pros. Please do not republish it in full without permission.' },
    { q: 'Do you cover this topic in training?', a: 'Where applicable, yes. Our 130+ course library covers HIPAA, OSHA, corporate compliance, coding and documentation topics, and custom courses can be built for organization-specific needs.' },
    { q: 'How do I get notified of new articles?', a: 'Subscribe through the contact form and note that you would like compliance updates. Our advisors share regulatory changes, trending topics and practical resources.' }
  ],
  related: [
    { href: '/blog/', label: 'All articles', text: 'Browse the compliance blog.' },
    { href: '/tips-faqs/', label: 'Compliance tips & FAQ', text: 'Quick answers to common questions.' },
    { href: '/webinars/', label: 'Webinars', text: 'Live and recorded sessions.' },
    { href: '/compliance-assessment/', label: 'Free risk assessment', text: 'Apply this to your own program.' }
  ]
}));

/* ---------------- Blog index ---------------- */
const blog = buildPage({
  path: '/blog/',
  group: G,
  llmsLabel: 'Compliance Blog',
  title: 'Healthcare Compliance Blog | HCP',
  description: 'Practical guidance on HIPAA, OSHA, corporate compliance, coding and emerging risk, written by the HCP advisory team.',
  breadcrumbs: [crumbBlog],
  pageType: 'CollectionPage',
  eyebrow: 'Compliance blog',
  h1: 'Practical compliance guidance',
  lead: 'Written by the advisors who handle these situations with clients — focused on what to actually do, not on restating the regulation.',
  bullets: [
    'HIPAA Privacy and Security guidance',
    'OSHA and workplace safety for clinical settings',
    'Coding, documentation and billing integrity',
    'Emerging risk, including AI in clinical workflows'
  ],
  heroStat: 'No registration required to read anything here',
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'Latest articles',
      h2: 'Recent posts',
      body: `<ul class="posts">${articles.map((a) => `<li class="post">
        <p class="post-meta">${esc(a.topic)} · ${esc(a.dateLabel)} · ${esc(a.read)}</p>
        <h3><a href="/${a.slug}/">${esc(a.title)}</a></h3>
        <p>${esc(a.excerpt)}</p>
        <p><a class="card-link" href="/${a.slug}/">Continue reading</a></p>
      </li>`).join('')}</ul>`
    }),
    section({
      eyebrow: 'What we write about',
      h2: 'Topics we cover',
      body: prose([
        `Our writing follows the questions clients actually ask. When several organizations raise the same issue in the same quarter — a new enforcement pattern, an unfamiliar technology, a requirement people consistently misread — it becomes an article.`,
        `That means the coverage skews practical. We are less interested in summarizing a rule than in describing what it requires you to do differently on Monday, what evidence it obliges you to produce, and what the common failure mode looks like. Where a topic genuinely requires legal judgment, we say so rather than pretending otherwise.`,
        `<h3>Recurring subjects</h3>`,
        `<ul>
          <li>HIPAA Privacy and Security Rule application to specific, ordinary situations</li>
          <li>Security Risk Analysis: what makes one adequate and what makes one citable</li>
          <li>Breach assessment and notification decisions</li>
          <li>OSHA requirements in clinical environments and inspection preparation</li>
          <li>Corporate compliance program structure and the seven elements in practice</li>
          <li>Coding and documentation patterns that attract payer attention</li>
          <li>Business associate obligations and vendor management</li>
          <li>Emerging technology risk, including AI tools in clinical workflows</li>
        </ul>`
      ])
    })
  ],
  diffH2: 'Why read ours',
  differentiators: [
    { icon: 'users', title: 'Written by practitioners', text: 'Articles come from advisors who handle these situations with clients, not from a content team summarizing regulations.' },
    { icon: 'doc', title: 'Actionable, not encyclopedic', text: 'The focus is what to do differently and what evidence it produces, rather than restating rule text.' },
    { icon: 'search', title: 'Drawn from real questions', text: 'Topics come from what clients are actually asking in a given quarter.' },
    { icon: 'lock', title: 'No registration wall', text: 'Everything is readable without a form. Gating practical compliance guidance would be a strange thing to do.' },
    { icon: 'scale', title: 'Honest about limits', text: 'Where a question requires legal judgment, we say so instead of implying otherwise.' },
    { icon: 'refresh', title: 'Updated when things change', text: 'Client programs receive regulatory updates directly; articles are revisited when guidance shifts materially.' }
  ],
  compare: null,
  cases: [
    { tag: 'Reader to client', title: 'A question that became an assessment', challenge: 'An administrator read about risk analysis currency and realized theirs predated two EHR migrations.', approach: 'They called with a single question, and an advisor confirmed the analysis no longer described their environment.', result: 'A current analysis completed, closing the organization’s highest-exposure gap.' },
    { tag: 'Topic to training', title: 'An article that became a course', challenge: 'Client questions about AI tools in clinical workflows rose sharply over one quarter.', approach: 'The guidance was written up, then built into an acceptable-use training module for client staff.', result: 'Clients moved from uncertainty to a documented policy and trained workforce.' },
    { tag: 'Guidance to action', title: 'A vendor inventory triggered by a post', challenge: 'A practice read about business associate gaps and decided to inventory their own vendors.', approach: 'A structured review mapped vendors against systems rather than against the contract folder.', result: 'Two vendors with PHI access and no agreement identified and brought under agreement.' }
  ],
  faqs: [
    { q: 'How often do you publish?', a: 'Regularly, driven by what clients are asking and by regulatory developments worth explaining, rather than by a fixed content calendar.' },
    { q: 'Do I need to register to read?', a: 'No. Everything on the blog is readable without a form. Gating practical compliance guidance behind registration would be a strange thing to do.' },
    { q: 'Can I suggest a topic?', a: `Yes, and we welcome it. Email ${site.email} with what you are trying to figure out. Questions from practitioners make the best articles.` },
    { q: 'Is this legal advice?', a: 'No. It is general compliance guidance. Requirements vary by organization, state and circumstance, and specific situations should go to your compliance advisor or counsel.' },
    { q: 'Can I republish an article?', a: 'Please cite and link with attribution rather than republishing in full. If you would like to syndicate something, get in touch and we will usually say yes.' },
    { q: 'Where else can I learn?', a: 'Webinars and podcasts cover similar ground in other formats, and the compliance tips and FAQ page holds shorter answers to frequent questions.' }
  ],
  related: [
    { href: '/tips-faqs/', label: 'Compliance tips & FAQ', text: 'Short answers to frequent questions.' },
    { href: '/webinars/', label: 'Webinars', text: 'Live and recorded sessions.' },
    { href: '/podcasts/', label: 'Podcasts', text: 'Compliance conversations.' },
    { href: '/events/', label: 'Events', text: 'Where to find us in person.' }
  ]
});

/* ---------------- Webinars / Podcasts / Events ---------------- */
const mediaPage = ({ path, name, h1, lead, eyebrow, desc, intro, items, faqs, llmsLabel }) => buildPage({
  path, group: G, llmsLabel,
  title: `${name} | Healthcare Compliance Pros`,
  description: desc.slice(0, 155),
  breadcrumbs: [{ label: name, href: path }],
  pageType: 'CollectionPage',
  eyebrow, h1, lead,
  bullets: [
    'Led by HCP compliance advisors and specialists',
    'Practical focus on what to implement, not rule summaries',
    'Open to clients and non-clients alike',
    'Recordings available where applicable'
  ],
  heroStat: 'No cost to attend',
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'What to expect',
      h2: intro.h2,
      body: prose(intro.paragraphs)
    }),
    section({
      eyebrow: 'Topics',
      h2: `Recurring ${name.toLowerCase()} topics`,
      body: cards(items)
    })
  ],
  diffH2: `Why attend our ${name.toLowerCase()}`,
  differentiators: [
    { icon: 'users', title: 'Practitioners, not marketers', text: 'Sessions are led by advisors who handle these situations with clients every week.' },
    { icon: 'doc', title: 'Implementation focus', text: 'The goal is that you leave knowing what to change, not that you leave having heard a rule restated.' },
    { icon: 'search', title: 'Real questions answered', text: 'Live Q&A is the most valuable part of most sessions, and we schedule time for it deliberately.' },
    { icon: 'lock', title: 'Open to everyone', text: 'Attendance is not limited to clients, and there is no cost.' },
    { icon: 'grad', title: 'Useful for your program', text: 'Attendance can support your workforce education documentation where the content applies.' },
    { icon: 'refresh', title: 'Current', text: 'Sessions respond to what is happening now — enforcement patterns, new guidance, emerging technology.' }
  ],
  compare: null,
  cases: [
    { tag: 'From session to action', title: 'A risk analysis that got redone', challenge: 'An attendee realized during a session that their risk analysis predated a major system change.', approach: 'They requested an assessment, which confirmed the analysis no longer described their environment.', result: 'A current analysis completed with a tracked remediation plan.' },
    { tag: 'Staff education', title: 'Sessions used as team training', challenge: 'A practice wanted current regulatory education for its compliance committee beyond annual courses.', approach: 'The committee attended sessions together and discussed application to their own program afterward.', result: 'A better-informed committee and documented ongoing education.' },
    { tag: 'Question to answer', title: 'A live question that changed a policy', challenge: 'An attendee asked about a vendor arrangement they had assumed was fine.', approach: 'The advisor identified that the arrangement required a business associate agreement.', result: 'A gap closed that the organization had not known existed.' }
  ],
  faqs,
  related: [
    { href: '/blog/', label: 'Compliance blog', text: 'Written guidance from our advisors.' },
    { href: '/tips-faqs/', label: 'Compliance tips & FAQ', text: 'Short answers to common questions.' },
    { href: '/webinars/', label: 'Webinars', text: 'Live and recorded sessions.' },
    { href: '/contact/', label: 'Ask a question', text: 'Talk to an advisor directly.' }
  ]
});

const webinars = mediaPage({
  path: '/webinars/', name: 'Webinars', llmsLabel: 'Webinars',
  eyebrow: 'Webinars',
  h1: 'Live compliance sessions, with real Q&A',
  lead: 'Short, practical sessions led by HCP advisors on the topics clients are asking about right now — with time set aside for the questions that matter most.',
  desc: 'Free live and recorded webinars on HIPAA, OSHA, corporate compliance and coding, led by HCP compliance advisors with live Q&A.',
  intro: {
    h2: 'Practical sessions, not product demonstrations',
    paragraphs: [
      `Our webinars are built around a simple constraint: an attendee should leave able to do something differently. That rules out the format most compliance webinars adopt, in which a rule is summarized at length and a product is introduced at the end.`,
      `Sessions typically run 30 to 45 minutes, with a focused topic and substantial time for questions. The Q&A is usually the most valuable portion, because the questions attendees raise are the ones their organizations are actually facing — and hearing another practice describe your problem is often more useful than the prepared material.`,
      `Sessions are free and open to clients and non-clients alike. Where a session is recorded, the recording is made available afterward. To be notified of upcoming sessions, <a href="/contact/">request compliance updates</a> and let us know you would like the webinar schedule.`
    ]
  },
  items: [
    { icon: 'lock', title: 'HIPAA in practice', text: 'Security Risk Analysis requirements, breach assessment decisions, patient access requests, and the situations that generate the most enforcement activity.' },
    { icon: 'alert', title: 'OSHA for clinical settings', text: 'Exposure control planning, hazard communication, inspection preparation and the documentation inspectors ask for first.' },
    { icon: 'scale', title: 'Corporate compliance', text: 'Building the seven elements so they operate rather than sit on a shelf, exclusion screening and hotline handling.' },
    { icon: 'clipboard', title: 'Coding & documentation', text: 'Patterns that draw payer attention, E/M documentation, modifier use and preparing for a payer audit.' },
    { icon: 'gear', title: 'Emerging risk', text: 'AI tools in clinical workflows, telehealth privacy, vendor management and cyber incident preparation.' },
    { icon: 'users', title: 'Program leadership', text: 'For compliance officers and administrators: work plans, committee governance, board reporting and prioritizing with limited resources.' }
  ],
  faqs: [
    { q: 'Are webinars free?', a: 'Yes. Sessions are free and open to clients and non-clients alike. There is no sales requirement to attend.' },
    { q: 'Are sessions recorded?', a: 'Most are. Where a recording is available it is provided to registrants afterward, though the live Q&A is generally the most valuable part.' },
    { q: 'Do webinars count as staff training?', a: 'Attendance can support your ongoing workforce education documentation where the content applies to the attendee’s role. For required annual training, use the assigned courses in your platform, which generate per-person completion records.' },
    { q: 'Can I ask a question about my organization?', a: 'Yes, and please do — those questions make the best sessions. For anything specific or sensitive, follow up with an advisor directly rather than in the public session.' },
    { q: 'How do I find out about upcoming sessions?', a: 'Request compliance updates through the contact form and note that you would like the webinar schedule. Clients also hear about sessions from their advisor team.' },
    { q: 'Can you run a private session for our organization?', a: 'Yes. Private sessions for a practice, health system department or partner’s client base can be scheduled, and on-site training is available as well.' }
  ]
});

const podcasts = mediaPage({
  path: '/podcasts/', name: 'Podcasts', llmsLabel: 'Podcasts',
  eyebrow: 'Podcasts',
  h1: 'Compliance conversations worth the commute',
  lead: 'Longer-form discussions with HCP advisors and guests about what is actually happening in healthcare compliance — enforcement patterns, practical fixes and the mistakes that keep repeating.',
  desc: 'Longer-form healthcare compliance conversations with HCP advisors and guests on enforcement trends, practical fixes and recurring mistakes.',
  intro: {
    h2: 'The format suits the harder questions',
    paragraphs: [
      `Some compliance topics do not compress well. Whether a particular vendor arrangement creates a business associate relationship, how to think about a breach risk assessment where the facts are genuinely ambiguous, or what an effective compliance committee actually does — these need room to explore, including the parts where reasonable people disagree.`,
      `Episodes tend to run longer than our webinars and are more conversational. Advisors talk through situations they have handled, what they got right, and occasionally what they would approach differently. Guests include compliance officers, coders, safety specialists and healthcare operators describing what the work looks like from inside an organization.`,
      `Episodes are free and require no registration. If there is a topic you would like covered, <a href="/contact/">tell us</a> — listener questions drive a significant share of what we record.`
    ]
  },
  items: [
    { icon: 'shield', title: 'Enforcement patterns', text: 'What recent settlements and corrective action plans reveal about where regulators are focusing, and what that means for organizations your size.' },
    { icon: 'users', title: 'Practitioner interviews', text: 'Compliance officers and administrators on building a program with limited resources, and what they wish they had done sooner.' },
    { icon: 'search', title: 'Case walkthroughs', text: 'Anonymized situations worked through start to finish: what happened, what the analysis looked like, and how it resolved.' },
    { icon: 'clipboard', title: 'Coding deep dives', text: 'Certified coders on documentation patterns, specialty-specific pitfalls and what payer audits actually examine.' },
    { icon: 'gear', title: 'Technology & risk', text: 'AI in clinical workflows, vendor security, telehealth and the compliance questions new tools raise.' },
    { icon: 'scale', title: 'Program building', text: 'Governance, committees, work plans and how to prioritize when you cannot do everything at once.' }
  ],
  faqs: [
    { q: 'Where can I listen?', a: 'Episodes are published on our site and distributed through major podcast platforms. Links are available on request, and clients hear about new episodes from their advisor team.' },
    { q: 'How long are episodes?', a: 'Typically longer and more conversational than our webinars, because the topics we choose for this format are the ones that do not compress well.' },
    { q: 'Can I suggest a topic or be a guest?', a: `Yes to both. Email ${site.email}. We are particularly interested in practitioners willing to talk about what building a program actually looked like, including the parts that went badly.` },
    { q: 'Is the content client-specific?', a: 'No. Any situation discussed is anonymized and generalized. We never discuss an identifiable client matter.' },
    { q: 'Does listening count as training?', a: 'It supports ongoing professional education but does not substitute for assigned annual training, which needs per-person, per-topic completion records.' },
    { q: 'Is this legal advice?', a: 'No. Episodes are general compliance discussion. Specific situations should go to your compliance advisor or counsel.' }
  ]
});

const events = mediaPage({
  path: '/events/', name: 'Events', llmsLabel: 'Events',
  eyebrow: 'Events',
  h1: 'Where to find us in person',
  lead: 'Conferences, association meetings and specialty events where HCP advisors are speaking, exhibiting or simply available to answer questions.',
  desc: 'Conferences, association meetings and specialty events where HCP compliance advisors are speaking, exhibiting or available for questions.',
  intro: {
    h2: 'Conversations that work better face to face',
    paragraphs: [
      `Compliance questions are often easier to work through in person. An administrator can describe a situation in three sentences that would take six emails, and an advisor can ask the follow-up question that changes the answer. A good portion of our client relationships began as a fifteen-minute conversation at a booth.`,
      `We attend specialty society meetings, state and regional healthcare association events, practice management conferences and coding and compliance gatherings. Advisors present where the format allows, usually on the topics generating the most questions that year, and are otherwise available for open conversation.`,
      `If you are attending an event and would like to schedule time with an advisor, <a href="/contact/">let us know in advance</a> and we will arrange it. If you are organizing an event and want a speaker on healthcare compliance, we are generally glad to help.`
    ]
  },
  items: [
    { icon: 'building', title: 'Specialty society meetings', text: 'Orthopedics, dermatology, ENT, behavioral health and other specialty gatherings where compliance questions are specific to the setting.' },
    { icon: 'users', title: 'Practice management conferences', text: 'Events for administrators and operations leaders, where compliance sits alongside staffing, revenue cycle and technology decisions.' },
    { icon: 'clipboard', title: 'Coding & billing events', text: 'Conferences for coders, billers and revenue cycle professionals, including documentation and audit preparation sessions.' },
    { icon: 'scale', title: 'Compliance conferences', text: 'Gatherings for compliance officers and risk professionals, covering program structure, enforcement trends and governance.' },
    { icon: 'hands', title: 'Association & regional meetings', text: 'State and regional healthcare association events, often with a focus on state-specific requirements.' },
    { icon: 'grad', title: 'Speaking engagements', text: 'Advisors present on HIPAA, OSHA, corporate compliance and coding topics for associations, MSOs and partner organizations.' }
  ],
  faqs: [
    { q: 'How do I find out where you will be?', a: `Request compliance updates through the contact form and ask for the event schedule, or email ${site.email} with an event you are attending and we will tell you whether we will be there.` },
    { q: 'Can I schedule time with an advisor at an event?', a: 'Yes, and it is the best way to use the time. Let us know in advance and we will arrange a specific slot rather than hoping to catch each other at a booth.' },
    { q: 'Do you speak at events?', a: 'Regularly. Advisors present on HIPAA, OSHA, corporate compliance and coding topics. If you are organizing an event and need a speaker, get in touch.' },
    { q: 'Do you exhibit?', a: 'At many events, yes. Stop by with a question — including a hard one. Working through a real situation is more useful for both of us than a brochure.' },
    { q: 'Can you present to our organization directly?', a: 'Yes. Private sessions can be delivered remotely or on site, including training for staff and briefings for boards or compliance committees.' },
    { q: 'Are there costs to meet with you?', a: 'No. Conversations at events, scheduled meetings and initial consultations are free, as is the compliance risk assessment.' }
  ]
});

/* ---------------- Tips & FAQ ---------------- */
const tips = buildPage({
  path: '/tips-faqs/',
  group: G,
  llmsLabel: 'Compliance Tips & FAQ',
  title: 'Healthcare Compliance Tips & FAQ | HCP',
  description: 'Straight answers to the HIPAA, OSHA and corporate compliance questions healthcare organizations ask most, from the HCP advisory team.',
  breadcrumbs: [{ label: 'Compliance Tips & FAQ', href: '/tips-faqs/' }],
  eyebrow: 'Tips & FAQ',
  h1: 'The questions we answer most often',
  lead: 'Plain answers to the compliance questions healthcare organizations raise every week — without the hedging that makes most compliance guidance useless.',
  bullets: [
    'HIPAA Privacy, Security and breach questions',
    'OSHA requirements for clinical environments',
    'Corporate compliance and exclusion screening',
    'Training, documentation and audit preparation'
  ],
  heroStat: 'Have a question that is not here? Call and ask.',
  sections: [
    section({
      cls: 'sec-alt',
      eyebrow: 'Quick guidance',
      h2: 'Six things worth checking this month',
      lead: 'Each of these is common, consequential and closable in under a week.',
      body: cards([
        { icon: 'search', title: 'Date your risk analysis', text: 'Find your Security Risk Analysis and check the date and scope. If it predates your current EHR, a location change or a significant system change, it no longer describes your environment — and this is the single most cited HIPAA deficiency.' },
        { icon: 'doc', title: 'Inventory your vendors', text: 'List every vendor that could touch patient information, working from your actual systems and workflows rather than your contract folder. Then check which ones have an executed agreement. Most organizations find at least one gap.' },
        { icon: 'users', title: 'Test your training evidence', text: 'Pick one employee and try to produce every course they completed, with topic and date. If that takes more than a few minutes, an auditor’s request will take weeks.' },
        { icon: 'refresh', title: 'Check screening frequency', text: 'Confirm exclusion screening is running monthly, not only at hire, and that results are retained with dates. Hire-date-only screening leaves years of exposure.' },
        { icon: 'alert', title: 'Walk to your SDS binder', text: 'Physically go to where safety data sheets live and ask whether an evening staff member could reach them. Inaccessible SDS is among the most common OSHA findings in healthcare.' },
        { icon: 'lock', title: 'Verify device encryption', text: 'Confirm every laptop, tablet and portable drive holding patient information is encrypted. It is the highest-value single safeguard most practices can adopt, and it substantially changes breach analysis.' }
      ])
    })
  ],
  diffH2: 'How we approach guidance',
  differentiators: [
    { icon: 'doc', title: 'Direct answers', text: 'Where there is a clear answer we give it, rather than restating the regulation and leaving you to interpret it.' },
    { icon: 'scale', title: 'Honest about ambiguity', text: 'Where a question genuinely depends on facts or state law, we say so and explain what the answer turns on.' },
    { icon: 'users', title: 'From real cases', text: 'These questions come from client situations, which is why they address what actually happens rather than what is hypothetically possible.' },
    { icon: 'search', title: 'Actionable', text: 'Every answer aims at something you can verify or change, not at general awareness.' },
    { icon: 'clock', title: 'A call costs nothing', text: 'If your question is not here, call and ask. Plenty of people do, and we answer.' },
    { icon: 'refresh', title: 'Kept current', text: 'Guidance is revisited as regulation and enforcement patterns change.' }
  ],
  compare: null,
  cases: [
    { tag: 'Risk analysis', title: 'A date check that mattered', challenge: 'An administrator checked their risk analysis date after reading this page and found it predated two EHR migrations.', approach: 'A current analysis was performed against the actual environment with a tracked remediation plan.', result: 'The organization’s highest-exposure gap closed before any inquiry tested it.' },
    { tag: 'Vendor inventory', title: 'Three missing agreements', challenge: 'A practice inventoried vendors from systems rather than from the contract folder.', approach: 'The exercise surfaced three vendors with PHI access and no executed business associate agreement.', result: 'All three brought under agreement within six weeks, with renewal tracking added.' },
    { tag: 'SDS access', title: 'A binder behind a locked door', challenge: 'A clinic confirmed SDS were maintained but discovered the office holding them locked at 5pm while evening staff still handled chemicals.', approach: 'Safety data sheets were moved to a virtual binder reachable from any workstation.', result: 'A common citation avoided before an inspection tested it.' }
  ],
  faqs: [
    { q: 'How often is HIPAA training required?', a: 'The Privacy Rule requires training for each new workforce member within a reasonable period and again when policies materially change. The Security Rule requires ongoing security awareness. Annual training is the accepted standard and what auditors expect to see documented per individual.' },
    { q: 'How often must we perform a Security Risk Analysis?', a: 'At minimum annually, and again whenever something material changes: a new EHR, a new location, a merger, a significant system change or a security incident. A stale analysis is the most frequently cited deficiency in federal enforcement.' },
    { q: 'What makes something a reportable breach?', a: 'An impermissible use or disclosure of unsecured PHI is presumed to be a breach unless you can demonstrate a low probability of compromise through a documented four-factor risk assessment: the nature and extent of the PHI, who received or accessed it, whether it was actually acquired or viewed, and the extent of mitigation.' },
    { q: 'Who needs a business associate agreement?', a: 'Any vendor that creates, receives, maintains or transmits PHI on your behalf — billing companies, IT providers, cloud services, transcription, shredding, answering services, many software vendors and consultants. Build the list from your systems and workflows, not from your contracts.' },
    { q: 'How often should exclusion screening run?', a: 'Monthly is the accepted standard. Screening only at hire leaves exposure for the entire duration of employment, because exclusion can occur at any point and liability attaches from its effective date rather than from your discovery.' },
    { q: 'Does OSHA inspect medical practices?', a: 'Yes. Inspections are triggered by employee complaints, reported injuries, referrals and emphasis programs, generally with little or no advance notice. Healthcare is not exempt.' },
    { q: 'How long must we retain compliance documentation?', a: 'HIPAA requires documentation be retained for six years from creation or from the date it was last in effect, whichever is later. OSHA retention varies by record type, with some exposure records requiring far longer retention. Your advisor maps your specific obligations.' },
    { q: 'Do we need encryption?', a: 'Encryption is an addressable implementation specification. If you determine it is not reasonable and appropriate you must document why and implement an equivalent alternative. Practically, encrypting laptops and portable media is the highest-value safeguard most practices can adopt, and it materially changes breach analysis.' },
    { q: 'Can patients get copies of their records, and how fast?', a: 'Yes. Individuals have a right of access to their designated record set, generally within 30 days, with limits on what you may charge. Improper handling of access requests has been a consistent federal enforcement focus.' },
    { q: 'What should we do first if we suspect a breach?', a: 'Contain it, preserve evidence, and document what you know and when you knew it — the discovery date starts the clock. Then contact your compliance advisor before making a notification determination. Do not delete anything.' }
  ],
  related: [
    { href: '/blog/', label: 'Compliance blog', text: 'Longer-form written guidance.' },
    { href: '/webinars/', label: 'Webinars', text: 'Live sessions with Q&A.' },
    { href: '/compliance-assessment/', label: 'Free risk assessment', text: 'Check your own program.' },
    { href: '/contact/', label: 'Ask a question', text: 'Call and get a straight answer.' }
  ]
});

export default [blog, ...articlePages, webinars, podcasts, events, tips];
