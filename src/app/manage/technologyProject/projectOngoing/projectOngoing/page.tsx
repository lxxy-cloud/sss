import { FormPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/FormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "项目实施",
};

export default function ProjectOngoingPage() {
  return (
    <FormPage
      breadcrumb={["科技项目", "项目实施"]}
      submitLabel="提交实施情况"
      sections={[
        {
          title: "项目基本信息",
          fields: [
            { kind: "text", name: "projectName", label: "项目名称", required: true, placeholder: "请输入项目名称" },
            { kind: "text", name: "projectCode", label: "项目编号", placeholder: "系统自动生成" },
            { kind: "text", name: "leadUnit", label: "承担单位", required: true, placeholder: "请输入项目承担单位" },
            { kind: "text", name: "projectLeader", label: "项目负责人", required: true, placeholder: "请输入项目负责人姓名" },
            { kind: "select", name: "currentStage", label: "当前阶段", required: true, options: ["前期准备", "研究开发", "中试转化", "示范应用", "市场推广", "结题验收"] },
          ],
        },
        {
          title: "本期实施情况",
          fields: [
            { kind: "date", name: "reportDate", label: "报告日期", required: true },
            { kind: "date", name: "startDate", label: "本期起始日期", required: true },
            { kind: "date", name: "endDate", label: "本期结束日期", required: true },
            { kind: "number", name: "budgetUsed", label: "本期经费使用（万元）", required: true, placeholder: "请输入本期经费使用" },
            { kind: "number", name: "budgetTotal", label: "累计使用经费（万元）", placeholder: "请输入累计使用经费" },
            { kind: "select", name: "overallProgress", label: "整体进度", required: true, options: ["正常推进", "略有滞后", "严重滞后", "已暂停"] },
            { kind: "radio", name: "isOnSchedule", label: "是否按计划推进", options: ["是", "否"], defaultValue: "是" },
          ],
        },
        {
          title: "本期进展与成果",
          fields: [
            { kind: "textarea", name: "progress", label: "本期主要进展", required: true, rows: 5, placeholder: "请详细描述本期开展的主要工作、技术突破、关键节点等" },
            { kind: "textarea", name: "achievements", label: "本期取得成果", required: true, rows: 4, placeholder: "请列出本期取得的专利、论文、产品、标准等" },
            { kind: "textarea", name: "issues", label: "存在问题与风险", rows: 4, placeholder: "请描述项目执行中存在的问题、技术风险或资源风险" },
            { kind: "textarea", name: "nextPlan", label: "下期工作计划", required: true, rows: 4, placeholder: "请描述下期的工作目标和重点任务" },
          ],
        },
      ]}
    />
  );
}