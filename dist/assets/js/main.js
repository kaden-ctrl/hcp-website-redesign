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
