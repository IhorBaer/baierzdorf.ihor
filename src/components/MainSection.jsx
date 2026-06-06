import { Contacts } from './Contacts';
import { Education } from './Education';
import { Projects } from './Projects';
import { Summary } from './Summary';
import { WorkExperience } from './WorkExperience';

export function MainSection({ content, theme, language, onLanguageChange }) {
  return (
    <section className={`section ${theme}`}>
      <Summary summary={content.summary} language={language} onLanguageChange={onLanguageChange} />
      <Projects title={content.labels.projects} labels={content.labels} projects={content.projects} />
      <WorkExperience title={content.labels.work} entries={content.workExperience} />
      <Education title={content.labels.education} entries={content.education} />
      <Contacts classPrefix="mob-contact" title={content.labels.contacts} contacts={content.contacts} extraClass={theme} />
    </section>
  );
}
