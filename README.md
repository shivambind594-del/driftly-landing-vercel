# Driftly — SaaS Landing Page

A responsive landing page for a fictional focus-tracking SaaS product, built with React + Vite.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This outputs a `dist/` folder ready to deploy.

## Deploy to Vercel

1. Push this folder to a new GitHub repo.
2. Go to vercel.com → **New Project** → import that repo.
3. Vercel auto-detects Vite — leave the default build settings (`npm run build`, output `dist`) and click **Deploy**.

## Project structure

```
src/
  components/
    Navbar.jsx    — sticky nav with mobile hamburger menu
    Hero.jsx       — headline + abstract SVG focus graphic
    Features.jsx   — feature grid (one highlighted card)
    Pricing.jsx     — pricing table with monthly/yearly toggle
    Faq.jsx         — accordion (only one answer open at a time)
    Footer.jsx      — email signup form + footer links
  App.jsx
  main.jsx
  index.css        — design tokens (colors, type, spacing) + responsive rules
```

## Notes

- No component libraries used — plain React (hooks) + CSS, matching an
  HTML/CSS/JS/React skill set.
- Colors, fonts, and spacing are defined as CSS variables at the top of
  `src/index.css` — change those to re-theme the whole site.
- Fully responsive: the nav collapses to a hamburger menu and the grids
  stack to a single column under ~760px.
