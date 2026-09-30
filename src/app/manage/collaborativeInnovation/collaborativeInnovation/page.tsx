import { FormPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/FormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "协同创新",
};

export default function CollaborativeInnovationPage() {
  return (
    <FormPage
      breadcrumb={["协同创新"]}
      submitLabel="提交申请"
      sections={[
        {
          title: "项目基本信息",
          fields: [
            { kind: "text", name: "projectName", label: "项目名称", required: true, placeholder: "请输入协同创新项目名称" },
            { kind: "select", name: "innovationType", label: "创新类型", required: true, options: ["产学研合作", "产业链协同", "国际合作", "企业联盟", "技术转让", "联合实验室"] },
            { kind: "select", name: "industry", label: "所属领域", required: true, options: ["电力工程", "新能源", "水利水电", "基础设施建设", "生态环保", "信息技术", "智能制造", "其他"] },
            { kind: "text", name: "leadUnit", label: "牵头单位", required: true, placeholder: "请输入牵头单位名称" },
            { kind: "text", name: "cooperativeUnits", label: "合作单位", required: true, placeholder: "请输入合作单位（多家用、分隔）" },
            { kind: "text", name: "projectLeader", label: "项目负责人", required: true, placeholder: "请输入项目负责人姓名" },
            { kind: "text", name: "contactPhone", label: "联系电话", required: true, placeholder: "请输入联系电话" },
            { kind: "text", name: "email", label: "联系邮箱", placeholder: "请输入联系邮箱" },
          ],
        },
        {
          title: "项目周期与投入",
          fields: [
            { kind: "date", name: "startDate", label: "起始日期", required: true },
            { kind: "date", name: "endDate", label: "结束日期", required: true },
            { kind: "number", name: "totalBudget", label: "项目总预算（万元）", required: true, placeholder: "请输入项目总预算" },
            { kind: "number", name: "selfFunding", label: "自筹经费（万元）", placeholder: "请输入自筹经费" },
            { kind: "number", name: "externalFunding", label: "外部资助（万元）", placeholder: "请输入外部资助" },
            { kind: "radio", name: "fundingSource", label: "资助来源", options: ["国家", "省部级", "集团内部", "企业自筹", "混合"], defaultValue: "企业自筹" },
          ],
        },
        {
          title: "项目内容",
          fields: [
            { kind: "textarea", name: "background", label: "项目背景", required: true, rows: 4, placeholder: "请简要描述项目的背景、必要性和紧迫性" },
            { kind: "textarea", name: "objectives", label: "项目目标", required: true, rows: 4, placeholder: "请描述项目的总体目标、阶段性目标和具体指标" },
            { kind: "textarea", name: "techSolution", label: "技术方案", required: true, rows: 5, placeholder: "请详细描述技术方案、创新点和实施路径" },
            { kind: "textarea", name: "expectedResults", label: "预期成果", required: true, rows: 4, placeholder: "请列出预期取得的专利、论文、产品、标准等成果" },
          ],
        },
        {
          title: "团队与附件",
          fields: [
            { kind: "textarea", name: "teamMembers", label: "主要参与人员", required: true, rows: 3, placeholder: "请列出主要参与人员姓名、单位和分工" },
            { kind: "file", name: "cooperationAgreement", label: "合作协议", required: true },
            { kind: "file", name: "feasibilityReport", label: "可行性报告" },
            { kind: "file", name: "otherMaterials", label: "其他附件" },
          ],
        },
      ]}
    />
  );
}