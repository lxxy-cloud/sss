import { readFileSync, writeFileSync } from "node:fs";
let s = readFileSync("src/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/AuthenticatedPage.tsx", "utf8");
// Use a simpler approach: replace the broken "{columns.map((c) => (\n                          key=" pattern
s = s.replace(/\{columns\.map\(\(c\) => \(\s*\n\s*key=/g, "{columns.map((c) => (<td\n                          key=");
writeFileSync("src/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/AuthenticatedPage.tsx", s);
console.log("fixed");
