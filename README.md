# Portfolio 2026

A personal portfolio for Muhammad Alif Wahyudi built with React and Vite. The site blends motion-heavy hero moments, scrolling marquees, and GSAP-powered microinteractions with a clean, dark UI that highlights projects, achievements, and a photography gallery.

## What is inside
- Landing experience with custom opening animation, sticky navbar, hero headline split-animations, and CTA buttons.
- About card with tilt interaction and stacked marquees, followed by a bold “I build modern & clean UI” statement.
- Tech Stack marquee rows showcasing tools (React, Tailwind, GSAP, Three.js, etc).
- Projects grid (home shows top 4, `/projects` lists all) that fetches live data via Axios and uses hover motion plus deep links to the hosted work.
- Achievements section combining competition cards and Swiper-based certification carousel.
- Photography gallery with scroll-pinned video playback and responsive grid fallback on mobile, plus Instagram call-to-action marquee.
- Click-spark cursor effect and consistent Sora variable typography across pages.

## Tech stack
- React 19 + Vite
- Tailwind CSS (utility-first styling)
- GSAP + @gsap/react for scroll/entrance motion
- React Router for routing (`/` home, `/projects` full projects page)
- Axios for remote JSON fetching
- Swiper and react-fast-marquee for carousels/marquees
- Motion (framer-motion compatible API) for project page transitions

## Getting started
1) Install dependencies
```bash
npm install
```
2) Run the dev server (default on http://localhost:5173)
```bash
npm run dev
```
3) Build for production
```bash
npm run build
```
4) Preview the production build locally
```bash
npm run preview
```
5) Lint the code
```bash
npm run lint
```

## Data sources
Projects, competitions, and certifications load from hosted JSON endpoints under `https://projects-sooty-chi.vercel.app`. Thumbnails are served from GitHub raw URLs. Make sure the client has internet access; otherwise those sections will show loading/error states. To self-host data, point the Axios calls in `src/components/Projects.jsx`, `src/components/ProjectsPage.jsx`, and `src/components/Pencapaian.jsx` to your own JSON sources or replace them with local assets.

## Project structure (high level)
- `src/App.jsx` – Router and page composition.
- `src/components/` – UI sections (Hero, About, Modern, Tech, Projects, Achievements, Gallery, Footer, etc) plus route-specific pages.
- `src/components/assets/` – Reusable UI primitives (tilted cards, click spark, profile card, etc).
- `public/` – Static assets, video, and images used across the site.

## Customization tips
- Update profile/social links in `Hero.jsx`, `Gallery.jsx`, and CTA buttons.
- Swap tech logos and gallery imagery in `public/img` and `public/gellery`.
- Adjust accent gradients and timings in GSAP timelines (`Hero.jsx`, `Modern.jsx`) to match your own brand feel.
