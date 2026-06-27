---
name: brand-guidelines
description: Apply when writing copy, generating UI, or making styling decisions — enforces the client's brand identity, tone, colours, and typography
---

# Brand Guidelines — J & H Rural Earthmoving

Apply these guidelines whenever writing copy, choosing colours, selecting fonts, or designing UI components for this client.

---

## Business Overview

- **Business name:** J & H Rural Earthmoving
- **Industry / trade:** Rural and civil earthmoving / earthworks contracting
- **Location:** Ben Lomond, NSW — servicing the New England Region and Northern NSW
- **Contact:** Phone 0474 709 600 · harrylockyer03@icloud.com · ABN 30 674 319 263
- **Hours:** 24/7 (emergency earthmoving available at all times)
- **Target audience:** Rural landowners, farmers, graziers, civil contractors, and property developers across Northern NSW — people who work the land or need practical, heavy earthworks done without fuss
- **Unique selling points:**
    - Family-owned with deep agricultural roots — they understand farm and land requirements first-hand
    - 24/7 availability including emergency earthmoving response
    - Modern GPS-equipped fleet (D6 dozer with 2D/3D Trimble GPS)
    - Competitive rates, reliable service, no job too big or too small
    - Broad-acre farm experience plus civil construction capability

---

## Tone of Voice

- **Overall tone:** Direct, plain-spoken, no-nonsense — confident rural Australian
- **Do:**
    - Speak to practical outcomes (land productivity, water management, access, productivity)
    - Use natural farming/land terminology (broad-acre, contour banks, desilting, pasture)
    - Be factual and confident — no hedging
    - Highlight reliability and 24/7 availability when relevant
    - Speak peer-to-peer: landowner to landowner, not city contractor to client
    - Keep sentences short. Strip fluff.
- **Don't:**
    - Use corporate or marketing jargon ("solutions", "synergies", "leveraging")
    - Make vague or unverifiable claims ("the best in the business")
    - Sound like a city contractor — avoid generic safety/compliance language as the lead message
    - Use passive voice or wishy-washy language
    - Overuse exclamation marks

**Example of good copy:** "We don't just move dirt. We understand drainage, soil types, water flow, and farm productivity."

**Example of bad copy:** "Our team of experienced professionals delivers cutting-edge earthmoving solutions tailored to your unique needs."

---

## Colours

| Token name           | Hex       | SCSS variable       | Usage                                                   |
| -------------------- | --------- | ------------------- | ------------------------------------------------------- |
| Primary              | `#02f302` | `$primary`          | CTAs, buttons, glows, borders on dark backgrounds       |
| Primary (accessible) | `#1a7a1a` | `$primary-on-light` | Green text and icons on light/cream backgrounds         |
| Primary Hover        | `#00d400` | `$primary-hover`    | Button hover state                                      |
| Primary Foreground   | `#0a0a0a` | `$primary-fg`       | Dark text on green buttons                              |
| Accent               | `#f59e0b` | `$accent`           | Secondary warm accent (reserved for future use)         |
| Background           | `#f7f4ef` | `$bg`               | Main page background (warm cream)                       |
| Surface              | `#ffffff` | `$surface`          | Card and panel backgrounds                              |
| Text                 | `#111111` | `$text`             | Primary body text                                       |
| Text Muted           | `#4b5563` | `$text-muted`       | Secondary text, labels, descriptions                    |
| Text Light           | `#9ca3af` | `$text-light`       | Placeholder text only — do not use for readable content |
| Footer Background    | `#111111` | `var(--footer-bg)`  | Dark footer section                                     |

**Critical contrast rule:** Never use `$primary` (#02f302) as text colour on light backgrounds (`$bg` or `$surface`) — the contrast ratio is ~1.12:1 and fails WCAG AA. Always use `$primary-on-light` (#1a7a1a) for any green text on light backgrounds. `$primary` is for decorative elements (glows, borders, dots) and text on dark backgrounds (footer, dark overlays) where it passes AAA.

---

## Typography

- **Heading font:** Oswald (weights 400, 500, 600, 700) — industrial, condensed, uppercase
- **Body font:** Source Sans 3 (weights 300, 400, 500, 600) — clean, readable, approachable
- **Font source:** Google Fonts — preconnect and `<link rel="stylesheet">` already in `root.tsx`
- **Heading convention:** All section headings (`h2`, `h3`) use `text-transform: uppercase` and Oswald
- **Letter spacing:** Headings use `-0.01em` to `0.04em`; labels use `0.08em` to `0.22em`

---

## Design Language

- **Border radius:** Sharp industrial corners — `$radius: 2px`, `$radius-lg: 4px`, `$radius-xl: 6px`. Pills use `$radius-full: 9999px`. Do not introduce softer radii.
- **Glow effects:** Key green accents use `box-shadow: 0 0 8–12px rgba($primary, 0.4–0.6)` to reinforce the hi-vis identity
- **Section dividers:** Subtle horizontal green gradient stripe (`topStripe` pattern) — `height: 2px`, opacity 0.25
- **Hero:** Dark photo background with layered dark overlay. Content anchored to the bottom. Neon green accent line at top.
- **Footer:** Near-black (`#111111`) — the only truly dark section. All other sections use the cream/white light palette.
- **Section rhythm:** `@include section-padding` (5rem mobile / 7rem desktop vertical) + `@include container` (1200px max-width). Every section follows this pattern for visual consistency.

---

## Logo

- **Square logo:** `public/images/logo.png` — used in footer (80px × 80px display)
- **Horizontal logo:** `public/images/logo-horizontal.png` — used in header nav
- **Favicon:** `public/images/favicon.svg`
- **Logo colour:** Neon green (`#02f302`) on dark/transparent backgrounds
- **Header usage:** Horizontal logo on the transparent/blurred header nav
- **Footer usage:** Square logo, opacity 0.9, on the dark `#111111` footer background
- **Do not:** Place the logo on the cream `$bg` background without a contrasting container — the green logo on cream has poor contrast

---

## Imagery

- **Style:** Real job-site photography only — actual machines operating on real jobs in the New England region. No stock imagery.
- **Hero image:** `public/images/hero-background.png` — landscape scene showing earthmoving in the field
- **Equipment photos:** Organised by machine category in `public/images/` subdirectories: `dozer/`, `excavator/`, `trucks/`, `moxy/`, `road-works/`, `water-systems/`
- **About photo:** `public/images/about-us.jpg` — team/site photo
- **Alt text convention:** Describe the machine, job type, and context — e.g. `"D6 dozer performing contour banking on a rural property in New England NSW"`. Never `"image of dozer"` or file name references.
- **Videos:** Some equipment categories include `.mp4` videos (excavator, roadworks, water systems) — render as muted autoplay loops in carousels

---

## Service Areas

Armidale · Ben Lomond · Delungra · Guyra · New England Region · North West NSW · Northern NSW · Tamworth · Uralla

These names should appear consistently in copy and SEO metadata. Prefer "New England Region" as the primary geographic identifier for broad references.

---

## Services Offered

1. Rural Earthworks — land levelling, contour banks, drainage, pasture development
2. Civil Construction — subdivisions, commercial sites, infrastructure
3. Dam Construction & Repair — compaction techniques, desilting
4. Land Clearing — trees, scrub, stumps for farming and development
5. Road Construction — farm roads, grading, all-weather access
6. Emergency Response — 24/7 rapid mobilisation for flood/erosion events

---

## Community Sponsorships

The business sponsors local Guyra community organisations: Guyra Junior Rugby League (Guyra Spuds), Guyra Senior Rugby League, Dolly's Dream Awareness, Top of the Range, Guyra Show Society, Guyra Show Shearing, Guyra Cattle Judging, Guyra Rodeo. Reference these when writing community/trust copy.
