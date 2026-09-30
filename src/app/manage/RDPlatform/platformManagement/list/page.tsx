import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "运行管理",
};

export default function Page() {
  return <KjtestPage key="/manage/RDPlatform/platformManagement/list" route="/manage/RDPlatform/platformManagement/list" />;
}
