# Abdul Moiz Ansari: SEO portfolio

A client-facing SEO portfolio: it shows brand owners what I do (services), proof from real client data (case studies), how I work, and one clear way to get in touch. It is a static site: one Node build script turns `src/data.mjs` into plain HTML pages in `dist/`. No framework, no runtime dependencies and almost no JavaScript.

## Structure

```
src/data.mjs            every claim, metric, source and date range on the site
src/theme.mjs           Modern Emerald colour tokens (light and dark); the build fails below 4.5:1 contrast
src/styles.css          layout and components (inlined into each page at build time)
src/motion.css          dark surfaces, hero effects, reveals, hover depth, lightbox, reduced-motion rules
src/motion.js           parallax, card tilt, scroll reveal, verified-metric counters, filters, lightbox
src/themes.mjs          the 8 candidate palettes used only by the local theme gallery
scripts/build.mjs       renders dist/ (home, 3 case study pages, 404, sitemap, robots)
scripts/check.mjs       fails the build output on broken links, private strings or em dashes
scripts/serve.mjs       local preview server
scripts/build-themes.mjs, scripts/theme-fx.mjs   local-only theme gallery (never deployed)
public/images/evidence  anonymised report screenshots (WebP, full width and 720px)
public/cv               public-safe CV (no street address)
cv-source               HTML source of the public CV
```

## Run locally

Requires Node 18.17 or newer. There is nothing to install.

```bash
npm run build
```

```bash
npm run check
```

```bash
npm run preview
```

The preview runs at http://localhost:4173.

## Canonical URL

The build reads the site address in this order:

1. `SITE_URL` (set this once you have a custom domain, for example `https://example.com`)
2. `VERCEL_PROJECT_PRODUCTION_URL`, which Vercel sets automatically, so the first deployment gets correct canonicals, sitemap and robots.txt without any configuration
3. `http://localhost:4173` for local builds

No other environment variables are used, so there is no `.env.example`.

## Deploy with GitHub and Vercel

1. Create an empty repository on GitHub (no README, no licence), for example `seo-portfolio`.
2. From this folder:

   ```bash
   git remote add origin https://github.com/<your-username>/seo-portfolio.git
   ```

   ```bash
   git push -u origin main
   ```

3. In Vercel, choose Add New, Project, and import the repository. `vercel.json` already sets the build command (`npm run build`) and output directory (`dist`). Leave Framework Preset as Other.
4. Deploy. Open the `*.vercel.app` URL and check the home page, one case study, the CV download and `/sitemap.xml`.

### Adding a custom domain later

1. Vercel project, Settings, Domains: add the domain and set the DNS records Vercel shows.
2. Settings, Environment Variables: add `SITE_URL` = `https://your-domain` for Production.
3. Redeploy so canonicals and the sitemap use the new domain.
4. Add the domain to Google Search Console and submit `/sitemap.xml`.

## Pages

`/` home (promise, verified results, services, case studies, process, FAQ, contact), `/services/`, `/about/` (experience, skills, CV download) and one page per case study.

## Updating content

Optional fields in `profile` (in `src/data.mjs`):

- `photo`: a portrait in `public/` (for example `/images/moiz.webp`, about 840x1040). It replaces the hero graph on desktop.
- `whatsapp`: a number in international format (for example `923001234567`) adds a WhatsApp button next to email.
- `links`: profile links such as LinkedIn, shown in every contact block.

Edit `src/data.mjs`, then build. Each metric has `source` and `period` fields; keep them accurate. To add a contact link (for example LinkedIn), add `{ label: "LinkedIn", href: "https://..." }` to `profile.links`.

## Client names and screenshots

Client names are withheld and the screenshots are cropped so no domain, property, account or organisation name is visible. Named originals are kept outside this repository. When a client approves publication in writing, you can replace the anonymised `client` field and title for that case study. `scripts/check.mjs` blocks client names listed in the untracked `private-terms.txt` from the build output; remove a name from that file only after that client has approved.

## Theme and motion

The live design is "Studio" (29 Oct 2026): a light layout with one coral accent (#cf2e2e, lighter #ff6b5e in dark mode), a condensed display face (Barlow Semi Condensed, self-hosted in `public/fonts/` with preload; SIL Open Font License in `public/fonts/OFL.txt`) and a three-column hero. It replaced Modern Emerald and Midnight Navy, which remain in the git history and the theme gallery. Colours live only in `src/theme.mjs`; layout and motion for this design are in `src/studio.css`.

Motion, all plain CSS and a few lines of JavaScript, no libraries:

- Header tightens and gains a shadow on scroll; nav links get an underline sweep.
- Section titles rise in word by word; cards and list rows fade or slide in as they enter the screen.
- Outlined words under the hero drift with page scroll (CSS scroll timeline, static where unsupported).
- Service icons flip on hover; services rows fill with the accent; case screenshots zoom in on reveal.
- Verified figures count up; a back-to-top button shows scroll progress.
- `prefers-reduced-motion` turns all of it off, and content is fully visible without JavaScript.

To reopen the theme gallery locally (it is excluded from the Vercel build):

```bash
npm run themes
```

```bash
npm run preview
```

Then open http://localhost:4173/theme-preview/.

## Measured performance

Lighthouse 12.8.2, mobile emulation with simulated slow 4G, local build, 29 Oct 2026, Studio design with self-hosted fonts:

| Page | Performance | Accessibility | Best practices | SEO | LCP | CLS |
|---|---|---|---|---|---|---|
| Home | 100 | 100 | 100 | 100 | 1.4 s | 0 |
| Services | 100 | 100 | 100 | 100 | 1.5 s | 0 |
| About | 100 | 100 | 100 | 100 | 1.5 s | 0 |
| Case A | 98 | 100 | 100 | 100 | 2.0 s | 0 |

Self-hosting the font (one 23 KB preloaded file; the 600 weight loads only if a page uses it) cut home LCP from 2.8 s with Google Fonts to 1.4 s. Re-run Lighthouse against the deployed URL for production figures.
