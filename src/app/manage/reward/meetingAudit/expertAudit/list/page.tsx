import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "专家会审",
};

export default function Page() {
  return <KjtestPage route="/manage/reward/meetingAudit/expertAudit/list" />;
}
