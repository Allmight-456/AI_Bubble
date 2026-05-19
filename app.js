// app.js — Reads CONTENT and renders each section into its <section> shell.
// Vanilla ES module; no dependencies.

import { CONTENT } from './content.js';

const $ = (sel, root = document) => root.querySelector(sel);

function setMeta() {
  document.title = CONTENT.meta.title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', CONTENT.meta.description);
}

const renderers = {
  hero: (el) => {
    el.innerHTML = '';
    el.dataset.placeholder = 'hero';
  },
  'the-pattern':       (el) => { el.innerHTML = ''; el.dataset.placeholder = 'the-pattern'; },
  'four-bubbles':      (el) => { el.innerHTML = ''; el.dataset.placeholder = 'four-bubbles'; },
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
