import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Locale, Dictionary, getLocale } from '@/locales';

interface LocaleContextType {
  locale: Locale;
  setLocale: (lang: Locale) => void;
  t: Dictionary;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: 'en',
  setLocale: () => {},
  t: getLocale('en'),
});

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [t, setT] = useState<Dictionary>(getLocale('en'));

  useEffect(() => {
    // Check localStorage first
    const stored = localStorage.getItem('locale') as Locale | null;
    if (stored === 'en' || stored === 'id') {
      setLocaleState(stored);
      setT(getLocale(stored));
      return;
    }

    // No stored preference — detect from IP
    fetch('/api/locale')
      .then((res) => res.json())
      .then((data: { locale: Locale }) => {
        const detected: Locale = data.locale === 'id' ? 'id' : 'en';
        setLocaleState(detected);
        setT(getLocale(detected));
        localStorage.setItem('locale', detected);
      })
      .catch(() => {
        // Default to English on error
        setLocaleState('en');
        setT(getLocale('en'));
      });
  }, []);

  const setLocale = useCallback((lang: Locale) => {
    setLocaleState(lang);
    setT(getLocale(lang));
    localStorage.setItem('locale', lang);
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);

export default LocaleContext;
