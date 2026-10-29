// Motion and decorative effects for the theme gallery. CSS transforms and opacity only,
// so nothing shifts layout. Each theme switches layers on with `has-<layer>` classes.
// Everything stops under prefers-reduced-motion or the gallery's "Reduced" switch.

const colorTokens = ["bg", "surface", "surface-2", "ink", "text", "muted", "line", "brand", "brand-ink", "up", "up-bg", "hero", "hero-ink", "hero-muted", "hero-accent"];

const reducedRules = (p) => `
${p} .L, ${p} .L *, ${p} .ln > span, ${p} .gb, ${p} .lb[open] { animation: none !important; }
${p} .L { transform: none !important; }
${p} .rv { opacity: 1 !important; transform: none !important; transition: none !important; }
${p} .tilt { transform: none !important; }
${p} .L-graph .draw { stroke-dashoffset: 0 !important; }
${p} .L-bars i { transform: none !important; }
${p} .L-shard i { transform: skewX(-20deg) !important; }`;

export const fxCss = `
${colorTokens.map((t) => `@property --${t} { syntax: "<color>"; inherits: true; initial-value: transparent; }`).join("\n")}
@property --ang { syntax: "<angle>"; inherits: false; initial-value: 0deg; }
.frame { transition: ${colorTokens.map((t) => `--${t} .55s ease`).join(", ")}; }
.no-tr .frame, .no-tr .frame * { transition: none !important; }

/* hero stage */
.pv-hero { position: relative; overflow: hidden; isolation: isolate; }
.fx { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
.pv-content { position: relative; z-index: 2; max-width: 640px; }
.L { display: none; position: absolute; inset: 0; transform: translate3d(calc(var(--px, 0) * var(--d, 0) * 1px), calc(var(--py, 0) * var(--d, 0) * 1px), 0); transition: transform .4s cubic-bezier(.2,.7,.2,1); }
.has-grid .L-grid, .has-glow .L-glow, .has-net .L-net, .has-bars .L-bars, .has-wave .L-wave, .has-geo .L-geo,
.has-shard .L-shard, .has-planes .L-planes, .has-scan .L-scan, .has-orn .L-orn, .has-graph .L-graph { display: block; }
.fx-scrim { position: absolute; inset: 0; background: linear-gradient(90deg, var(--hero) 0%, color-mix(in srgb, var(--hero) 82%, transparent) 42%, transparent 78%); }
@media (max-width: 720px) { .fx-scrim { background: color-mix(in srgb, var(--hero) 72%, transparent); } }

/* grid */
.L-grid i { position: absolute; inset: calc(var(--grid-size) * -1); background-image: linear-gradient(color-mix(in srgb, var(--hero-accent) calc(var(--grid-o) * 100%), transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--hero-accent) calc(var(--grid-o) * 100%), transparent) 1px, transparent 1px); background-size: var(--grid-size) var(--grid-size); -webkit-mask-image: radial-gradient(ellipse 70% 80% at 75% 40%, #000 20%, transparent 75%); mask-image: radial-gradient(ellipse 70% 80% at 75% 40%, #000 20%, transparent 75%); animation: fx-pan calc(9s * var(--spd)) linear infinite; }
@keyframes fx-pan { to { transform: translate3d(var(--grid-size), var(--grid-size), 0); } }

/* glow blobs (radial gradients, no blur filter) */
.L-glow i { position: absolute; width: 60%; aspect-ratio: 1; border-radius: 50%; opacity: var(--glow-o); background: radial-gradient(circle at center, var(--hero-accent) 0%, transparent 62%); animation: fx-drift calc(16s * var(--spd)) ease-in-out infinite; }
.L-glow .b1 { right: -12%; top: -30%; }
.L-glow .b2 { right: 20%; bottom: -45%; background: radial-gradient(circle at center, var(--brand) 0%, transparent 60%); animation-delay: -6s; }
.L-glow .b3 { right: -5%; bottom: -20%; width: 40%; animation-delay: -11s; }
@keyframes fx-drift { 0%, 100% { transform: translate3d(0, 0, 0) scale(1); } 50% { transform: translate3d(-6%, 5%, 0) scale(1.1); } }

/* network */
.L-net svg { position: absolute; right: 0; top: 0; width: 62%; height: 100%; }
.L-net line { stroke: var(--hero-accent); stroke-opacity: .28; stroke-width: 1; }
.L-net circle { fill: var(--hero-accent); transform-box: fill-box; transform-origin: center; animation: fx-pulse calc(4s * var(--spd)) ease-in-out infinite; }
.L-net circle:nth-child(3n) { animation-delay: -1.3s; } .L-net circle:nth-child(3n+1) { animation-delay: -2.6s; }
@keyframes fx-pulse { 0%, 100% { transform: scale(1); opacity: .85; } 50% { transform: scale(1.7); opacity: .35; } }

/* growth bars */
.L-bars { display: none; }
.has-bars .L-bars { display: flex; align-items: flex-end; gap: 3%; position: absolute; inset: auto 6% 0 auto; width: 42%; height: 72%; }
.L-bars i { flex: 1; height: var(--h); border-radius: 6px 6px 0 0; background: linear-gradient(to top, color-mix(in srgb, var(--hero-accent) 8%, transparent), color-mix(in srgb, var(--hero-accent) 34%, transparent)); transform-origin: bottom; animation: fx-rise 1.1s cubic-bezier(.2,.7,.2,1) both, fx-breathe calc(6s * var(--spd)) ease-in-out 1.2s infinite; animation-delay: calc(var(--i) * 90ms), calc(1.2s + var(--i) * 300ms); }
@keyframes fx-rise { from { transform: scaleY(.1); } to { transform: scaleY(1); } }
@keyframes fx-breathe { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(.93); } }

/* waves */
.L-wave svg { position: absolute; left: 0; bottom: 0; width: 200%; height: 46%; animation: fx-wave calc(18s * var(--spd)) linear infinite; }
.L-wave .w2 { animation-duration: calc(26s * var(--spd)); animation-direction: reverse; height: 36%; }
.L-wave path { fill: none; stroke: var(--hero-accent); stroke-width: 1.5; stroke-opacity: .35; }
.L-wave .w2 path { stroke: var(--brand); stroke-opacity: .5; }
@keyframes fx-wave { to { transform: translate3d(-50%, 0, 0); } }

/* clean geometry (monochrome) */
.L-geo i { position: absolute; border: 1px solid color-mix(in srgb, var(--hero-ink) 22%, transparent); }
.L-geo .g1 { width: 300px; height: 300px; border-radius: 50%; right: -60px; top: -80px; animation: fx-spin calc(60s * var(--spd)) linear infinite; border-style: dashed; }
.L-geo .g2 { width: 180px; height: 180px; right: 120px; bottom: -60px; animation: fx-spin calc(40s * var(--spd)) linear infinite reverse; }
.L-geo .g3 { width: 1px; height: 140%; right: 34%; top: -20%; border: 0; background: linear-gradient(transparent, color-mix(in srgb, var(--hero-ink) 25%, transparent), transparent); transform: rotate(18deg); }
@keyframes fx-spin { to { transform: rotate(360deg); } }

/* bold shards (charcoal and orange) */
.L-shard i { position: absolute; height: 14px; border-radius: 3px; background: var(--hero-accent); transform-origin: right; transform: skewX(-20deg); animation: fx-shard .9s cubic-bezier(.2,.8,.2,1) both, fx-float calc(7s * var(--spd)) ease-in-out 1s infinite; }
.L-shard .s1 { right: 6%; top: 22%; width: 26%; animation-delay: .15s, 1s; }
.L-shard .s2 { right: 14%; top: 34%; width: 14%; opacity: .55; animation-delay: .3s, 1.6s; }
.L-shard .s3 { right: 3%; top: 70%; width: 20%; opacity: .35; height: 8px; animation-delay: .45s, 2.2s; }
@keyframes fx-shard { from { transform: skewX(-20deg) scaleX(0); } to { transform: skewX(-20deg) scaleX(1); } }
@keyframes fx-float { 0%, 100% { translate: 0 0; } 50% { translate: 0 -8px; } }

/* layered planes (royal purple) */
.L-planes i { position: absolute; width: 46%; height: 70%; border-radius: 28px; background: linear-gradient(135deg, color-mix(in srgb, var(--hero-accent) 30%, transparent), transparent 70%); border: 1px solid color-mix(in srgb, var(--hero-accent) 25%, transparent); animation: fx-plane calc(14s * var(--spd)) ease-in-out infinite; }
.L-planes .p1 { right: -6%; top: 8%; rotate: -12deg; }
.L-planes .p2 { right: 8%; top: 22%; rotate: 8deg; opacity: .6; animation-delay: -5s; }
@keyframes fx-plane { 0%, 100% { transform: translate3d(0, 0, 0); } 50% { transform: translate3d(-14px, 10px, 0); } }

/* scan line (slate and cyan) */
.L-scan i { position: absolute; left: 30%; right: 0; height: 80px; background: linear-gradient(transparent, color-mix(in srgb, var(--hero-accent) 18%, transparent), transparent); border-bottom: 1px solid color-mix(in srgb, var(--hero-accent) 45%, transparent); animation: fx-scan calc(5.5s * var(--spd)) linear infinite; }
@keyframes fx-scan { from { transform: translate3d(0, -100px, 0); } to { transform: translate3d(0, 520px, 0); } }

/* ornament (sand and burgundy) */
.L-orn i { position: absolute; inset: 14px; border: 1px solid color-mix(in srgb, var(--hero-accent) 35%, transparent); border-radius: 12px; }
.L-orn i::after { content: ""; position: absolute; inset: 6px; border: 1px solid color-mix(in srgb, var(--hero-accent) 18%, transparent); border-radius: 9px; }
.L-orn b { position: absolute; right: 9%; top: 18%; width: 12px; height: 12px; rotate: 45deg; background: var(--hero-accent); opacity: .7; animation: fx-float calc(8s * var(--spd)) ease-in-out infinite; }

/* SEO graph */
.L-graph svg { position: absolute; right: 2%; bottom: 8%; width: 46%; max-width: 520px; height: auto; overflow: visible; }
.L-graph .area { fill: color-mix(in srgb, var(--hero-accent) 10%, transparent); }
.L-graph .draw { fill: none; stroke: var(--hero-accent); stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 1; stroke-dashoffset: 1; }
.play .L-graph .draw { animation: fx-draw 1.8s cubic-bezier(.4,.1,.2,1) .2s forwards; }
.L-graph .base { fill: none; stroke: var(--hero-muted); stroke-opacity: .45; stroke-width: 1.5; stroke-dasharray: 5 6; }
.L-graph .pt { fill: var(--hero); stroke: var(--hero-accent); stroke-width: 2.5; transform-box: fill-box; transform-origin: center; animation: fx-pulse calc(3.2s * var(--spd)) ease-in-out infinite; }
.L-graph .chip { position: absolute; font-size: .72rem; font-weight: 600; letter-spacing: .03em; padding: 5px 10px; border-radius: 999px; color: var(--hero-ink); background: color-mix(in srgb, var(--hero-ink) 10%, transparent); border: 1px solid color-mix(in srgb, var(--hero-ink) 18%, transparent); animation: fx-float calc(6s * var(--spd)) ease-in-out infinite; }
.L-graph .c1 { right: 36%; top: 18%; } .L-graph .c2 { right: 8%; top: 30%; animation-delay: -2s; } .L-graph .c3 { right: 24%; bottom: 10%; animation-delay: -4s; }
@keyframes fx-draw { to { stroke-dashoffset: 0; } }
@media (max-width: 720px) { .L-graph svg { width: 80%; right: -10%; opacity: .55; } .L-graph .chip { display: none; } }

/* text reveal */
.ln { display: block; overflow: hidden; padding-bottom: .06em; }
.ln > span { display: inline-block; }
.play .ln > span { animation: fx-up .75s cubic-bezier(.2,.7,.2,1) both; animation-delay: var(--dl, 0s); }
@keyframes fx-up { from { transform: translate3d(0, 105%, 0); opacity: 0; } to { transform: none; opacity: 1; } }

/* scroll reveal: content is visible without JS, hidden only once JS is confirmed */
.js .rv { opacity: 0; transform: translate3d(0, 18px, 0); transition: opacity .6s ease, transform .6s cubic-bezier(.2,.7,.2,1); transition-delay: calc(var(--i, 0) * 70ms); }
.js .rv.in { opacity: 1; transform: none; }

/* buttons, cards, depth */
.frame .btn { transition: transform .2s ease, box-shadow .25s ease, background-color .25s ease, color .25s ease; }
.frame .btn:hover { transform: translateY(-2px); box-shadow: 0 8px 22px color-mix(in srgb, var(--brand) 30%, transparent); }
.btn-hero:hover { box-shadow: 0 8px 26px color-mix(in srgb, var(--hero-accent) 45%, transparent) !important; }
.frame .stat { transition: transform .3s cubic-bezier(.2,.7,.2,1), box-shadow .3s; }
.frame .stat:hover { transform: translateY(-4px); box-shadow: 0 14px 34px rgba(13, 23, 38, .12); }
.tilt { transform: perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) translate3d(0, var(--lift, 0px), 0); transition: transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s; will-change: transform; }
.tilt:hover, .tilt:focus-within { --lift: -6px; box-shadow: 0 22px 48px rgba(13, 23, 38, .16); }
.gb { border-radius: calc(var(--radius) + 2px); padding: 2px; background: conic-gradient(from var(--ang), var(--brand), var(--hero-accent), transparent 35%, transparent 65%, var(--brand)); animation: fx-ang calc(7s * var(--spd)) linear infinite; }
.gb > .card { border: 0; height: 100%; }
@keyframes fx-ang { to { --ang: 360deg; } }

/* progressive detail overlay on the chart area, so card height never changes */
.pv-chart { position: relative; overflow: hidden; }
.more { position: absolute; inset: 0; padding: 14px 16px; background: color-mix(in srgb, var(--hero) 92%, transparent); color: var(--hero-ink); font-size: .88rem; display: grid; align-content: center; gap: 4px; transform: translate3d(0, 100%, 0); transition: transform .4s cubic-bezier(.2,.7,.2,1); }
.more b { color: var(--hero-accent); }
.tilt:hover .more, .tilt:focus-within .more { transform: none; }
@media (hover: none) { .more { position: static; transform: none; background: var(--hero); } }

/* filter demo */
.fdemo { margin-top: 26px; }
.fcards { display: grid; gap: 12px; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); margin-top: 12px; }
.fcard { background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 14px; transition: opacity .3s ease, transform .3s cubic-bezier(.2,.7,.2,1); }
.fcard.out { opacity: 0; transform: scale(.95); }
.fcard b { color: var(--ink); display: block; }
.fcard span { font-size: .8rem; color: var(--muted); }

/* lightbox demo */
.thumb { all: unset; cursor: zoom-in; display: block; border-radius: 12px; overflow: hidden; border: 1px solid var(--line); background: var(--surface-2); transition: transform .3s, box-shadow .3s; }
.thumb:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(13, 23, 38, .14); }
.thumb:focus-visible { outline: 3px solid var(--brand); outline-offset: 2px; }
.thumb svg, .lb svg { display: block; width: 100%; height: auto; }
.lb { max-width: min(900px, calc(100% - 32px)); padding: 0; overflow: hidden; }
.lb[open] { animation: fx-lb .35s cubic-bezier(.2,.7,.2,1); }
.lb[open]::backdrop { animation: fx-fade .35s ease; }
.lb figcaption { padding: 12px 16px; font-size: .88rem; }
@keyframes fx-lb { from { opacity: 0; transform: scale(.94) translateY(10px); } to { opacity: 1; transform: none; } }
@keyframes fx-fade { from { opacity: 0; } }

/* pause states: decorative layers only, so text reveals never stall half-hidden */
.paused .frame .fx *, .frame.idle .fx *, .paused .frame .gb, .frame.idle .gb { animation-play-state: paused !important; }

/* compact compare tiles */
.cmp .pv-content { max-width: none; }
.cmp .L-graph svg { width: 70%; right: -6%; bottom: 4%; opacity: .7; }
.cmp .L-graph .chip, .cmp .fx-scrim { display: none; }
.cmp .pv-hero::after { content: ""; position: absolute; inset: 0; z-index: 1; background: linear-gradient(180deg, color-mix(in srgb, var(--hero) 70%, transparent), color-mix(in srgb, var(--hero) 30%, transparent)); }

@media (prefers-reduced-motion: reduce) { ${reducedRules("html")} }
${reducedRules(".rm")}
`;

const net = (() => {
  const pts = [[60, 40], [140, 90], [230, 50], [300, 130], [210, 170], [120, 200], [330, 60], [380, 180], [270, 230], [40, 150]];
  const edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [1, 4], [2, 6], [6, 3], [3, 7], [4, 8], [5, 9], [9, 1], [7, 8]];
  return `<svg viewBox="0 0 420 260" preserveAspectRatio="xMidYMid slice">${edges.map(([a, b]) => `<line x1="${pts[a][0]}" y1="${pts[a][1]}" x2="${pts[b][0]}" y2="${pts[b][1]}"/>`).join("")}${pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3"/>`).join("")}</svg>`;
})();

const wavePath = (amp, y) => {
  let d = `M0 ${y}`;
  for (let x = 0; x < 960; x += 120) d += ` Q${x + 30} ${y - amp} ${x + 60} ${y} T${x + 120} ${y}`;
  return d;
};

const graphPts = [[0, 210], [40, 204], [80, 208], [120, 190], [160, 186], [200, 166], [240, 160], [280, 136], [320, 122], [360, 96], [400, 82], [440, 56], [480, 42]];
const line = graphPts.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join(" ");

// `only` limits the markup to the named layers (the live site uses four); all layers by default.
export const heroFx = (compact, only) => { const on = (n) => !only || only.includes(n); return `<div class="fx" aria-hidden="true">
${on("grid") ? `<div class="L L-grid" style="--d:6"><i></i></div>` : ""}
${on("glow") ? `<div class="L L-glow" style="--d:22"><i class="b1"></i><i class="b2"></i><i class="b3"></i></div>` : ""}
${on("planes") ? `<div class="L L-planes" style="--d:18"><i class="p1"></i><i class="p2"></i></div>` : ""}
${on("net") ? `<div class="L L-net" style="--d:12">${net}</div>` : ""}
${on("bars") ? `<div class="L-bars" style="--d:10">${[30, 42, 38, 55, 62, 74, 88].map((h, i) => `<i style="--h:${h}%;--i:${i}"></i>`).join("")}</div>` : ""}
${on("wave") ? `<div class="L L-wave" style="--d:8"><svg viewBox="0 0 960 120" preserveAspectRatio="none"><path d="${wavePath(26, 70)}"/></svg><svg class="w2" viewBox="0 0 960 120" preserveAspectRatio="none"><path d="${wavePath(18, 80)}"/></svg></div>` : ""}
${on("geo") ? `<div class="L L-geo" style="--d:14"><i class="g1"></i><i class="g2"></i><i class="g3"></i></div>` : ""}
${on("shard") ? `<div class="L L-shard" style="--d:20"><i class="s1"></i><i class="s2"></i><i class="s3"></i></div>` : ""}
${on("scan") ? `<div class="L L-scan"><i></i></div>` : ""}
${on("orn") ? `<div class="L L-orn" style="--d:4"><i></i><b></b></div>` : ""}
<div class="fx-scrim"></div>
${on("graph") ? `<div class="L L-graph" style="--d:${compact ? 6 : 14}">
<svg viewBox="0 0 480 240"><path class="area" d="${line} L480 240 L0 240 Z"/><path class="base" d="M0 222 L480 214"/><path class="draw" pathLength="1" d="${line}"/>${[graphPts[5], graphPts[9], graphPts[12]].map(([x, y]) => `<circle class="pt" cx="${x}" cy="${y}" r="5"/>`).join("")}</svg>
${compact ? "" : `<span class="chip c1">Clicks</span><span class="chip c2">Position</span><span class="chip c3">Impressions</span>`}
</div>` : ""}
</div>`; };

export const demoChart = `<svg viewBox="0 0 640 300" role="img" aria-label="Demo chart: two lines rising over time"><rect width="640" height="300" fill="var(--surface)"/><g stroke="var(--line)">${[60, 120, 180, 240].map((y) => `<line x1="40" x2="620" y1="${y}" y2="${y}"/>`).join("")}</g><polyline points="40,250 100,240 160,244 220,220 280,214 340,190 400,176 460,150 520,128 580,100 620,86" fill="none" stroke="var(--brand)" stroke-width="3"/><polyline points="40,262 100,258 160,260 220,250 280,246 340,236 400,230 460,218 520,206 580,196 620,188" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="6 6"/><text x="40" y="34" fill="var(--muted)" font-size="16" font-family="system-ui, sans-serif">DEMO screenshot placeholder, not real data</text></svg>`;

// Client-side controller: parallax, tilt, scroll reveal, replay on theme change,
// pausing when hidden or off screen, and the motion switch.
export const fxJs = `
const motionOK=()=>!document.documentElement.classList.contains('rm')&&!matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine=matchMedia('(hover: hover) and (pointer: fine)');
document.querySelectorAll('.pv-hero').forEach(h=>{let raf=0;h.addEventListener('pointermove',e=>{if(!motionOK()||!fine.matches)return;cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>{const r=h.getBoundingClientRect();h.style.setProperty('--px',((e.clientX-r.left)/r.width-.5).toFixed(3));h.style.setProperty('--py',((e.clientY-r.top)/r.height-.5).toFixed(3))})});
h.addEventListener('pointerleave',()=>{h.style.setProperty('--px',0);h.style.setProperty('--py',0)})});
document.querySelectorAll('.tilt').forEach(c=>{c.addEventListener('pointermove',e=>{if(!motionOK()||!fine.matches)return;const r=c.getBoundingClientRect();c.style.setProperty('--ry',(((e.clientX-r.left)/r.width-.5)*6).toFixed(2)+'deg');c.style.setProperty('--rx',(((e.clientY-r.top)/r.height-.5)*-6).toFixed(2)+'deg')});
c.addEventListener('pointerleave',()=>{c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg')})});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
const idle=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('idle',!e.isIntersecting)));
document.querySelectorAll('.frame').forEach(f=>idle.observe(f));
document.addEventListener('visibilitychange',()=>document.body.classList.toggle('paused',document.hidden));
window.replayFx=f=>{f.classList.remove('play');void f.offsetWidth;f.classList.add('play')};
const mb=[...document.querySelectorAll('[data-motion]')];
const setMotion=m=>{document.documentElement.classList.toggle('rm',m==='reduced');mb.forEach(b=>b.setAttribute('aria-pressed',b.dataset.motion===m))};
mb.forEach(b=>b.addEventListener('click',()=>setMotion(b.dataset.motion)));
setMotion(matchMedia('(prefers-reduced-motion: reduce)').matches?'reduced':'full');
document.querySelectorAll('[data-fdemo]').forEach(g=>{const bs=[...g.querySelectorAll('[data-cat]')],cs=[...g.querySelectorAll('.fcard')];
bs.forEach(b=>b.addEventListener('click',()=>{bs.forEach(x=>x.setAttribute('aria-pressed',x===b));const c=b.dataset.cat;
cs.forEach(k=>{const show=c==='All'||k.dataset.cats.split(' ').includes(c);if(show){k.hidden=false;requestAnimationFrame(()=>k.classList.remove('out'))}else{k.classList.add('out');setTimeout(()=>{if(k.classList.contains('out'))k.hidden=true},motionOK()?300:0)}})}))});
const lb=document.getElementById('lb');document.querySelectorAll('[data-lightbox]').forEach(t=>t.addEventListener('click',()=>lb.showModal()));
lb&&lb.addEventListener('click',e=>{if(e.target===lb)lb.close()});
`;
