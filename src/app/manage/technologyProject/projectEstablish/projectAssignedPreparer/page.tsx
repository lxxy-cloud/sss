import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "指派项目填报人",
};

export default function Page() {
  return <KjtestPage key="/manage/technologyProject/projectEstablish/projectAssignedPreparer" route="/manage/technologyProject/projectEstablish/projectAssignedPreparer" />;
}
