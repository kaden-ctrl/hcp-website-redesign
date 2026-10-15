import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { esc } from '../layout.mjs';
import { testimonials } from '../site.mjs';
import { pageHead, figureBand, whyBlock, faqBlock, useCases, closeBlock } from '../parts.mjs';

/* Pages carried over from healthcarecompliancepros.com. The copy is theirs,
   scraped and stored in content/ported.json rather than retyped, so a
   re-scrape updates the pages without anyone editing markup.

   Not everything in their sitemap came across. Duplicates of the same
   document at three campaign URLs collapse to one. Internal working pages
   are dropped. Pages that are really articles, and the course-topic pages
   that belong with /products, are held back for their own batch. */

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const content = JSON.parse(readFileSync(path.join(root, 'content', 'ported.json'), 'utf8'));

/* Title, eyebrow, lead and the closing line for each page. Their own titles
   are mostly "<Thing> | Healthcare Compliance Pros", which wastes the 65
   characters the audit allows, so these are written to earn the space. */
const META = {
  '/tips-faqs/': ['Resources', 'Compliance tips and FAQs',
    'Answers to the questions providers ask most, from HIPAA and OSHA basics through to audits and incident response.',
    'Compliance tips and answers to the questions providers ask most, covering HIPAA, OSHA, audits, training and incident response.'],
  '/webinars/': ['Resources', 'Compliance webinars',
    'Recorded sessions on the rules that change most often, run by the advisors who handle them day to day.',
    'Recorded compliance webinars covering HIPAA, OSHA, billing and incident response, presented by the advisors who run these programs.'],
  '/podcasts/': ['Resources', 'The compliance podcast',
    'Conversations about what actually goes wrong in healthcare compliance, and what it takes to put it right.',
    'Conversations about what goes wrong in healthcare compliance programs and what it takes to put it right, from the HCP advisory team.'],
  '/events/': ['Resources', 'Events and conferences',
    'Where to find the HCP team in person, and the sessions worth booking time for.',
    'Conferences, trade shows and in-person sessions where the Healthcare Compliance Pros team can be found through the year.'],
  '/checklists/': ['Resources', 'Compliance checklists',
    'Practical lists for the tasks that are easy to start and easy to leave half finished.',
    'Downloadable compliance checklists for HIPAA, OSHA and corporate compliance tasks that are easy to start and easy to leave unfinished.'],
  '/sentry/': ['Product', 'SENTRY billing intelligence',
    'Payers downcode automatically and send no notice. SENTRY finds the pattern in the quarter it starts.',
    'SENTRY watches your claims against specialty benchmarks every quarter, so downcoding and denial patterns surface while they can still be fixed.'],
  '/osha-plus/': ['Product', 'OSHA Plus',
    'The OSHA program with the on-site work added: inspection support, hands-on training and a walkthrough.',
    'OSHA Plus adds on-site inspection support, hands-on staff training and a guided walkthrough to the standard OSHA compliance program.'],
  '/corporate-compliance-plus/': ['Product', 'Corporate Compliance Plus',
    'The seven elements, with a compliance officer attached rather than left to you to staff.',
    'Corporate Compliance Plus runs all seven OIG elements with a named compliance officer attached, rather than leaving the role for you to staff.'],
  '/on-site-services/': ['Service', 'On-site services',
    'Some of this cannot be done from a dashboard. These are the parts that need somebody in the building.',
    'On-site compliance services: mock inspections, hands-on OSHA training, risk walkthroughs and in-person staff sessions at your own locations.'],
  '/records-management/': ['Service', 'Records management',
    'Retention schedules, storage and destruction, documented well enough to answer for.',
    'Records management for healthcare organizations: retention schedules, secure storage and documented destruction you can answer for in an audit.'],
  '/detailed-services-overview/': ['Overview', 'Everything HCP does',
    'The full service list in one place, for anyone who would rather read than be walked through it.',
    'A complete overview of Healthcare Compliance Pros services: compliance software, billing intelligence, training, audits and advisory support.'],
  '/compliance-solution/additional-tools/': ['SHIELD', 'Additional tools',
    'The parts of SHIELD that do not fit neatly under HIPAA, OSHA or corporate compliance.',
    'Additional SHIELD tools beyond HIPAA, OSHA and corporate compliance, covering the smaller pieces a compliance program still has to carry.'],
  '/partners/': ['Company', 'Partners and affiliations',
    'The associations, carriers and advisory firms HCP works alongside.',
    'The associations, malpractice carriers, RCM companies and advisory firms Healthcare Compliance Pros works alongside and is endorsed by.'],
  '/careers/': ['Company', 'Careers at HCP',
    'Open roles, and what it is like to do this work here.',
    'Open roles at Healthcare Compliance Pros and what the work involves, for people who want to do compliance properly rather than quickly.'],
  '/our-authorship/': ['Company', 'Who writes this',
    'The people behind the guidance published here, and the standards it is held to.',
    'Who writes the compliance guidance published by HCP, what qualifies them, and the review standards every article is held to before publishing.'],
  '/referral-program/': ['Company', 'Referral program',
    'For the people who already send us work, and the ones thinking about it.',
    'The Healthcare Compliance Pros referral program: how to refer a provider organization and what both sides get when the engagement starts.'],
  '/submit-a-testimonial/': ['Company', 'Submit a testimonial',
    'If the program has worked for you, this is where to say so.',
    'Share your experience of working with Healthcare Compliance Pros, for clients who want to put their results on the record.'],
  '/roi/': ['Tools', 'The cost of getting it wrong',
    'What a breach, a failed audit or a downcoding pattern actually costs, against what prevention costs.',
    'What a breach, a failed audit or an unnoticed downcoding pattern costs a provider organization, measured against the cost of preventing it.'],
  '/compliance-assessment/': ['Tools', 'Free compliance assessment',
    'Twenty minutes with an advisor, and a written gap analysis for your own setting.',
    'A free compliance assessment: twenty minutes with an advisor produces a written gap analysis for your organization, ranked by exposure.'],
  '/consultation-form/': ['Tools', 'Book a consultation',
    'Tell us about your setting and an advisor will come back with the specifics.',
    'Book a consultation with a Healthcare Compliance Pros advisor and get specifics for your own setting, specialty and number of locations.'],
  '/newsletter/': ['Resources', 'The compliance newsletter',
    'What changed this month, and whether it applies to you.',
    'A monthly newsletter on what changed in healthcare compliance and whether it applies to your organization, written by practising advisors.']
};

/* Their markup is a flat run of headings and paragraphs. Grouping on h2
   turns that back into sections, which is what the stylesheet expects and
   what makes a 11,000 word page navigable rather than a wall. */
function render(blocks) {
  const groups = [];
  let cur = { head: null, body: [] };
  for (const [tag, txt] of blocks) {
    if (tag === 'h2' || tag === 'h3') {
      if (cur.head || cur.body.length) groups.push(cur);
      cur = { head: txt, body: [] };
    } else {
      cur.body.push([tag, txt]);
    }
  }
  if (cur.head || cur.body.length) groups.push(cur);

  return groups.map((g, i) => {
    const items = [];
    let openList = false;
    for (const [tag, txt] of g.body) {
      if (tag === 'li') {
        if (!openList) { items.push('<ul>'); openList = true; }
        items.push(`<li>${esc(txt)}</li>`);
      } else {
        if (openList) { items.push('</ul>'); openList = false; }
        items.push(`<p>${esc(txt)}</p>`);
      }
    }
    if (openList) items.push('</ul>');
    return `<section class="sec ${i % 2 ? 'sec-soft solid' : 'field'}">
  <div class="wrap">
    <div class="ported">
      ${g.head ? `<h2>${esc(g.head)}</h2>` : ''}
      ${items.join('\n      ')}
    </div>
  </div>
</section>`;
  }).join('\n');
}

const FAQ = [
  { q: 'How fast can we be up and running?',
    a: 'Most organizations are fully live in two to three weeks. Your advisor does the policy customization, staff roster and training assignment; your team spends about three hours in total.' },
  { q: 'Is any of this sold separately?',
    a: 'Most of it is part of a program rather than a product you buy alone. Tell an advisor what you already have in place and they will scope only the parts you are missing.' },
  { q: 'What does the free review involve?',
    a: 'Twenty minutes with an advisor, then a written gap analysis for your own setting, ranked by what would actually hurt you first. The findings are yours whether or not you become a client.' }
];

export default Object.entries(META).map(([p, [eyebrow, h1, lead, description]], i) => ({
  path: p,
  title: `${h1} | HCP`.length > 65 ? `${h1}`.slice(0, 62) + '...' : `${h1} | HCP`,
  description,
  body: `
${pageHead(eyebrow, h1, lead)}
${render(content[p] || [])}
${whyBlock('Anyone can sell you a login. When something goes wrong, a login does not help and a named advisor does.')}
${faqBlock(FAQ)}
${useCases('What that looks like in practice', testimonials[i % testimonials.length])}
${figureBand}
${closeBlock('See where you stand.',
  'Twenty minutes with an advisor produces a written gap analysis for your own setting, ranked by what would actually hurt you first.')}`
}));
