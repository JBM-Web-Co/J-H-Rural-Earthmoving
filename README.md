# Landing Page Template

JBM Web Co reusable landing page template. Built with React Router v7, TypeScript, SCSS Modules, and deployed on Vercel.

## Quick Start

```bash
npm install
npm run dev
```

## Repo Structure

```text
/
├── api/                  # Vercel serverless function handlers
│   └── _src/             # Backend source (not exposed as routes)
│       ├── emails/       # React Email templates (.tsx + compiled .js)
│       └── utils/        # HttpError, sendEmail, logger
├── public/               # Static assets — logo, hero image, sitemap, robots.txt
├── scripts/              # Build scripts (e.g. buildEmails)
└── src/
    ├── pages/            # Page-level components (each exports a MetaFunction)
    ├── components/       # Reusable UI primitives
    ├── styles/           # Global SCSS, design tokens, breakpoint mixins
    ├── data.ts           # All client content — name, contact, services, areas, etc.
    ├── root.tsx          # HTML shell, layout, global fonts and analytics
    ├── routes.ts         # Route definitions
    └── hooks.ts          # Shared hooks
```

## Tech Stack

- [React Router v7](https://reactrouter.com) — framework mode, SSG via Vercel
- [Vite 7](https://vite.dev) — build tool
- SCSS Modules — component-scoped styles
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Resend](https://resend.com) — transactional email
- [Vercel Analytics](https://vercel.com/analytics) — usage tracking

## New Client Checklist

- [ ] Fill in `src/data.ts` with all business details
- [ ] Add clients brand guidelines to `.claude/skills/brand-guidelines/SKILL.md`
- [ ] Update `public/sitemap.xml` and `public/robots.txt` with the client's domain and URL structure
- [ ] Add required environment variables in Vercel then run `vercel pull`
- [ ] Set the canonical URL and OG image URL in the page's `MetaFunction`
- [ ] Add vercels project ID to the repo enviroment variable in github as `VERCEL_PROJECT_ID`
- [ ] Turn off automatic deployments in Vercel
- [ ] Deploy to Vercel and verify end-to-end
- [ ] Check all SEO meta tags and JSON-LD in production
