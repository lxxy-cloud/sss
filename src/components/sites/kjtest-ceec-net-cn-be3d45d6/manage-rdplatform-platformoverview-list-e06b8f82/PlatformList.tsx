"use client";

import { ChangeEvent, useMemo, useState } from "react";
import styles from "./PlatformList.module.css";

type PlatformRow = {
  id: number;
  name: string;
  level: string;
  category: string;
  unit: string;
  field: string;
  status: "正常";
};

type Filters = {
  name: string;
  category: string;
  unit: string;
  field: string;
  levels: string[];
  status: string;
};

const levels = ["国家级", "省部级", "集团级", "子集团级", "子企业级"];
const statusOptions = ["全部", "正常", "申请停用", "已停止"];
const emptyFilters: Filters = { name: "", category: "全部", unit: "", field: "全部", levels: [...levels], status: "全部" };

const rows: PlatformRow[] = [
  { id: 1, name: "中国能源建设股份有限公司绿色先进材料研究院", level: "集团级", category: "股份公司级研发平台", unit: "绿色建材公司", field: "建材", status: "正常" },
  { id: 2, name: "中国能源建设股份有限公司绿色民爆研究院", level: "集团级", category: "股份公司级研发平台", unit: "葛洲坝易普力公司", field: "民爆", status: "正常" },
  { id: 3, name: "广东省起重运输工程技术研究中心", level: "省部级", category: "省级工程（技术）研究中心", unit: "广东火电", field: "传统能源", status: "正常" },
  { id: 4, name: "中国能源建设股份有限公司数字化研究院", level: "集团级", category: "股份公司级研发平台", unit: "数科集团", field: "新能源及综合智慧能源", status: "正常" },
  { id: 5, name: "新一代光热研究院", level: "集团级", category: "股份公司级研发平台", unit: "西北院", field: "新能源及综合智慧能源", status: "正常" },
  { id: 6, name: "中国能建储能技术研究中心", level: "集团级", category: "股份公司级研发平台", unit: "华东院", field: "新能源及综合智慧能源", status: "正常" },
  { id: 7, name: "湖北省特高压输电工程技术研究中心", level: "省部级", category: "省级工程（技术）研究中心", unit: "中南院", field: "电力系统", status: "正常" },
  { id: 8, name: "中国能源建设集团智能建造研究院", level: "集团级", category: "集团级研发平台", unit: "葛洲坝集团", field: "工程建设", status: "正常" },
  { id: 9, name: "山东省海上风电工程技术研究中心", level: "省部级", category: "省级工程（技术）研究中心", unit: "山东电建", field: "新能源及综合智慧能源", status: "正常" },
  { id: 10, name: "中国能源建设股份有限公司氢能研究院", level: "集团级", category: "股份公司级研发平台", unit: "氢能公司", field: "新能源及综合智慧能源", status: "正常" },
  { id: 11, name: "北京市绿色低碳建筑工程技术研究中心", level: "省部级", category: "省级工程（技术）研究中心", unit: "北京电建", field: "建筑", status: "正常" },
  { id: 12, name: "中国能建国际工程技术研究中心", level: "子集团级", category: "子集团级研发平台", unit: "国际集团", field: "国际工程", status: "正常" },
  { id: 13, name: "能源电力数字孪生技术创新中心", level: "子企业级", category: "子企业级研发平台", unit: "数科集团", field: "数字化", status: "正常" },
];

const primaryNavigation = ["用户管理", "研发平台", "科技项目", "科技成果", "科技奖励", "技术标准", "重大工程技术方案评审", "考核管理", "科技统计", "协同创新", "知识管理", "个人信息", "系统管理"];
const platformChildren = ["研发平台清单", "研发平台登记", "能建研发平台组建", "能建研发平台认定", "运行管理", "考核管理"];

export function PlatformList() {
  const [expanded, setExpanded] = useState(true);
  const [draft, setDraft] = useState<Filters>(emptyFilters);
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const [page, setPage] = useState(1);
  const [notice, setNotice] = useState("");

  const results = useMemo(() => rows.filter((row) => {
    const contains = (value: string, term: string) => value.includes(term.trim());
    return contains(row.name, filters.name) && contains(row.unit, filters.unit) &&
      (filters.category === "全部" || row.category === filters.category) &&
      (filters.field === "全部" || row.field === filters.field) &&
      filters.levels.includes(row.level) && (filters.status === "全部" || row.status === filters.status);
  }), [filters]);

  const setText = (key: "name" | "unit") => (event: ChangeEvent<HTMLInputElement>) => setDraft((current) => ({ ...current, [key]: event.target.value }));
  const setSelect = (key: "category" | "field") => (event: ChangeEvent<HTMLSelectElement>) => setDraft((current) => ({ ...current, [key]: event.target.value }));
  const toggleLevel = (level: string) => setDraft((current) => ({ ...current, levels: current.levels.includes(level) ? current.levels.filter((item) => item !== level) : [...current.levels, level] }));
  const reset = () => { setDraft(emptyFilters); setFilters(emptyFilters); setPage(1); setNotice(""); };
  const query = () => { setFilters(draft); setPage(1); setNotice(""); };

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <h1 className={styles.brand}>科技创新管理系统</h1>
        <div className={styles.account}><span>集团公司</span><span>赵耀华 (00A0181)</span><button className={styles.exitButton} type="button" aria-label="退出登录">⌁</button></div>
      </header>
      <aside className={styles.sidebar}>
        <nav className={styles.navigation} aria-label="系统导航">
          {primaryNavigation.map((item) => item === "研发平台" ? (
            <section className={styles.navGroup} key={item}>
              <button className={`${styles.navItem} ${styles.activeParent}`} type="button" onClick={() => setExpanded((value) => !value)}>{item}<span>{expanded ? "⌃" : "⌄"}</span></button>
              {expanded && <div className={styles.navChildren}>{platformChildren.map((child) => <button type="button" key={child} className={`${styles.childItem} ${child === "研发平台清单" ? styles.activeChild : ""}`}>{child}</button>)}</div>}
            </section>
          ) : <button type="button" className={styles.navItem} key={item}>{item}<span className={styles.navArrow}>›</span></button>)}
        </nav>
      </aside>
      <main className={styles.main}>
        <div className={styles.tabs}><button type="button" className={styles.homeTab}>首页</button><span className={styles.openTab}>研发平台清单 <b>×</b></span><span>研发平台登记 <b>×</b></span></div>
        <section className={styles.workspace}>
          <div className={styles.contentPanel}>
            <div className={styles.filterBox}>
              <div className={styles.filterRow}>
                <label className={styles.fieldLabel}>平台名称<input value={draft.name} onChange={setText("name")} /></label>
                <label className={styles.fieldLabel}>平台类别<select value={draft.category} onChange={setSelect("category")}><option>全部</option><option>股份公司级研发平台</option><option>集团级研发平台</option><option>省级工程（技术）研究中心</option><option>子集团级研发平台</option><option>子企业级研发平台</option></select></label>
                <label className={styles.fieldLabel}>依托单位<input value={draft.unit} onChange={setText("unit")} /></label>
                <label className={styles.fieldLabel}>研究领域<select value={draft.field} onChange={setSelect("field")}><option>全部</option><option>建材</option><option>民爆</option><option>传统能源</option><option>新能源及综合智慧能源</option><option>工程建设</option><option>数字化</option></select></label>
              </div>
              <div className={styles.filterRow}>
                <div className={styles.choiceGroup}><span className={styles.choiceTitle}>平台等级</span>{levels.map((level) => <label className={styles.choiceLabel} key={level}><input type="checkbox" checked={draft.levels.includes(level)} onChange={() => toggleLevel(level)} />{level}</label>)}</div>
                <div className={styles.choiceGroup}><span className={styles.choiceTitle}>运行状态</span>{statusOptions.map((status) => <label className={styles.choiceLabel} key={status}><input type="radio" name="platform-status" checked={draft.status === status} onChange={() => setDraft((current) => ({ ...current, status }))} />{status}</label>)}</div>
                <div className={styles.filterButtons}><button className={styles.queryButton} type="button" onClick={query}>查询</button><button className={styles.resetButton} type="button" onClick={reset}>重置</button></div>
              </div>
            </div>
            {notice && <div className={styles.notice} role="status">{notice}</div>}
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead><tr>{["序号", "平台名称", "平台等级", "平台类别", "依托单位", "研究领域", "运行状态", "操作"].map((heading) => <th key={heading}>{heading}</th>)}</tr></thead>
                <tbody>{results.map((row, index) => <tr key={row.id}><td>{index + 1}</td><td className={styles.platformName} title={row.name}>{row.name}</td><td>{row.level}</td><td className={styles.category}>{row.category}</td><td>{row.unit}</td><td>{row.field}</td><td><span className={styles.normalStatus}>{row.status}</span></td><td><button className={styles.viewButton} type="button" onClick={() => setNotice(`已打开“${row.name}”的本地演示详情。`)}>查看</button></td></tr>)}
                  {results.length === 0 && <tr><td className={styles.emptyCell} colSpan={8}>暂无符合条件的数据</td></tr>}</tbody>
              </table>
            </div>
            <div className={styles.pagination}>
              <button className={styles.pageArrow} type="button" aria-label="上一页" onClick={() => setPage(Math.max(1, page - 1))}>‹</button>
              <button className={styles.activePage} type="button">1</button><button type="button" onClick={() => setPage(2)}>2</button><button type="button" onClick={() => setPage(3)}>3</button><span>…</span><button type="button" onClick={() => setPage(1)}>1</button>
              <button className={styles.pageArrow} type="button" aria-label="下一页" onClick={() => setPage(page + 1)}>›</button><span>到第</span><input className={styles.pageInput} aria-label="页码" value={page} onChange={(event) => setPage(Math.max(1, Number(event.target.value) || 1))} /><span>页</span><button className={styles.confirmPage} type="button">确定</button><span className={styles.total}>共107条</span><select className={styles.pageSize} aria-label="每页条数"><option>200条/页</option></select>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
