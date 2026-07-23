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
    homeLabel: string;
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
    labStatus: string;
  };
  about: {
    eyebrow: string;
    title: string;
    role: string;
    emailAria: string;
    githubAria: string;
    linkedinAria: string;
    paragraphs: string[];
    focusTitle: string;
    focusAreas: Array<{
      title: string;
      description: string;
    }>;
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
      homeLabel: "Início",
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
      title: "Front, back e mobile com acabamento.",
      description:
        "Atuo no front-end, no backend e no mobile. React, React Native, APIs e UI com olhar de produto.",
      primaryCta: "Ver projetos",
      secondaryCta: "Baixar currículo",
      resumeHref: "/ana-carla-paiva-curriculo.pdf",
      resumeDownloadName: "Ana-Carla-Paiva-Curriculo.pdf",
      emailAria: "Enviar e-mail",
      githubAria: "GitHub",
      linkedinAria: "LinkedIn",
      stats: [
        { value: "Front-end", label: "React e Next.js" },
        { value: "Backend", label: "APIs e integração" },
        { value: "Mobile", label: "React Native" },
      ],
      labEyebrow: "Laboratório criativo",
      labDescription: "Do visual à API, com forma e função.",
      specialtyLabel: "Especialidade",
      specialtyValue: "React, React Native, APIs e UI de produto",
      specialtyBadge: "full stack",
      labStatus: "Disponível para novos projetos",
    },
    about: {
      eyebrow: "Sobre",
      title: "Produto de ponta a ponta",
      role: "Full Stack Developer",
      emailAria: "E-mail",
      githubAria: "GitHub",
      linkedinAria: "LinkedIn",
      paragraphs: [
        "Desenvolvedora full stack com foco em interface e produto. Construo experiências no front e no mobile, e também estruturo o backend por trás.",
        "Gosto de fechar o ciclo: da tela à API, com cuidado em usabilidade, performance e entrega. Trabalho em produtos reais, do protótipo ao que vai pro ar.",
      ],
      focusTitle: "Onde atuo",
      focusAreas: [
        { title: "Front-end", description: "React, Next.js e interfaces de produto." },
        { title: "Backend", description: "APIs, integração e lógica de negócio." },
        { title: "Mobile", description: "Apps em React Native para uso real." },
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
          title: "Full stack",
          description: "Front-end, backend, mobile e UI.",
        },
      ],
      photoAlt: "Foto de perfil de Ana Carla",
      fallbackRole: "full stack",
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
            "Foco em front-end, bem conectado a mobile e interface: React, Next.js, React Native, UI e UX.",
        },
        {
          question: "Você também faz backend?",
          answer:
            "Sim. APIs, integração e a lógica por trás da interface, junto com front-end e mobile.",
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
      role: "Desenvolvedora full stack, interface e produto.",
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
      homeLabel: "Home",
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
      title: "Front, back, and mobile with polish.",
      description:
        "I work across front-end, backend, and mobile. React, React Native, APIs, and UI with a product mindset.",
      primaryCta: "View projects",
      secondaryCta: "Download resume",
      resumeHref: "/ana-carla-paiva-resume-en.pdf",
      resumeDownloadName: "Ana-Carla-Paiva-Resume.pdf",
      emailAria: "Send email",
      githubAria: "GitHub",
      linkedinAria: "LinkedIn",
      stats: [
        { value: "Front-end", label: "React and Next.js" },
        { value: "Backend", label: "APIs and integration" },
        { value: "Mobile", label: "React Native" },
      ],
      labEyebrow: "Creative lab",
      labDescription: "From UI to API, balancing form and function.",
      specialtyLabel: "Specialty",
      specialtyValue: "React, React Native, APIs, and product UI",
      specialtyBadge: "full stack",
      labStatus: "Open to new projects",
    },
    about: {
      eyebrow: "About",
      title: "Product end to end",
      role: "Full Stack Developer",
      emailAria: "Email",
      githubAria: "GitHub",
      linkedinAria: "LinkedIn",
      paragraphs: [
        "Full stack developer focused on interface and product. I build front-end and mobile experiences, and also structure the backend behind them.",
        "I like closing the loop: from UI to API, with care for usability, performance, and delivery. I work on real products, from prototype to production.",
      ],
      focusTitle: "Where I work",
      focusAreas: [
        { title: "Front-end", description: "React, Next.js, and product interfaces." },
        { title: "Backend", description: "APIs, integration, and business logic." },
        { title: "Mobile", description: "React Native apps for real use." },
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
          title: "Full stack",
          description: "Front-end, backend, mobile, and UI.",
        },
      ],
      photoAlt: "Profile photo of Ana Carla",
      fallbackRole: "full stack",
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
            "Front-end is my focus, closely tied to mobile and interface: React, Next.js, React Native, UI and UX.",
        },
        {
          question: "Do you also work on backend?",
          answer:
            "Yes. APIs, integration, and the logic behind the interface, alongside front-end and mobile.",
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
      role: "Full stack developer, interface, and product.",
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
      homeLabel: "Inicio",
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
      title: "Front, back y mobile con acabado.",
      description:
        "Trabajo en front-end, backend y mobile. React, React Native, APIs y UI con mirada de producto.",
      primaryCta: "Ver proyectos",
      secondaryCta: "Descargar CV",
      resumeHref: "/ana-carla-paiva-resume-en.pdf",
      resumeDownloadName: "Ana-Carla-Paiva-Resume.pdf",
      emailAria: "Enviar correo",
      githubAria: "GitHub",
      linkedinAria: "LinkedIn",
      stats: [
        { value: "Front-end", label: "React y Next.js" },
        { value: "Backend", label: "APIs e integración" },
        { value: "Mobile", label: "React Native" },
      ],
      labEyebrow: "Laboratorio creativo",
      labDescription: "De la UI a la API, con forma y función.",
      specialtyLabel: "Especialidad",
      specialtyValue: "React, React Native, APIs y UI de producto",
      specialtyBadge: "full stack",
      labStatus: "Disponible para nuevos proyectos",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Producto de punta a punta",
      role: "Full Stack Developer",
      emailAria: "Correo",
      githubAria: "GitHub",
      linkedinAria: "LinkedIn",
      paragraphs: [
        "Desarrolladora full stack con foco en interfaz y producto. Construyo experiencias en front y mobile, y también estructuro el backend detrás.",
        "Me gusta cerrar el ciclo: de la pantalla a la API, con cuidado en usabilidad, performance y entrega. Trabajo en productos reales, del prototipo a producción.",
      ],
      focusTitle: "Dónde actúo",
      focusAreas: [
        { title: "Front-end", description: "React, Next.js e interfaces de producto." },
        { title: "Backend", description: "APIs, integración y lógica de negocio." },
        { title: "Mobile", description: "Apps en React Native para uso real." },
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
          title: "Full stack",
          description: "Front-end, backend, mobile y UI.",
        },
      ],
      photoAlt: "Foto de perfil de Ana Carla",
      fallbackRole: "full stack",
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
            "Mi foco es front-end, muy conectado a mobile e interfaz: React, Next.js, React Native, UI y UX.",
        },
        {
          question: "¿También haces backend?",
          answer:
            "Sí. APIs, integración y la lógica detrás de la interfaz, junto con front-end y mobile.",
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
      role: "Desarrolladora full stack, interfaz y producto.",
      builtWith: "Hecho con Next.js, Tailwind y Motion",
    },
  },
};

export function getPortfolioContent(locale: Locale): PortfolioContent {
  return portfolioContent[locale];
}
