// Live site palette: "Studio", a light portfolio style with one coral accent (29 Oct 2026).
// Replaced Modern Emerald. build.mjs writes these into :root and fails the build below 4.5:1.
// hero* tokens style the hero, header and case bands; in Studio they match the page surface.

export const light = {
  bg: "#ffffff", surface: "#ffffff", "surface-2": "#f4f4f5", ink: "#141416", text: "#3a3a40", muted: "#5f5f66", line: "#e4e4e7",
  brand: "#cf2e2e", "brand-ink": "#ffffff", up: "#141416", "up-bg": "#ececee", warn: "#8a5a00", "warn-bg": "#fff4dc",
  hero: "#ffffff", "hero-ink": "#141416", "hero-muted": "#5f5f66", "hero-accent": "#cf2e2e",
};

export const dark = {
  bg: "#0f0f10", surface: "#19191b", "surface-2": "#202023", ink: "#f5f5f6", text: "#d4d4d8", muted: "#a1a1aa", line: "#2c2c30",
  brand: "#ff6b5e", "brand-ink": "#0f0f10", up: "#f5f5f6", "up-bg": "#26262a", warn: "#fbbf24", "warn-bg": "#2a210c",
  hero: "#0f0f10", "hero-ink": "#f5f5f6", "hero-muted": "#a1a1aa", "hero-accent": "#ff6b5e",
};

// The contact block stays dark in both modes; its local palette is checked too.
export const contactDark = { hero: "#141416", "hero-ink": "#ffffff", "hero-muted": "#c4c4c9", "hero-accent": "#ff6b5e" };

// Motion settings for the Studio hero (a faint glow on case bands, graph card on home).
export const fxVars = { "glow-o": ".10", "grid-o": "0", "grid-size": "40px", spd: "1" };

export const contrastPairs = [
  ["text", "bg"], ["text", "surface"], ["muted", "bg"], ["muted", "surface"], ["muted", "surface-2"], ["ink", "surface"],
  ["brand", "surface"], ["brand", "bg"], ["brand-ink", "brand"], ["up", "surface"], ["up", "up-bg"], ["warn", "warn-bg"],
  ["hero-ink", "hero"], ["hero-muted", "hero"], ["hero-accent", "hero"],
];

const lum = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
export const contrast = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };

const block = (t) => Object.entries(t).map(([k, v]) => `--${k}:${v}`).join(";");
const darkShadow = "--shadow:0 1px 2px rgba(0,0,0,.35),0 8px 24px rgba(0,0,0,.3)";
// :root colour tokens with system dark mode plus explicit data-theme overrides.
export const rootCss = () => `:root{${block(light)};color-scheme:light}
@media (prefers-color-scheme: dark){:root:not([data-theme="light"]){${block(dark)};${darkShadow};color-scheme:dark}}
:root[data-theme="dark"]{${block(dark)};${darkShadow};color-scheme:dark}`;

export const assertContrast = () => {
  const fails = [];
  for (const [mode, t] of [["light", light], ["dark", dark], ["contact", { ...light, ...contactDark }]]) for (const [f, b] of contrastPairs) {
    const r = contrast(t[f], t[b]);
    if (r < 4.5) fails.push(`${mode}: ${f} on ${b} is ${r.toFixed(2)}:1`);
  }
  if (fails.length) throw new Error(`Contrast below 4.5:1\n${fails.join("\n")}`);
};
