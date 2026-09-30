import { readFileSync, writeFileSync } from "node:fs";
let s = readFileSync("src/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/columns.tsx", "utf8");

// Add sortable to common text columns
const adds = [
  ["{ title: \"姓名\", width: \"8%\" }", "{ title: \"姓名\", width: \"8%\", sortable: true, sortKey: \"姓名\" }"],
  ["{ title: \"平台名称\", width: \"25%\", ellipsis: true }", "{ title: \"平台名称\", width: \"25%\", ellipsis: true, sortable: true, sortKey: \"平台名称\" }"],
  ["{ title: \"主要完成人\", width: \"20%\", ellipsis: true }", "{ title: \"主要完成人\", width: \"20%\", ellipsis: true, sortable: true, sortKey: \"主要完成人\" }"],
  ["{ title: \"项目负责人\", width: \"6%\" }", "{ title: \"项目负责人\", width: \"6%\", sortable: true, sortKey: \"项目负责人\" }"],
  ["{ title: \"牵头单位\", width: \"18%\", ellipsis: true }", "{ title: \"牵头单位\", width: \"18%\", ellipsis: true, sortable: true, sortKey: \"牵头单位\" }"],
  ["{ title: \"依托单位\", width: \"12%\" }", "{ title: \"依托单位\", width: \"12%\", sortable: true, sortKey: \"依托单位\" }"],
];

for (const [from, to] of adds) {
  s = s.split(from).join(to);
}

writeFileSync("src/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/columns.tsx", s);
console.log("done");
