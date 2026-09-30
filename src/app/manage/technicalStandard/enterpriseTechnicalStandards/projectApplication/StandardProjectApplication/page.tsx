import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "标准项目申报",
};

export default function Page() {
  return <KjtestPage key="/manage/technicalStandard/enterpriseTechnicalStandards/projectApplication/StandardProjectApplication" route="/manage/technicalStandard/enterpriseTechnicalStandards/projectApplication/StandardProjectApplication" />;
}
