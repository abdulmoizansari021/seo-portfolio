// Live site palette: Theme 2, Modern Emerald (chosen 29 Oct 2026 from the theme gallery; replaced Midnight Navy).
// build.mjs writes these into :root and fails the build if any text pair drops below 4.5:1.

const shared = { hero: "#0f2a1f", "hero-ink": "#f7f6f1", "hero-muted": "#b9c9bf", "hero-accent": "#34d399" };

export const light = {
  ...shared,
  bg: "#f7f6f1", surface: "#ffffff", "surface-2": "#ecefe8", ink: "#0f2a1f", text: "#2b3b33", muted: "#5a6b62", line: "#dde3dc",
  brand: "#047857", "brand-ink": "#ffffff", up: "#047857", "up-bg": "#e1f3ea", warn: "#8a5a00", "warn-bg": "#fff4dc",
};

export const dark = {
  ...shared,
  bg: "#08140f", surface: "#0e1f18", "surface-2": "#142a21", ink: "#eef5f0", text: "#c3d3c9", muted: "#93a89b", line: "#1f3a2e",
  brand: "#34d399", "brand-ink": "#08140f", up: "#34d399", "up-bg": "#0c2a1f", warn: "#fbbf24", "warn-bg": "#2a210c",
};

// Motion settings for the Modern Emerald effects (glow, growth bars, graph).
export const fxVars = { "glow-o": ".30", "grid-o": "0", "grid-size": "40px", spd: "1" };

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
  for (const [mode, t] of [["light", light], ["dark", dark]]) for (const [f, b] of contrastPairs) {
    const r = contrast(t[f], t[b]);
    if (r < 4.5) fails.push(`${mode}: ${f} on ${b} is ${r.toFixed(2)}:1`);
  }
  if (fails.length) throw new Error(`Contrast below 4.5:1\n${fails.join("\n")}`);
};
