import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <>
      <h1>Lehte ei leitud</h1>
      <p>
        <Link to="/">Tagasi avalehele</Link>
      </p>
    </>
  );
}
