import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "评审组织",
};

export default function Page() {
  return <KjtestPage key="/manage/engineeringTechnology/engineeringOrganization" route="/manage/engineeringTechnology/engineeringOrganization" />;
}
