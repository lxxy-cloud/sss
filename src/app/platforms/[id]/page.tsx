import type { Metadata } from "next";

import { DetailRouter } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/DetailRouter";

export const metadata: Metadata = {
  title: "平台详情",
};

export default async function PlatformDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <DetailRouter route="/platforms" id={id} />;
}