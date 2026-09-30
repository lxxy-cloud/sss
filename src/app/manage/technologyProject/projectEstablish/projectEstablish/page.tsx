import { FormPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/FormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "立项填报",
};

export default function ProjectEstablishPage() {
  return (
    <FormPage
      breadcrumb={["科技项目", "项目立项", "立项填报"]}
      submitLabel="提交立项"
      sections={[
        {
          title: "立项基本信息",
          fields: [
            { kind: "text", name: "projectName", label: "项目名称", required: true, placeholder: "请输入项目名称" },
            { kind: "text", name: "projectCode", label: "项目编号", placeholder: "系统自动生成或手动指定" },
            { kind: "select", name: "projectLevel", label: "项目级别", required: true, options: ["国家级", "省部级", "集团级", "子集团级", "子企业级"] },
            { kind: "select", name: "mechanism", label: "立项机制", required: true, options: ["揭榜挂帅", "评审立项", "自主立项", "承接立项"] },
            { kind: "text", name: "leadUnit", label: "承担单位", required: true, placeholder: "请输入项目承担单位" },
            { kind: "text", name: "cooperativeUnits", label: "合作单位", placeholder: "请输入合作单位（多家用、分隔）" },
            { kind: "text", name: "projectLeader", label: "项目负责人", required: true, placeholder: "请输入项目负责人姓名" },
            { kind: "text", name: "contactPhone", label: "联系电话", required: true, placeholder: "请输入联系电话" },
          ],
        },
        {
          title: "项目周期与经费",
          fields: [
            { kind: "date", name: "startDate", label: "起始日期", required: true },
            { kind: "date", name: "endDate", label: "结束日期", required: true },
            { kind: "number", name: "totalBudget", label: "项目总预算（万元）", required: true, placeholder: "请输入项目总预算" },
            { kind: "number", name: "yearBudget", label: "本年度预算（万元）", placeholder: "请输入本年度预算" },
            { kind: "number", name: "selfFunding", label: "自筹经费（万元）", placeholder: "请输入自筹经费" },
            { kind: "number", name: "externalFunding", label: "外部资助（万元）", placeholder: "请输入外部资助" },
          ],
        },
        {
          title: "项目内容",
          fields: [
            { kind: "textarea", name: "researchContent", label: "研究内容", required: true, rows: 5, placeholder: "请详细描述项目的研究内容、技术路线" },
            { kind: "textarea", name: "techIndicators", label: "技术指标", required: true, rows: 4, placeholder: "请列出主要技术指标" },
            { kind: "textarea", name: "expectedResults", label: "预期成果", required: true, rows: 4, placeholder: "请列出预期取得的成果" },
            { kind: "textarea", name: "implementationPlan", label: "实施计划", required: true, rows: 4, placeholder: "请描述分阶段实施计划" },
          ],
        },
        {
          title: "附件",
          fields: [
            { kind: "file", name: "establishmentForm", label: "立项申请书", required: true },
            { kind: "file", name: "budgetSheet", label: "经费预算表", required: true },
            { kind: "file", name: "taskBook", label: "任务书" },
            { kind: "file", name: "otherMaterials", label: "其他附件" },
          ],
        },
      ]}
    />
  );
}