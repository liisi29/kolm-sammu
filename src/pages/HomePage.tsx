import { AudienceCard } from '../components/AudienceCard';
import { audiences } from '../content/audiences';

export function HomePage() {
  return (
    <>
      <section className="hero">
        <h1>Kolm Sammu</h1>
        <p className="lead">Toetame noort ja tema peret sujuvama koolitee poole.</p>
      </section>
      <div className="card-grid">
        {audiences.map((a) => (
          <AudienceCard key={a.id} audience={a} />
        ))}
      </div>
    </>
  );
}
