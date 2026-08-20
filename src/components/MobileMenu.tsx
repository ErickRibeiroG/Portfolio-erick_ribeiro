import { useCallback, useRef, useState } from "react";
import { navItems } from "../data/site";
import { useClickOutside } from "../hooks/useClickOutside";
import { useLanguage } from "../i18n/useLanguage";
import { LanguageSwitch } from "./LanguageSwitch";

const LINE_BASE =
  "relative mx-auto my-[5px] block h-px origin-center transition-all duration-200";

/** Menu hambúrguer — visível apenas até 855px, como no layout original. */
export function MobileMenu() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);
  useClickOutside(containerRef, close, open);

  return (
    <div
      ref={containerRef}
      className="relative hidden px-[10px] py-[5px] max-[855px]:block"
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? t.aria.fecharMenu : t.aria.abrirMenu}
        aria-expanded={open}
        className="h-[30px] w-[30px] cursor-pointer border-none bg-transparent transition-all duration-1000 hover:scale-[1.2]"
      >
        <span
          className={`${LINE_BASE} w-5 ${
            open
              ? "translate-y-[7px] -rotate-45 bg-[rgb(212,71,71)]"
              : "bg-white"
          }`}
        />
        <span className={`${LINE_BASE} ${open ? "w-0 bg-white" : "w-5 bg-white"}`} />
        <span
          className={`${LINE_BASE} w-5 ${
            open
              ? "-translate-y-[5px] rotate-45 bg-[rgb(212,71,71)]"
              : "bg-white"
          }`}
        />
      </button>

      <div
        className={`absolute top-[150%] right-[10px] z-[9999] w-[200px] items-center rounded-[15px] border-b border-b-brand-alt bg-linear-to-b from-[rgb(75,75,75)] to-black p-[10px] text-center shadow-[0_30px_60px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.4)] backdrop-blur-[18px] transition-all duration-[400ms] ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-5 opacity-0"
        }`}
      >
        <nav>
          <ul className="list-none">
            {navItems.map((item) => (
              <li key={item.href} className="my-[5px]">
                <a
                  href={item.href}
                  onClick={close}
                  className="inline-block text-white transition-all duration-500 hover:scale-[1.06] hover:text-brand"
                >
                  {t.menu[item.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-center">
          <LanguageSwitch />
        </div>
      </div>
    </div>
  );
}
