import en from './en';
import id from './id';

export type Locale = 'en' | 'id';

export const locales = { en, id };

export type Dictionary = typeof en;

export function getLocale(lang: Locale): Dictionary {
  return locales[lang];
}
