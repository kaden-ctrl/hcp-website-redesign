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

/* Primary navigation dropdowns.
   Previously these were pure CSS :hover, which had three problems: they
   were unreachable on touch, they snapped shut the moment the pointer
   crossed the gap between the trigger and the panel, and the wide panel
   rendered partly off the left edge of the window. This drives them from
   script, with an intent delay, and clamps each panel inside the viewport
   after opening. */
(function () {
  var nav = document.querySelector('.nav');
  if (!nav) return;
  var hoverable = window.matchMedia('(hover: hover) and (pointer: fine)');
  var items = [].slice.call(nav.querySelectorAll(':scope > li')).filter(function (li) {
    return li.querySelector(':scope > .menu');
  });
  if (!items.length) return;
  // Lets the stylesheet drop its hover-only fallback now that script owns this.
  nav.classList.add('js');
  var openItem = null, timer = null;

  items.forEach(function (li, i) {
    var trigger = li.querySelector(':scope > a');
    var menu = li.querySelector(':scope > .menu');
    menu.id = menu.id || 'navmenu-' + i;
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-haspopup', 'true');
    trigger.setAttribute('aria-controls', menu.id);
    li._trigger = trigger;
    li._menu = menu;
  });

  function place(li) {
    var menu = li._menu;
    // Reset before measuring, or a previous nudge compounds on reopen.
    menu.style.left = ''; menu.style.right = ''; menu.style.transform = '';
    var r = menu.getBoundingClientRect();
    var pad = 16;
    if (r.right > window.innerWidth - pad) {
      menu.style.left = 'auto';
      menu.style.right = '0';
      r = menu.getBoundingClientRect();
    }
    if (r.left < pad) {
      // Still off-screen (the wide panel is wider than its trigger allows),
      // so pin it to the window rather than to the list item.
      menu.style.left = (pad - li.getBoundingClientRect().left) + 'px';
      menu.style.right = 'auto';
    }
  }

  function open(li) {
    if (openItem === li) return;
    if (openItem) close(openItem);
    li.classList.add('open');
    li._trigger.setAttribute('aria-expanded', 'true');
    place(li);
    openItem = li;
  }
  function close(li) {
    if (!li) return;
    li.classList.remove('open');
    li._trigger.setAttribute('aria-expanded', 'false');
    if (openItem === li) openItem = null;
  }
  function closeAll() { if (openItem) close(openItem); }

  items.forEach(function (li) {
    li.addEventListener('mouseenter', function () {
      if (!hoverable.matches) return;
      clearTimeout(timer);
      open(li);
    });
    li.addEventListener('mouseleave', function () {
      if (!hoverable.matches) return;
      clearTimeout(timer);
      // A short grace period so crossing the gap to the panel does not
      // close it, which is what made the old menus feel unusable.
      timer = setTimeout(function () { close(li); }, 220);
    });
    li._trigger.addEventListener('click', function (e) {
      // On touch, the first tap opens rather than navigating.
      if (hoverable.matches) return;
      if (openItem !== li) { e.preventDefault(); open(li); }
    });
    li.addEventListener('focusin', function () { open(li); });
    li.addEventListener('focusout', function (e) {
      if (!li.contains(e.relatedTarget)) close(li);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && openItem) { var t = openItem._trigger; closeAll(); t.focus(); }
  });
  document.addEventListener('click', function (e) {
    if (openItem && !openItem.contains(e.target)) closeAll();
  });
  window.addEventListener('resize', closeAll);
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

/* Specialty and organization finder.
   Filters entries that are already in the document, so with no script every
   route is still listed and every link still works. Search matches the
   entry name; the tabs narrow by kind. Group headings hide themselves when
   their list empties, which otherwise leaves a heading over nothing. */
(function () {
  var root = document.querySelector('[data-finder]');
  if (!root) return;
  var input = root.querySelector('[data-finder-input]');
  var tabs = [].slice.call(root.querySelectorAll('.ft'));
  var count = root.querySelector('[data-finder-count]');
  var empty = document.querySelector('[data-finder-empty]');
  var items = [].slice.call(document.querySelectorAll('[data-list] > li'));
  if (!items.length) return;
  var kind = 'all';

  function apply() {
    var q = (input.value || '').trim().toLowerCase();
    var shown = 0;
    items.forEach(function (li) {
      var okKind = kind === 'all' || li.getAttribute('data-kind') === kind;
      var okText = !q || li.getAttribute('data-name').indexOf(q) !== -1;
      var on = okKind && okText;
      li.hidden = !on;
      if (on) shown++;
    });
    // A heading with nothing under it reads as a broken list.
    ['organization', 'specialty'].forEach(function (k) {
      var any = items.some(function (li) { return li.getAttribute('data-kind') === k && !li.hidden; });
      document.querySelectorAll('[data-group="' + k + '"]').forEach(function (el) { el.hidden = !any; });
      var list = document.querySelector(k === 'organization' ? '.dir-org' : '.dir-spec');
      if (list) list.hidden = !any;
    });
    if (empty) empty.hidden = shown !== 0;
    count.textContent = (q || kind !== 'all')
      ? shown + (shown === 1 ? ' match' : ' matches')
      : '';
  }

  input.addEventListener('input', apply);
  input.addEventListener('search', apply);
  tabs.forEach(function (b) {
    b.addEventListener('click', function () {
      kind = b.getAttribute('data-filter');
      tabs.forEach(function (o) {
        var on = o === b;
        o.classList.toggle('is-on', on);
        o.setAttribute('aria-pressed', String(on));
      });
      apply();
    });
  });
  apply();
})();

/* Hero particle network.
   Decorative, so it never runs when the visitor has asked for reduced
   motion, and it only animates while the hero is actually on screen and
   the tab is visible. Device pixel ratio is capped because Safari drops
   canvases past roughly 16M pixels, which would leave a blank rectangle
   rather than a degraded one. */
(function () {
  var canvas = document.getElementById('particles');
  if (!canvas || !canvas.getContext) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { canvas.remove(); return; }
  var ctx = canvas.getContext('2d');
  var w, h, parts, running = false, inView = false;
  var COUNT = 48, LINK = 130;

  function resize() {
    w = canvas.offsetWidth; h = canvas.offsetHeight;
    if (!w || !h) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var MAX = 4000000;
    if (w * h * dpr * dpr > MAX) dpr = Math.max(1, Math.sqrt(MAX / (w * h)));
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function init() {
    parts = [];
    for (var i = 0; i < COUNT; i++) {
      parts.push({ x: Math.random() * w, y: Math.random() * h,
                   vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
                   r: Math.random() * 1.6 + 0.6 });
    }
  }
  function step() {
    if (!running || !parts) return;
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(163,199,57,.55)';
      ctx.fill();
      for (var j = i + 1; j < parts.length; j++) {
        var q = parts[j], dx = p.x - q.x, dy = p.y - q.y;
        var d = Math.sqrt(dx * dx + dy * dy);
        if (d < LINK) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = 'rgba(100,162,218,' + (0.22 * (1 - d / LINK)).toFixed(3) + ')';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(step);
  }
  function setRunning() {
    var should = inView && !document.hidden;
    if (should && !running) { running = true; requestAnimationFrame(step); }
    else if (!should) { running = false; }
  }

  /* The stylesheet is loaded asynchronously, so on the first pass the canvas
     can still be unstyled and measure zero. Bailing there left it stuck at
     the 300x150 default forever. Size on demand instead, and re-size if the
     element has grown by the time it is first needed. */
  function ensureSized() {
    if (w === canvas.offsetWidth && h === canvas.offsetHeight && parts) return !!w;
    resize();
    if (!w || !h) return false;
    init();
    return true;
  }

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) {
      inView = es[0].isIntersecting;
      if (inView && !ensureSized()) {
        // still unstyled; try again on the next frame rather than giving up
        requestAnimationFrame(function retry() { if (!ensureSized()) requestAnimationFrame(retry); else setRunning(); });
        return;
      }
      setRunning();
    }, { threshold: 0.02 }).observe(canvas);
  } else { inView = ensureSized(); setRunning(); }
  document.addEventListener('visibilitychange', setRunning);
  var t;
  window.addEventListener('resize', function () {
    clearTimeout(t); t = setTimeout(function () { resize(); init(); }, 180);
  });
})();

/* Reading-position rail. */
(function () {
  var bar = document.getElementById('scrollbar');
  if (!bar) return;
  var ticking = false;
  function update() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
})();

/* Count-up on the figures.
   The markup already carries the true value, so it is captured up front
   and restored on a timeout guarantee: requestAnimationFrame is paused in
   a background tab, and without this a visitor who scrolls a figure into
   view, switches tabs and returns would be left looking at a part-way
   number for as long as the page stays open. */
(function () {
  var nums = document.querySelectorAll('[data-count]');
  if (!nums.length || !('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target; io.unobserve(el);
      var finalText = el.textContent, done = false;
      function finish() { if (done) return; done = true; el.textContent = finalText; }
      var target = parseFloat(el.getAttribute('data-count'));
      // Counting 0 to 4 spends most of its frames showing zero, which reads
      // as a broken figure rather than an animation.
      if (!(target > 4)) return;
      var pre = el.getAttribute('data-pre') || '', post = el.getAttribute('data-post') || '';
      var start = null, dur = 1200;
      function tick(ts) {
        if (done) return;
        if (start === null) start = ts;
        var p = Math.min(1, (ts - start) / dur);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = pre + Math.round(target * eased).toLocaleString() + post;
        if (p < 1) requestAnimationFrame(tick); else finish();
      }
      requestAnimationFrame(tick);
      setTimeout(finish, dur + 600);
    });
  }, { threshold: 0.5 });
  nums.forEach(function (el) { io.observe(el); });
})();

/* Welcome picker.
   Opens once per visitor and routes them to the page built for their
   setting. Kept honest about being a modal: focus moves in, is trapped
   while open, Escape and the backdrop both close it, and focus returns to
   where it was. It stays hidden without script, so a scripting failure
   leaves the page fully usable rather than covered by a dead overlay. */
(function () {
  var root = document.querySelector('[data-picker]');
  if (!root) return;
  var KEY = 'hcp-picker-seen';
  var panel = root.querySelector('.picker-panel');
  var opener = null;

  function seen() {
    try { return localStorage.getItem(KEY) === '1'; } catch (e) { return false; }
  }
  function remember() {
    try { localStorage.setItem(KEY, '1'); } catch (e) { /* private mode; just skip */ }
  }
  function focusables() {
    return [].slice.call(panel.querySelectorAll('a[href],button:not([disabled])'))
      .filter(function (el) { return el.offsetParent !== null; });
  }
  function open() {
    opener = document.activeElement;
    root.hidden = false;
    document.body.style.overflow = 'hidden';
    var f = focusables();
    if (f.length) f[0].focus();
    document.addEventListener('keydown', onKey, true);
  }
  function close() {
    root.hidden = true;
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKey, true);
    remember();
    if (opener && opener.focus) opener.focus();
  }
  function onKey(e) {
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key !== 'Tab') return;
    var f = focusables();
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  root.addEventListener('click', function (e) {
    if (e.target.closest('[data-picker-close]') || e.target.closest('[data-picker-dim]')) {
      // a specialty link closes and navigates; the skip link closes and jumps
      close();
    }
  });
  // Picking a specialty is also a decision, so do not ask again.
  root.querySelectorAll('.picker-grid a').forEach(function (a) {
    a.addEventListener('click', remember);
  });

  if (!seen()) {
    // a beat after load, so it does not fight the first paint
    setTimeout(open, 700);
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
