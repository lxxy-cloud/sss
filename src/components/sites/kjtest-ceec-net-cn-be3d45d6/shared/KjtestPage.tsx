"use client";

import { useMemo } from "react";

import { AuthenticatedPage } from "./AuthenticatedPage";
import { SIDEBAR } from "./pageConfigs";
import { ROUTE_CFGS, type RouteCfg } from "./routeConfigs";
import { DEMO_ROWS } from "./demoData";
import { DEMO_ROWS_EMPTY } from "./demoDataEmpty";
import type { Row } from "./types";

const ALL_ROWS = { ...DEMO_ROWS_EMPTY, ...DEMO_ROWS };

export function KjtestPage({ route }: { route: string }) {
  const cfg: RouteCfg | undefined = ROUTE_CFGS[route];
  const rows = useMemo<Row[]>(() => {
    if (!cfg) return [];
    return ALL_ROWS[cfg.rowsKey] ?? [];
  }, [cfg]);

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
      breadcrumb={cfg.breadcrumb ?? []}
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
