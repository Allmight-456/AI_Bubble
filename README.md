# AI: A Quiet Warning

A static, single-page editorial site about AI stock valuations in May 2026 and the historical pattern of asset bubbles. Knowledge base, not investment advice.

## Run locally

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000>.

## Edit content

All copy lives in `content.js` as a single exported `CONTENT` object. Edit text there — no layout changes needed.

## Deploy

Drop the folder onto Netlify, Vercel, or GitHub Pages. No build step.

## Files

- `index.html` — single document, seven empty section shells, loads `app.js` as a module
- `styles.css` — design tokens + all layout
- `app.js` — reads `CONTENT`, renders each section
- `content.js` — site copy
- `assets/` — optional hero artwork (CSS-only fallback ships by default)
