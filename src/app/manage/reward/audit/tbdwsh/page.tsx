import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "奖励推荐",
};

export default function Page() {
  return <KjtestPage key="/manage/reward/audit/tbdwsh" route="/manage/reward/audit/tbdwsh" />;
}
