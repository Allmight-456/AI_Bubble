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

const renderers = {
  hero: renderHero,
  'the-pattern':  renderThePattern,
  'four-bubbles': renderFourBubbles,
  'todays-picture':    (el) => { el.innerHTML = ''; el.dataset.placeholder = 'todays-picture'; },
  'investor-mistakes': (el) => { el.innerHTML = ''; el.dataset.placeholder = 'investor-mistakes'; },
  'warning-signs':     (el) => { el.innerHTML = ''; el.dataset.placeholder = 'warning-signs'; },
  'what-to-do':        (el) => { el.innerHTML = ''; el.dataset.placeholder = 'what-to-do'; },
  sources:             (el) => { el.innerHTML = ''; el.dataset.placeholder = 'sources'; },
};

function renderAll() {
  setMeta();
  const heroEl = $('#hero');
  if (heroEl) renderers.hero(heroEl);
  CONTENT.sections.forEach((s) => {
    const el = document.getElementById(s.id);
    const fn = renderers[s.id];
    if (el && fn) fn(el);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderAll);
} else {
  renderAll();
}
