import type { Metadata } from "next";

import { ProjectList } from "@/components/sites/kjtest-ceec-net-cn-be3d45d6/manage-technologyproject-projectoverview-dad5ed7b/ProjectList";

export const metadata: Metadata = {
  title: "项目清单",
};

export default function ProjectsPage() {
  return <ProjectList />;
}
