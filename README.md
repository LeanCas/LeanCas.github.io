# HOTY. — Shopify Development Studio

Production website for [hoty.com.ar](https://hoty.com.ar).

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4 + Motion**, exported as a fully static site and deployed to **GitHub Pages** through GitHub Actions.

## Stack

| Layer      | Choice                                                            |
| ---------- | ----------------------------------------------------------------- |
| Framework  | Next.js 16, App Router, `output: "export"` (no server at runtime) |
| Language   | TypeScript (strict)                                               |
| Styling    | Tailwind CSS v4 with design tokens in `src/app/globals.css`       |
| Motion     | `motion/react` (LazyMotion) + CSS reveals via IntersectionObserver |
| Icons      | lucide-react                                                      |
| Type       | Geist + Geist Mono (self-hosted through `next/font`, OFL)         |
| Forms      | Formspree (static POST, no API routes)                            |

## Scripts

```bash
npm ci             # install
npm run dev        # local dev server
npm run lint       # ESLint (next/core-web-vitals + typescript)
npm run typecheck  # next typegen && tsc --noEmit
npm run build      # static export to /out
npm run preview    # serve /out locally
```

## Project structure

```
public/
  CNAME            # hoty.com.ar — do not change
  brand/           # logo system: SVG + PNG, favicon, social avatar, OG image
  projects/        # portfolio images (AVIF + WebP, 800w / 1600w)
  generated/       # reserved for generated artwork committed to the repo
  html/index.html  # redirect for the legacy /html/index.html URL
src/
  app/             # layout, page, metadata, sitemap.ts, robots.ts, not-found
  sections/        # page sections (hero, work, services, about, process, …)
  components/      # Logo, ButtonLink, SectionIntro, Marquee, ProjectPicture
  animations/      # MotionProvider, RevealObserver
  data/            # site/contact data, projects, services, FAQ, process
  lib/             # helpers (cn, brand paths, style)
  types/
scripts/
  brand-geometry.py  # generator for the wordmark/symbol geometry
```

## Editing content

All copy lives in `src/data/`:

- `site.ts` — contact data, Formspree endpoint, Meta Pixel ID, navigation.
- `projects.ts` — portfolio. Only add real projects; images go in `public/projects/<slug>-{800,1600}.{avif,webp}`.
- `content.ts` — principles, process, Shopify ecosystem, tech stack, **testimonials** (real ones only — the section hides itself when the array is empty) and FAQ.
- `services.ts` — the seven services.

No metrics, client results or reviews are shown unless they are real and confirmed.

## Brand

- Wordmark **HOTY.** — custom geometric lettering; the **O** is sliced by a diagonal transversal cut and the trailing **period** is a green square.
- Symbol — the sliced O + green square, used for favicon, avatar and small sizes.
- Palette — Carbon `#0E1110`, Paper `#FAFCFB`, White, Graphite `#5B625F`, Line `#E5E9E7`; accent Green `#16C784` (text-safe `#0A7A52`), Deep Green `#073B2A`, Mint `#EAFBF4`.
- Files — `public/brand/logo-dark.svg` (for light backgrounds), `logo-light.svg` (for dark backgrounds), `hoty-symbol*.svg`, `favicon.svg/.png`, `apple-touch-icon.png`, `social-avatar.png`, `og-brand.png`, `brand-mark-square.*`.

## Deployment

`.github/workflows/deploy.yml` runs on every push to `main` (and manually via *workflow_dispatch*):
checkout → Node 22 → `npm ci` → lint → typecheck → build → validate `/out` (index, 404, CNAME, brand assets, contact data) → upload Pages artifact → deploy.

One-time repository setting: **Settings → Pages → Source: GitHub Actions**.
The custom domain comes from `public/CNAME`; DNS is unchanged.
