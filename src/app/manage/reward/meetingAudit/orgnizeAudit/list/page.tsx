import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "组织专家会审",
};

export default function Page() {
  return <KjtestPage key="/manage/reward/meetingAudit/orgnizeAudit/list" route="/manage/reward/meetingAudit/orgnizeAudit/list" />;
}
