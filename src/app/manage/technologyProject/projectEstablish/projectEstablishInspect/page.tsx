import { FormPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/FormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "立项审核",
};

export default function ProjectEstablishInspectPage() {
  return (
    <FormPage
      breadcrumb={["科技项目", "项目立项", "立项审核"]}
      submitLabel="提交审核"
      sections={[
        {
          title: "项目基本信息",
          fields: [
            { kind: "text", name: "projectName", label: "项目名称", required: true, placeholder: "请输入项目名称" },
            { kind: "text", name: "leadUnit", label: "承担单位", required: true, placeholder: "请输入项目承担单位" },
            { kind: "text", name: "projectLeader", label: "项目负责人", required: true, placeholder: "请输入项目负责人姓名" },
            { kind: "text", name: "totalBudget", label: "项目总预算（万元）", placeholder: "请输入项目总预算" },
            { kind: "select", name: "auditResult", label: "审核结论", required: true, options: ["通过", "修改后通过", "修改后重新评审", "不通过"] },
            { kind: "text", name: "auditor", label: "审核人", required: true, placeholder: "请输入审核人姓名" },
            { kind: "text", name: "auditDate", label: "审核日期", placeholder: "请输入审核日期" },
          ],
        },
        {
          title: "评分",
          fields: [
            { kind: "number", name: "techScore", label: "技术方案（0-100）", required: true, placeholder: "请输入技术方案分" },
            { kind: "number", name: "teamScore", label: "团队实力（0-100）", required: true, placeholder: "请输入团队实力分" },
            { kind: "number", name: "budgetScore", label: "预算合理性（0-100）", placeholder: "请输入预算合理性分" },
            { kind: "number", name: "riskScore", label: "风险评估（0-100）", placeholder: "请输入风险评估分" },
          ],
        },
        {
          title: "审核意见",
          fields: [
            { kind: "textarea", name: "strengths", label: "项目优势", required: true, rows: 4, placeholder: "请描述项目立项的优势" },
            { kind: "textarea", name: "issues", label: "存在问题", required: true, rows: 4, placeholder: "请描述立项材料和方案中存在的问题" },
            { kind: "textarea", name: "improvements", label: "整改要求", required: true, rows: 4, placeholder: "请提出具体的整改要求和时限" },
            { kind: "textarea", name: "conclusion", label: "审核结论", required: true, rows: 3, placeholder: "请给出最终审核结论" },
          ],
        },
      ]}
    />
  );
}