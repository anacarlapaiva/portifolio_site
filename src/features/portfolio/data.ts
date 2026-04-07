import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Database,
  Globe,
  Layers3,
  Mail,
  MonitorSmartphone,
  PencilRuler,
  Rocket,
  ScanSearch,
  SwatchBook,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type SkillItem = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export type ProjectItem = {
  title: string;
  summary: string;
  stack: string[];
  href: string;
  imageSrc: string;
  imageAlt: string;
  category: "website" | "app";
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
};

export type CredentialItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProcessItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const navItems: NavItem[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projetos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export const highlights = [
  "Front-end com repertório forte em interface, produto e consistência visual.",
  "React Native para experiências mobile mais fluidas, claras e escaláveis.",
  "UX e UI como parte do desenvolvimento, não como etapa separada.",
];

export const stats = [
  { value: "Front-end", label: "especialidade principal com foco em interface e produto" },
  { value: "Mobile", label: "pós-graduada em desenvolvimento mobile e vivência com React Native" },
  { value: "UI + UX", label: "olhar de design aplicado ao código, da estrutura ao detalhe" },
];

export const skills: SkillItem[] = [
  {
    name: "Front-end moderno",
    description: "React, Next.js e componentização orientada a produto, performance e manutenção.",
    icon: Code2,
  },
  {
    name: "React Native",
    description: "Experiência com apps mobile e interfaces pensadas para uso real em diferentes dispositivos.",
    icon: MonitorSmartphone,
  },
  {
    name: "UI e UX Design",
    description: "Hierarquia visual, jornada, interação e refinamento de interface com intenção.",
    icon: PencilRuler,
  },
  {
    name: "Design systems",
    description: "Componentes reutilizáveis, tokens, consistência visual e escala para times e produtos.",
    icon: Layers3,
  },
  {
    name: "Animação e UX",
    description: "Microinterações com motion para comunicar estado sem exagero.",
    icon: Sparkles,
  },
  {
    name: "Back-end de apoio",
    description: "Base em Node, Nest e APIs para integrar fluxos e conversar melhor com o produto inteiro.",
    icon: Database,
  },
  {
    name: "Responsividade real",
    description: "Layouts fluidos pensados primeiro para uso, não só para breakpoints.",
    icon: Smartphone,
  },
  {
    name: "Descoberta e refinamento",
    description: "Prototipação, handoff, investigação e refinamento com times de produto e design.",
    icon: SwatchBook,
  },
];

export const credentials: CredentialItem[] = [
  {
    title: "Engenharia de Software",
    description: "Base técnica sólida para pensar estrutura, escalabilidade e qualidade de entrega.",
    icon: BadgeCheck,
  },
  {
    title: "Pos em Desenvolvimento Mobile",
    description: "Especialização que fortaleceu a visão de produto mobile, performance e usabilidade.",
    icon: Smartphone,
  },
  {
    title: "Perfil híbrido",
    description: "Front-end, interface e UX trabalhando juntos desde o conceito até a implementação.",
    icon: Sparkles,
  },
];

export const process: ProcessItem[] = [
  {
    title: "Entendimento do problema",
    description: "Traduzo contexto de negócio e objetivo do produto em estrutura de interface.",
    icon: ScanSearch,
  },
  {
    title: "Protótipo com intenção",
    description: "Penso layout, componentes, estados e fluxo antes de acelerar a implementação.",
    icon: Workflow,
  },
  {
    title: "Entrega com acabamento",
    description: "Levo o detalhe a sério: acessibilidade, responsividade, consistência e polish visual.",
    icon: Rocket,
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Solus",
    summary:
      "Participação em produto web com foco em estrutura de interface, usabilidade e entrega consistente para operação real.",
    stack: ["Front-end", "Web", "UI"],
    href: "https://novo.solus.inf.br/home",
    imageSrc: "/project-previews/solus-site-v2.png",
    imageAlt: "Preview do site Solus",
    category: "website",
  },
  {
    title: "Centro Cardio Londrina",
    summary:
      "Projeto institucional com foco em experiência clara, navegação objetiva e apresentação profissional da marca.",
    stack: ["Website", "Interface", "Experiência"],
    href: "https://centrocardiolondrina.com.br/",
    imageSrc: "/project-previews/centro-cardio-londrina-site-v2.png",
    imageAlt: "Preview do site Centro Cardio Londrina",
    category: "website",
  },
  {
    title: "The Best Açaí",
    summary:
      "Site com foco em presença digital, clareza de navegação e apresentação forte da marca para o público final.",
    stack: ["Website", "Marca", "Conversão"],
    href: "https://www.thebestacai.com.br/",
    imageSrc: "/project-previews/the-best-acai-site-v2.png",
    imageAlt: "Preview do site The Best Açaí",
    category: "website",
  },
  {
    title: "Clube The Best",
    summary:
      "Aplicativo mobile desenvolvido em React Native com styled-components, voltado para experiência fluida, recorrência e relacionamento com o usuário.",
    stack: ["React Native", "styled-components", "Mobile"],
    href: "#contato",
    imageSrc: "/project-previews/mobile-app-vector.svg",
    imageAlt: "Ilustração de aplicativo mobile para Clube The Best",
    category: "app",
  },
  {
    title: "The Best Portal",
    summary:
      "App de trabalho com foco em jornada mobile, organização de fluxos e interface consistente em React Native com styled-components.",
    stack: ["React Native", "styled-components", "App"],
    href: "#contato",
    imageSrc: "/project-previews/mobile-app-vector.svg",
    imageAlt: "Ilustração de aplicativo mobile para The Best Portal",
    category: "app",
  },
];

export const faqItems: FaqItem[] = [
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
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: "acfpaiva99@gmail.com",
    href: "mailto:acfpaiva99@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/anacarlapaiva",
    href: "https://www.linkedin.com/in/anacarlapaiva",
    icon: BriefcaseBusiness,
  },
  {
    label: "GitHub",
    value: "github.com/anacarlapaiva",
    href: "https://github.com/anacarlapaiva",
    icon: Globe,
  },
];
