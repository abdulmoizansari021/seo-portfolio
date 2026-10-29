// Static site build: renders src/data.mjs into dist/ with no runtime dependencies.
// Canonical URL: SITE_URL, else Vercel's production domain, else localhost.
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { profile, cvClaims, verified, caseStudies, skills, tools, experience, education, courses } from "../src/data.mjs";
import { rootCss, assertContrast, fxVars } from "../src/theme.mjs";
import { heroFx } from "./theme-fx.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

const rawSite = process.env.SITE_URL
  || (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)
  || "http://localhost:4173";
const SITE = rawSite.replace(/\/+$/, "");
const BUILT = new Date().toISOString().slice(0, 10);

assertContrast();
const minify = (t) => t.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s*\n\s*/g, "\n");
const css = [
  rootCss(),
  await readFile(path.join(root, "src/styles.css"), "utf8"),
  await readFile(path.join(root, "src/motion.css"), "utf8"),
  `.hero-dark{${Object.entries(fxVars).map(([k, v]) => `--${k}:${v}`).join(";")}}`,
].map(minify).join("\n");
const motionJs = await readFile(path.join(root, "src/motion.js"), "utf8");
// Midnight Navy hero layers; the case pages use the calmer two.
const homeFx = heroFx(false, ["grid", "glow", "net", "graph"]);
const caseFx = heroFx(true, ["grid", "glow"]);
// Verified figures such as "+107.8%" count up; anything else renders as plain text.
const counter = (value) => {
  const m = /^(\+?)(\d+(?:\.\d+)?)(%?)$/.exec(value);
  if (!m) return esc(value);
  const dec = (m[2].split(".")[1] || "").length;
  return `<span aria-hidden="true" data-count="${m[2]}" data-dec="${dec}" data-prefix="${m[1]}" data-suffix="${m[3]}">${esc(value)}</span><span class="sr">${esc(value)}</span>`;
};
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const img = (file, alt, { eager = false, sizes = "(min-width: 760px) 50vw, 100vw" } = {}) =>
  `<img src="/images/evidence/${file}-720.webp" srcset="/images/evidence/${file}-720.webp 720w, /images/evidence/${file}.webp 1440w" sizes="${sizes}" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" width="720" height="${file.includes("semrush") ? 498 : file.includes("ga4_traffic") ? 302 : file.includes("ga4") ? 292 : 304}">`;

function page({ title, description, pathname, body, jsonld }) {
  const url = `${SITE}${pathname}`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta name="twitter:card" content="summary">
<meta name="theme-color" content="#0b1b3a">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<style>${css}</style>
<script>document.documentElement.classList.add("js")</script>
${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>` : ""}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-head"><div class="wrap">
<a class="logo" href="/">${esc(profile.name)} <span>SEO</span></a>
<nav class="nav" aria-label="Main">
<a href="/#results">Results</a><a href="/#case-studies">Case studies</a><a href="/#evidence">Evidence</a><a href="/#skills">Skills</a><a href="/#experience">Experience</a>
</nav>
<a class="btn btn-hero btn-sm" href="/#contact">Contact</a>
</div></header>
<main id="main">
${body}
</main>
<footer class="site-foot"><div class="wrap">
<p>${esc(profile.name)}, ${esc(profile.title)}. Metrics come from Google Search Console, Google Analytics 4 and Semrush screenshots captured on 28 to 29 Oct 2026. Semrush traffic is a modelled estimate. Client names are withheld until each client approves publication.</p>
</div></footer>
<dialog class="lb" id="lb" aria-labelledby="lb-title">
<img alt="">
<div class="lb-bar"><div><strong id="lb-title" data-lb-title></strong><span data-lb-cap></span></div><button type="button" class="btn btn-ghost btn-sm" data-lb-close>Close</button></div>
</dialog>
<script>${motionJs}</script>
</body>
</html>
`;
}

const headlineMetrics = (c) => c.metrics.filter((m) => m.change.startsWith("+") || m.change.includes("better")).slice(0, 2);

function caseCard(c, i) {
  const ev = c.evidence[0];
  return `<div class="cw rv" style="--i:${i}" data-tags="${esc(c.tags.join("|"))}"><div class="gb tilt"><article class="card">
<div class="shot">${img(ev.file, `${ev.platform} ${ev.report} for ${c.label}`, { sizes: "(min-width: 1060px) 33vw, (min-width: 760px) 50vw, 100vw" })}
<div class="more" aria-hidden="true"><b>What I did</b>${c.actions.slice(0, 3).map((a) => `<span>${esc(a.date)}: ${esc(a.text.split(/[.:]\s/)[0])}</span>`).join("")}</div></div>
<div class="body">
<span class="kicker">${esc(c.label)} &middot; ${esc(c.industry)} &middot; ${esc(c.market)}</span>
<h3><a href="/case-studies/${c.slug}/">${esc(c.title)}</a></h3>
<p>${esc(c.summary)}</p>
<ul class="chips">${c.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
<div class="mini">${headlineMetrics(c).map((m) => `<div><b>${esc(m.change)}</b><span>${esc(m.name)}, ${esc(m.source.split(" ")[0])}</span></div>`).join("")}</div>
<a href="/case-studies/${c.slug}/">Read the case study<span class="sr"> for ${esc(c.label)}</span></a>
</div>
</article></div></div>`;
}

// A filter is only worth a button if it narrows the list.
const tagCounts = caseStudies.flatMap((c) => c.tags).reduce((m, t) => m.set(t, (m.get(t) || 0) + 1), new Map());
const allTags = ["All", ...[...tagCounts].filter(([, n]) => n < caseStudies.length).map(([t]) => t)];
const gallery = caseStudies.flatMap((c) => c.evidence.map((e) => ({ ...e, c })));

const home = page({
  title: `${profile.name}, ${profile.title} | Evidence-based SEO portfolio`,
  description: `${profile.title} in Karachi with 4+ years across technical, on-page, local, AEO and GEO. Case studies backed by Google Search Console, GA4 and Semrush screenshots.`,
  pathname: "/",
  jsonld: {
    "@context": "https://schema.org", "@type": "ProfilePage", url: `${SITE}/`,
    mainEntity: { "@type": "Person", name: profile.name, jobTitle: profile.title, email: `mailto:${profile.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
      worksFor: { "@type": "Organization", name: "Digital Eggheads" },
      knowsAbout: ["Search engine optimization", "Technical SEO", "Local SEO", "Structured data", "Answer engine optimization", "Generative engine optimization"],
      sameAs: profile.links.map((l) => l.href) },
  },
  body: `
<section class="hero hero-dark">
${homeFx}
<div class="wrap"><div class="hero-content">
<span class="eyebrow rise">${esc(profile.location)} &middot; Open to remote</span>
<h1>${esc(profile.name)}</h1>
<p class="role rise" style="--dl:.1s">${esc(profile.title)}</p>
<p class="tagline rise" style="--dl:.18s">SEO that shows up in the data, not just the deck.</p>
<p class="lede rise" style="--dl:.24s">${esc(profile.summary)}</p>
<div class="cta rise" style="--dl:.32s">
<a class="btn btn-hero" href="#case-studies">View Case Studies</a>
<a class="btn btn-hero-ghost" href="${profile.cv}" download>Download CV (PDF)</a>
</div>
<div class="meta-row rise" style="--dl:.4s"><span>${esc(profile.availability)}</span><span>English, Urdu</span></div>
</div></div></section>

<section id="results"><div class="wrap">
<h2>Verified results</h2>
<p class="section-intro">Every number below links to a dated screenshot from Google Search Console or GA4. Periods compare 29 Jul to 26 Oct 2026 with the same 90 days in 2025, which removes seasonality.</p>
<div class="stats">
${verified.map((v, i) => `<div class="stat rv" style="--i:${i}"><span class="badge badge-ok">Verified</span><span class="v">${counter(v.value)}</span><span class="l">${esc(v.label)}</span><span class="d">${esc(v.detail)}</span><a href="/case-studies/${v.caseSlug}/">See the evidence</a><span class="s">${esc(v.source)}</span></div>`).join("\n")}
</div>
<h3 style="margin-top:34px">From my CV</h3>
<p class="section-intro">These figures come from my CV. Analytics access for the earlier role is no longer available, so they are labelled CV-reported rather than verified.</p>
<div class="stats">
${cvClaims.map((v, i) => `<div class="stat cv rv" style="--i:${i}"><span class="badge badge-warn">CV-reported</span><span class="v">${esc(v.value)}</span><span class="d">${esc(v.label)}</span></div>`).join("\n")}
</div>
</div></section>

<section id="case-studies"><div class="wrap">
<h2>Case studies</h2>
<p class="section-intro">Client work delivered at Digital Eggheads. Each study lists what I did, when, the before and after numbers, and what the evidence cannot prove.</p>
<div class="filters" role="group" aria-label="Filter case studies">
${allTags.map((t, i) => `<button type="button" data-filter="${esc(t)}" aria-pressed="${i === 0}">${esc(t)}</button>`).join("")}
</div>
<div class="cards" id="cards">
${caseStudies.map(caseCard).join("\n")}
</div>
<p id="filter-status" class="section-intro" aria-live="polite"></p>
</div></section>

<section id="evidence"><div class="wrap">
<h2>Evidence gallery</h2>
<p class="section-intro">Unedited report screenshots, cropped to remove client names, account details and navigation. Select any image to open it at full size.</p>
<div class="gallery">
${gallery.map((e, i) => `<figure class="rv" style="--i:${i % 2}">
<a href="/images/evidence/${e.file}.webp" data-lb>${img(e.file, `${e.platform}: ${e.report}, ${e.c.label}`)}</a>
<figcaption><strong>${esc(e.c.label)} &middot; ${esc(e.platform)}</strong>${esc(e.caption)}<span class="src">${esc(e.report)} &middot; ${esc(e.period)}</span></figcaption>
</figure>`).join("\n")}
</div>
</div></section>

<section id="skills"><div class="wrap">
<h2>Skills</h2>
<div class="grid-3">
${skills.map((s, i) => `<div class="panel rv" style="--i:${i % 3}"><h3>${esc(s.group)}</h3><ul>${s.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>`).join("\n")}
</div>
<h3 style="margin-top:30px">Tools and platforms</h3>
<ul class="tools">${tools.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
</div></section>

<section id="experience"><div class="wrap">
<h2>Experience</h2>
<div class="timeline">
${experience.map((j) => `<div class="job rv"><h3>${esc(j.role)}, ${esc(j.org)}</h3><div class="when">${esc(j.period)}</div><ul>${j.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></div>`).join("\n")}
</div>
<div class="two" style="margin-top:16px">
<div class="panel"><h3>Education</h3><ul>${education.map((e) => `<li>${esc(e.title)}, ${esc(e.org)} (${esc(e.period)})</li>`).join("")}</ul></div>
<div class="panel"><h3>Courses</h3><ul>${courses.map((e) => `<li>${esc(e.title)}, ${esc(e.org)}</li>`).join("")}</ul></div>
</div>
</div></section>

<section id="contact"><div class="wrap">
<div class="contact rv">
<h2>Hiring for SEO?</h2>
<p>I am looking for SEO roles with agencies and in-house teams in Pakistan, and remote roles with international companies. I can walk you through any of these reports live.</p>
<div class="cta" style="display:flex;flex-wrap:wrap;gap:12px">
<a class="btn btn-hero" href="mailto:${profile.email}?subject=SEO%20role">Email ${esc(profile.email)}</a>
<a class="btn btn-hero-ghost" href="${profile.cv}" download>Download CV (PDF)</a>
${profile.links.map((l) => `<a class="btn btn-hero-ghost" href="${esc(l.href)}" rel="me noopener">${esc(l.label)}</a>`).join("")}
</div>
</div>
</div></section>
`,
});

function casePage(c) {
  return page({
    title: `${c.title} | ${c.label} | ${profile.name}`,
    description: `${c.summary.slice(0, 150)}`,
    pathname: `/case-studies/${c.slug}/`,
    jsonld: { "@context": "https://schema.org", "@type": "Article", headline: c.title, author: { "@type": "Person", name: profile.name }, dateModified: BUILT, url: `${SITE}/case-studies/${c.slug}/` },
    body: `
<section class="hero-dark case-band">
${caseFx}
<div class="wrap"><div class="hero-content" style="max-width:780px">
<nav class="crumbs rise" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/#case-studies">Case studies</a> / ${esc(c.label)}</nav>
<span class="eyebrow rise" style="--dl:.06s;margin-top:18px">${esc(c.label)} &middot; ${esc(c.industry)}</span>
<h1>${esc(c.title)}</h1>
<p class="lede rise" style="--dl:.16s">${esc(c.summary)}</p>
</div></div>
</section>
<div class="wrap">
<section style="padding:22px 0 0">
<div class="facts rv">
<div><b>Client</b>${esc(c.client)}</div>
<div><b>Market</b>${esc(c.market)}</div>
<div><b>Focus</b>${esc(c.tags.join(", "))}</div>
</div>
</section>

<section style="padding-top:20px"><h2>Results</h2>
<div class="table-wrap rv"><table>
<thead><tr><th scope="col">Metric</th><th scope="col">Before (2025)</th><th scope="col">After (2026)</th><th scope="col">Change</th><th scope="col">Source and period</th></tr></thead>
<tbody>${c.metrics.map((m) => `<tr><th scope="row" style="color:var(--ink);text-transform:none;letter-spacing:0;font-size:.93rem">${esc(m.name)}</th><td data-label="Before">${esc(m.before)}</td><td data-label="After">${esc(m.after)}</td><td class="up" data-label="Change">${esc(m.change)}</td><td class="src-cell">${esc(m.source)}<br><small>${esc(m.period)}</small></td></tr>`).join("")}</tbody>
</table></div>
</section>

<section><h2>The challenge</h2><p style="max-width:75ch">${esc(c.challenge)}</p>
<h2 style="margin-top:28px">My role</h2><p style="max-width:75ch">${esc(c.role)}</p></section>

<section><h2>What I did</h2>
<ol class="steps">${c.actions.map((a, i) => `<li class="rv" style="--i:${i}"><time>${esc(a.date)}</time><span>${esc(a.text)}</span></li>`).join("")}</ol>
</section>

<section><h2>Evidence</h2>
<div class="gallery">${c.evidence.map((e, i) => `<figure class="rv" style="--i:${i % 2}">
<a href="/images/evidence/${e.file}.webp" data-lb>${img(e.file, `${e.platform}: ${e.report}`, { eager: i === 0 })}</a>
<figcaption><strong>${esc(e.platform)}</strong>${esc(e.caption)}<span class="src">${esc(e.report)} &middot; ${esc(e.period)}</span></figcaption>
</figure>`).join("")}</div>
</section>

<section><div class="note rv"><h2>Limits of this evidence</h2><ul>${c.limitations.map((l) => `<li>${esc(l)}</li>`).join("")}</ul></div></section>

<section style="padding-top:0"><div class="contact rv"><h2>Want the full walkthrough?</h2><p>I can take you through these reports and the work behind them in an interview.</p>
<div style="display:flex;flex-wrap:wrap;gap:12px"><a class="btn btn-hero" href="mailto:${profile.email}?subject=SEO%20role">Email me</a><a class="btn btn-hero-ghost" href="/#case-studies">More case studies</a></div></div></section>
</div>`,
  });
}

const notFound = page({ title: `Page not found | ${profile.name}`, description: "This page does not exist.", pathname: "/404", body: `<section class="hero"><div class="wrap"><h1>Page not found</h1><p class="lede">That page does not exist. The case studies are on the <a href="/">home page</a>.</p></div></section>` });

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(path.join(root, "public"), dist, { recursive: true });
await writeFile(path.join(dist, "index.html"), home);
await writeFile(path.join(dist, "404.html"), notFound.replace(/<link rel="canonical"[^>]+>\n/, '<meta name="robots" content="noindex">\n'));
for (const c of caseStudies) {
  await mkdir(path.join(dist, "case-studies", c.slug), { recursive: true });
  await writeFile(path.join(dist, "case-studies", c.slug, "index.html"), casePage(c));
}
const urls = ["/", ...caseStudies.map((c) => `/case-studies/${c.slug}/`)];
await writeFile(path.join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `<url><loc>${SITE}${u}</loc><lastmod>${BUILT}</lastmod></url>`).join("\n")}\n</urlset>\n`);
await writeFile(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

for (const c of caseStudies) for (const e of c.evidence) {
  for (const f of [`${e.file}.webp`, `${e.file}-720.webp`]) if (!existsSync(path.join(dist, "images/evidence", f))) throw new Error(`Missing evidence image ${f}`);
}
console.log(`Built ${urls.length} pages + 404 for ${SITE}`);
