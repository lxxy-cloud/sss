import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "认定记录",
};

export default function Page() {
  return <KjtestPage key="/manage/RDPlatform/platformCognizance/platformVerificationQuery" route="/manage/RDPlatform/platformCognizance/platformVerificationQuery" />;
}
