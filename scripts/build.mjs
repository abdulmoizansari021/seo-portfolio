// Static site build: renders src/data.mjs into dist/ with no runtime dependencies.
// Canonical URL: SITE_URL, else Vercel's production domain, else localhost.
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { COMPARE, profile, enquiry, verified, caseStudies, services, audiences, industries, processSteps, promises, faq, skills, tools, experience, education, courses } from "../src/data.mjs";
import { rootCss, assertContrast, fxVars } from "../src/theme.mjs";
import { heroFx } from "./theme-fx.mjs";
import { readFileSync } from "node:fs";

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
  await readFile(path.join(root, "src/studio.css"), "utf8"),
  `.hero-dark,.studio-hero{${Object.entries(fxVars).map(([k, v]) => `--${k}:${v}`).join(";")}}`,
].map(minify).join("\n");
const motionJs = await readFile(path.join(root, "src/motion.js"), "utf8");
// Modern Emerald hero layers; the case pages use the calmer glow only.
const homeFx = heroFx(false, ["glow", "bars", "graph"]);
const caseFx = heroFx(true, ["glow"]);
// Banner decoration: curved wireframe meshes, a node network and drifting particles (all aria-hidden).
const meshSvg = (cls, rows, cols, amp) => {
  const lines = [];
  for (let i = 0; i <= rows; i++) {
    let d = "";
    for (let j = 0; j <= 40; j++) {
      const x = (j / 40) * 600, y = 40 + i * (320 / rows) + Math.sin(j / 40 * Math.PI * 1.6 + i * 0.35) * amp * (1 - i / (rows * 1.6));
      d += `${j ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`;
    }
    lines.push(`<path d="${d}"/>`);
  }
  for (let j = 0; j <= cols; j++) {
    let d = "";
    for (let i = 0; i <= 20; i++) {
      const t = i / 20, x = (j / cols) * 600 + Math.sin(t * Math.PI) * 30, y = 40 + t * 320 + Math.sin((j / cols) * Math.PI * 1.6 + t * 2) * amp * 0.6;
      d += `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`;
    }
    lines.push(`<path d="${d}"/>`);
  }
  return `<svg class="mesh ${cls}" viewBox="0 0 600 400" preserveAspectRatio="none" aria-hidden="true">${lines.join("")}</svg>`;
};
const particles = Array.from({ length: 26 }, (_, i) => {
  const x = (i * 37.3) % 100, y = (i * 61.7) % 100, s = 2 + (i % 3), dl = (i * 0.37) % 4;
  return `<i style="left:${x.toFixed(1)}%;top:${y.toFixed(1)}%;width:${s}px;height:${s}px;animation-delay:-${dl.toFixed(2)}s"></i>`;
}).join("");
const bannerFx = `<div class="banner-fx" aria-hidden="true">
<span class="glow g1"></span><span class="glow g2"></span><span class="glow g3"></span>
${meshSvg("m-left", 16, 18, 46)}${meshSvg("m-right", 18, 20, 60)}
${heroFx(false, ["net"]).replace('<div class="fx-scrim"></div>', "")}
<div class="sparks">${particles}</div>
</div>`;
// Verified figures such as "+107.8%" count up; anything else renders as plain text.
const counter = (value) => {
  const m = /^(\+?)(\d+(?:\.\d+)?)(%?)$/.exec(value);
  if (!m) return esc(value);
  const dec = (m[2].split(".")[1] || "").length;
  return `<span aria-hidden="true" data-count="${m[2]}" data-dec="${dec}" data-prefix="${m[1]}" data-suffix="${m[3]}">${esc(value)}</span><span class="sr">${esc(value)}</span>`;
};
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const SIZES = JSON.parse(readFileSync(new URL("../src/evidence-sizes.json", import.meta.url), "utf8"));
const img = (file, alt, { eager = false, sizes = "(min-width: 760px) 50vw, 100vw" } = {}) => {
  const d = SIZES[file];
  if (!d) throw new Error(`No size recorded for evidence image ${file}`);
  const srcset = d.w > d.w720 ? ` srcset="/images/evidence/${file}-720.webp ${d.w720}w, /images/evidence/${file}.webp ${d.w}w" sizes="${sizes}"` : "";
  return `<img src="/images/evidence/${file}-720.webp"${srcset} alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" width="${d.w720}" height="${d.h720}">`;
};
const SHORT = { yoy: "year on year", m3: "3 months vs previous", m6: "6 months vs previous", d60: "60 days vs previous", since: "since May 2026" };
const typeOf = (m) => m.type || "yoy";

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
<meta name="theme-color" content="#ffffff">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/fonts/barlow-semi-condensed-700-latin.woff2" as="font" type="font/woff2" crossorigin>
<style>${css}</style>
<script>document.documentElement.classList.add("js")</script>
${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>` : ""}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-head"><div class="wrap">
<a class="logo" href="/"><svg class="mark" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" stroke-width="3"/><path d="M9 20l5-5 4 4 6-7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>${esc(profile.name)}</a>
<nav class="nav" aria-label="Main">
<a href="/services/">Services</a><a href="/#results">Results</a><a href="/#case-studies">Case studies</a><a href="/about/">About</a><a href="/#faq">FAQ</a>
</nav>
<div class="head-right"><div class="socials head-socials">${socialLinks()}</div>
<button type="button" class="menu-btn" aria-expanded="false" aria-controls="menu-panel" aria-label="Open menu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path class="l1" d="M5 7h14"/><path class="l2" d="M5 12h14"/><path class="l3" d="M5 17h14"/></svg></button></div>
</div>
<div class="menu-panel" id="menu-panel" hidden>
<nav aria-label="Menu"><a href="/">Home</a><a href="/services/">Services</a><a href="/#results">Results</a><a href="/#case-studies">Case studies</a><a href="/about/">About</a><a href="/#faq">FAQ</a></nav>
<a class="btn btn-hero" href="#contact">Get in touch <span class="arr" aria-hidden="true">&rarr;</span></a>
<p class="menu-mail"><a href="${mailto}">${esc(profile.email)}</a></p>
</div></header>
<main id="main">
${body}
</main>
<footer class="site-foot"><div class="wrap">
<p>${esc(profile.name)}, ${esc(profile.title)}, Karachi. <a href="/services/">Services</a> &middot; <a href="/about/">About</a> &middot; <a href="${profile.cv}" download>CV</a></p>
<p>Case study results come from projects delivered as Senior SEO Specialist at Digital Eggheads. Metrics come from Google Search Console, GA4 and Semrush screenshots captured on 28 to 29 Oct 2026; Semrush traffic is a modelled estimate. Client names are withheld until each client approves publication.</p>
</div></footer>
<dialog class="lb" id="lb" aria-labelledby="lb-title">
<img alt="">
<div class="lb-bar"><div><strong id="lb-title" data-lb-title></strong><span data-lb-cap></span></div><button type="button" class="btn btn-ghost btn-sm" data-lb-close>Close</button></div>
</dialog>
<button type="button" class="to-top" aria-label="Back to top"><svg class="ring" viewBox="0 0 48 48" aria-hidden="true"><circle class="track" cx="24" cy="24" r="22"/><circle class="prog" cx="24" cy="24" r="22" pathLength="1"/></svg><svg class="up" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg></button>
<script>${motionJs}</script>
</body>
</html>
`;
}

const headlineMetrics = (c) => {
  const good = c.metrics.filter((m) => m.change.startsWith("+") || m.change.includes("better"));
  const picked = [];
  for (const m of good) if (picked.length < 2 && !picked.some((p) => typeOf(p) === typeOf(m))) picked.push(m);
  for (const m of good) if (picked.length < 2 && !picked.includes(m)) picked.push(m);
  return picked;
};

function caseCard(c, i) {
  const ev = c.evidence[0];
  return `<div class="cw rv" style="--i:${i}" data-tags="${esc(c.tags.join("|"))}"><div class="gb tilt"><article class="card">
<div class="shot">${img(ev.file, `${ev.platform} ${ev.report} for ${c.label}`, { sizes: "(min-width: 1060px) 33vw, (min-width: 760px) 50vw, 100vw" })}
<div class="more" aria-hidden="true"><b>What I did</b>${c.actions.slice(0, 3).map((a) => `<span>${esc(a.date)}: ${esc(a.text.split(/[.:]\s/)[0])}</span>`).join("")}</div></div>
<div class="body">
<span class="kicker">${esc(c.label)} &middot; ${esc(c.industry)} &middot; ${esc(c.market)}</span>
<div class="title-row"><h3><a href="/case-studies/${c.slug}/">${esc(c.title)}</a></h3><a class="arrow-btn" href="/case-studies/${c.slug}/" aria-label="Read ${esc(c.label)}: ${esc(c.title)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg></a></div>
<p>${esc(c.summary)}</p>
<ul class="chips">${c.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
<div class="mini">${headlineMetrics(c).map((m) => `<div><b>${esc(m.change)}</b><span>${esc(m.name)}</span><small>${esc(m.source.split(" ")[0])}, ${esc(SHORT[typeOf(m)])}</small></div>`).join("")}</div>
<p class="cmp-types"><span>Compared:</span> ${[...new Set(c.metrics.map(typeOf))].map((t) => esc(COMPARE[t])).join(" &middot; ")}</p>
</div>
</article></div></div>`;
}

// A filter is only worth a button if it narrows the list.
const tagCounts = caseStudies.flatMap((c) => c.tags).reduce((m, t) => m.set(t, (m.get(t) || 0) + 1), new Map());
const allTags = ["All", ...[...tagCounts].filter(([, n]) => n < caseStudies.length).map(([t]) => t)];
const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(enquiry.subject)}&body=${encodeURIComponent(enquiry.body)}`;
const contactButtons = (primary = "Email me about your website") => `<a class="btn btn-hero" href="${mailto}">${esc(primary)}</a>
${profile.whatsapp ? `<a class="btn btn-hero-ghost" href="https://wa.me/${esc(profile.whatsapp)}" rel="noopener">WhatsApp</a>` : ""}
${profile.links.map((l) => `<a class="btn btn-hero-ghost" href="${esc(l.href)}" rel="me noopener">${esc(l.label)}</a>`).join("")}`;
const contactBlock = (heading, text) => `<section id="contact"><div class="wrap"><div class="contact rv">
<h2>${esc(heading)}</h2><p>${esc(text)}</p>
<div class="cta" style="display:flex;flex-wrap:wrap;gap:12px">${contactButtons()}</div>
<p class="contact-mail">Or write to <a href="${mailto}">${esc(profile.email)}</a>.</p>
</div></div></section>`;
const band = ({ crumbs, eyebrow, title, lede }) => `<section class="hero-dark case-band">
${caseFx}
<div class="wrap"><div class="hero-content" style="max-width:780px">
<nav class="crumbs rise" aria-label="Breadcrumb"><a href="/">Home</a> / ${crumbs}</nav>
<span class="eyebrow rise" style="--dl:.06s;margin-top:18px">${esc(eyebrow)}</span>
<h1>${esc(title)}</h1>
<p class="lede rise" style="--dl:.16s">${esc(lede)}</p>
</div></div>
</section>`;
const resultCards = verified.map((v, i) => `<div class="stat rv" style="--i:${i}"><span class="badge badge-ok">Verified</span><span class="v">${counter(v.value)}</span><span class="l">${esc(v.label)}</span><span class="d">${esc(v.detail)}</span><a href="/case-studies/${v.caseSlug}/">See the evidence</a><span class="s">${esc(v.source)}</span></div>`).join("\n");
const steps = () => `<ol class="num-cards">${processSteps.map((p, i) => `<li class="rv" style="--i:${i}"><h3><span class="num">${String(i + 1).padStart(2, "0")}.</span>${esc(p.step)}</h3><p>${esc(p.text)}</p></li>`).join("")}</ol>`;
const head = (kicker, title, intro = "", center = false) => `<div class="sec-head${center ? " center" : ""}"><span class="kicker-sm">${esc(kicker)}</span><h2 class="split">${esc(title)}</h2>${intro ? `<p class="section-intro">${esc(intro)}</p>` : ""}</div>`;
const icon = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const socialLinks = () => [
  `<a href="${mailto}" aria-label="Email">${icon('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>')}</a>`,
  profile.whatsapp ? `<a href="https://wa.me/${esc(profile.whatsapp)}" rel="noopener" aria-label="WhatsApp">${icon('<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1.2-1.2 2 1-.5 1.7c-3.6.4-7.6-3.6-7.2-7.2l1.7-.5 1 2z"/>')}</a>` : "",
  ...profile.links.map((l) => `<a href="${esc(l.href)}" rel="me noopener" target="_blank" aria-label="${esc(l.label)} (opens in a new tab)">${/linkedin/i.test(l.label) ? '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.9 8.6H3.6V20h3.3zM5.25 3.5a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8zM20.4 13.4c0-3.1-1.7-4.9-4.3-4.9-1.4 0-2.4.7-2.9 1.5V8.6H10V20h3.3v-5.7c0-1.5.5-2.6 1.9-2.6s1.9 1.1 1.9 2.7V20h3.3z"/></svg>' : icon('<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>')}</a>`),
].join("");
const personLd = {
  "@type": "Person", "@id": `${SITE}/#person`, name: profile.name, ...(profile.photo ? { image: `${SITE}${profile.photo}` } : {}), jobTitle: profile.title, email: `mailto:${profile.email}`, url: `${SITE}/`,
  address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
  worksFor: { "@type": "Organization", name: "Digital Eggheads" },
  knowsAbout: ["Search engine optimization", "Technical SEO", "Local SEO", "Structured data", "Answer engine optimization", "Generative engine optimization"],
  makesOffer: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name, description: s.outcome } })),
  sameAs: profile.links.map((l) => l.href),
};

const home = page({
  title: `${profile.name} | SEO consultant for brands in Pakistan and worldwide`,
  description: `${profile.title} with 4+ years growing organic traffic and leads through technical SEO, content, local search and AI visibility. Results backed by Search Console and GA4.`,
  pathname: "/",
  jsonld: { "@context": "https://schema.org", "@graph": [{ "@type": "WebSite", "@id": `${SITE}/#website`, url: `${SITE}/`, name: profile.name, publisher: { "@id": `${SITE}/#person` } }, personLd] },
  body: `
<section class="studio-hero${profile.cutout ? " has-cutout hero-banner" : ""}">
${profile.cutout ? bannerFx : ""}
<div class="outline-band" aria-hidden="true"><div class="row"><span>SEO SPECIALIST</span><span class="dim">ORGANIC GROWTH</span><span>SEO SPECIALIST</span><span class="dim">ORGANIC GROWTH</span></div></div>
<div class="wrap hero-grid">
<div class="hero-left">
<span class="hello rise">Hello, I&rsquo;m</span>
<h1 class="hero-name">${esc(profile.name)}</h1>
<div class="cta rise" style="--dl:.2s"><a class="btn btn-hero btn-lg" href="#case-studies">View Case Studies <span class="arr" aria-hidden="true">&rarr;</span></a></div>
</div>
<div class="hero-visual">
${profile.cutout
  ? `<img class="hero-cutout" src="${esc(profile.cutout)}" srcset="${esc(profile.cutoutSmall)} 420w, ${esc(profile.cutout)} 700w" sizes="(min-width: 980px) 340px, 260px" alt="${esc(profile.name)}, ${esc(profile.title)}" width="700" height="1242" fetchpriority="high" decoding="async">`
  : profile.photo
    ? `<img class="studio-portrait" src="${esc(profile.photo)}" alt="${esc(profile.name)}, ${esc(profile.title)}" width="346" height="346" fetchpriority="high" decoding="async">`
    : `<div class="graph-card" aria-hidden="true"><div class="gc-head"><span>Organic clicks</span><span class="badge badge-demo">Illustration</span></div>${heroFx(true, ["graph"])}</div>`}
</div>
<div class="hero-right rise" style="--dl:.22s">
<h2>About Me</h2>
<p>I&rsquo;m a <strong>Senior SEO Specialist</strong> in Karachi helping brands get more <strong>leads and sales from Google and AI search</strong>. Every result is tracked in your own Search Console and GA4.</p>
<h2>Find me on</h2>
<div class="socials">${socialLinks()}</div>
</div>
</div></section>

<section id="results"><div class="wrap">
${head("Proof", "Results from real client work", "Projects I delivered as Senior SEO Specialist at Digital Eggheads. Client names are withheld, and every figure links to the Search Console or GA4 report it comes from. Each card says which periods it compares: year on year, back-to-back months, or equal windows in Google's new AI features report.")}
<div class="stats">
${resultCards}
</div>
</div></section>

<section id="services"><div class="wrap">
${head("Services", "How I can help", "Pick one piece or combine them. Every engagement starts from your own data.", true)}
<div class="grid-3">
${services.map((s, i) => `<a class="svc rv" style="--i:${i % 3}" href="/services/#${s.id}"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${s.icon}</svg></span><h3>${esc(s.name)}</h3><p>${esc(s.outcome)}</p><span class="more-link">Learn more</span></a>`).join("\n")}
</div>
</div></section>

<section id="case-studies"><div class="wrap">
${head("Case studies", "Real problems, measured results", "What the problem was, what I changed and when, the before and after numbers, and what the evidence cannot prove.", true)}
<div class="filters" role="group" aria-label="Filter case studies">
${allTags.map((t, i) => `<button type="button" data-filter="${esc(t)}" aria-pressed="${i === 0}">${esc(t)}</button>`).join("")}
</div>
<div class="cards even" id="cards">
${caseStudies.map(caseCard).join("\n")}
</div>
<p id="filter-status" class="section-intro" aria-live="polite"></p>
</div></section>

<section id="process"><div class="wrap">
${head("Process", "How we work together")}
${steps()}
</div></section>

<section id="why"><div class="wrap">
${head("Why me", "What you can expect")}
<div class="promise-grid">
${promises.map((p, i) => `<div class="panel rv" style="--i:${i % 2}"><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></div>`).join("\n")}
</div>
<div class="two" style="margin-top:22px">
<div class="panel rv"><h3>Who I work with</h3><ul>${audiences.map((a) => `<li>${esc(a)}</li>`).join("")}</ul></div>
<div class="panel rv" style="--i:1"><h3>Industries I have worked in</h3><ul class="tools" style="margin:6px 0 0">${industries.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></div>
</div>
</div></section>

<section id="about-teaser"><div class="wrap"><div class="exp">
<div class="exp-main rv">
<div class="big"><b>4+</b><span>Years of<br>SEO experience</span>${profile.avatar ? `<img class="avatar" src="${esc(profile.avatar)}" alt="" width="168" height="168" loading="lazy" decoding="async">` : ""}</div>
<h2>Meet Moiz</h2>
<p>I am a Senior SEO Specialist based in Karachi. I have managed end-to-end SEO for more than 20 websites, from local clinics to e-commerce stores and software companies, across technical, on-page, off-page, local and AI search.</p>
<a class="btn btn-hero" href="/about/">More about me</a>
</div>
<div class="exp-side">
<div class="rv"><b>20+</b><span>Websites managed</span></div>
<div class="rv" style="--i:1"><b>${industries.length}</b><span>Industries worked in</span></div>
<div class="rv" style="--i:2"><b>4</b><span>Countries targeted: Pakistan, Australia, UK, US</span></div>
<div class="rv" style="--i:3"><b>3</b><span>Data sources behind every report: GSC, GA4, Semrush</span></div>
</div>
</div></div></section>

<section id="tools"><div class="wrap">
${head("Toolkit", "Tools I work with every day", "", true)}
<ul class="tool-grid">${tools.slice(0, 12).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
</div></section>

<section id="faq"><div class="wrap">
${head("FAQ", "Questions clients ask")}
<div class="faq">${faq.map((f) => `<details class="rv"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("")}</div>
</div></section>

${contactBlock("Tell me about your website", "Send your website and what you want more of. I will look at it and reply with what I see and how I would approach it.")}
`,
});

const servicesPage = page({
  title: `SEO services: audits, technical, content, local and AI search | ${profile.name}`,
  description: "SEO audits, technical SEO and migrations, content strategy, local SEO and Google Business Profile, AI search visibility and ongoing SEO management.",
  pathname: "/services/",
  jsonld: { "@context": "https://schema.org", "@graph": [personLd, ...services.map((s) => ({ "@type": "Service", name: s.name, description: s.outcome, provider: { "@id": `${SITE}/#person` } }))] },
  body: `
${band({ crumbs: "Services", eyebrow: "Services", title: "SEO services that start from your data", lede: "Every engagement begins with your own Search Console and GA4, so we agree on the starting point before any work begins." })}
<div class="wrap">
<section style="padding-bottom:10px">${head("What I offer", "Six ways I can help your brand grow")}
<ul class="svc-rows">${services.map((s, i) => `<li class="rv from-left" style="--i:${i}"><a href="#${s.id}"><span class="ic">${icon(s.icon)}</span><b>${esc(s.name)}</b><span class="desc">${esc(s.outcome)}</span><span class="go">Details &rarr;</span></a></li>`).join("")}</ul></section>
${services.map((s) => `<section id="${s.id}" class="svc-detail rv"><div><h2>${esc(s.name)}</h2><p class="lede-sm">${esc(s.outcome)}</p><a href="/case-studies/${s.proof.slug}/">${esc(s.proof.label)}</a></div>
<div class="panel"><h3>What is included</h3><ul>${s.includes.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div></section>`).join("\n")}
<section>${head("Process", "How we work together")}
${steps()}</section>
</div>
${contactBlock("Not sure which service you need?", "Send me your website and goals. I will tell you where I would start and why.")}`,
});

const aboutPage = page({
  title: `About ${profile.name}, ${profile.title}`,
  description: `${profile.name} is a ${profile.title} in Karachi with 4+ years of experience and 20+ websites managed across technical, on-page, local, AEO and GEO.`,
  pathname: "/about/",
  jsonld: { "@context": "https://schema.org", "@type": "ProfilePage", url: `${SITE}/about/`, mainEntity: personLd },
  body: `
${band({ crumbs: "About", eyebrow: `${profile.title} · ${profile.location}`, title: "About Moiz", lede: profile.summary })}
<div class="wrap">
<section class="about-intro">${profile.photo ? `<img class="about-photo rv" src="${esc(profile.photo)}" alt="${esc(profile.name)}" width="600" height="600" loading="lazy" decoding="async">` : ""}<div><h2>How I approach SEO</h2>
<div class="prose rv"><p>I care about the numbers a business owner can check: clicks, sessions, leads and calls in their own accounts. That is why every result on this site links to the report it comes from, and why I label anything I cannot verify.</p>
<p>Most of my recent work is in healthcare and other sensitive topics, where accuracy and trust signals matter as much as keywords. I also work with local businesses, e-commerce stores and software companies.</p></div></div></section>

<section><h2>Experience</h2>
<div class="timeline">
${experience.map((j) => `<div class="job rv"><h3>${esc(j.role)}, ${esc(j.org)}</h3><div class="when">${esc(j.period)}</div><ul>${j.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></div>`).join("\n")}
</div></section>

<section><h2>Skills</h2>
<div class="grid-3">
${skills.map((s, i) => `<div class="panel rv" style="--i:${i % 3}"><h3>${esc(s.group)}</h3><ul>${s.items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>`).join("\n")}
</div>
<h3 style="margin-top:30px">Tools and platforms</h3>
<ul class="tools">${tools.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
</section>

<section><div class="two">
<div class="panel rv"><h3>Education</h3><ul>${education.map((e) => `<li>${esc(e.title)}, ${esc(e.org)} (${esc(e.period)})</li>`).join("")}</ul></div>
<div class="panel rv" style="--i:1"><h3>Courses</h3><ul>${courses.map((e) => `<li>${esc(e.title)}, ${esc(e.org)}</li>`).join("")}</ul></div>
</div>
<p style="margin-top:18px"><a href="${profile.cv}" download>Download my CV (PDF)</a></p></section>
</div>
${contactBlock("Want to work together?", "Tell me about your website and what you want more of.")}`,
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
<thead><tr><th scope="col">Metric</th><th scope="col">Before</th><th scope="col">After</th><th scope="col">Change</th><th scope="col">Comparison and source</th></tr></thead>
<tbody>${c.metrics.map((m) => `<tr><th scope="row" style="color:var(--ink);text-transform:none;letter-spacing:0;font-size:.93rem">${esc(m.name)}</th><td data-label="Before">${esc(m.before)}</td><td data-label="After">${esc(m.after)}</td><td class="up" data-label="Change">${esc(m.change)}</td><td class="src-cell"><span class="cmp-chip">${esc(COMPARE[typeOf(m)])}</span>${esc(m.source)}<br><small>${esc(m.period)}</small></td></tr>`).join("")}</tbody>
</table></div>
</section>

<section><div class="case-two">
<div class="panel rv"><h2>The challenge</h2><p>${esc(c.challenge)}</p></div>
<div class="panel rv" style="--i:1"><h2>My role</h2><p>${esc(c.role)}</p></div>
</div></section>

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

</div>
${contactBlock("Want results like this for your brand?", "Send me your website and what you want more of. I will reply with what I see and how I would approach it.")}`,
  });
}

const notFound = page({ title: `Page not found | ${profile.name}`, description: "This page does not exist.", pathname: "/404", body: `<section class="hero"><div class="wrap"><h1>Page not found</h1><p class="lede">That page does not exist. Try the <a href="/">home page</a> or the <a href="/services/">services</a>.</p></div></section>` });

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(path.join(root, "public"), dist, { recursive: true });
await writeFile(path.join(dist, "index.html"), home);
for (const [dir, html] of [["services", servicesPage], ["about", aboutPage]]) {
  await mkdir(path.join(dist, dir), { recursive: true });
  await writeFile(path.join(dist, dir, "index.html"), html);
}
await writeFile(path.join(dist, "404.html"), notFound.replace(/<link rel="canonical"[^>]+>\n/, '<meta name="robots" content="noindex">\n'));
for (const c of caseStudies) {
  await mkdir(path.join(dist, "case-studies", c.slug), { recursive: true });
  await writeFile(path.join(dist, "case-studies", c.slug, "index.html"), casePage(c));
}
const urls = ["/", "/services/", "/about/", ...caseStudies.map((c) => `/case-studies/${c.slug}/`)];
await writeFile(path.join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `<url><loc>${SITE}${u}</loc><lastmod>${BUILT}</lastmod></url>`).join("\n")}\n</urlset>\n`);
await writeFile(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

for (const c of caseStudies) for (const e of c.evidence) {
  for (const f of [`${e.file}.webp`, `${e.file}-720.webp`]) if (!existsSync(path.join(dist, "images/evidence", f))) throw new Error(`Missing evidence image ${f}`);
}
console.log(`Built ${urls.length} pages + 404 for ${SITE}`);
