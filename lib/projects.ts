import config from "@/projects.config.json";

export type ProjectStatus = "live" | "active" | "template" | "planned";
export type QuickLinkIcon =
  | "vault"
  | "github"
  | "vercel"
  | "supabase"
  | "email"
  | "payment"
  | "admin"
  | "intelligence"
  | "performance";

export type Project = {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  liveUrl: string | null;
  repoUrl: string | null;
  stack: string[];
  nextActions: string[];
  lastUpdated: string;
};

export type QuickLink = {
  label: string;
  url: string;
  icon: QuickLinkIcon;
};

export type DashboardConfig = {
  projects: Project[];
  quickLinks: QuickLink[];
};

const statusRank: Record<ProjectStatus, number> = {
  live: 0,
  active: 1,
  template: 2,
  planned: 3,
};

const dashboardConfig = config as DashboardConfig;

export function getProjects() {
  return [...dashboardConfig.projects].sort(
    (a, b) => statusRank[a.status] - statusRank[b.status],
  );
}

export function getQuickLinks() {
  return dashboardConfig.quickLinks;
}

export function getProjectStats(projects: Project[]) {
  return {
    total: projects.length,
    live: projects.filter((project) => project.status === "live").length,
    active: projects.filter((project) => project.status === "active").length,
    planned: projects.filter(
      (project) => project.status === "planned" || project.status === "template",
    ).length,
  };
}

export function getActionGroups(projects: Project[]) {
  return projects
    .filter((project) => project.nextActions.length > 0)
    .map((project) => ({
      projectId: project.id,
      projectName: project.name,
      status: project.status,
      actions: project.nextActions,
    }));
}
