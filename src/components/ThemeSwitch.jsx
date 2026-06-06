import { Theme } from '../constants/theme';

export function ThemeSwitch({ theme, onChange }) {
  const isDark = theme === Theme.DARK;

  return (
    <div className="theme-switch">
      <div className="theme-switch__control">
        <input
          className="theme-switch__toggle"
          type="checkbox"
          name="theme"
          id="theme-switch-toggle"
          aria-label="Theme switcher"
          checked={isDark}
          onChange={(event) => onChange(event.target.checked ? Theme.DARK : Theme.LIGHT)}
        />
        <label aria-hidden="true" className="theme-switch__track" htmlFor="theme-switch-toggle" />
        <div aria-hidden="true" className="theme-switch__marker" />
      </div>
    </div>
  );
}
