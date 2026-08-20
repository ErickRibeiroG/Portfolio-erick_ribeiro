import type { TechGroupKey } from "../i18n/translations";

const DEVICON_BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

/** Monta a URL de um ícone do devicon a partir do caminho relativo. */
export function devicon(path: string): string {
  return `${DEVICON_BASE}/${path}`;
}

export interface Tech {
  name: string;
  /** Caminho do ícone dentro do devicon, ex.: "python/python-original.svg". */
  icon: string;
}

export interface TechGroup {
  /** Chave usada para buscar título/subtítulo em `hab.grid`. */
  key: TechGroupKey;
  techs: Tech[];
}

export const TECHS = {
  python: { name: "Python", icon: "python/python-original.svg" },
  java: { name: "Java", icon: "java/java-original.svg" },
  javascript: { name: "JavaScript", icon: "javascript/javascript-original.svg" },
  typescript: { name: "TypeScript", icon: "typescript/typescript-original.svg" },
  react: { name: "React", icon: "react/react-original.svg" },
  tailwind: { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original.svg" },
  fastapi: { name: "FastAPI", icon: "fastapi/fastapi-original.svg" },
  django: { name: "Django", icon: "django/django-plain.svg" },
  node: { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
  pandas: { name: "Pandas", icon: "pandas/pandas-original.svg" },
  plotly: { name: "Plotly", icon: "plotly/plotly-original.svg" },
  mongodb: { name: "MongoDB", icon: "mongodb/mongodb-original.svg" },
  sqlite: { name: "SQLite", icon: "sqlite/sqlite-original.svg" },
  git: { name: "Git", icon: "git/git-original.svg" },
  docker: { name: "Docker", icon: "docker/docker-original.svg" },
  html: { name: "HTML", icon: "html5/html5-original.svg" },
  css: { name: "CSS", icon: "css3/css3-original.svg" },
} as const satisfies Record<string, Tech>;

export const techGroups: TechGroup[] = [
  {
    key: "linguagens",
    techs: [TECHS.python, TECHS.java, TECHS.javascript, TECHS.typescript],
  },
  {
    key: "frontend",
    techs: [TECHS.react, TECHS.tailwind],
  },
  {
    key: "backend",
    techs: [TECHS.fastapi, TECHS.django, TECHS.node],
  },
  {
    key: "dados",
    techs: [TECHS.pandas, TECHS.plotly],
  },
  {
    key: "bancos",
    techs: [TECHS.mongodb, TECHS.sqlite],
  },
  {
    key: "ferramentas",
    techs: [TECHS.git, TECHS.docker],
  },
];
