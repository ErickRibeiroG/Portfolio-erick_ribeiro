import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { translations } from "./translations";
import type { Language, Translation } from "./translations";

const STORAGE_KEY = "lang";

export interface LanguageContextValue {
  lang: Language;
  /** Dicionário do idioma ativo. */
  t: Translation;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLang(): Language {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "pt" ? stored : "pt";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(readStoredLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((current) => (current === "pt" ? "en" : "pt"));
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, t: translations[lang], setLang, toggleLang }),
    [lang, toggleLang],
  );

  return <LanguageContext value={value}>{children}</LanguageContext>;
}
