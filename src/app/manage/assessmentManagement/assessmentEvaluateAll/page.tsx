import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "考核评价",
};

export default function Page() {
  return <KjtestPage key="/manage/assessmentManagement/assessmentEvaluateAll" route="/manage/assessmentManagement/assessmentEvaluateAll" />;
}
