import ProjectsPage from "../../src/components/ProjectsPage";
import { getProjects } from "../../src/lib/portfolio-data";

export const metadata = {
  title: "Web & Mobile Development Projects",
  description:
    "Explore web, mobile, interface, and data projects built by Muhammad Alif Wahyudi using modern development tools.",
  alternates: { canonical: "/projects" },
  openGraph: {
    url: "/projects",
    title: "Development Projects by Muhammad Alif Wahyudi",
    description: "A selected collection of web, mobile, interface, and data-driven projects.",
  },
};

export default async function Page() {
  const projects = await getProjects();
  return <ProjectsPage projects={projects} />;
}
