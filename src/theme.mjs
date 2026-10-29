// Live site palette: Theme 1, Midnight Navy (chosen 29 Oct 2026 from the theme gallery).
// build.mjs writes these into :root and fails the build if any text pair drops below 4.5:1.

const shared = { hero: "#0b1b3a", "hero-ink": "#ffffff", "hero-muted": "#b8c4dc", "hero-accent": "#60a5fa" };

export const light = {
  ...shared,
  bg: "#f5f7fb", surface: "#ffffff", "surface-2": "#e9eef7", ink: "#0b1b3a", text: "#26344f", muted: "#55627a", line: "#d8dfeb",
  brand: "#1d4ed8", "brand-ink": "#ffffff", up: "#047857", "up-bg": "#e3f4ec", warn: "#8a5a00", "warn-bg": "#fff4dc",
};

export const dark = {
  ...shared,
  bg: "#07111f", surface: "#0d1a2e", "surface-2": "#14233d", ink: "#f1f5fb", text: "#c5d0e2", muted: "#94a3bb", line: "#1f3152",
  brand: "#60a5fa", "brand-ink": "#07111f", up: "#34d399", "up-bg": "#0c2a22", warn: "#fbbf24", "warn-bg": "#2a210c",
};

// Motion settings for the Midnight Navy effects (grid, glow, network, graph).
export const fxVars = { "glow-o": ".32", "grid-o": ".10", "grid-size": "34px", spd: "1" };

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
