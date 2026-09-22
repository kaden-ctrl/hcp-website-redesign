import { buildPage, section, prose, checklist } from '../shared.mjs';
import { renderPage, esc } from '../layout.mjs';
import { site } from '../site.mjs';

const G = 'Legal';
const EFFECTIVE = 'January 1, 2026';

/* ---------------- Privacy policy ---------------- */
const privacy = buildPage({
  path: '/privacypolicy/',
  group: G,
  llmsLabel: 'Privacy Policy',
  title: 'Privacy Policy | Healthcare Compliance Pros',
  description: 'How Healthcare Compliance Pros collects, uses, shares and protects information from this website and from client compliance programs.',
  breadcrumbs: [{ label: 'Privacy Policy', href: '/privacypolicy/' }],
  eyebrow: 'Legal',
  h1: 'Privacy Policy',
  lead: `How we collect, use, share and protect information gathered through this website and through the compliance programs we operate for clients. Effective ${EFFECTIVE}.`,
  primaryCta: { label: 'Contact us about privacy', href: '/contact/' },
  secondaryCta: { label: 'Fulfillment policy', href: '/fulfillment-policy/' },
  heroStat: `Questions? Email ${site.email}`,
  sections: [
    section({
      cls: 'sec-alt',
      h2: 'Our privacy commitments',
      align: 'left',
      body: prose([
        `<p>Healthcare Compliance Pros ("HCP", "we", "us") provides compliance software and advisory services to healthcare organizations. This policy describes how we handle information collected through <strong>${site.origin}</strong> and through the services we provide to clients.</p>`,
        `<h3>Information we collect</h3>`,
        `<p><strong>Information you give us.</strong> When you request a consultation, a risk assessment or compliance updates, we collect the information you submit — typically your name, organization, work email, phone number, organization size and what you would like help with. When you become a client, we collect the information needed to build and operate your compliance program, including workforce rosters, role assignments and program documentation.</p>`,
        `<p><strong>Information collected automatically.</strong> When you visit this website we collect standard technical information such as IP address, browser type, device type, pages viewed, referring page and timestamps. This is used to operate and improve the site and to understand which content is useful.</p>`,
        `<p><strong>Information we do not want.</strong> Please do not submit protected health information through this website, through our contact forms or by ordinary email. Nothing on this website is an appropriate channel for PHI. If a matter requires discussing specifics, your advisor will arrange a secure channel.</p>`,
        `<h3>How we use information</h3>`,
        `<ul>
          <li>To respond to your inquiry, schedule a consultation or deliver a risk assessment</li>
          <li>To provide, operate, support and improve our software and advisory services</li>
          <li>To send compliance updates and educational material where you have asked to receive them</li>
          <li>To maintain the security, integrity and availability of our systems</li>
          <li>To comply with legal obligations and to enforce our agreements</li>
        </ul>`,
        `<p>We do not sell personal information, and we do not share it with third parties for their own marketing purposes.</p>`,
        `<h3>Client data and our role as a business associate</h3>`,
        `<p>Where we handle protected health information on behalf of a client, we do so as a business associate under HIPAA, governed by an executed business associate agreement. In that role we use and disclose PHI only as permitted by that agreement and by law, we maintain administrative, physical and technical safeguards required by the Security Rule, we require our subcontractors to provide equivalent protections under written agreement, and we report security incidents and breaches to the client as required.</p>`,
        `<p>Client program content — policies, training records, acknowledgements, incident logs and similar records — belongs to the client. We do not use client compliance data to train models, and we do not disclose it to other clients or to third parties except as directed by the client, as required by our agreement, or as required by law.</p>`,
        `<h3>How we share information</h3>`,
        `<p>We share information only in these circumstances:</p>`,
        `<ul>
          <li><strong>Service providers.</strong> Vendors who help us operate our business — hosting, email delivery, analytics, payment processing, screening services — under contractual obligations restricting their use of the information and requiring appropriate safeguards.</li>
          <li><strong>At your direction.</strong> Where you ask us to share information, including with a partner who referred you or with your own advisors.</li>
          <li><strong>Legal requirements.</strong> Where required by law, subpoena, court order or other legal process, or where necessary to protect rights, safety or property.</li>
          <li><strong>Business transfers.</strong> In connection with a merger, acquisition or sale of assets, subject to this policy continuing to apply to the information transferred.</li>
        </ul>`,
        `<h3>Cookies and analytics</h3>`,
        `<p>This website uses cookies and similar technologies that are necessary for the site to function and to understand aggregate usage. You can control cookies through your browser settings; blocking them may affect some site functionality. We honor Global Privacy Control signals where applicable.</p>`,
        `<h3>Data retention</h3>`,
        `<p>We retain information for as long as necessary to provide our services, to comply with legal and contractual obligations, and to resolve disputes. Client compliance records are retained in accordance with the applicable agreement and with the retention periods regulations require — HIPAA documentation, for example, generally requires six years from creation or from when it was last in effect, whichever is later.</p>`,
        `<h3>Security</h3>`,
        `<p>We maintain administrative, physical and technical safeguards designed to protect the information we hold, including access controls, encryption of data in transit and at rest, workforce training, and incident response procedures. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>`,
        `<h3>Your choices and rights</h3>`,
        `<ul>
          <li><strong>Marketing communications.</strong> You can unsubscribe from compliance updates at any time using the link in any message or by contacting us.</li>
          <li><strong>Access, correction and deletion.</strong> You may request access to, correction of, or deletion of personal information we hold about you. Where we hold information as a business associate on behalf of a client, direct your request to that client, who controls the record.</li>
          <li><strong>State privacy rights.</strong> Residents of certain states have additional rights regarding personal information, including rights to know, delete, correct and opt out of certain processing. We honor these rights where they apply. We do not sell personal information or use it for targeted advertising.</li>
        </ul>`,
        `<p>To exercise any of these, email <a href="mailto:${site.email}">${site.email}</a> or write to us at the address below. We may need to verify your identity before acting on a request.</p>`,
        `<h3>Children's privacy</h3>`,
        `<p>This website is directed to healthcare organizations and business professionals. We do not knowingly collect personal information from children through this website.</p>`,
        `<h3>Changes to this policy</h3>`,
        `<p>We may update this policy to reflect changes in our practices or in legal requirements. Material changes will be reflected in the effective date at the top of this page, and where appropriate we will provide additional notice.</p>`,
        `<h3>Contact us</h3>`,
        `<p>${esc(site.legalName)}<br>${esc(site.address.street)}<br>${esc(site.address.locality)}, ${site.address.region} ${site.address.postalCode}<br>
        <a href="tel:${site.phoneE164}">${site.phoneDisplay}</a> · <a href="mailto:${site.email}">${site.email}</a></p>`
      ])
    })
  ],
  diffH2: 'How we approach privacy',
  diffLead: 'We advise healthcare organizations on privacy for a living. Holding ourselves to the same standard is the minimum.',
  differentiators: [
    { icon: 'lock', title: 'We do not sell your data', text: 'Personal information is never sold, and it is not shared with third parties for their own marketing purposes.' },
    { icon: 'doc', title: 'Client data stays the client’s', text: 'Policies, training records and logs belong to you, are exportable on request, and are never used to train models.' },
    { icon: 'shield', title: 'We operate as a business associate', text: 'Where we handle PHI, we do so under an executed BAA with the Security Rule safeguards it requires.' },
    { icon: 'users', title: 'Subcontractors under agreement', text: 'Any subcontractor handling client data is bound by written agreement to equivalent protections.' },
    { icon: 'refresh', title: 'Retention with a reason', text: 'We keep records as long as your agreement and regulatory retention periods require, not indefinitely by default.' },
    { icon: 'search', title: 'Rights honored broadly', text: 'We apply access, correction and deletion rights consistently rather than only where a specific statute compels it.' }
  ],
  compare: null,
  cases: [
    { tag: 'Client review', title: 'Passing a client security review', challenge: 'A health system client ran a vendor security review on HCP as part of its own business associate diligence.', approach: 'We provided our risk analysis scope, safeguard documentation, workforce training records and subcontractor management process.', result: 'The review cleared from existing documentation — the same outcome we build for our clients.' },
    { tag: 'Data request', title: 'A full export on departure', challenge: 'A client consolidating vendors requested its complete compliance record.', approach: 'Policies, acknowledgements, training records, certificates and logs were exported in standard formats.', result: 'The client retained its full evidence history, which compliance records must outlive any vendor relationship.' },
    { tag: 'Access request', title: 'Routing a request correctly', challenge: 'An individual submitted a data request for records HCP held on behalf of a client organization.', approach: 'The request was routed to the client, who controls the record, with our support in responding.', result: 'The request was handled by the party with authority over the data, as the business associate relationship requires.' }
  ],
  faqs: [
    { q: 'Do you sell my information?', a: 'No. We do not sell personal information and we do not share it with third parties for their own marketing purposes.' },
    { q: 'Can I send patient information through this website?', a: 'No. Please do not submit protected health information through the website, contact forms or ordinary email. If a matter requires discussing specifics, your advisor will arrange a secure channel.' },
    { q: 'Who owns our compliance records?', a: 'You do. Policies, training records, acknowledgements, certificates and logs are your records, and we provide a complete export in standard formats on request.' },
    { q: 'Do you use client data to train AI models?', a: 'No. Client compliance data is not used to train models, and it is not disclosed to other clients or to third parties except as you direct, as our agreement requires, or as law requires.' },
    { q: 'Will you sign a business associate agreement?', a: 'Yes. Where we handle protected health information on your behalf we operate under an executed BAA, and we can execute one before a detailed assessment if you prefer.' },
    { q: 'How do I exercise my privacy rights?', a: `Email ${site.email} or write to us at our headquarters address. We may need to verify your identity first. Where we hold information as a business associate for a client, direct the request to that client, who controls the record.` }
  ],
  related: [
    { href: '/fulfillment-policy/', label: 'Fulfillment policy', text: 'Billing, delivery and cancellation terms.' },
    { href: '/business-associates/', label: 'For business associates', text: 'Vendor HIPAA obligations explained.' },
    { href: '/contact/', label: 'Contact us', text: 'Privacy questions and requests.' },
    { href: '/about/', label: 'About HCP', text: 'Who we are.' }
  ],
  cta: {
    h2: 'Questions about how we handle information?',
    text: 'Privacy questions, data requests and business associate agreement inquiries all go to the same place, and a person answers them.',
    primary: { label: 'Contact us', href: '/contact/' },
    secondary: { label: `Email ${site.email}`, href: `mailto:${site.email}` }
  }
});

/* ---------------- Fulfillment policy ---------------- */
const fulfillment = buildPage({
  path: '/fulfillment-policy/',
  group: G,
  llmsLabel: 'Fulfillment Policy',
  title: 'Fulfillment Policy | Healthcare Compliance Pros',
  description: 'How HCP subscriptions are delivered, billed, renewed and cancelled, including implementation timelines and refund terms.',
  breadcrumbs: [{ label: 'Fulfillment Policy', href: '/fulfillment-policy/' }],
  eyebrow: 'Legal',
  h1: 'Fulfillment Policy',
  lead: `How our services are delivered, billed, renewed and cancelled. Effective ${EFFECTIVE}. Your signed agreement governs if anything here differs from it.`,
  primaryCta: { label: 'Questions? Contact us', href: '/contact/' },
  secondaryCta: { label: 'Privacy policy', href: '/privacypolicy/' },
  heroStat: `Billing questions: ${site.phoneDisplay}`,
  sections: [
    section({
      cls: 'sec-alt',
      h2: 'Delivery, billing and cancellation',
      align: 'left',
      body: prose([
        `<h3>What we provide</h3>`,
        `<p>Healthcare Compliance Pros provides subscription access to compliance software together with advisory services, and provides certain professional services on a scheduled or project basis. Services are delivered electronically through our platform, remotely by our advisory team, and on site where an engagement includes it.</p>`,
        `<h3>Delivery and implementation</h3>`,
        `<ul>
          <li>Platform access is provisioned after your agreement is executed, typically within one to two business days.</li>
          <li>Implementation — discovery, policy customization, roster configuration and training assignment — typically completes within two to three weeks of your discovery session, depending on your size and how quickly requested materials are provided.</li>
          <li>Advisory support begins at provisioning and continues throughout your subscription term.</li>
          <li>On-site services, coding audits and other scheduled professional services are delivered on dates agreed in advance.</li>
        </ul>`,
        `<h3>Subscription terms and billing</h3>`,
        `<ul>
          <li>Subscriptions are typically annual, with pricing based on workforce headcount and the programs licensed.</li>
          <li>Fees are billed in advance, annually or on another schedule stated in your agreement.</li>
          <li>Accepted payment methods and payment terms are stated in your agreement or invoice. Invoices are generally due on receipt unless otherwise specified.</li>
          <li>If headcount changes materially during a term, pricing may be adjusted at renewal or as your agreement provides.</li>
          <li>Professional services outside your subscription — additional on-site visits, expanded audit scope, custom course development — are quoted and invoiced separately.</li>
        </ul>`,
        `<h3>Renewal</h3>`,
        `<p>Subscriptions renew for successive terms unless either party provides notice of non-renewal as specified in the agreement. We provide advance notice before renewal, including any pricing change. You may decline renewal by notifying us in writing within the notice period stated in your agreement.</p>`,
        `<h3>Cancellation and refunds</h3>`,
        `<ul>
          <li>You may cancel effective at the end of your current term by providing written notice within the notice period your agreement specifies.</li>
          <li>Fees for a term already in progress are generally non-refundable, because implementation, policy customization and advisory capacity are committed at the start of the term.</li>
          <li>Where we have not yet begun implementation, we will work with you in good faith on a prorated resolution.</li>
          <li>Scheduled professional services cancelled with reasonable advance notice are not charged; cancellations inside the notice window, or travel already booked, may be charged.</li>
          <li>If we fail to deliver a service described in your agreement, contact us — we will make it right, including a credit or refund where appropriate.</li>
        </ul>`,
        `<h3>Your data on cancellation</h3>`,
        `<p>Your compliance records are yours. On request at or before termination we provide a complete export of your policies, training records, acknowledgements, certificates and logs in standard formats. We strongly recommend requesting an export before your access period ends, since compliance documentation carries retention obligations that outlast any vendor relationship. We retain or dispose of remaining data in accordance with your agreement, your business associate agreement and applicable law.</p>`,
        `<h3>Service changes</h3>`,
        `<p>We continuously improve the platform and update content as regulations change. We may modify features, provided we do not materially reduce the functionality you have subscribed to during your term. Regulatory updates to policies and courses are included in your subscription at no additional charge.</p>`,
        `<h3>Support</h3>`,
        `<p>Advisory and technical support is included in your subscription during business hours, Monday through Friday, 8:00am to 6:00pm Mountain Time. There is no per-incident charge, no metered support and no premium tier required to reach your advisor team. Active incidents and audit deadlines are escalated.</p>`,
        `<h3>Questions</h3>`,
        `<p>For billing, delivery or cancellation questions, call <a href="tel:${site.phoneE164}">${site.phoneDisplay}</a> or email <a href="mailto:${site.email}">${site.email}</a>. Your executed agreement governs in the event of any conflict with this page.</p>`
      ])
    })
  ],
  diffH2: 'How we approach commercial terms',
  diffLead: 'Compliance vendors have a reputation for metering the things clients need most. We priced against that deliberately.',
  differentiators: [
    { icon: 'shield', title: 'Support is not metered', text: 'No per-incident fees and no hourly billing for audit response. Hesitating to call is how small problems become large ones.' },
    { icon: 'refresh', title: 'Regulatory updates included', text: 'Policy and course revisions driven by regulatory change are part of your subscription, not a paid update.' },
    { icon: 'doc', title: 'Your data leaves with you', text: 'A complete export in standard formats on request. Compliance evidence must outlive any vendor relationship.' },
    { icon: 'scale', title: 'Pricing that scales down', text: 'Headcount-based pricing means a five-person practice is not subsidizing enterprise features it will never use.' },
    { icon: 'clock', title: 'Notice before renewal', text: 'Advance notice of renewal and of any pricing change, so a term never restarts as a surprise.' },
    { icon: 'users', title: 'Advisors included', text: 'Your named advisor team is part of the subscription, not a premium tier you upgrade into.' }
  ],
  compare: null,
  cases: [
    { tag: 'Implementation', title: 'Live in under three weeks', challenge: 'A practice needed a documented program in place before a payer contract deadline.', approach: 'Discovery was scheduled within days, and policy customization plus roster configuration ran in parallel.', result: 'The program was operating before the deadline, with training assigned and acknowledgements underway.' },
    { tag: 'Migration', title: 'Leaving a prior vendor cleanly', challenge: 'A group switching vendors worried about losing years of historical training records.', approach: 'Historical records were reviewed, validated where defensible and imported alongside the new program.', result: 'Evidence continuity preserved across the vendor transition.' },
    { tag: 'Scope change', title: 'Adding a program mid-term', challenge: 'A client that started with HIPAA needed corporate compliance after signing a Medicare Advantage contract.', approach: 'The additional program was added mid-term with prorated pricing aligned to the existing renewal date.', result: 'The new obligation was covered without waiting for a renewal cycle.' }
  ],
  faqs: [
    { q: 'How long are subscriptions?', a: 'Typically annual, with pricing based on workforce headcount and which programs you license. Your agreement states the specific term and notice periods.' },
    { q: 'Are refunds available mid-term?', a: 'Fees for a term in progress are generally non-refundable, because implementation and advisory capacity are committed at the start. Where implementation has not begun we will work with you in good faith on a prorated resolution.' },
    { q: 'What happens to our records if we cancel?', a: 'They are yours. Request a complete export before your access period ends — compliance documentation carries retention obligations that outlast any vendor relationship.' },
    { q: 'Is audit support really included?', a: 'Yes, for HIPAA, OSHA and payer audits, in every plan. There is no per-incident charge and no premium support tier.' },
    { q: 'Can we add programs mid-term?', a: 'Yes. Additional programs can be added with prorated pricing aligned to your existing renewal date, so you do not have to wait for a renewal cycle.' },
    { q: 'How quickly can we start?', a: 'Platform access is typically provisioned within one to two business days of execution, and implementation generally completes within two to three weeks of your discovery session.' }
  ],
  related: [
    { href: '/privacypolicy/', label: 'Privacy policy', text: 'How we handle information.' },
    { href: '/compliance-solution/', label: 'SHIELD Compliance Solution', text: 'What the subscription includes.' },
    { href: '/contact/', label: 'Contact us', text: 'Billing and delivery questions.' },
    { href: '/compliance-assessment/', label: 'Free risk assessment', text: 'Start before you commit.' }
  ],
  cta: {
    h2: 'Questions about terms or billing?',
    text: 'Call during business hours and ask for accounts, or email us. Your executed agreement governs, and we are glad to walk through it with you.',
    primary: { label: `Call ${site.phoneDisplay}`, href: `tel:${site.phoneE164}` },
    secondary: { label: 'Email us', href: `mailto:${site.email}` }
  }
});

/* ---------------- Utility pages (noindex) ---------------- */
const utility = (path, title, h1, lead, bodyExtra) => ({
  path,
  title,
  description: `${lead.replace(/<[^>]+>/g, '').slice(0, 150)}`,
  breadcrumbs: [{ label: h1, href: path }],
  noindex: true,
  body: `<section class="hero hero-light"><div class="wrap hero-in"><div class="hero-copy">
    <p class="eyebrow">Healthcare Compliance Pros</p>
    <h1>${h1}</h1>
    <p class="lead">${lead}</p>
    <p class="hero-cta">
      <a class="btn btn-primary" href="/">Back to the homepage</a>
      <a class="btn btn-ghost" href="/contact/">Contact an advisor</a>
    </p>
  </div></div></section>
  ${bodyExtra}`
});

const notFound = utility('/404/', 'Page Not Found | Healthcare Compliance Pros', 'We could not find that page',
  'The page you are looking for may have moved or no longer exists. Here are the places people most often need.',
  `<section class="sec"><div class="wrap">
    <h2 class="rel-h">Popular destinations</h2>
    <ul class="rel-list">
      <li><a href="/compliance-solution/"><strong>SHIELD Compliance Solution</strong><span>HIPAA, OSHA, corporate compliance and training in one platform.</span></a></li>
      <li><a href="/compliance-solution/hipaa/"><strong>HIPAA Compliance</strong><span>Policies, risk analysis, BAAs and breach response.</span></a></li>
      <li><a href="/compliance-solution/osha/"><strong>OSHA Compliance</strong><span>Exposure control and workplace safety for clinical settings.</span></a></li>
      <li><a href="/specialties/"><strong>Compliance by specialty</strong><span>Programs tuned to how your specialty works.</span></a></li>
      <li><a href="/tips-faqs/"><strong>Compliance tips &amp; FAQ</strong><span>Straight answers to common questions.</span></a></li>
      <li><a href="/contact/"><strong>Contact us</strong><span>Talk to a compliance advisor.</span></a></li>
    </ul>
  </div></section>`);

const search = utility('/search/', 'Search | Healthcare Compliance Pros', 'Search',
  'Browse the site by section, or contact an advisor and ask your question directly — we answer those at no cost.',
  `<section class="sec"><div class="wrap">
    <h2 class="rel-h">Browse by section</h2>
    <ul class="rel-list">
      <li><a href="/compliance-solution/"><strong>Compliance solutions</strong><span>HIPAA, OSHA, corporate compliance and the LMS.</span></a></li>
      <li><a href="/specialties/"><strong>Specialties</strong><span>Programs by medical specialty.</span></a></li>
      <li><a href="/blog/"><strong>Blog</strong><span>Practical guidance from our advisors.</span></a></li>
      <li><a href="/tips-faqs/"><strong>Tips &amp; FAQ</strong><span>Answers to frequent questions.</span></a></li>
      <li><a href="/about/"><strong>About HCP</strong><span>Who we are and how we work.</span></a></li>
      <li><a href="/contact/"><strong>Contact</strong><span>Ask an advisor directly.</span></a></li>
    </ul>
  </div></section>`);

export default [privacy, fulfillment, notFound, search];
