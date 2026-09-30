import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "形式审查",
};

export default function Page() {
  return <KjtestPage key="/manage/reward/audit/formExam" route="/manage/reward/audit/formExam" />;
}
