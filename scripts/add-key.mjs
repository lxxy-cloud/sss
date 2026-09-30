import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

function walk(dir, results = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p, results);
    else if (f === "page.tsx") results.push(p);
  }
  return results;
}

const files = walk("src/app");
let count = 0;
for (const f of files) {
  let s = readFileSync(f, "utf8");
  if (s.includes("key=")) continue;
  // Match: <KjtestPage route="/path" />
  const m = s.match(/<KjtestPage(\s+route="[^"]+")\s*\/>/);
  if (m) {
    const routeAttr = m[1]; // e.g. ' route="/users"'
    const newTag = `<KjtestPage key=${routeAttr.replace("route=", "").trim()}${routeAttr} />`;
    s = s.replace(m[0], newTag);
    writeFileSync(f, s);
    count++;
  }
}
console.log("updated:", count);
