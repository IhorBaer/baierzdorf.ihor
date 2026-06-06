import { languageOptions } from '../data/resumeContent';

export function LanguageSwitch({ language, onChange }) {
  return (
    <div className="language-switch" aria-label="Language switcher">
      {languageOptions.map((option) => (
        <button
          className={`language-switch__button ${language === option.code ? 'language-switch__button--active' : ''}`}
          type="button"
          key={option.code}
          onClick={() => onChange(option.code)}
          aria-pressed={language === option.code}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
