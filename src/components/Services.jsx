import { services } from '../data/content';
import ServiceVisual from './ServiceVisual.jsx';
import './Services.css';

const icons = {
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="4" width="18" height="14" rx="2.5" />
      <path d="M3 9h18" strokeLinecap="round" />
      <circle cx="6.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="8.7" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" strokeLinecap="round" />
    </svg>
  ),
  industry: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 21V10l6 4v-4l6 4V6l6 4v11H3z" strokeLinejoin="round" />
      <path d="M3 21h18" strokeLinecap="round" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section className="section services" id="servicos">
      <div className="wrap">
        <header className="section-head">
          <h2>O que posso construir para você</h2>
          <p>
            Três frentes que se conversam. Muitos projetos passam por mais de uma, e é aí que
            a experiência dos dois lados ajuda.
          </p>
        </header>

        <ol className="services__list">
          {services.map((s) => (
            <li className="service" key={s.title}>
              <div className="service__copy">
                <span className="service__icon" aria-hidden="true">{icons[s.visual]}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul className="tags" aria-label="Exemplos">
                  {s.examples.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </div>
              <div className="service__visual">
                <ServiceVisual type={s.visual} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
