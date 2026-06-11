# J&H Rural Earthmoving

Single-page marketing site for J&H Rural Earthmoving. React Router v7 + TypeScript + SCSS Modules, deployed on Vercel with serverless API functions.

## Quick Start

```bash
npm install
npm run dev          # React Router dev server
```

For the contact form / API routes to work locally, use the Vercel dev server instead:

```bash
npm run vercel-dev   # requires the Vercel CLI (npm i -g vercel)
```

## Scripts

```bash
npm run dev          # Start the React Router dev server (--host)
npm run vercel-dev   # Run via Vercel CLI so api/ functions are served locally
npm run build        # typecheck → buildEmails → react-router build
npm run typecheck    # tsc on both the src/ and api/ tsconfigs
npm run lint         # ESLint
npm run style        # Prettier — auto-formats in place
npm run buildEmails  # Compile email TSX → JS via tsx/esbuild (runs as part of build)
```

CI runs Prettier, typecheck, and ESLint on every PR. Before pushing: `npm run typecheck && npm run lint && npm run style`.

## Repo Structure

```text
/
├── api/                      # Vercel serverless functions (each .ts = one endpoint)
│   ├── contact.ts            # POST — handles contact-form submissions
│   ├── ping.ts               # GET  — health check
│   └── _src/                 # Backend source (the _src prefix keeps it off the routes)
├── public/
│   ├── images/               # Logo, hero, project, and section media
│   ├── sitemap.xml
│   └── robots.txt
├── scripts/
│   └── buildEmails.ts        # Compiles email templates before build/deploy
└── src/
    ├── pages/home-page/       # The single page, split into section components
    │   ├── HomePage.tsx        # Composes all sections
    │   └── *.module.scss       # Co-located styles per section
    ├── components/             # Shared UI — Header, Footer, Button, FormField, Ticker
    ├── styles/                 # global.scss, _variables.scss (tokens), _breakpoints.scss
    ├── data.ts                 # Site content (business name, contact, services, sponsors…)
    ├── root.tsx                # HTML shell, layout, fonts, Vercel Analytics
    ├── routes.ts               # Route config (single index route → HomePage)
    ├── scrollReveal.ts         # Scroll-driven reveal animation helper
    └── entry.client.tsx        # Client hydration entry
```

## Tech Stack

- [React Router v7](https://reactrouter.com) — framework mode, SSG on Vercel
- [React 19](https://react.dev)
- [Vite 7](https://vite.dev) — build tool
- SCSS Modules — component-scoped styles, mobile-first design tokens
- [Anime.js v3](https://animejs.com) — animations (scroll reveal, hero, carousels)
- [Lucide React](https://lucide.dev) — icons
- [React Email](https://react.email) + [Resend](https://resend.com) — transactional email
- [Zod](https://zod.dev) — input validation at the API boundary
- [Vercel Analytics](https://vercel.com/analytics) — usage tracking
