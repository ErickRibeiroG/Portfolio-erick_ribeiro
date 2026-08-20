import { useLanguage } from "../i18n/useLanguage";

/** Botão-bandeira que alterna entre português e inglês. */
export function LanguageSwitch() {
  const { lang, t, toggleLang } = useLanguage();
  const isEnglish = lang === "en";

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t.aria.trocarIdioma}
      className="relative h-6 w-10 cursor-pointer overflow-hidden rounded-[50px] border-none"
    >
      <img
        src="/assets/images/br.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <img
        src="/assets/images/us.png"
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
          isEnglish ? "opacity-100" : "opacity-0"
        }`}
      />
      <span
        className={`absolute top-[2px] left-[3px] z-[1] flex h-5 w-5 items-center justify-center rounded-full bg-black/70 text-[9px] text-white transition-transform duration-300 ${
          isEnglish ? "translate-x-[14px]" : "translate-x-0"
        }`}
      >
        {isEnglish ? "EN" : "PT"}
      </span>
    </button>
  );
}
