import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';
import type { Language, TranslationDictionary } from './translations';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
  formatMoney: (amount: number) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('hissa_lang');
    if (saved === 'uz' || saved === 'ru' || saved === 'en') return saved;
    return 'uz';
  });

  useEffect(() => {
    localStorage.setItem('hissa_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];

  const formatMoney = (amount: number): string => {
    return new Intl.NumberFormat('ru-RU').format(Math.round(amount)) + ' UZS';
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, formatMoney }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
