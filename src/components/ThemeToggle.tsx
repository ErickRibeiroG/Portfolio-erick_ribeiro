import { useLanguage } from "../i18n/useLanguage";
import { useTheme } from "../theme/useTheme";

/** Alterna entre tema claro e escuro. */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t.aria.trocarTema}
      className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border bg-surface-1 text-text transition-all duration-300 hover:border-brand/50 hover:text-brand"
    >
      <i
        className={`bi ${isDark ? "bi-moon-stars-fill" : "bi-sun-fill"} text-[14px] transition-transform duration-500`}
      />
    </button>
  );
}
