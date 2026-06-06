export function Languages({ title, languages }) {
  return (
    <div className="languages">
      <h2 className="languages__title">{title}</h2>
      <ul className="languages__list">
        {languages.map((language) => (
          <li className="lang-li" key={language.text}>
            {language.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
