// Pre-publish checks: internal links resolve, no private data or secrets leaked into dist/.
// Client names live in an untracked private-terms.txt so the check itself never publishes them.
import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const files = [];
async function walk(d) { for (const e of await readdir(d, { withFileTypes: true })) { const p = path.join(d, e.name); e.isDirectory() ? await walk(p) : files.push(p); } }
await walk(dist);

const termsFile = path.join(root, "private-terms.txt");
const privateTerms = existsSync(termsFile)
  ? (await readFile(termsFile, "utf8")).split("\n").map((t) => t.trim()).filter(Boolean)
  : [];
if (!privateTerms.length) console.warn("Note: private-terms.txt not found, client-name check skipped.");
const literal = (t) => new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
const banned = [/api[_-]?key/i, /BEGIN [A-Z ]*PRIVATE KEY/, ...privateTerms.map(literal)];

const problems = [];
for (const f of files.filter((f) => /\.(html|xml|txt|js|css)$/.test(f))) {
  const text = await readFile(f, "utf8");
  for (const b of banned) if (b.test(text)) problems.push(`${path.relative(dist, f)}: matches ${b}`);
  for (const [, href] of text.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    if (href.startsWith("/_vercel/")) continue; // served by Vercel at runtime, not in dist/
    const target = path.join(dist, href);
    if (!existsSync(target) && !existsSync(path.join(target, "index.html"))) problems.push(`${path.relative(dist, f)}: broken link ${href}`);
  }
  if (/—/.test(text)) problems.push(`${path.relative(dist, f)}: contains an em dash`);
}
for (const f of files) if (banned.some((b) => b.test(path.basename(f)))) problems.push(`private term in filename: ${f}`);

if (problems.length) { console.error(problems.join("\n")); process.exit(1); }
console.log(`OK: ${files.length} files checked, no broken internal links, no private strings.`);
