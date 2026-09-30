import { FormPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/FormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "项目验收",
};

export default function ProjectAcceptancePage() {
  return (
    <FormPage
      breadcrumb={["科技项目", "项目验收"]}
      submitLabel="提交验收"
      sections={[
        {
          title: "项目基本信息",
          fields: [
            { kind: "text", name: "projectName", label: "项目名称", required: true, placeholder: "请输入项目名称" },
            { kind: "text", name: "projectCode", label: "项目编号", placeholder: "系统自动生成或手动指定" },
            { kind: "select", name: "acceptanceType", label: "验收类型", required: true, options: ["整体验收", "阶段验收", "财务验收", "技术验收"] },
            { kind: "text", name: "leadUnit", label: "承担单位", required: true, placeholder: "请输入项目承担单位" },
            { kind: "text", name: "projectLeader", label: "项目负责人", required: true, placeholder: "请输入项目负责人姓名" },
            { kind: "text", name: "contactPhone", label: "联系电话", required: true, placeholder: "请输入联系电话" },
          ],
        },
        {
          title: "项目执行情况",
          fields: [
            { kind: "date", name: "startDate", label: "实际起始日期", required: true },
            { kind: "date", name: "endDate", label: "实际结束日期", required: true },
            { kind: "number", name: "actualBudget", label: "实际支出（万元）", required: true, placeholder: "请输入实际支出" },
            { kind: "number", name: "plannedBudget", label: "计划预算（万元）", placeholder: "请输入计划预算" },
            { kind: "radio", name: "isOnSchedule", label: "是否按期完成", options: ["是", "否"], defaultValue: "是" },
            { kind: "radio", name: "isOnBudget", label: "是否在预算内", options: ["是", "否"], defaultValue: "是" },
          ],
        },
        {
          title: "完成情况与成果",
          fields: [
            { kind: "textarea", name: "completion", label: "完成情况概述", required: true, rows: 5, placeholder: "请描述项目完成情况、达到的目标与未完成的部分" },
            { kind: "textarea", name: "achievedResults", label: "已取得成果", required: true, rows: 4, placeholder: "请列出已取得的专利、论文、产品、标准等成果" },
            { kind: "textarea", name: "techIndicators", label: "技术指标达成情况", required: true, rows: 4, placeholder: "请描述各项技术指标的达成情况" },
            { kind: "textarea", name: "financialSummary", label: "经费使用情况", rows: 4, placeholder: "请描述经费使用情况" },
          ],
        },
        {
          title: "附件",
          fields: [
            { kind: "file", name: "acceptanceReport", label: "项目验收报告", required: true },
            { kind: "file", name: "workSummary", label: "工作总结报告" },
            { kind: "file", name: "financialAudit", label: "财务审计报告" },
            { kind: "file", name: "resultCertificates", label: "成果证明材料" },
          ],
        },
      ]}
    />
  );
}