import { FormPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/FormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "考核评价",
};

export default function AssessmentEvaluateAllPage() {
  return (
    <FormPage
      breadcrumb={["考核管理", "考核评价"]}
      submitLabel="提交评价"
      sections={[
        {
          title: "考核基本信息",
          fields: [
            { kind: "select", name: "assessmentYear", label: "考核年度", required: true, options: ["2022", "2023", "2024", "2025", "2026"] },
            { kind: "text", name: "evaluatedUnit", label: "被考核单位", required: true, placeholder: "请输入被考核单位" },
            { kind: "select", name: "assessmentType", label: "考核类型", required: true, options: ["年度考核", "专项考核", "中期考核", "任期考核"] },
            { kind: "text", name: "evaluator", label: "评价人", required: true, placeholder: "请输入评价人姓名" },
            { kind: "text", name: "evaluatorRole", label: "评价人职务", placeholder: "请输入评价人职务" },
          ],
        },
        {
          title: "评分项",
          fields: [
            { kind: "number", name: "scoreBusiness", label: "业绩指标得分", required: true, placeholder: "请输入业绩指标得分（0-100）" },
            { kind: "number", name: "scoreManagement", label: "管理指标得分", required: true, placeholder: "请输入管理指标得分（0-100）" },
            { kind: "number", name: "scoreInnovation", label: "创新与成长得分", placeholder: "请输入创新与成长得分（0-100）" },
            { kind: "number", name: "scoreDiscipline", label: "党建与廉洁得分", placeholder: "请输入党建与廉洁得分（0-100）" },
            { kind: "select", name: "finalRating", label: "综合评价等级", required: true, options: ["优秀", "良好", "合格", "基本合格", "不合格"] },
          ],
        },
        {
          title: "评价意见",
          fields: [
            { kind: "textarea", name: "strengths", label: "主要成绩与亮点", required: true, rows: 5, placeholder: "请描述被考核单位的主要成绩、亮点工作" },
            { kind: "textarea", name: "weaknesses", label: "存在不足", required: true, rows: 4, placeholder: "请指出被考核单位存在的不足与短板" },
            { kind: "textarea", name: "suggestions", label: "改进建议", required: true, rows: 4, placeholder: "请提出下一步改进建议和期望" },
          ],
        },
      ]}
    />
  );
}