import ProjectVisual from './ProjectVisual.jsx';
import { projects, smallProjects } from '../data/content';
import './Projects.css';

export default function Projects() {
  return (
    <section className="section projects" id="projetos">
      <div className="wrap">
        <header className="section-head">
          <h2>Projetos em que coloquei a mão</h2>
          <p>Produtos próprios, pesquisa e sistemas feitos para resolver um problema de verdade.</p>
        </header>

        <div className="projects__list">
          {projects.map((p) => (
            <article className="project" key={p.id}>
              <div className="project__visual">
                <ProjectVisual type={p.visual} />
              </div>
              <div className="project__body">
                <p className="project__status">{p.status}</p>
                <h3 className="project__title">{p.title}</h3>
                <p className="project__desc">{p.description}</p>
                <ul className="tags" aria-label="Tecnologias">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="projects__more">
          <h3>Também fiz</h3>
          <ul>
            {smallProjects.map((p) => (
              <li key={p.title}>
                <strong>{p.title}</strong>
                <span>{p.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
