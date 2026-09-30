"use client";

import { ChangeEvent, ReactNode, useMemo, useState } from "react";

import styles from "./AuthenticatedPage.module.css";

export type SidebarChild = {
  label: string;
  active?: boolean;
  href?: string;
};

export type SidebarItem = {
  label: string;
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
  toolbar?: { label: string; primary?: boolean }[];
  subtitle?: string;
};

const DEFAULT_PAGE_SIZES = [100, 200, 300, 400, 500];

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
  } = props;

  const [openMenus, setOpenMenus] = useState<string[]>(
    sidebar.filter((s) => s.defaultOpen).map((s) => s.label),
  );
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [draft, setDraft] = useState<Record<string, string>>({});
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState<string>("");

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
    setNotice("");
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
    setNotice("");
  }

  // For demo: every page filters by simple string includes on each text/select field.
  const results = useMemo(() => {
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

  const total = totalCount ?? results.length;
  const hasActiveFilter = Object.values(filters).some((v) => v && v !== "全部");

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
          {sidebar.map((item) => {
            const expandable = Boolean(item.children && item.children.length > 0);
            const isOpen = openMenus.includes(item.label);
            return (
              <div className={styles.navGroup} key={item.label}>
                <button
                  className={`${styles.navItem} ${isOpen ? styles.activeParent : ""}`}
                  onClick={() => expandable && toggle(item.label)}
                  type="button"
                >
                  <span>{item.label}</span>
                  {expandable && <span className={styles.navArrow}>{isOpen ? "▾" : "▸"}</span>}
                </button>
                {expandable && isOpen && (
                  <div className={styles.navChildren}>
                    {item.children?.map((child) => (
                      <button
                        className={`${styles.childItem} ${child.active ? styles.activeChild : ""}`}
                        key={child.label}
                        type="button"
                      >
                        {child.label}
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
                              placeholder={field.placeholder ?? `请输入${field.label}`}
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
            {notice && <div className={styles.notice} role="status">{notice}</div>}
            {!notice && hasActiveFilter && (
              <div className={styles.notice} role="status">已应用筛选条件，当前匹配 {results.length} 条记录。</div>
            )}
            {toolbar && toolbar.length > 0 && (
              <div className={styles.toolbar}>
                {toolbar.map((b) => (
                  <button
                    key={b.label}
                    type="button"
                    className={b.primary ? styles.primaryBtn : styles.outlineBtn}
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
                    {columns.map((c) => (
                      <th key={c.title} style={c.width ? { width: c.width } : undefined}>
                        {c.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {results.map((row, idx) => (
                    <tr key={rowKey(row, idx)}>
                      {columns.map((c) => (<td
                          key={c.title}
                          className={c.ellipsis ? styles.ellipsis : undefined}
                          style={c.align === "left" ? { textAlign: "left" } : c.align === "right" ? { textAlign: "right" } : undefined}
                          title={c.ellipsis && typeof (row as Record<string, unknown>)[c.title] === "string" ? String((row as Record<string, unknown>)[c.title]) : undefined}
                        >
                          {c.render ? c.render(row, idx) : String((row as Record<string, unknown>)[c.title] ?? "")}
                        </td>
                      ))}
                    </tr>
                  ))}
                  {results.length === 0 && (
                    <tr>
                      <td className={styles.emptyCell} colSpan={columns.length}>{emptyText}</td>
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
              <span className={styles.total}>共 {total} 条</span>
              <select
                className={styles.pageSize}
                aria-label="每页条数"
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
              >
                {pageSizeOptions.map((n) => (
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
