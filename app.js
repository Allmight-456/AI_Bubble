// app.js — Reads CONTENT and renders each section into its <section> shell.
// Vanilla ES module; no dependencies.

import { CONTENT } from './content.js';

const $ = (sel, root = document) => root.querySelector(sel);

function setMeta() {
  document.title = CONTENT.meta.title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', CONTENT.meta.description);
}

function escapeHTML(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function titleHTML(parts) {
  return parts
    .map((p) => {
      const text = escapeHTML(p.text);
      if (p.style === 'serif-italic')        return `<span class="t-serif-italic">${text}</span>`;
      if (p.style === 'sans-underline-pink') return `<span class="t-underline-pink">${text}</span>`;
      return `<span class="t-sans">${text}</span>`;
    })
    .join('');
}

const FALLING_CANDLE_SVG = `
  <svg class="hero__candle" viewBox="0 0 240 160" aria-hidden="true" focusable="false">
    <g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="10,20 50,40 90,30 130,70 170,90 210,140" />
      <rect x="42"  y="32" width="16" height="22" fill="currentColor" stroke="none" opacity="0.85" />
      <rect x="82"  y="24" width="16" height="14" fill="currentColor" stroke="none" opacity="0.85" />
      <rect x="122" y="60" width="16" height="22" fill="currentColor" stroke="none" opacity="0.85" />
      <rect x="162" y="80" width="16" height="22" fill="currentColor" stroke="none" opacity="0.85" />
      <rect x="202" y="124" width="16" height="22" fill="currentColor" stroke="none" opacity="0.85" />
      <polyline points="195,135 215,145 210,128" />
    </g>
  </svg>
`;

function cypressSVG(side) {
  // Three layered cypress silhouettes per side; slight variation in heights.
  return `
    <svg class="hero__cypress hero__cypress--${side}" viewBox="0 0 320 280" preserveAspectRatio="xMidYMax meet" aria-hidden="true" focusable="false">
      <g fill="var(--oil-cypress)">
        <path d="M40 280 C32 220 38 160 50 110 C58 80 64 60 70 50 C76 60 82 80 90 110 C102 160 108 220 100 280 Z" opacity="0.92"/>
        <path d="M140 280 C130 210 138 140 152 90 C160 60 168 38 176 28 C184 38 192 60 200 90 C214 140 222 210 212 280 Z" opacity="0.88"/>
        <path d="M250 280 C242 230 248 180 258 140 C264 116 270 100 276 92 C282 100 288 116 294 140 C304 180 310 230 302 280 Z" opacity="0.82"/>
      </g>
    </svg>
  `;
}

function renderHero(el) {
  const { hero, sections } = CONTENT;
  el.classList.add('hero');
  el.innerHTML = `
    <div class="hero__art" aria-hidden="true">
      <div class="hero__sky"></div>
      <div class="hero__noise"></div>
      ${cypressSVG('left')}
      ${cypressSVG('right')}
    </div>

    <div class="hero__layout">
      <div class="hero__copy">
        <p class="hero__eyebrow">${escapeHTML(hero.eyebrow)}</p>
        <h1 class="hero__title" id="hero-title">${titleHTML(hero.titleParts)}</h1>
        <p class="hero__subtitle">
          Every bubble feels different at the peak. The <span class="t-serif-italic">pattern</span> isn't.
        </p>
        <div class="hero__candle-wrap" aria-hidden="true">${FALLING_CANDLE_SVG}</div>
      </div>

      <nav class="hero__index" aria-label="${escapeHTML(hero.indexLabel)}">
        <p class="hero__index-label">${escapeHTML(hero.indexLabel)}</p>
        <ol class="hero__index-list">
          ${sections
            .map(
              (s) => `
            <li class="hero__index-item">
              <a href="#${s.id}" class="hero__index-link">
                <span class="hero__index-name">${escapeHTML(s.label)}</span>
                <span class="hero__index-roman">${escapeHTML(s.roman)}</span>
              </a>
            </li>`
            )
            .join('')}
        </ol>
      </nav>
    </div>

    <nav class="hero__strip" aria-label="${escapeHTML(hero.indexLabel)}">
      ${sections
        .map(
          (s) => `
        <a class="hero__strip-link" href="#${s.id}" aria-label="${escapeHTML(s.label)}">
          <span aria-hidden="true">${escapeHTML(s.roman)}</span>
        </a>`
        )
        .join('')}
    </nav>
  `;
}

function renderThePattern(el) {
  const { thePattern, sections } = CONTENT;
  const meta = sections.find((s) => s.id === 'the-pattern');
  // Render lede with "fourth iteration" highlighted.
  const ledeHTML = escapeHTML(thePattern.lede).replace(
    'fourth iteration',
    '<mark class="pattern__highlight">fourth iteration</mark>'
  );

  el.innerHTML = `
    <div class="section__inner pattern">
      <header class="section__head">
        <p class="section__roman">${escapeHTML(meta.roman)}</p>
        <h2 class="section__title" id="the-pattern-title">${escapeHTML(meta.label)}</h2>
      </header>

      <div class="pattern__grid">
        <p class="pattern__lede">${ledeHTML}</p>
        <ul class="pattern__pillars">
          ${thePattern.pillars
            .map(
              (p) => `
            <li class="pillar ${p.k === '?' ? 'pillar--alarm' : ''}">
              <span class="pillar__k">${escapeHTML(p.k)}</span>
              <span class="pillar__v">${escapeHTML(p.v)}</span>
            </li>`
            )
            .join('')}
        </ul>
      </div>
    </div>
  `;
}

function renderFourBubbles(el) {
  const { fourBubbles, sections } = CONTENT;
  const meta = sections.find((s) => s.id === 'four-bubbles');
  const headers = fourBubbles.headers;
  const headerCells = headers
    .map((h, i) => {
      if (i === 0) return `<div class="bubbles__corner" aria-hidden="true"></div>`;
      const [name, range] = h.split('\n');
      const aiClass = i === headers.length - 1 ? ' bubbles__header--ai' : '';
      return `
        <div class="bubbles__header${aiClass}" role="columnheader">
          <p class="bubbles__name">${escapeHTML(name)}</p>
          <p class="bubbles__range">${escapeHTML(range)}</p>
        </div>`;
    })
    .join('');

  const rows = fourBubbles.rows
    .map((row, rIdx) => {
      const isPctRow = row.label === 'What happened next?';
      const cells = row.cells
        .map((c, cIdx) => {
          const isAi = cIdx === row.cells.length - 1;
          let body = escapeHTML(c);
          if (isPctRow) {
            // Highlight ~78%, ~63%, ~57% on non-AI; "?" or numeric on AI not present.
            body = body.replace(/~(\d{2})%/g, '<span class="bubbles__pct">~$1%</span>');
          }
          return `<div class="bubbles__cell${isAi ? ' bubbles__cell--ai' : ''}" role="cell">${body}</div>`;
        })
        .join('');
      return `
        <div class="bubbles__row" role="row">
          <div class="bubbles__rowlabel" role="rowheader">${escapeHTML(row.label)}</div>
          ${cells}
        </div>`;
    })
    .join('');

  el.innerHTML = `
    <div class="section__inner">
      <header class="section__head">
        <p class="section__roman">${escapeHTML(meta.roman)}</p>
        <h2 class="section__title" id="four-bubbles-title">${escapeHTML(meta.label)}</h2>
      </header>

      <div class="bubbles" role="table" aria-label="Comparison of four asset bubbles">
        <div class="bubbles__row bubbles__row--head" role="row">
          ${headerCells}
        </div>
        ${rows}
      </div>
    </div>
  `;
}

const METRIC_ICONS = {
  chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 20h18"/><path d="M5 16l4-6 4 3 6-9"/></svg>`,
  chip:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="1"/><path d="M9 3v2M12 3v2M15 3v2M9 19v2M12 19v2M15 19v2M3 9h2M3 12h2M3 15h2M19 9h2M19 12h2M19 15h2"/></svg>`,
  pie:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v9h9"/><circle cx="12" cy="12" r="9"/></svg>`,
  dollar:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v18"/><path d="M16 7.5C16 6 14.5 5 12 5s-4 1.2-4 3 1.5 2.5 4 3 4 1.2 4 3-1.8 3-4 3-4-1-4-2.5"/></svg>`,
  cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 18a4 4 0 010-8 5 5 0 019.6-1.4A4 4 0 0117 18H7z"/></svg>`,
  people:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><path d="M14 20c0-2 2-3.5 4-3.5s4 1.5 4 3.5"/></svg>`,
};

function renderTodaysPicture(el) {
  const { todaysPicture, sections } = CONTENT;
  const meta = sections.find((s) => s.id === 'todays-picture');

  const metricCards = todaysPicture.metrics
    .map((m) => {
      const icon = METRIC_ICONS[m.icon] || '';
      return `
        <article class="metric">
          <div class="metric__icon" aria-hidden="true">${icon}</div>
          <p class="metric__label">${escapeHTML(m.label)}</p>
          <p class="metric__value" data-value="${escapeHTML(m.value)}">${escapeHTML(m.value)}</p>
          <p class="metric__context">${escapeHTML(m.context)}</p>
        </article>`;
    })
    .join('');

  el.innerHTML = `
    <div class="section__inner today">
      <header class="section__head today__head">
        <div>
          <p class="section__roman">${escapeHTML(meta.roman)}</p>
          <h2 class="section__title" id="todays-picture-title">${escapeHTML(todaysPicture.title)}</h2>
        </div>
        <p class="today__asof">${escapeHTML(todaysPicture.asOf)}</p>
      </header>

      <div class="metrics">${metricCards}</div>

      <aside class="callout" role="note">
        <p class="callout__lead">${escapeHTML(todaysPicture.callout.lead)}</p>
        <p class="callout__mid">${escapeHTML(todaysPicture.callout.mid)}</p>
        <p class="callout__kicker">${escapeHTML(todaysPicture.callout.kicker)}</p>
      </aside>
    </div>
  `;
}

function renderInvestorMistakes(el) {
  const { investorMistakes, sections } = CONTENT;
  const meta = sections.find((s) => s.id === 'investor-mistakes');
  const cards = investorMistakes
    .map(
      (m, i) => `
      <article class="mistake">
        <p class="mistake__num">MISTAKE ${String(i + 1).padStart(2, '0')}</p>
        <h3 class="mistake__title">${escapeHTML(m.title)}</h3>
        <p class="mistake__belief"><span class="mistake__tag">Belief:</span> ${escapeHTML(m.belief)}</p>
        <svg class="mistake__arrow" viewBox="0 0 32 16" aria-hidden="true" focusable="false">
          <path d="M2 8h26M22 2l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p class="mistake__reality"><span class="mistake__tag mistake__tag--strong">Reality:</span> ${escapeHTML(m.reality)}</p>
      </article>`
    )
    .join('');

  el.innerHTML = `
    <div class="section__inner">
      <header class="section__head">
        <p class="section__roman">${escapeHTML(meta.roman)}</p>
        <h2 class="section__title" id="investor-mistakes-title">${escapeHTML(meta.label)}</h2>
      </header>
      <div class="mistakes">${cards}</div>
    </div>
  `;
}

function renderWarningSigns(el) {
  const { warningSigns, sections } = CONTENT;
  const meta = sections.find((s) => s.id === 'warning-signs');
  const items = warningSigns
    .map(
      (w) => `
      <li class="sign">
        <svg class="sign__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 3 L22 20 L2 20 Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
          <path d="M12 10 V14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          <circle cx="12" cy="17" r="0.9" fill="currentColor"/>
        </svg>
        <p class="sign__title">${escapeHTML(w.title)}</p>
      </li>`
    )
    .join('');

  el.innerHTML = `
    <div class="section__inner">
      <header class="section__head">
        <p class="section__roman">${escapeHTML(meta.roman)}</p>
        <h2 class="section__title" id="warning-signs-title">${escapeHTML(meta.label)}</h2>
      </header>
      <ul class="signs">${items}</ul>
    </div>
  `;
}

function renderWhatToDo(el) {
  const { whatToDo, finalReminder, closingLine, sections } = CONTENT;
  const meta = sections.find((s) => s.id === 'what-to-do');

  const rows = whatToDo
    .map(
      (w) => `
      <li class="action">
        <span class="action__num">${escapeHTML(w.num)}</span>
        <div class="action__copy">
          <p class="action__title">${escapeHTML(w.title)}</p>
          <p class="action__body">${escapeHTML(w.body)}</p>
        </div>
      </li>`
    )
    .join('');

  el.innerHTML = `
    <div class="section__inner">
      <header class="section__head">
        <p class="section__roman">${escapeHTML(meta.roman)}</p>
        <h2 class="section__title" id="what-to-do-title">${escapeHTML(meta.label)}</h2>
      </header>

      <ol class="actions">${rows}</ol>

      <blockquote class="reminder">
        ${escapeHTML(finalReminder)}
      </blockquote>

      <div class="closing">
        <p class="closing__a">${escapeHTML(closingLine.a)}</p>
        <p class="closing__b">${escapeHTML(closingLine.b)}</p>
        <p class="closing__c"><span class="t-underline-pink">Optionality</span> tomorrow.</p>
      </div>
    </div>
  `;
}

const renderers = {
  hero: renderHero,
  'the-pattern':       renderThePattern,
  'four-bubbles':      renderFourBubbles,
  'todays-picture':    renderTodaysPicture,
  'investor-mistakes': renderInvestorMistakes,
  'warning-signs':     renderWarningSigns,
  'what-to-do':        renderWhatToDo,
  sources:             renderSources,
};

function renderSources(el) {
  const { sources: src, sections, meta } = CONTENT;
  const sectionMeta = sections.find((s) => s.id === 'sources');

  const refs = src.references
    .map((r) => {
      if (r.url) {
        return `<li class="ref"><a href="${escapeHTML(r.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(r.label)}</a></li>`;
      }
      return `<li class="ref">${escapeHTML(r.label)}</li>`;
    })
    .join('');

  el.innerHTML = `
    <div class="section__inner sources">
      <header class="section__head">
        <p class="section__roman">${escapeHTML(sectionMeta.roman)}</p>
        <h2 class="section__title" id="sources-title">${escapeHTML(sectionMeta.label)}</h2>
      </header>

      <p class="sources__methodology">${escapeHTML(src.methodology)}</p>

      <h3 class="sources__subhead">References</h3>
      <ul class="sources__refs">${refs}</ul>

      <p class="sources__disclaimer">${escapeHTML(src.disclaimer)}</p>
    </div>
  `;
}

function renderFooter() {
  const footer = document.querySelector('.site-footer');
  if (!footer) return;
  const { meta } = CONTENT;
  footer.innerHTML = `
    <div class="site-footer__inner">
      <span>© 2026</span>
      <span>Last updated ${escapeHTML(meta.lastUpdated)}</span>
      <span>This is a knowledge base, not investment advice.</span>
    </div>
  `;
}

// ---- Sticky mini-nav --------------------------------------------------

function renderMiniNav() {
  const wrap = document.querySelector('[data-mini-nav]');
  if (!wrap) return;
  const list = wrap.querySelector('.mini-nav__list');
  if (!list) return;
  list.innerHTML = CONTENT.sections
    .map(
      (s) => `
      <a class="mini-nav__link" href="#${s.id}" data-target="${s.id}" aria-label="${escapeHTML(s.label)}">
        <span aria-hidden="true">${escapeHTML(s.roman)}</span>
      </a>`
    )
    .join('');
}

function initMiniNav() {
  const wrap = document.querySelector('[data-mini-nav]');
  const heroEl = document.getElementById('hero');
  if (!wrap || !heroEl) return;

  // Show after the hero leaves the viewport.
  const heroObserver = new IntersectionObserver(
    ([entry]) => {
      const heroVisible = entry.isIntersecting;
      if (heroVisible) wrap.setAttribute('hidden', '');
      else wrap.removeAttribute('hidden');
    },
    { threshold: 0.05 }
  );
  heroObserver.observe(heroEl);

  // Track active section via observer.
  const links = wrap.querySelectorAll('.mini-nav__link');
  const stripLinks = document.querySelectorAll('.hero__strip-link');
  const byId = new Map();
  links.forEach((l) => byId.set(l.dataset.target, l));

  function setActive(id) {
    links.forEach((l) => {
      const isActive = l.dataset.target === id;
      if (isActive) l.setAttribute('aria-current', 'location');
      else l.removeAttribute('aria-current');
    });
    stripLinks.forEach((l) => {
      const href = l.getAttribute('href') || '';
      if (href === `#${id}`) l.setAttribute('aria-current', 'location');
      else l.removeAttribute('aria-current');
    });
  }

  const sectionEls = CONTENT.sections.map((s) => document.getElementById(s.id)).filter(Boolean);
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      // Pick the entry with the largest intersection ratio that is intersecting.
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    },
    { threshold: [0.25, 0.5, 0.75], rootMargin: '-20% 0px -50% 0px' }
  );
  sectionEls.forEach((s) => sectionObserver.observe(s));
}

// ---- Animations -------------------------------------------------------

function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

function animateNumber(el, finalText, durationMs = 800) {
  // Parse the first numeric token; preserve everything else as a template.
  const match = finalText.match(/(-?\d+(?:\.\d+)?)/);
  if (!match) {
    el.style.opacity = '0';
    requestAnimationFrame(() => {
      el.style.transition = `opacity ${durationMs}ms ease-out`;
      el.style.opacity = '1';
    });
    return;
  }
  const target = parseFloat(match[1]);
  const decimals = (match[1].split('.')[1] || '').length;
  const before = finalText.slice(0, match.index);
  const after  = finalText.slice(match.index + match[0].length);
  const start = performance.now();

  function tick(now) {
    const t = Math.min(1, (now - start) / durationMs);
    const v = target * easeOutCubic(t);
    el.textContent = `${before}${v.toFixed(decimals)}${after}`;
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = finalText;
  }
  el.textContent = `${before}0${after}`;
  requestAnimationFrame(tick);
}

function initMetricCounters() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const values = document.querySelectorAll('.metric__value');
  if (!values.length) return;
  if (reduceMotion || !('IntersectionObserver' in window)) return;

  const seen = new WeakSet();
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !seen.has(entry.target)) {
          seen.add(entry.target);
          const final = entry.target.dataset.value || entry.target.textContent;
          animateNumber(entry.target, final, 800);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  values.forEach((el) => io.observe(el));
}

function renderAll() {
  setMeta();
  const heroEl = $('#hero');
  if (heroEl) renderers.hero(heroEl);
  CONTENT.sections.forEach((s) => {
    const el = document.getElementById(s.id);
    const fn = renderers[s.id];
    if (el && fn) fn(el);
  });
  renderFooter();
  renderMiniNav();
  initMiniNav();
  initMetricCounters();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderAll);
} else {
  renderAll();
}
