import { TECHS } from "./tech";
import type { Tech } from "./tech";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  repo: string;
  demo?: string;
  techs: Tech[];
}

export const projects: Project[] = [
  {
    id: "controle-financeiro",
    title: "Controle financeiro",
    description: "Este projeto consiste em um sistema web de controle financeiro desenvolvido com Python e Django, com foco na modelagem, persistência, manipulação e análise de dados. Além das operações de CRUD, o sistema possui uma camada analítica, onde os dados financeiros são processados com Pandas e visualizados por meio de gráficos interativos com Plotly.",
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
    description: "Aplicação web simples em Django para gerenciar uma biblioteca pessoal: cadastrar livros, marcar como \"Quero ler\", \"Comprado\" ou \"Lido\", e buscar livros por APIs (ex.: Google Books). Ideal para quem quer um catálogo pessoal de leitura com uma interface web leve.",
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
  {
    id: "petshop",
    title: "Aurora Petshop",
    description: "Sistema de gerenciamento para petshop.Sistema de gerenciamento para petshop.Sistema de gerenciamento para petshop.Sistema de gerenciamento para petshop.Sistema de gerenciamento para petshop.Sistema de gerenciamento para petshop.",
    image: "/assets/images/projetos/petshop.png",
    repo: "https://github.com/ErickRibeiroG/pet-shop",
    techs: [
      TECHS.python,
      TECHS.fastapi,
      TECHS.react,
      TECHS.tailwind,
      TECHS.typescript,
      TECHS.sqlite,
    ],
  },
];
