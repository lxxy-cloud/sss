import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "选题申报记录",
};

export default function Page() {
  return <KjtestPage key="/manage/technologyProject/collectTopics/collectTopicsSearch" route="/manage/technologyProject/collectTopics/collectTopicsSearch" />;
}
