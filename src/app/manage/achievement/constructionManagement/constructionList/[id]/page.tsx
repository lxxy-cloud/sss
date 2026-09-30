import type { Metadata } from "next";

import { DetailRouter } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/DetailRouter";

export const metadata: Metadata = {
  title: "工法详情",
};

export default async function ConstructionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <DetailRouter route="/manage/achievement/constructionManagement/constructionList" id={id} />;
}