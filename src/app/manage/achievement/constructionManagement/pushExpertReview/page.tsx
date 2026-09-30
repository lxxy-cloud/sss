import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "推送专家评审",
};

export default function Page() {
  return <KjtestPage key="/manage/achievement/constructionManagement/pushExpertReview" route="/manage/achievement/constructionManagement/pushExpertReview" />;
}
