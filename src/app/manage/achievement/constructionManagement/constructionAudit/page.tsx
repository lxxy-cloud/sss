import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "工法审核",
};

export default function Page() {
  return <KjtestPage key="/manage/achievement/constructionManagement/constructionAudit" route="/manage/achievement/constructionManagement/constructionAudit" />;
}
