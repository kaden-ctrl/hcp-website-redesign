/* Compact 24x24 icon set. The build inlines ONLY the symbols a page actually
   references, so markup stays lean (content-to-code ratio) and we avoid
   external <use> references, which Safari does not resolve. */

export const icons = {
  check: '<path d="M20.3 5.7 9 17l-5.3-5.3 1.4-1.4L9 14.2 18.9 4.3z"/>',
  chevron: '<path d="M12 15.5 4.6 8.1 6 6.7l6 6 6-6 1.4 1.4z"/>',
  arrow: '<path d="M13.2 4.6 20.6 12l-7.4 7.4-1.4-1.4 5-5H3.4v-2h13.4l-5-5z"/>',
  plus: '<path d="M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7z"/>',
  phone: '<path d="M6.6 3h3.1l1.6 4-2 1.4a12.4 12.4 0 0 0 6.3 6.3l1.4-2 4 1.6v3.1c0 1.1-.9 2-2 2A16.6 16.6 0 0 1 4.6 5c0-1.1.9-2 2-2z"/>',
  mail: '<path d="M3 5h18v14H3zm2 2.2V17h14V7.2l-7 4.6z"/>',
  pin: '<path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7zm0 4.5A2.5 2.5 0 1 0 12 11a2.5 2.5 0 0 0 0-4.5z"/>',
  clock: '<path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm1 5h-2v6l4.7 2.8 1-1.7-3.7-2.2z"/>',
  shield: '<path d="M12 2 4 5.2v6c0 5 3.4 9.6 8 10.8 4.6-1.2 8-5.8 8-10.8v-6zm-1 13-3.5-3.5 1.4-1.4L11 12.2l4.1-4.1 1.4 1.4z"/>',
  lock: '<path d="M7 9V7a5 5 0 0 1 10 0v2h2v12H5V9zm2 0h6V7a3 3 0 0 0-6 0z"/>',
  doc: '<path d="M14 2H6v20h12V6zm0 2.6L16.4 7H14zM8 11h8v2H8zm0 4h8v2H8z"/>',
  clipboard: '<path d="M9 2h6v2h3v18H6V4h3zm0 4v1h6V6h1v14H8V6zm-.5 5h7v1.6h-7zm0 4h7v1.6h-7z"/>',
  users: '<path d="M9 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm8 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM1 21c0-3.9 3.6-7 8-7s8 3.1 8 7zm17.2 0c-.3-2.3-1.4-4.3-3-5.7 3.3.2 5.8 2.7 5.8 5.7z"/>',
  gauge: '<path d="M12 4a10 10 0 0 1 8.7 15H3.3A10 10 0 0 1 12 4zm4.2 4.4-4.9 3.3a1.6 1.6 0 1 0 1.6 1.6z"/>',
  book: '<path d="M4 3h6a3 3 0 0 1 2 .8A3 3 0 0 1 14 3h6v16h-6a2 2 0 0 0-2 1.4A2 2 0 0 0 10 19H4zm7 3.4A1.4 1.4 0 0 0 9.6 5H6v12h4a3.7 3.7 0 0 1 1 .2zm2 10.8a3.7 3.7 0 0 1 1-.2h4V5h-3.6A1.4 1.4 0 0 0 13 6.4z"/>',
  alert: '<path d="M12 2.5 22.6 21H1.4zm-1 6v6h2v-6zm0 8v2h2v-2z"/>',
  chart: '<path d="M3 3h2v16h16v2H3zm5 9h2.5v5H8zm4.8-5h2.5v10h-2.5zm4.8 2.5h2.5V17h-2.5z"/>',
  gear: '<path d="m12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2zm9.3 3.6c0 .6 0 1.1-.1 1.6l2.1 1.6-2 3.5-2.5-1a9.4 9.4 0 0 1-2.7 1.6l-.4 2.7h-4l-.4-2.7a9.4 9.4 0 0 1-2.7-1.6l-2.5 1-2-3.5 2.1-1.6a9.7 9.7 0 0 1 0-3.2L2.1 8.8l2-3.5 2.5 1a9.4 9.4 0 0 1 2.7-1.6l.4-2.7h4l.4 2.7a9.4 9.4 0 0 1 2.7 1.6l2.5-1 2 3.5-2.1 1.6c.1.5.1 1 .1 1.6z"/>',
  grad: '<path d="M12 3 1 9l11 6 9-4.9V17h2V9zM5 13.2V17c0 1.7 3.1 3.4 7 3.4s7-1.7 7-3.4v-3.8l-7 3.8z"/>',
  hands: '<path d="M2 8h4.2l3-2.4a3 3 0 0 1 1.9-.6h3.5l-2.9 2.5a2 2 0 0 0 2.5 3.1L18 8h4v9h-3.8l-3.4 3.2a3 3 0 0 1-4.1 0L5.6 16H2z"/>',
  search: '<path d="M10.5 3a7.5 7.5 0 0 1 5.9 12.1l4.8 4.8-1.4 1.4-4.8-4.8A7.5 7.5 0 1 1 10.5 3zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"/>',
  refresh: '<path d="M12 4a8 8 0 0 1 7.5 5.2l-1.9.7A6 6 0 0 0 6.6 9.5H10v2H3v-7h2v2.8A8 8 0 0 1 12 4zm7 8.5h2v7h-2v-2.8A8 8 0 0 1 4.5 14.8l1.9-.7a6 6 0 0 0 11-.6H14v-2h7z"/>',
  star: '<path d="m12 2.5 2.9 6.2 6.6.9-4.8 4.7 1.2 6.7L12 17.8 6.1 21l1.2-6.7-4.8-4.7 6.6-.9z"/>',
  scale: '<path d="M11 2h2v2.3l7 1.5-.4 2L13 6.4V19h5v2H6v-2h5V6.4L4.4 7.8 4 5.8l7-1.5zM6.5 9 10 16H3zm11 0L21 16h-7z"/>',
  building: '<path d="M3 21V6l7-4 7 4v3h4v12zm4-3h2v-2H7zm0-4h2v-2H7zm0-4h2V8H7zm4 8h2v-2h-2zm0-4h2v-2h-2zm0-4h2V8h-2zm6 8h2v-2h-2zm0-4h2v-2h-2z"/>',
  facebook: '<path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/>',
  x: '<path d="M17.5 3h3.2l-7 8 8.3 10h-6.5l-5-6.2-5.8 6.2H1.3l7.5-8.5L.9 3h6.7l4.6 5.8zm-1.1 16.1h1.8L7.7 4.8H5.7z"/>',
  youtube: '<path d="M22.5 7a2.7 2.7 0 0 0-1.9-1.9C18.9 4.6 12 4.6 12 4.6s-6.9 0-8.6.5A2.7 2.7 0 0 0 1.5 7 28 28 0 0 0 1 12a28 28 0 0 0 .5 5 2.7 2.7 0 0 0 1.9 1.9c1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5a2.7 2.7 0 0 0 1.9-1.9 28 28 0 0 0 .5-5 28 28 0 0 0-.5-5zM9.8 15.3V8.7l5.7 3.3z"/>',
  linkedin: '<path d="M20.4 2H3.6A1.6 1.6 0 0 0 2 3.6v16.8A1.6 1.6 0 0 0 3.6 22h16.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 20.4 2zM8 19H5.1V9.5H8zM6.5 8.2a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zM19 19h-2.9v-4.6c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V19H9.9V9.5h2.8v1.3a3.1 3.1 0 0 1 2.8-1.5c3 0 3.5 2 3.5 4.5z"/>'
};

/** Return a hidden <svg> sprite containing only the symbols used in `html`. */
export function spriteFor(html) {
  const used = new Set();
  const re = /#([a-z]+)"><\/use>/g;
  let m;
  while ((m = re.exec(html))) if (icons[m[1]]) used.add(m[1]);
  if (!used.size) return '';
  const symbols = [...used]
    .map((n) => `<symbol id="${n}" viewBox="0 0 24 24">${icons[n]}</symbol>`)
    .join('');
  return `<svg class="visually-hidden" aria-hidden="true" width="0" height="0"><defs>${symbols}</defs></svg>`;
}
