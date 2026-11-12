"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "EN" | "ID";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (en: string, id: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "EN",
  setLanguage: () => {},
  t: (en) => en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("EN");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("preferred_lang") as Language | null;
      if (saved === "EN" || saved === "ID") {
        setLanguageState(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("preferred_lang", lang);
    } catch {
      // ignore
    }
  };

  const t = (en: string, id: string) => {
    return language === "ID" ? id : en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
