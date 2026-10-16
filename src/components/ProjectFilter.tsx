import type { ProjectType } from "../data/projects";
import { useLanguage } from "../i18n/useLanguage";

export type FilterValue = "all" | ProjectType;

interface FilterOption {
  key: FilterValue;
  label: string;
}

interface ProjectFilterProps {
  activeFilter: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
  counts: Record<FilterValue, number>;
}

export function ProjectFilter({
  activeFilter,
  onFilterChange,
  counts,
}: ProjectFilterProps) {
  const { t } = useLanguage();

  const options: FilterOption[] = [
    { key: "all", label: t.proj.filtros.todos },
    { key: "web", label: t.proj.filtros.web },
    { key: "backend", label: t.proj.filtros.backend },
    { key: "data-analysis", label: t.proj.filtros["data-analysis"] },
  ];

  return (
    <div
      role="group"
      aria-label={t.aria.filtrarProjetos}
      className="mb-[48px] flex flex-wrap items-center justify-center gap-[10px] max-[520px]:gap-[8px]"
    >
      {options.map((opt) => {
        const isActive = activeFilter === opt.key;
        const count = counts[opt.key] ?? 0;

        return (
          <button
            key={opt.key}
            type="button"
            onClick={() => onFilterChange(opt.key)}
            aria-pressed={isActive}
            className={`group inline-flex cursor-pointer items-center gap-[8px] rounded-full px-[18px] py-[8px] text-[14px] font-medium transition-all duration-300 max-[520px]:px-[14px] max-[520px]:py-[6px] max-[520px]:text-[13px] ${
              isActive
                ? "scale-[1.03] bg-brand text-white shadow-[0_4px_18px_rgba(60,166,166,0.38)]"
                : "border border-border bg-surface-1/80 text-muted backdrop-blur-[12px] hover:border-brand/40 hover:bg-surface-hover hover:text-text"
            }`}
          >
            <span>{opt.label}</span>
            <span
              className={`rounded-full px-[7px] py-[1px] text-[11px] font-semibold transition-colors duration-300 ${
                isActive
                  ? "bg-white/25 text-white"
                  : "bg-surface-2 text-muted group-hover:text-text"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
