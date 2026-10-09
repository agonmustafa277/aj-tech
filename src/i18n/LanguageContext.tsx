import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  languages,
  translations,
  type Language,
  type Translation,
} from "./translations";
import { extra, type Extra } from "./extra";

export type FullTranslation = Omit<Translation, "nav" | "hero" | "contact"> &
  Omit<Extra, "nav" | "hero" | "contact"> & {
    nav: Translation["nav"] & Extra["nav"];
    hero: Translation["hero"] & Extra["hero"];
    contact: Translation["contact"] & Extra["contact"];
  };

const translationCache = new Map<Language, FullTranslation>();

export function getTranslation(language: Language): FullTranslation {
  const cached = translationCache.get(language);
  if (cached) return cached;
  const base = translations[language];
  const add = extra[language];
  const merged: FullTranslation = {
    ...base,
    ...add,
    nav: { ...base.nav, ...add.nav },
    hero: { ...base.hero, ...add.hero },
    contact: { ...base.contact, ...add.contact },
  };
  translationCache.set(language, merged);
  return merged;
}

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: FullTranslation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLanguage(value: string | null): value is Language {
  return !!value && languages.includes(value as Language);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Startet immer mit Deutsch, damit das vorgerenderte HTML (für Google)
  // und der erste Client-Render übereinstimmen. Eine gespeicherte Sprache
  // wird direkt danach übernommen.
  const [language, setLanguageState] = useState<Language>("de");
  const [restored, setRestored] = useState(false);

  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("aj-tech-language");
      if (isLanguage(savedLanguage)) setLanguageState(savedLanguage);
    } catch {
      // localStorage nicht verfügbar (z. B. privater Modus)
    }
    setRestored(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    if (!restored) return;
    try {
      localStorage.setItem("aj-tech-language", language);
    } catch {
      // ignorieren
    }
  }, [language, restored]);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: getTranslation(language),
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}