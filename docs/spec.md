# Portfolio — Design & Technical Spec

## Vision

Dark, organic, nature-grounded developer portfolio. Deep forest backgrounds, white typography, greens that shift subtly between sections like moving through a woodland at different depths. Stone/slate grays anchor the neutral elements. Nothing techy or neon — moss, fern, aged wood.

---

## Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | React 19 + React Router v7 | Framework mode, file-based routing |
| Language | TypeScript | Strict mode |
| Styling | Tailwind v4 | CSS vars for theming |
| Animation | Framer Motion | Scroll-driven bg transitions, entrance animations |
| Forms | React Router actions + Zod | Contact form validation |
| Email | Resend | Contact form delivery |
| Build | Vite (via RR7) | |
| Deploy | Vercel | Preview deploys per branch |

---

## Color Tokens

Define these in `app/app.css` as CSS custom properties.

```css
:root {
  /* Backgrounds */
  --color-bg-base:      #111a12;  /* Forest base — page default */
  --color-bg-surface:   #1a271b;  /* Cards, nav */
  --color-bg-raised:    #243526;  /* Hover states, tags */
  --color-bg-stone:     #2e3630;  /* Alt section bg (stone) */

  /* Section-specific backgrounds (scroll animation targets) */
  --color-section-hero:     #111a12;
  --color-section-about:    #0f1a10;
  --color-section-projects: #141f14;
  --color-section-skills:   #181f18;
  --color-section-contact:  #1a1f1a;

  /* Green accent ramp */
  --color-green-moss:   #3a6b3c;  /* Deep, hero accent */
  --color-green-fern:   #4e8c50;  /* Projects accent */
  --color-green-sage:   #6aaa6c;  /* Interactive, CTA buttons */
  --color-green-mist:   #a8d4a9;  /* Highlighted text, links */

  /* Stone / slate ramp */
  --color-stone-dark:   #2e3630;
  --color-stone-mid:    #4a5550;
  --color-stone-lichen: #8a9e8c;  /* Secondary labels */
  --color-stone-pale:   #c4d4c6;  /* Subtle dividers */

  /* Borders */
  --color-border:       #3d5c40;  /* Default border */
  --color-border-muted: #243526;  /* Subtle border */

  /* Typography */
  --color-text-primary:   #f0f5f0;  /* Headings, main body */
  --color-text-secondary: #a8bfaa;  /* Descriptions, body copy */
  --color-text-muted:     #6a8a6c;  /* Meta, timestamps, placeholders */
  --color-text-accent:    #a8d4a9;  /* Accented text, active links */
}
```

---

## Typography

```css
/* Font stack */
--font-sans: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;

/* Scale */
--text-xs:   0.75rem;   /* 12px — meta, labels */
--text-sm:   0.875rem;  /* 14px — captions */
--text-base: 1rem;      /* 16px — body */
--text-lg:   1.125rem;  /* 18px — lead text */
--text-xl:   1.25rem;   /* 20px — card titles */
--text-2xl:  1.5rem;    /* 24px — section subheads */
--text-4xl:  2.25rem;   /* 36px — section headings */
--text-6xl:  3.75rem;   /* 60px — hero name */
```

Weights: 400 (body), 500 (UI labels), 600 (headings). No 700+ — too heavy against dark bg.

---

## Spacing & Layout

```css
--max-width: 1100px;        /* Content max-width */
--section-padding: 7rem 0;  /* Vertical section breathing room */
--nav-height: 64px;
```

Horizontal padding: `px-6` (mobile) → `px-12` (tablet) → `px-24` (desktop).

---

## Section Map & Routing

### Routes

```
app/routes/
  _index.tsx          → / (home — all sections as scroll)
  projects.$slug.tsx  → /projects/:slug (individual project)
```

### Sections on home route

| # | Section | Bg token | Green accent | Purpose |
|---|---------|----------|--------------|---------|
| 01 | Hero | `--color-section-hero` | Moss `#3a6b3c` | Name, tagline, CTAs |
| 02 | About | `--color-section-about` | Pine (darker moss) | Short story, values, photo |
| 03 | Projects | `--color-section-projects` | Fern `#4e8c50` | Card grid, links to detail pages |
| 04 | Skills | `--color-section-skills` | Stone-green blend | Tech stack, tools |
| 05 | Contact | `--color-section-contact` | Sage `#6aaa6c` | Form + social links |

---

## Scroll Animation — Background Transition

Each section has a `data-section` attribute. An Intersection Observer watches all sections and fires when one crosses 40% viewport visibility. On trigger, the body background color transitions to that section's token.

```tsx
// app/hooks/useSectionBackground.ts
const SECTION_COLORS: Record<string, string> = {
  hero:     '#111a12',
  about:    '#0f1a10',
  projects: '#141f14',
  skills:   '#181f18',
  contact:  '#1a1f1a',
};
```

Implementation:
- Body has `transition: background-color 800ms ease-in-out`
- Framer Motion `animate` variant on a fixed full-screen backdrop div (z-index: -1) as the primary driver
- CSS transition as fallback
- Wrap everything in `@media (prefers-reduced-motion: no-preference)` — static bg for users who prefer it

---

## Component Architecture

```
app/
  routes/
    _index.tsx
    projects.$slug.tsx
  components/
    layout/
      Nav.tsx            ← sticky, bg transitions with scroll
      Footer.tsx
    sections/
      Hero.tsx
      About.tsx
      Projects.tsx
      Skills.tsx
      Contact.tsx
    ui/
      Button.tsx         ← variant: 'primary' | 'ghost' | 'outline'
      Card.tsx           ← project cards
      Badge.tsx          ← tech tags
      SectionWrapper.tsx ← handles data-section + entrance animation
    icons/
      index.tsx          ← thin SVG icon set
  content/
    projects.ts          ← typed project data array
    skills.ts            ← typed skills/stack data
  lib/
    actions.ts           ← contact form action (Resend)
    validations.ts       ← Zod schemas
  hooks/
    useSectionBackground.ts
    useReducedMotion.ts
  app.css                ← CSS tokens above
```

---

## Project Data Shape

```ts
// app/content/projects.ts
export interface Project {
  slug: string;
  title: string;
  tagline: string;           // one line, shown on card
  description: string;       // full, shown on detail page
  tags: string[];            // tech used
  url?: string;              // live URL
  repo?: string;             // GitHub URL
  image?: string;            // /public/projects/slug.jpg
  featured: boolean;         // show in top row
  year: number;
}
```

---

## Contact Form

- Fields: name, email, message
- Validation: Zod schema, server-side in RR7 action
- Delivery: Resend API (`resend.emails.send`)
- States: idle → submitting → success | error
- No third-party form library — native `useActionData` + `useNavigation`

```ts
// app/lib/validations.ts
export const contactSchema = z.object({
  name:    z.string().min(2).max(80),
  email:   z.string().email(),
  message: z.string().min(10).max(2000),
});
```

---

## Nav Behaviour

- Sticky, `position: fixed`, `top: 0`, full width
- Background: transparent on top of Hero → transitions to `--color-bg-surface` on scroll past ~80px
- Logo left, nav links right (Home, Projects, Contact)
- Mobile: hamburger → full-screen overlay menu
- Active link: `--color-text-accent` with a small underline dot indicator

---

## Animations — Framer Motion Conventions

```ts
// Standard entrance — used in SectionWrapper
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

// Stagger children (e.g. project cards)
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

// Page transition
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit:    { opacity: 0, transition: { duration: 0.2 } }
};
```

All animations wrapped in `useReducedMotion()` check — return static variants if `true`.

---

## Environment Variables

```bash
# .env
RESEND_API_KEY=re_xxxx
CONTACT_TO_EMAIL=you@yourdomain.com
```

---

## Key Decisions Log

| Decision | Choice | Reason |
|---|---|---|
| Routing | React Router v7 | No SSR needed, clean static export, simpler than Next.js for a portfolio |
| No Express | — | RR7 actions handle form server logic, Vercel functions if needed |
| No CMS | Typed TS files | Low content volume, version controlled, no extra infra |
| Email | Resend | Clean API, generous free tier, excellent DX |
| Animation | Framer Motion | Best-in-class for React, scroll + entrance patterns trivial |
| Fonts | Inter + JetBrains Mono | Clean, readable, free, widely cached |