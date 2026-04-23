export type AbouteMeType = {
    resume: string,
    intrudicing: string,
    paragraph1: string,
    paragraph2: string,
}

export type SkillsType = {
    id: number,
    icon: string | File,
    name: string,
    description: string,
    addedAt: string,
    skillType: string,
    ability: string,
}

export type FormationType = {
    id: number,
    name: string,
    description: string,
    addedAt: string,
}

export type CertificatesType = {
    id: number,
    name: string,
    company: string,
    pdf: string | File,
    addedAt: string,
}

export type StackType = {
    id: number,
    name: string,
    description: string,
}

export type ImportProjectType = {
    id: number,
    name: string,
    html_url: string,
    description: string,
    homepage: string,
    created_at: string,
}

export type ProjectsType = {
    id: number,
    name: string,
    color: string,
    thumbnail: string | File,
    gitHub: string,
    link: string,
    description: string,
    stacks: Array<string>,
    addedAt: string,
}

export type CuriositiesType = {
    id: number,
    name: string,
    image: string | File,
    description: string,
    link: string,
}

export type UserType = {
    id: number,
    name: string,
    email: string,
    icon: string,
    password: string,
    contactEmail: string,
    linkedin: string,
    github: string,
    instagram: string,
}

export type MessageType = {
    id: number,
    name: string,
    company: string,
    subject: string,
    email: string,
    message: string,
    sentAt: string,
}

export type VisitorType = {
    accessedAt: string,
    isDesktop: boolean,
}

// type BackgroundImages = {
//     id: number,
//     name: string,
//     url: string,
// }

export const User : UserType = {
    id: 0,
    name: 'José Alisson Dias da Costa',
    email: 'josealissondiasdacostaf10@gmail.com',
    password: 'thisIsASecreteP',
    icon: 'https://github.com/Alisson014.png',
    contactEmail: 'josealissondiasdacostaf10@gmail.com',
    github: 'https://www.github.com/Alisson014',
    instagram: 'https://www.instagram.com/j.alissons014/',
    linkedin: 'https://www.linkedin.com/in/jos%C3%A9-alisson-dias-da-costa-59375b322/'
}

export const aboutMe : AbouteMeType = {
    resume: 'Técnico em Informática para internet, Desenvolvedor FullStack e um jovem fascinado pelo mundo da tecnologia digital ecom muito estima pelo desenvolvimento profissional e pessoal.',
    intrudicing: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laborum tempora distinctio rem, fugit at pariatur, enim quaerat nihil nobis sed cum aspernatur asperiores praesentium, placeat repellat! Maxime, voluptas quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur repellat deleniti eligendi architecto doloribus ullam consectetur libero accusamus unde fugit nam laborum, mollitia iure numquam eos quas quam debitis!',
    paragraph1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laborum tempora distinctio rem, fugit at pariatur, enim quaerat nihil nobis sed cum aspernatur asperiores praesentium, placeat repellat! Maxime, voluptas quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur repellat deleniti eligendi architecto doloribus ullam consectetur libero accusamus unde fugit nam laborum, mollitia iure numquam eos quas quam debitis!',
    paragraph2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laborum tempora distinctio rem, fugit at pariatur, enim quaerat nihil nobis sed cum aspernatur asperiores praesentium, placeat repellat! Maxime, voluptas quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur repellat deleniti eligendi architecto doloribus ullam consectetur libero accusamus unde fugit nam laborum, mollitia iure numquam eos quas quam debitis!',
}

export const Skills : Array<SkillsType> = [
    {
        id: 1,
        icon: '/images/nextjs-icon.png',
        name: 'Next Js',
        description: 'Tecnologia atualíssima para FullStack.',
        addedAt: "2026-01-01",
        skillType: 'Hard',
        ability: 'Front',
    },
    {
        id: 2,
        icon: '/images/react-icon.png',
        name: 'React',
        description: 'Conexão com ferramentas importantíssimas',
        addedAt: "2026-02-01",
        skillType: 'Hard',
        ability: 'Front',
    },
    {
        id: 3,
        icon: '/images/git-icon.png',
        name: 'Git',
        description: 'A base para um bom vercionamento',
        addedAt: "2026-03-01",
        skillType: 'Hard',
        ability: 'Programação',
    },
    {
        id: 4,
        icon: '/images/javascript-icon.png',
        name: 'JavaScript',
        description: 'Linguagem de programação consolidada',
        addedAt: "2025-12-01",
        skillType: 'Hard',
        ability: 'Programação',
    },
    {
        id: 5,
        icon: '/images/github-icon.png',
        name: 'GitHub',
        description: 'Gerenciamento de projetos e repositórios',
        addedAt: "2026-01-01",
        skillType: 'Hard',
        ability: 'Programação',
    },
    {
        id: 6,
        icon: '/images/nodejs02-icon.png',
        name: 'Node js',
        description: 'Um "motor" para aplicações backend',
        addedAt: "2026-02-01",
        skillType: 'Hard',
        ability: 'Back',
    },
    {
        id: 7,
        icon: '/images/postgresql-icon.png',
        name: 'PostgreSQL',
        description: 'Gerenciamento de banco de dados',
        addedAt: "2025-03-01",
        skillType: 'Hard',
        ability: 'Back',
    },
    {
        id: 8,
        icon: '/images/prisma-icon.png',
        name: 'Prisma ORM',
        description: 'Conexão facilitado com banco de dados',
        addedAt: "2026-12-01",
        skillType: 'Hard',
        ability: 'Back',
    },
    {
        id: 9,
        icon: '/images/python-icon.png',
        name: 'Python',
        description: 'Um linguagem literalmente de alto nível',
        addedAt: "2026-01-01",
        skillType: 'Hard',
        ability: 'Programação',
    },
    {
        id: 10,
        icon: '/images/teamwork-icon.png',
        name: 'Trabalho em equipe',
        description: 'Consolidando a experiência de projeto',
        addedAt: "2026-02-01",
        skillType: 'Soft',
        ability: 'Educação',
    },
    {
        id: 11,
        icon: '/images/tailwind-icon.png',
        name: 'Tailwind CSS',
        description: 'Estilizando e performando código',
        addedAt: "2026-03-01",
        skillType: 'Hard',
        ability: 'Front',
    },
];

export const Formation : Array<FormationType> = [
    {
        id: 1,
        name: 'IFCE',
        description: 'Técnico em informática para internet pelo Instituto Federal do Ceará',
        addedAt: "2026-01-01",
    },
    {
        id: 2,
        name: 'C-Jovem',
        description: 'Desenvolvimento FullStack pelo programa Capacita Brasil / C-Jovem',
        addedAt: "2026-02-01",
    },
    {
        id: 3,
        name: 'UFCA',
        description: 'Engenharia de Software',
        addedAt: "2026-03-01",
    }
];

export const  Certificates : Array<CertificatesType> = [
    { 
        id: 0, 
        name: 'Desenvolvimento FullStack', 
        company: 'Capacita / C-jovem', 
        pdf: '/certificado_cnh.pdf',
        addedAt: "2026-01-01",
     },
    { 
        id: 1, 
        name: 'Técnico Informática para Internet', 
        company: 'IFCE', 
        pdf: '/Plano de Testes-spotify.pdf (1).pdf',
        addedAt: "2026-02-01",
    },
    { 
        id: 2, 
        name: 'Empreendedorismo', 
        company: 'Sebrae', 
        pdf: '/Curriculo (1).pdf',
        addedAt: "2026-03-01",
    },
    { 
        id: 3, 
        name: 'Inglês Técnico', 
        company: 'Dell', 
        pdf: '/certificado_feira.pdf',
        addedAt: "2026-04-01",
    },
    { 
        id: 4, 
        name: 'Jornada Inteligência Artificial', 
        company: 'Hashtag', 
        pdf: '/certificado_cnh.pdf',
        addedAt: "2026-05-01",
    },
    { 
        id: 5, 
        name: 'Minecurso Pensando como Backend Developer', 
        company: 'SeInfo IFCE', 
        pdf: '/certificado_feira.pdf',
        addedAt: "2026-06-01",
    },
]

export const Projects : Array<ProjectsType> = [
    { 
        id: 1126822556, 
        name: 'Portfolio', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', 
        thumbnail: '/images/thumbnail-p-01.jpg', 
        color: '#2196F3', 
        gitHub: 'https://github.com/Alisson014/Portfolio', 
        link: "#",
        stacks: ["HTML", "CSS", "JavaScript"], 
        addedAt: "2026-01-01",
    },
    { 
        id: 1056212441, 
        name: 'Monitoramento climático', 
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae itaque nisi nulla dolore vitae labore totam asperiores suscipit distinctio aspernatur. Cupiditate sint quisquam fugit eos molestiae harum vitae quam dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae itaque nisi nulla dolore vitae labore totam asperiores suscipit distinctio aspernatur. Cupiditate sint quisquam fugit eos molestiae harum vitae quam dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae itaque nisi nulla dolore vitae labore totam asperiores suscipit distinctio aspernatur. Cupiditate sint quisquam fugit eos molestiae harum vitae quam dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae itaque nisi nulla dolore vitae labore totam asperiores suscipit distinctio aspernatur. Cupiditate sint quisquam fugit eos molestiae harum vitae quam dolor.', 
        thumbnail: '/images/thumbnail-p-02.png', 
        color: '#00BCD4', 
        gitHub: 'https://github.com/Alisson014/MonitoramentoClimatico', 
        link: "https://monitoramento-climatico-henna.vercel.app/", 
        stacks: ["HTML", "CSS", "JavaScript"],
        addedAt: "2026-02-01",
    },
    { 
        id: 907513482, 
        name: 'Saúde em Fortaleza', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', 
        thumbnail: '/images/thumbnail-p-03.png', 
        color: '#FDD835', 
        gitHub: 'https://github.com/Alisson014/PrefeituraDeFortaleza', 
        link: "https://alisson014.github.io/PrefeituraDeFortaleza/",
        stacks: ["HTML", "CSS", "JavaScript"],
        addedAt: "2026-03-01",
    },
    { 
        id: 885832802, 
        name: 'Jeriquaquara', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', 
        thumbnail: '/images/thumbnail-p-04.png', 
        color: '#0ea5e9', 
        gitHub: 'https://github.com/Alisson014/JeriGit', 
        link: "https://alisson014.github.io/JeriGit/",
        stacks: ["HTML", "CSS", "JavaScript"],
        addedAt: "2026-04-01",
    },
    { 
        id: 875029090, 
        name: 'Livraria HTML', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', 
        thumbnail: '/images/thumbnail-p-05.png', 
        color: '#3F51B5', 
        gitHub: 'https://github.com/Alisson014/All-Books', 
        link: "https://all-books.vercel.app/",
        stacks: ["HTML", "CSS", "JavaScript"],
        addedAt: "2026-05-01",
    },
    { 
        id: 5, 
        name: 'Game Store', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', 
        thumbnail: '/images/thumbnail-p-06.png', 
        color: '#10b981', 
        gitHub: 'https://github.com/vaghenrique/FSN2-GRUPO06-VIDEOGAME', 
        link: "https://vaghenrique.github.io/FSN2-GRUPO06-VIDEOGAME/",
        stacks: ["HTML", "CSS", "JavaScript"],
        addedAt: "2026-06-01",
    },
];

export const Curiosities : Array<CuriositiesType> = [
    { 
        id: 0, 
        image: '/images/curiosity-01.png', 
        name: 'Reportagem', 
        description: 'Presença na mídia local como aluno destaque na região.', 
        link: 'https://globoplay.globo.com/v/13343428/' },
    { 
        id: 1, 
        image: '/images/curiosity-02.png', 
        name: 'Revista IFCE', 
        description: 'Ocupando um pouco a capa da revista ifce, edição de 2025', 
        link: 'https://www.calameo.com/books/005132292eaa19c6ff2ab' 
    },
    { 
        id: 2, 
        image: '/images/curiosity-03.png', 
        name: 'Notícia no IFCE', 
        description: 'Reconhecimento pela trajetória e resultados em competições.', 
        link: 'https://portal.ifce.edu.br/campus/crato/noticias/estudantes-conquistaram-26-premiacoes-em-olimpiadas-do-conhecimento/' 
    },
];

export const stars = [
    {id: 1, daley: 1}, 
    {id: 2, daley: 3}, 
    {id: 3, daley: 0.5}, 
    {id: 4, daley: 5}, 
    {id: 5, daley: 1.5}, 
    {id: 6, daley: 8},
    {id: 7, daley: 2}, 
    {id: 8, daley: 0.8}, 
    {id: 9, daley: 0.9}, 
    {id: 10, daley: 6.5}, 
    {id: 11, daley: 2.5}, 
    {id: 12, daley: 4.5},
    {id: 13, daley: 0.4}, 
    {id: 14, daley: 1}, 
    {id: 15, daley: 5.5}, 
    {id: 16, daley: 1.8}, 
    {id: 17, daley: 7.5}, 
    {id: 18, daley: 3.5},
    {id: 19, daley: 0.95}, 
    {id: 20, daley: 3.8}
];

export const Messages : Array<MessageType> = [
    {
        id: 1,
        name: 'Lionel',
        company: 'Google',
        subject: 'Confirmação de vínculo',
        email: 'email@gmail.com',
        message: 'Lorem ipsun dolor sit amet consectetur adicipsing labor. Lorem ipsun dolor sit amet consectetur adicipsing labor. Lorem ipsun dolor sit amet consectetur adicipsing labor. Lorem ipsun dolor sit amet consectetur adicipsing labor. ',
        sentAt: "2026-01-10",
    },
    {
        id: 2,
        name: 'Diana',
        company: 'Netflix',
        subject: 'Confirmação de vínculo',
        email: 'email@gmail.com',
        message: 'Lorem ipsun dolor sit amet consectetur adicipsing labor. Lorem ipsun dolor sit amet consectetur adicipsing labor. Lorem ipsun dolor sit amet consectetur adicipsing labor. Lorem ipsun dolor sit amet consectetur adicipsing labor. ',
        sentAt: "2025-01-10",
    },
    {
        id: 3,
        name: 'Julius',
        company: 'Atlântico',
        subject: 'Confirmação de vínculo',
        email: 'email@gmail.com',
        message: 'Lorem ipsun dolor sit amet consectetur adicipsing labor. Lorem ipsun dolor sit amet consectetur adicipsing labor. Lorem ipsun dolor sit amet consectetur adicipsing labor. Lorem ipsun dolor sit amet consectetur adicipsing labor. ',
        sentAt: "2024-01-10",
    },
    {
        id: 4,
        name: 'Assís',
        company: 'Folha',
        subject: 'Confirmação de vínculo',
        email: 'email@gmail.com',
        message: 'Lorem ipsun dolor sit amet consectetur adicipsing labor. Lorem ipsun dolor sit amet consectetur adicipsing labor. Lorem ipsun dolor sit amet consectetur adicipsing labor. Lorem ipsun dolor sit amet consectetur adicipsing labor. ',
        sentAt: "2023-01-10",
    },
    {
        id: 5,
        name: 'Veríssimo',
        company: 'Ordo Realitas',
        subject: 'Confirmação de vínculo',
        email: 'email@gmail.com',
        message: 'Lorem ipsun dolor sit amet consectetur adicipsing labor. Lorem ipsun dolor sit amet consectetur adicipsing labor. Lorem ipsun dolor sit amet consectetur adicipsing labor. Lorem ipsun dolor sit amet consectetur adicipsing labor. ',
        sentAt: "2022-01-10",
    },
    {
        id: 6,
        name: 'Bruce',
        company: 'Microsoft',
        subject: 'Confirmação de vínculo',
        email: 'email@gmail.com',
        message: 'Lorem ipsun dolor sit amet consectetur adicipsing labor. Lorem ipsun dolor sit amet consectetur adicipsing labor. Lorem ipsun dolor sit amet consectetur adicipsing labor. Lorem ipsun dolor sit amet consectetur adicipsing labor. ',
        sentAt: "2021-01-10",
    },
]

const MVisitors : Array<VisitorType> = [
    {
        accessedAt: "2026-01-01",
        isDesktop: false,
    }
]

for (let i = 0; i < 100; i++){
    MVisitors.push(
        {
            accessedAt: `2026-${ String(i%12 + 1).padStart(2, '0')}-01`,
            isDesktop: true,
        }   
    )
}

for (let i = 0; i < 75; i++){
    MVisitors.push(
        {
            accessedAt: `2026-${ String(i%12 + 1).padStart(2, '0')}-01`,
            isDesktop: false,
        }   
    )
}

export const Visitors : Array<VisitorType> = MVisitors;