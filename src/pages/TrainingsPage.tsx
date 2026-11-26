import { contact } from '../content/site';

export function TrainingsPage() {
  return (
    <>
      <h1>Koolitused</h1>
      <div className="card">
        <p>Kolm Sammu pakub haridusasutustele meeskonnakoolitusi. Koolitustel on kokkuleppehind.</p>
        <p>
          Küsi lisa: <a href={contact.phoneHref}>{contact.phoneDisplay}</a> või{' '}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
      </div>
    </>
  );
}
