import { useLanguage } from '../i18n/LanguageContext.jsx';
import './Services.css';

export default function Services() {
  const { t } = useLanguage();
  const { services, servicesSection } = t;
  const [firstRow, secondRow] = [services.slice(0, 2), services.slice(2)];

  return (
    <section className="section services" id="servicos">
      <div className="wrap">
        <header className="section-head services__head">
          <span className="pill-label">{servicesSection.badge}</span>
          <h2>{servicesSection.title}</h2>
        </header>

        <div className="services__row services__row--two">
          {firstRow.map((s) => (
            <div className="service-card service-card--lg" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>

        <div className="services__row services__row--three">
          {secondRow.map((s) => (
            <div className="service-card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
