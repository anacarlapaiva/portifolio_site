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

export const navItems: NavItem[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export const highlights = [
  "Front-end com repertorio forte em interface, produto e consistencia visual.",
  "React Native para experiencias mobile mais fluidas, claras e escalaveis.",
  "UX e UI como parte do desenvolvimento, nao como etapa separada.",
];

export const stats = [
  { value: "Front-end", label: "especialidade principal com foco em interface e produto" },
  { value: "Mobile", label: "pos-graduada em desenvolvimento mobile e vivencia com React Native" },
  { value: "UI + UX", label: "olhar de design aplicado ao codigo, da estrutura ao detalhe" },
];

export const skills: SkillItem[] = [
  {
    name: "Front-end moderno",
    description: "React, Next.js e componentizacao orientada a produto, performance e manutencao.",
    icon: Code2,
  },
  {
    name: "React Native",
    description: "Experiencia com apps mobile e interfaces pensadas para uso real em diferentes dispositivos.",
    icon: MonitorSmartphone,
  },
  {
    name: "UI e UX Design",
    description: "Hierarquia visual, jornada, interacao e refinamento de interface com intencao.",
    icon: PencilRuler,
  },
  {
    name: "Design systems",
    description: "Componentes reutilizaveis, tokens, consistencia visual e escala para times e produtos.",
    icon: Layers3,
  },
  {
    name: "Animacao e UX",
    description: "Microinteracoes com motion para comunicar estado sem exagero.",
    icon: Sparkles,
  },
  {
    name: "Back-end de apoio",
    description: "Base em Node, Nest e APIs para integrar fluxos e conversar melhor com o produto inteiro.",
    icon: Database,
  },
  {
    name: "Responsividade real",
    description: "Layouts fluidos pensados primeiro para uso, nao so para breakpoints.",
    icon: Smartphone,
  },
  {
    name: "Descoberta e refinamento",
    description: "Prototipacao, handoff, investigacao e refinamento com times de produto e design.",
    icon: SwatchBook,
  },
];

export const credentials: CredentialItem[] = [
  {
    title: "Engenharia de Software",
    description: "Base tecnica solida para pensar estrutura, escalabilidade e qualidade de entrega.",
    icon: BadgeCheck,
  },
  {
    title: "Pos em Desenvolvimento Mobile",
    description: "Especializacao que fortaleceu a visao de produto mobile, performance e usabilidade.",
    icon: Smartphone,
  },
  {
    title: "Perfil hibrido",
    description: "Front-end, interface e UX trabalhando juntos desde o conceito ate a implementacao.",
    icon: Sparkles,
  },
];

export const process: ProcessItem[] = [
  {
    title: "Entendimento do problema",
    description: "Traduzo contexto de negocio e objetivo do produto em estrutura de interface.",
    icon: ScanSearch,
  },
  {
    title: "Prototipo com intencao",
    description: "Penso layout, componentes, estados e fluxo antes de acelerar a implementacao.",
    icon: Workflow,
  },
  {
    title: "Entrega com acabamento",
    description: "Levo o detalhe a serio: acessibilidade, responsividade, consistencia e polish visual.",
    icon: Rocket,
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Produtos com interface forte",
    summary:
      "Landing pages, paineis e jornadas que equilibram clareza visual, performance e identidade.",
    stack: ["React", "Next.js", "UX"],
    href: "#contato",
  },
  {
    title: "Mobile com foco em experiencia",
    summary:
      "Interfaces mobile-first e experiencias em React Native pensadas para toque, contexto e fluidez.",
    stack: ["React Native", "Mobile UX", "Design"],
    href: "#contato",
  },
  {
    title: "Times que precisam elevar o front",
    summary:
      "Apoio em arquitetura, componentizacao, refinamento de interface e evolucao de produtos digitais.",
    stack: ["UI Systems", "Front-end", "Acessibilidade"],
    href: "#contato",
  },
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: "anacarla.dev@portfolio.com",
    href: "mailto:anacarla.dev@portfolio.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/anacarla",
    href: "https://linkedin.com/in/anacarla",
    icon: BriefcaseBusiness,
  },
  {
    label: "GitHub",
    value: "github.com/anacarla",
    href: "https://github.com/anacarla",
    icon: Globe,
  },
];
