import { TECHS } from "./tech";
import type { Tech } from "./tech";

export type ProjectType = "web" | "backend" | "data-analysis";

export interface Project {
  id: string;
  title: string;
  description: string;
  type: ProjectType[];
  image: string;
  repo: string;
  demo?: string;
  desenvolvimento: boolean;
  techs: Tech[];
}

export const projects: Project[] = [
  {
    id: "controle-financeiro",
    title: "Controle financeiro",
    description: "Este projeto consiste em um sistema web de controle financeiro desenvolvido com Python e Django, com foco na modelagem, persistência, manipulação e análise de dados. Além das operações de CRUD, o sistema possui uma camada analítica, onde os dados financeiros são processados com Pandas e visualizados por meio de gráficos interativos com Plotly.",
    type: [
      "web",
      "backend",
      "data-analysis"
    ],
    image: "/assets/images/projetos/home-controleFinanceiro.png",
    repo: "https://github.com/Erick22Ribeiro/Controle-financas",
    desenvolvimento: false,
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
    type: [
      "web",
      "backend"
    ],
    image: "/assets/images/projetos/livraria-editado.jpeg",
    repo: "https://github.com/Erick22Ribeiro/My-Library",
    desenvolvimento: false,
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
    description: "Sistema de gerenciamento para petshop que permite gerenciamento de animais e clientes, e agendamento de serviços.",
    type: [
      "web",
      "backend"
    ],
    image: "/assets/images/projetos/petshop.png",
    repo: "https://github.com/ErickRibeiroG/pet-shop",
    desenvolvimento: true,
    techs: [
      TECHS.python,
      TECHS.fastapi,
      TECHS.react,
      TECHS.tailwind,
      TECHS.typescript,
      TECHS.sqlite,
    ],
  },
  {
    id: "strava",
    title: "API Strava",
    description: "Sistema que consome API do strava para visualização e tratamento de dados de atividades físicas.",
    type: [
      "web",
      "backend",
      "data-analysis"
    ],
    image: "/assets/images/projetos/strava.png",
    repo: "https://github.com/ErickRibeiroG/pet-shop",
    desenvolvimento: true,
    techs: [
      TECHS.python,
      TECHS.fastapi,
      TECHS.react,
      TECHS.tailwind,
      TECHS.typescript,
      TECHS.postgresql,
      TECHS.docker,
    ],
  },
  {
    id: "agua",
    title: "Análise consumo de água no Brasil",
    description: "Sistema que apresenta análises e gráficos interativos sobre o consumo de água no Brasil, com integração a três APIs do IBGE para enriquecer as análises e gerar insights a partir dos dados disponíveis.",
    type: [
      "data-analysis"
    ],
    image: "/assets/images/projetos/consumo-agua.png",
    repo: "https://github.com/ErickRibeiroG/pet-shop",
    demo: "https://consumo-agua-br-m2okw6bzzwja2rztjwjzfe.streamlit.app/",
    desenvolvimento: false,
    techs: [
      TECHS.python,
      TECHS.pandas,
      TECHS.streamlit,
      TECHS.matplotlib,
      TECHS.plotly,
    ],
  },
];
