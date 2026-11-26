import { Link } from 'react-router-dom';
import { packages } from '../content/packages';

export function PricesPage() {
  return (
    <>
      <h1>Hinnad</h1>
      <p className="lead">Juhtumikorralduse teenuseid saab osta nelja plokina.</p>
      <div className="package-list">
        {packages.map((p) => (
          <article key={p.name} className="card">
            <h2 className="package-title">
              <span>{p.name}</span>
              <span className="price">{p.price}</span>
            </h2>
            {p.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </article>
        ))}
      </div>
      <p>
        Kohtumistel rakendatakse motiveeriva intervjueerimise vaimsust ja tehnikaid ning
        võrgustikutöö põhimõtteid. Noorel on juhtumikorralduse perioodil võimalik saada
        karjäärinõustamist või tema vajadustele vastavat abi spetsialistilt.
      </p>
      <p>
        <Link to="/broneeri" className="button">
          Broneeri tasuta kontaktivõtt
        </Link>
      </p>
    </>
  );
}
