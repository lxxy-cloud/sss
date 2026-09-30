import { FormPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/FormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "选题审核",
};

export default function CollectTopicsSHPage() {
  return (
    <FormPage
      breadcrumb={["科技项目", "选题征集", "选题审核"]}
      submitLabel="提交审核"
      sections={[
        {
          title: "选题信息",
          fields: [
            { kind: "text", name: "topicName", label: "选题名称", required: true, placeholder: "请输入选题名称" },
            { kind: "text", name: "proposingUnit", label: "提出单位", required: true, placeholder: "请输入提出单位" },
            { kind: "text", name: "proposer", label: "提出人", required: true, placeholder: "请输入提出人姓名" },
            { kind: "select", name: "auditResult", label: "审核结论", required: true, options: ["通过", "修改后通过", "修改后重新评审", "不通过"] },
            { kind: "text", name: "auditor", label: "审核人", required: true, placeholder: "请输入审核人姓名" },
            { kind: "text", name: "auditDate", label: "审核日期", placeholder: "请输入审核日期" },
          ],
        },
        {
          title: "评分",
          fields: [
            { kind: "number", name: "innovationScore", label: "创新性（0-100）", required: true, placeholder: "请输入创新性分" },
            { kind: "number", name: "feasibilityScore", label: "可行性（0-100）", required: true, placeholder: "请输入可行性分" },
            { kind: "number", name: "urgencyScore", label: "必要性（0-100）", placeholder: "请输入必要性分" },
            { kind: "number", name: "impactScore", label: "预期影响力（0-100）", placeholder: "请输入预期影响力分" },
          ],
        },
        {
          title: "审核意见",
          fields: [
            { kind: "textarea", name: "strengths", label: "选题优势", required: true, rows: 4, placeholder: "请描述该选题的优势和必要性" },
            { kind: "textarea", name: "concerns", label: "关注问题", required: true, rows: 4, placeholder: "请描述需要进一步澄清或完善的问题" },
            { kind: "textarea", name: "recommendations", label: "完善建议", required: true, rows: 4, placeholder: "请提出对选题的完善建议" },
          ],
        },
      ]}
    />
  );
}