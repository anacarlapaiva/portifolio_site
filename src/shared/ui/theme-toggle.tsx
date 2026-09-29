"use client";

type ThemeToggleProps = {
  label: string;
};

export function ThemeToggle({ label }: ThemeToggleProps) {
  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;

    try {
      localStorage.setItem("theme", next);
    } catch {
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="grid h-[34px] w-[34px] cursor-pointer place-items-center rounded-[10px] border border-line bg-bar text-[15px] text-ink transition-transform duration-[450ms] ease-[var(--ease)] hover:scale-[1.06] hover:rotate-[35deg]"
    >
      <span className="theme-icon-light" aria-hidden="true">
        ☾
      </span>
      <span className="theme-icon-dark" aria-hidden="true">
        ☀
      </span>
    </button>
  );
}
