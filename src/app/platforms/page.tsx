import type { Metadata } from "next";
import { PlatformList } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/manage-rdplatform-platformoverview-list-e06b8f82/PlatformList";

export const metadata: Metadata = {
  title: "科技创新管理系统",
};

export default function PlatformsPage() {
  return <PlatformList />;
}
