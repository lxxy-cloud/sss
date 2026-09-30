"use client";

import { ChangeEvent, useMemo, useState } from "react";
import styles from "./PersonUserListStyles.module.css";
import qa from "./PersonUserListQa.module.css";

type UserRow = {
  id: string;
  name: string;
  category: "能建内" | "能建外";
  employer: string;
  expert: "是" | "否";
  manager: string;
  specialty: string;
};

const navigation = [
  "用户管理", "研发平台", "科技项目", "科技成果", "科技奖励", "技术标准",
  "重大工程技术方案评审", "考核管理", "科技统计", "协同创新", "知识管理", "个人信息", "系统管理",
];
const userChildren = ["单位用户", "个人用户", "专家库", "用户配置", "角色配置"];
const organizations = ["集团公司", "湖南火电", "广东火电", "西北城建", "中电工程", "资产管理公司", "国际集团", "数科集团"];
const people: UserRow[] = [
  { id: "010202A02728", name: "肖萌", category: "能建内", employer: "中国电力工程顾问集团华东电力设计院有限公司", expert: "是", manager: "集团公司", specialty: "电力系统" },
  { id: "012007A00569", name: "杨晓娟", category: "能建内", employer: "中能建数字科技集团有限公司", expert: "否", manager: "集团公司", specialty: "信息技术" },
  { id: "0111A100051", name: "柳媛", category: "能建内", employer: "中能建城市投资发展有限公司", expert: "否", manager: "集团公司", specialty: "工程管理" },
  { id: "010108A11967", name: "胡兴邦", category: "能建内", employer: "在建及新筹备项目", expert: "否", manager: "集团公司", specialty: "土木工程" },
  { id: "010204A2235", name: "史东瑞", category: "能建内", employer: "电力规划总院有限公司", expert: "是", manager: "集团公司", specialty: "电力规划" },
];

type Filters = { id: string; name: string; unit: string; manager: string; specialty: string; category: string; expert: string };
const emptyFilters: Filters = { id: "", name: "", unit: "", manager: "", specialty: "", category: "全部", expert: "全部" };

export function PersonUserList() {
  const [expanded, setExpanded] = useState(true);
  const [selectedOrganization, setSelectedOrganization] = useState("集团公司");
  const [draft, setDraft] = useState<Filters>(emptyFilters);
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const [page, setPage] = useState(1);

  const results = useMemo(() => people.filter((person) => {
    const has = (value: string, query: string) => value.includes(query.trim());
    return has(person.id, filters.id) && has(person.name, filters.name) && has(person.employer, filters.unit) &&
      has(person.manager, filters.manager) && has(person.specialty, filters.specialty) &&
      (filters.category === "全部" || person.category === filters.category) &&
      (filters.expert === "全部" || person.expert === filters.expert);
  }), [filters]);

  const setText = (field: keyof Pick<Filters, "id" | "name" | "unit" | "manager" | "specialty">) => (event: ChangeEvent<HTMLInputElement>) => {
    setDraft((previous) => ({ ...previous, [field]: event.target.value }));
  };
  const setChoice = (field: "category" | "expert", value: string) => setDraft((previous) => ({ ...previous, [field]: value }));

  return (
    <div className={`${styles.shell} ${qa.qaRoot}`}>
      <header className={styles.header}>
        <h1>科技创新管理系统</h1>
        <div className={styles.account}><span>集团公司</span><span>赵耀华 (00A0181)</span><button type="button" aria-label="退出">⏻</button></div>
      </header>

      <aside className={styles.sidebar}>
        <nav aria-label="系统导航">
          {navigation.map((item) => item === "用户管理" ? (
            <section className={styles.navGroup} key={item}>
              <button className={`${styles.navItem} ${styles.activeParent}`} type="button" onClick={() => setExpanded((value) => !value)}>
                用户管理 <span>{expanded ? "⌃" : "⌄"}</span>
              </button>
              {expanded && <div className={styles.children}>{userChildren.map((child) => <button type="button" key={child} className={`${styles.childItem} ${child === "个人用户" ? styles.activeChild : ""}`}>{child}</button>)}</div>}
            </section>
          ) : <button type="button" className={styles.navItem} key={item}>{item}<span className={styles.arrow}>›</span></button>)}
        </nav>
      </aside>

      <main className={styles.main}>
        <div className={styles.tabs}>
          <button type="button" className={styles.home}>首页</button><span>研发平台清单 <b>×</b></span><span>单位用户 <b>×</b></span><span className={styles.current}>个人用户 <b>×</b></span>
        </div>
        <div className={styles.workspace}>
          <section className={styles.organizationPanel} aria-label="组织树">
            <div className={styles.treeTitle}>组织机构</div>
            <div className={styles.tree}>{organizations.map((organization) => <button key={organization} type="button" onClick={() => setSelectedOrganization(organization)} className={organization === selectedOrganization ? styles.selectedTree : ""}><span>{organization === "集团公司" ? "⌄" : "·"}</span>{organization}</button>)}</div>
          </section>
          <section className={styles.contentPanel}>
            <div className={styles.filterBox}>
              <div className={styles.filterRow}>
                <label>人员编号<input value={draft.id} onChange={setText("id")} /></label>
                <label>姓名<input value={draft.name} onChange={setText("name")} /></label>
                <fieldset><legend>能建内/外</legend>{["全部", "能建内", "能建外"].map((choice) => <label key={choice}><input type="radio" checked={draft.category === choice} onChange={() => setChoice("category", choice)} />{choice}</label>)}</fieldset>
                <label>工作单位<input value={draft.unit} onChange={setText("unit")} /></label>
              </div>
              <div className={styles.filterRow}>
                <fieldset><legend>是否专家</legend>{["全部", "是", "否"].map((choice) => <label key={choice}><input type="radio" checked={draft.expert === choice} onChange={() => setChoice("expert", choice)} />{choice}</label>)}</fieldset>
                <label>管理单位<input value={draft.manager} onChange={setText("manager")} /></label>
                <label>从事专业<input value={draft.specialty} onChange={setText("specialty")} /></label>
                <div className={styles.filterButtons}><button className={styles.query} type="button" onClick={() => { setFilters(draft); setPage(1); }}>查询</button><button className={styles.reset} type="button" onClick={() => { setDraft(emptyFilters); setFilters(emptyFilters); setPage(1); }}>重置</button></div>
              </div>
            </div>
            <div className={styles.actionBar}><button type="button">新增能建内科技人员</button><button type="button">新增能建外科技人员</button><button type="button">导出清单</button></div>
            <div className={styles.tableWrap}>
              <table><thead><tr>{["人员编号", "姓名", "能建内/外", "工作单位", "是否专家", "管理单位", "从事专业", "操作"].map((heading) => <th key={heading}>{heading}</th>)}</tr></thead>
                <tbody>{results.map((person) => <tr key={person.id}><td>{person.id}</td><td>{person.name}</td><td>{person.category}</td><td className={styles.ellipsis} title={person.employer}>{person.employer}</td><td>{person.expert}</td><td>{person.manager}</td><td>{person.specialty}</td><td className={styles.operations}>{["查看", "编辑", "禁用"].map((action) => <button type="button" key={action}>{action}</button>)}<button type="button" className={styles.delete}>删除</button></td></tr>)}
                  {results.length === 0 && <tr><td className={styles.empty} colSpan={8}>暂无符合条件的数据</td></tr>}</tbody>
              </table>
            </div>
            <div className={styles.pagination}><button type="button" onClick={() => setPage(Math.max(1, page - 1))}>‹</button>{[1, 2, 3].map((number) => <button type="button" key={number} className={number === page ? styles.activePage : ""} onClick={() => setPage(number)}>{number}</button>)}<span>…</span><button type="button" className={page === 10 ? styles.activePage : ""} onClick={() => setPage(10)}>10</button><button type="button" onClick={() => setPage(Math.min(10, page + 1))}>›</button></div>
          </section>
        </div>
      </main>
    </div>
  );
}
