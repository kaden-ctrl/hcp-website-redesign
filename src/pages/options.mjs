import { esc } from '../layout.mjs';

/* Background options. Each one gets a full viewport height with real
   content on top, because a background cannot be judged as a swatch: the
   question is what it does underneath a heading and a paragraph at the
   scale you actually meet it.

   The page suppresses the site's own fixed layers so each sample is seen
   on its own rather than through the grid and aurora it is replacing.
   noindex, out of the sitemap. Delete once a direction is chosen. */

const SAMPLE = (n, name, note) => `
<section class="bgopt bgopt-${n}">
  <div class="wrap bgopt-in">
    <div class="bgopt-meta">
      <span class="opt-k">Option ${esc(n.toUpperCase())}</span>
      <h2>${esc(name)}</h2>
      <p>${esc(note)}</p>
    </div>
    <div class="bgopt-demo">
      <span class="mono-label">The platform</span>
      <h3>One screen for the whole program.</h3>
      <p>Completion, policy status, risk analysis and exclusion monitoring, across every
      location, live rather than assembled for the request.</p>
      <ul class="bgopt-figs">
        <li><b>1,000+</b><span>Provider groups</span></li>
        <li><b>50</b><span>States</span></li>
        <li><b>15+</b><span>Years</span></li>
      </ul>
    </div>
  </div>
</section>`;

const body = `
<section class="sec sec-tight bgopt-head">
  <div class="wrap">
    <div class="page-head">
      <span class="mono-label">Backgrounds</span>
      <h1>Six grounds, at full height</h1>
      <p class="sec-lead">The current one is a 64px wireframe grid, three drifting glows and the
      cursor light. Each option below replaces that whole stack. Scroll: a background is a
      thing you meet at full size, not a swatch.</p>
    </div>
  </div>
</section>

${SAMPLE('a', 'Nothing at all',
  'Flat ground, no grid, no glows. Only the cursor light stays. The quietest option and the one that makes a long page feel calmest.')}
${SAMPLE('b', 'Contour lines',
  'Slow organic curves instead of a square grid. Reads as considered rather than as graph paper, and does not repeat on a visible tile.')}
${SAMPLE('c', 'Column rules',
  'Faint vertical lines on the layout grid itself, so the structure of the page is the texture. Architectural rather than technical.')}
${SAMPLE('d', 'Deep wash and grain',
  'A vertical gradient from near black to a warmer navy, with fine film grain. No geometry at all. The most editorial of the six.')}
${SAMPLE('e', 'Sparse dot field',
  'Widely spaced dots rather than ruled lines. The same technical register as the current grid, at a fraction of the weight.')}
${SAMPLE('f', 'Horizon glow',
  'One wide band of light low on the page, fixed, with nothing above it. Gives the dark somewhere to go without filling the whole field.')}
`;

export default {
  path: '/design-options/',
  title: 'Background options | HCP',
  description: 'Six full-height background treatments for the site ground, each shown with real content on top so the effect can be judged at the scale it is met.',
  noindex: true,
  body
};
