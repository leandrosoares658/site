import Globe from './Globe.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="hero" id="topo">
      <div className="wrap hero__inner">
        <div className="hero__copy">
          <h1 className="hero__title">{t.hero.title}</h1>
          <p className="hero__lead">{t.hero.lead}</p>
          <div className="hero__actions">
            <a className="btn btn-primary" href="#contato">{t.hero.ctaPrimary}</a>
          </div>
        </div>

        <div className="hero__globe" aria-hidden="true">
          <Globe />
        </div>
      </div>

      <div className="wrap hero__stack">
        <span className="hero__stack-label">{t.hero.stackLabel}</span>
        <ul>
          {t.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
