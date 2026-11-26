import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Kolm Sammu – avaleht">
      <img src="/logo.png" alt="Kolm Sammu" width={1196} height={1002} />
    </Link>
  );
}
