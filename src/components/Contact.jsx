import { profile } from '../data/content';
import './Contact.css';

export default function Contact() {
  const year = new Date().getFullYear();
  return (
    <footer className="contact" id="contato">
      <div className="wrap">
        <h2 className="contact__title">Tem um sistema para tirar do papel?</h2>
        <p className="contact__lead">
          Conte o que precisa funcionar e em quanto tempo. Respondo por email com os próximos passos.
        </p>
        <a className="contact__email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="contact__actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>Enviar email</a>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
            Ver GitHub
          </a>
        </div>
        <div className="contact__base">
          <span>© {year} {profile.name}</span>
          <span>{profile.city}</span>
        </div>
      </div>
    </footer>
  );
}
