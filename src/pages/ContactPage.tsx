import { Link } from 'react-router-dom';
import { contact } from '../content/site';

// TODO: lähtetekstis puudus 4. lehe sisu – see on ajutine kontaktileht.
export function ContactPage() {
  return (
    <>
      <h1>Kontakt</h1>
      <div className="card">
        <p>
          Telefon: <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
        </p>
        <p>
          E-post: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
        <p>
          Esmase vestluse aja saad broneerida <Link to="/broneeri">siit</Link>.
        </p>
      </div>
    </>
  );
}
