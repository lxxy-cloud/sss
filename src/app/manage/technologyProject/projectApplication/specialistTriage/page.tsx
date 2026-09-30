import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "推送专家会审",
};

export default function Page() {
  return <KjtestPage route="/manage/technologyProject/projectApplication/specialistTriage" />;
}
