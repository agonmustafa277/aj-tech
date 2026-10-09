// Schreibt für jede Route fertiges HTML (mit Titel, Beschreibung, Inhalt),
// damit Google & Co. die Seite ohne JavaScript lesen können.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");
const serverDir = resolve(root, "dist-server");

const template = readFileSync(resolve(dist, "index.html"), "utf-8");
const { render } = await import(
  pathToFileURL(resolve(serverDir, "entry-server.js")).href
);

const routes = [
  ["/", "index.html"],
  ["/impressum", "impressum/index.html"],
  ["/datenschutz", "datenschutz/index.html"],
  ["/404", "404.html"],
];

for (const [url, file] of routes) {
  const { html, head } = render(url);
  const page = template
    .replace(/<title>[\s\S]*?<\/title>\s*/, "")
    .replace("<!--app-head-->", head)
    .replace("<!--app-html-->", html);

  const target = resolve(dist, file);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, page);
  console.log(`vorgerendert: ${url} -> dist/${file}`);
}

rmSync(serverDir, { recursive: true, force: true });
