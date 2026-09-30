import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "用户配置",
};

export default function Page() {
  return <KjtestPage key="/manage/systemManage/user" route="/manage/systemManage/user" />;
}
