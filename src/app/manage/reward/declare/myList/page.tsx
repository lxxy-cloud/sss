import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "奖励申报",
};

export default function Page() {
  return <KjtestPage key="/manage/reward/declare/myList" route="/manage/reward/declare/myList" />;
}
