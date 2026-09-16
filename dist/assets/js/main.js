/* Healthcare Compliance Pros — progressive enhancement only.
   Loaded with `defer`; every page is fully readable and navigable without it. */
(function () {
  'use strict';

  var head = document.querySelector('.site-head');

  /* ---- Desktop mega menus ------------------------------------------ */
  var triggers = Array.prototype.slice.call(document.querySelectorAll('.nav-trigger'));

  function closeAll(except) {
    triggers.forEach(function (t) {
      if (t === except) return;
      t.setAttribute('aria-expanded', 'false');
      var p = document.getElementById(t.getAttribute('aria-controls'));
      if (p) p.hidden = true;
    });
  }

  triggers.forEach(function (trigger) {
    var panel = document.getElementById(trigger.getAttribute('aria-controls'));
    if (!panel) return;

    function open() {
      closeAll(trigger);
      trigger.setAttribute('aria-expanded', 'true');
      panel.hidden = false;
    }
    function close() {
      trigger.setAttribute('aria-expanded', 'false');
      panel.hidden = true;
    }

    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      trigger.getAttribute('aria-expanded') === 'true' ? close() : open();
    });

    // Hover intent on pointer devices, with a small close delay so the
    // cursor can travel from the trigger into the panel.
    var timer;
    var item = trigger.closest('li');
    if (item && window.matchMedia('(hover:hover) and (min-width:1041px)').matches) {
      item.addEventListener('mouseenter', function () { clearTimeout(timer); open(); });
      item.addEventListener('mouseleave', function () { timer = setTimeout(close, 180); });
      panel.addEventListener('mouseenter', function () { clearTimeout(timer); });
      panel.addEventListener('mouseleave', function () { timer = setTimeout(close, 180); });
    }
  });

  document.addEventListener('click', function (e) {
    if (head && !head.contains(e.target)) closeAll(null);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    closeAll(null);
    if (burger && burger.getAttribute('aria-expanded') === 'true') toggleMobile(false);
  });

  /* ---- Mobile menu --------------------------------------------------- */
  var burger = document.querySelector('.burger');
  var mobile = document.getElementById('mobile-nav');

  function toggleMobile(open) {
    if (!burger || !mobile) return;
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobile.hidden = !open;
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (burger && mobile) {
    burger.addEventListener('click', function () {
      toggleMobile(burger.getAttribute('aria-expanded') !== 'true');
    });
  }

  document.querySelectorAll('.macc').forEach(function (acc) {
    var panel = document.getElementById(acc.getAttribute('aria-controls'));
    if (!panel) return;
    acc.addEventListener('click', function () {
      var open = acc.getAttribute('aria-expanded') === 'true';
      acc.setAttribute('aria-expanded', String(!open));
      panel.hidden = open;
    });
  });

  // Reset the mobile menu if the viewport grows back to desktop.
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1080 && burger && burger.getAttribute('aria-expanded') === 'true') {
      toggleMobile(false);
    }
  });

  /* ---- Contact form: client-side validation + mailto fallback -------- */
  var form = document.querySelector('form[data-contact]');
  if (form) {
    form.addEventListener('submit', function (e) {
      if (!form.checkValidity()) return; // let the browser show its own messages
      if (form.getAttribute('action')) return; // a real endpoint is wired up
      e.preventDefault();
      var get = function (n) {
        var f = form.elements[n];
        return f ? String(f.value || '').trim() : '';
      };
      var body = [
        'Name: ' + get('name'),
        'Organization: ' + get('organization'),
        'Email: ' + get('email'),
        'Phone: ' + get('phone'),
        'Employees: ' + get('size'),
        'Interested in: ' + get('interest'),
        '',
        get('message')
      ].join('\n');
      window.location.href = 'mailto:info@healthcarecompliancepros.com' +
        '?subject=' + encodeURIComponent('Consultation request — ' + (get('organization') || get('name'))) +
        '&body=' + encodeURIComponent(body);
    });
  }
})();

/* Hero "What HCP Offers" rotator — purely decorative, pauses on hover. */
(function () {
  var list = document.querySelector('.offer-rotator');
  if (!list) return;
  var items = list.querySelectorAll('.offer');
  if (items.length < 2) return;
  if (window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  var i = 0, paused = false;
  list.addEventListener('mouseenter', function () { paused = true; });
  list.addEventListener('mouseleave', function () { paused = false; });
  setInterval(function () {
    if (paused) return;
    items[i].removeAttribute('data-active');
    i = (i + 1) % items.length;
    items[i].setAttribute('data-active', '');
  }, 3200);
})();

/* Homepage program tabs — roving tabindex, arrow-key navigable.
   Without JS every panel stays visible, so content is never hidden. */
(function () {
  var list = document.querySelector('.ptab-list');
  if (!list) return;
  var tabs = [].slice.call(list.querySelectorAll('[role="tab"]'));
  if (!tabs.length) return;

  function select(idx, focus) {
    tabs.forEach(function (t, i) {
      var panel = document.getElementById(t.getAttribute('aria-controls'));
      var on = i === idx;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      if (panel) panel.hidden = !on;
    });
    if (focus) tabs[idx].focus();
  }

  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(i); });
    t.addEventListener('keydown', function (e) {
      var k = e.key, n = null;
      if (k === 'ArrowDown' || k === 'ArrowRight') n = (i + 1) % tabs.length;
      else if (k === 'ArrowUp' || k === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length;
      else if (k === 'Home') n = 0;
      else if (k === 'End') n = tabs.length - 1;
      if (n !== null) { e.preventDefault(); select(n, true); }
    });
  });
})();
