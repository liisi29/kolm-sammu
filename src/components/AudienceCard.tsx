import { Link } from 'react-router-dom';
import type { Audience } from '../content/audiences';

export function AudienceCard({ audience }: { audience: Audience }) {
  return (
    <article className="card audience-card" aria-labelledby={`card-${audience.id}`}>
      <h2 id={`card-${audience.id}`}>{audience.title}</h2>
      <div className="card-body">
        {audience.paragraphs.map((p) => (
          <p key={p.text}>
            {p.text}{' '}
            {p.link && (
              <a href={p.link.href} target="_blank" rel="noopener noreferrer">
                ({p.link.label})
              </a>
            )}
          </p>
        ))}
      </div>
      <div className="card-actions">
        <Link to="/broneeri" className="button">
          {audience.bookingLabel}
        </Link>
        <Link to={audience.readMorePath} className="button button-secondary">
          {audience.readMoreLabel} →
        </Link>
      </div>
    </article>
  );
}
