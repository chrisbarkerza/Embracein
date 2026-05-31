# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EmbraceIN is a static HTML website for a somatic wellness practice in Beverley, Sandton, Johannesburg. The practitioner is Samantha-Lee Barker. The site's purpose is to build trust and convert it into bookings or enquiries.

There is no build step, no bundler, and no dev server — open any `.html` file directly in a browser or serve the directory with any static file server (e.g. `npx serve .`).

## Pages

| File | Nav label |
|---|---|
| `index.html` | Home |
| `about.html` | Our Presence |
| `services.html` | Somatic Offerings |
| `testimonials.html` | Shared Stories |
| `faq.html` | Questions |

## Architecture

**Styling:** Tailwind CSS v4 loaded via CDN (`https://unpkg.com/@tailwindcss/browser@4`). The custom design tokens are declared in a `<style type="text/tailwindcss">` block inside each page's `<head>`. There is no `tailwind.config.js`. One shared stylesheet, [css/site.css](css/site.css), handles the fixed background logo watermark.

**Design tokens** (defined per-page in the `@theme` block):
- `earth-clay` (#9C5B42) — terracotta, primary accent
- `earth-dark` (#2D2421) — ink, body text
- `earth-linen` (#FDFBF8) — page background
- `earth-light` (#F1ECE6) — secondary background
- `clay-muted` / `plum-muted` (#7A665A) — muted text
- `gold-accent` (#C5A170) — warm gold highlights

**Icons:** Lucide Icons via CDN (`https://unpkg.com/lucide@latest`). Icons are declared as `<i data-lucide="icon-name">` elements and activated by `lucide.createIcons()` called in [js/main.js](js/main.js).

**Shared JS:** [js/main.js](js/main.js) is included on every page. It handles:
1. Background logo watermark injection (SVG from `images/logo.svg`)
2. Header scroll state (transparent → frosted at scroll Y > 50px)
3. Back-to-top button visibility (appears at scroll Y > 300px)
4. Mobile nav drawer toggle

**Shared HTML structure:** Every page follows the same shell: decorative top gradient bar → fixed header with `id="app_header"` → `<main>` → footer. The active nav link has `text-earth-clay` and an underline indicator; inactive links use `text-earth-dark/70`.

**Images:** Served from `images/`. The logo is `images/logo.svg`. The `scripts/` directory contains one-off Node.js scripts (using `jimp`/`potrace`) for tracing the PNG logo to SVG variants — these are not part of the site, just tools.

## Brand & Design Constraints

From [Content/PRODUCT.md](Content/PRODUCT.md):
- **The practitioner is the product.** Sam's presence should be palpable on every page.
- **Avoid:** sage green palettes, generic stock photos, spa/clinic sterility, busy spiritual chaos.
- **Embody:** weighted, textured, sensory — not airy or abstract.
- WCAG AA accessibility minimum throughout. Respect `prefers-reduced-motion`.

## Contact Details (used in CTAs)

- Email: `bookings@embracein.co.za`
- Phone: `+27 82 555 0291`
