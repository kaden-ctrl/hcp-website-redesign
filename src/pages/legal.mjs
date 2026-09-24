import { site } from '../site.mjs';
import { esc } from '../layout.mjs';

const EFFECTIVE = 'January 1, 2026';

const page = ({ path, title, h1, desc, sections }) => ({
  path, title, description: desc.slice(0, 155),
  breadcrumbs: [{ label: h1, href: path }],
  legal: true,
  body: `<section class="legal">
  <div class="narrow">
    <h1>${esc(h1)}</h1>
    <p class="updated">Effective ${EFFECTIVE}</p>
    ${sections}
    <a class="legal-back" href="/">&larr; Back to home</a>
  </div>
</section>`
});

const privacy = page({
  path: '/privacypolicy/',
  title: 'Privacy Policy | Healthcare Compliance Pros',
  h1: 'Privacy Policy',
  desc: 'How Healthcare Compliance Pros collects, uses, shares and protects information from this website and from client compliance programs.',
  sections: `
<p>Healthcare Compliance Pros (&ldquo;HCP&rdquo;, &ldquo;we&rdquo;) provides compliance software and advisory services to healthcare organizations. This policy describes how we handle information collected through <strong>${site.origin}</strong> and through the services we provide to clients.</p>

<h2>Information we collect</h2>
<p><strong>Information you give us.</strong> When you request an assessment or consultation we collect what you submit: typically your name, organization, work email, phone number, staff size and what you would like help with. When you become a client we collect the information needed to operate your compliance program, including workforce rosters and role assignments.</p>
<p><strong>Information collected automatically.</strong> Standard technical information such as IP address, browser and device type, pages viewed and timestamps, used to operate and improve the site.</p>
<p><strong>Information we do not want.</strong> Please do not submit protected health information through this website or by ordinary email. If a matter requires discussing specifics, your advisor will arrange a secure channel.</p>

<h2>How we use information</h2>
<ul>
<li>To respond to your enquiry and deliver a risk assessment</li>
<li>To provide, support and improve our software and advisory services</li>
<li>To send compliance updates where you have asked to receive them</li>
<li>To maintain the security and availability of our systems</li>
<li>To comply with legal obligations and enforce our agreements</li>
</ul>
<p>We do not sell personal information, and we do not share it with third parties for their own marketing.</p>

<h2>Client data and our role as a business associate</h2>
<p>Where we handle protected health information on behalf of a client we do so as a business associate under HIPAA, governed by an executed business associate agreement. In that role we use and disclose PHI only as that agreement and the law permit, maintain the safeguards the Security Rule requires, bind our subcontractors to equivalent protections, and report security incidents and breaches as required.</p>
<p>Client program content (policies, training records, acknowledgements and logs) belongs to the client. We do not use client compliance data to train models, and we do not disclose it to other clients or third parties except as the client directs, as our agreement requires, or as law requires.</p>

<h2>How we share information</h2>
<ul>
<li><strong>Service providers</strong> who help us operate (hosting, email delivery, analytics, payment processing) under contractual restrictions on their use of the information</li>
<li><strong>At your direction</strong>, including with a partner who referred you</li>
<li><strong>Legal requirements</strong>, where required by law or legal process, or to protect rights and safety</li>
<li><strong>Business transfers</strong>, subject to this policy continuing to apply</li>
</ul>

<h2>Cookies and analytics</h2>
<p>This site uses cookies necessary for it to function and to understand aggregate usage. You can control cookies through your browser; blocking them may affect some functionality. We honour Global Privacy Control signals where applicable.</p>

<h2>Retention</h2>
<p>We retain information for as long as necessary to provide our services and to meet legal and contractual obligations. Client compliance records are retained in line with the applicable agreement and regulatory retention periods. HIPAA documentation, for example, generally requires six years from creation or from when it was last in effect, whichever is later.</p>

<h2>Security</h2>
<p>We maintain administrative, physical and technical safeguards designed to protect the information we hold, including access controls, encryption in transit and at rest, workforce training and incident response procedures. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>

<h2>Your choices and rights</h2>
<ul>
<li><strong>Marketing.</strong> Unsubscribe at any time using the link in any message or by contacting us.</li>
<li><strong>Access, correction and deletion.</strong> You may request access to, correction of, or deletion of personal information we hold about you. Where we hold information as a business associate for a client, direct your request to that client, who controls the record.</li>
<li><strong>State privacy rights.</strong> Residents of certain states have additional rights. We honour these where they apply. We do not sell personal information or use it for targeted advertising.</li>
</ul>
<p>To exercise any of these, email <a href="mailto:${site.email}">${site.email}</a>. We may need to verify your identity first.</p>

<h2>Children&rsquo;s privacy</h2>
<p>This site is directed to healthcare organizations and business professionals. We do not knowingly collect personal information from children through it.</p>

<h2>Changes</h2>
<p>We may update this policy to reflect changes in our practices or legal requirements. Material changes will be reflected in the effective date above.</p>

<h2>Contact</h2>
<p>${esc(site.legalName)}<br>${esc(site.address.street)}<br>${esc(site.address.locality)}, ${site.address.region} ${site.address.postalCode}<br>
<a href="tel:${site.phoneE164}">${site.phoneDisplay}</a> &middot; <a href="mailto:${site.email}">${site.email}</a></p>`
});

const fulfillment = page({
  path: '/fulfillment-policy/',
  title: 'Fulfillment Policy | Healthcare Compliance Pros',
  h1: 'Fulfillment Policy',
  desc: 'How HCP subscriptions are delivered, billed, renewed and cancelled, including implementation timelines and refund terms.',
  sections: `
<p>This page describes how our services are delivered, billed, renewed and cancelled. Your executed agreement governs if anything here differs from it.</p>

<h2>What we provide</h2>
<p>Healthcare Compliance Pros provides subscription access to compliance software together with advisory services, and certain professional services on a scheduled or project basis. Services are delivered electronically through our platform, remotely by our advisory team, and on site where an engagement includes it.</p>

<h2>Delivery and implementation</h2>
<ul>
<li>Platform access is provisioned after your agreement is executed, typically within one to two business days.</li>
<li>Implementation (discovery, policy customisation, roster configuration and training assignment) typically completes within two to three weeks of your discovery session.</li>
<li>Advisory support begins at provisioning and continues throughout your subscription term.</li>
<li>On-site services and other scheduled work are delivered on dates agreed in advance.</li>
</ul>

<h2>Subscription terms and billing</h2>
<ul>
<li>Subscriptions are typically annual, priced on workforce headcount and the programs licensed.</li>
<li>Fees are billed in advance on the schedule stated in your agreement or invoice.</li>
<li>If headcount changes materially during a term, pricing may be adjusted at renewal or as your agreement provides.</li>
<li>Professional services outside your subscription are quoted and invoiced separately.</li>
</ul>

<h2>Renewal</h2>
<p>Subscriptions renew for successive terms unless either party gives notice of non-renewal within the period your agreement specifies. We provide advance notice before renewal, including any pricing change.</p>

<h2>Cancellation and refunds</h2>
<ul>
<li>You may cancel effective at the end of your current term by giving written notice within the notice period your agreement specifies.</li>
<li>Fees for a term already in progress are generally non-refundable, because implementation and advisory capacity are committed at the start of the term.</li>
<li>Where implementation has not begun, we will work with you in good faith on a prorated resolution.</li>
<li>Scheduled services cancelled with reasonable notice are not charged; cancellations inside the notice window, or travel already booked, may be.</li>
<li>If we fail to deliver a service described in your agreement, contact us and we will make it right, including a credit or refund where appropriate.</li>
</ul>

<h2>Your data on cancellation</h2>
<p>Your compliance records are yours. On request at or before termination we provide a complete export of your policies, training records, acknowledgements, certificates and logs in standard formats. We recommend requesting an export before your access period ends, since compliance documentation carries retention obligations that outlast any vendor relationship.</p>

<h2>Service changes</h2>
<p>We continuously improve the platform and update content as regulations change. We may modify features, provided we do not materially reduce the functionality you have subscribed to during your term. Regulatory updates to policies and courses are included at no additional charge.</p>

<h2>Support</h2>
<p>Advisory and technical support is included during business hours, Monday to Friday, 8:00am&ndash;6:00pm Mountain Time. There is no per-incident charge and no premium tier required to reach your advisor team. Active incidents and audit deadlines are escalated.</p>

<h2>Questions</h2>
<p>For billing, delivery or cancellation questions, call <a href="tel:${site.phoneE164}">${site.phoneDisplay}</a> or email <a href="mailto:${site.email}">${site.email}</a>.</p>`
});

export default [privacy, fulfillment];
