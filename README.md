# MAW Portfolio

The portfolio of Muhammad Alif Wahyudi, built with Next.js App Router, React 19, Tailwind CSS, GSAP, Motion, OGL, and React Three Fiber.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). For a production check:

```bash
npm run lint
npm run build
npm start
```

## Architecture

- `app/` contains the server-rendered routes, metadata, sitemap, robots rules, manifest, and generated social images.
- `src/components/` contains the interactive portfolio sections and visual effects.
- `src/lib/portfolio-data.js` loads and normalizes project, competition, and certificate data on the server with hourly revalidation.
- `public/` contains the local images, videos, logo, and 3D texture.

The home page and `/projects` route are pre-rendered by Next.js. Remote portfolio data is fetched server-side so available project content is included in the initial HTML. If the remote feed is unavailable, the UI provides a useful GitHub fallback instead of failing the page.

## SEO

Route metadata is defined with the Next.js Metadata API. The site also includes canonical URLs, Open Graph and Twitter images, JSON-LD for the portfolio owner and projects, `robots.txt`, `sitemap.xml`, and a web app manifest.
