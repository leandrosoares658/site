import { services } from '../data/content';
import './Services.css';

export default function Services() {
  return (
    <section className="section services" id="servicos">
      <div className="wrap services__grid">
        <header className="section-head services__head">
          <h2>O que posso construir para você</h2>
          <p>
            Três frentes que se conversam. Muitos projetos passam por mais de uma, e é aí que
            a experiência dos dois lados ajuda.
          </p>
        </header>
        <ol className="services__list">
          {services.map((s) => (
            <li className="service" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul className="tags" aria-label="Exemplos">
                {s.examples.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
