import { useLanguage } from "../i18n/useLanguage";

/** Alternador segmentado entre português e inglês. */
export function LanguageSwitch() {
  const { lang, t, toggleLang } = useLanguage();
  const isEnglish = lang === "en";

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t.aria.trocarIdioma}
      className="relative flex h-8 w-[68px] shrink-0 cursor-pointer items-center rounded-full border border-border bg-surface-1 p-[3px] text-[11px] font-bold tracking-wide"
    >
      <span
        className={`absolute top-[3px] left-[3px] h-[calc(100%-6px)] w-[calc(50%-3px)] rounded-full bg-brand shadow-[0_2px_6px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out ${
          isEnglish ? "translate-x-full" : "translate-x-0"
        }`}
      />
      <span
        className={`relative z-[1] flex-1 text-center transition-colors duration-300 ${
          isEnglish ? "text-muted" : "text-black"
        }`}
      >
        PT
      </span>
      <span
        className={`relative z-[1] flex-1 text-center transition-colors duration-300 ${
          isEnglish ? "text-black" : "text-muted"
        }`}
      >
        EN
      </span>
    </button>
  );
}
