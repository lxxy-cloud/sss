import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "评审申请",
};

export default function Page() {
  return <KjtestPage key="/manage/engineeringTechnology/engineeringApply" route="/manage/engineeringTechnology/engineeringApply" />;
}
