import type { Translation } from "../i18n/translations";

export const EMAIL = "erick2ribeirogg@gmail.com";

export const CV_PATH = "/assets/pdf/Currículo Erick R. Graciano.pdf";

export const SOCIALS = {
  instagram: "https://www.instagram.com/erickk_ribeiro/",
  linkedin: "https://www.linkedin.com/in/erick-ribeiro-907a8432b/",
  github: "https://github.com/Erick22Ribeiro",
  whatsapp:
    "https://wa.me/5521967245649?text=Olá,%20vim%20pelo%20seu%20portfólio!",
} as const;

export interface SocialLink {
  href: string;
  /** Classe do ícone do bootstrap-icons. */
  icon: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  { href: SOCIALS.instagram, icon: "bi-instagram", label: "Instagram" },
  { href: SOCIALS.linkedin, icon: "bi-linkedin", label: "LinkedIn" },
  { href: SOCIALS.github, icon: "bi-github", label: "GitHub" },
];

export interface NavItem {
  href: string;
  key: keyof Translation["menu"];
}

export const navItems: NavItem[] = [
  { href: "#topo", key: "inicio" },
  { href: "#habilidades", key: "habilidades" },
  { href: "#sobre", key: "sobre" },
  { href: "#projetos", key: "projetos" },
  { href: "#contato", key: "contato" },
];

export const EMAILJS = {
  serviceId: "service_wfwmq6f",
  templateId: "template_w8ndf9c",
  publicKey: "C2mteBxgtG88Exq4E",
} as const;
