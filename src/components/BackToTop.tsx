import { useLanguage } from "../i18n/useLanguage";
import { useScrolled } from "../hooks/useScrolled";

/** Botão flutuante que aparece após rolagem e leva de volta ao topo. */
export function BackToTop() {
  const { t } = useLanguage();
  const visible = useScrolled(600);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t.aria.voltarTopo}
      className={`fixed right-[25px] bottom-[25px] z-[900] flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-brand/30 bg-black/60 text-brand shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-[18px] transition-all duration-500 hover:-translate-y-[3px] hover:bg-brand hover:text-black ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-[10px] opacity-0"
      }`}
    >
      <i className="bi bi-arrow-up text-[20px]" />
    </button>
  );
}
