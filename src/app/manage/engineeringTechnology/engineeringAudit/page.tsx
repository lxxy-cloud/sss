import { FormPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/FormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "评审审核",
};

export default function EngineeringAuditPage() {
  return (
    <FormPage
      breadcrumb={["重大工程技术方案评审", "评审审核"]}
      submitLabel="提交审核意见"
      sections={[
        {
          title: "评审项目信息",
          fields: [
            { kind: "text", name: "projectName", label: "项目名称", required: true, placeholder: "请输入项目名称" },
            { kind: "text", name: "applicantUnit", label: "申报单位", required: true, placeholder: "请输入申报单位" },
            { kind: "select", name: "auditResult", label: "审核结论", required: true, options: ["通过", "修改后通过", "修改后重新评审", "不通过"] },
            { kind: "select", name: "auditLevel", label: "项目级别", required: true, options: ["特级", "一级", "二级", "三级"] },
            { kind: "text", name: "auditor", label: "审核人", required: true, placeholder: "请输入审核人姓名" },
            { kind: "text", name: "auditDate", label: "审核日期", placeholder: "请输入审核日期" },
          ],
        },
        {
          title: "审核评分",
          fields: [
            { kind: "number", name: "techScore", label: "技术水平（0-100）", required: true, placeholder: "请输入技术水平分" },
            { kind: "number", name: "EconomyScore", label: "经济效益（0-100）", required: true, placeholder: "请输入经济效益分" },
            { kind: "number", name: "socialScore", label: "社会效益（0-100）", placeholder: "请输入社会效益分" },
            { kind: "number", name: "feasibilityScore", label: "可实施性（0-100）", required: true, placeholder: "请输入可实施性分" },
          ],
        },
        {
          title: "审核意见",
          fields: [
            { kind: "textarea", name: "advantages", label: "项目亮点", required: true, rows: 4, placeholder: "请描述项目的主要亮点和创新点" },
            { kind: "textarea", name: "issues", label: "存在问题", required: true, rows: 4, placeholder: "请指出项目方案中存在的问题与不足" },
            { kind: "textarea", name: "suggestions", label: "修改建议", required: true, rows: 4, placeholder: "请提出具体的修改建议" },
            { kind: "textarea", name: "conclusion", label: "总体结论", required: true, rows: 3, placeholder: "请给出总体审核结论" },
          ],
        },
      ]}
    />
  );
}