import { TECHS } from "./tech";
import type { Tech } from "./tech";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  repo: string;
  techs: Tech[];
}

export const projects: Project[] = [
  {
    id: "controle-financeiro",
    title: "Controle financeiro",
    description: "Projeto de análise de dados",
    image: "/assets/images/projetos/home-controleFinanceiro.png",
    repo: "https://github.com/Erick22Ribeiro/Controle-financas",
    techs: [
      TECHS.python,
      TECHS.django,
      TECHS.pandas,
      TECHS.plotly,
      TECHS.html,
      TECHS.css,
    ],
  },
  {
    id: "biblioteca-online",
    title: "Biblioteca online",
    description: "Sistema de biblioteca usando API do google books",
    image: "/assets/images/projetos/livraria-editado.jpeg",
    repo: "https://github.com/Erick22Ribeiro/My-Library",
    techs: [
      TECHS.python,
      TECHS.django,
      TECHS.html,
      TECHS.css,
      TECHS.javascript,
    ],
  },
];
