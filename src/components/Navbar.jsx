import { useEffect, useState } from 'react';
import { profile } from '../data/content';
import './Navbar.css';

const links = [
  ['#projetos', 'Projetos'],
  ['#servicos', 'Serviços'],
  ['#trajetoria', 'Trajetória'],
  ['#contato', 'Contato'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="wrap nav__inner">
        <a href="#topo" className="nav__brand">
          <span className="nav__mark" aria-hidden="true">LS</span>
          {profile.shortName}
        </a>
        <nav aria-label="Principal">
          <ul className="nav__links">
            {links.map(([href, label]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn btn-primary nav__cta" href={`mailto:${profile.email}`}>
          Falar comigo
        </a>
      </div>
    </header>
  );
}
