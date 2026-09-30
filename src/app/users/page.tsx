import { PeopleListPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/PeopleListPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "个人用户",
};

export default function UsersRoutePage() {
  return <PeopleListPage />;
}