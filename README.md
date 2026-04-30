# Ramey & Hiba Wedding Website

The website lives at **https://rameyandhiba.com**.

It's built with [Astro](https://astro.build) and auto-deploys to GitHub Pages every time changes are pushed to the `main` branch.

---

## Editing the site

You don't need to know much about coding to make small changes. The most common edits are below.

### Change text on a page

Open the file for the page you want to edit:

| Page | File |
|---|---|
| Home | `src/pages/index.astro` |
| Travel Information | `src/pages/travel.astro` |

Edit the text between the HTML tags (the bits in `<p>...</p>`, `<h2>...</h2>`, etc.). Save the file and either preview locally (see below) or commit & push to publish.

### Change colors or fonts

All colors and fonts are defined at the top of `src/styles/global.css` in the `:root { ... }` block. Change a value there and the entire site updates.

If you swap a font, also update the Google Fonts link in `src/layouts/BaseLayout.astro` so the new font actually loads.

### Add the Things to Do or Q + A pages back

1. In `src/components/SiteHeader.astro`, uncomment the lines for the page in the `navLinks` array.
2. Create a matching file in `src/pages/` (e.g. `things-to-do.astro` or `qa.astro`). Copy `src/pages/travel.astro` as a starting template.

### Set up a custom domain

1. Buy the domain (e.g. from Namecheap, Google Domains, etc.).
2. In the GitHub repo, go to **Settings → Pages** and add the domain under "Custom domain".
3. In your domain registrar's DNS settings, add the records GitHub shows you (CNAME or A records).
4. Update `astro.config.mjs`: change `site` to `'https://your-domain.com'` and `base` to `'/'`.
5. Commit and push.

---

## Working locally

You'll need [Node.js 18+](https://nodejs.org).

```bash
npm install      # one-time, after you pull the project
npm run dev      # starts a local preview at http://localhost:4321
npm run build    # builds the static site into ./dist
```

While `npm run dev` is running, the page reloads automatically when you save a file.

---

## Project layout

```
src/
├── layouts/BaseLayout.astro       Shared page shell (head, header, footer)
├── components/
│   ├── SiteHeader.astro           Title + tagline + nav
│   ├── SiteFooter.astro           "R&H · 5.7.2026" footer
│   └── DateLocationSplit.astro    "MAY 7 | RABAT MOROCCO" block
├── pages/
│   ├── index.astro                Home page
│   └── travel.astro               Travel Information page
└── styles/global.css              All design tokens + base styles

public/                            Files served as-is (favicon, etc.)
content/                           Original mockups and source content
.github/workflows/deploy.yml       Auto-deploy to GitHub Pages
```
