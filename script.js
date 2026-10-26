(function () {
  var D = window.PORTFOLIO;
  var $ = function (s) { return document.querySelector(s); };

  function el(tag, props, children) {
    var n = document.createElement(tag);
    Object.keys(props || {}).forEach(function (k) {
      if (k === 'text') n.textContent = props[k];
      else n.setAttribute(k, props[k]);
    });
    (children || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }
  function tagList(items) {
    return el('div', { class: 'tags' }, items.map(function (t) { return el('span', { text: t }); }));
  }

  // Theme toggle
  $('#theme').addEventListener('click', function () {
    var root = document.documentElement;
    var dark = root.dataset.theme
      ? root.dataset.theme === 'dark'
      : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
  });

  // Mobile menu
  var menu = $('#menu'), burger = $('#burger');
  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  menu.addEventListener('click', function () {
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
  });

  // Typing effect
  var typed = $('#typed'), ri = 0, ci = 0, deleting = false;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function type() {
    var word = D.roles[ri];
    if (reduce) { typed.textContent = D.roles[0]; return; }
    ci += deleting ? -1 : 1;
    typed.textContent = word.slice(0, ci);
    var delay = deleting ? 40 : 90;
    if (!deleting && ci === word.length) { deleting = true; delay = 1400; }
    else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % D.roles.length; delay = 300; }
    setTimeout(type, delay);
  }
  type();

  // Projects + filters
  var grid = $('#projectGrid'), filters = $('#filters'), active = 'All';
  var allTags = ['All'].concat(D.projects.reduce(function (a, p) {
    if (a.indexOf(p.category) < 0) a.push(p.category);
    return a;
  }, []));
  function renderProjects() {
    grid.replaceChildren.apply(grid, D.projects
      .filter(function (p) { return active === 'All' || p.category === active; })
      .map(function (p) {
        var links = [];
        if (p.live) links.push(el('a', { href: p.live, target: '_blank', rel: 'noopener', text: 'Live ↗' }));
        if (p.code) links.push(el('a', { href: p.code, target: '_blank', rel: 'noopener', text: 'Code ↗' }));
        return el('article', { class: 'card' }, [
          el('h3', { text: p.title }), el('p', { text: p.desc }), tagList(p.tags),
          el('div', { class: 'links' }, links)
        ]);
      }));
  }
  function renderFilters() {
    filters.replaceChildren.apply(filters, allTags.map(function (t) {
      var b = el('button', { class: 'chip', type: 'button', 'aria-pressed': t === active, text: t });
      b.addEventListener('click', function () { active = t; renderFilters(); renderProjects(); });
      return b;
    }));
  }
  renderFilters(); renderProjects();

  // Experience
  $('#timeline').append.apply($('#timeline'), D.experience.map(function (x) {
    return el('li', {}, [
      el('h3', { text: x.role + ' · ' + x.org }),
      el('span', { class: 'when', text: x.when }),
      x.desc ? el('p', { text: x.desc }) : null
    ]);
  }));

  // Skills
  $('#skillList').append.apply($('#skillList'), Object.keys(D.skills).map(function (k) {
    return el('div', {}, [el('h3', { text: k }), tagList(D.skills[k])]);
  }));

  // Reveal on scroll + animated counters
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      io.unobserve(e.target);
      e.target.querySelectorAll('[data-count]').forEach(count);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(function (s) { io.observe(s); });
  function count(n) {
    var end = +n.dataset.count, t0 = performance.now();
    (function step(t) {
      var p = Math.min((t - t0) / 900, 1);
      n.textContent = Math.round(end * p) + (p === 1 ? '+' : '');
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }

  // Active nav link + back-to-top
  var links = document.querySelectorAll('#menu a'), toTop = $('#toTop');
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) links.forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main section[id]').forEach(function (s) { spy.observe(s); });
  addEventListener('scroll', function () { toTop.hidden = scrollY < 600; }, { passive: true });
  toTop.addEventListener('click', function () { scrollTo({ top: 0 }); });

  // Contact form (Web3Forms)
  var form = $('#contactForm'), status = $('#formStatus');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var key = form.access_key.value;
    if (key.indexOf('YOUR_') === 0) {
      status.className = 'err';
      status.textContent = 'Form not configured yet — add your Web3Forms access key (see README).';
      return;
    }
    status.className = ''; status.textContent = 'Sending…';
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(form)))
    }).then(function (r) { return r.json(); }).then(function (j) {
      if (!j.success) throw new Error(j.message);
      status.className = 'ok'; status.textContent = 'Thanks! Your message was sent.';
      form.reset();
    }).catch(function () {
      status.className = 'err';
      status.textContent = 'Something went wrong. Please email me directly instead.';
    });
  });

  $('#year').textContent = new Date().getFullYear();
})();
