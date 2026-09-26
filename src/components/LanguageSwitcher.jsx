import { useLanguage } from '../i18n/LanguageContext.jsx';
import './LanguageSwitcher.css';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-switch" role="group" aria-label="Idioma / Language">
      <button type="button" aria-pressed={lang === 'pt'} onClick={() => setLang('pt')}>
        PT
      </button>
      <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>
        EN
      </button>
    </div>
  );
}
