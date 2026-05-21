import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/lib/projects";

type ProjectsGridProps = {
  projects: Project[];
};

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <section className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
