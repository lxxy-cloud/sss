import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "字典管理",
};

export default function Page() {
  return <KjtestPage key="/manage/systemManage/dictionary/dictionaryQuery" route="/manage/systemManage/dictionary/dictionaryQuery" />;
}
