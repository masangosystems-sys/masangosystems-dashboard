import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[color:var(--bg)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-7 lg:px-8">
        <div>
          <h1 className="font-serif text-[28px] font-semibold leading-none text-[color:var(--gold)]">
            Masango Systems
          </h1>
          <p className="mt-1 text-xs font-medium tracking-[0.08em] text-[color:var(--text-muted)] uppercase">
            Projects Dashboard
          </p>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
