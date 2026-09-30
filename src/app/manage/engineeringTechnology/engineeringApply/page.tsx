import { FormPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/FormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "评审申请",
};

export default function EngineeringApplyPage() {
  return (
    <FormPage
      breadcrumb={["重大工程技术方案评审", "评审申请"]}
      submitLabel="提交申请"
      sections={[
        {
          title: "基本信息",
          fields: [
            { kind: "text", name: "projectName", label: "项目名称", required: true, placeholder: "请输入项目名称" },
            { kind: "select", name: "techField", label: "技术领域", required: true, options: ["电力工程", "新能源", "水利水电", "基础设施建设", "生态环保", "信息技术", "其他"] },
            { kind: "text", name: "applicantUnit", label: "申报单位", required: true, placeholder: "请输入申报单位" },
            { kind: "text", name: "contactPerson", label: "联系人", required: true, placeholder: "请输入联系人姓名" },
            { kind: "text", name: "contactPhone", label: "联系电话", required: true, placeholder: "请输入联系电话" },
          ],
        },
        {
          title: "项目信息",
          fields: [
            { kind: "date", name: "startDate", label: "起始日期", required: true },
            { kind: "date", name: "endDate", label: "结束日期", required: true },
            { kind: "number", name: "budget", label: "项目预算（万元）", required: true, placeholder: "请输入项目预算" },
            { kind: "radio", name: "isKeyProject", label: "是否重点项目", options: ["是", "否"], defaultValue: "否" },
          ],
        },
        {
          title: "技术方案",
          fields: [
            { kind: "textarea", name: "techSolution", label: "技术方案概述", required: true, rows: 6, placeholder: "请详细描述技术方案的关键创新点、技术路线和预期成果" },
            { kind: "textarea", name: "techIndicators", label: "主要技术指标", required: true, rows: 4, placeholder: "请列出主要技术指标" },
          ],
        },
        {
          title: "附件上传",
          fields: [
            { kind: "file", name: "proposalFile", label: "申报书", required: true },
            { kind: "file", name: "techFile", label: "技术方案附件" },
            { kind: "file", name: "otherFiles", label: "其他证明材料" },
          ],
        },
      ]}
    />
  );
}
