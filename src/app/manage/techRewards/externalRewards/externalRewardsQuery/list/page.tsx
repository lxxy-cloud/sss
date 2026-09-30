import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "申报记录",
};

export default function Page() {
  return <KjtestPage route="/manage/techRewards/externalRewards/externalRewardsQuery/list" />;
}
