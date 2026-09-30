import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "外部奖励登记",
};

export default function Page() {
  return <KjtestPage key="/manage/techRewards/externalRewards/externalRewardsRegistration/list" route="/manage/techRewards/externalRewards/externalRewardsRegistration/list" />;
}
