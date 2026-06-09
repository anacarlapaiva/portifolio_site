export const locales = ["pt", "en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export function hasLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export type LocalizedProjectItem = {
  title: string;
  summary: string;
  stack: string[];
  href: string;
  imageSrc: string;
  imageAlt: string;
  category: "website" | "app";
};

export type PortfolioContent = {
  locale: Locale;
  htmlLang: string;
  metadata: {
    title: string;
    description: string;
  };
  languageSwitcher: {
    label: string;
    currentLabel: string;
    options: Array<{
      locale: Locale;
      label: string;
      shortLabel: string;
    }>;
  };
  themeToggle: {
    ariaLabel: string;
    enableLight: string;
    enableDark: string;
  };
  siteHeader: {
    brandLabel: string;
    navAriaLabel: string;
    mobileNavAriaLabel: string;
    openMenu: string;
    closeMenu: string;
  };
  mobileDock: {
    ariaLabel: string;
  };
  skipLink: string;
  navItems: Array<{
    label: string;
    href: string;
  }>;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    resumeHref: string;
    resumeDownloadName: string;
    emailAria: string;
    githubAria: string;
    linkedinAria: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
    labEyebrow: string;
    labDescription: string;
    specialtyLabel: string;
    specialtyValue: string;
    specialtyBadge: string;
  };
  about: {
    eyebrow: string;
    title: string;
    role: string;
    emailAria: string;
    githubAria: string;
    linkedinAria: string;
    paragraphs: string[];
    credentialsTitle: string;
    credentials: Array<{
      title: string;
      description: string;
    }>;
    photoAlt: string;
    fallbackRole: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    items: Array<{
      name: string;
      description: string;
    }>;
  };
  process: {
    eyebrow: string;
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  projects: {
    eyebrow: string;
    title: string;
    caseLabel: string;
    viewProjectLabel: string;
    items: LocalizedProjectItem[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    items: Array<{
      label: string;
      value: string;
      href: string;
    }>;
  };
  footer: {
    role: string;
    builtWith: string;
  };
};

const sharedProjects = {
  solus: {
    href: "https://novo.solus.inf.br/home",
    imageSrc: "/project-previews/solus-site-v2.png",
    category: "website" as const,
  },
  centroCardio: {
    href: "https://centrocardiolondrina.com.br/",
    imageSrc: "/project-previews/centro-cardio-londrina-site-v2.png",
    category: "website" as const,
  },
  theBestAcai: {
    href: "https://www.thebestacai.com.br/",
    imageSrc: "/project-previews/the-best-acai-site-v2.png",
    category: "website" as const,
  },
  clubeTheBest: {
    href: "#contato",
    imageSrc: "/project-previews/mobile-app-vector.svg",
    category: "app" as const,
  },
  theBestPortal: {
    href: "#contato",
    imageSrc: "/project-previews/mobile-app-vector.svg",
    category: "app" as const,
  },
};

const portfolioContent: Record<Locale, PortfolioContent> = {
  pt: {
    locale: "pt",
    htmlLang: "pt-BR",
    metadata: {
      title: "Ana Carla | Desenvolvedora Full Stack",
      description:
        "Portfólio de desenvolvedora com foco em front-end, React Native, interfaces premium e produtos digitais modernos.",
    },
    languageSwitcher: {
      label: "Idioma",
      currentLabel: "Português",
      options: [
        { locale: "pt", label: "Português", shortLabel: "PT" },
        { locale: "en", label: "English", shortLabel: "EN" },
        { locale: "es", label: "Español", shortLabel: "ES" },
      ],
    },
    themeToggle: {
      ariaLabel: "Alternar tema",
      enableLight: "Ativar modo claro",
      enableDark: "Ativar modo escuro",
    },
    siteHeader: {
      brandLabel: "Ana Carla",
      navAriaLabel: "Navegação principal",
      mobileNavAriaLabel: "Navegação mobile",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
    },
    mobileDock: {
      ariaLabel: "Navegação rápida mobile",
    },
    skipLink: "Pular para o conteúdo principal",
    navItems: [
      { label: "Sobre", href: "#sobre" },
      { label: "Skills", href: "#skills" },
      { label: "Projetos", href: "#projetos" },
      { label: "FAQ", href: "#faq" },
      { label: "Contato", href: "#contato" },
    ],
    hero: {
      eyebrow: "Desenvolvedora Full Stack",
      title: "Front-end, mobile e interface com acabamento de produto.",
      description:
        "Interfaces com clareza, consistência visual e código bem feito — em React, React Native e UI UX.",
      primaryCta: "Ver projetos",
      secondaryCta: "Baixar currículo",
      resumeHref: "/ana-carla-paiva-curriculo.pdf",
      resumeDownloadName: "Ana-Carla-Paiva-Curriculo.pdf",
      emailAria: "Enviar e-mail",
      githubAria: "GitHub",
      linkedinAria: "LinkedIn",
      stats: [
        { value: "Front-end", label: "foco em interface e produto" },
        { value: "Mobile", label: "pós em mobile + React Native" },
        { value: "UI + UX", label: "design aplicado ao código" },
      ],
      labEyebrow: "Laboratório criativo",
      labDescription: "Interface e mobile com forma e função.",
      specialtyLabel: "Especialidade",
      specialtyValue: "React, React Native e UI orientada a produto",
      specialtyBadge: "interface first",
    },
    about: {
      eyebrow: "Sobre",
      title: "Ideias viram interfaces fortes e usáveis",
      role: "Front-end developer • React Native • UI UX",
      emailAria: "E-mail",
      githubAria: "GitHub",
      linkedinAria: "LinkedIn",
      paragraphs: [
        "Desenvolvedora front-end focada em interface e produto. Crio experiências simples de usar — com critério visual, componentes bem pensados e código organizado por trás.",
      ],
      credentialsTitle: "Credenciais",
      credentials: [
        {
          title: "Engenharia de Software",
          description: "Estrutura, escalabilidade e qualidade.",
        },
        {
          title: "Pós em Mobile",
          description: "Produto mobile, performance e usabilidade.",
        },
        {
          title: "Perfil híbrido",
          description: "Front-end, interface e UX juntos.",
        },
      ],
      photoAlt: "Foto de perfil de Ana Carla",
      fallbackRole: "front-end • mobile • ui ux",
    },
    skills: {
      eyebrow: "Skills",
      title: "Ferramentas para tirar ideias do papel",
      items: [
        {
          name: "Front-end moderno",
          description: "React, Next.js e componentes orientados a produto.",
        },
        {
          name: "React Native",
          description: "Apps mobile e interfaces para uso real.",
        },
        {
          name: "UI e UX Design",
          description: "Hierarquia, interação e refinamento com intenção.",
        },
        {
          name: "Design systems",
          description: "Componentes, tokens e consistência em escala.",
        },
        {
          name: "Animação e UX",
          description: "Microinterações que comunicam estado sem exagero.",
        },
        {
          name: "Responsividade real",
          description: "Layouts fluidos pensados para uso, não breakpoints.",
        },
      ],
    },
    process: {
      eyebrow: "Como eu trabalho",
      title: "Como eu construo",
      items: [
        {
          title: "Entender o problema",
          description: "Traduzo o objetivo do produto em estrutura de interface.",
        },
        {
          title: "Protótipo com intenção",
          description: "Layout, componentes e estados antes de codar.",
        },
        {
          title: "Entrega com acabamento",
          description: "Acessibilidade, responsividade e polish visual.",
        },
      ],
    },
    projects: {
      eyebrow: "Laboratório",
      title: "Projetos para marca e produto",
      caseLabel: "Case",
      viewProjectLabel: "Ver projeto",
      items: [
        {
          title: "Solus",
          summary: "Produto web com foco em interface, usabilidade e entrega consistente.",
          stack: ["Front-end", "Web", "UI"],
          imageAlt: "Preview do site Solus",
          ...sharedProjects.solus,
        },
        {
          title: "Centro Cardio Londrina",
          summary: "Site institucional com navegação clara e marca profissional.",
          stack: ["Website", "Interface", "Experiência"],
          imageAlt: "Preview do site Centro Cardio Londrina",
          ...sharedProjects.centroCardio,
        },
        {
          title: "The Best Açaí",
          summary: "Site de marca com presença digital forte e navegação clara.",
          stack: ["Website", "Marca", "Conversão"],
          imageAlt: "Preview do site The Best Açaí",
          ...sharedProjects.theBestAcai,
        },
        {
          title: "Clube The Best",
          summary: "App React Native focado em experiência fluida e recorrência.",
          stack: ["React Native", "styled-components", "Mobile"],
          imageAlt: "Ilustração de aplicativo mobile para Clube The Best",
          ...sharedProjects.clubeTheBest,
        },
        {
          title: "The Best Portal",
          summary: "App de trabalho em React Native com fluxos organizados.",
          stack: ["React Native", "styled-components", "App"],
          imageAlt: "Ilustração de aplicativo mobile para The Best Portal",
          ...sharedProjects.theBestPortal,
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Perguntas frequentes",
      items: [
        {
          question: "Front-end, mobile ou design?",
          answer:
            "Foco em front-end, bem conectado a mobile e interface — React, Next.js, React Native, UI e UX.",
        },
        {
          question: "Você desenvolve apps em React Native?",
          answer:
            "Sim. Apps mobile em React Native com foco em performance, clareza e manutenção.",
        },
        {
          question: "Que tipo de projeto você entrega?",
          answer:
            "Landing pages premium, sites institucionais, produtos web e apps mobile.",
        },
        {
          question: "Você atua em times e produtos existentes?",
          answer:
            "Sim. Evoluo interface, organizo componentes e elevo a qualidade do produto.",
        },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos construir algo bom juntos",
      description:
        "Disponível para freelas, novos produtos e times que querem elevar o front-end.",
      cta: "Vamos conversar",
      items: [
        { label: "Email", value: "acfpaiva99@gmail.com", href: "mailto:acfpaiva99@gmail.com" },
        { label: "LinkedIn", value: "linkedin.com/in/anacarlapaiva", href: "https://www.linkedin.com/in/anacarlapaiva" },
        { label: "GitHub", value: "github.com/anacarlapaiva", href: "https://github.com/anacarlapaiva" },
      ],
    },
    footer: {
      role: "Desenvolvedora front-end, interface e produto.",
      builtWith: "Feito com Next.js, Tailwind e Motion",
    },
  },
  en: {
    locale: "en",
    htmlLang: "en",
    metadata: {
      title: "Ana Carla | Full Stack Developer",
      description:
        "Developer portfolio focused on front-end, React Native, premium interfaces, and modern digital products.",
    },
    languageSwitcher: {
      label: "Language",
      currentLabel: "English",
      options: [
        { locale: "pt", label: "Português", shortLabel: "PT" },
        { locale: "en", label: "English", shortLabel: "EN" },
        { locale: "es", label: "Español", shortLabel: "ES" },
      ],
    },
    themeToggle: {
      ariaLabel: "Toggle theme",
      enableLight: "Enable light mode",
      enableDark: "Enable dark mode",
    },
    siteHeader: {
      brandLabel: "Ana Carla",
      navAriaLabel: "Main navigation",
      mobileNavAriaLabel: "Mobile navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    mobileDock: {
      ariaLabel: "Quick mobile navigation",
    },
    skipLink: "Skip to main content",
    navItems: [
      { label: "About", href: "#sobre" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projetos" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contato" },
    ],
    hero: {
      eyebrow: "Full Stack Developer",
      title: "Front-end, mobile, and interface with real product polish.",
      description:
        "Interfaces with clarity, visual consistency, and solid code — in React, React Native, and UI UX.",
      primaryCta: "View projects",
      secondaryCta: "Download resume",
      resumeHref: "/ana-carla-paiva-resume-en.pdf",
      resumeDownloadName: "Ana-Carla-Paiva-Resume.pdf",
      emailAria: "Send email",
      githubAria: "GitHub",
      linkedinAria: "LinkedIn",
      stats: [
        { value: "Front-end", label: "focus on interface and product" },
        { value: "Mobile", label: "mobile postgrad + React Native" },
        { value: "UI + UX", label: "design applied to code" },
      ],
      labEyebrow: "Creative lab",
      labDescription: "Interface and mobile balancing form and function.",
      specialtyLabel: "Specialty",
      specialtyValue: "React, React Native, and product-oriented UI",
      specialtyBadge: "interface first",
    },
    about: {
      eyebrow: "About",
      title: "Ideas become strong, usable interfaces",
      role: "Front-end developer • React Native • UI UX",
      emailAria: "Email",
      githubAria: "GitHub",
      linkedinAria: "LinkedIn",
      paragraphs: [
        "Front-end developer focused on interface and product. I build experiences that feel simple to use — backed by visual judgment, thoughtful components, and organized code.",
      ],
      credentialsTitle: "Credentials",
      credentials: [
        {
          title: "Software Engineering",
          description: "Structure, scalability, and quality.",
        },
        {
          title: "Mobile postgraduate",
          description: "Mobile product, performance, and usability.",
        },
        {
          title: "Hybrid profile",
          description: "Front-end, interface, and UX together.",
        },
      ],
      photoAlt: "Profile photo of Ana Carla",
      fallbackRole: "front-end • mobile • ui ux",
    },
    skills: {
      eyebrow: "Skills",
      title: "Tools to turn ideas into products",
      items: [
        { name: "Modern front-end", description: "React, Next.js, and product-driven components." },
        { name: "React Native", description: "Mobile apps and interfaces for real use." },
        { name: "UI and UX Design", description: "Hierarchy, interaction, and refinement with intent." },
        { name: "Design systems", description: "Components, tokens, and consistency at scale." },
        { name: "Motion and UX", description: "Micro-interactions that signal state without overdoing it." },
        { name: "True responsiveness", description: "Fluid layouts built for use, not breakpoints." },
      ],
    },
    process: {
      eyebrow: "How I work",
      title: "How I build",
      items: [
        { title: "Understand the problem", description: "I turn the product goal into interface structure." },
        { title: "Intentional prototyping", description: "Layout, components, and states before coding." },
        { title: "Polished delivery", description: "Accessibility, responsiveness, and visual polish." },
      ],
    },
    projects: {
      eyebrow: "Lab",
      title: "Projects for brand and product",
      caseLabel: "Case",
      viewProjectLabel: "View project",
      items: [
        {
          title: "Solus",
          summary: "Web product focused on interface, usability, and consistent delivery.",
          stack: ["Front-end", "Web", "UI"],
          imageAlt: "Preview of the Solus website",
          ...sharedProjects.solus,
        },
        {
          title: "Centro Cardio Londrina",
          summary: "Institutional site with clear navigation and a professional brand.",
          stack: ["Website", "Interface", "Experience"],
          imageAlt: "Preview of the Centro Cardio Londrina website",
          ...sharedProjects.centroCardio,
        },
        {
          title: "The Best Acai",
          summary: "Brand site with strong digital presence and clear navigation.",
          stack: ["Website", "Brand", "Conversion"],
          imageAlt: "Preview of The Best Acai website",
          ...sharedProjects.theBestAcai,
        },
        {
          title: "Clube The Best",
          summary: "React Native app focused on a fluid, recurring experience.",
          stack: ["React Native", "styled-components", "Mobile"],
          imageAlt: "Mobile app illustration for Clube The Best",
          ...sharedProjects.clubeTheBest,
        },
        {
          title: "The Best Portal",
          summary: "Work app in React Native with organized flows.",
          stack: ["React Native", "styled-components", "App"],
          imageAlt: "Mobile app illustration for The Best Portal",
          ...sharedProjects.theBestPortal,
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      items: [
        {
          question: "Front-end, mobile, or design?",
          answer:
            "Front-end is my focus, closely tied to mobile and interface — React, Next.js, React Native, UI and UX.",
        },
        {
          question: "Do you build apps in React Native?",
          answer:
            "Yes. Mobile apps in React Native focused on performance, clarity, and maintenance.",
        },
        {
          question: "What kind of projects do you deliver?",
          answer:
            "Premium landing pages, institutional sites, web products, and mobile apps.",
        },
        {
          question: "Can you join existing teams and products?",
          answer:
            "Yes. I evolve interfaces, organize components, and raise product quality.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build something great together",
      description:
        "Available for freelance work, new products, and teams that want to raise their front-end.",
      cta: "Let's talk",
      items: [
        { label: "Email", value: "acfpaiva99@gmail.com", href: "mailto:acfpaiva99@gmail.com" },
        { label: "LinkedIn", value: "linkedin.com/in/anacarlapaiva", href: "https://www.linkedin.com/in/anacarlapaiva" },
        { label: "GitHub", value: "github.com/anacarlapaiva", href: "https://github.com/anacarlapaiva" },
      ],
    },
    footer: {
      role: "Front-end developer, interface, and product.",
      builtWith: "Built with Next.js, Tailwind, and Motion",
    },
  },
  es: {
    locale: "es",
    htmlLang: "es",
    metadata: {
      title: "Ana Carla | Desarrolladora Full Stack",
      description:
        "Portafolio de desarrolladora enfocado en front-end, React Native, interfaces premium y productos digitales modernos.",
    },
    languageSwitcher: {
      label: "Idioma",
      currentLabel: "Español",
      options: [
        { locale: "pt", label: "Português", shortLabel: "PT" },
        { locale: "en", label: "English", shortLabel: "EN" },
        { locale: "es", label: "Español", shortLabel: "ES" },
      ],
    },
    themeToggle: {
      ariaLabel: "Cambiar tema",
      enableLight: "Activar modo claro",
      enableDark: "Activar modo oscuro",
    },
    siteHeader: {
      brandLabel: "Ana Carla",
      navAriaLabel: "Navegación principal",
      mobileNavAriaLabel: "Navegación mobile",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    mobileDock: {
      ariaLabel: "Navegación rápida mobile",
    },
    skipLink: "Saltar al contenido principal",
    navItems: [
      { label: "Sobre mí", href: "#sobre" },
      { label: "Skills", href: "#skills" },
      { label: "Proyectos", href: "#projetos" },
      { label: "FAQ", href: "#faq" },
      { label: "Contacto", href: "#contato" },
    ],
    hero: {
      eyebrow: "Desarrolladora Full Stack",
      title: "Front-end, mobile e interfaz con acabado de producto.",
      description:
        "Interfaces con claridad, consistencia visual y código bien hecho — en React, React Native y UI UX.",
      primaryCta: "Ver proyectos",
      secondaryCta: "Descargar CV",
      resumeHref: "/ana-carla-paiva-resume-en.pdf",
      resumeDownloadName: "Ana-Carla-Paiva-Resume.pdf",
      emailAria: "Enviar correo",
      githubAria: "GitHub",
      linkedinAria: "LinkedIn",
      stats: [
        { value: "Front-end", label: "foco en interfaz y producto" },
        { value: "Mobile", label: "posgrado mobile + React Native" },
        { value: "UI + UX", label: "diseño aplicado al código" },
      ],
      labEyebrow: "Laboratorio creativo",
      labDescription: "Interfaz y mobile con forma y función.",
      specialtyLabel: "Especialidad",
      specialtyValue: "React, React Native y UI orientada a producto",
      specialtyBadge: "interface first",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Las ideas se vuelven interfaces fuertes y usables",
      role: "Front-end developer • React Native • UI UX",
      emailAria: "Correo",
      githubAria: "GitHub",
      linkedinAria: "LinkedIn",
      paragraphs: [
        "Desarrolladora front-end enfocada en interfaz y producto. Creo experiencias simples de usar — con criterio visual, componentes bien pensados y código organizado por detrás.",
      ],
      credentialsTitle: "Credenciales",
      credentials: [
        {
          title: "Ingeniería de Software",
          description: "Estructura, escalabilidad y calidad.",
        },
        {
          title: "Posgrado en Mobile",
          description: "Producto mobile, performance y usabilidad.",
        },
        {
          title: "Perfil híbrido",
          description: "Front-end, interfaz y UX juntos.",
        },
      ],
      photoAlt: "Foto de perfil de Ana Carla",
      fallbackRole: "front-end • mobile • ui ux",
    },
    skills: {
      eyebrow: "Skills",
      title: "Herramientas para convertir ideas en productos",
      items: [
        { name: "Front-end moderno", description: "React, Next.js y componentes orientados a producto." },
        { name: "React Native", description: "Apps mobile e interfaces para uso real." },
        { name: "UI y UX Design", description: "Jerarquía, interacción y refinamiento con intención." },
        { name: "Design systems", description: "Componentes, tokens y consistencia a escala." },
        { name: "Animación y UX", description: "Microinteracciones que comunican estado sin exagerar." },
        { name: "Responsive real", description: "Layouts fluidos pensados para uso, no breakpoints." },
      ],
    },
    process: {
      eyebrow: "Cómo trabajo",
      title: "Cómo construyo",
      items: [
        { title: "Entender el problema", description: "Traduzco el objetivo del producto en estructura de interfaz." },
        { title: "Prototipo con intención", description: "Layout, componentes y estados antes de codear." },
        { title: "Entrega con acabado", description: "Accesibilidad, responsividad y pulido visual." },
      ],
    },
    projects: {
      eyebrow: "Laboratorio",
      title: "Proyectos para marca y producto",
      caseLabel: "Caso",
      viewProjectLabel: "Ver proyecto",
      items: [
        {
          title: "Solus",
          summary: "Producto web con foco en interfaz, usabilidad y entrega consistente.",
          stack: ["Front-end", "Web", "UI"],
          imageAlt: "Preview del sitio Solus",
          ...sharedProjects.solus,
        },
        {
          title: "Centro Cardio Londrina",
          summary: "Sitio institucional con navegación clara y marca profesional.",
          stack: ["Website", "Interfaz", "Experiencia"],
          imageAlt: "Preview del sitio Centro Cardio Londrina",
          ...sharedProjects.centroCardio,
        },
        {
          title: "The Best Açaí",
          summary: "Sitio de marca con presencia digital fuerte y navegación clara.",
          stack: ["Website", "Marca", "Conversión"],
          imageAlt: "Preview del sitio The Best Açaí",
          ...sharedProjects.theBestAcai,
        },
        {
          title: "Clube The Best",
          summary: "App React Native enfocada en experiencia fluida y recurrencia.",
          stack: ["React Native", "styled-components", "Mobile"],
          imageAlt: "Ilustración de app mobile para Clube The Best",
          ...sharedProjects.clubeTheBest,
        },
        {
          title: "The Best Portal",
          summary: "App de trabajo en React Native con flujos organizados.",
          stack: ["React Native", "styled-components", "App"],
          imageAlt: "Ilustración de app mobile para The Best Portal",
          ...sharedProjects.theBestPortal,
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Preguntas frecuentes",
      items: [
        {
          question: "¿Front-end, mobile o diseño?",
          answer:
            "Mi foco es front-end, muy conectado a mobile e interfaz — React, Next.js, React Native, UI y UX.",
        },
        {
          question: "¿Desarrollas apps en React Native?",
          answer:
            "Sí. Apps mobile en React Native con foco en performance, claridad y mantenimiento.",
        },
        {
          question: "¿Qué tipo de proyectos entregas?",
          answer:
            "Landing pages premium, sitios institucionales, productos web y apps mobile.",
        },
        {
          question: "¿Trabajas en equipos y productos existentes?",
          answer:
            "Sí. Evoluciono interfaz, organizo componentes y elevo la calidad del producto.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Construyamos algo bueno juntos",
      description:
        "Disponible para freelance, nuevos productos y equipos que quieren elevar su front-end.",
      cta: "Hablemos",
      items: [
        { label: "Email", value: "acfpaiva99@gmail.com", href: "mailto:acfpaiva99@gmail.com" },
        { label: "LinkedIn", value: "linkedin.com/in/anacarlapaiva", href: "https://www.linkedin.com/in/anacarlapaiva" },
        { label: "GitHub", value: "github.com/anacarlapaiva", href: "https://github.com/anacarlapaiva" },
      ],
    },
    footer: {
      role: "Desarrolladora front-end, interfaz y producto.",
      builtWith: "Hecho con Next.js, Tailwind y Motion",
    },
  },
};

export function getPortfolioContent(locale: Locale): PortfolioContent {
  return portfolioContent[locale];
}
