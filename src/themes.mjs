// Candidate palettes for the theme gallery. Token names match src/styles.css so the
// chosen theme can be dropped into :root unchanged. hero* tokens style dark surfaces
// (hero band, contact block). Not used by the live site until a theme is confirmed.

export const themes = [
  {
    id: 1, name: "Midnight Navy", mood: "Corporate and trustworthy", fx: "grid glow net graph", motion: "Subtle blue glow, grid lines and a data network", fxVars: "--glow-o:.32;--grid-o:.10;--grid-size:34px;--spd:1",
    tokens: { bg: "#f5f7fb", surface: "#ffffff", "surface-2": "#e9eef7", ink: "#0b1b3a", text: "#26344f", muted: "#55627a", line: "#d8dfeb", brand: "#1d4ed8", "brand-ink": "#ffffff", up: "#047857", "up-bg": "#e3f4ec", hero: "#0b1b3a", "hero-ink": "#ffffff", "hero-muted": "#b8c4dc", "hero-accent": "#60a5fa" },
  },
  {
    id: 2, name: "Modern Emerald", mood: "Growth-focused and premium", fx: "glow bars graph", motion: "Soft green gradients and rising growth bars", fxVars: "--glow-o:.30;--grid-o:0;--grid-size:40px;--spd:1",
    tokens: { bg: "#f7f6f1", surface: "#ffffff", "surface-2": "#ecefe8", ink: "#0f2a1f", text: "#2b3b33", muted: "#5a6b62", line: "#dde3dc", brand: "#047857", "brand-ink": "#ffffff", up: "#047857", "up-bg": "#e1f3ea", hero: "#0f2a1f", "hero-ink": "#f7f6f1", "hero-muted": "#b9c9bf", "hero-accent": "#34d399" },
  },
  {
    id: 3, name: "Royal Purple", mood: "Modern and technology-oriented", fx: "glow planes graph", motion: "Layered gradient planes with refined glow", fxVars: "--glow-o:.42;--grid-o:0;--grid-size:40px;--spd:1",
    tokens: { bg: "#f8f6fc", surface: "#ffffff", "surface-2": "#efeaf8", ink: "#241338", text: "#3a2f4d", muted: "#625a73", line: "#e2dbee", brand: "#6d28d9", "brand-ink": "#ffffff", up: "#047857", "up-bg": "#e3f4ec", hero: "#1e1033", "hero-ink": "#ffffff", "hero-muted": "#c7bce0", "hero-accent": "#a78bfa" },
  },
  {
    id: 4, name: "Minimal Monochrome", mood: "Clean, elegant and recruiter-friendly", fx: "geo graph", motion: "Restrained motion and clean line geometry", fxVars: "--glow-o:0;--grid-o:0;--grid-size:40px;--spd:1.6",
    tokens: { bg: "#fafafa", surface: "#ffffff", "surface-2": "#f0f0f0", ink: "#0a0a0a", text: "#262626", muted: "#595959", line: "#e0e0e0", brand: "#111111", "brand-ink": "#ffffff", up: "#0a0a0a", "up-bg": "#ececec", hero: "#0a0a0a", "hero-ink": "#ffffff", "hero-muted": "#bdbdbd", "hero-accent": "#ffffff" },
  },
  {
    id: 5, name: "Ocean Blue", mood: "Analytical and professional", fx: "glow wave graph", motion: "Fluid gradient drift and wave lines", fxVars: "--glow-o:.30;--grid-o:0;--grid-size:40px;--spd:1.2",
    tokens: { bg: "#f2f7fb", surface: "#ffffff", "surface-2": "#e4eef6", ink: "#0a2540", text: "#24405c", muted: "#4f6478", line: "#d3e1ec", brand: "#0f766e", "brand-ink": "#ffffff", up: "#0f766e", "up-bg": "#ddf2ef", hero: "#0a2540", "hero-ink": "#ffffff", "hero-muted": "#b3c7da", "hero-accent": "#2dd4bf" },
  },
  {
    id: 6, name: "Charcoal and Orange", mood: "Bold and confident", fx: "shard glow graph", motion: "Bold accent reveals and geometric highlights", fxVars: "--glow-o:.16;--grid-o:0;--grid-size:40px;--spd:.9",
    tokens: { bg: "#f7f7f6", surface: "#ffffff", "surface-2": "#eeeeec", ink: "#1f2023", text: "#33353a", muted: "#5f6168", line: "#e1e1de", brand: "#c2410c", "brand-ink": "#ffffff", up: "#166534", "up-bg": "#e6f4ea", hero: "#1f2023", "hero-ink": "#ffffff", "hero-muted": "#c4c5c9", "hero-accent": "#fb923c" },
  },
  {
    id: 7, name: "Slate and Cyan", mood: "Technical and data-driven", fx: "grid scan graph", motion: "Technical grid, scan line and data motion", fxVars: "--glow-o:0;--grid-o:.14;--grid-size:22px;--spd:1",
    tokens: { bg: "#f6f8fa", surface: "#ffffff", "surface-2": "#e9eef3", ink: "#0f172a", text: "#334155", muted: "#5b6778", line: "#dbe2ea", brand: "#0e7490", "brand-ink": "#ffffff", up: "#0e7490", "up-bg": "#e0f2f6", hero: "#1e293b", "hero-ink": "#ffffff", "hero-muted": "#b6c2d1", "hero-accent": "#22d3ee" },
  },
  {
    id: 8, name: "Warm Sand and Burgundy", mood: "Refined and distinctive", fx: "glow orn graph", motion: "Soft lighting and fine decorative detail", fxVars: "--glow-o:.20;--grid-o:0;--grid-size:40px;--spd:1.5",
    tokens: { bg: "#f6f1ea", surface: "#fffdf9", "surface-2": "#efe6da", ink: "#2a1418", text: "#45333a", muted: "#6b5a55", line: "#e6dacb", brand: "#7f1d3a", "brand-ink": "#ffffff", up: "#7a5a12", "up-bg": "#f5ecd6", hero: "#3b0f1e", "hero-ink": "#f6f1ea", "hero-muted": "#d9c3b8", "hero-accent": "#d4af6a" },
  },
];

// Foreground/background pairs that must reach WCAG AA (4.5:1) in every theme.
export const contrastPairs = [
  ["text", "bg"], ["text", "surface"], ["muted", "bg"], ["muted", "surface"], ["muted", "surface-2"],
  ["ink", "surface"], ["brand", "surface"], ["brand", "bg"], ["brand-ink", "brand"], ["up", "surface"], ["up", "up-bg"],
  ["hero-ink", "hero"], ["hero-muted", "hero"], ["hero-accent", "hero"],
];
