export function PlaceholderPage({ title }: { title: string }) {
  return (
    <>
      <h1>{title}</h1>
      <div className="card">
        <p>Sisu lisandub peagi.</p>
      </div>
    </>
  );
}
