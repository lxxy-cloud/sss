"use client";

import { useMemo } from "react";

import { AuthenticatedPage } from "./AuthenticatedPage";
import { SIDEBAR } from "./pageConfigs";
import { ROUTE_CFGS, type RouteCfg } from "./routeConfigs";
import { DEMO_ROWS } from "./demoData";
import { DEMO_ROWS_EMPTY } from "./demoDataEmpty";
import type { Row } from "./types";

const ALL_ROWS = { ...DEMO_ROWS_EMPTY, ...DEMO_ROWS };

function deriveBreadcrumb(route: string): string[] {
  for (const item of SIDEBAR) {
    if (item.children) {
      for (const child of item.children) {
        if (child.href === route) return [item.label, child.label];
      }
    }
    if (item.href === route) return [item.label];
  }
  return [];
}

function defaultOnClick(label: string) {
  return () => {
    if (typeof window !== "undefined") {
      window.alert(`演示模式：${label}\n（实际接入后端接口）`);
    }
  };
}

export function KjtestPage({ route }: { route: string }) {
  const cfg: RouteCfg | undefined = ROUTE_CFGS[route];
  const rows = useMemo<Row[]>(() => {
    if (!cfg) return [];
    return ALL_ROWS[cfg.rowsKey] ?? [];
  }, [cfg]);

  const breadcrumb = useMemo(() => deriveBreadcrumb(route), [route]);

  if (!cfg) {
    return (
      <div style={{ padding: 40 }}>
        <h2>未配置路由：{route}</h2>
      </div>
    );
  }

  // Resolve tabs: each tab can swap rowsKey/columns/filterRows
  const tabs = cfg.tabs?.map((t) => ({
    key: t.key,
    label: t.label,
    rows: t.rowsKey ? ALL_ROWS[t.rowsKey] ?? [] : rows,
    filterRows: t.filterRows ?? cfg.filterRows,
    columns: t.columns ?? cfg.columns,
    totalCount: t.totalCount ?? cfg.totalCount,
  }));

  return (
    <AuthenticatedPage
      key={route}
      sidebar={SIDEBAR}
      breadcrumb={breadcrumb}
      filterRows={cfg.filterRows}
      columns={cfg.columns}
      rows={rows}
      rowKey={(r, i) => {
        const rec = r as { id?: number; userId?: number };
        return String(rec.id ?? rec.userId ?? i);
      }}
      totalCount={cfg.totalCount}
      detailRouteBase={cfg.detailRouteBase}
      tabs={tabs}
      defaultTab={cfg.defaultTab}
      toolbar={cfg.toolbar?.map((b) => ({
        ...b,
        onClick: defaultOnClick(b.label),
      }))}    />
  );
}
