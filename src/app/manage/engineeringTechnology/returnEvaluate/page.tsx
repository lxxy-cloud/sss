import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "回访与评价",
};

export default function Page() {
  return <KjtestPage key="/manage/engineeringTechnology/returnEvaluate" route="/manage/engineeringTechnology/returnEvaluate" />;
}
