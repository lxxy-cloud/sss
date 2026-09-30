import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "评审结果",
};

export default function Page() {
  return <KjtestPage key="/manage/reward/recommendResult/resultQuery" route="/manage/reward/recommendResult/resultQuery" />;
}
