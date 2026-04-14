# Portfolio — MVP Roadmap

> This roadmap is a living document. Update it as scope clarifies.

## Goal

A polished, nature-themed developer portfolio that showcases work through smooth scroll animations and an immersive forest-inspired design. MVP delivers a complete portfolio experience with hero section, project showcase, skills display, and contact form.

---

## M1 — Foundation & Design System <a name="m1"></a>

### In Progress <a name="m1-doing"></a>

### To Do <a name="m1-todo"></a>

- [ ] `1DS.4b` Create layout component stubs (`Nav.tsx`, `Footer.tsx`)
- [ ] `1DS.4c` Create section component stubs (`Hero.tsx`, `About.tsx`, `Projects.tsx`, `Skills.tsx`, `Contact.tsx`)

### Blocked <a name="m1-blocked"></a>

### Completed <a name="m1-done"></a>

- [x] `1DS.1` Set up React Router v7 with TypeScript strict mode
- [x] `1DS.2` Configure Tailwind v4 with custom CSS variables (forest colour palette)
- [x] `1DS.3` Implement typography system (Inter + JetBrains Mono via `@theme`)
- [x] `1DS.4a` Create UI component structure (`Button`, `Card`, `Badge`, `SectionWrapper`)
- [x] `1DS.5` Set up Framer Motion with reduced motion support (`useReducedMotion`)

---

## M2 — Core Sections & Navigation <a name="m2"></a>

### In Progress <a name="m2-doing"></a>

### To Do <a name="m2-todo"></a>

- [ ] `2SC.1` Build Hero section — name, tagline, CTAs
- [ ] `2SC.2` Create About section — short story, values, photo placeholder
- [ ] `2SC.3` Implement Projects section — card grid using `Card` + `Badge`
- [ ] `2SC.4` Add Skills section — tech stack display
- [ ] `2SC.5` Build Contact section — form with Zod validation + Resend action
- [ ] `2NA.1` Create sticky Nav with scroll-driven background transition
- [ ] `2NA.2` Assemble home route — wire all sections, `BackdropAnimator`, `useSectionBackground`

### Blocked <a name="m2-blocked"></a>

### Completed <a name="m2-done"></a>

- [x] `2NA.3` Scroll-driven background colour transitions (`useSectionBackground` + `BackdropAnimator`)

---

## M3 — Content & Polish <a name="m3"></a>

### In Progress <a name="m3-doing"></a>

### To Do <a name="m3-todo"></a>

- [ ] `3CP.2` Populate real project and skills data in TypeScript content files
- [ ] `3CP.6` Optimise images and assets

### Blocked <a name="m3-blocked"></a>

- [ ] `3CP.1` Add project detail pages (`/projects/:slug`) — blocked on `2SC.3`
- [ ] `3CP.3` Verify entrance animations on all sections (via `SectionWrapper`) — blocked on M2 sections
- [ ] `3CP.4` Add mobile-responsive hamburger navigation — blocked on `2NA.1`
- [ ] `3CP.5` Configure contact form email delivery (Resend) — blocked on `2SC.5`

### Completed <a name="m3-done"></a>

---

## M4 — Launch Ready <a name="m4"></a>

### In Progress <a name="m4-doing"></a>

### To Do <a name="m4-todo"></a>

- [ ] `4LR.1` Vercel deployment configuration
- [ ] `4LR.2` Environment variables setup (`.env` — `RESEND_API_KEY`, `CONTACT_TO_EMAIL`)
- [ ] `4LR.3` Performance optimisation and bundle analysis
- [ ] `4LR.4` Cross-browser testing
- [ ] `4LR.5` Accessibility audit (WCAG compliance)
- [ ] `4LR.6` SEO meta tags and social sharing

### Blocked <a name="m4-blocked"></a>

### Completed <a name="m4-done"></a>

---

## Out of Scope (for MVP)

- Blog/articles section
- Admin dashboard for content management
- Multi-language support
- Advanced analytics integration
- PWA features (offline, install)
- Advanced animations beyond scroll and entrance effects
- Third-party integrations beyond email
- A/B testing or personalisation features

---

## Progress Map <a name="map"></a>

```mermaid
graph LR
  subgraph M1["M1 — Foundation"]
    1DS.4b["1DS.4b\nLayout stubs"]:::open
    1DS.4c["1DS.4c\nSection stubs"]:::open
  end

  subgraph M2["M2 — Core Sections"]
    2SC.1["2SC.1\nHero"]:::open
    2SC.2["2SC.2\nAbout"]:::open
    2SC.3["2SC.3\nProjects"]:::open
    2SC.4["2SC.4\nSkills"]:::open
    2SC.5["2SC.5\nContact"]:::open
    2NA.1["2NA.1\nNav"]
    2NA.2["2NA.2\nWire home route"]
  end

  subgraph M3["M3 — Content & Polish"]
    3CP.1["3CP.1\nProject detail pages"]:::blocked
    3CP.2["3CP.2\nPopulate content"]:::open
    3CP.3["3CP.3\nEntrance animations"]:::blocked
    3CP.4["3CP.4\nHamburger nav"]:::blocked
    3CP.5["3CP.5\nResend email"]:::blocked
    3CP.6["3CP.6\nOptimise assets"]:::open
  end

  subgraph M4["M4 — Launch Ready"]
    4LR.1["4LR.1\nVercel deploy"]
    4LR.2["4LR.2\nEnv vars"]:::open
    4LR.3["4LR.3\nBundle analysis"]
    4LR.4["4LR.4\nCross-browser"]
    4LR.5["4LR.5\nAccessibility"]
    4LR.6["4LR.6\nSEO"]
  end

  1DS.4b --> 2NA.1
  1DS.4c --> 2SC.1 & 2SC.2 & 2SC.3 & 2SC.4 & 2SC.5
  2SC.1 & 2SC.2 & 2SC.3 & 2SC.4 & 2SC.5 & 2NA.1 --> 2NA.2
  2SC.3 --> 3CP.1
  2SC.5 --> 3CP.5
  2NA.1 --> 3CP.4
  2NA.2 --> 3CP.3
  3CP.1 & 3CP.2 & 3CP.3 & 3CP.4 & 3CP.5 & 3CP.6 --> 4LR.1
  4LR.1 --> 4LR.2 & 4LR.3 & 4LR.4 & 4LR.5 & 4LR.6

  classDef blocked fill:#f9f,stroke:#c0c,color:#000
  classDef open fill:#9f9,stroke:#0a0,color:#000
  classDef done fill:#ccc,stroke:#999,color:#555
```
