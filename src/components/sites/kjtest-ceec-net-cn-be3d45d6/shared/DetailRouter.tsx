"use client";

import { useMemo } from "react";

import { DEMO_ROWS } from "./demoData";
import { DEMO_ROWS_EMPTY } from "./demoDataEmpty";
import { DetailPage, type DetailField, type DetailSection } from "./DetailPage";
import { ROUTE_CFGS } from "./routeConfigs";

const ALL_ROWS = { ...DEMO_ROWS_EMPTY, ...DEMO_ROWS };

const ROUTE_META: Record<string, { title: string; crumb: string[] }> = {
  "/projects": { title: "项目详情", crumb: ["科技项目", "项目清单"] },
  "/platforms": { title: "平台详情", crumb: ["研发平台", "研发平台清单"] },
  "/users": { title: "个人用户详情", crumb: ["用户管理", "个人用户"] },
  "/rewards": { title: "奖励详情", crumb: ["科技奖励", "奖励清单"] },
  "/manage/achievement/achievementList/achievementList": { title: "成果详情", crumb: ["科技成果", "成果清单"] },
  "/manage/achievement/constructionManagement/constructionList": { title: "工法详情", crumb: ["科技成果", "工法管理", "工法清单"] },
  "/manage/achievement/patenManagement/patentsList": { title: "专利详情", crumb: ["科技成果", "专利管理", "专利清单"] },
  "/manage/technicalStandard/listOfTechnicalStandards/index": { title: "技术标准详情", crumb: ["技术标准", "技术标准清单"] },
};

const STATUS_TONE: Record<string, "green" | "blue" | "orange" | "red" | "gray"> = {
  "在研": "green", "验收": "blue", "验收文档": "blue",
  "正常": "green", "已通过": "green", "已退回": "red", "待审核": "orange",
};

function statusOf(row: Record<string, unknown>): string | undefined {
  return (row["项目状态"] ?? row["运行状态"] ?? row["审核状态"] ?? row["状态"]) as string | undefined;
}

function buildSections(row: Record<string, unknown>): DetailSection[] {
  const entries = Object.entries(row).filter(([k]) =>
    k !== "id" && k !== "userId" && !k.startsWith("_"));
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

  const meta = ROUTE_META[route];
  const title = meta?.title ?? "详情";
  const crumb = meta?.crumb ?? [];
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

  const status = statusOf(row);
  const statusTone = status ? STATUS_TONE[status] : undefined;

  return (
    <DetailPage
      breadcrumb={fullCrumb}
      id={id}
      title={title}
      status={status ? { label: status, tone: statusTone ?? "gray" } : undefined}
      sections={buildSections(row)}
      actions={[
        { label: "编辑", primary: true, onClick: () => window.alert(`演示模式：编辑 ${id}`) },
        { label: "返回列表", href: route },
        { label: "删除", danger: true, onClick: () => window.confirm(`确认删除 ${id}？\n（演示模式，不会真删）`) ? window.alert("已删除（演示）") : undefined },
      ]}
    />
  );
}