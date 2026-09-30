import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "研发平台登记",
};

export default function Page() {
  return <KjtestPage key="/manage/RDPlatform/platformRegistration/list" route="/manage/RDPlatform/platformRegistration/list" />;
}
