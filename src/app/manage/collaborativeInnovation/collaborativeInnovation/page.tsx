import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "协同创新",
};

export default function Page() {
  return <KjtestPage key="/manage/collaborativeInnovation/collaborativeInnovation" route="/manage/collaborativeInnovation/collaborativeInnovation" />;
}
