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
      /* The markup already carries the real figure, so treat it as the
         source of truth and restore it verbatim rather than rebuilding it
         from prefix/suffix and risking a formatting mismatch. */
      var finalText = el.textContent;
      var done = false;
      function finish() { if (done) return; done = true; el.textContent = finalText; }

      /* Counting 0 -> 2 spends most of its frames displaying "0", which
         reads as a broken stat rather than an animation. Small figures are
         simply shown. */
      if (!(target > 4)) return;

      var pre = el.getAttribute('data-pre') || '';
      var post = el.getAttribute('data-post') || '';
      var dec = (String(target).split('.')[1] || '').length;
      var start = null, dur = 1100;
      function tick(ts) {
        if (done) return;
        if (start === null) start = ts;
        var p = Math.min(1, (ts - start) / dur);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = pre + (target * eased).toFixed(dec) + post;
        if (p < 1) requestAnimationFrame(tick); else finish();
      }
      requestAnimationFrame(tick);
      /* requestAnimationFrame is paused while the tab is in the background,
         which strands the counter on a part-way value for as long as the
         page stays open. Guarantee the true number regardless. */
      setTimeout(finish, dur + 600);
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

/* Hero video. The element autoplays natively (muted + playsinline), which
   browsers implement reliably. This script only *removes* playback when it
   would be unwelcome — reduced motion, metered/slow connections, or small
   screens — and pauses it off-screen to save battery. */
(function () {
  var v = document.getElementById('heroVid');
  if (!v) return;
  var mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  var conn = navigator.connection || {};

  // Only skip playback for reasons that genuinely matter: an explicit
  // reduced-motion preference, or a connection the visitor is paying for.
  // The previous 900px width gate silently disabled the hero on any browser
  // window that was not maximised, which is most of them.
  function unwanted() {
    return mq.matches
      || conn.saveData === true
      || /^(slow-)?2g$/.test(conn.effectiveType || '');
  }
  function disable() {
    v.autoplay = false;
    v.pause();
    v.removeAttribute('autoplay');
    v.classList.add('off');   // fade out; poster shows through
  }
  function enable() {
    if (unwanted()) return;
    var p = v.play();
    if (p && p.catch) p.catch(function () { /* blocked — poster stands in */ });
  }

  if (unwanted()) {
    disable();
    document.documentElement.setAttribute('data-hero-video',
      mq.matches ? 'off-reduced-motion'
      : conn.saveData ? 'off-save-data' : 'off-slow-connection');
  } else {
    document.documentElement.setAttribute('data-hero-video', 'on');
  }
  v.addEventListener('playing', function () { v.classList.remove('off'); });
  mq.addEventListener('change', function (e) { e.matches ? disable() : enable(); });

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) v.pause();
    else if (!unwanted()) enable();
  });

  // Stop decoding once the hero scrolls away.
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { if (!unwanted()) enable(); } else { v.pause(); }
      });
    }, { threshold: 0.05 }).observe(v);
  }
})();

/* Header dropdowns. Click to toggle, hover on pointer devices, Escape to
   close. Without JS every panel simply stays closed and the top-level link
   still navigates, so nothing becomes unreachable. */
(function () {
  var triggers = [].slice.call(document.querySelectorAll('.nav-top[aria-controls]'));
  if (!triggers.length) return;

  function closeAll(except) {
    triggers.forEach(function (t) {
      if (t === except) return;
      t.setAttribute('aria-expanded', 'false');
      var p = document.getElementById(t.getAttribute('aria-controls'));
      if (p) p.hidden = true;
    });
  }

  triggers.forEach(function (t) {
    var panel = document.getElementById(t.getAttribute('aria-controls'));
    if (!panel) return;
    function open() { closeAll(t); t.setAttribute('aria-expanded', 'true'); panel.hidden = false; }
    function shut() { t.setAttribute('aria-expanded', 'false'); panel.hidden = true; }

    t.addEventListener('click', function (e) {
      e.preventDefault();
      t.getAttribute('aria-expanded') === 'true' ? shut() : open();
    });

    var li = t.closest('li'), timer;
    if (li && window.matchMedia('(hover:hover) and (min-width:981px)').matches) {
      li.addEventListener('mouseenter', function () { clearTimeout(timer); open(); });
      li.addEventListener('mouseleave', function () { timer = setTimeout(shut, 160); });
    }
    panel.addEventListener('click', function (e) { if (e.target.tagName === 'A') shut(); });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.head-nav')) closeAll(null);
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll(null); });
})();
