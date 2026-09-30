import { ProfilePage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/ProfilePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "个人信息",
};

export default function MyselfPage() {
  return <ProfilePage />;
}