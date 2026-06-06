import { useEffect, useMemo, useState } from 'react';
import { Aside } from './components/Aside';
import { MainSection } from './components/MainSection';
import { MobileMenu } from './components/MobileMenu';
import { ScrollTop } from './components/ScrollTop';
import { DEFAULT_THEME, Theme } from './constants/theme';
import { DEFAULT_LANGUAGE, resumeContent } from './data/resumeContent';

export default function App() {
  const storedTheme = useMemo(() => localStorage.getItem('theme') || DEFAULT_THEME, []);
  const storedLanguage = useMemo(() => localStorage.getItem('language') || DEFAULT_LANGUAGE, []);
  const [theme, setTheme] = useState(storedTheme);
  const [language, setLanguage] = useState(storedLanguage);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const content = resumeContent[language] || resumeContent[DEFAULT_LANGUAGE];

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.classList.remove(Theme.LIGHT, Theme.DARK);
    document.body.classList.add(theme);

    return () => document.body.classList.remove(Theme.LIGHT, Theme.DARK);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      <main className="container">
        <Aside
          content={content}
          theme={theme}
          language={language}
          onLanguageChange={setLanguage}
          onOpenMenu={() => setIsMenuOpen(true)}
          onThemeChange={setTheme}
        />
        <MainSection content={content} theme={theme} language={language} onLanguageChange={setLanguage} />
      </main>
      <MobileMenu
        isOpen={isMenuOpen}
        theme={theme}
        title={content.labels.contacts}
        contacts={content.contacts}
        onClose={() => setIsMenuOpen(false)}
      />
      <ScrollTop />
    </>
  );
}
