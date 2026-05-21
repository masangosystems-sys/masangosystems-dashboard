import { Header } from "@/components/Header";
import { NextActionsPanel } from "@/components/NextActionsPanel";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { QuickLinksPanel } from "@/components/QuickLinksPanel";
import { StatsBar } from "@/components/StatsBar";
import { getProjects, getQuickLinks } from "@/lib/projects";

export default function Home() {
  const projects = getProjects();
  const quickLinks = getQuickLinks();

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      <Header />
      <StatsBar projects={projects} />
      <main className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 overflow-hidden px-5 py-10 sm:px-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
        <ProjectsGrid projects={projects} />
        <aside className="min-w-0 space-y-6">
          <NextActionsPanel projects={projects} />
          <QuickLinksPanel links={quickLinks} />
        </aside>
      </main>
      <footer className="px-5 pb-8 text-center text-xs text-[color:var(--text-muted)]">
        © 2026 Masango Systems
      </footer>
    </div>
  );
}
