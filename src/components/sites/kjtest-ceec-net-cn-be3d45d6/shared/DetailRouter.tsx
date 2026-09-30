"use client";

import { useMemo } from "react";

import { DEMO_ROWS } from "./demoData";
import { DEMO_ROWS_EMPTY } from "./demoDataEmpty";
import { DetailPage, type DetailField, type DetailSection } from "./DetailPage";
import { ROUTE_CFGS } from "./routeConfigs";

const ALL_ROWS = { ...DEMO_ROWS_EMPTY, ...DEMO_ROWS };

const ROUTE_TITLE: Record<string, string> = {
  "/projects": "项目详情",
  "/platforms": "平台详情",
  "/users": "个人用户详情",
  "/rewards": "奖励详情",
  "/manage/achievement/constructionManagement/constructionList": "工法详情",
};

const ROUTE_CRUMB: Record<string, string[]> = {
  "/projects": ["科技项目", "项目清单"],
  "/platforms": ["研发平台", "研发平台清单"],
  "/users": ["用户管理", "个人用户"],
  "/rewards": ["科技奖励", "奖励清单"],
  "/manage/achievement/constructionManagement/constructionList": ["科技成果", "工法管理", "工法清单"],
};

const STATUS_TONE: Record<string, "green" | "blue" | "orange" | "red" | "gray"> = {
  "在研": "green",
  "验收": "blue",
  "验收文档": "blue",
  "正常": "green",
  "已通过": "green",
  "已退回": "red",
  "待审核": "orange",
};

function buildSections(row: Record<string, unknown>): DetailSection[] {
  const entries = Object.entries(row).filter(([k]) => k !== "id" && k !== "userId" && !k.startsWith("_"));
  // Split into 2-column rows
  const fields: DetailField[] = entries.map(([k, v]) => ({ label: k, value: v as React.ReactNode }));
  return [{ title: "全部字段", fields }];
}

export function DetailRouter({ route, id }: { route: string; id: string }) {
  const cfg = ROUTE_CFGS[route];
  const rows = useMemo(() => cfg ? (ALL_ROWS[cfg.rowsKey] ?? []) : [], [cfg]);
  const row = useMemo(() => rows.find((r) => {
    const rec = r as { id?: number; userId?: number };
    return String(rec.id ?? rec.userId ?? "") === String(id);
  }), [rows, id]);

  const title = ROUTE_TITLE[route] ?? "详情";
  const crumb = ROUTE_CRUMB[route] ?? [];
  const fullCrumb = [...crumb, id];

  if (!row) {
    return (
      <DetailPage
        breadcrumb={fullCrumb}
        id={id}
        title={title}
        status={{ label: "未找到", tone: "gray" }}
        sections={[{ title: "提示", fields: [
          { label: "说明", value: `在本地演示数据中没有找到 ID 为 ${id} 的记录。` },
          { label: "原始路由", value: route },
        ] }]}
        actions={[{ label: "返回列表", href: route }]}
      />
    );
  }

  const status = row["项目状态"] ?? row["运行状态"] ?? row["审核状态"];
  const statusText = status !== undefined ? String(status) : undefined;
  const statusTone = statusText ? STATUS_TONE[statusText] : undefined;

  return (
    <DetailPage
      breadcrumb={fullCrumb}
      id={id}
      title={title}
      status={statusText ? { label: statusText, tone: statusTone ?? "gray" } : undefined}
      sections={buildSections(row)}
      actions={[
        { label: "编辑", primary: true, onClick: () => window.alert(`演示模式：编辑 ${id}`) },
        { label: "返回列表", href: route },
        { label: "删除", danger: true, onClick: () => window.confirm(`确认删除 ${id}？\n（演示模式，不会真删）`) ? window.alert("已删除（演示）") : undefined },
      ]}
    />
  );
}
