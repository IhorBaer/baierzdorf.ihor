export const DEFAULT_LANGUAGE = 'de';

export const languageOptions = [
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
];

const sharedContacts = [
  { id: 'phone', label: '+49 160 2429229', href: 'tel:+491602429229' },
  { id: 'email', label: 'd.baierzdorf.ihor@gmail.com', href: 'mailto:d.baierzdorf.ihor@gmail.com' },
  { id: 'github', label: 'GitHub', href: 'https://github.com/IhorBaer' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/ihor-baierzdorf-b15363221/' },
  { id: 'location', label: 'Rödermark, Germany', href: 'https://www.google.com/maps/place/R%C3%B6dermark' },
];

export const resumeContent = {
  en: {
    labels: {
      contacts: 'CONTACTS',
      techSkills: 'TECHNICAL PROFILE',
      softSkills: 'WORK STYLE',
      languages: 'LANGUAGES',
      projects: 'PROJECTS',
      work: 'WORK EXPERIENCE',
      education: 'EDUCATION & RECOGNITION',
      role: 'Role',
      live: 'Live demo',
      code: 'Code',
    },
    summary: {
      name: 'IHOR BAIERZDORF',
      role: 'IT ENTRY | APPLICATION SUPPORT | WEB SUPPORT | JUNIOR QA',
      title: 'PROFILE',
      text:
        'IT-entry candidate based in Germany with a ZAB-recognized Ukrainian higher education degree in computerized systems, automation and control, assessed at Master level in combination with previous study. I am refreshing my web development skills and looking for a realistic qualified IT-entry role in Application Support, IT/User Support, Junior QA or Web Support.',
    },
    contacts: sharedContacts,
    techSkills: [
      'HTML5 / CSS3 / SCSS',
      'JavaScript basics',
      'React basics and current refresh',
      'Git / GitHub / GitHub Pages',
      'REST API basics',
      'Vite / Parcel',
      'Technical documentation and structured troubleshooting',
    ],
    softSkills: [
      'Calm user communication',
      'Analytical thinking',
      'Reliable documentation',
      'Team coordination',
      'Service orientation',
      'Fast learning and responsibility',
    ],
    languages: [
      { text: 'Ukrainian - native' },
      { text: 'Russian - native' },
      { text: 'German - B1 certificate, daily professional use in Germany' },
      { text: 'English - basic, improving for IT documentation' },
    ],
    projects: [
      {
        name: 'Filmoteka',
        liveUrl: 'https://ihorbaer.github.io/team__three-project/',
        codeUrl: 'https://github.com/IhorBaer/team__three-project',
        role: 'Team Lead',
        text:
          'Movie search and personal movie library app. I coordinated team workflow and contributed to implementation and quality control. Stack: JavaScript, SCSS, Parcel, REST API, Firebase.',
      },
      {
        name: 'IceCream',
        liveUrl: 'https://ihorbaer.github.io/team-project-demo/',
        codeUrl: 'https://github.com/IhorBaer/team-project-demo',
        role: 'Team Lead',
        text:
          'Responsive landing page for an ice cream brand. I coordinated tasks, supported GitHub collaboration and worked on implementation quality. Stack: HTML, SCSS, JavaScript, Parcel.',
      },
      {
        name: 'React Image Finder',
        liveUrl: 'https://ihorbaer.github.io/goit-react-hw-03-image-finder/',
        codeUrl: 'https://github.com/IhorBaer/goit-react-hw-03-image-finder',
        role: 'React learning project',
        text:
          'Image search app with API requests, gallery, modal preview, loading state, errors and Load More pagination. Stack: React, JavaScript, Axios, Pixabay API.',
      },
      {
        name: 'React Phonebook',
        liveUrl: 'https://ihorbaer.github.io/goit-react-hw-03-phonebook/',
        codeUrl: 'https://github.com/IhorBaer/goit-react-hw-03-phonebook',
        role: 'React learning project',
        text:
          'Phonebook app with contact creation, filtering, duplicate check and localStorage persistence. Stack: React, JavaScript, localStorage.',
      },
      {
        name: 'WebStudio',
        liveUrl: 'https://ihorbaer.github.io/goit-markup-hw-08/',
        codeUrl: 'https://github.com/IhorBaer/goit-markup-hw-08',
        role: 'Responsive markup project',
        text:
          'Responsive landing page with portfolio page, mobile navigation, modal form and SCSS structure. Stack: HTML, CSS, SCSS, JavaScript.',
      },
    ],
    workExperience: [
      {
        title: 'Schulbegleiter, Germany',
        period: 'Current',
        description:
          'Support in everyday school life, clear communication with pupils, teachers and parents, reliable observation and documentation.',
        bullets: [
          'Transferable IT value: calm user communication and structured support.',
          'Strong focus on reliability, responsibility and de-escalation.',
        ],
      },
      {
        title: 'Head of Sales - 2Bgroup, Kyiv, Ukraine',
        period: '04/2017 - 02/2022',
        description:
          'Organized daily sales processes, customer communication, consulting and conflict resolution.',
        bullets: [
          'Team leadership and interface work between customers, production and internal processes.',
          'Transferable IT value: service orientation, prioritization and process thinking.',
        ],
      },
      {
        title: 'Founder & Operational Manager - LonePineUkraine',
        period: '01/2014 - 03/2017',
        description:
          'Built and managed a small furniture production business with responsibility for planning, quality and customer communication.',
        bullets: ['Independent problem solving, employee coordination and pragmatic process improvement.'],
      },
    ],
    education: [
      {
        title: 'ZAB Credential Assessment, Germany',
        period: '03/2025',
        description:
          'Ukrainian higher education degree assessed as corresponding to a German higher education degree at Master level in combination with previous study.',
      },
      {
        title: 'Eastern Ukrainian National University, Ukraine',
        period: '09/2002 - 08/2007',
        description:
          'Degree with distinction in computerized systems, automation and control-related technical systems.',
      },
      {
        title: 'GoIT Global - Full Stack Web Development',
        period: '09/2021 - 02/2022',
        description:
          'Online training in HTML, CSS, JavaScript, Git/GitHub and Figma; React started. Training interrupted by the beginning of the war in Ukraine.',
      },
      {
        title: 'Chance Schulbegleiter*in, KIZ Prowina GmbH',
        period: '09/2025 - 12/2025',
        description: 'Pedagogical and communication qualification, 350 teaching units.',
      },
    ],
  },
  de: {
    labels: {
      contacts: 'KONTAKT',
      techSkills: 'TECHNISCHES PROFIL',
      softSkills: 'ARBEITSWEISE',
      languages: 'SPRACHEN',
      projects: 'PROJEKTE',
      work: 'BERUFSERFAHRUNG',
      education: 'AUSBILDUNG & ANERKENNUNG',
      role: 'Rolle',
      live: 'Live-Demo',
      code: 'Code',
    },
    summary: {
      name: 'IHOR BAIERZDORF',
      role: 'IT-EINSTIEG | APPLICATION SUPPORT | WEB SUPPORT | JUNIOR QA',
      title: 'PROFIL',
      text:
        'IT-Einstiegskandidat in Deutschland mit ZAB-bewertetem ukrainischem Hochschulabschluss im Bereich computergestützte Systeme, Automatik und Steuerung. Der Abschluss entspricht in Verbindung mit dem vorherigen Studium einem deutschen Hochschulabschluss auf Master-Ebene. Aktuell frische ich meine Kenntnisse in Webentwicklung gezielt auf und suche einen realistischen qualifizierten Einstieg in Application Support, IT/User Support, Junior QA oder Web Support.',
    },
    contacts: sharedContacts,
    techSkills: [
      'HTML5 / CSS3 / SCSS',
      'JavaScript-Grundlagen',
      'React-Grundlagen und aktuelle Auffrischung',
      'Git / GitHub / GitHub Pages',
      'REST-API-Grundlagen',
      'Vite / Parcel',
      'Technische Dokumentation und strukturierte Fehlersuche',
    ],
    softSkills: [
      'Ruhige Anwenderkommunikation',
      'Analytisches Denken',
      'Zuverlässige Dokumentation',
      'Teamkoordination',
      'Serviceorientierung',
      'Schnelle Lernbereitschaft und Verantwortung',
    ],
    languages: [
      { text: 'Ukrainisch - Muttersprache' },
      { text: 'Russisch - Muttersprache' },
      { text: 'Deutsch - B1-Zertifikat, tägliche berufliche Anwendung in Deutschland' },
      { text: 'Englisch - Grundkenntnisse, Ausbau für IT-Dokumentation' },
    ],
    projects: [
      {
        name: 'Filmoteka',
        liveUrl: 'https://ihorbaer.github.io/team__three-project/',
        codeUrl: 'https://github.com/IhorBaer/team__three-project',
        role: 'Team Lead',
        text:
          'Film-Such-App mit persönlicher Filmbibliothek. Ich habe die Teamarbeit koordiniert und an Umsetzung sowie Qualitätskontrolle mitgearbeitet. Stack: JavaScript, SCSS, Parcel, REST API, Firebase.',
      },
      {
        name: 'IceCream',
        liveUrl: 'https://ihorbaer.github.io/team-project-demo/',
        codeUrl: 'https://github.com/IhorBaer/team-project-demo',
        role: 'Team Lead',
        text:
          'Responsive Landing Page für eine Eismarke. Ich habe Aufgaben koordiniert, GitHub-Zusammenarbeit unterstützt und an der Umsetzungsqualität mitgearbeitet. Stack: HTML, SCSS, JavaScript, Parcel.',
      },
      {
        name: 'React Image Finder',
        liveUrl: 'https://ihorbaer.github.io/goit-react-hw-03-image-finder/',
        codeUrl: 'https://github.com/IhorBaer/goit-react-hw-03-image-finder',
        role: 'React-Lernprojekt',
        text:
          'Bildsuch-App mit API-Anfragen, Galerie, Modal-Vorschau, Ladezustand, Fehlerzuständen und Load-More-Pagination. Stack: React, JavaScript, Axios, Pixabay API.',
      },
      {
        name: 'React Phonebook',
        liveUrl: 'https://ihorbaer.github.io/goit-react-hw-03-phonebook/',
        codeUrl: 'https://github.com/IhorBaer/goit-react-hw-03-phonebook',
        role: 'React-Lernprojekt',
        text:
          'Telefonbuch-App mit Kontakterstellung, Filter, Prüfung auf doppelte Kontakte und localStorage-Speicherung. Stack: React, JavaScript, localStorage.',
      },
      {
        name: 'WebStudio',
        liveUrl: 'https://ihorbaer.github.io/goit-markup-hw-08/',
        codeUrl: 'https://github.com/IhorBaer/goit-markup-hw-08',
        role: 'Responsives Markup-Projekt',
        text:
          'Responsive Landing Page mit Portfolio-Seite, mobiler Navigation, Modal-Formular und SCSS-Struktur. Stack: HTML, CSS, SCSS, JavaScript.',
      },
    ],
    workExperience: [
      {
        title: 'Schulbegleiter, Deutschland',
        period: 'Aktuell',
        description:
          'Begleitung im schulischen Alltag, klare Kommunikation mit Schülern, Lehrkräften und Eltern sowie zuverlässige Beobachtung und Dokumentation.',
        bullets: [
          'Übertragbarer IT-Wert: ruhige Anwenderkommunikation und strukturierte Unterstützung.',
          'Starker Fokus auf Verlässlichkeit, Verantwortung und Deeskalation.',
        ],
      },
      {
        title: 'Leiter der Verkaufsabteilung - 2Bgroup, Kiew, Ukraine',
        period: '04/2017 - 02/2022',
        description:
          'Organisation täglicher Verkaufsprozesse, Kundenkommunikation, Beratung und Konfliktlösung.',
        bullets: [
          'Teamführung und Schnittstellenarbeit zwischen Kunden, Produktion und internen Prozessen.',
          'Übertragbarer IT-Wert: Serviceorientierung, Priorisierung und Prozessdenken.',
        ],
      },
      {
        title: 'Gründer & operativer Geschäftsführer - LonePineUkraine',
        period: '01/2014 - 03/2017',
        description:
          'Aufbau und operative Steuerung einer kleinen Möbelproduktion mit Verantwortung für Planung, Qualität und Kundenkommunikation.',
        bullets: ['Eigenständige Problemlösung, Mitarbeiterkoordination und pragmatische Prozessverbesserung.'],
      },
    ],
    education: [
      {
        title: 'ZAB-Zeugnisbewertung, Deutschland',
        period: '03/2025',
        description:
          'Ukrainischer Hochschulabschluss entspricht in Verbindung mit dem vorherigen Studium einem deutschen Hochschulabschluss auf Master-Ebene.',
      },
      {
        title: 'Eastern Ukrainian National University, Ukraine',
        period: '09/2002 - 08/2007',
        description:
          'Abschluss mit Auszeichnung im Bereich computergestützte Systeme, Automatik und steuerungsbezogene technische Systeme.',
      },
      {
        title: 'GoIT Global - Full Stack Web Development',
        period: '09/2021 - 02/2022',
        description:
          'Online-Weiterbildung in HTML, CSS, JavaScript, Git/GitHub und Figma; React begonnen. Wegen des Kriegsbeginns in der Ukraine unterbrochen.',
      },
      {
        title: 'Chance Schulbegleiter*in, KIZ Prowina GmbH',
        period: '09/2025 - 12/2025',
        description: 'Pädagogische und kommunikative Qualifizierung, 350 UE.',
      },
    ],
  },
};
