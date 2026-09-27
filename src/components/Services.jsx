import { useLanguage } from '../i18n/LanguageContext.jsx';
import './Services.css';
import websitesImg from '../assets/webdesign.jpg';
import systemsImg from '../assets/deliver-system.jpg';
import mobileImg from '../assets/controle-financeiro.jpg';
import ecommerceImg from '../assets/thecookie.jpg';
import launchesImg from '../assets/services/lancamentos.svg';

// Imagem de fundo de cada card, na mesma ordem de t.services (igual em PT e EN).
const serviceImages = [
  { src: websitesImg, position: 'center top' },
  { src: systemsImg, position: 'center top' },
  { src: mobileImg, position: 'right center' },
  { src: ecommerceImg, position: 'center top' },
  { src: launchesImg, position: 'center center' },
];

function ServiceCard({ service, image, large }) {
  return (
    <div className={`service-card${large ? ' service-card--lg' : ''}`}>
      {image && (
        <div
          className="service-card__bg"
          aria-hidden="true"
          style={{ backgroundImage: `url(${image.src})`, backgroundPosition: image.position }}
        />
      )}
      <div className="service-card__content">
        <h3>{service.title}</h3>
        <p>{service.text}</p>
      </div>
    </div>
  );
}

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
          {firstRow.map((s, i) => (
            <ServiceCard key={s.title} service={s} image={serviceImages[i]} large />
          ))}
        </div>

        <div className="services__row services__row--three">
          {secondRow.map((s, i) => (
            <ServiceCard key={s.title} service={s} image={serviceImages[i + 2]} />
          ))}
        </div>
      </div>
    </section>
  );
}
