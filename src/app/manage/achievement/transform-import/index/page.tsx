import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "成果转化与引进",
};

export default function Page() {
  return <KjtestPage key="/manage/achievement/transform-import/index" route="/manage/achievement/transform-import/index" />;
}
