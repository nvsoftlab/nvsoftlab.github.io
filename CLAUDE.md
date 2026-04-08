# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NVSoftLab's GitHub Pages site - a React SPA that markets and showcases mobile apps (Dice Roll, Have You Ever, Exposed AI, Strange Truths). Deployed to GitHub Pages.

## Working Directory

All development happens inside `nvsoftlab-app/`. Run all commands from there.

```bash
cd nvsoftlab-app
```

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # ESLint check
npm run deploy    # Build + push dist/ to GitHub Pages
```

No test suite exists in this project.

## Architecture

```
nvsoftlab.github.io/
├── index.html              # Static root landing page (separate from React app)
├── assets/images/          # App icons used by root landing page
└── nvsoftlab-app/          # React application
    ├── src/
    │   ├── App.jsx         # Router setup - defines all routes
    │   ├── Layout.jsx      # Shared navbar + footer wrapper
    │   ├── pages/          # One file per route
    │   ├── components/ui/  # Reusable UI primitives (Button, Badge, Card)
    │   ├── hooks/          # useUTMTracking - captures UTM params → GTM
    │   └── utils/index.js  # Route URL helpers
    └── public/404.html     # SPA routing redirect for GitHub Pages
```

**Routing**: React Router DOM. Routes defined in `App.jsx`. All routes are wrapped in `<Layout>`.

**Styling**: Tailwind CSS (utility classes only). Custom font: Inter. No CSS modules - component styles live inline as Tailwind classes.

**Analytics**: Google Tag Manager (`GTM-WBJFJT34`) via `react-gtm-module`. UTM parameters are captured by `useUTMTracking` and pushed to GTM data layer.

**GitHub Pages quirks**:

- Vite `base` is `/nvsoftlab.github.io/` in production, `/` in dev (see `vite.config.js`).
- `public/404.html` redirects unknown paths back to the SPA for client-side routing.
- `main.jsx` includes a redirect handler that reads the encoded path from the 404 redirect and restores it.
- Deploy with `npm run deploy` (uses `gh-pages` to push `dist/` to the repo).
