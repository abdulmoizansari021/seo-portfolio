// Local-only theme gallery: writes dist/theme-preview/ after the main build.
// Not part of `npm run build`, so Vercel never deploys it. Run with `npm run themes`.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { themes, contrastPairs } from "../src/themes.mjs";
import { fxCss, heroFx, fxJs, demoChart } from "./theme-fx.mjs";
import { rootCss } from "../src/theme.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "dist", "theme-preview");

// WCAG 2.x relative luminance and contrast ratio.
const lum = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };

const failures = [];
for (const t of themes) {
  t.minRatio = Infinity;
  for (const [fg, bg] of contrastPairs) {
    const r = ratio(t.tokens[fg], t.tokens[bg]);
    t.minRatio = Math.min(t.minRatio, r);
    if (r < 4.5) failures.push(`Theme ${t.id} ${t.name}: ${fg} on ${bg} is ${r.toFixed(2)}:1`);
  }
}
if (failures.length) { console.error(failures.join("\n")); process.exit(1); }

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const baseCss = `${rootCss()}\n${await readFile(path.join(root, "src/styles.css"), "utf8")}`;
const themeCss = themes.map((t) => `.t-${t.id}{${Object.entries(t.tokens).map(([k, v]) => `--${k}:${v}`).join(";")};${t.fxVars}}`).join("\n");
const frameClass = (t) => `frame play t-${t.id} ${t.fx.split(" ").map((l) => `has-${l}`).join(" ")}`;

const css = `${baseCss}
${themeCss}
body { background: var(--bg); }
.gx-top { padding: 28px 0 8px; }
.gx-top h1 { font-size: clamp(1.6rem, 4vw, 2.3rem); }
.gx-note { display: flex; flex-wrap: wrap; gap: 8px 16px; color: var(--muted); font-size: .9rem; }
.gx-note span { background: var(--surface); border: 1px solid var(--line); border-radius: 999px; padding: 4px 12px; }
.picker { display: grid; gap: 10px; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); margin: 18px 0; }
.pick { all: unset; box-sizing: border-box; cursor: pointer; display: grid; gap: 8px; padding: 12px 14px; border-radius: 12px; border: 2px solid var(--line); background: var(--surface); color: var(--text); }
.pick:hover { border-color: var(--muted); }
.pick:focus-visible { outline: 3px solid var(--brand); outline-offset: 2px; }
.pick[aria-checked="true"] { border-color: var(--ink); box-shadow: 0 0 0 2px var(--ink) inset; }
.pick .row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.pick b { color: var(--ink); }
.pick small { color: var(--muted); }
.pick .sel { font-size: .72rem; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: var(--ink); visibility: hidden; }
.pick[aria-checked="true"] .sel { visibility: visible; }
.sw { display: flex; height: 22px; border-radius: 6px; overflow: hidden; border: 1px solid var(--line); }
.sw i { flex: 1; }
@media (max-width: 640px) { .picker { grid-template-columns: 1fr 1fr; gap: 8px; } .pick { padding: 10px; font-size: .88rem; } .pick small, .pick .sel { display: none; } .pick .sw { height: 16px; } }
.views { display: flex; gap: 8px; margin: 6px 0 16px; flex-wrap: wrap; align-items: center; }
.views button { font: inherit; font-size: .9rem; padding: 8px 16px; border-radius: 999px; border: 1px solid var(--line); background: var(--surface); color: var(--text); cursor: pointer; }
.views button[aria-pressed="true"] { background: var(--ink); color: var(--bg); border-color: var(--ink); }

.frame { background: var(--bg); color: var(--text); border: 1px solid var(--line); border-radius: 18px; overflow: hidden; box-shadow: var(--shadow); }
.pv-nav { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 22px; background: var(--hero); color: var(--hero-ink); border-bottom: 1px solid color-mix(in srgb, var(--hero-ink) 12%, transparent); }
.pv-nav .logo { color: var(--hero-ink); }
.pv-nav .logo span { color: var(--hero-muted); }
.pv-links { display: none; gap: 20px; font-size: .92rem; color: var(--hero-muted); }
@media (min-width: 820px) { .pv-links { display: flex; } }
.pv-hero { background: var(--hero); color: var(--hero-muted); padding: 44px 22px 52px; }
.pv-hero .eyebrow { color: var(--hero-accent); }
.pv-hero h2 { color: var(--hero-ink); font-size: clamp(2rem, 5vw, 3rem); letter-spacing: -.025em; margin-bottom: 4px; }
.pv-hero .role { color: var(--hero-ink); font-size: 1.2rem; font-weight: 600; margin-bottom: 14px; }
.pv-hero p { max-width: 60ch; }
.btn-hero { background: var(--hero-accent); color: var(--hero); }
.btn-hero-ghost { background: transparent; color: var(--hero-ink); border-color: color-mix(in srgb, var(--hero-ink) 40%, transparent); }
.pv-body { padding: 30px 22px; }
.pv-body h3.sec { font-size: 1.35rem; display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
.badge-demo { background: var(--surface-2); color: var(--muted); border: 1px dashed var(--muted); }
.frame .stat .badge { align-self: flex-start; }
.pv-split { display: grid; gap: 18px; grid-template-columns: 1fr; margin-top: 26px; }
@media (min-width: 900px) { .pv-split { grid-template-columns: 1.1fr .9fr; } }
.pv-chart { background: var(--surface-2); border-bottom: 1px solid var(--line); padding: 14px; }
.pv-chart svg { width: 100%; height: 120px; display: block; }
.pv-panel { background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); padding: 18px; display: grid; gap: 10px; align-content: start; }
.pv-panel .swatches { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
.pv-panel .swatches div { border-radius: 8px; border: 1px solid var(--line); height: 44px; }
.pv-panel .swatches span { display: block; font-size: .72rem; color: var(--muted); margin-top: 4px; font-family: ui-monospace, Consolas, monospace; }
.pv-contact { background: var(--hero); color: var(--hero-muted); padding: 26px 22px; display: flex; flex-wrap: wrap; gap: 14px; align-items: center; justify-content: space-between; }
.pv-contact b { color: var(--hero-ink); font-size: 1.15rem; display: block; }
.demo-foot { font-size: .8rem; color: var(--muted); padding: 0 22px 18px; }

.compare { display: grid; gap: 16px; grid-template-columns: 1fr; }
@media (min-width: 700px) { .compare { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1150px) { .compare { grid-template-columns: repeat(4, 1fr); } }
.cmp { display: grid; gap: 8px; }
.cmp .frame { border-radius: 14px; }
.cmp .pv-hero { padding: 22px 16px 24px; }
.cmp .pv-hero h2 { font-size: 1.35rem; }
.cmp .pv-hero .role { font-size: .95rem; margin-bottom: 10px; }
.cmp .pv-hero p { font-size: .82rem; line-height: 1.45; }
.cmp .pv-body { padding: 14px 16px 16px; }
.cmp .stats { grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 0; }
.cmp .stat { padding: 10px; }
.cmp .stat .v { font-size: 1.2rem; }
.cmp .stat .l { font-size: .78rem; }
.cmp .btn { padding: 7px 12px; font-size: .8rem; }
.cmp-head { display: flex; justify-content: space-between; align-items: center; gap: 8px; }
.cmp-head b { color: var(--ink); }
.cmp[data-selected="true"] .frame { outline: 3px solid var(--ink); outline-offset: 3px; }

.confirm-bar { position: sticky; bottom: 0; z-index: 6; background: color-mix(in srgb, var(--surface) 94%, transparent); backdrop-filter: blur(8px); border-top: 1px solid var(--line); margin-top: 30px; }
.confirm-bar .wrap { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: space-between; padding-top: 12px; padding-bottom: 12px; }
.confirm-bar .now b { color: var(--ink); }
dialog { border: 1px solid var(--line); border-radius: 16px; padding: 24px; max-width: 460px; width: calc(100% - 32px); background: var(--surface); color: var(--text); }
dialog::backdrop { background: rgba(0, 0, 0, .45); }
dialog h2 { font-size: 1.3rem; }
dialog code { display: block; background: var(--surface-2); padding: 10px 12px; border-radius: 8px; margin: 10px 0 16px; color: var(--ink); font-size: .95rem; }
dialog .acts { display: flex; gap: 10px; flex-wrap: wrap; }
${fxCss}
`;

const chart = `<svg viewBox="0 0 300 120" preserveAspectRatio="none" aria-hidden="true">
<polyline points="0,100 30,96 60,98 90,88 120,84 150,78 180,70 210,62 240,50 270,44 300,34" fill="none" stroke="var(--brand)" stroke-width="3" vector-effect="non-scaling-stroke"/>
<polyline points="0,104 30,104 60,102 90,101 120,100 150,99 180,98 210,97 240,96 270,96 300,95" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 5" vector-effect="non-scaling-stroke"/>
</svg>`;

const demoStats = [
  ["+42%", "Organic clicks"], ["+65%", "Organic sessions"], ["14.2 to 6.8", "Average position"], ["120", "Keywords in top 10"],
];

// Full portfolio mock. `compact` drops sections for the compare grid.
const mock = (compact) => `
<div class="pv-nav"><span class="logo">Abdul Moiz Ansari <span>SEO</span></span>
${compact ? "" : `<span class="pv-links"><span>Results</span><span>Case studies</span><span>Evidence</span><span>Skills</span></span>`}
<button type="button" class="btn btn-hero btn-sm">Contact</button></div>
<div class="pv-hero">
${heroFx(compact)}
<div class="pv-content">
<span class="eyebrow ln"><span style="--dl:0s">Karachi, Pakistan &middot; Open to remote</span></span>
<h2 class="ln"><span style="--dl:.08s">Abdul Moiz Ansari</span></h2>
<div class="role ln"><span style="--dl:.2s">Senior SEO Specialist</span></div>
<p class="ln"><span style="--dl:.3s">I grow organic traffic through technical fixes, on-page optimisation, structured data and content strategy, and I prove it with Search Console, GA4 and Semrush data.</span></p>
<div class="ln" style="margin-top:14px"><span style="--dl:.4s;display:flex;flex-wrap:wrap;gap:10px;padding:4px 2px 10px">
<button type="button" class="btn btn-hero">View Case Studies</button>
<button type="button" class="btn btn-hero-ghost">Download CV</button>
</span></div>
</div>
</div>
<div class="pv-body">
${compact ? "" : `<h3 class="sec">Sample results <span class="badge badge-demo">Demo data</span></h3><p class="section-intro">Placeholder figures to show the card style. These are not real results.</p>`}
<div class="stats">
${demoStats.slice(0, compact ? 2 : 4).map(([v, l], i) => `<div class="stat rv" style="--i:${i}"><span class="badge badge-demo">Demo</span><span class="v">${v}</span><span class="l">${l}</span>${compact ? "" : `<span class="s">Sample source label</span>`}</div>`).join("")}
</div>
${compact ? "" : `
<div class="pv-split">
<div class="gb rv tilt"><article class="card">
<div class="pv-chart">${chart}<div class="more"><b>What I did (demo)</b><span>Technical audit, location pages, schema, review workflow.</span><span>Hover, focus or tap reveals this. The title, results and link stay visible below.</span></div></div>
<div class="body">
<span class="kicker">Sample case study &middot; Local services &middot; <span class="badge badge-demo">Demo</span></span>
<h3><a href="#top">Example: growing leads for a local service business</a></h3>
<p>Illustrative card layout with placeholder copy. Real case studies on the live site use verified GSC and GA4 screenshots.</p>
<ul class="chips"><li>Technical SEO</li><li>Local SEO</li><li>Schema</li></ul>
<div class="mini"><div><b>+00%</b><span>Demo metric</span></div><div><b>+00%</b><span>Demo metric</span></div></div>
<a href="#top">Read the case study</a>
</div>
</article></div>
<div class="pv-panel rv" style="--i:1">
<h3 style="margin:0">Buttons and states</h3>
<div style="display:flex;flex-wrap:wrap;gap:10px"><button type="button" class="btn btn-primary">Primary button</button><button type="button" class="btn btn-ghost">Secondary</button></div>
<p style="margin:0">Body text with an <a href="#top">inline link</a>. Press Tab to see the focus ring.</p>
<div class="swatches" data-swatches></div>
<span class="badge badge-ok" style="justify-self:start">Verified badge</span>
<span class="badge badge-demo" style="justify-self:start">Demo data badge</span>
<p style="margin:0;font-size:.82rem;color:var(--muted)">Count-up animation is reserved for verified metrics on the live site, so demo numbers stay static.</p>
<button type="button" class="thumb" data-lightbox aria-label="Open demo evidence screenshot">${demoChart}</button>
<small style="color:var(--muted)">Evidence lightbox demo: select the image.</small>
</div>
</div>
<div class="fdemo rv" data-fdemo>
<h3 style="margin:0">Project filter transition <span class="badge badge-demo">Demo</span></h3>
<div class="filters" role="group" aria-label="Demo filter">${["All", "Technical", "Local", "Content"].map((c, i) => `<button type="button" data-cat="${c}" aria-pressed="${i === 0}">${c}</button>`).join("")}</div>
<div class="fcards">${[["Sample project one", "Technical Local"], ["Sample project two", "Content"], ["Sample project three", "Technical Content"], ["Sample project four", "Local"]].map(([n, c]) => `<div class="fcard" data-cats="${c}"><b>${n}</b><span>${c.replace(" ", ", ")} &middot; demo</span></div>`).join("")}</div>
</div>`}
</div>
${compact ? "" : `<div class="pv-contact"><div><b>Hiring for SEO?</b>Pakistan agencies, in-house teams and remote roles.</div><button type="button" class="btn btn-hero">Email me</button></div>
<p class="demo-foot">Every number in this preview is demo data for layout only.</p>`}`;

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Theme Gallery | Portfolio preview</title>
<style>${css}</style>
</head>
<body id="top">
<main class="wrap">
<div class="gx-top">
<span class="eyebrow">Internal preview, not part of the live site</span>
<h1>Choose a theme for your portfolio</h1>
<div class="gx-note"><span>All metrics shown are demo data</span><span>Nothing is applied until you confirm with Claude</span><span>Every theme passes WCAG AA text contrast (4.5:1)</span></div>
</div>

<div class="picker" role="radiogroup" aria-label="Theme">
${themes.map((t, i) => `<button type="button" class="pick" role="radio" aria-checked="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-id="${t.id}">
<span class="row"><b>${t.id}. ${esc(t.name)}</b><span class="sel">Selected</span></span>
<span class="sw" aria-hidden="true">${["hero", "brand", "hero-accent", "bg", "up"].map((k) => `<i style="background:${t.tokens[k]}"></i>`).join("")}</span>
<small>${esc(t.mood)}. Motion: ${esc(t.motion.toLowerCase())}. Lowest contrast ${t.minRatio.toFixed(1)}:1</small>
</button>`).join("\n")}
</div>

<div class="views" role="group" aria-label="View">
<button type="button" data-view="single" aria-pressed="true">Full preview</button>
<button type="button" data-view="compare" aria-pressed="false">Compare all 8</button>
<span style="margin-left:auto;color:var(--muted);font-size:.9rem">Motion</span>
<button type="button" data-motion="full" aria-pressed="true">Full</button>
<button type="button" data-motion="reduced" aria-pressed="false">Reduced</button>
</div>

<section id="single" aria-label="Full theme preview">
<div class="${frameClass(themes[0])}" id="frame">${mock(false)}</div>
</section>

<section id="compare" aria-label="Compare themes" hidden style="padding:0">
<div class="compare">
${themes.map((t) => `<div class="cmp" data-id="${t.id}" data-selected="${t.id === 1}">
<div class="cmp-head"><b>${t.id}. ${esc(t.name)}</b><button type="button" class="btn btn-ghost btn-sm" data-preview="${t.id}">Preview</button></div>
<div class="${frameClass(t)}" inert>${mock(true)}</div>
</div>`).join("\n")}
</div>
</section>
</main>

<div class="confirm-bar"><div class="wrap">
<span class="now" aria-live="polite">Previewing: <b id="now-name">1. ${esc(themes[0].name)}</b></span>
<button type="button" class="btn btn-primary" id="confirm">Confirm This Theme</button>
</div></div>

<dialog id="dlg" aria-labelledby="dlg-title">
<h2 id="dlg-title">Theme <span id="dlg-name"></span></h2>
<p>This has <strong>not</strong> been applied to your portfolio. To apply it, send Claude this message:</p>
<code id="dlg-msg"></code>
<p style="font-size:.85rem;color:var(--muted)">Your pick is remembered in this browser only, so the gallery reopens on it. It is not saved anywhere else.</p>
<div class="acts"><button type="button" class="btn btn-primary" id="copy">Copy message</button><button type="button" class="btn btn-ghost" id="close">Close</button></div>
</dialog>

<dialog class="lb" id="lb" aria-label="Demo evidence screenshot">
${demoChart}
<figcaption>Demo placeholder image. On the live site this opens real GSC and GA4 screenshots. <button type="button" class="btn btn-ghost btn-sm" onclick="this.closest('dialog').close()">Close</button></figcaption>
</dialog>
<script>
document.documentElement.classList.add('js');
(()=>{
const T=${JSON.stringify(themes.map((t) => ({ id: t.id, name: t.name, tokens: t.tokens, cls: frameClass(t) })))};
${fxJs}
const picks=[...document.querySelectorAll('.pick')],frame=document.getElementById('frame'),cmps=[...document.querySelectorAll('.cmp')];
const sw=document.querySelector('[data-swatches]');let cur=1;
function select(id,focus){const changed=cur!==id;cur=id;const t=T[id-1];frame.className=t.cls;if(changed)replayFx(frame);
picks.forEach(p=>{const on=+p.dataset.id===id;p.setAttribute('aria-checked',on);p.tabIndex=on?0:-1;if(on&&focus)p.focus()});
cmps.forEach(c=>c.dataset.selected=+c.dataset.id===id);
document.getElementById('now-name').textContent=id+'. '+t.name;
sw.innerHTML=['hero','brand','hero-accent','bg'].map(k=>'<figure style="margin:0;border:0;box-shadow:none;background:none"><div style="background:'+t.tokens[k]+'"></div><span>'+t.tokens[k]+'</span></figure>').join('');
history.replaceState(null,'','#theme-'+id);try{localStorage.setItem('themePick',id)}catch(e){}}
picks.forEach((p,i)=>{p.addEventListener('click',()=>select(+p.dataset.id));
p.addEventListener('keydown',e=>{const k=e.key;let n=null;if(k==='ArrowRight'||k==='ArrowDown')n=(i+1)%picks.length;if(k==='ArrowLeft'||k==='ArrowUp')n=(i-1+picks.length)%picks.length;if(k==='Home')n=0;if(k==='End')n=picks.length-1;
if(n!==null){e.preventDefault();select(+picks[n].dataset.id,true)}})});
const views=[...document.querySelectorAll('[data-view]')];
function view(v){views.forEach(b=>b.setAttribute('aria-pressed',b.dataset.view===v));document.getElementById('single').hidden=v!=='single';document.getElementById('compare').hidden=v!=='compare'}
views.forEach(b=>b.addEventListener('click',()=>view(b.dataset.view)));
document.querySelectorAll('[data-preview]').forEach(b=>b.addEventListener('click',()=>{select(+b.dataset.preview);view('single');frame.scrollIntoView({behavior:'smooth',block:'start'})}));
const dlg=document.getElementById('dlg'),msg=document.getElementById('dlg-msg');
document.getElementById('confirm').addEventListener('click',()=>{const t=T[cur-1];document.getElementById('dlg-name').textContent=cur+': '+t.name;msg.textContent='Apply theme '+cur+' ('+t.name+')';dlg.showModal()});
document.getElementById('close').addEventListener('click',()=>dlg.close());
document.getElementById('copy').addEventListener('click',async e=>{try{await navigator.clipboard.writeText(msg.textContent);e.target.textContent='Copied'}catch(x){e.target.textContent='Copy failed, select the text above'}});
let start=1;const h=location.hash.match(/theme-(\\d)/);if(h)start=+h[1];else{try{start=+localStorage.getItem('themePick')||1}catch(e){}}
const wantCompare=location.hash==='#compare';
document.documentElement.classList.add('no-tr');
select(start>=1&&start<=8?start:1);if(wantCompare)view('compare');
requestAnimationFrame(()=>requestAnimationFrame(()=>document.documentElement.classList.remove('no-tr')));
})();
</script>
</body>
</html>
`;

await mkdir(out, { recursive: true });
await writeFile(path.join(out, "index.html"), html);
console.log(`Theme gallery: ${themes.length} themes, all pairs at or above 4.5:1. Lowest: ${Math.min(...themes.map((t) => t.minRatio)).toFixed(2)}:1`);
