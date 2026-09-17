import { industry, education } from '../data/content';
import './Journey.css';

export default function Journey() {
  return (
    <section className="section journey" id="trajetoria">
      <div className="wrap">
        <header className="section-head">
          <h2>De onde vem o rigor</h2>
          <p>{industry.summary}</p>
        </header>

        <div className="journey__grid">
          <div>
            <p className="journey__role">
              {industry.role} <span>na {industry.company}</span>
            </p>
            <ul className="journey__highlights">
              {industry.highlights.map((h) => (
                <li key={h.title}>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <aside className="journey__edu" aria-labelledby="formacao">
            <h3 id="formacao">Formação e certificações</h3>
            <ol>
              {education.map((e) => (
                <li key={e.title}>
                  <span className="journey__year">{e.year}</span>
                  <strong>{e.title}</strong>
                  <span className="journey__place">{e.place}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}
