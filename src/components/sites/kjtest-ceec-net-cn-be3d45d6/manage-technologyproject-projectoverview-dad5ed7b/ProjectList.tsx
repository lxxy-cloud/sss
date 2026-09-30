"use client";

import { ChangeEvent, useMemo, useState } from "react";

import styles from "./ProjectList.module.css";

type ProjectRow = {
  id: number;
  year: string;
  name: string;
  level: string;
  category: string;
  mechanism: string;
  duration: string;
  unit: string;
  lead: string;
  budget: number;
  status: "在研" | "验收" | "验收文档";
};

type Filters = {
  year: string;
  name: string;
  level: string;
  category: string;
  mechanism: string;
  unit: string;
  status: string;
  source: string;
  industryAcademia: "全部" | "是" | "否";
  international: "全部" | "是" | "否";
};

const levelOptions = ["全部", "国家级", "省部级", "集团级", "子集团级", "子企业级"];
const mechanismOptions = ["全部", "揭榜挂帅", "其他"];
const statusOptions = ["全部", "在研", "验收", "验收文档"];
const sourceOptions = ["全部", "自立", "下达"];
const yn = ["全部", "是", "否"] as const;

const emptyFilters: Filters = {
  year: "",
  name: "",
  level: "全部",
  category: "",
  mechanism: "全部",
  unit: "",
  status: "全部",
  source: "全部",
  industryAcademia: "全部",
  international: "全部",
};

const rows: ProjectRow[] = [
  { id: 1, year: "2026", name: "玄武岩连续纤维与复合材料制备关键技术和装备研究", level: "集团级", category: "重大科技专项", mechanism: "揭榜挂帅", duration: "2026-01~2027-12", unit: "中能建绿色建材有限公司", lead: "蒋洋", budget: 1500, status: "在研" },
  { id: 2, year: "2025", name: "输电行业应用平台关键技术研究", level: "集团级", category: "重点研发项目", mechanism: "其他", duration: "2025-01~2026-10", unit: "中国电力工程顾问集团中南电力设计院有限公司", lead: "胡星", budget: 600, status: "在研" },
  { id: 3, year: "2025", name: "新能源船舶动力系统核心技术研究", level: "集团级", category: "重点研发项目", mechanism: "其他", duration: "2025-01~2026-12", unit: "中国葛洲坝集团股份有限公司", lead: "孙海明", budget: 800, status: "在研" },
  { id: 4, year: "2025", name: "工业用户侧大容量柔性电力电子装备研发", level: "集团级", category: "重点研发项目", mechanism: "其他", duration: "2025-01~2026-12", unit: "北京电力设备总厂有限公司", lead: "张猛", budget: 600, status: "在研" },
  { id: 5, year: "2025", name: "超导电动机、直流断路器和核磁共振装备研发", level: "集团级", category: "重点研发项目", mechanism: "其他", duration: "2025-01~2026-12", unit: "北京电力设备总厂有限公司", lead: "马晓璐", budget: 600, status: "在研" },
  { id: 6, year: "2025", name: "节能环保新型材料研究与应用", level: "集团级", category: "重点研发项目", mechanism: "揭榜挂帅", duration: "2025-01~2026-12", unit: "葛洲坝集团生态环保有限公司", lead: "吴磊", budget: 800, status: "在研" },
  { id: 7, year: "2025", name: "煤矸石制备无机纤维关键技术和装备研究", level: "集团级", category: "重点研发项目", mechanism: "揭榜挂帅", duration: "2025-01~2026-12", unit: "中能建绿色建材有限公司", lead: "蒋洋", budget: 800, status: "在研" },
  { id: 8, year: "2025", name: "水电工程高塔柱智能建造技术体系和装备研究", level: "集团级", category: "重点研发项目", mechanism: "其他", duration: "2025-01~2026-12", unit: "中国葛洲坝集团股份有限公司", lead: "刘雄", budget: 800, status: "在研" },
  { id: 9, year: "2025", name: "交通可持续燃料和电气化应用关键技术研究", level: "集团级", category: "重点研发项目", mechanism: "其他", duration: "2025-01~2026-12", unit: "中国能源建设集团华东建设投资有限公司（中国能源建设股份有限公司华东区域总部）", lead: "唐志俊", budget: 600, status: "在研" },
  { id: 10, year: "2025", name: "核聚变工程化技术和装备研究", level: "集团级", category: "重点研发项目", mechanism: "其他", duration: "2025-01~2026-12", unit: "中国电力工程顾问集团有限公司", lead: "罗必雄", budget: 600, status: "在研" },
  { id: 11, year: "2025", name: "绿色燃料和新型电解槽研发", level: "集团级", category: "重点研发项目", mechanism: "揭榜挂帅", duration: "2025-01~2026-12", unit: "中能建氢能源有限公司", lead: "李京光", budget: 800, status: "在研" },
];

const primaryNavigation = [
  "用户管理",
  "研发平台",
  "科技项目",
  "科技成果",
  "科技奖励",
  "技术标准",
  "重大工程技术方案评审",
  "考核管理",
  "科技统计",
  "协同创新",
  "知识管理",
  "个人信息",
  "系统管理",
];

const projectChildren = [
  "项目清单",
  "选题征集",
  "揭榜挂帅",
  "项目立项",
  "项目实施",
  "项目验收",
  "项目后评估",
];

function statusClass(status: ProjectRow["status"]): string {
  if (status === "在研") return styles.statusResearch;
  if (status === "验收") return styles.statusReview;
  return styles.statusDocs;
}

export function ProjectList() {
  const [expanded, setExpanded] = useState(true);
  const [draft, setDraft] = useState<Filters>(emptyFilters);
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(200);
  const [notice, setNotice] = useState<string>("");

  function setText(key: keyof Filters) {
    return (event: ChangeEvent<HTMLInputElement>) =>
      setDraft((current) => ({ ...current, [key]: event.target.value }));
  }

  function setSelect(key: keyof Filters) {
    return (event: ChangeEvent<HTMLSelectElement>) =>
      setDraft((current) => ({ ...current, [key]: event.target.value }));
  }

  function query() {
    setFilters({ ...draft });
    setPage(1);
  }

  function reset() {
    setDraft(emptyFilters);
    setFilters(emptyFilters);
    setPage(1);
    setNotice("");
  }

  const results = useMemo(() => {
    return rows.filter((row) => {
      if (filters.year && row.year !== filters.year) return false;
      if (filters.name && !row.name.includes(filters.name)) return false;
      if (filters.level !== "全部" && row.level !== filters.level) return false;
      if (filters.category && !row.category.includes(filters.category)) return false;
      if (filters.mechanism !== "全部" && row.mechanism !== filters.mechanism) return false;
      if (filters.unit && !row.unit.includes(filters.unit)) return false;
      if (filters.status !== "全部" && row.status !== filters.status) return false;
      return true;
    });
  }, [filters]);

  const total = results.length;

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <h1 className={styles.brand}>科技创新管理系统</h1>
        <div className={styles.account}>
          <span>集团公司&nbsp;&nbsp;赵耀华&nbsp;(00A0181)</span>
          <button aria-label="退出登录" className={styles.exitButton} type="button">⏻</button>
        </div>
      </header>
      <aside className={styles.sidebar} aria-label="主导航">
        <nav className={styles.navigation}>
          {primaryNavigation.map((item) => {
            const expandable = item === "科技项目";
            const isOpen = expandable && expanded;
            return (
              <div className={styles.navGroup} key={item}>
                <button
                  className={`${styles.navItem} ${expandable ? styles.activeParent : ""}`}
                  onClick={() => expandable && setExpanded((v) => !v)}
                  type="button"
                >
                  <span>{item}</span>
                  {expandable && <span className={styles.navArrow}>{isOpen ? "▾" : "▸"}</span>}
                </button>
                {isOpen && (
                  <div className={styles.navChildren}>
                    {projectChildren.map((child) => (
                      <button
                        className={`${styles.childItem} ${child === "项目清单" ? styles.activeChild : ""}`}
                        key={child}
                        type="button"
                      >
                        {child}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
      <main className={styles.main}>
        <div className={styles.tabs}>
          <button type="button" className={styles.homeTab}>首页</button>
          <span className={styles.openTab}>项目清单 <b>×</b></span>
        </div>
        <section className={styles.workspace}>
          <div className={styles.contentPanel}>
            <div className={styles.filterBox}>
              <div className={styles.filterRow}>
                <label className={styles.fieldLabel}>
                  立项年份
                  <input value={draft.year} onChange={setText("year")} placeholder="请选择立项年份" />
                </label>
                <label className={styles.fieldLabel}>
                  项目名称
                  <input value={draft.name} onChange={setText("name")} placeholder="请输入项目名称" />
                </label>
                <label className={styles.fieldLabel}>
                  项目等级
                  <select value={draft.level} onChange={setSelect("level")}>
                    {levelOptions.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </label>
                <label className={styles.fieldLabel}>
                  项目类别
                  <input value={draft.category} onChange={setText("category")} placeholder="请输入项目类别" />
                </label>
              </div>
              <div className={styles.filterRow}>
                <label className={styles.fieldLabel}>
                  立项机制
                  <select value={draft.mechanism} onChange={setSelect("mechanism")}>
                    {mechanismOptions.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </label>
                <label className={styles.fieldLabel}>
                  牵头单位
                  <input value={draft.unit} onChange={setText("unit")} placeholder="请输入牵头单位" />
                </label>
                <label className={styles.fieldLabel}>
                  项目状态
                  <select value={draft.status} onChange={setSelect("status")}>
                    {statusOptions.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </label>
                <label className={styles.fieldLabel}>
                  项目来源
                  <select value={draft.source} onChange={setSelect("source")}>
                    {sourceOptions.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </label>
              </div>
              <div className={styles.filterRow}>
                <div className={styles.choiceGroup}>
                  <span className={styles.choiceTitle}>是否产学研项目:</span>
                  {yn.map((v) => (
                    <label className={styles.choiceLabel} key={v}>
                      <input
                        type="radio"
                        name="industry-academia"
                        checked={draft.industryAcademia === v}
                        onChange={() => setDraft((c) => ({ ...c, industryAcademia: v }))}
                      />
                      {v}
                    </label>
                  ))}
                </div>
                <div className={styles.choiceGroup}>
                  <span className={styles.choiceTitle}>是否国际合作项目:</span>
                  {yn.map((v) => (
                    <label className={styles.choiceLabel} key={v}>
                      <input
                        type="radio"
                        name="international"
                        checked={draft.international === v}
                        onChange={() => setDraft((c) => ({ ...c, international: v }))}
                      />
                      {v}
                    </label>
                  ))}
                </div>
                <div className={styles.filterButtons}>
                  <button className={styles.queryButton} type="button" onClick={query}>查询</button>
                  <button className={styles.resetButton} type="button" onClick={reset}>重置</button>
                </div>
              </div>
            </div>
            {notice && <div className={styles.notice} role="status">{notice}</div>}
            {!notice && total !== rows.length && (
              <div className={styles.notice} role="status">已应用筛选条件，当前匹配 {total} 条记录。</div>
            )}
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    {["序号", "立项年份", "项目名称", "项目等级", "项目类别", "立项机制", "项目起止时间", "牵头单位", "项目负责人", "项目总预算经费(万元)", "项目状态", "操作"].map((h) => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {results.map((row, idx) => (
                    <tr key={row.id}>
                      <td>{idx + 1}</td>
                      <td>{row.year}</td>
                      <td className={styles.projectName} title={row.name}>{row.name}</td>
                      <td>{row.level}</td>
                      <td>{row.category}</td>
                      <td>{row.mechanism}</td>
                      <td>{row.duration}</td>
                      <td className={styles.unit} title={row.unit}>{row.unit}</td>
                      <td>{row.lead}</td>
                      <td>{row.budget}</td>
                      <td><span className={statusClass(row.status)}>{row.status}</span></td>
                      <td>
                        <button
                          className={styles.viewButton}
                          type="button"
                          onClick={() => setNotice(`已打开【${row.name}】的本地演示详情。`)}
                        >
                          查看
                        </button>
                      </td>
                    </tr>
                  ))}
                  {results.length === 0 && (
                    <tr>
                      <td className={styles.emptyCell} colSpan={12}>暂无可显示的数据</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className={styles.pagination}>
              <button className={styles.pageArrow} type="button" aria-label="上一页" onClick={() => setPage(Math.max(1, page - 1))}>‹</button>
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  type="button"
                  className={page === n ? styles.activePage : ""}
                  onClick={() => setPage(n)}
                >
                  {n}
                </button>
              ))}
              <span>…</span>
              <button type="button" onClick={() => setPage(10)}>10</button>
              <button className={styles.pageArrow} type="button" aria-label="下一页" onClick={() => setPage(page + 1)}>›</button>
              <span>到第</span>
              <input
                className={styles.pageInput}
                aria-label="页码"
                value={page}
                onChange={(e) => setPage(Math.max(1, Number(e.target.value) || 1))}
              />
              <span>页</span>
              <button className={styles.confirmPage} type="button">确定</button>
              <span className={styles.total}>共 79 条</span>
              <select
                className={styles.pageSize}
                aria-label="每页条数"
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
              >
                {[100, 200, 300, 400, 500].map((n) => (
                  <option key={n} value={n}>{n} 条/页</option>
                ))}
              </select>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
