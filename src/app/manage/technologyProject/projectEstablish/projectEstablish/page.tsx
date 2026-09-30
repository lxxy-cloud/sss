import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "立项填报",
};

export default function Page() {
  return <KjtestPage key="/manage/technologyProject/projectEstablish/projectEstablish" route="/manage/technologyProject/projectEstablish/projectEstablish" />;
}
