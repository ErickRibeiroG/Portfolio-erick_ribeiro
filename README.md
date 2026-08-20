# Erick Ribeiro Graciano - Dev Portfolio

Este é o meu portfólio pessoal como estudante de Sistemas de Informação e desenvolvedor. A ideia aqui é centralizar minha trajetória acadêmica e profissional, habilidades, experiências, projetos e formas de contato em um único lugar.

O projeto foi desenvolvido com **React, TypeScript, Vite e Tailwind CSS**, buscando criar uma interface moderna, responsiva e organizada, mantendo o foco na apresentação do meu perfil e dos projetos que venho desenvolvendo.

## Funcionalidades

* Interface responsiva para desktop, tablet e mobile
* Componentização utilizando React
* Tipagem estática com TypeScript
* Estilização utilizando Tailwind CSS
* Seção de apresentação pessoal
* Exibição das principais habilidades e tecnologias
* Projetos em destaque
* Links para redes profissionais e repositórios
* Formulário/seção de contato

## Stack principal

* React
* TypeScript
* Vite
* Tailwind CSS

## Estrutura

```text
Portfólio/
├── public/assets/       # imagens (logo, fotos, bandeiras, projetos) e PDFs do CV
│
└── src/
├── components/       # componentes React de cada seção/parte visual da página
├── data/             # dados estáticos: tecnologias, projetos, redes sociais, config
├── hooks/            # hooks reutilizáveis (typewriter, scroll, click outside)
└── i18n/             # traduções pt/en e o contexto de idioma
```

## Como rodar localmente

Pré-requisitos:

* Node.js 18 ou superior
* npm

Instalação:

```bash
git clone https://github.com/ErickRibeiroG/Portfolio-erick_ribeiro.git
cd Portfolio-erick_ribeiro
npm install
npm run dev
```

Por padrão, o Vite disponibiliza a aplicação em:

```text
http://localhost:5173
```

## Scripts

```bash
npm run dev        # inicia o servidor de desenvolvimento
npm run build      # gera o build de produção
npm run preview    # abre um preview do build de produção
npm run lint       # executa o ESLint, caso configurado
```

## Build de produção

Para gerar a versão otimizada para produção:

```bash
npm run build
```

Os arquivos finais serão gerados na pasta:

```text
dist/
```

Essa é a versão que deve ser utilizada no deploy da aplicação.

Para visualizar o build localmente:

```bash
npm run preview
```

## Deploy

O projeto pode ser publicado em plataformas que suportam aplicações frontend construídas com Vite, como **Vercel, Netlify ou GitHub Pages**.

O processo de build utiliza:

```bash
npm run build
```

e a pasta de saída é:

```text
dist/
```

Em plataformas com deploy integrado ao GitHub, o processo pode ser automatizado para que um novo build seja realizado a cada atualização do repositório.

Caso o projeto utilize **React Router** com rotas diferentes de `/`, a hospedagem também deve estar configurada para redirecionar as rotas da aplicação para o `index.html`.

## Objetivo

O objetivo deste projeto é apresentar minha evolução na área de tecnologia, reunindo experiências, conhecimentos e projetos desenvolvidos durante minha formação e trajetória profissional.

Além de servir como portfólio profissional, o projeto também funciona como uma forma de aplicar e aprimorar conhecimentos em desenvolvimento frontend, React, TypeScript, componentização e boas práticas de desenvolvimento.

## Autor

Desenvolvido por **Erick Ribeiro Graciano**.

* LinkedIn: [Erick Ribeiro Graciano](https://www.linkedin.com/in/erick-ribeiro-907a8432b/)
* Portfólio: [Acessar portfólio](https://portfolioerick-ecru.vercel.app)
