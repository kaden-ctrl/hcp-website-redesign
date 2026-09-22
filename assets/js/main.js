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

/* Lead form. No backend is wired up yet, so a valid submission falls back to
   the visitor's mail client. Set an `action` on the form once an endpoint
   exists and this handler steps aside automatically. */
(function () {
  var form = document.querySelector('form[data-lead]');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    if (!form.checkValidity()) { form.reportValidity(); e.preventDefault(); return; }
    if (form.getAttribute('action')) return;           // real endpoint takes over
    e.preventDefault();
    var v = function (n) { var f = form.elements[n]; return f ? String(f.value || '').trim() : ''; };
    var body = [
      'Name: ' + v('name'),
      'Organisation: ' + v('organization'),
      'Email: ' + v('email'),
      'Phone: ' + v('phone'),
      'Staff size: ' + v('size'),
      'Most urgent need: ' + v('need'),
      '', v('message')
    ].join('\n');
    window.location.href = 'mailto:info@healthcarecompliancepros.com'
      + '?subject=' + encodeURIComponent('Free assessment request — ' + (v('organization') || v('name')))
      + '&body=' + encodeURIComponent(body);
  });
})();

/* Hero video. Deliberately conservative: the poster alone is shown unless the
   visitor is on a wide screen, hasn't asked for reduced motion, and isn't on a
   metered or slow connection. Failure to play is silent — the poster stands in. */
(function () {
  var v = document.getElementById('heroVid');
  if (!v) return;
  var mqMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var conn = navigator.connection || {};
  var slow = conn.saveData === true || /^(slow-)?2g$/.test(conn.effectiveType || '');

  function allowed() {
    return !mqMotion.matches && !slow && window.innerWidth >= 900;
  }
  function start() {
    if (!allowed() || v.dataset.on) return;
    v.dataset.on = '1';
    v.preload = 'auto';
    var p = v.play();
    if (p && p.catch) p.catch(function () { /* autoplay blocked — poster stays */ });
    v.addEventListener('playing', function () { v.classList.add('on'); }, { once: true });
  }
  function stop() {
    v.pause();
    v.classList.remove('on');
    delete v.dataset.on;
  }

  if (allowed()) {
    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });
  }
  mqMotion.addEventListener('change', function (e) { e.matches ? stop() : start(); });
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) v.pause(); else if (v.dataset.on) v.play().catch(function () {});
  });
})();
