# JF Aluminum Doors — Landing Page

Static site, single page. No build step. Deploys to Vercel as-is.

## Structure
- `index.html` — the landing page (Bold Industrial direction)
- `assets/` — logo, project photos, `lang.js` (EN/ES toggle)

## Deploy (Vercel)
1. Push this folder to a GitHub repo.
2. Import the repo in Vercel as a **static site** (Framework Preset: "Other", no build command, output dir = root).
3. `index.html` is served at `/`.

## Notes
- Bilingual (EN/ES toggle, top-right). Language choice persists via localStorage.
- Business details: JF Aluminum Doors · 5832 Holmes Ave, Los Angeles, CA 90001 · (323) 277-9270 · CA Lic. #1130494 · family-owned since 2011 · serving LA, Orange County & the Inland Empire.
- **Hours are placeholders** (Mon–Fri 7–5, Sat 8–1) — update in the footer of `index.html`.
