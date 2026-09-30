import { FormPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/FormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "项目审核",
};

export default function ProjectApplicationInvestigatePage() {
  return (
    <FormPage
      breadcrumb={["科技项目", "揭榜挂帅", "项目审核"]}
      submitLabel="提交审核"
      sections={[
        {
          title: "项目基本信息",
          fields: [
            { kind: "text", name: "projectName", label: "项目名称", required: true, placeholder: "请输入项目名称" },
            { kind: "text", name: "applicantUnit", label: "申报单位", required: true, placeholder: "请输入申报单位" },
            { kind: "text", name: "projectLeader", label: "项目负责人", required: true, placeholder: "请输入项目负责人姓名" },
            { kind: "number", name: "totalBudget", label: "项目总预算（万元）", placeholder: "请输入项目总预算" },
            { kind: "select", name: "auditResult", label: "审核结论", required: true, options: ["通过", "修改后通过", "修改后重新评审", "不通过"] },
            { kind: "text", name: "auditor", label: "审核人", required: true, placeholder: "请输入审核人姓名" },
            { kind: "text", name: "auditDate", label: "审核日期", placeholder: "请输入审核日期" },
          ],
        },
        {
          title: "评分",
          fields: [
            { kind: "number", name: "techScore", label: "技术水平（0-100）", required: true, placeholder: "请输入技术水平分" },
            { kind: "number", name: "feasibilityScore", label: "方案可行性（0-100）", required: true, placeholder: "请输入可行性分" },
            { kind: "number", name: "teamScore", label: "团队实力（0-100）", placeholder: "请输入团队实力分" },
            { kind: "number", name: "innovationScore", label: "创新性（0-100）", placeholder: "请输入创新性分" },
          ],
        },
        {
          title: "审核意见",
          fields: [
            { kind: "textarea", name: "strengths", label: "项目优势", required: true, rows: 4, placeholder: "请描述申报项目的优势和亮点" },
            { kind: "textarea", name: "issues", label: "存在问题", required: true, rows: 4, placeholder: "请描述申报材料和方案中存在的问题" },
            { kind: "textarea", name: "improvements", label: "整改建议", required: true, rows: 4, placeholder: "请提出具体的整改建议" },
            { kind: "textarea", name: "conclusion", label: "审核结论", required: true, rows: 3, placeholder: "请给出最终审核结论" },
          ],
        },
      ]}
    />
  );
}