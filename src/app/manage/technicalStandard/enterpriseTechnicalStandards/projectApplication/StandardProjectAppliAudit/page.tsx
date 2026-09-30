import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "标准项目审核",
};

export default function Page() {
  return <KjtestPage key="/manage/technicalStandard/enterpriseTechnicalStandards/projectApplication/StandardProjectAppliAudit" route="/manage/technicalStandard/enterpriseTechnicalStandards/projectApplication/StandardProjectAppliAudit" />;
}
