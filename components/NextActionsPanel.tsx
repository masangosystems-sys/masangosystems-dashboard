"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import type { Project } from "@/lib/projects";
import { getActionGroups } from "@/lib/projects";

type NextActionsPanelProps = {
  projects: Project[];
};

export function NextActionsPanel({ projects }: NextActionsPanelProps) {
  const [checkedActions, setCheckedActions] = useState<string[]>([]);
  const groups = getActionGroups(projects);

  function toggleAction(actionId: string) {
    setCheckedActions((current) =>
      current.includes(actionId)
        ? current.filter((id) => id !== actionId)
        : [...current, actionId],
    );
  }

  return (
    <section className="min-w-0 overflow-hidden rounded-xl border border-[var(--border)] bg-[color:var(--surface)] p-6">
      <h2 className="font-serif text-xl font-medium text-[color:var(--gold)]">
        Next Actions
      </h2>
      <div className="mt-5 space-y-5">
        {groups.map((group) => (
          <div className="space-y-3" key={group.projectId}>
            {group.actions.map((action, index) => {
              const actionId = `${group.projectId}-${index}`;
              const checked = checkedActions.includes(actionId);

              return (
                <label
                  className="grid cursor-pointer grid-cols-[16px_1fr] gap-3 border-b border-[var(--border)] pb-3 last:border-b-0 last:pb-0"
                  key={actionId}
                >
                  <input
                    className="peer sr-only"
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleAction(actionId)}
                  />
                  <span className="mt-0.5 flex size-4 items-center justify-center rounded-[3px] border border-[color:var(--gold)] text-[color:var(--gold)] transition-all peer-checked:bg-[color:var(--gold-muted)]">
                    <Check
                      className={`size-3 transition-all ${checked ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
                      strokeWidth={3}
                      aria-hidden="true"
                    />
                  </span>
                  <span>
                    <span
                    className={`block break-words text-sm leading-5 text-[color:var(--text)] transition-all ${checked ? "opacity-45 line-through" : ""}`}
                    >
                      {action}
                    </span>
                    <span className="mt-1 block text-xs text-[color:var(--text-muted)]">
                      {group.projectName}
                    </span>
                  </span>
                </label>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
