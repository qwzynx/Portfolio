# Mahan Ghafarian — Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.2.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

The source for [mahanghafarian.com](https://mahanghafarian.com) — a single-page personal portfolio built with the Next.js App Router. It presents an introduction, skills, work experience, projects, and a working contact form, all inside a scroll-snapped, animated dark UI.

---

## Contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [Customizing content](#customizing-content)
- [`split-section-demo/`](#split-section-demo)
- [Contact](#contact)

---

## Features

- **Scroll-snapped single page** — Hero, Skills, Experience, Projects, and Contact are laid out as snap points (`app/page.tsx`, `app/globals.css`) for a focused, slide-like scroll experience.
- **Animated hero** — a JS-driven typewriter effect cycles through role titles ("Software Engineer.", "Security Enthusiast.", "Hardware Hacker.") next to an animated portrait (`app/components/hero.tsx`).
- **Floating section navbar** — a fixed side nav (bottom bar on mobile) tracks scroll position with a conic-gradient progress ring, plus quick links to Experience, Projects, and Contact (`app/components/navbar.tsx`).
- **Skills grid** — a pyramid-style layout of skill badges (Arch Linux, Python, Java, MATLAB, Supabase, React, JavaScript, HTML, CSS, Next.js) with staggered entrance animations (`app/components/skills.tsx`).
- **Experience timeline with detail modal** — clicking an experience card opens an animated modal with an overview, key contributions, and a technology list (`app/components/experience.tsx`).
- **Project showcase** — a responsive card grid with per-project GitHub/live-demo links, tech pills, and a gradient placeholder for projects without a screenshot yet (`app/components/projects.tsx`).
- **Working contact form** — submits name/email/message directly to an inbox via [FormSubmit](https://formsubmit.co/), with pending/success states, alongside a direct email link (`app/components/contact.tsx`).
- **SEO baked in** — per-page metadata, OpenGraph/Twitter cards, a JSON-LD `Person` schema, plus generated `robots.txt` and `sitemap.xml` routes (`app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`).
- **Glassmorphism dark theme** — custom gradients, blurred glass panels, and glow effects defined in `app/globals.css`, built entirely with Tailwind CSS 4.

---

## Tech stack

| Category | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI library | [React 19](https://react.dev/) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/) |
| Form backend | [FormSubmit](https://formsubmit.co/) (no custom backend/API routes) |
| Linting | [ESLint](https://eslint.org/) (`eslint-config-next`) |
| Deployment | [Vercel](https://vercel.com/) |

---

## Getting started

### Prerequisites

- Node.js 20.x or newer
- npm (or pnpm/yarn, adjusting commands accordingly)

### Installation

```bash
git clone https://github.com/qwzynx/Portfolio.git
cd Portfolio
npm install
```

### Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads as you edit files under `app/`.

---

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build (run `build` first) |
| `npm run lint` | Run ESLint over the project |

---

## Project structure

```
├── app/
│   ├── components/
│   │   ├── hero.tsx           # Landing section: intro, typewriter, portrait
│   │   ├── navbar.tsx         # Fixed side/bottom nav with scroll progress ring
│   │   ├── main-content.tsx   # Wraps Skills/Experience/Projects/Contact, drives the floating section title
│   │   ├── skills.tsx         # Pyramid grid of skill badges
│   │   ├── experience.tsx     # Experience cards + detail modal
│   │   ├── projects.tsx       # Project grid with GitHub/live links
│   │   ├── contact.tsx        # Contact form (FormSubmit) + direct email
│   │   ├── footer.tsx         # Footer with social links
│   │   └── glitch-text.tsx    # Glitch-style text effect used in the floating section title
│   ├── globals.css            # Tailwind entrypoint, theme tokens, background effects
│   ├── layout.tsx             # Root layout, fonts, metadata, JSON-LD schema
│   ├── page.tsx                # Assembles Hero / MainContent / Footer into the snap-scroll page
│   ├── robots.ts               # Generates robots.txt
│   └── sitemap.ts              # Generates sitemap.xml
├── public/
│   ├── portrait.jpg            # Hero portrait
│   ├── Mahan_Ghafarian_Logo.png
│   └── projects/               # Drop project screenshots here (see its README)
├── split-section-demo/         # Standalone static HTML/CSS layout experiment (see below)
├── package.json
└── tsconfig.json
```

---

## Customizing content

Section content lives directly in the component files rather than a CMS or config file:

- **Projects** — edit the `projects` array in `app/components/projects.tsx`. To add a screenshot, drop an image into `public/projects/` and set that project's `image` field (see `public/projects/README.md` for suggested filenames and sizing).
- **Experience** — edit the `experiences` array in `app/components/experience.tsx`.
- **Skills** — edit the `skills` array in `app/components/skills.tsx`.
- **Metadata / SEO** — update the site URL, titles, descriptions, and JSON-LD in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts`.
- **Contact form destination** — the form posts to a FormSubmit endpoint tied to an email address in `app/components/contact.tsx`.

---

## `split-section-demo/`

A small, self-contained HTML/CSS demo (`index.html` + `style.css`) that lives outside the Next.js app and isn't wired into it. It's a scratch experiment for a responsive two-column split layout (CSS Grid, staggered `@keyframes` reveal, single-column collapse below 768px). Open `split-section-demo/index.html` directly in a browser to view it — no build step required. See `split-section-demo/README.md` for details.

---

## Contact

- **Website:** [mahanghafarian.com](https://mahanghafarian.com)
- **LinkedIn:** [Mahan Ghafarian](https://linkedin.com/in/mahan-ghafarian-b02ba0298/)
- **GitHub:** [@qwzynx](https://github.com/qwzynx)
- **Instagram:** [@qwzynx](https://www.instagram.com/qwzynx/)
