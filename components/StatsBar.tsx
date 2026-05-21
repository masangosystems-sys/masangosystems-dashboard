import type { Project } from "@/lib/projects";
import { getProjectStats } from "@/lib/projects";

type StatsBarProps = {
  projects: Project[];
};

export function StatsBar({ projects }: StatsBarProps) {
  const stats = getProjectStats(projects);
  const items = [
    { label: "Total Projects", value: stats.total },
    { label: "Live", value: stats.live },
    { label: "In Development", value: stats.active },
    { label: "Planned", value: stats.planned },
  ];

  return (
    <section className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-3 px-5 pt-6 sm:px-7 md:grid-cols-4 lg:px-8">
      {items.map((item) => (
        <div
          className="min-w-0 rounded-xl border border-[var(--border)] bg-[color:var(--surface)] px-5 py-4 transition-all"
          key={item.label}
        >
          <div className="font-serif text-3xl font-semibold leading-none text-[color:var(--gold)]">
            {item.value}
          </div>
          <div className="mt-2 text-xs font-medium text-[color:var(--text-muted)]">
            {item.label}
          </div>
        </div>
      ))}
    </section>
  );
}
