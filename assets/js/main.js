(function () {
  'use strict';
  var S = window.SITE;
  var root = document.documentElement;
  root.classList.add('js');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  var pad = function (i) { return String(i + 1).padStart(2, '0'); };
  var lang = 'es';
  var statsDone = false;

  var renderers = {
    nav: function (t) {
      return t.nav.map(function (n) { return '<a href="' + n[1] + '">' + esc(n[0]) + '</a>'; }).join('');
    },
    navMobile: function (t) { return renderers.nav(t); },
    heroWords: function (t) {
      return t.heroWords.map(function (w, i) {
        return '<span data-reveal data-delay="' + (150 + i * 140) + '">' + esc(w) + '</span>';
      }).join('');
    },
    focus: function (t) {
      return t.focus.map(function (f, i) {
        return '<div><span class="n">' + pad(i) + '</span><div><span class="t">' + esc(f[0]) +
          '</span><span class="d">' + esc(f[1]) + '</span></div></div>';
      }).join('');
    },
    facts: function (t) {
      return t.facts.map(function (f, i) {
        return '<div data-reveal data-delay="' + i * 120 + '"><span class="k">' + esc(f[0]) +
          '</span><span class="v">' + esc(f[1]) + '</span></div>';
      }).join('');
    },
    projects: function (t) {
      return S.projects[lang].map(function (p, i) {
        var repo = 'https://github.com/' + S.githubUser + '/' + p.slug;
        return '<article class="project" data-reveal data-delay="' + (i % 2) * 120 + '">' +
          '<div class="body">' +
            '<span class="cat">' + pad(i) + ' / ' + esc(p.cat) + ' · ' + esc(p.kind) + '</span>' +
            '<h3>' + esc(p.title) + '</h3>' +
            '<p>' + esc(p.desc) + '</p>' +
            '<div class="tags">' + p.tags.map(function (g) { return '<span>' + esc(g) + '</span>'; }).join('') + '</div>' +
            '<div class="links">' +
              '<a class="primary" href="' + repo + '" target="_blank" rel="noopener">' + esc(t.viewCode) + ' ↗</a>' +
              (p.demo ? '<a href="' + p.demo + '" target="_blank" rel="noopener">' + esc(t.viewDemo) + ' ↗</a>' : '') +
            '</div>' +
          '</div>' +
          '<a class="shot" href="' + (p.demo || repo) + '" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">' +
            '<img src="' + p.img + '" alt="' + esc(t.shotAlt + ' ' + p.title) + '" loading="lazy" decoding="async">' +
          '</a>' +
        '</article>';
      }).join('');
    },
    skills: function () {
      return S.skills(lang).map(function (s, i) {
        return '<div data-reveal data-delay="' + i * 100 + '"><div class="top"><span class="cat">' + esc(s.cat) +
          '</span><span class="n">' + pad(i) + '</span></div><div class="chips">' +
          s.items.map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('') + '</div></div>';
      }).join('');
    },
    exp: function (t) {
      return t.exp.map(function (e) {
        return '<div class="tl-item" data-reveal><span class="dot"></span><span class="period">' + esc(e.period) +
          '</span><div class="main"><span class="r">' + esc(e.role) + '</span><span class="o">' + esc(e.org) +
          '</span><p>' + esc(e.desc) + '</p></div></div>';
      }).join('');
    },
    edu: function (t) {
      return t.edu.map(function (e, i) {
        return '<div data-reveal data-delay="' + i * 100 + '"><span class="y">' + esc(e[0]) + '</span><span class="t">' +
          esc(e[1]) + '</span><span class="o">' + esc(e[2]) + '</span></div>';
      }).join('');
    },
    stats: function (t) {
      return t.stats.map(function (s, i) {
        var shown = statsDone || reduced ? s[0] + s[1] : '0' + s[1];
        return '<div data-reveal data-delay="' + i * 120 + '"><span class="v" data-n="' + s[0] + '" data-suf="' + esc(s[1]) + '">' +
          shown + '</span><span class="l">' + esc(s[2]) + '</span></div>';
      }).join('');
    }
  };

  function render() {
    var t = S.t[lang];
    root.lang = lang;
    document.title = t.title;
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t[el.dataset.i18n]; });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) { el.alt = t[el.dataset.i18nAlt]; });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t[el.dataset.i18nAria]); });
    document.querySelectorAll('[data-list]').forEach(function (el) { el.innerHTML = renderers[el.dataset.list](t); });
    document.querySelector('[data-words]').innerHTML = t.tagline.split(' ').map(function (w) {
      return '<span>' + esc(w) + ' </span>';
    }).join('');
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    setupReveal();
    tick();
  }

  // Reveal on scroll
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      io.unobserve(el);
      if (el.hasAttribute('data-stats')) { runCounter(); return; }
      el.style.transitionDelay = (el.dataset.delay || 0) + 'ms';
      el.classList.add('in');
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }) : null;

  function setupReveal() {
    document.querySelectorAll('[data-reveal]:not(.in), [data-stats]').forEach(function (el) {
      if (!io || reduced) { el.classList.add('in'); return; }
      if (el.hasAttribute('data-stats') && statsDone) return;
      io.observe(el);
    });
  }

  function runCounter() {
    if (statsDone) return;
    statsDone = true;
    if (reduced) return;
    var els = document.querySelectorAll('.stats .v');
    var start = performance.now(), dur = 1800;
    (function step(now) {
      var p = Math.min(1, (now - start) / dur), a = 1 - Math.pow(1 - p, 4);
      els.forEach(function (el) { el.textContent = Math.round(+el.dataset.n * a) + el.dataset.suf; });
      if (p < 1) requestAnimationFrame(step);
    })(start);
  }

  // Scroll-linked effects
  var nav = document.getElementById('nav');
  function tick() {
    var y = window.scrollY, vh = window.innerHeight;
    var clamp = function (v) { return Math.max(0, Math.min(1, v)); };
    nav.classList.toggle('scrolled', y > 40);
    if (reduced) return;
    document.querySelectorAll('[data-hero-fade]').forEach(function (el) {
      el.style.opacity = Math.max(0, 1 - y / (vh * 0.55));
      el.style.transform = 'translateY(' + y * -0.15 + 'px)';
    });
    document.querySelectorAll('[data-grow]').forEach(function (el) {
      var r = el.getBoundingClientRect();
      var p = clamp(1 - (r.top - vh * 0.15) / (vh * 0.75));
      el.style.transform = 'scale(' + (0.82 + 0.18 * p) + ')';
      el.style.borderRadius = (40 - 20 * p) + 'px';
    });
    var wc = document.querySelector('[data-words]');
    if (wc) {
      var r = wc.getBoundingClientRect(), ws = wc.children;
      var n = Math.round(clamp((vh * 0.8 - r.top) / (r.height + vh * 0.25)) * ws.length);
      for (var i = 0; i < ws.length; i++) ws[i].style.opacity = i < n ? '1' : '0.18';
    }
    var tl = document.querySelector('[data-tl]'), tf = document.querySelector('[data-tl-fill]');
    if (tl && tf) {
      var tr = tl.getBoundingClientRect();
      tf.style.height = clamp((vh * 0.65 - tr.top) / tr.height) * 100 + '%';
    }
  }
  var raf = null;
  window.addEventListener('scroll', function () {
    if (!raf) raf = requestAnimationFrame(function () { raf = null; tick(); });
  }, { passive: true });
  window.addEventListener('resize', tick);

  // Language
  function setLang(l) {
    lang = l;
    try { localStorage.setItem('rd-lang', l); } catch (e) {}
    render();
  }
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });

  // Mobile menu
  var burger = document.getElementById('burger'), menu = document.getElementById('mobile-menu');
  function setMenu(open) {
    burger.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
    document.body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', function () { setMenu(menu.hidden); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  window.addEventListener('resize', function () { if (window.innerWidth >= 860) setMenu(false); });

  // Static links
  document.getElementById('mail-link').href = 'mailto:' + S.email;
  document.getElementById('li-link').href = S.linkedin;
  document.getElementById('gh-link').href = 'https://github.com/' + S.githubUser;
  document.getElementById('cv-link').href = S.cv;
  document.getElementById('year').textContent = new Date().getFullYear();

  var saved = null;
  try { saved = localStorage.getItem('rd-lang'); } catch (e) {}
  lang = saved === 'en' ? 'en' : 'es';
  render();
})();
