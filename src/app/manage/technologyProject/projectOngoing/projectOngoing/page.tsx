import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "项目实施",
};

export default function Page() {
  return <KjtestPage route="/manage/technologyProject/projectOngoing/projectOngoing" />;
}
