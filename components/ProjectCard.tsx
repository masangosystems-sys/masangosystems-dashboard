import { ExternalLink, GitBranch } from "lucide-react";
import type { Project, ProjectStatus } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

const badgeContent: Record<ProjectStatus, { label: string; className: string }> = {
  live: {
    label: "Live",
    className: "bg-[rgba(76,175,111,0.15)] text-[color:var(--green)]",
  },
  active: {
    label: "Active",
    className: "bg-[color:var(--gold-muted)] text-[color:var(--gold)]",
  },
  planned: {
    label: "Planned",
    className: "bg-[rgba(255,255,255,0.05)] text-[color:var(--text-muted)]",
  },
  template: {
    label: "Template",
    className: "bg-[rgba(74,127,165,0.15)] text-[color:var(--blue)]",
  },
};

export function ProjectCard({ project }: ProjectCardProps) {
  const badge = badgeContent[project.status];
  const [nextAction, ...remainingActions] = project.nextActions;

  return (
    <article className="group min-w-0 overflow-hidden rounded-xl border border-[var(--border)] bg-[color:var(--surface)] p-6 transition-all hover:-translate-y-0.5 hover:border-[rgba(184,147,58,0.3)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.28)]">
      <div className="flex min-w-0 flex-wrap items-start justify-between gap-3">
        <h2 className="min-w-0 flex-1 break-words font-serif text-xl font-medium leading-tight text-[color:var(--text)]">
          {project.name}
        </h2>
        <span
          className={`rounded-full px-3 py-1 text-[10px] font-medium tracking-[0.04em] uppercase ${badge.className}`}
        >
          {badge.label}
        </span>
      </div>

      <p className="mt-3 line-clamp-2 break-words text-sm leading-6 text-[color:var(--text-muted)]">
        {project.description}
      </p>

      {project.stack.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              className="max-w-full break-words rounded-md border border-[var(--border)] bg-[color:var(--surface-2)] px-2.5 py-1 text-xs font-medium text-[color:var(--gold)]"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-5 flex min-h-6 items-center gap-4">
        {project.liveUrl ? (
          <a
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[color:var(--green)] transition-all hover:opacity-75"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={14} aria-hidden="true" />
            Live
          </a>
        ) : null}
        {project.repoUrl ? (
          <a
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[color:var(--text-muted)] transition-all hover:text-[color:var(--gold)]"
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} GitHub repository`}
          >
            <GitBranch size={15} aria-hidden="true" />
            Repo
          </a>
        ) : null}
      </div>

      <div className="my-5 h-px bg-[color:var(--border)]" />

      {nextAction ? (
        <p className="break-words text-sm leading-6">
          <span className="font-medium text-[color:var(--gold)]">Next - </span>
          <span className="text-[color:var(--text-muted)]">{nextAction}</span>
          {remainingActions.length > 0 ? (
            <span className="ml-2 text-xs font-medium text-[color:var(--gold)] opacity-70">
              + {remainingActions.length} more
            </span>
          ) : null}
        </p>
      ) : null}

      <p className="mt-4 text-xs text-[color:var(--text-muted)] opacity-75">
        Last updated: {project.lastUpdated}
      </p>
    </article>
  );
}
