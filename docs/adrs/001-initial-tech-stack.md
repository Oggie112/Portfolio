# ADR 001 — Initial Tech Stack

**Date:** 2026-04-14  
**Status:** Accepted

## Context

This is a personal portfolio site. The primary goals are: looks good, loads fast, easy to maintain, and doesn't require running infrastructure. The content is static (projects, skills, a contact form) so there's no real case for a database or a CMS. The main design challenge is the scroll-driven background animation — sections fade between different shades of forest green as you scroll — which pushes toward a React-based setup with a capable animation library.

## Decisions & Trade-offs

### React Router v7 over Next.js

Next.js would have been the obvious choice, but it's heavier than this project needs. There's no SSR requirement — the content doesn't change per-request, and SEO can be handled with static meta tags. React Router v7 in framework mode gives file-based routing and server actions (for the contact form) without the overhead. It also exports cleanly to static hosting.

The downside is a smaller ecosystem and less community documentation compared to Next.js. That's an acceptable trade for a project this size.

### No Express, no separate API layer

React Router v7 actions handle the contact form server-side. There's no need for a standalone Express server or a separate API. If something more complex is ever needed, Vercel functions cover it.

### No CMS — typed TypeScript files instead

Content volume is low: a handful of projects and a skills list. Pulling in a CMS (Sanity, Contentful, etc.) would add auth, webhooks, API keys, and a separate editing UI — none of which is worth the overhead here. Keeping content in `app/content/*.ts` means it's version-controlled, type-safe, and edited in the same place as the code. If the site grows significantly, this is the most likely decision to revisit.

### Tailwind v4 with CSS custom properties

Tailwind handles the utility styling. The forest colour palette and section-specific background colours are defined as CSS custom properties in `app/app.css`, which lets them be referenced both in Tailwind classes and in Framer Motion's `animate` prop. Tailwind v4's `@theme` block makes this integration cleaner than v3.

### Framer Motion for animation

The scroll-driven background transition is the centrepiece of the design. Framer Motion's `animate` prop handles smooth colour interpolation between section backgrounds, and its variant system makes entrance animations straightforward. The alternative would be CSS transitions alone, but getting smooth colour animation tied to scroll position in pure CSS is more fragile. Framer Motion also has solid `prefers-reduced-motion` support, which matters for accessibility.

The library is not small (~50kb gzipped), but given animation is a core feature rather than a nice-to-have, the weight is justified.

### Resend for email delivery

The contact form needs to send an email. Resend has a clean API, a generous free tier, and takes about ten minutes to set up. No meaningful trade-off here — it's the right tool for the job.

### Inter + JetBrains Mono

Inter is clean and highly legible at all weights against a dark background. JetBrains Mono is used for code snippets and any monospace UI elements. Both are free and widely cached via Google Fonts. No custom typefaces — the extra load time isn't worth it for a portfolio.

### npm as package manager

npm for simplicity and universal compatibility. No strong reason to reach for pnpm or bun on a project this small.

## Consequences

- No database, no CMS, no auth — nothing to run or maintain beyond the site itself
- Content updates require a code change and a redeploy (acceptable given the low frequency)
- Framer Motion adds bundle weight — worth monitoring if performance becomes a concern
- React Router v7 is less mature than Next.js; documentation gaps are possible
- Testing is deferred — the plan is to add it if and when the project grows
