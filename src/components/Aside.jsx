import photo from '../images/DSC00925.jpg';
import { Contacts } from './Contacts';
import { Languages } from './Languages';
import { MobileSummary } from './Summary';
import { Skills } from './Skills';
import { SpriteIcon } from './SpriteIcon';
import { ThemeSwitch } from './ThemeSwitch';

export function Aside({ content, theme, language, onLanguageChange, onOpenMenu, onThemeChange }) {
  return (
    <aside className={`aside ${theme}`}>
      <div className="image">
        <button className="mobile-menu__button" type="button" aria-label="Open contacts" onClick={onOpenMenu}>
          <SpriteIcon id="icon-more-svg" className="mobile-menu__icon" width="40" height="40" />
        </button>
        <ThemeSwitch theme={theme} onChange={onThemeChange} />
        <img className="img" src={photo} alt="Ihor Baierzdorf" />
      </div>
      <MobileSummary summary={content.summary} theme={theme} language={language} onLanguageChange={onLanguageChange} />
      <Contacts classPrefix="contact" title={content.labels.contacts} contacts={content.contacts} />
      <Skills title={content.labels.techSkills} items={content.techSkills} />
      <Skills title={content.labels.softSkills} items={content.softSkills} />
      <Languages title={content.labels.languages} languages={content.languages} />
    </aside>
  );
}
