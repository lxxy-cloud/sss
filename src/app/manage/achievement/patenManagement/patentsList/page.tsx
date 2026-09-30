import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "专利清单",
};

export default function Page() {
  return <KjtestPage key="/manage/achievement/patenManagement/patentsList" route="/manage/achievement/patenManagement/patentsList" />;
}
