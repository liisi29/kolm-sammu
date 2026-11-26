import { Link } from 'react-router-dom';
import { team } from '../content/team';

export function AboutPage() {
  return (
    <>
      <h1>Kes me oleme?</h1>
      <div className="team-list">
        {team.map((m) => (
          <article key={m.name} className="card">
            <h2>
              {m.name} <span className="role">– {m.role}</span>
            </h2>
            <p>{m.description}</p>
          </article>
        ))}
      </div>
      <p className="lead">
        Kolm Sammu on ühendanud oma teadmised, kogemused ja oskused eesti õpilaste sujuvama koolitee
        heaks.
      </p>
      <p>
        <Link to="/broneeri" className="button">
          Broneeri esmane vestlus
        </Link>
      </p>
    </>
  );
}
