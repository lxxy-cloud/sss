import { FormPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/FormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "考核报送",
};

export default function AssessmentSubmissionPage() {
  return (
    <FormPage
      breadcrumb={["考核管理", "考核报送"]}
      submitLabel="提交报送"
      sections={[
        {
          title: "考核基本信息",
          fields: [
            { kind: "select", name: "assessmentYear", label: "考核年度", required: true, options: ["2022", "2023", "2024", "2025", "2026"] },
            { kind: "text", name: "departmentName", label: "报送单位", required: true, placeholder: "请输入报送单位" },
            { kind: "select", name: "assessmentType", label: "考核类型", required: true, options: ["年度考核", "专项考核", "中期考核", "任期考核"] },
            { kind: "text", name: "reporter", label: "报送人", required: true, placeholder: "请输入报送人姓名" },
            { kind: "text", name: "reporterPhone", label: "联系电话", required: true, placeholder: "请输入联系电话" },
          ],
        },
        {
          title: "考核指标完成情况",
          fields: [
            { kind: "number", name: "totalScore", label: "考核总分", required: true, placeholder: "请输入考核总分（百分制）" },
            { kind: "select", name: "rating", label: "考核等级", required: true, options: ["优秀", "良好", "合格", "不合格"] },
            { kind: "textarea", name: "keyAchievements", label: "重点业绩", required: true, rows: 4, placeholder: "请列出本年度重点业绩（不超过 5 项）" },
            { kind: "textarea", name: "weakAreas", label: "薄弱环节", rows: 3, placeholder: "请描述存在的薄弱环节" },
          ],
        },
        {
          title: "自评与改进",
          fields: [
            { kind: "textarea", name: "selfEvaluation", label: "自我评价", required: true, rows: 5, placeholder: "请从工作业绩、能力素质、廉洁自律等方面进行自我评价" },
            { kind: "textarea", name: "improvementPlan", label: "改进计划", rows: 4, placeholder: "请描述下一步改进计划和措施" },
          ],
        },
        {
          title: "附件",
          fields: [
            { kind: "file", name: "assessmentReport", label: "考核报告", required: true },
            { kind: "file", name: "evidenceMaterials", label: "证明材料" },
            { kind: "file", name: "otherDocuments", label: "其他附件" },
          ],
        },
      ]}
    />
  );
}