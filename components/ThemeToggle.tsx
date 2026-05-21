"use client";

import { Bot, Moon, Skull, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "dark" | "light" | "techy" | "villain";

const themes: Theme[] = ["dark", "light", "techy", "villain"];

const themeLabels: Record<Theme, string> = {
  dark: "Dark",
  light: "Light",
  techy: "Techy",
  villain: "Villain",
};

function getStoredTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const storedTheme = window.localStorage.getItem("ms-theme");
  return themes.includes(storedTheme as Theme) ? (storedTheme as Theme) : "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.remove(...themes);
  document.documentElement.classList.add(theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getStoredTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function toggleTheme() {
    const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
    setTheme(nextTheme);
    window.localStorage.setItem("ms-theme", nextTheme);
    applyTheme(nextTheme);
  }

  const Icon = {
    dark: Moon,
    light: Sun,
    techy: Bot,
    villain: Skull,
  }[theme];

  return (
    <button
      className="inline-flex size-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[color:var(--surface)] text-[color:var(--text-muted)] transition-all hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
      type="button"
      onClick={toggleTheme}
      aria-label={`Current theme: ${themeLabels[theme]}. Switch theme`}
      title={`Current theme: ${themeLabels[theme]}`}
      suppressHydrationWarning
    >
      <Icon size={18} aria-hidden="true" />
    </button>
  );
}
