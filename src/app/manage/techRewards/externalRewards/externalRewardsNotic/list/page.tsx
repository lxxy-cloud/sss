import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "发布通知",
};

export default function Page() {
  return <KjtestPage key="/manage/techRewards/externalRewards/externalRewardsNotic/list" route="/manage/techRewards/externalRewards/externalRewardsNotic/list" />;
}
