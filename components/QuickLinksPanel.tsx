import {
  Brain,
  BriefcaseBusiness,
  CreditCard,
  Database,
  ExternalLink,
  GitBranch,
  Mail,
  Settings,
  Triangle,
  Vault,
  type LucideIcon,
} from "lucide-react";
import type { QuickLink, QuickLinkIcon } from "@/lib/projects";

type QuickLinksPanelProps = {
  links: QuickLink[];
};

const iconMap: Partial<Record<QuickLinkIcon, LucideIcon>> = {
  vault: Vault,
  github: GitBranch,
  vercel: Triangle,
  supabase: Database,
  email: Mail,
  payment: CreditCard,
  admin: Settings,
  intelligence: Brain,
  performance: BriefcaseBusiness,
};

export function QuickLinksPanel({ links }: QuickLinksPanelProps) {
  return (
    <section className="min-w-0 overflow-hidden rounded-xl border border-[var(--border)] bg-[color:var(--surface)] p-6">
      <h2 className="font-serif text-xl font-medium text-[color:var(--gold)]">
        Quick Links
      </h2>
      <div className="mt-5 divide-y divide-[var(--border)]">
        {links.map((link) => {
          const Icon = iconMap[link.icon] ?? ExternalLink;

          return (
            <a
              className="group flex items-center justify-between gap-3 py-3 text-sm font-medium text-[color:var(--text)] transition-all hover:text-[color:var(--gold)]"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={link.label}
            >
              <span className="flex min-w-0 items-center gap-3">
                <Icon
                  className="size-4 shrink-0 text-[color:var(--text-muted)] transition-all group-hover:text-[color:var(--gold)]"
                  aria-hidden="true"
                />
                <span className="truncate">{link.label}</span>
              </span>
              <ExternalLink
                className="size-3 shrink-0 translate-x-0 opacity-35 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                aria-hidden="true"
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}
