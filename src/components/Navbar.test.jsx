import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageProvider } from '../i18n/LanguageContext.jsx';
import Navbar from './Navbar.jsx';
import pt from '../i18n/pt.js';
import en from '../i18n/en.js';

function renderNavbar(lang) {
  window.localStorage.setItem('site-lang', lang);
  return render(
    <LanguageProvider>
      <Navbar />
    </LanguageProvider>
  );
}

describe('Navbar – botão "Falar comigo"', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('mostra o botão em PT com mailto para o e-mail do perfil', () => {
    renderNavbar('pt');

    const cta = screen.getByRole('link', { name: 'Falar comigo' });
    expect(cta).toHaveAttribute('href', `mailto:${pt.profile.email}`);
    expect(cta).toHaveClass('btn', 'btn-primary', 'nav__cta');
  });

  it('mostra o botão em EN com mailto para o e-mail do perfil', () => {
    renderNavbar('en');

    const cta = screen.getByRole('link', { name: 'Get in touch' });
    expect(cta).toHaveAttribute('href', `mailto:${en.profile.email}`);
  });

  it('atualiza o texto do botão ao trocar de idioma', async () => {
    const user = userEvent.setup();
    renderNavbar('pt');

    await user.click(screen.getByRole('button', { name: 'EN' }));

    expect(screen.getByRole('link', { name: 'Get in touch' })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Falar comigo' })).not.toBeInTheDocument();
  });

  it('usa o mesmo e-mail de contato em PT e EN', () => {
    expect(en.profile.email).toBe(pt.profile.email);
  });
});
