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
          <a
            className="btn btn-ghost contact__instagram"
            href={profile.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label={`${contactSection.instagramLabel} ${profile.instagramHandle}`}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
            </svg>
            {profile.instagramHandle}
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
