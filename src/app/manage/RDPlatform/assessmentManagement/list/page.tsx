import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "考核管理",
};

export default function Page() {
  return <KjtestPage key="/manage/RDPlatform/assessmentManagement/list" route="/manage/RDPlatform/assessmentManagement/list" />;
}
