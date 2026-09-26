import { useLanguage } from '../i18n/LanguageContext.jsx';
import './LogoBar.css';

const logoFiles = import.meta.glob('../assets/logos/*.{png,svg,webp}', { eager: true, import: 'default' });
const logoSrc = (file) => (file ? logoFiles[`../assets/logos/${file}`] : undefined);


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
            {items.map((client, i) => {
              const src = logoSrc(client.logo);
              return (
                <li key={`${client.name}-${i}`} className="logobar__item">
                  {src && <img className="logobar__logo" src={src} alt="" />}
                  <span className={src ? 'logobar__name' : 'logobar__name logobar__name--wordmark'}>
                    {client.name}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
