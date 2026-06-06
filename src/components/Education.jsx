export function Education({ title, entries }) {
  return (
    <div className="education">
      <h2 className="education__title">{title}</h2>
      {entries.map((entry) => (
        <article key={`${entry.period}-${entry.title}`}>
          <h3 className="education__subtitle">{entry.title}</h3>
          <p className="education__text">{entry.period}</p>
          <p className="education__text">{entry.description}</p>
        </article>
      ))}
    </div>
  );
}
