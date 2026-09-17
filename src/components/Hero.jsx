import Starfield from './Starfield.jsx';
import Globe from './Globe.jsx';
import { profile, stack } from '../data/content';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="topo">
      <Starfield />
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="hero__intro">
            {profile.name}, desenvolvedor full-stack e engenheiro de automação
          </p>
          <h1 className="hero__title">Software feito para funcionar onde não pode falhar.</h1>
          <p className="hero__lead">
            Trabalho com automação em uma indústria farmacêutica, construo IA clínica para
            hospitais e desenvolvo produtos web do zero. Levo o rigor de ambientes regulados
            para o seu projeto: escopo claro, código testado e documentação que dá para ler.
          </p>
          <div className="hero__actions">
            <a className="btn btn-primary" href="#projetos">Ver projetos</a>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>Falar comigo</a>
          </div>
        </div>
        <div className="hero__visual">
          <Globe />
        </div>
      </div>
      <div className="wrap hero__stack">
        <span className="hero__stack-label">Ferramentas do dia a dia</span>
        <ul>
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
