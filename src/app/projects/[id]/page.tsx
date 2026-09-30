import type { Metadata } from "next";

import { DetailRouter } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/DetailRouter";

export const metadata: Metadata = {
  title: "项目详情",
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <DetailRouter route="/projects" id={id} />;
}