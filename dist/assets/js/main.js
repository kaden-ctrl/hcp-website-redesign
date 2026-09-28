/* Progressive enhancement only. The page is fully usable without this file. */

/* Load the deferred stylesheet. Injected from script rather than with a
   <link rel=preload onload>, because the Content-Security-Policy on this
   site sets script-src 'self', which blocks inline event handlers: the
   sheet would download and never apply. */
(function () {
  var href = document.documentElement.getAttribute('data-css');
  if (!href || document.querySelector('link[data-main-css]')) return;
  var l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = href;
  l.setAttribute('data-main-css', '');
  document.head.appendChild(l);
})();

/* Mobile navigation. */
(function () {
  var burger = document.querySelector('.burger');
  var panel = document.getElementById('mobile-nav');
  if (!burger || !panel) return;
  burger.addEventListener('click', function () {
    var open = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!open));
    panel.hidden = open;
  });
})();

/* Scroll reveals. Every element is visible without JS, and the stylesheet
   carries a failsafe animation in case this never runs, so a failure here
   degrades to "no animation" rather than "blank page". */
(function () {
  var targets = document.querySelectorAll('.rv');
  if (!targets.length) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
  targets.forEach(function (el) { io.observe(el); });
})();

/* Hero video. Playback is skipped only for reasons that genuinely matter:
   an explicit reduced-motion preference, or a connection the visitor is
   paying for. Deliberately no viewport-width gate -- any browser window
   that is not maximised is routinely under 900px, and gating on that
   silently disables the hero for most visitors. The reason is written to
   <html data-hero-video> so it is inspectable rather than mysterious. */
(function () {
  var v = document.querySelector('.hero-media video');
  if (!v) return;
  var mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  var conn = navigator.connection || {};

  function reason() {
    if (mq.matches) return 'off-reduced-motion';
    if (conn.saveData === true) return 'off-save-data';
    if (/^(slow-)?2g$/.test(conn.effectiveType || '')) return 'off-slow-connection';
    return 'on';
  }

  var state = reason();
  document.documentElement.setAttribute('data-hero-video', state);
  if (state !== 'on') { v.removeAttribute('autoplay'); v.pause(); return; }

  var p = v.play();
  if (p && p.catch) p.catch(function () { /* blocked, the poster stands in */ });

  /* Stop decoding while off-screen; battery, not correctness. */
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) {
      es.forEach(function (e) { e.isIntersecting ? v.play().catch(function () {}) : v.pause(); });
    }, { threshold: 0.05 }).observe(v);
  }
})();

/* Lead form. No backend is wired up yet, so a valid submission falls back
   to the visitor's mail client. Set an `action` on the form once a real
   endpoint exists and this handler steps aside on its own. */
(function () {
  var form = document.querySelector('form[data-lead]');
  if (!form || form.getAttribute('action')) return;
  form.addEventListener('submit', function (e) {
    if (!form.checkValidity()) return;
    e.preventDefault();
    function v(n) { var el = form.elements[n]; return el ? el.value.trim() : ''; }
    var body = [
      'Name: ' + v('name'),
      'Organization: ' + v('organization'),
      'Email: ' + v('email'),
      'Phone: ' + v('phone'),
      'Staff size: ' + v('staff'),
      'Most urgent need: ' + v('need'),
      '',
      v('notes')
    ].join('\n');
    window.location.href = 'mailto:' + form.getAttribute('data-lead')
      + '?subject=' + encodeURIComponent('Free compliance review: ' + (v('organization') || v('name')))
      + '&body=' + encodeURIComponent(body);
  });
})();
