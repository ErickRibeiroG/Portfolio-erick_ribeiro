import { navItems } from "../data/site";
import { useScrolled } from "../hooks/useScrolled";
import { useLanguage } from "../i18n/useLanguage";
import { LanguageSwitch } from "./LanguageSwitch";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const { t } = useLanguage();
  const scrolled = useScrolled(50);

  return (
    <header
      className={`fixed right-0 left-0 z-[1000] mx-auto h-[80px] border-b border-b-[#3ba5a575] bg-linear-to-b from-surface-1 to-surface-2 px-[10px] backdrop-blur-[18px] transition-[width,top,border-radius,box-shadow,background-color] duration-[400ms] ease-in-out ${
        scrolled
          ? "top-[10px] w-[calc(100%-100px)] rounded-[40px] shadow-[0_10px_30px_var(--shadow-elevated)]"
          : "top-0 w-full shadow-[0_30px_60px_var(--shadow-elevated)]"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between">
        <div>
          <a href="#" className="flex items-center transition-transform duration-500 hover:scale-[1.06]">
            <img
              src="/assets/images/logo-er-v2-simbolo.svg"
              alt="logo"
              className="h-[70px] w-[70px] object-cover dark:hidden"
            />
            <img
              src="/assets/images/logo-er-v2-simbolo-branco.svg"
              alt="logo"
              className="hidden h-[70px] w-[70px] object-cover dark:block"
            />
          </a>
        </div>

        <nav className="max-[855px]:hidden">
          <ul className="list-none">
            {navItems.map((item) => (
              <li
                key={item.href}
                className="inline-block px-[30px] max-[1000px]:px-[17px]"
              >
                <a
                  href={item.href}
                  className="group relative inline-block py-[6px] text-text transition-colors duration-300 hover:text-brand"
                >
                  {t.menu[item.key]}
                  <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-brand transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu />

        <div className="flex items-center justify-center gap-[10px] max-[855px]:hidden">
          <ThemeToggle />
          <LanguageSwitch />
        </div>
      </div>
    </header>
  );
}
