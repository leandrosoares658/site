import { useLanguage } from '../i18n/LanguageContext.jsx';
import './Contact.css';

export default function Contact() {
  const { t } = useLanguage();
  const { profile, contactSection } = t;
  const year = new Date().getFullYear();

  return (
    <footer className="contact" id="contato">
      <div className="wrap">
        <h2 className="contact__title">{contactSection.title}</h2>
        <p className="contact__lead">{contactSection.lead}</p>
        <a className="contact__email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="contact__actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>{contactSection.emailCta}</a>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
            {contactSection.githubCta}
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
