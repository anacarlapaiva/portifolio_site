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
    highlights: string[];
    findHereTitle: string;
    profileLabel: string;
    profileHighlights: string[];
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
    repertoireTitle: string;
    formationTitle: string;
    formationDescription: string;
    deliveryTitle: string;
    deliveryDescription: string;
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
      title: "Front-end, mobile e interface com acabamento de quem vive produto de verdade.",
      description:
        "Sou desenvolvedora front-end com forte experiência em interface, React Native, UI UX design e produtos digitais que precisam unir clareza, consistência visual e implementação bem feita.",
      primaryCta: "Ver projetos",
      secondaryCta: "Baixar currículo",
      resumeHref: "/ana-carla-paiva-curriculo.pdf",
      resumeDownloadName: "Ana-Carla-Paiva-Curriculo.pdf",
      emailAria: "Enviar e-mail",
      githubAria: "GitHub",
      linkedinAria: "LinkedIn",
      stats: [
        { value: "Front-end", label: "especialidade principal com foco em interface e produto" },
        { value: "Mobile", label: "pós-graduada em desenvolvimento mobile e vivência com React Native" },
        { value: "UI + UX", label: "olhar de design aplicado ao código, da estrutura ao detalhe" },
      ],
      labEyebrow: "Laboratório criativo",
      labDescription: "Interface, mobile e experiências que equilibram forma e função",
      specialtyLabel: "Especialidade",
      specialtyValue: "React, React Native e UI orientada a produto",
      specialtyBadge: "interface first",
      highlights: [
        "Front-end com repertório forte em interface, produto e consistência visual.",
        "React Native para experiências mobile mais fluidas, claras e escaláveis.",
        "UX e UI como parte do desenvolvimento, não como etapa separada.",
      ],
      findHereTitle: "O que você encontra aqui",
      profileLabel: "perfil profissional",
      profileHighlights: [
        "Experiência real em interface",
        "Visão mobile e produto",
        "Design e código trabalhando juntos",
      ],
    },
    about: {
      eyebrow: "Sobre",
      title: "Muito prazer, eu transformo boas ideias em interfaces fortes e usáveis",
      role: "Front-end developer • React Native • UI UX",
      emailAria: "E-mail",
      githubAria: "GitHub",
      linkedinAria: "LinkedIn",
      paragraphs: [
        "Sou desenvolvedora front-end com bastante experiência em interface e um jeito de trabalhar muito conectado ao que o usuário percebe na ponta. Gosto de construir experiências que parecem simples de usar, mas por trás têm critério visual, componentes bem pensados e código organizado.",
        "Minha trajetória passa por React, React Native, UI UX design e produtos digitais que exigem mais do que uma tela bonita. Tenho pós-graduação em desenvolvimento mobile, formação em Engenharia de Software e também uma base em Node, Nest e integrações, o suficiente para dialogar com o ecossistema inteiro do produto.",
      ],
      credentialsTitle: "Credenciais",
      credentials: [
        {
          title: "Engenharia de Software",
          description: "Base técnica sólida para pensar estrutura, escalabilidade e qualidade de entrega.",
        },
        {
          title: "Pós em Desenvolvimento Mobile",
          description: "Especialização que fortaleceu a visão de produto mobile, performance e usabilidade.",
        },
        {
          title: "Perfil híbrido",
          description: "Front-end, interface e UX trabalhando juntos desde o conceito até a implementação.",
        },
      ],
      repertoireTitle: "Repertório e entrega",
      formationTitle: "Formação e repertório",
      formationDescription:
        "Minha base me ajuda a pensar experiência, sistema, manutenção e produto junto. Não vejo interface como acabamento: vejo como parte central da estratégia.",
      deliveryTitle: "O que costumo entregar",
      deliveryDescription:
        "Landing pages premium, produtos web com boa hierarquia, apps e fluxos mobile com foco em clareza, usabilidade e polimento visual.",
      photoAlt: "Foto de perfil de Ana Carla",
      fallbackRole: "front-end • mobile • ui ux",
    },
    skills: {
      eyebrow: "Skills",
      title: "Ferramentas e repertório para tirar ideias do papel",
      items: [
        {
          name: "Front-end moderno",
          description: "React, Next.js e componentização orientada a produto, performance e manutenção.",
        },
        {
          name: "React Native",
          description: "Experiência com apps mobile e interfaces pensadas para uso real em diferentes dispositivos.",
        },
        {
          name: "UI e UX Design",
          description: "Hierarquia visual, jornada, interação e refinamento de interface com intenção.",
        },
        {
          name: "Design systems",
          description: "Componentes reutilizáveis, tokens, consistência visual e escala para times e produtos.",
        },
        {
          name: "Animação e UX",
          description: "Microinterações com motion para comunicar estado sem exagero.",
        },
        {
          name: "Back-end de apoio",
          description: "Base em Node, Nest e APIs para integrar fluxos e conversar melhor com o produto inteiro.",
        },
        {
          name: "Responsividade real",
          description: "Layouts fluidos pensados primeiro para uso, não só para breakpoints.",
        },
        {
          name: "Descoberta e refinamento",
          description: "Prototipação, handoff, investigação e refinamento com times de produto e design.",
        },
      ],
    },
    process: {
      eyebrow: "Como eu trabalho",
      title: "Uma forma de construir que junta estética, produto e implementação",
      items: [
        {
          title: "Entendimento do problema",
          description: "Traduzo contexto de negócio e objetivo do produto em estrutura de interface.",
        },
        {
          title: "Protótipo com intenção",
          description: "Penso layout, componentes, estados e fluxo antes de acelerar a implementação.",
        },
        {
          title: "Entrega com acabamento",
          description: "Levo o detalhe a sério: acessibilidade, responsividade, consistência e polish visual.",
        },
      ],
    },
    projects: {
      eyebrow: "Laboratório",
      title: "Projetos pensados para marca, produto e conversão",
      caseLabel: "Case",
      viewProjectLabel: "Ver projeto",
      items: [
        {
          title: "Solus",
          summary:
            "Participação em produto web com foco em estrutura de interface, usabilidade e entrega consistente para operação real.",
          stack: ["Front-end", "Web", "UI"],
          imageAlt: "Preview do site Solus",
          ...sharedProjects.solus,
        },
        {
          title: "Centro Cardio Londrina",
          summary:
            "Projeto institucional com foco em experiência clara, navegação objetiva e apresentação profissional da marca.",
          stack: ["Website", "Interface", "Experiência"],
          imageAlt: "Preview do site Centro Cardio Londrina",
          ...sharedProjects.centroCardio,
        },
        {
          title: "The Best Açaí",
          summary:
            "Site com foco em presença digital, clareza de navegação e apresentação forte da marca para o público final.",
          stack: ["Website", "Marca", "Conversão"],
          imageAlt: "Preview do site The Best Açaí",
          ...sharedProjects.theBestAcai,
        },
        {
          title: "Clube The Best",
          summary:
            "Aplicativo mobile desenvolvido em React Native com styled-components, voltado para experiência fluida, recorrência e relacionamento com o usuário.",
          stack: ["React Native", "styled-components", "Mobile"],
          imageAlt: "Ilustração de aplicativo mobile para Clube The Best",
          ...sharedProjects.clubeTheBest,
        },
        {
          title: "The Best Portal",
          summary:
            "App de trabalho com foco em jornada mobile, organização de fluxos e interface consistente em React Native com styled-components.",
          stack: ["React Native", "styled-components", "App"],
          imageAlt: "Ilustração de aplicativo mobile para The Best Portal",
          ...sharedProjects.theBestPortal,
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Dúvidas frequentes sobre minha atuação, stack e forma de construir",
      items: [
        {
          question: "Você atua mais com front-end, mobile ou design?",
          answer:
            "Meu foco principal está no front-end, mas minha atuação é bem conectada com mobile e interface. Trabalho com React, Next.js, React Native e também trago repertório de UI e UX para tomar decisões mais completas no produto.",
        },
        {
          question: "Você desenvolve aplicativos em React Native?",
          answer:
            "Sim. Tenho experiência com apps mobile em React Native, incluindo projetos com styled-components, fluxos de uso recorrente e interfaces pensadas para performance, clareza e manutenção.",
        },
        {
          question: "Você também participa da parte visual e da experiência do usuário?",
          answer:
            "Sim. Minha atuação vai além da implementação. Costumo contribuir com estrutura visual, hierarquia, refinamento de interface, consistência de componentes e decisões que impactam diretamente a experiência de uso.",
        },
        {
          question: "Que tipo de projeto você costuma entregar?",
          answer:
            "Landing pages premium, sites institucionais, produtos web com interface mais refinada e aplicativos mobile. Gosto especialmente de projetos que precisam unir identidade visual forte, boa usabilidade e código bem organizado.",
        },
        {
          question: "Você consegue atuar em times e produtos já existentes?",
          answer:
            "Consigo, sim. Posso entrar para evoluir interface, organizar componentes, melhorar consistência visual, dar suporte em arquitetura front-end e ajudar o time a elevar a qualidade do produto sem perder ritmo de entrega.",
        },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Se a ideia for boa, eu quero construir junto",
      description:
        "Disponível para freelas, novos produtos, landing pages premium e times que precisam elevar a experiência do front-end sem perder consistência técnica.",
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
      title: "Front-end, mobile, and interface work crafted by someone who truly understands product.",
      description:
        "I am a front-end developer with strong experience in interface design, React Native, UI UX design, and digital products that need to combine clarity, visual consistency, and solid implementation.",
      primaryCta: "View projects",
      secondaryCta: "Download resume",
      resumeHref: "/ana-carla-paiva-resume-en.pdf",
      resumeDownloadName: "Ana-Carla-Paiva-Resume.pdf",
      emailAria: "Send email",
      githubAria: "GitHub",
      linkedinAria: "LinkedIn",
      stats: [
        { value: "Front-end", label: "main specialty focused on interface and product" },
        { value: "Mobile", label: "postgraduate training in mobile development and hands-on React Native experience" },
        { value: "UI + UX", label: "design-driven thinking applied from structure to detail" },
      ],
      labEyebrow: "Creative lab",
      labDescription: "Interface, mobile, and digital experiences that balance form and function",
      specialtyLabel: "Specialty",
      specialtyValue: "React, React Native, and product-oriented UI",
      specialtyBadge: "interface first",
      highlights: [
        "Strong front-end background in interface, product, and visual consistency.",
        "React Native work focused on fluid, clear, and scalable mobile experiences.",
        "UX and UI as part of development, not as a separate phase.",
      ],
      findHereTitle: "What you will find here",
      profileLabel: "professional profile",
      profileHighlights: [
        "Real interface experience",
        "Mobile and product perspective",
        "Design and code working together",
      ],
    },
    about: {
      eyebrow: "About",
      title: "Nice to meet you, I turn good ideas into strong and usable interfaces",
      role: "Front-end developer • React Native • UI UX",
      emailAria: "Email",
      githubAria: "GitHub",
      linkedinAria: "LinkedIn",
      paragraphs: [
        "I am a front-end developer with strong experience in interface work and a way of building that stays closely connected to what users actually perceive. I like creating experiences that feel simple to use, while behind the scenes they rely on visual judgment, thoughtful components, and organized code.",
        "My background includes React, React Native, UI UX design, and digital products that demand more than a beautiful screen. I hold a postgraduate degree in mobile development, a degree in Software Engineering, and I also have a solid base in Node, Nest, and integrations, which helps me communicate across the whole product ecosystem.",
      ],
      credentialsTitle: "Credentials",
      credentials: [
        {
          title: "Software Engineering",
          description: "A solid technical foundation to think about structure, scalability, and delivery quality.",
        },
        {
          title: "Postgraduate in Mobile Development",
          description: "Specialization that strengthened my view of mobile product, performance, and usability.",
        },
        {
          title: "Hybrid profile",
          description: "Front-end, interface, and UX working together from concept to implementation.",
        },
      ],
      repertoireTitle: "Range and delivery",
      formationTitle: "Background and range",
      formationDescription:
        "My background helps me think about experience, system, maintenance, and product together. I do not see interface as decoration; I see it as a central part of strategy.",
      deliveryTitle: "What I usually deliver",
      deliveryDescription:
        "Premium landing pages, web products with strong hierarchy, apps, and mobile flows focused on clarity, usability, and visual polish.",
      photoAlt: "Profile photo of Ana Carla",
      fallbackRole: "front-end • mobile • ui ux",
    },
    skills: {
      eyebrow: "Skills",
      title: "Tools and range to turn ideas into real products",
      items: [
        { name: "Modern front-end", description: "React, Next.js, and product-oriented componentization focused on performance and maintenance." },
        { name: "React Native", description: "Experience with mobile apps and interfaces designed for real-world use across devices." },
        { name: "UI and UX Design", description: "Visual hierarchy, journeys, interaction, and interface refinement with intention." },
        { name: "Design systems", description: "Reusable components, tokens, visual consistency, and scale for teams and products." },
        { name: "Motion and UX", description: "Micro-interactions that communicate state without overdoing it." },
        { name: "Supporting back-end", description: "A solid base in Node, Nest, and APIs to integrate flows and collaborate better across the product." },
        { name: "True responsiveness", description: "Fluid layouts designed for real usage, not only for breakpoints." },
        { name: "Discovery and refinement", description: "Prototyping, handoff, investigation, and refinement with product and design teams." },
      ],
    },
    process: {
      eyebrow: "How I work",
      title: "A way of building that brings together aesthetics, product, and implementation",
      items: [
        { title: "Understanding the problem", description: "I translate business context and product goals into interface structure." },
        { title: "Intentional prototyping", description: "I think through layout, components, states, and flow before accelerating implementation." },
        { title: "Polished delivery", description: "I take detail seriously: accessibility, responsiveness, consistency, and visual polish." },
      ],
    },
    projects: {
      eyebrow: "Lab",
      title: "Projects designed for brand, product, and conversion",
      caseLabel: "Case",
      viewProjectLabel: "View project",
      items: [
        {
          title: "Solus",
          summary: "Participation in a web product focused on interface structure, usability, and consistent delivery for real operational use.",
          stack: ["Front-end", "Web", "UI"],
          imageAlt: "Preview of the Solus website",
          ...sharedProjects.solus,
        },
        {
          title: "Centro Cardio Londrina",
          summary: "Institutional project focused on clear experience, objective navigation, and strong brand presentation.",
          stack: ["Website", "Interface", "Experience"],
          imageAlt: "Preview of the Centro Cardio Londrina website",
          ...sharedProjects.centroCardio,
        },
        {
          title: "The Best Acai",
          summary: "Website focused on digital presence, navigation clarity, and strong brand presentation for the end customer.",
          stack: ["Website", "Brand", "Conversion"],
          imageAlt: "Preview of The Best Acai website",
          ...sharedProjects.theBestAcai,
        },
        {
          title: "Clube The Best",
          summary: "Mobile app built with React Native and styled-components, focused on a fluid experience, recurrence, and user relationship.",
          stack: ["React Native", "styled-components", "Mobile"],
          imageAlt: "Mobile app illustration for Clube The Best",
          ...sharedProjects.clubeTheBest,
        },
        {
          title: "The Best Portal",
          summary: "Work app focused on mobile journey, flow organization, and a consistent interface built with React Native and styled-components.",
          stack: ["React Native", "styled-components", "App"],
          imageAlt: "Mobile app illustration for The Best Portal",
          ...sharedProjects.theBestPortal,
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions about my work, stack, and way of building",
      items: [
        {
          question: "Do you work more with front-end, mobile, or design?",
          answer:
            "My main focus is front-end, but my work is deeply connected to mobile and interface design. I work with React, Next.js, React Native, and I also bring UI and UX background to make better product decisions.",
        },
        {
          question: "Do you build apps in React Native?",
          answer:
            "Yes. I have experience building mobile apps in React Native, including projects with styled-components, recurring-use flows, and interfaces designed for performance, clarity, and maintenance.",
        },
        {
          question: "Do you also contribute to visual direction and user experience?",
          answer:
            "Yes. My role goes beyond implementation. I usually contribute to visual structure, hierarchy, interface refinement, component consistency, and decisions that directly affect the user experience.",
        },
        {
          question: "What kind of projects do you usually deliver?",
          answer:
            "Premium landing pages, institutional websites, web products with more refined interfaces, and mobile apps. I especially enjoy projects that need strong visual identity, good usability, and well-structured code.",
        },
        {
          question: "Can you join existing teams and products?",
          answer:
            "Yes. I can join to evolve interfaces, organize components, improve visual consistency, support front-end architecture, and help a team raise product quality without losing delivery pace.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "If the idea is strong, I want to build it with you",
      description:
        "Available for freelance work, new products, premium landing pages, and teams that need to elevate the front-end experience without losing technical consistency.",
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
      title: "Front-end, mobile e interfaz con el acabado de alguien que realmente entiende producto.",
      description:
        "Soy desarrolladora front-end con fuerte experiencia en interfaz, React Native, UI UX design y productos digitales que necesitan unir claridad, consistencia visual e implementación bien hecha.",
      primaryCta: "Ver proyectos",
      secondaryCta: "Descargar CV",
      resumeHref: "/ana-carla-paiva-resume-en.pdf",
      resumeDownloadName: "Ana-Carla-Paiva-Resume.pdf",
      emailAria: "Enviar correo",
      githubAria: "GitHub",
      linkedinAria: "LinkedIn",
      stats: [
        { value: "Front-end", label: "especialidad principal con foco en interfaz y producto" },
        { value: "Mobile", label: "posgrado en desarrollo mobile y experiencia práctica con React Native" },
        { value: "UI + UX", label: "mirada de diseño aplicada al código, desde la estructura hasta el detalle" },
      ],
      labEyebrow: "Laboratorio creativo",
      labDescription: "Interfaz, mobile y experiencias digitales que equilibran forma y función",
      specialtyLabel: "Especialidad",
      specialtyValue: "React, React Native y UI orientada a producto",
      specialtyBadge: "interface first",
      highlights: [
        "Front-end con repertorio fuerte en interfaz, producto y consistencia visual.",
        "React Native para experiencias mobile más fluidas, claras y escalables.",
        "UX y UI como parte del desarrollo, no como una etapa separada.",
      ],
      findHereTitle: "Lo que encuentras aquí",
      profileLabel: "perfil profesional",
      profileHighlights: [
        "Experiencia real en interfaz",
        "Visión mobile y de producto",
        "Diseño y código trabajando juntos",
      ],
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Mucho gusto, transformo buenas ideas en interfaces fuertes y usables",
      role: "Front-end developer • React Native • UI UX",
      emailAria: "Correo",
      githubAria: "GitHub",
      linkedinAria: "LinkedIn",
      paragraphs: [
        "Soy desarrolladora front-end con bastante experiencia en interfaz y una forma de trabajar muy conectada a lo que el usuario percibe al final. Me gusta construir experiencias que parecen simples de usar, pero que por detrás tienen criterio visual, componentes bien pensados y código organizado.",
        "Mi trayectoria pasa por React, React Native, UI UX design y productos digitales que exigen más que una pantalla bonita. Tengo posgrado en desarrollo mobile, formación en Ingeniería de Software y también una base en Node, Nest e integraciones, suficiente para dialogar con todo el ecosistema del producto.",
      ],
      credentialsTitle: "Credenciales",
      credentials: [
        {
          title: "Ingeniería de Software",
          description: "Base técnica sólida para pensar estructura, escalabilidad y calidad de entrega.",
        },
        {
          title: "Posgrado en Desarrollo Mobile",
          description: "Especialización que fortaleció mi visión de producto mobile, performance y usabilidad.",
        },
        {
          title: "Perfil híbrido",
          description: "Front-end, interfaz y UX trabajando juntos desde el concepto hasta la implementación.",
        },
      ],
      repertoireTitle: "Repertorio y entrega",
      formationTitle: "Formación y repertorio",
      formationDescription:
        "Mi base me ayuda a pensar experiencia, sistema, mantenimiento y producto al mismo tiempo. No veo la interfaz como acabado; la veo como parte central de la estrategia.",
      deliveryTitle: "Lo que suelo entregar",
      deliveryDescription:
        "Landing pages premium, productos web con buena jerarquía, apps y flujos mobile con foco en claridad, usabilidad y pulido visual.",
      photoAlt: "Foto de perfil de Ana Carla",
      fallbackRole: "front-end • mobile • ui ux",
    },
    skills: {
      eyebrow: "Skills",
      title: "Herramientas y repertorio para convertir ideas en productos reales",
      items: [
        { name: "Front-end moderno", description: "React, Next.js y componentización orientada a producto, performance y mantenimiento." },
        { name: "React Native", description: "Experiencia con apps mobile e interfaces pensadas para uso real en diferentes dispositivos." },
        { name: "UI y UX Design", description: "Jerarquía visual, recorridos, interacción y refinamiento de interfaz con intención." },
        { name: "Design systems", description: "Componentes reutilizables, tokens, consistencia visual y escala para equipos y productos." },
        { name: "Animación y UX", description: "Microinteracciones con motion para comunicar estado sin exagerar." },
        { name: "Back-end de apoyo", description: "Base en Node, Nest y APIs para integrar flujos y conversar mejor con todo el producto." },
        { name: "Responsive real", description: "Layouts fluidos pensados primero para uso real, no solo para breakpoints." },
        { name: "Descubrimiento y refinamiento", description: "Prototipado, handoff, investigación y refinamiento junto a equipos de producto y diseño." },
      ],
    },
    process: {
      eyebrow: "Cómo trabajo",
      title: "Una forma de construir que une estética, producto e implementación",
      items: [
        { title: "Entendimiento del problema", description: "Traduzco contexto de negocio y objetivo del producto en estructura de interfaz." },
        { title: "Prototipo con intención", description: "Pienso layout, componentes, estados y flujo antes de acelerar la implementación." },
        { title: "Entrega con acabado", description: "Tomo el detalle en serio: accesibilidad, responsividad, consistencia y polish visual." },
      ],
    },
    projects: {
      eyebrow: "Laboratorio",
      title: "Proyectos pensados para marca, producto y conversión",
      caseLabel: "Caso",
      viewProjectLabel: "Ver proyecto",
      items: [
        {
          title: "Solus",
          summary: "Participación en producto web con foco en estructura de interfaz, usabilidad y entrega consistente para operación real.",
          stack: ["Front-end", "Web", "UI"],
          imageAlt: "Preview del sitio Solus",
          ...sharedProjects.solus,
        },
        {
          title: "Centro Cardio Londrina",
          summary: "Proyecto institucional con foco en experiencia clara, navegación objetiva y presentación profesional de la marca.",
          stack: ["Website", "Interfaz", "Experiencia"],
          imageAlt: "Preview del sitio Centro Cardio Londrina",
          ...sharedProjects.centroCardio,
        },
        {
          title: "The Best Açaí",
          summary: "Sitio con foco en presencia digital, claridad de navegación y presentación fuerte de la marca para el público final.",
          stack: ["Website", "Marca", "Conversión"],
          imageAlt: "Preview del sitio The Best Açaí",
          ...sharedProjects.theBestAcai,
        },
        {
          title: "Clube The Best",
          summary: "Aplicación mobile desarrollada en React Native con styled-components, enfocada en experiencia fluida, recurrencia y relación con el usuario.",
          stack: ["React Native", "styled-components", "Mobile"],
          imageAlt: "Ilustración de app mobile para Clube The Best",
          ...sharedProjects.clubeTheBest,
        },
        {
          title: "The Best Portal",
          summary: "App de trabajo con foco en jornada mobile, organización de flujos e interfaz consistente en React Native con styled-components.",
          stack: ["React Native", "styled-components", "App"],
          imageAlt: "Ilustración de app mobile para The Best Portal",
          ...sharedProjects.theBestPortal,
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Preguntas frecuentes sobre mi trabajo, stack y forma de construir",
      items: [
        {
          question: "¿Trabajas más con front-end, mobile o diseño?",
          answer:
            "Mi foco principal está en front-end, pero mi actuación está muy conectada con mobile e interfaz. Trabajo con React, Next.js, React Native y también aporto repertorio de UI y UX para tomar decisiones más completas de producto.",
        },
        {
          question: "¿Desarrollas aplicaciones en React Native?",
          answer:
            "Sí. Tengo experiencia con apps mobile en React Native, incluyendo proyectos con styled-components, flujos de uso recurrente e interfaces pensadas para performance, claridad y mantenimiento.",
        },
        {
          question: "¿También participas en la parte visual y en la experiencia del usuario?",
          answer:
            "Sí. Mi trabajo va más allá de la implementación. Suelo contribuir con estructura visual, jerarquía, refinamiento de interfaz, consistencia de componentes y decisiones que impactan directamente la experiencia de uso.",
        },
        {
          question: "¿Qué tipo de proyectos sueles entregar?",
          answer:
            "Landing pages premium, sitios institucionales, productos web con interfaces más refinadas y aplicaciones mobile. Me gustan especialmente los proyectos que necesitan identidad visual fuerte, buena usabilidad y código bien organizado.",
        },
        {
          question: "¿Puedes actuar en equipos y productos ya existentes?",
          answer:
            "Sí. Puedo entrar para evolucionar interfaz, organizar componentes, mejorar consistencia visual, apoyar en arquitectura front-end y ayudar al equipo a elevar la calidad del producto sin perder ritmo de entrega.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Si la idea es buena, quiero construirla contigo",
      description:
        "Disponible para freelas, nuevos productos, landing pages premium y equipos que necesitan elevar la experiencia de front-end sin perder consistencia técnica.",
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
