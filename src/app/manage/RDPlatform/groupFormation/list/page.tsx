import type { Metadata } from "next";
import { KjtestPage } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/shared/KjtestPage";

export const metadata: Metadata = {
  title: "能建研发平台组建",
};

export default function Page() {
  return <KjtestPage key="/manage/RDPlatform/groupFormation/list" route="/manage/RDPlatform/groupFormation/list" />;
}
