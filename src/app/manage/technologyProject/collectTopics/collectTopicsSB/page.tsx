import { FormPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/FormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "选题申报",
};

export default function CollectTopicsSBPage() {
  return (
    <FormPage
      breadcrumb={["科技项目", "选题征集", "选题申报"]}
      submitLabel="提交申报"
      sections={[
        {
          title: "选题基本信息",
          fields: [
            { kind: "text", name: "topicName", label: "选题名称", required: true, placeholder: "请输入选题名称" },
            { kind: "select", name: "topicType", label: "选题类型", required: true, options: ["技术研发", "成果转化", "平台建设", "人才培育", "战略研究"] },
            { kind: "select", name: "techField", label: "技术领域", required: true, options: ["电力工程", "新能源", "储能", "氢能", "生态环保", "智能建造", "信息技术", "其他"] },
            { kind: "text", name: "proposingUnit", label: "提出单位", required: true, placeholder: "请输入提出单位" },
            { kind: "text", name: "proposer", label: "提出人", required: true, placeholder: "请输入提出人姓名" },
            { kind: "text", name: "contactPhone", label: "联系电话", required: true, placeholder: "请输入联系电话" },
          ],
        },
        {
          title: "选题依据与内容",
          fields: [
            { kind: "textarea", name: "basis", label: "选题依据", required: true, rows: 5, placeholder: "请详细描述选题的背景、必要性和依据" },
            { kind: "textarea", name: "researchContent", label: "研究内容", required: true, rows: 5, placeholder: "请描述选题的研究方向和主要内容" },
            { kind: "textarea", name: "expectedGoals", label: "预期目标", required: true, rows: 4, placeholder: "请描述预期取得的目标和成果" },
            { kind: "number", name: "researchPeriod", label: "研究期限（月）", required: true, placeholder: "请输入研究期限" },
            { kind: "number", name: "estimatedBudget", label: "预估经费（万元）", placeholder: "请输入预估经费" },
          ],
        },
        {
          title: "附件",
          fields: [
            { kind: "file", name: "topicProposal", label: "选题建议书", required: true },
            { kind: "file", name: "backgroundAnalysis", label: "背景分析材料" },
            { kind: "file", name: "otherMaterials", label: "其他附件" },
          ],
        },
      ]}
    />
  );
}