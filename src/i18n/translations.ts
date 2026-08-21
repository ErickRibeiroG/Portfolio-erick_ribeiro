export type Language = "pt" | "en";

const pt = {
  menu: {
    inicio: "Início",
    habilidades: "Habilidades",
    sobre: "Sobre",
    projetos: "Projetos",
    contato: "Contato",
  },
  topo: {
    ola: "Olá, meu nome é Erick Ribeiro",
    estatico: "Eu sou",
    animado: ["estudante de sistemas de informação", "desenvolvedor backend"],
    texto:
      "Estudo tecnologia há dois anos e atuo como desenvolvedor com foco em backend e análise de dados. Desenvolvo projetos utilizando Python, Django e bibliotecas voltadas à análise de dados, como Pandas e Plotly.",
    btnCv: "Baixar CV",
    btnCtt: "Entre em contato",
  },
  hab: {
    kicker: "O que eu uso",
    titulo: "Minhas Habilidades",
    grid: {
      linguagens: {
        titulo: "Linguagens",
        subtitulo: "Programação com propósito",
      },
      frontend: {
        titulo: "Front-end",
        subtitulo: "Construindo interfaces intuitivas",
      },
      backend: {
        titulo: "Back-end",
        subtitulo: "Construindo serviços escaláveis e de alto desempenho",
      },
      dados: {
        titulo: "Dados e análise",
        subtitulo: "Transformando dados em insights",
      },
      bancos: {
        titulo: "Bancos de dados",
        subtitulo: "Estruturando dados confiáveis",
      },
      ferramentas: {
        titulo: "Ferramentas",
        subtitulo: "Construindo, entregando e mantendo",
      },
    },
  },
  sobre: {
    kicker: "Quem sou eu",
    titulo: "Sobre mim",
    idiomas: "Idiomas",
    pt: "Português",
    in: "Inglês",
    nativo: "Nativo",
    pro: "Proficiente",
    p1: "Meu nome é Erick Ribeiro, tenho 20 anos e sou do Rio de Janeiro. Sou estudante de <strong>Sistemas de Informação</strong> pelo Unilasalle-RJ e desenvolvedor com foco em <strong>backend e análise de dados</strong>.",
    p2: "Tenho experiência no desenvolvimento de projetos <strong>web, backend, análise de dados, automação e machine learning</strong>. Atualmente, concentro meus projetos em <strong>backend e análise de dados</strong>, aprofundando meus conhecimentos em <strong>Python</strong> e em bibliotecas como <strong>Django, Pandas e plotly</strong>.",
    p3: "Atualmente, estou em busca do meu primeiro estágio na área de tecnologia, com o objetivo de aplicar meus conhecimentos e aprender com desafios reais do mercado.",
  },
  proj: {
    kicker: "Portfólio",
    titulo: "Meus projetos",
    code: "Code",
  },
  cntt: {
    kicker: "Vamos conversar",
    titulo: "Fale comigo",
    h3form: "Formulário de contato.",
    nome: "Seu nome:",
    email: "Seu e-mail:",
    msg: "Sua mensagem:",
    enviar: "Enviar",
    mensEnv: "Mensagem enviada!",
    obg: "Obrigado pelo contato",
    p1: "Fique à vontade para entrar em contato comigo",
    p2: "através das minhas redes sociais",
    p3: "ou e-mail",
    outros: "Outros.",
    erroEnvio: "Erro ao enviar mensagem.",
  },
  aria: {
    trocarIdioma: "Trocar idioma",
    abrirMenu: "Abrir menu",
    fecharMenu: "Fechar menu",
    tecnologias: "Tecnologias e ferramentas",
    voltarTopo: "Voltar ao topo",
  },
} as const;

/** Troca os literais de `as const` por `string` e remove os `readonly`. */
type Translated<T> = T extends readonly string[]
  ? readonly string[]
  : T extends string
    ? string
    : { -readonly [K in keyof T]: Translated<T[K]> };

/** Formato de um dicionário de tradução — derivado do português. */
export type Translation = Translated<typeof pt>;

const en: Translation = {
  menu: {
    inicio: "Home",
    habilidades: "Skills",
    sobre: "About",
    projetos: "Projects",
    contato: "Contact",
  },
  topo: {
    ola: "Hi, my name is Erick Ribeiro",
    estatico: "I am",
    animado: ["information systems student", "backend developer"],
    texto:
      "I've been studying technology for two years and work as a developer focused on backend and data analysis. I build projects using Python, Django and data libraries like Pandas and Plotly.",
    btnCv: "Download CV",
    btnCtt: "Get in touch",
  },
  hab: {
    kicker: "What I use",
    titulo: "My Skills",
    grid: {
      linguagens: {
        titulo: "Languages",
        subtitulo: "Programming with purpose",
      },
      frontend: {
        titulo: "Front-end",
        subtitulo: "Building intuitive user interfaces",
      },
      backend: {
        titulo: "Back-end",
        subtitulo: "Building scalable, high-performance services",
      },
      dados: {
        titulo: "Data & analytics",
        subtitulo: "Turning data into insights",
      },
      bancos: {
        titulo: "Databases",
        subtitulo: "Structuring reliable data",
      },
      ferramentas: {
        titulo: "Tools",
        subtitulo: "Building, shipping and maintaining",
      },
    },
  },
  sobre: {
    kicker: "Who I am",
    titulo: "About me",
    idiomas: "Languages",
    pt: "Portuguese",
    in: "English",
    nativo: "Native",
    pro: "Proficient",
    p1: "My name is Erick Ribeiro, I'm 20 years old and I'm from Rio de Janeiro. I study <strong>Information Systems</strong> at Unilasalle-RJ and I'm a developer focused on <strong>backend and data analysis</strong>.",
    p2: "I have experience in developing <strong>web projects</strong>, including <strong>backend development, data analysis, automation</strong>, and <strong>machine learning</strong>. Currently, I focus my projects on <strong>backend</strong> and <strong>data analysis</strong>, deepening my knowledge of <strong>Python</strong> and libraries such as <strong>Django, Pandas, Plotly, and Scikit-learn</strong>.",
    p3: "I'm currently looking for my first internship in the tech industry, aiming to apply my knowledge and learn from real-world challenges.",
  },
  proj: {
    kicker: "Portfolio",
    titulo: "My projects",
    code: "Code",
  },
  cntt: {
    kicker: "Let's talk",
    titulo: "Get in touch.",
    h3form: "Contact form.",
    nome: "Your name:",
    email: "Your email:",
    msg: "Your message:",
    enviar: "Send",
    mensEnv: "Message sent!",
    obg: "Thanks for reaching out",
    p1: "Feel free to get in touch with me",
    p2: "through my social media",
    p3: "or email",
    outros: "Others.",
    erroEnvio: "Failed to send message.",
  },
  aria: {
    trocarIdioma: "Switch language",
    abrirMenu: "Open menu",
    fecharMenu: "Close menu",
    tecnologias: "Technologies and tools",
    voltarTopo: "Back to top",
  },
};

export const translations: Record<Language, Translation> = { pt, en };

/** Chaves das seções do grid de tecnologias. */
export type TechGroupKey = keyof Translation["hab"]["grid"];
