import { LanguageSwitch } from './LanguageSwitch';

export function Summary({ summary, language, onLanguageChange }) {
  return (
    <div className="summary">
      <h1 className="summary__name">{summary.name}</h1>
      <h3 className="summary__job">{summary.role}</h3>
      <LanguageSwitch language={language} onChange={onLanguageChange} />
      <h2 className="summary__title">{summary.title}</h2>
      <p className="summary__text">{summary.text}</p>
    </div>
  );
}

export function MobileSummary({ summary, theme, language, onLanguageChange }) {
  return (
    <div className={`mob-summary ${theme}`}>
      <h1 className="mob-summary__name">{summary.name}</h1>
      <h3 className="mob-summary__job">{summary.role}</h3>
      <LanguageSwitch language={language} onChange={onLanguageChange} />
      <h2 className="mob-summary__title">{summary.title}</h2>
      <p className="mob-summary__text">{summary.text}</p>
    </div>
  );
}
