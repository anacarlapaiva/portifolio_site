export const locales = ["pt", "en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export function hasLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocalePath(locale: Locale) {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

type TitledItem = {
  title: string;
  description: string;
};

export type StoreBadge = {
  prefix: string;
  label: string;
  href?: string;
  title?: string;
};

export type ProjectItem = {
  title: string;
  domain: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  kind: "site" | "app";
  summary: string;
  tags: string[];
  stores?: StoreBadge[];
};

export type CodeLine = {
  key: string;
  value: string | string[];
};

export type PortfolioContent = {
  locale: Locale;
  htmlLang: string;
  metadata: {
    title: string;
    description: string;
  };
  skipLink: string;
  newTabLabel: string;
  languageSwitcher: {
    label: string;
  };
  themeToggle: {
    label: string;
  };
  siteHeader: {
    navAriaLabel: string;
    mobileNavAriaLabel: string;
    menuLabel: string;
    closeLabel: string;
    openMenuAria: string;
    closeMenuAria: string;
  };
  navItems: Array<{
    number: string;
    label: string;
    href: string;
  }>;
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    resumeHref: string;
    status: string;
    code: {
      fileName: string;
      objectName: string;
      lines: CodeLine[];
    };
    ticker: string[];
    tickerPause: string;
    tickerPlay: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    featured: {
      fileName: string;
      badge: string;
      title: string;
      description: string;
      pickerLabel: string;
      hint: string;
      hintTouch: string;
      stageAriaLabel: string;
      flavors: string[];
      tags: string[];
      cta: string;
    };
    items: ProjectItem[];
  };
  about: {
    eyebrow: string;
    title: string;
    photoAlt: string;
    name: string;
    role: string;
    paragraphs: [string, string];
    focusTitle: string;
    focusAreas: TitledItem[];
    credentialsTitle: string;
    credentials: TitledItem[];
  };
  skills: {
    eyebrow: string;
    title: string;
    items: TitledItem[];
  };
  process: {
    eyebrow: string;
    title: string;
    items: TitledItem[];
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
    fileName: string;
    title: string;
    titleHighlight: string;
    description: string;
    cta: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      optional: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      hint: string;
      defaultSubject: string;
      greeting: string;
      signature: string;
      sent: string;
      fallback: string;
      gmail: string;
      copy: string;
      copied: string;
    };
  };
  whatsapp: {
    buttonLabel: string;
    openAria: string;
    fileName: string;
    greeting: string;
    message: string;
    cta: string;
    closeLabel: string;
  };
  footer: {
    role: string;
    builtWith: string;
    homeLabel: string;
  };
};

export const contactEmail = "acfpaiva99@gmail.com";

export const whatsappNumber = "5543999936376";
export const whatsappDisplay = "(43) 99993-6376";

export const socialLinks = [
  { label: "Email", value: contactEmail, href: `mailto:${contactEmail}` },
  { label: "LinkedIn", value: "linkedin.com/in/anacarlapaiva", href: "https://www.linkedin.com/in/anacarlapaiva" },
  { label: "GitHub", value: "github.com/anacarlapaiva", href: "https://github.com/anacarlapaiva" },
] as const;

export const matchProteinHref: string | null = null;

export const flavorMedia = [
  { key: "chocolate", color: "#5b3a2a", stage: "#5a4234" },
  { key: "amendoim", color: "#c98a45", stage: "#a8692d" },
  { key: "morango", color: "#e2506a", stage: "#c45f6c" },
] as const;

const storeLinks = {
  clubeAppStore: "https://apps.apple.com/br/app/clube-the-best/id6463561926",
  clubePlay: "https://play.google.com/store/apps/details?id=com.amatech.thebestclubapp",
  portalPlay: "https://play.google.com/store/apps/details?id=com.amatech.amatechfranchiseeapp",
};

const sharedProjects = {
  solus: {
    title: "Solus",
    domain: "novo.solus.inf.br",
    href: "https://novo.solus.inf.br/home",
    imageSrc: "/project-previews/solus-site-v2.jpg",
    kind: "site",
  },
  centroCardio: {
    title: "Centro Cardio Londrina",
    domain: "centrocardiolondrina.com.br",
    href: "https://centrocardiolondrina.com.br/",
    imageSrc: "/project-previews/centro-cardio-londrina-site-v2.jpg",
    kind: "site",
  },
  theBestAcai: {
    title: "The Best Açaí",
    domain: "thebestacai.com.br",
    href: "https://www.thebestacai.com.br/",
    imageSrc: "/project-previews/the-best-acai-site-v2.jpg",
    kind: "site",
  },
  clubeTheBest: {
    title: "Clube The Best",
    href: storeLinks.clubePlay,
    imageSrc: "/project-previews/clube-the-best-app.jpg",
    kind: "app",
  },
  theBestPortal: {
    title: "The Best Portal",
    href: storeLinks.portalPlay,
    imageSrc: "/project-previews/the-best-portal-app.jpg",
    kind: "app",
  },
} as const;

const portfolioContent: Record<Locale, PortfolioContent> = {
  pt: {
    locale: "pt",
    htmlLang: "pt-BR",
    metadata: {
      title: "Ana Carla | Desenvolvedora Full Stack",
      description:
        "Portfólio de Ana Carla, desenvolvedora full stack: front-end, mobile e back-end com React, React Native e APIs.",
    },
    skipLink: "Pular para o conteúdo principal",
    newTabLabel: "(abre em nova aba)",
    languageSwitcher: { label: "Idioma" },
    themeToggle: { label: "Alternar tema claro e escuro" },
    siteHeader: {
      navAriaLabel: "Navegação principal",
      mobileNavAriaLabel: "Navegação mobile",
      menuLabel: "Menu",
      closeLabel: "Fechar",
      openMenuAria: "Abrir menu",
      closeMenuAria: "Fechar menu",
    },
    navItems: [
      { number: "01", label: "Projetos", href: "#projetos" },
      { number: "02", label: "Sobre", href: "#sobre" },
      { number: "03", label: "Skills", href: "#skills" },
      { number: "05", label: "FAQ", href: "#faq" },
      { number: "06", label: "Contato", href: "#contato" },
    ],
    hero: {
      badge: "Ana Carla · Desenvolvedora Full Stack",
      title: "Código com olhar de",
      titleHighlight: "designer.",
      description:
        "Desenvolvo front-end, mobile e back-end em React, React Native e APIs, com o mesmo cuidado em cada tela: do layout à animação.",
      primaryCta: "Ver projetos",
      secondaryCta: "Currículo em PDF",
      resumeHref: "/ana-carla-paiva-curriculo.pdf",
      status: "Disponível para novos projetos",
      code: {
        fileName: "ana.tsx",
        objectName: "ana",
        lines: [
          { key: "cargo", value: "Full Stack" },
          { key: "front", value: ["React", "Next.js"] },
          { key: "mobile", value: "React Native" },
          { key: "back", value: ["APIs", "Integrações"] },
          { key: "design", value: ["UI", "UX", "Motion"] },
          { key: "foco", value: "acabamento" },
        ],
      },
      ticker: ["React", "Next.js", "React Native", "APIs", "UI e UX", "Design systems", "Motion", "Responsividade"],
      tickerPause: "Pausar faixa animada",
      tickerPlay: "Retomar faixa animada",
    },
    projects: {
      eyebrow: "Projetos",
      title: "Trabalhos selecionados",
      description: "Sites, produtos web e apps que desenhei e desenvolvi.",
      featured: {
        fileName: "match-protein.html",
        badge: "Destaque",
        title: "Match Protein",
        description:
          "Landing page da Match Protein, marca de sorvete proteico low carb para o público fitness. Tabela nutricional animada e explosões de sabor em câmera lenta: cada sabor muda a cena inteira.",
        pickerLabel: "Escolha um sabor",
        hint: "Clique para explodir o sabor",
        hintTouch: "Toque para explodir o sabor",
        stageAriaLabel: "Tocar a explosão de sabor",
        flavors: ["Chocolate", "Amendoim", "Morango"],
        tags: ["Landing page", "Motion", "UI"],
        cta: "Abrir landing page",
      },
      items: [
        {
          ...sharedProjects.solus,
          imageAlt: "Preview do site Solus",
          summary: "Produto web com foco em interface, usabilidade e entrega consistente.",
          tags: ["Front-end", "Web", "UI"],
        },
        {
          ...sharedProjects.centroCardio,
          imageAlt: "Preview do site Centro Cardio Londrina",
          summary: "Site institucional com navegação clara e marca profissional.",
          tags: ["Website", "Interface", "Experiência"],
        },
        {
          ...sharedProjects.theBestAcai,
          imageAlt: "Preview do site The Best Açaí",
          summary: "Site de marca com presença digital forte e navegação clara.",
          tags: ["Website", "Marca", "Conversão"],
        },
        {
          ...sharedProjects.clubeTheBest,
          domain: "app · iOS e Android",
          imageAlt: "Tela inicial do app Clube The Best na Google Play",
          summary:
            "App de fidelidade dos clientes da The Best Açaí, com mais de 500 mil downloads. Reúne cadastro e perfil, cupons promocionais, notificações de ofertas e um programa de pontos ligado ao caixa das lojas.",
          tags: ["React Native", "styled-components", "Fidelidade"],
          stores: [
            { prefix: "Baixar na", label: "App Store", href: storeLinks.clubeAppStore },
            { prefix: "Disponível no", label: "Google Play", href: storeLinks.clubePlay },
          ],
        },
        {
          ...sharedProjects.theBestPortal,
          domain: "app · franqueados",
          imageAlt: "Tela inicial do app The Best Portal na Google Play",
          summary:
            "App de gestão exclusivo para franqueados da The Best Açaí. Mostra indicadores de desempenho por loja, faz e acompanha pedidos de produtos, e reúne relatórios financeiros e vendas.",
          tags: ["React Native", "styled-components", "B2B"],
          stores: [
            { prefix: "Disponível no", label: "Google Play", href: storeLinks.portalPlay },
            {
              prefix: "iOS · enterprise",
              label: "Distribuição privada",
              title: "Distribuído internamente via Apple Developer Enterprise",
            },
          ],
        },
      ],
    },
    about: {
      eyebrow: "Sobre",
      title: "Produto de ponta a ponta",
      photoAlt: "Foto de Ana Carla",
      name: "Ana Carla Paiva",
      role: "Desenvolvedora Full Stack",
      paragraphs: [
        "Sou desenvolvedora full stack com foco em interface e produto. Construo experiências para web e mobile e também estruturo o backend que sustenta cada tela.",
        "Gosto de fechar o ciclo: da tela à API, com cuidado em usabilidade, performance e acabamento. Trabalho em produtos reais, do protótipo ao que vai pro ar.",
      ],
      focusTitle: "Onde atuo",
      focusAreas: [
        { title: "Front-end", description: "React, Next.js e interfaces de produto." },
        { title: "Backend", description: "APIs, integração e lógica de negócio." },
        { title: "Mobile", description: "Apps em React Native para uso real." },
      ],
      credentialsTitle: "Formação",
      credentials: [
        { title: "Engenharia de Software", description: "Estrutura, escalabilidade e qualidade." },
        { title: "Pós em Mobile", description: "Produto mobile, performance e usabilidade." },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Do layout ao deploy",
      items: [
        { title: "Front-end moderno", description: "React, Next.js e componentes orientados a produto." },
        { title: "React Native", description: "Apps mobile e interfaces para uso real." },
        { title: "UI e UX Design", description: "Hierarquia, interação e refinamento com intenção." },
        { title: "Design systems", description: "Componentes, tokens e consistência em escala." },
        { title: "Animação e UX", description: "Microinterações que comunicam estado sem exagero." },
        { title: "Responsividade real", description: "Layouts fluidos pensados para uso, não para breakpoints." },
      ],
    },
    process: {
      eyebrow: "Processo",
      title: "Como eu construo",
      items: [
        { title: "Entender o problema", description: "Traduzo o objetivo do produto em estrutura de interface." },
        { title: "Protótipo com intenção", description: "Layout, componentes e estados definidos antes do código." },
        { title: "Entrega com acabamento", description: "Acessibilidade, responsividade e polimento visual." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Perguntas frequentes",
      items: [
        {
          question: "Front-end, mobile ou design?",
          answer: "Os três, com foco em front-end: React, Next.js, React Native, UI e UX.",
        },
        {
          question: "Você também faz backend?",
          answer: "Sim. APIs, integrações e a lógica de negócio por trás da interface.",
        },
        {
          question: "Você desenvolve apps em React Native?",
          answer: "Sim. Apps mobile com foco em performance, clareza e manutenção.",
        },
        {
          question: "Que tipo de projeto você entrega?",
          answer: "Landing pages, sites institucionais, produtos web e apps mobile.",
        },
        {
          question: "Você atua em times e produtos existentes?",
          answer: "Sim. Evoluo interfaces, organizo componentes e elevo a qualidade do produto.",
        },
      ],
    },
    contact: {
      eyebrow: "Contato",
      fileName: "contato.exe",
      title: "Vamos construir algo",
      titleHighlight: "bom juntos",
      description: "Disponível para freelas, novos produtos e times que querem elevar o front-end.",
      cta: "Enviar email",
      form: {
        nameLabel: "Seu nome",
        namePlaceholder: "Como posso te chamar?",
        subjectLabel: "Assunto",
        subjectPlaceholder: "Freela, produto, vaga…",
        optional: "opcional",
        messageLabel: "Mensagem",
        messagePlaceholder: "Conte um pouco sobre o projeto, o prazo e o que você precisa.",
        submit: "Abrir no meu email",
        hint: "Abre seu app de email com tudo preenchido. É só enviar.",
        defaultSubject: "Contato pelo portfólio",
        greeting: "Olá, Ana Carla!",
        signature: "Enviado pelo portfólio",
        sent: "Sua mensagem está pronta no app de email.",
        fallback: "Não abriu nada?",
        gmail: "Enviar pelo Gmail",
        copy: "Copiar email",
        copied: "Email copiado",
      },
    },
    whatsapp: {
      buttonLabel: "WhatsApp",
      openAria: "Conversar com Ana Carla no WhatsApp",
      fileName: "whatsapp.exe",
      greeting: "Oi! Me conta sobre o seu projeto que eu te respondo por aqui.",
      message: "Olá, Ana Carla! Vim pelo seu portfólio e quero conversar sobre um projeto.",
      cta: "Abrir conversa",
      closeLabel: "Fechar",
    },
    footer: {
      role: "Desenvolvedora full stack, interface e produto.",
      builtWith: "Feito com Next.js e Tailwind",
      homeLabel: "Início",
    },
  },
  en: {
    locale: "en",
    htmlLang: "en",
    metadata: {
      title: "Ana Carla | Full Stack Developer",
      description:
        "Portfolio of Ana Carla, full stack developer: front-end, mobile, and back-end with React, React Native, and APIs.",
    },
    skipLink: "Skip to main content",
    newTabLabel: "(opens in a new tab)",
    languageSwitcher: { label: "Language" },
    themeToggle: { label: "Toggle light and dark theme" },
    siteHeader: {
      navAriaLabel: "Main navigation",
      mobileNavAriaLabel: "Mobile navigation",
      menuLabel: "Menu",
      closeLabel: "Close",
      openMenuAria: "Open menu",
      closeMenuAria: "Close menu",
    },
    navItems: [
      { number: "01", label: "Projects", href: "#projetos" },
      { number: "02", label: "About", href: "#sobre" },
      { number: "03", label: "Skills", href: "#skills" },
      { number: "05", label: "FAQ", href: "#faq" },
      { number: "06", label: "Contact", href: "#contato" },
    ],
    hero: {
      badge: "Ana Carla · Full Stack Developer",
      title: "Code with a",
      titleHighlight: "designer's eye.",
      description:
        "I build front-end, mobile, and back-end with React, React Native, and APIs, with the same care on every screen: from layout to animation.",
      primaryCta: "View projects",
      secondaryCta: "Resume (PDF)",
      resumeHref: "/ana-carla-paiva-resume-en.pdf",
      status: "Open to new projects",
      code: {
        fileName: "ana.tsx",
        objectName: "ana",
        lines: [
          { key: "role", value: "Full Stack" },
          { key: "front", value: ["React", "Next.js"] },
          { key: "mobile", value: "React Native" },
          { key: "back", value: ["APIs", "Integrations"] },
          { key: "design", value: ["UI", "UX", "Motion"] },
          { key: "focus", value: "polish" },
        ],
      },
      ticker: ["React", "Next.js", "React Native", "APIs", "UI & UX", "Design systems", "Motion", "Responsive design"],
      tickerPause: "Pause scrolling banner",
      tickerPlay: "Resume scrolling banner",
    },
    projects: {
      eyebrow: "Projects",
      title: "Selected work",
      description: "Websites, web products, and apps I designed and built.",
      featured: {
        fileName: "match-protein.html",
        badge: "Featured",
        title: "Match Protein",
        description:
          "Landing page for Match Protein, a low-carb protein ice cream brand for the fitness crowd. An animated nutrition label and slow-motion flavor bursts: each flavor changes the whole scene.",
        pickerLabel: "Pick a flavor",
        hint: "Click to burst the flavor",
        hintTouch: "Tap to burst the flavor",
        stageAriaLabel: "Play the flavor burst",
        flavors: ["Chocolate", "Peanut", "Strawberry"],
        tags: ["Landing page", "Motion", "UI"],
        cta: "Open landing page",
      },
      items: [
        {
          ...sharedProjects.solus,
          imageAlt: "Preview of the Solus website",
          summary: "Web product focused on interface, usability, and consistent delivery.",
          tags: ["Front-end", "Web", "UI"],
        },
        {
          ...sharedProjects.centroCardio,
          imageAlt: "Preview of the Centro Cardio Londrina website",
          summary: "Institutional site with clear navigation and a professional brand.",
          tags: ["Website", "Interface", "Experience"],
        },
        {
          ...sharedProjects.theBestAcai,
          imageAlt: "Preview of The Best Açaí website",
          summary: "Brand site with a strong digital presence and clear navigation.",
          tags: ["Website", "Brand", "Conversion"],
        },
        {
          ...sharedProjects.clubeTheBest,
          domain: "app · iOS & Android",
          imageAlt: "Home screen of the Clube The Best app on Google Play",
          summary:
            "Loyalty app for The Best Açaí customers, with over 500k downloads. It brings together sign-up and profile, promo coupons, offer notifications, and a points program linked to the stores' checkout.",
          tags: ["React Native", "styled-components", "Loyalty"],
          stores: [
            { prefix: "Download on the", label: "App Store", href: storeLinks.clubeAppStore },
            { prefix: "Get it on", label: "Google Play", href: storeLinks.clubePlay },
          ],
        },
        {
          ...sharedProjects.theBestPortal,
          domain: "app · franchisees",
          imageAlt: "Home screen of The Best Portal app on Google Play",
          summary:
            "Management app exclusive to The Best Açaí franchisees. It shows per-store performance metrics, places and tracks product orders, and gathers financial and sales reports.",
          tags: ["React Native", "styled-components", "B2B"],
          stores: [
            { prefix: "Get it on", label: "Google Play", href: storeLinks.portalPlay },
            {
              prefix: "iOS · enterprise",
              label: "Private distribution",
              title: "Distributed internally via Apple Developer Enterprise",
            },
          ],
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "Product end to end",
      photoAlt: "Photo of Ana Carla",
      name: "Ana Carla Paiva",
      role: "Full Stack Developer",
      paragraphs: [
        "I'm a full stack developer focused on interface and product. I build web and mobile experiences and also structure the backend that supports every screen.",
        "I like closing the loop: from screen to API, with care for usability, performance, and finish. I work on real products, from prototype to production.",
      ],
      focusTitle: "Where I work",
      focusAreas: [
        { title: "Front-end", description: "React, Next.js, and product interfaces." },
        { title: "Backend", description: "APIs, integration, and business logic." },
        { title: "Mobile", description: "React Native apps for real use." },
      ],
      credentialsTitle: "Education",
      credentials: [
        { title: "Software Engineering", description: "Structure, scalability, and quality." },
        { title: "Mobile postgraduate", description: "Mobile product, performance, and usability." },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "From layout to deploy",
      items: [
        { title: "Modern front-end", description: "React, Next.js, and product-driven components." },
        { title: "React Native", description: "Mobile apps and interfaces for real use." },
        { title: "UI and UX Design", description: "Hierarchy, interaction, and refinement with intent." },
        { title: "Design systems", description: "Components, tokens, and consistency at scale." },
        { title: "Motion and UX", description: "Micro-interactions that signal state without overdoing it." },
        { title: "True responsiveness", description: "Fluid layouts built for use, not for breakpoints." },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "How I build",
      items: [
        { title: "Understand the problem", description: "I turn the product goal into interface structure." },
        { title: "Intentional prototyping", description: "Layout, components, and states defined before code." },
        { title: "Polished delivery", description: "Accessibility, responsiveness, and visual polish." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      items: [
        {
          question: "Front-end, mobile, or design?",
          answer: "All three, with a focus on front-end: React, Next.js, React Native, UI and UX.",
        },
        {
          question: "Do you also work on backend?",
          answer: "Yes. APIs, integrations, and the business logic behind the interface.",
        },
        {
          question: "Do you build apps in React Native?",
          answer: "Yes. Mobile apps focused on performance, clarity, and maintainability.",
        },
        {
          question: "What kind of projects do you deliver?",
          answer: "Landing pages, institutional sites, web products, and mobile apps.",
        },
        {
          question: "Can you join existing teams and products?",
          answer: "Yes. I evolve interfaces, organize components, and raise product quality.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      fileName: "contact.exe",
      title: "Let's build something",
      titleHighlight: "great together",
      description: "Available for freelance work, new products, and teams that want to raise their front-end.",
      cta: "Send email",
      form: {
        nameLabel: "Your name",
        namePlaceholder: "What should I call you?",
        subjectLabel: "Subject",
        subjectPlaceholder: "Freelance, product, role…",
        optional: "optional",
        messageLabel: "Message",
        messagePlaceholder: "Tell me a bit about the project, the timeline, and what you need.",
        submit: "Open in my email",
        hint: "Opens your email app with everything filled in. Just hit send.",
        defaultSubject: "Contact from portfolio",
        greeting: "Hi Ana Carla,",
        signature: "Sent from the portfolio",
        sent: "Your message is ready in your email app.",
        fallback: "Nothing opened?",
        gmail: "Send with Gmail",
        copy: "Copy email",
        copied: "Email copied",
      },
    },
    whatsapp: {
      buttonLabel: "WhatsApp",
      openAria: "Chat with Ana Carla on WhatsApp",
      fileName: "whatsapp.exe",
      greeting: "Hi! Tell me about your project and I'll get back to you here.",
      message: "Hi Ana Carla! I found your portfolio and would like to talk about a project.",
      cta: "Start chat",
      closeLabel: "Close",
    },
    footer: {
      role: "Full stack developer, interface, and product.",
      builtWith: "Built with Next.js and Tailwind",
      homeLabel: "Home",
    },
  },
  es: {
    locale: "es",
    htmlLang: "es",
    metadata: {
      title: "Ana Carla | Desarrolladora Full Stack",
      description:
        "Portafolio de Ana Carla, desarrolladora full stack: front-end, mobile y back-end con React, React Native y APIs.",
    },
    skipLink: "Saltar al contenido principal",
    newTabLabel: "(abre en una pestaña nueva)",
    languageSwitcher: { label: "Idioma" },
    themeToggle: { label: "Cambiar tema claro y oscuro" },
    siteHeader: {
      navAriaLabel: "Navegación principal",
      mobileNavAriaLabel: "Navegación mobile",
      menuLabel: "Menú",
      closeLabel: "Cerrar",
      openMenuAria: "Abrir menú",
      closeMenuAria: "Cerrar menú",
    },
    navItems: [
      { number: "01", label: "Proyectos", href: "#projetos" },
      { number: "02", label: "Sobre mí", href: "#sobre" },
      { number: "03", label: "Skills", href: "#skills" },
      { number: "05", label: "FAQ", href: "#faq" },
      { number: "06", label: "Contacto", href: "#contato" },
    ],
    hero: {
      badge: "Ana Carla · Desarrolladora Full Stack",
      title: "Código con mirada de",
      titleHighlight: "diseñadora.",
      description:
        "Desarrollo front-end, mobile y back-end con React, React Native y APIs, con el mismo cuidado en cada pantalla: del layout a la animación.",
      primaryCta: "Ver proyectos",
      secondaryCta: "CV en PDF",
      resumeHref: "/ana-carla-paiva-resume-en.pdf",
      status: "Disponible para nuevos proyectos",
      code: {
        fileName: "ana.tsx",
        objectName: "ana",
        lines: [
          { key: "cargo", value: "Full Stack" },
          { key: "front", value: ["React", "Next.js"] },
          { key: "mobile", value: "React Native" },
          { key: "back", value: ["APIs", "Integraciones"] },
          { key: "diseno", value: ["UI", "UX", "Motion"] },
          { key: "foco", value: "acabado" },
        ],
      },
      ticker: ["React", "Next.js", "React Native", "APIs", "UI y UX", "Design systems", "Motion", "Responsive"],
      tickerPause: "Pausar banda animada",
      tickerPlay: "Reanudar banda animada",
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Trabajos seleccionados",
      description: "Sitios, productos web y apps que diseñé y desarrollé.",
      featured: {
        fileName: "match-protein.html",
        badge: "Destacado",
        title: "Match Protein",
        description:
          "Landing page de Match Protein, marca de helado proteico low carb para el público fitness. Tabla nutricional animada y explosiones de sabor en cámara lenta: cada sabor cambia toda la escena.",
        pickerLabel: "Elige un sabor",
        hint: "Haz clic para explotar el sabor",
        hintTouch: "Toca para explotar el sabor",
        stageAriaLabel: "Reproducir la explosión de sabor",
        flavors: ["Chocolate", "Maní", "Fresa"],
        tags: ["Landing page", "Motion", "UI"],
        cta: "Abrir landing page",
      },
      items: [
        {
          ...sharedProjects.solus,
          imageAlt: "Preview del sitio Solus",
          summary: "Producto web con foco en interfaz, usabilidad y entrega consistente.",
          tags: ["Front-end", "Web", "UI"],
        },
        {
          ...sharedProjects.centroCardio,
          imageAlt: "Preview del sitio Centro Cardio Londrina",
          summary: "Sitio institucional con navegación clara y marca profesional.",
          tags: ["Website", "Interfaz", "Experiencia"],
        },
        {
          ...sharedProjects.theBestAcai,
          imageAlt: "Preview del sitio The Best Açaí",
          summary: "Sitio de marca con presencia digital fuerte y navegación clara.",
          tags: ["Website", "Marca", "Conversión"],
        },
        {
          ...sharedProjects.clubeTheBest,
          domain: "app · iOS y Android",
          imageAlt: "Pantalla de inicio de la app Clube The Best en Google Play",
          summary:
            "App de fidelización de los clientes de The Best Açaí, con más de 500 mil descargas. Reúne registro y perfil, cupones promocionales, notificaciones de ofertas y un programa de puntos conectado a la caja de las tiendas.",
          tags: ["React Native", "styled-components", "Fidelización"],
          stores: [
            { prefix: "Descargar en", label: "App Store", href: storeLinks.clubeAppStore },
            { prefix: "Disponible en", label: "Google Play", href: storeLinks.clubePlay },
          ],
        },
        {
          ...sharedProjects.theBestPortal,
          domain: "app · franquiciados",
          imageAlt: "Pantalla de inicio de la app The Best Portal en Google Play",
          summary:
            "App de gestión exclusiva para franquiciados de The Best Açaí. Muestra indicadores de desempeño por tienda, hace y sigue pedidos de productos, y reúne informes financieros y de ventas.",
          tags: ["React Native", "styled-components", "B2B"],
          stores: [
            { prefix: "Disponible en", label: "Google Play", href: storeLinks.portalPlay },
            {
              prefix: "iOS · enterprise",
              label: "Distribución privada",
              title: "Distribuido internamente vía Apple Developer Enterprise",
            },
          ],
        },
      ],
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Producto de punta a punta",
      photoAlt: "Foto de Ana Carla",
      name: "Ana Carla Paiva",
      role: "Desarrolladora Full Stack",
      paragraphs: [
        "Soy desarrolladora full stack con foco en interfaz y producto. Construyo experiencias para web y mobile y también estructuro el backend que sostiene cada pantalla.",
        "Me gusta cerrar el ciclo: de la pantalla a la API, con cuidado en usabilidad, performance y acabado. Trabajo en productos reales, del prototipo a producción.",
      ],
      focusTitle: "Dónde actúo",
      focusAreas: [
        { title: "Front-end", description: "React, Next.js e interfaces de producto." },
        { title: "Backend", description: "APIs, integración y lógica de negocio." },
        { title: "Mobile", description: "Apps en React Native para uso real." },
      ],
      credentialsTitle: "Formación",
      credentials: [
        { title: "Ingeniería de Software", description: "Estructura, escalabilidad y calidad." },
        { title: "Posgrado en Mobile", description: "Producto mobile, performance y usabilidad." },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Del layout al deploy",
      items: [
        { title: "Front-end moderno", description: "React, Next.js y componentes orientados a producto." },
        { title: "React Native", description: "Apps mobile e interfaces para uso real." },
        { title: "UI y UX Design", description: "Jerarquía, interacción y refinamiento con intención." },
        { title: "Design systems", description: "Componentes, tokens y consistencia a escala." },
        { title: "Animación y UX", description: "Microinteracciones que comunican estado sin exagerar." },
        { title: "Responsive real", description: "Layouts fluidos pensados para uso, no para breakpoints." },
      ],
    },
    process: {
      eyebrow: "Proceso",
      title: "Cómo construyo",
      items: [
        { title: "Entender el problema", description: "Traduzco el objetivo del producto en estructura de interfaz." },
        { title: "Prototipo con intención", description: "Layout, componentes y estados definidos antes del código." },
        { title: "Entrega con acabado", description: "Accesibilidad, responsividad y pulido visual." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Preguntas frecuentes",
      items: [
        {
          question: "¿Front-end, mobile o diseño?",
          answer: "Los tres, con foco en front-end: React, Next.js, React Native, UI y UX.",
        },
        {
          question: "¿También haces backend?",
          answer: "Sí. APIs, integraciones y la lógica de negocio detrás de la interfaz.",
        },
        {
          question: "¿Desarrollas apps en React Native?",
          answer: "Sí. Apps mobile con foco en performance, claridad y mantenimiento.",
        },
        {
          question: "¿Qué tipo de proyectos entregas?",
          answer: "Landing pages, sitios institucionales, productos web y apps mobile.",
        },
        {
          question: "¿Trabajas en equipos y productos existentes?",
          answer: "Sí. Evoluciono interfaces, organizo componentes y elevo la calidad del producto.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      fileName: "contacto.exe",
      title: "Construyamos algo",
      titleHighlight: "bueno juntos",
      description: "Disponible para freelance, nuevos productos y equipos que quieren elevar su front-end.",
      cta: "Enviar email",
      form: {
        nameLabel: "Tu nombre",
        namePlaceholder: "¿Cómo te llamo?",
        subjectLabel: "Asunto",
        subjectPlaceholder: "Freelance, producto, vacante…",
        optional: "opcional",
        messageLabel: "Mensaje",
        messagePlaceholder: "Cuéntame un poco sobre el proyecto, el plazo y lo que necesitas.",
        submit: "Abrir en mi email",
        hint: "Abre tu app de email con todo completado. Solo tienes que enviar.",
        defaultSubject: "Contacto desde el portafolio",
        greeting: "¡Hola, Ana Carla!",
        signature: "Enviado desde el portafolio",
        sent: "Tu mensaje está listo en tu app de email.",
        fallback: "¿No se abrió nada?",
        gmail: "Enviar con Gmail",
        copy: "Copiar email",
        copied: "Email copiado",
      },
    },
    whatsapp: {
      buttonLabel: "WhatsApp",
      openAria: "Hablar con Ana Carla por WhatsApp",
      fileName: "whatsapp.exe",
      greeting: "¡Hola! Cuéntame sobre tu proyecto y te respondo por aquí.",
      message: "¡Hola, Ana Carla! Vi tu portafolio y quiero hablar sobre un proyecto.",
      cta: "Abrir chat",
      closeLabel: "Cerrar",
    },
    footer: {
      role: "Desarrolladora full stack, interfaz y producto.",
      builtWith: "Hecho con Next.js y Tailwind",
      homeLabel: "Inicio",
    },
  },
};

export function getPortfolioContent(locale: Locale): PortfolioContent {
  return portfolioContent[locale];
}
