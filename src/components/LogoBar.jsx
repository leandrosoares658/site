import { useLanguage } from '../i18n/LanguageContext.jsx';
import './LogoBar.css';

export default function LogoBar() {
  const { t } = useLanguage();
  const items = [...t.clients, ...t.clients];

  return (
    <section className="section logobar-section" id="galeria">
      <div className="wrap">
        <header className="section-head gallery__head">
          <h2>{t.gallerySection.title}</h2>
          <p>{t.gallerySection.lead}</p>
        </header>
      </div>

      <div className="logobar">
        <div className="logobar__track">
          <ul className="logobar__list">
            {items.map((name, i) => (
              <li key={`${name}-${i}`}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
