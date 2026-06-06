import { SpriteIcon } from './SpriteIcon';

export function Languages({ title, languages }) {
  return (
    <div className="languages">
      <h2 className="languages__title">{title}</h2>
      <ul className="languages__list">
        {languages.map((language) => (
          <li className="lang-li" key={language.text}>
            {language.text}
            {language.icon && <SpriteIcon id={language.icon} className={language.className} />}
          </li>
        ))}
      </ul>
    </div>
  );
}
