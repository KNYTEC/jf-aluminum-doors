# JF Aluminum Doors — Landing Page

Static site, single page. No build step. Deploys to Vercel as-is.

## Structure
- `index.html` — the landing page (Bold Industrial direction)
- `assets/` — logo, project photos, `lang.js` (EN/ES toggle)
- `sitemap.xml` / `robots.txt` — for Google indexing

## Deploy (Vercel)
1. Push this folder to a GitHub repo.
2. Import the repo in Vercel as a **static site** (Framework Preset: "Other", no build command, output dir = root).
3. `index.html` is served at `/`.

## Notes
- Bilingual (EN/ES toggle, top-right). Language choice persists via localStorage.
- Business details: JF Aluminum Doors · 5832 Holmes Ave, Los Angeles, CA 90001 · (323) 277-9270 · CA Lic. #1130494 · family-owned since 2011 · serving LA, Orange County & the Inland Empire.
- Hours: Mon–Fri 9:00 AM – 3:30 PM (Sat–Sun closed).

## SEO
- Title, meta description, Open Graph, Twitter card, and LocalBusiness JSON-LD are in `<head>` of `index.html`.
- `sitemap.xml` and `robots.txt` reference **`https://jfaluminumdoors.com/`**. If you deploy on a different domain (e.g. a `.vercel.app` URL or another custom domain), **find-and-replace that URL** in `sitemap.xml`, `robots.txt`, and the `<head>` tags of `index.html` (canonical, og:url, og:image, twitter:image, JSON-LD `url`/`image`).
- After deploy: submit `https://jfaluminumdoors.com/sitemap.xml` in Google Search Console.
