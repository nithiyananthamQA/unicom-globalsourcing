# UGS — Unicom Globalsourcing

Corporate website for **UNICOM GLOBALSOURCING PRIVATE LIMITED** — strategic sourcing &amp; supply chain partner based in Coimbatore, India.

Built with **React 18 + Vite 6 + Tailwind CSS 4 + React Router 7**.

---

## Local development

Requires Node.js **18.18 or newer** (see `.nvmrc`).

```bash
pnpm install
pnpm dev          # → http://localhost:5173
pnpm build        # outputs production site to ./dist
pnpm preview      # serves the built ./dist locally
```

---

## Project structure

```
src/
├─ main.tsx                  # entry: BrowserRouter + HelmetProvider
├─ app/
│  ├─ App.tsx                # route definitions (lazy-loaded inner pages)
│  ├─ Layout.tsx             # Header + <Outlet /> + Footer + scroll-to-top
│  ├─ pages/                 # one file per route (Home, About, Products, …)
│  └─ components/
│     ├─ Header.tsx, Footer.tsx, PageHero.tsx
│     ├─ Hero / Stats / Sustainability / Initiatives / Management / …
│     ├─ LazyImage.tsx       # IntersectionObserver-based image loading
│     ├─ LazyVideo.tsx       # IntersectionObserver-based video loading
│     └─ Seo.tsx             # per-page <title>/meta/OG/Twitter via Helmet
├─ assets/                   # logo PNGs (icon for mobile, full for desktop)
└─ styles/                   # global + theme + Tailwind imports

public/
├─ robots.txt                # search-engine policy
├─ sitemap.xml               # all 6 routes
├─ _redirects                # SPA fallback (Cloudflare Pages)
└─ _headers                  # cache + security headers (Cloudflare Pages)
```

---

## Deploying to Cloudflare Pages

1. Push this repo to GitHub / GitLab.
2. In the Cloudflare dashboard → **Workers &amp; Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select the repo and use these build settings:

   | Setting                | Value          |
   | ---------------------- | -------------- |
   | Framework preset       | None / Vite    |
   | Build command          | `pnpm build`   |
   | Build output directory | `dist`         |
   | Node.js version        | `20` (auto from `.nvmrc`) |
   | Install command        | `pnpm install` |

4. The `public/_redirects` and `public/_headers` files are copied into `dist/` automatically and picked up by Cloudflare for SPA fallback + caching policy.

After the first deploy, you can map a custom domain in **Pages → Custom domains**.

---

## Notes

- All inner routes are code-split via `React.lazy` — the homepage initial bundle is ~74 KB gzipped.
- Hero and Management section videos are lazy-loaded via `IntersectionObserver` (won't fetch the MP4 until the user scrolls there).
- Per-page SEO (`<title>`, meta description, Open Graph, Twitter Card, canonical URL) is handled by `react-helmet-async` in `src/app/components/Seo.tsx`.
- Organization-level JSON-LD structured data is embedded in `index.html`.
