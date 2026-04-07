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
    title: "Solus",
    summary:
      "Participacao em produto web com foco em estrutura de interface, usabilidade e entrega consistente para operacao real.",
    stack: ["Front-end", "Web", "UI"],
    href: "https://novo.solus.inf.br/home",
  },
  {
    title: "Centro Cardio Londrina",
    summary:
      "Projeto institucional com foco em experiencia clara, navegacao objetiva e apresentacao profissional da marca.",
    stack: ["Website", "Interface", "Experiencia"],
    href: "https://centrocardiolondrina.com.br/",
  },
  {
    title: "Clube The Best",
    summary:
      "Aplicativo mobile desenvolvido em React Native com styled-components, voltado para experiencia fluida, recorrencia e relacionamento com o usuario.",
    stack: ["React Native", "styled-components", "Mobile"],
    href: "#contato",
  },
  {
    title: "The Best Portal",
    summary:
      "App de trabalho com foco em jornada mobile, organizacao de fluxos e interface consistente em React Native com styled-components.",
    stack: ["React Native", "styled-components", "App"],
    href: "#contato",
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
