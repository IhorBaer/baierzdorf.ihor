export function WorkExperience({ title, entries }) {
  return (
    <div className="work">
      <h2 className="work__title">{title}</h2>
      {entries.map((entry) => (
        <article key={`${entry.period}-${entry.title}`}>
          <h3 className="work__subtitle">
            {entry.title} | {entry.period}
          </h3>
          <p className="work__text">{entry.description}</p>
          {entry.bullets?.length > 0 && (
            <ul className="work__list">
              {entry.bullets.map((bullet) => (
                <li className="work__item" key={bullet}>
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}
