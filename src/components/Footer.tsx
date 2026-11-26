import { contact } from '../content/site';
import { Logo } from './Logo';

function SocialLink({ href, label }: { href: string; label: string }) {
  if (!href) return <span>{label}</span>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Logo />
        <div>
          <p>
            <strong>Kontakt:</strong> <a href={contact.phoneHref}>{contact.phoneDisplay}</a> või{' '}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p>
            Leia meid ka <SocialLink href={contact.facebookUrl} label="Facebookist" />,{' '}
            <SocialLink href={contact.instagramUrl} label="Instagramist" />
          </p>
        </div>
      </div>
    </footer>
  );
}
