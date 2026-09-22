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

/* Scroll reveals + count-up stats. Skipped entirely when the visitor has
   asked for reduced motion, and every element stays visible without JS. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var targets = document.querySelectorAll('.rv');
  if (reduce || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  targets.forEach(function (el) { io.observe(el); });

  /* Count-up for the stakes figures; respects the prefix/suffix in the markup. */
  var nums = document.querySelectorAll('[data-count]');
  if (!nums.length) return;
  var nio = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      nio.unobserve(el);
      var target = parseFloat(el.getAttribute('data-count'));
      var pre = el.getAttribute('data-pre') || '';
      var post = el.getAttribute('data-post') || '';
      var dec = (String(target).split('.')[1] || '').length;
      var start = null, dur = 1100;
      function tick(ts) {
        if (start === null) start = ts;
        var p = Math.min(1, (ts - start) / dur);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = pre + (target * eased).toFixed(dec) + post;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });
  nums.forEach(function (el) { nio.observe(el); });
})();
