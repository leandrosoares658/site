import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import pt from './pt.js';
import en from './en.js';

const dictionaries = { pt, en };
const STORAGE_KEY = 'site-lang';

const LanguageContext = createContext(null);

function detectInitialLang() {
  if (typeof window === 'undefined') return 'pt';

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === 'pt' || saved === 'en') return saved;

  // Sem preferência salva: usa o idioma do navegador de quem visita.
  // Português-BR abre em PT; qualquer outro idioma abre em EN (site também
  // busca cliente americano); se não der para detectar, PT é a reserva.
  const browserLangs = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || ''];

  const looksPortuguese = browserLangs.some((l) => l.toLowerCase().startsWith('pt'));
  return looksPortuguese ? 'pt' : 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: dictionaries[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage precisa estar dentro de um LanguageProvider');
  return ctx;
}
