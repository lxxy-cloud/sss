import { FormPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/FormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "项目申报",
};

export default function ProjectApplicationPage() {
  return (
    <FormPage
      breadcrumb={["科技项目", "揭榜挂帅", "项目申报"]}
      submitLabel="提交申报"
      sections={[
        {
          title: "申报基本信息",
          fields: [
            { kind: "text", name: "projectName", label: "项目名称", required: true, placeholder: "请输入项目名称" },
            { kind: "select", name: "projectType", label: "项目类型", required: true, options: ["揭榜挂帅", "重点研发", "重大科技专项", "技术攻关", "应用基础研究"] },
            { kind: "select", name: "techField", label: "技术领域", required: true, options: ["电力工程", "新能源", "储能", "氢能", "生态环保", "智能建造", "信息技术", "其他"] },
            { kind: "text", name: "applicantUnit", label: "申报单位", required: true, placeholder: "请输入申报单位" },
            { kind: "text", name: "projectLeader", label: "项目负责人", required: true, placeholder: "请输入项目负责人姓名" },
            { kind: "text", name: "contactPhone", label: "联系电话", required: true, placeholder: "请输入联系电话" },
            { kind: "text", name: "email", label: "联系邮箱", placeholder: "请输入联系邮箱" },
          ],
        },
        {
          title: "项目周期与预算",
          fields: [
            { kind: "date", name: "startDate", label: "起始日期", required: true },
            { kind: "date", name: "endDate", label: "结束日期", required: true },
            { kind: "number", name: "totalBudget", label: "项目总预算（万元）", required: true, placeholder: "请输入项目总预算" },
            { kind: "number", name: "yearBudget", label: "本年度预算（万元）", placeholder: "请输入本年度预算" },
            { kind: "radio", name: "isKeyProject", label: "是否重点项目", options: ["是", "否"], defaultValue: "否" },
          ],
        },
        {
          title: "技术方案",
          fields: [
            { kind: "textarea", name: "researchContent", label: "研究内容", required: true, rows: 5, placeholder: "请详细描述项目的研究内容、技术路线、关键技术等" },
            { kind: "textarea", name: "techIndicators", label: "主要技术指标", required: true, rows: 4, placeholder: "请列出主要技术指标和参数" },
            { kind: "textarea", name: "expectedResults", label: "预期成果", required: true, rows: 4, placeholder: "请列出预期取得的专利、论文、产品、标准等成果" },
          ],
        },
        {
          title: "团队与附件",
          fields: [
            { kind: "textarea", name: "teamMembers", label: "主要参与人员", required: true, rows: 3, placeholder: "请列出主要参与人员姓名、单位和分工" },
            { kind: "file", name: "applicationForm", label: "项目申报书", required: true },
            { kind: "file", name: "feasibilityStudy", label: "可行性研究报告" },
            { kind: "file", name: "otherMaterials", label: "其他附件" },
          ],
        },
      ]}
    />
  );
}