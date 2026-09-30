import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "知识管理",
};

export default function Page() {
  return <KjtestPage key="/manage/knowledgeManagement/knowledgeManagement" route="/manage/knowledgeManagement/knowledgeManagement" />;
}
