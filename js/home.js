/* ===================================================
    DADOS DAS SKILLS (antes vinha do Django, agora fixo)
=================================================== */
const SKILLS_DATA = {
    linguagens: [
        { nome: "Python",     icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",          progresso: 60, cor: "#ffee50" },
        { nome: "Django",     icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",             progresso: 45, cor: "#4a9757" },
        { nome: "Pandas",     icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",          progresso: 35, cor: "#001969" },
        { nome: "Plotly",     icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/plotly/plotly-original.svg",          progresso: 35, cor: "#435cab" },
        { nome: "Java",       icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",              progresso: 30, cor: "#FF3C3C" },
        // { nome: "JavaScript", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", progresso: 65, cor: "#F7DF1E" },
        // { nome: "HTML",       icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",           progresso: 80, cor: "#E34F26" },
        // { nome: "CSS",        icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",             progresso: 75, cor: "#1572B6" },
    ],
    bancos: [
        //{ nome: "MySQL",      icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",            progresso: 70, cor: "#4479A1" },
        //{ nome: "PostgreSQL", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",  progresso: 65, cor: "#336791" },
        //{ nome: "SQLite",     icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",          progresso: 60, cor: "#003B57" },
    ],
    ferramentas: [
        //{ nome: "Git",        icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",                progresso: 75, cor: "#F05032" },
        //{ nome: "VS Code",    icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",          progresso: 90, cor: "#007ACC" },
    ]
};

/* ===================================================
    RENDERIZA OS BLOCOS DE SKILLS NO HTML
=================================================== */
function renderSkills(lista, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    lista.forEach(skill => {
        const item = document.createElement("div");
        item.className = "skill-item";
        item.innerHTML = `
            <img src="${skill.icone}" alt="${skill.nome}" class="skill-icon">
            <span class="skill-name">${skill.nome}</span>
            <div class="skill-bar">
                <div class="skill-progress" style="width: ${skill.progresso}%; background-color: ${skill.cor};"></div>
            </div>
        `;
        container.appendChild(item);
    });
}

/* ===================================================
    GRÁFICO DOUGHNUT (desktop e mobile)
=================================================== */
function buildChart(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    // Junta todas as skills para o gráfico
    const todasSkills = [
        ...SKILLS_DATA.linguagens,
        ...SKILLS_DATA.bancos,
        ...SKILLS_DATA.ferramentas
    ];

    const labels = todasSkills.map(s => s.nome);
    const values = todasSkills.map(s => s.progresso);
    const colors = todasSkills.map(s => s.cor);

    new Chart(canvas, {
        type: "doughnut",
        data: {
            labels,
            datasets: [{
                data: values,
                backgroundColor: colors,
                borderWidth: 0
            }]
        },
        options: {
            cutout: "65%",
            plugins: {
                legend: { display: false }
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderSkills(SKILLS_DATA.linguagens,  "skills-linguagens");
    renderSkills(SKILLS_DATA.bancos,      "skills-bancos");
    renderSkills(SKILLS_DATA.ferramentas, "skills-ferramentas");

    buildChart("skillsChart");
    buildChart("skillsChart-2");
    renderSkillsGrid();
});

function renderSkillsGrid() {
    const grid = document.getElementById("skills-grid");
    if (!grid) return;

    const secoes = [
        {
            titulo: "Languages",
            subtitulo: "Programming with purpose",
            tecnologias: [["Python", "python/python-original.svg"], ["Java", "java/java-original.svg"], ["JavaScript", "javascript/javascript-original.svg"], ["TypeScript", "typescript/typescript-original.svg"]]
        },
        {
            titulo: "Front-end",
            subtitulo: "Building intuitive user interfaces",
            tecnologias: [["React", "react/react-original.svg"], ["Tailwind CSS", "tailwindcss/tailwindcss-original.svg"]]
        },
        {
            titulo: "Back-end",
            subtitulo: "Building scalable, high-performance services",
            tecnologias: [["FastAPI", "fastapi/fastapi-original.svg"], ["Django", "django/django-plain.svg"], ["Node.js", "nodejs/nodejs-original.svg"]]
        },
        {
            titulo: "Data & Analytics",
            subtitulo: "Turning data into insights",
            tecnologias: [["Pandas", "pandas/pandas-original.svg"], ["Plotly", "plotly/plotly-original.svg"]]
        },
        {
            titulo: "Databases",
            subtitulo: "Structuring reliable data",
            tecnologias: [["MongoDB", "mongodb/mongodb-original.svg"], ["SQLite", "sqlite/sqlite-original.svg"]]
        },
        {
            titulo: "Tools",
            subtitulo: "Building, shipping & maintaining",
            tecnologias: [["Git", "git/git-original.svg"], ["Docker", "docker/docker-original.svg"]]
        }
    ];

    grid.innerHTML = secoes.map(({ titulo, subtitulo, tecnologias }) => `
        <section class="tech-section">
            <div class="tech-section-header">
                <h2 class="tech-section-title">${titulo}</h2>
                <p class="tech-section-subtitle">${subtitulo}</p>
            </div>
            <div class="tech-section-cards">
                ${tecnologias.map(([nome, icone]) => `
                    <div class="tech-card" tabindex="0">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icone}" alt="" aria-hidden="true">
                        <span>${nome}</span>
                    </div>`).join("")}
            </div>
        </section>`).join("");
}


/* ===================================================
    MENU HAMBURGUER
=================================================== */
const btnHamb  = document.getElementById("menu-hamb");
const menu     = document.querySelector(".opcoes-hamburguer");
const container = document.querySelector(".btn-hamburguer");

btnHamb.addEventListener("click", (e) => {
    e.stopPropagation();
    container.classList.toggle("ativar");
    btnHamb.classList.toggle("ativar");
    menu.classList.toggle("ativar");
});

document.addEventListener("click", (e) => {
    if (!container.contains(e.target)) {
        container.classList.remove("ativar");
        btnHamb.classList.remove("ativar");
        menu.classList.remove("ativar");
    }
});

menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        container.classList.remove("ativar");
        btnHamb.classList.remove("ativar");
        menu.classList.remove("ativar");
    });
});


/* ===================================================
    TEXTO DINÂMICO / ANIMADO
=================================================== */
const textosPorIdioma = {
    pt: ["estudante de sistemas de informação", "desenvolvedor backend"],
    en: ["information systems student",         "backend developer"]
};

let idiomaAtual = localStorage.getItem("lang") || "pt";
let textos      = textosPorIdioma[idiomaAtual];

const velocidadeDigitacao = 100;
const velocidadeApagar    = 70;
const delayApagar         = 1100;

let textIndex  = 0;
let charIndex  = 0;
let isDeleting = false;
let typingTimeout;

const textoAnimado = document.getElementById("texto-animado");

function type() {
    const current = textos[textIndex];

    if (!isDeleting) {
        textoAnimado.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            isDeleting = true;
            typingTimeout = setTimeout(type, delayApagar);
        } else {
            typingTimeout = setTimeout(type, velocidadeDigitacao);
        }
    } else {
        textoAnimado.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textos.length;
            typingTimeout = setTimeout(type, velocidadeDigitacao);
        } else {
            typingTimeout = setTimeout(type, velocidadeApagar);
        }
    }
}

document.addEventListener("DOMContentLoaded", type);

document.addEventListener("visibilitychange", () => {
    if (document.hidden) clearTimeout(typingTimeout);
    else type();
});


/* ===================================================
    HEADER ANIMADO (scroll)
=================================================== */
const header    = document.getElementById("header");
let headerAtivo = false;

window.addEventListener("scroll", () => {
    if (window.scrollY > 50 && !headerAtivo) {
        header.classList.add("scrolled");
        headerAtivo = true;
    } else if (window.scrollY <= 50 && headerAtivo) {
        header.classList.remove("scrolled");
        headerAtivo = false;
    }
});


/* ===================================================
    FORMULÁRIO DE CONTATO (EmailJS — sem backend)
    ➜ Crie conta gratuita em https://www.emailjs.com
      e substitua os 3 valores abaixo
=================================================== */
const EMAILJS_SERVICE_ID  = "service_wfwmq6f";
const EMAILJS_TEMPLATE_ID = "template_w8ndf9c";
const EMAILJS_PUBLIC_KEY  = "C2mteBxgtG88Exq4E";

const form = document.querySelector(".form-contato");
const btnEnviar = document.querySelector(".btn-enviar");
const enviarText = document.querySelector(".text-enviar");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    btnEnviar.disabled = true;
    btnEnviar.classList.add("loading");
    enviarText.classList.add("remover-text");

    /* Com EmailJS (descomente quando configurar)  */
    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, EMAILJS_PUBLIC_KEY)
        .then(() => {
            mostrarOverlay();
            form.reset();
        })
        .catch(err => {
            console.error(err);
            alert("Erro ao enviar mensagem.");
        })
        .finally(() => {
            btnEnviar.disabled = false;
            btnEnviar.classList.remove("loading");
            enviarText.classList.remove("remover-text");
        });


    // Simulação temporária (remova quando configurar o EmailJS)
    /* setTimeout(() => {
        mostrarOverlay();
        form.reset();
        btnEnviar.disabled = false;
        btnEnviar.classList.remove("loading");
        enviarText.classList.remove("remover-text");
    }, 1200); */
});

function mostrarOverlay() {
    const toast = document.querySelector(".form-overlay");
    toast.classList.add("ativo");
    setTimeout(() => toast.classList.remove("ativo"), 3000);
}


/* ===================================================
    TRADUÇÃO (i18n — sem backend, JSON local)
=================================================== */
function toggleLanguage() {
    const currentLang = document.documentElement.lang || "pt";
    setLanguage(currentLang === "pt" ? "en" : "pt");
}

const translations = {
    pt: {
        static: {
            menu: { inicio: "Início", habilidades: "Habilidades", sobre: "Sobre", projetos: "Projetos", contato: "Contato" },
            topo: {
                ola: "Olá, meu nome é Erick Ribeiro",
                estatico: "Eu sou",
                texto: "Estudo tecnologia há dois anos e atuo como desenvolvedor com foco em backend e análise de dados. Desenvolvo projetos utilizando Python, Django e bibliotecas voltadas à análise de dados, como Pandas e Plotly.",
                btnCv: "Baixar CV",
                btnCtt: "Entre em contato"
            },
            hab: { h1Hab: "Minhas Habilidades", titulo1: "Linguagens e frameworks", titulo2: "Bancos de dados", titulo3: "Ferramentas e softwares", criadoCom: "Este portfolio foi criado usando" },
            sobre: {
                titulo: "Sobre mim",
                idiomas: "Idiomas", pt: "Português", in: "Inglês", nativo: "Nativo", pro: "Proficiente",
                p1: "Meu nome é Erick Ribeiro, tenho 20 anos e sou do Rio de Janeiro. Sou estudante de <strong>Sistemas de Informação</strong> pelo Unilasalle-RJ e desenvolvedor com foco em <strong>backend e análise de dados</strong>.",
                p2: "Tenho experiência no desenvolvimento de projetos <strong>web, backend, análise de dados, automação e machine learning</strong>. Atualmente, concentro meus projetos em <strong>backend e análise de dados</strong>, aprofundando meus conhecimentos em <strong>Python</strong> e em bibliotecas como <strong>Django, Pandas e plotly</strong>.",
                p3: "Atualmente, estou em busca do meu primeiro estágio na área de tecnologia, com o objetivo de aplicar meus conhecimentos e aprender com desafios reais do mercado."
            },
            proj: { titulo: "Meus projetos" },
            cntt: {
                titulo: "Fale comigo",
                h3form: "Formulário de contato.",
                nome: "Seu nome:", email: "Seu e-mail:", msg: "Sua mensagem:",
                enviar: "Enviar", mensEnv: "Mensagem enviada!", obg: "Obrigado pelo contato",
                p1: "Fique à vontade para entrar em contato comigo",
                p2: "através das minhas redes sociais",
                p3: "ou e-mail",
                outros: "Outros."
            }
        }
    },
    en: {
        static: {
            menu: { inicio: "Home", habilidades: "Skills", sobre: "About", projetos: "Projects", contato: "Contact" },
            topo: {
                ola: "Hi, my name is Erick Ribeiro",
                estatico: "I am",
                texto: "I've been studying technology for two years and work as a developer focused on backend and data analysis. I build projects using Python, Django and data libraries like Pandas and Plotly.",
                btnCv: "Download CV",
                btnCtt: "Get in touch"
            },
            hab: { h1Hab: "My Skills", titulo1: "Languages & frameworks", titulo2: "Databases", titulo3: "Tools & software", criadoCom: "This portfolio was built using" },
            sobre: {
                titulo: "About me",
                idiomas: "Languages", pt: "Portuguese", in: "English", nativo: "Native", pro: "Proficient",
                p1: "My name is Erick Ribeiro, I'm 20 years old and I'm from Rio de Janeiro. I study <strong>Information Systems</strong> at Unilasalle-RJ and I'm a developer focused on <strong>backend and data analysis</strong>.",
                p2: "I have experience in developing <strong>web projects</strong>, including <strong>backend development, data analysis, automation</strong>, and <strong>machine learning</strong>. Currently, I focus my projects on <strong>backend</strong> and <strong>data analysis</strong>, deepening my knowledge of <strong>Python</strong> and libraries such as <strong>Django, Pandas, Plotly, and Scikit-learn<strong>.",
                p3: "I'm currently looking for my first internship in the tech industry, aiming to apply my knowledge and learn from real-world challenges."
            },
            proj: { titulo: "My projects" },
            cntt: {
                titulo: "Get in touch.",
                h3form: "Contact form.",
                nome: "Your name:", email: "Your email:", msg: "Your message:",
                enviar: "Send", mensEnv: "Message sent!", obg: "Thanks for reaching out",
                p1: "Feel free to get in touch with me",
                p2: "through my social media",
                p3: "or email",
                outros: "Others."
            }
        }
    }
};

function setLanguage(lang) {
    const data = translations[lang];
    if (!data) return;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const keys = el.dataset.i18n.split(".");
        let text = data.static;
        keys.forEach(k => { text = text?.[k]; });
        if (text) el.innerHTML = text;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const keys = el.dataset.i18nPlaceholder.split(".");
        let text = data.static;
        keys.forEach(k => { text = text?.[k]; });
        if (text) el.setAttribute("placeholder", text);
    });

    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);

    idiomaAtual = lang;
    textos      = textosPorIdioma[lang];
    textIndex   = 0;
    charIndex   = 0;
    isDeleting  = false;

    ["btn-lang", "btn-lang-mobile"].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.classList.toggle("en", lang === "en");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "pt";
    setLanguage(savedLang);
});
