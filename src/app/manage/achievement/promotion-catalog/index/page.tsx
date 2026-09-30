import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "成果推广目录",
};

export default function Page() {
  return <KjtestPage route="/manage/achievement/promotion-catalog/index" />;
}
