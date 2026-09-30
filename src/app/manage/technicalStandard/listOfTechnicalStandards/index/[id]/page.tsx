import type { Metadata } from "next";

import { DetailRouter } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/DetailRouter";

export const metadata: Metadata = {
  title: "技术标准详情",
};

export default async function StandardDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <DetailRouter route="/manage/technicalStandard/listOfTechnicalStandards/index" id={id} />;
}