"use client";

import { useState } from "react";

import styles from "./OrgTree.module.css";

type Node = {
  name: string;
  children?: Node[];
};

const TREE: Node = {
  name: "中能建集团",
  children: [
    {
      name: "股份公司",
      children: [
        { name: "中能建绿色建材有限公司" },
        { name: "中能建数字科技集团有限公司" },
        { name: "中能建城市投资发展有限公司" },
        { name: "中能建氢能源有限公司" },
      ],
    },
    {
      name: "中国电力工程顾问集团",
      children: [
        { name: "中国电力工程顾问集团华东电力设计院有限公司" },
        { name: "中国电力工程顾问集团中南电力设计院有限公司" },
        { name: "中国电力工程顾问集团西北电力设计院有限公司" },
        { name: "中国电力工程顾问集团华北电力设计院有限公司" },
        { name: "电力规划总院有限公司" },
      ],
    },
    {
      name: "中国葛洲坝集团",
      children: [
        { name: "中国葛洲坝集团股份有限公司" },
        { name: "中国葛洲坝集团路桥工程有限公司" },
        { name: "中国葛洲坝集团市政工程有限公司" },
        { name: "中国葛洲坝集团三峡建设工程有限公司" },
        { name: "中国葛洲坝集团生态环保有限公司" },
      ],
    },
    {
      name: "中国能源建设集团",
      children: [
        { name: "中国能源建设集团山西电力建设有限公司" },
        { name: "中国能源建设集团华东建设投资有限公司" },
        { name: "中国能源建设集团科技发展有限公司" },
      ],
    },
    {
      name: "在建及新筹备项目",
    },
  ],
};

function TreeNode({ node, depth = 0, selected, onSelect }: {
  node: Node;
  depth?: number;
  selected: string;
  onSelect: (name: string) => void;
}) {
  const [open, setOpen] = useState(depth < 1);
  const isLeaf = !node.children || node.children.length === 0;
  const isSelected = selected === node.name;
  return (
    <div className={styles.node}>
      <button
        type="button"
        className={`${styles.row} ${isSelected ? styles.rowSelected : ""}`}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
        onClick={() => {
          if (!isLeaf) setOpen((o) => !o);
          onSelect(node.name);
        }}
      >
        <span className={styles.chevron}>
          {isLeaf ? "·" : (open ? "▾" : "▸")}
        </span>
        <span className={styles.icon}>
          {isLeaf ? "🏢" : (open ? "📂" : "📁")}
        </span>
        <span className={styles.name}>{node.name}</span>
      </button>
      {!isLeaf && open && (
        <div className={styles.children}>
          {node.children!.map((c) => (
            <TreeNode key={c.name} node={c} depth={depth + 1} selected={selected} onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  );
}

export function OrgTree({ onSelect, defaultSelected = "中能建集团" }: {
  onSelect?: (name: string) => void;
  defaultSelected?: string;
}) {
  const [selected, setSelected] = useState(defaultSelected);
  function handle(name: string) {
    setSelected(name);
    onSelect?.(name);
  }
  return (
    <div className={styles.tree}>
      <header className={styles.header}>
        <h3>组织机构</h3>
        <span className={styles.selectedLabel}>当前选中：{selected}</span>
      </header>
      <div className={styles.body}>
        <TreeNode node={TREE} selected={selected} onSelect={handle} />
      </div>
    </div>
  );
}