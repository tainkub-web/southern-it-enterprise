'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../constants/translations';

const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const [language, setLanguage] = useState('th'); // Default to Thai

  useEffect(() => {
    const storedLang = localStorage.getItem('site-language');
    if (storedLang && (storedLang === 'en' || storedLang === 'th')) {
      setLanguage(storedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'th' ? 'en' : 'th';
    setLanguage(newLang);
    localStorage.setItem('site-language', newLang);
  };

  const t = translations[language];

  return (
    <TranslationContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
