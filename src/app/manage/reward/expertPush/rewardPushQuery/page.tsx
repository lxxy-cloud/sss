import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "推送专家网评",
};

export default function Page() {
  return <KjtestPage key="/manage/reward/expertPush/rewardPushQuery" route="/manage/reward/expertPush/rewardPushQuery" />;
}
