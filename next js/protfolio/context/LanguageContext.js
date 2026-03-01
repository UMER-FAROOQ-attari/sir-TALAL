"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  defaultLanguage,
  directionByLanguage,
  languageLabel,
  translations,
} from "@/utils/i18n";

const LanguageContext = createContext(null);

function readInitialLanguage() {
  if (typeof window === "undefined") {
    return defaultLanguage;
  }
  const saved = window.localStorage.getItem("bin_akber_lang");
  return saved && translations[saved] ? saved : defaultLanguage;
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(readInitialLanguage);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    window.localStorage.setItem("bin_akber_lang", language);
    document.documentElement.lang = language;
    document.documentElement.dir = directionByLanguage[language];
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
      dir: directionByLanguage[language],
      languageLabel,
    }),
    [language],
  );

  const getFontClass = () => {
    if (!mounted) return ''; 
    if (language === 'ur') return 'font-urdu';
    if (language === 'ar') return 'font-arabic';
    return '';
  };

  return (
    <LanguageContext.Provider value={value}>
      <div className={getFontClass()} suppressHydrationWarning>
        {children}
      </div>
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