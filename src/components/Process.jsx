import { processSteps } from '../data/content';
import './Process.css';

export default function Process() {
  return (
    <section className="section process">
      <div className="wrap">
        <header className="section-head">
          <h2>Como um projeto anda comigo</h2>
        </header>
        <ol className="process__steps">
          {processSteps.map((step, i) => (
            <li key={step.title}>
              <span className="process__n" aria-hidden="true">{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
