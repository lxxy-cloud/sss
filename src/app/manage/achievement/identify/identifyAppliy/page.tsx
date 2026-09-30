import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "成果鉴定申请",
};

export default function Page() {
  return <KjtestPage key="/manage/achievement/identify/identifyAppliy" route="/manage/achievement/identify/identifyAppliy" />;
}
