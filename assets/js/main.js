/* Progressive enhancement only — the page is fully usable without it. */
(function () {
  'use strict';
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('m-nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      burger.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
      nav.hidden = open;
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { burger.setAttribute('aria-expanded', 'false'); nav.hidden = true; }
    });
  }
})();

/* Load the non-critical stylesheet from this external, deferred script rather
   than an inline onload handler, which our CSP (script-src 'self') blocks. */
(function () {
  if (document.querySelector('link[data-main-css]')) return;
  var l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = '/assets/css/main.css';
  l.setAttribute('data-main-css', '');
  document.head.appendChild(l);
})();
