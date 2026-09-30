import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "工法申报",
};

export default function Page() {
  return <KjtestPage route="/manage/achievement/constructionManagement/constructionDeclaration" />;
}
