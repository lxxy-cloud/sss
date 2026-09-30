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

  return (
    <AuthenticatedPage
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
    />
  );
}
