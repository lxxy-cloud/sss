import type { ColumnDef } from "./AuthenticatedPage";
import type { Row } from "./types";

const actionStyle = { color: "#1687e8", background: "transparent", border: 0, cursor: "pointer" } as const;
const dangerStyle = { color: "#d9534f", background: "transparent", border: 0, cursor: "pointer" } as const;

function makeAction(label: string, danger = false) {
  function Action() {
    return <button type="button" style={danger ? dangerStyle : actionStyle}>{label}</button>;
  }
  Action.displayName = "Action";
  return Action;
}

function makeActionRow(labels: { label: string; danger?: boolean }[]) {
  function Row() {
    return (
      <span style={{ display: "inline-flex", gap: 6 }}>
        {labels.map((l) => (
          <button key={l.label} type="button" style={l.danger ? dangerStyle : actionStyle}>{l.label}</button>
        ))}
      </span>
    );
  }
  Row.displayName = "ActionRow";
  return Row;
}

function seq() {
  function Seq(_: unknown, i: number) {
    return <>{String(i + 1)}</>;
  }
  Seq.displayName = "Seq";
  return Seq;
}

const VIEW = makeAction("查看");

export const PROJECT_COLUMNS: ColumnDef<Row>[] = [
  { title: "序号", width: "5%", render: seq() },
  { title: "立项年份", width: "7%", sortable: true, sortKey: "立项年份" },
  { title: "项目名称", width: "20%", ellipsis: true, sortable: true, sortKey: "项目名称" },
  { title: "项目等级", width: "7%" },
  { title: "项目类别", width: "9%" },
  { title: "立项机制", width: "8%" },
  { title: "项目起止时间", width: "11%" },
  { title: "牵头单位", width: "18%", ellipsis: true, sortable: true, sortKey: "牵头单位" },
  { title: "项目负责人", width: "6%", sortable: true, sortKey: "项目负责人" },
  { title: "项目总预算经费(万元)", width: "6%" },
  { title: "项目状态", width: "6%" },
  { title: "操作", width: "5%", render: VIEW },
];

export const PLATFORM_COLUMNS: ColumnDef<Row>[] = [
  { title: "序号", width: "5%", render: seq() },
  { title: "平台名称", width: "25%", ellipsis: true, sortable: true, sortKey: "平台名称" },
  { title: "平台等级", width: "9%" },
  { title: "平台类别", width: "17%", ellipsis: true },
  { title: "依托单位", width: "12%", sortable: true, sortKey: "依托单位" },
  { title: "研究领域", width: "17%" },
  { title: "运行状态", width: "8%" },
  { title: "操作", width: "7%", render: VIEW },
];

export const USER_COLUMNS: ColumnDef<Row>[] = [
  { title: "序号", width: "6%", render: seq() },
  { title: "人员编号", width: "12%" },
  { title: "姓名", width: "8%", sortable: true, sortKey: "姓名" },
  { title: "能建内/外", width: "8%" },
  { title: "工作单位", width: "22%", ellipsis: true },
  { title: "是否专家", width: "8%" },
  { title: "管理单位", width: "10%" },
  { title: "从事专业", width: "12%" },
  { title: "操作", width: "14%", render: makeActionRow([{ label: "查看" }, { label: "编辑" }, { label: "禁用" }, { label: "删除", danger: true }]) },
];

export const REWARD_COLUMNS: ColumnDef<Row>[] = [
  { title: "序号", width: "5%", render: seq() },
  { title: "年度", width: "7%", sortable: true, sortKey: "年度" },
  { title: "项目名称", width: "20%", ellipsis: true, sortable: true, sortKey: "项目名称" },
  { title: "主要完成人", width: "20%", ellipsis: true, sortable: true, sortKey: "主要完成人" },
  { title: "主要完成单位", width: "20%", ellipsis: true },
  { title: "获奖级别", width: "8%" },
  { title: "奖励种类", width: "8%" },
  { title: "获奖等级", width: "8%" },
  { title: "操作", width: "4%", render: VIEW },
];

export const ACHIEVEMENT_COLUMNS: ColumnDef<Row>[] = [
  { title: "序号", width: "6%", render: seq() },
  { title: "成果名称", width: "22%", ellipsis: true },
  { title: "成果分类", width: "10%" },
  { title: "成果简介", width: "55%", ellipsis: true, align: "left" },
  { title: "操作", width: "7%", render: VIEW },
];

export const TOPIC_COLUMNS: ColumnDef<Row>[] = [
  { title: "序号", width: "6%", render: seq() },
  { title: "年度", width: "9%" },
  { title: "项目名称", width: "25%", ellipsis: true },
  { title: "发布单位", width: "22%", ellipsis: true },
  { title: "选题依据", width: "18%", ellipsis: true },
  { title: "研究期限(月)", width: "8%" },
  { title: "提出单位", width: "8%" },
  { title: "审核状态", width: "6%" },
  { title: "操作", width: "4%", render: VIEW },
];

export const TOPIC_NOTICE_COLUMNS: ColumnDef<Row>[] = [
  { title: "序号", width: "6%", render: seq() },
  { title: "年度", width: "9%" },
  { title: "通知标题", width: "30%", ellipsis: true },
  { title: "发布单位", width: "22%", ellipsis: true },
  { title: "截止时间", width: "12%" },
  { title: "办结状态", width: "8%" },
  { title: "申报状态", width: "8%" },
  { title: "操作", width: "5%", render: VIEW },
];

export const CONSTRUCTION_COLUMNS: ColumnDef<Row>[] = [
  { title: "序号", width: "6%", render: seq() },
  { title: "年度", width: "9%" },
  { title: "项目名称", width: "30%", ellipsis: true },
  { title: "发布单位", width: "22%", ellipsis: true },
  { title: "完成人", width: "18%", ellipsis: true },
  { title: "审核状态", width: "10%" },
  { title: "操作", width: "5%", render: VIEW },
];

export const PATENT_COLUMNS: ColumnDef<Row>[] = [
  { title: "序号", width: "6%", render: seq() },
  { title: "年度", width: "9%" },
  { title: "专利名称", width: "25%", ellipsis: true },
  { title: "专利号", width: "16%" },
  { title: "专利类型", width: "10%" },
  { title: "申请人", width: "18%", ellipsis: true },
  { title: "审核状态", width: "10%" },
  { title: "操作", width: "6%", render: VIEW },
];

export const STANDARD_COLUMNS: ColumnDef<Row>[] = [
  { title: "序号", width: "6%", render: seq() },
  { title: "年度", width: "9%" },
  { title: "标准名称", width: "30%", ellipsis: true },
  { title: "标准类型", width: "12%" },
  { title: "主编单位", width: "22%", ellipsis: true },
  { title: "状态", width: "12%" },
  { title: "操作", width: "9%", render: VIEW },
];

export const ENGINEERING_COLUMNS: ColumnDef<Row>[] = [
  { title: "序号", width: "6%", render: seq() },
  { title: "年度", width: "9%" },
  { title: "项目名称", width: "28%", ellipsis: true },
  { title: "申报单位", width: "22%", ellipsis: true },
  { title: "技术领域", width: "15%" },
  { title: "评审状态", width: "10%" },
  { title: "操作", width: "10%", render: VIEW },
];

export const ASSESSMENT_COLUMNS: ColumnDef<Row>[] = [
  { title: "序号", width: "6%", render: seq() },
  { title: "年度", width: "9%" },
  { title: "考核名称", width: "25%", ellipsis: true },
  { title: "考核类型", width: "12%" },
  { title: "责任单位", width: "20%", ellipsis: true },
  { title: "状态", width: "12%" },
  { title: "操作", width: "16%", render: makeActionRow([{ label: "查看" }, { label: "编辑" }, { label: "删除", danger: true }]) },
];
