import { site } from '../site.mjs';

/* Legal pages, transcribed from healthcarecompliancepros.com rather than
   generated. Their live site carries two: /privacypolicy (titled "Legal
   Disclaimers", holding website disclaimers, intellectual property and the
   privacy policy together) and /fulfillment-policy. There is no separate
   terms page and no separate cookie policy; /terms and /cookie-policy on
   their domain return the homepage, not a document. The cookie text lives
   inside the privacy policy, under Web Browser Cookies, and is reproduced
   here in the same place.

   Marked `legal: true` so the audit applies the relaxed content-to-code
   floor: these are long documents with very little markup, and the usual
   ratio check is tuned for marketing pages. */

const page = (body) => `
<section class="sec sec-tight field">
  <div class="narrow">
    ${body}
  </div>
</section>`;

const privacyBody = `
<div class="legal-head">
  <span class="mono-label">Legal</span>
  <h1>Privacy policy and website disclaimers</h1>
  <p class="sec-lead">The terms below govern use of this website and describe how
  Healthcare Compliance Pros handles the information collected through it.</p>
</div>

<div class="legal">
  <h2>Website disclaimers</h2>
  <p>All materials on this website are provided "as-is." The information contained on this
  website is for general information purposes only. The information is provided by Healthcare
  Compliance Pros, and while we endeavor to keep this information up-to-date and correct, we
  make no representations or warranties of any kind, express or implied, about the completeness,
  accuracy, reliability, suitability, or availability with respect to the website or the
  information, products, services, or related graphics contained on the website for any purpose.
  Any reliance you place on such information is therefore strictly at your own risk.</p>

  <p>In no event will Healthcare Compliance Pros be liable for any loss or damage including
  without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever
  arising from loss of data or profits arising out of or in connection with the use of this
  website. Further, Healthcare Compliance Pros will not indemnify any user of this website
  against any actionable claims arising out of or in connection with the use of this website.</p>

  <p>The training materials, newsletters, articles, consultation, and other information provided
  on this website are offered for general information and educational purposes only, and are not
  offered as, and do not constitute legal advice or legal opinions. You should not act or rely on
  any information contained on this website without first seeking the advice of an attorney. If
  you need legal advice, please consult an attorney. If you are a client, remember that email may
  not be secure. There is a risk that your communication may be intercepted illegally.</p>

  <p>This website may contain many pages that include hyperlinks to other resources on the
  Internet. These links are provided as citations and aids to help you identify and locate other
  Internet resources that may be of interest, and are not intended to state or imply that
  Healthcare Compliance Pros sponsors, is affiliated or associated with, or is legally authorized
  to use any trade name, registered trademark, logo, legal or official seal, or copyrighted
  symbol that may be reflected in the links unless otherwise identified on the pages.</p>

  <p>Every effort is made to keep this website up and running smoothly. However, Healthcare
  Compliance Pros takes no responsibility for and will not be liable for the website being
  temporarily unavailable due to technical issues beyond our control.</p>

  <h2>Intellectual property</h2>

  <h3>Copyrights</h3>
  <p>Unless otherwise noted, all materials contained in this website are copyrighted and may not
  be used except as provided in these terms and conditions or in the copyright notice (documents
  and software) or other proprietary notice provided with the relevant materials. The materials
  contained in this website may be downloaded or copied provided that ALL copies retain the
  copyright and any other proprietary notices contained on the materials. No material may be
  modified, edited, or taken out of context such that its use creates a false or misleading
  statement or impression as the positions, statements, or actions of Healthcare Compliance
  Pros. Any licensee is hereby authorized to view, use, reproduce, customize, and distribute all
  documents and files to their employees solely for informational purposes, subject to the Terms
  and Conditions herein. The name and trademarks of copyright holders may NOT be used in
  advertising or publicity pertaining to this website, its content, specifications, or software
  without specific, written prior permission. Title to copyright in this website and website
  documents with at all times remain with copyright holders.</p>

  <h3>Trademarks</h3>
  <p>Unless otherwise noted, all trademarks, service marks, and trade names used herein, are
  trademarks or registered trademarks of Healthcare Compliance Pros, LLC in the U.S. and certain
  jurisdictions, including but not limited to: HEALTHCARE COMPLIANCE PROS, HEALTHCARE COMPLIANCE
  PROS (STYLIZED), HCP, HCP (STYLIZED), and www.hcp.md. The trademarks, logos, and service marks
  not owned on behalf of Healthcare Compliance Pros and that are displayed on the website are the
  registered and unregistered marks of their respective owners. No rights are granted by
  Healthcare Compliance Pros to use such marks, whether by implication, estoppel, or
  otherwise.</p>

  <h2>Privacy policy</h2>

  <h3>Personal identification information</h3>
  <p>We may collect personal identification information from users in a variety of ways,
  including, but not limited to, when users visit our site, register on the site, place an order,
  fill out a form, and in connection with other activities, services, features, or resources we
  make available on our site. Users may be asked for, as appropriate, name, email address,
  mailing address, and phone number. Users may, however, visit our site anonymously. We will
  collect personal identification information from users only if they voluntarily submit such
  information to us. Users can always refuse to supply personally identifiable information,
  except that it may prevent them from engaging in certain site-related activities.</p>

  <h3>Non-personal identification information</h3>
  <p>We may collect non-personal identification information about users whenever they interact
  with our site. Non-personal identification information may include the browser name, the type
  of computer, and technical information about users' means of connection to our sites, such as
  the operating system and the Internet service providers utilized and other similar
  information.</p>

  <h3>Web browser cookies</h3>
  <p>Our site may use "cookies" to enhance the user experience. A user's web browser places
  cookies on their hard drive for record-keeping purposes and sometimes to track information
  about them. Users may choose to set their web browser to refuse cookies or to alert them when
  cookies are being sent. If they do so, note that some parts of the site may not function
  properly.</p>

  <h3>How we use collected information</h3>
  <p>Healthcare Compliance Pros may collect and use users' personal information for the following
  purposes:</p>
  <ul>
    <li><b>To improve customer service.</b> Information you provide helps us respond to your
    customer service requests and support needs more efficiently.</li>
    <li><b>To personalize user experience.</b> We may use information in the aggregate to
    understand how our users as a group use the services and resources provided on our site.</li>
    <li><b>To improve our site.</b> We may use the feedback you provide to improve our products
    and services.</li>
    <li>To run a promotion, contest, survey, or other site feature.</li>
    <li>To send users information they agreed to receive about topics we think will be of
    interest to them.</li>
    <li><b>To send periodic emails.</b> We may use the email address to send user information and
    updates pertaining to their purchase. It may also be used to respond to their inquiries,
    questions, and/or other requests. If user decides to opt-in to our mailing list, they will
    receive emails that may include company news, updates, related product or service
    information, etc. If at any time the user would like to unsubscribe from receiving future
    emails, we include detailed unsubscribe instructions at the bottom of each email, or the user
    may contact us via our site.</li>
  </ul>

  <h3>How we protect your information</h3>
  <p>We adopt appropriate data collection, storage, and processing practices and security
  measures to protect against unauthorized access, alteration, disclosure, or destruction of your
  personal information, username, password, transaction information, and data stored on our site.
  Sensitive and private data exchange between the site and its users happens over an SSL-secured
  communication channel and is encrypted and protected with digital signatures.</p>

  <h3>Sharing your personal information</h3>
  <p>We do not sell, trade, or rent users' personal identification information to others. We may
  share generic aggregated demographic information not linked to any personal identification
  information regarding visitors and users with our business partners, trusted affiliates, and
  advertisers for the above purposes. No mobile information will be shared with third
  parties/affiliates for marketing/promotional purposes. All other categories exclude text
  messaging originator opt-in data and consent; this information will not be shared with any
  third parties.</p>

  <h3>Compliance with the Children's Online Privacy Protection Act</h3>
  <p>Protecting the privacy of the very young is especially important. For that reason, we never
  collect or maintain information at our site from those we actually know are under 13, and no
  part of our website is structured to attract anyone under 13.</p>

  <h3>Mobile and text messaging</h3>
  <p>We do not share mobile information with third parties/affiliates for marketing or
  promotional purposes. However, we may collect text messaging originator opt-in data and
  consent, which will be used exclusively for communication between you and Healthcare Compliance
  Pros. If you choose to receive text messages from us, we will only send texts that are related
  to your account or services you have requested. You may opt-out of receiving further text
  messages at any time by following the instructions provided in the text message or by
  contacting us.</p>

  <h3>Your acceptance of these terms</h3>
  <p>By using this site, you signify your acceptance of this policy. If you do not agree to this
  policy, please do not use our site. Your continued use of the site following the posting of
  changes to this policy will be deemed your acceptance of those changes.</p>

  <h2>Contacting us</h2>
  <p>If you have any questions about this privacy policy, the practices of this site, or your
  dealings with this site, please contact us at:</p>
  <address class="legal-addr">
    Healthcare Compliance Pros, LLC<br>
    90 W. 500 S. #157<br>
    Bountiful, UT 84010<br>
    <a href="mailto:${site.email}">${site.email}</a> &nbsp;&middot;&nbsp;
    <a href="tel:${site.phoneE164}">${site.phoneDisplay}</a>
  </address>
</div>`;

const fulfillmentBody = `
<div class="legal-head">
  <span class="mono-label">Legal</span>
  <h1>Fulfillment policy</h1>
  <p class="sec-lead">How subscriptions are delivered, renewed and cancelled.</p>
</div>

<div class="legal">
  <h2>Return and refund policy</h2>
  <p>HCP does not typically offer refunds; however, credits will be issued to account balances
  when necessary. HCP is always willing to work with our clients to ensure that their needs are
  met and that they are satisfied with the services we provide.</p>

  <h2>Shipping and delivery policy</h2>
  <p>HCP subscriptions are virtual; therefore, we do not ship any products. The onboarding process
  for subscribed services begins immediately upon receipt of the fully executed agreement and
  initial payment.</p>

  <h2>Cancellation policy</h2>
  <p>HCP's services shall be treated as an annual, twelve (12) month subscription. The billing
  schedule for this agreement will commence on the first day of the executed agreement. The
  contract will automatically be renewed one day prior to the end of the contract expiration
  date. The contract will continue to be renewed for successive terms equal to the original term
  unless HCP receives a cancellation request, in writing (email will suffice), no later than
  thirty (30) days prior to your contract renewal date.</p>

  <h2>Questions</h2>
  <p>Contact us about billing, renewals or cancellations at:</p>
  <address class="legal-addr">
    Healthcare Compliance Pros, LLC<br>
    90 W. 500 S. #157<br>
    Bountiful, UT 84010<br>
    <a href="mailto:${site.email}">${site.email}</a> &nbsp;&middot;&nbsp;
    <a href="tel:${site.phoneE164}">${site.phoneDisplay}</a>
  </address>
</div>`;

export default [
  {
    path: '/privacypolicy/',
    title: 'Privacy policy and website disclaimers | HCP',
    description: 'How Healthcare Compliance Pros collects and handles information from this website, plus the disclaimers and intellectual property terms governing its use.',
    legal: true,
    body: page(privacyBody)
  },
  {
    path: '/fulfillment-policy/',
    title: 'Fulfillment policy | HCP',
    description: 'How Healthcare Compliance Pros subscriptions are delivered, renewed and cancelled, including the refund and cancellation terms for annual agreements.',
    legal: true,
    body: page(fulfillmentBody)
  }
];
