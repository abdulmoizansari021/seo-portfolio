// Minimal static server for previewing dist/ (mirrors Vercel's clean URLs and 404 page).
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../dist");
const port = Number(process.env.PORT) || 4173;
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".webp": "image/webp", ".svg": "image/svg+xml", ".pdf": "application/pdf", ".xml": "application/xml", ".txt": "text/plain", ".woff2": "font/woff2" };

async function resolve(urlPath) {
  const p = path.join(dist, decodeURIComponent(urlPath));
  if (!p.startsWith(dist)) return null;
  try {
    const s = await stat(p);
    return s.isDirectory() ? path.join(p, "index.html") : p;
  } catch { return null; }
}

createServer(async (req, res) => {
  const file = await resolve(new URL(req.url, "http://x").pathname);
  try {
    const body = await readFile(file);
    res.writeHead(200, { "content-type": types[path.extname(file)] || "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404, { "content-type": types[".html"] });
    res.end(await readFile(path.join(dist, "404.html")));
  }
}).listen(port, () => console.log(`Preview: http://localhost:${port}`));
