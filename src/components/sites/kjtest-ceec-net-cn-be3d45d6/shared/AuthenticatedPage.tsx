"use client";

import Link from "next/link";
import { ChangeEvent, ReactNode, useMemo, useState } from "react";

import styles from "./AuthenticatedPage.module.css";
export type SidebarChild = {
  label: string;
  href?: string;
};
export type SidebarItem = {
  label: string;
  href?: string;
  defaultOpen?: boolean;
  children?: SidebarChild[];
};

export type FilterField =
  | { kind: "text"; label: string; placeholder?: string }
  | { kind: "select"; label: string; options: readonly string[] }
  | { kind: "radio"; label: string; name: string; options: readonly string[] };

export type FilterRow = FilterField[];

export type ColumnDef<T> = {
  title: string;
  width?: string;
  ellipsis?: boolean;
  align?: "left" | "center" | "right";
  sortable?: boolean;
  sortKey?: string;
  render?: (row: T, index: number) => ReactNode;
};

export type AuthenticatedPageProps<T> = {
  sidebar: SidebarItem[];
  breadcrumb: string[];
  filterRows?: FilterRow[];
  columns: ColumnDef<T>[];
  rows: T[];
  rowKey: (row: T, index: number) => string | number;
  emptyText?: string;
  totalCount?: number;
  defaultPageSize?: number;
  pageSizeOptions?: number[];
  toolbar?: { label: string; primary?: boolean; onClick?: () => void }[];
  tabs?: { key: string; label: string; content?: ReactNode }[];
  defaultTab?: string;
};

const DEFAULT_PAGE_SIZES = [100, 200, 300, 400, 500];

type SortState = { key: string; dir: "asc" | "desc" };

function getCellValue<T>(row: T, col: ColumnDef<T>): unknown {
  const key = col.sortKey ?? col.title;
  return (row as Record<string, unknown>)[key];
}

export function AuthenticatedPage<T>(props: AuthenticatedPageProps<T>) {
  const {
    sidebar,
    breadcrumb,
    filterRows = [],
    columns,
    rows,
    rowKey,
    emptyText = "暂无可显示的数据",
    totalCount,
    defaultPageSize = 200,
    pageSizeOptions = DEFAULT_PAGE_SIZES,
    toolbar,
    tabs,
    defaultTab,
  } = props;

  const [openMenus, setOpenMenus] = useState<string[]>(
    sidebar.filter((s) => s.defaultOpen).map((s) => s.label),
  );
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [draft, setDraft] = useState<Record<string, string>>({});
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [sort, setSort] = useState<SortState | null>(null);
  const [activeTab, setActiveTab] = useState<string>(defaultTab ?? tabs?.[0]?.key ?? "");
  const [drawerRow, setDrawerRow] = useState<T | null>(null);

  function toggle(label: string) {
    setOpenMenus((current) =>
      current.includes(label) ? current.filter((c) => c !== label) : [...current, label],
    );
  }

  function onTextChange(key: string) {
    return (event: ChangeEvent<HTMLInputElement>) =>
      setDraft((d) => ({ ...d, [key]: event.target.value }));
  }

  function onSelectChange(key: string) {
    return (event: ChangeEvent<HTMLSelectElement>) =>
      setDraft((d) => ({ ...d, [key]: event.target.value }));
  }

  function onRadioChange(key: string, value: string) {
    setDraft((d) => ({ ...d, [key]: value }));
  }

  function query() {
    setFilters({ ...draft });
    setPage(1);
    setDrawerRow(null);
  }

  function reset() {
    const empty: Record<string, string> = {};
    filterRows.flat().forEach((f) => {
      if (f.kind === "radio") empty[f.name] = f.options[0];
      else if (f.kind === "select") empty[f.label] = f.options[0];
      else empty[f.label] = "";
    });
    setDraft(empty);
    setFilters({});
    setPage(1);
    setSort(null);
  }

  function toggleSort(col: ColumnDef<T>) {
    if (!col.sortable) return;
    const key = col.sortKey ?? col.title;
    setSort((current) => {
      if (!current || current.key !== key) return { key, dir: "asc" };
      if (current.dir === "asc") return { key, dir: "desc" };
      return null;
    });
  }

  const filtered = useMemo(() => {
    return rows.filter((row) => {
      for (const [k, v] of Object.entries(filters)) {
        if (!v || v === "全部") continue;
        const value = (row as Record<string, unknown>)[k];
        if (typeof value === "string" && !value.includes(v)) return false;
        if (typeof value === "number" && String(value) !== v) return false;
      }
      return true;
    });
  }, [rows, filters]);

  const sorted = useMemo(() => {
    if (!sort) return filtered;
    const col = columns.find((c) => (c.sortKey ?? c.title) === sort.key);
    if (!col) return filtered;
    const arr = [...filtered];
    arr.sort((a, b) => {
      const va = getCellValue(a, col);
      const vb = getCellValue(b, col);
      if (typeof va === "number" && typeof vb === "number") return sort.dir === "asc" ? va - vb : vb - va;
      const sa = String(va ?? "");
      const sb = String(vb ?? "");
      return sort.dir === "asc" ? sa.localeCompare(sb, "zh-Hans-CN") : sb.localeCompare(sa, "zh-Hans-CN");
    });
    return arr;
  }, [filtered, sort, columns]);

  const total = totalCount ?? sorted.length;
  const pageStart = (page - 1) * pageSize;
  const visible = sorted.slice(pageStart, pageStart + pageSize);
  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const hasActiveFilter = Object.values(filters).some((v) => v && v !== "全部");

  function gotoPage(n: number) {
    setPage(Math.max(1, Math.min(totalPages, n)));
  }

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <h1 className={styles.brand}>科技创新管理系统</h1>
        <div className={styles.account}>
          <span>集团公司&nbsp;&nbsp;赵耀华&nbsp;(00A0181)</span>
          <Link href="/login.html"><button aria-label="退出登录" className={styles.exitButton} type="button">⏻</button></Link>
        </div>
      </header>
      <aside className={styles.sidebar} aria-label="主导航">
        <nav className={styles.navigation}>
          {sidebar.map((item) => {
            const expandable = Boolean(item.children && item.children.length > 0);
            const isOpen = openMenus.includes(item.label);
            return (
              <div className={styles.navGroup} key={item.label}>
                <button
                  className={styles.navItem + (isOpen ? " " + styles.activeParent : "")}
                  onClick={() => expandable && toggle(item.label)}
                  type="button"
                >
                  <span>{item.label}</span>
                  {expandable && <span className={styles.navArrow}>{isOpen ? "▾" : "▸"}</span>}
                </button>
                {expandable && isOpen && (
                  <div className={styles.navChildren}>
                    {item.children?.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href ?? "#"}
                        className={styles.childItemLink}
                      >
                        <span className={styles.childItem}>{child.label}</span>
                      </Link>
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
          <Link href="/" className={styles.homeTab}>首页</Link>
          {breadcrumb.map((tab, idx) => (
            <span
              key={tab}
              className={idx === breadcrumb.length - 1 ? styles.openTab : ""}
            >
              {tab} <b>×</b>
            </span>
          ))}
        </div>
        <section className={styles.workspace}>
          <div className={styles.contentPanel}>
            {tabs && tabs.length > 0 && (
              <div className={styles.innerTabs}>
                {tabs.map((t) => (
                  <button
                    key={t.key}
                    type="button"
                    className={styles.innerTab + (activeTab === t.key ? " " + styles.innerTabActive : "")}
                    onClick={() => setActiveTab(t.key)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            )}
            {filterRows.length > 0 && (
              <div className={styles.filterBox}>
                {filterRows.map((row, ri) => (
                  <div className={styles.filterRow} key={ri}>
                    {row.map((field) => {
                      if (field.kind === "text") {
                        return (
                          <label className={styles.fieldLabel} key={field.label}>
                            {field.label}
                            <input
                              value={draft[field.label] ?? ""}
                              onChange={onTextChange(field.label)}
                              placeholder={field.placeholder ?? "请输入" + field.label}
                            />
                          </label>
                        );
                      }
                      if (field.kind === "select") {
                        return (
                          <label className={styles.fieldLabel} key={field.label}>
                            {field.label}
                            <select
                              value={draft[field.label] ?? field.options[0]}
                              onChange={onSelectChange(field.label)}
                            >
                              {field.options.map((o) => (
                                <option key={o}>{o}</option>
                              ))}
                            </select>
                          </label>
                        );
                      }
                      return (
                        <div className={styles.choiceGroup} key={field.name}>
                          <span className={styles.choiceTitle}>{field.label}:</span>
                          {field.options.map((o) => (
                            <label className={styles.choiceLabel} key={o}>
                              <input
                                type="radio"
                                name={field.name}
                                checked={(draft[field.name] ?? field.options[0]) === o}
                                onChange={() => onRadioChange(field.name, o)}
                              />
                              {o}
                            </label>
                          ))}
                        </div>
                      );
                    })}
                    {ri === filterRows.length - 1 && (
                      <div className={styles.filterButtons}>
                        <button className={styles.queryButton} type="button" onClick={query}>查询</button>
                        <button className={styles.resetButton} type="button" onClick={reset}>重置</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            {hasActiveFilter && (
              <div className={styles.notice} role="status">已应用筛选条件，当前匹配 {sorted.length} 条记录。</div>
            )}
            {toolbar && toolbar.length > 0 && (
              <div className={styles.toolbar}>
                {toolbar.map((b) => (
                  <button
                    key={b.label}
                    type="button"
                    className={b.primary ? styles.primaryBtn : styles.outlineBtn}
                    onClick={b.onClick}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            )}
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    {columns.map((c) => {
                      const sortActive = sort && (c.sortKey ?? c.title) === sort.key;
                      return (
                        <th
                          key={c.title}
                          style={c.width ? { width: c.width } : undefined}
                          className={c.sortable ? styles.sortable : undefined}
                          onClick={() => toggleSort(c)}
                        >
                          {c.title}
                          {c.sortable && (
                            <span className={styles.sortIcon}>
                              {sortActive ? (sort!.dir === "asc" ? " ↑" : " ↓") : " ↕"}
                            </span>
                          )}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {visible.map((row, idx) => (
                    <tr key={rowKey(row, pageStart + idx)}>
                      {columns.map((c) => {
                        const val = (row as Record<string, unknown>)[c.title];
                        const display = c.render ? c.render(row, pageStart + idx) : String(val ?? "");
                        const isAction = c.title === "操作";
                        return (
                          <td
                            key={c.title}
                            className={c.ellipsis ? styles.ellipsis : undefined}
                            style={c.align === "left" ? { textAlign: "left" } : c.align === "right" ? { textAlign: "right" } : undefined}
                            title={c.ellipsis && typeof val === "string" ? val : undefined}
                          >
                            {isAction
                              ? <button type="button" style={{ color: "#1687e8", background: "transparent", border: 0, cursor: "pointer" }} onClick={() => setDrawerRow(row)}>查看</button>
                              : display}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                  {visible.length === 0 && (
                    <tr>
                      <td className={styles.emptyCell} colSpan={columns.length}>{emptyText}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className={styles.pagination}>
              <button className={styles.pageArrow} type="button" aria-label="上一页" onClick={() => gotoPage(page - 1)} disabled={page === 1}>‹</button>
              {Array.from({ length: Math.min(3, totalPages) }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  className={page === n ? styles.activePage : ""}
                  onClick={() => gotoPage(n)}
                >
                  {n}
                </button>
              ))}
              {totalPages > 4 && <span>…</span>}
              {totalPages > 3 && (
                <button type="button" onClick={() => gotoPage(totalPages)}>{totalPages}</button>
              )}
              <button className={styles.pageArrow} type="button" aria-label="下一页" onClick={() => gotoPage(page + 1)} disabled={page === totalPages}>›</button>
              <span>到第</span>
              <input
                className={styles.pageInput}
                aria-label="页码"
                value={page}
                onChange={(e) => gotoPage(Math.max(1, Number(e.target.value) || 1))}
              />
              <span>页</span>
              <button className={styles.confirmPage} type="button" onClick={() => gotoPage(page)}>确定</button>
              <span className={styles.total}>共 {total} 条</span>
              <select
                className={styles.pageSize}
                aria-label="每页条数"
                value={pageSize}
                onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }}
              >
                {pageSizeOptions.map((n) => (
                  <option key={n} value={n}>{n} 条/页</option>
                ))}
              </select>
            </div>
          </div>
        </section>
      </main>
      {drawerRow !== null && (
        <>
          <div className={styles.drawerBackdrop} onClick={() => setDrawerRow(null)} />
          <aside className={styles.drawer} role="dialog" aria-label="详情">
            <header className={styles.drawerHeader}>
              <h2>详情</h2>
              <button type="button" className={styles.drawerClose} onClick={() => setDrawerRow(null)} aria-label="关闭">×</button>
            </header>
            <dl className={styles.drawerBody}>
              {Object.entries(drawerRow as Record<string, unknown>).filter(([k]) => k !== "id" && k !== "userId").map(([k, v]) => (
                <div key={k} className={styles.drawerRow}>
                  <dt>{k}</dt>
                  <dd>{String(v ?? "")}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </>
      )}
    </div>
  );
}
