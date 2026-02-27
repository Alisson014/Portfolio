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
}

export type FormationType = {
    id: number,
    name: string,
    description: string,
}

export type CertificatesType = {
    id: number,
    name: string,
    company: string,
    pdf: string | File,
}

export type StackType = {
    id: number,
    name: string,
    description: string,
}

export type ProjectsType = {
    id: number,
    name: string,
    color: string,
    thumbnail: string,
    gitHub: string,
    link: string,
    description: string,
    stacks: Array<StackType>,
}

export type CuriositiesType = {
    id: number,
    name: string,
    image: string,
    description: string,
    link: string,
}

// type BackgroundImages = {
//     id: number,
//     name: string,
//     url: string,
// }

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
    },
    {
        id: 2,
        icon: '/images/react-icon.png',
        name: 'React',
        description: 'Conexão com ferramentas importantíssimas',
    },
    {
        id: 3,
        icon: '/images/git-icon.png',
        name: 'Git',
        description: 'A base para um bom vercionamento',
    },
    {
        id: 4,
        icon: '/images/javascript-icon.png',
        name: 'JavaScript',
        description: 'Linguagem de programação consolidada',
    },
    {
        id: 5,
        icon: '/images/github-icon.png',
        name: 'GitHub',
        description: 'Gerenciamento de projetos e repositórios',
    },
    {
        id: 6,
        icon: '/images/nodejs02-icon.png',
        name: 'Node js',
        description: 'Um "motor" para aplicações backend',
    },
    {
        id: 7,
        icon: '/images/postgresql-icon.png',
        name: 'PostgreSQL',
        description: 'Gerenciamento de banco de dados',
    },
    {
        id: 8,
        icon: '/images/prisma-icon.png',
        name: 'Prisma ORM',
        description: 'Conexão facilitado com banco de dados',
    },
    {
        id: 9,
        icon: '/images/python-icon.png',
        name: 'Python',
        description: 'Um linguagem literalmente de alto nível',
    },
    {
        id: 10,
        icon: '/images/teamwork-icon.png',
        name: 'Trabalho em equipe',
        description: 'Consolidando a experiência de projeto',
    },
    {
        id: 11,
        icon: '/images/tailwind-icon.png',
        name: 'Tailwind CSS',
        description: 'Estilizando e performando código',
    },
];

export const Formation : Array<FormationType> = [
    {
        id: 1,
        name: 'IFCE',
        description: 'Técnico em informática para internet pelo Instituto Federal do Ceará',
    },
    {
        id: 2,
        name: 'C-Jovem',
        description: 'Desenvolvimento FullStack pelo programa Capacita Brasil / C-Jovem',
    },
    {
        id: 3,
        name: 'UFCA',
        description: 'Engenharia de Software',
    }
];

export const  Certificates : Array<CertificatesType> = [
    { 
        id: 0, 
        name: 'Desenvolvimento FullStack', 
        company: 'Capacita / C-jovem', 
        pdf: '/certificado_cnh.pdf' },
    { 
        id: 1, 
        name: 'Técnico Informática para Internet', 
        company: 'IFCE', 
        pdf: '/Plano de Testes-spotify.pdf (1).pdf' },
    { 
        id: 2, 
        name: 'Empreendedorismo', 
        company: 'Sebrae', 
        pdf: '/Curriculo (1).pdf' },
    { 
        id: 3, 
        name: 'Inglês Técnico', 
        company: 'Dell', 
        pdf: '/certificado_feira.pdf' },
    { 
        id: 4, 
        name: 'Jornada Inteligência Artificial', 
        company: 'Hashtag', 
        pdf: '/certificado_cnh.pdf' },
    { 
        id: 5, 
        name: 'Minecurso Pensando como Backend Developer', 
        company: 'SeInfo IFCE', 
        pdf: '/certificado_feira.pdf'
    },
]

export const Projects : Array<ProjectsType> = [
    { 
        id: 0, 
        name: 'Web portfolio', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', 
        thumbnail: '/images/thumbnail-p-01.jpg', 
        color: '#2196F3', 
        gitHub: 'https://github.com/Alisson014/Portfolio', 
        link: "#",
        stacks: [
            {
                id: 0,
                name: "Desenvolvimento Web", 
                description: "Lorem ipsun dolor sit amet consectetur adipisicing"
            }, 
            {
                id: 1,
                name: "Node JS", 
                description: "Lorem ipsun dolor sit amet consectetur adipisicing"
            }, 
            {
                id: 2,
                name: "Tailwind CSS", 
                description: "Lorem ipsun dolor sit amet consectetur adipisicing"
            }
        ], 
    },
    { 
        id: 1, 
        name: 'Monitoramento climático', 
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae itaque nisi nulla dolore vitae labore totam asperiores suscipit distinctio aspernatur. Cupiditate sint quisquam fugit eos molestiae harum vitae quam dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae itaque nisi nulla dolore vitae labore totam asperiores suscipit distinctio aspernatur. Cupiditate sint quisquam fugit eos molestiae harum vitae quam dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae itaque nisi nulla dolore vitae labore totam asperiores suscipit distinctio aspernatur. Cupiditate sint quisquam fugit eos molestiae harum vitae quam dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae itaque nisi nulla dolore vitae labore totam asperiores suscipit distinctio aspernatur. Cupiditate sint quisquam fugit eos molestiae harum vitae quam dolor.', 
        thumbnail: '/images/thumbnail-p-02.png', 
        color: '#00BCD4', 
        gitHub: 'https://github.com/Alisson014/MonitoramentoClimatico', 
        link: "https://monitoramento-climatico-henna.vercel.app/", 
        stacks: [
            {
                id: 0,
                name: "Desenvolvimento Web", 
                description: "Lorem ipsun dolor sit amet consectetur adipisicing"
            }, 
            {
                id: 1,
                name: "Node JS", 
                description: "Lorem ipsun dolor sit amet consectetur adipisicing"
            }, 
            {
                id: 2,
                name: "Tailwind CSS", 
                description: "Lorem ipsun dolor sit amet consectetur adipisicing"
            }
        ], 
    },
    { 
        id: 2, 
        name: 'Saúde em Fortaleza', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', 
        thumbnail: '/images/thumbnail-p-03.png', 
        color: '#FDD835', 
        gitHub: 'https://github.com/Alisson014/PrefeituraDeFortaleza', 
        link: "https://alisson014.github.io/PrefeituraDeFortaleza/",
        stacks: [
            {
                id: 0,
                name: "Desenvolvimento Web", 
                description: "Lorem ipsun dolor sit amet consectetur adipisicing"
            }, 
            {
                id: 1,
                name: "Node JS", 
                description: "Lorem ipsun dolor sit amet consectetur adipisicing"
            }, 
            {
                id: 2,
                name: "Tailwind CSS", 
                description: "Lorem ipsun dolor sit amet consectetur adipisicing"
            }
        ],
    },
    { 
        id: 3, 
        name: 'Jeriquaquara', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', 
        thumbnail: '/images/thumbnail-p-04.png', 
        color: '#0ea5e9', 
        gitHub: 'https://github.com/Alisson014/JeriGit', 
        link: "https://alisson014.github.io/JeriGit/",
        stacks: [
            {
                id: 0,
                name: "Desenvolvimento Web", 
                description: "Lorem ipsun dolor sit amet consectetur adipisicing"
            }, 
            {
                id: 1,
                name: "Node JS", 
                description: "Lorem ipsun dolor sit amet consectetur adipisicing"
            }, 
            {
                id: 2,
                name: "Tailwind CSS", 
                description: "Lorem ipsun dolor sit amet consectetur adipisicing"
            }
        ],
    },
    { 
        id: 4, 
        name: 'Livraria HTML', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', 
        thumbnail: '/images/thumbnail-p-05.png', 
        color: '#3F51B5', 
        gitHub: 'https://github.com/Alisson014/All-Books', 
        link: "https://all-books.vercel.app/",
        stacks: [
            {
                id: 0,
                name: "Desenvolvimento Web", 
                description: "Lorem ipsun dolor sit amet consectetur adipisicing"
            }, 
            {
                id: 1,
                name: "Node JS", 
                description: "Lorem ipsun dolor sit amet consectetur adipisicing"
            }, 
            {
                id: 2,
                name: "Tailwind CSS", 
                description: "Lorem ipsun dolor sit amet consectetur adipisicing"
            }
        ],
    },
    { 
        id: 5, 
        name: 'Game Store', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', 
        thumbnail: '/images/thumbnail-p-06.png', 
        color: '#10b981', 
        gitHub: 'https://github.com/vaghenrique/FSN2-GRUPO06-VIDEOGAME', 
        link: "https://vaghenrique.github.io/FSN2-GRUPO06-VIDEOGAME/",
        stacks: [
            {
                id: 0,
                name: "Desenvolvimento Web", 
                description: "Lorem ipsun dolor sit amet consectetur adipisicing"
            }, 
            {
                id: 1,
                name: "Node JS", 
                description: "Lorem ipsun dolor sit amet consectetur adipisicing"
            }, 
            {
                id: 2,
                name: "Tailwind CSS", 
                description: "Lorem ipsun dolor sit amet consectetur adipisicing"
            }
        ],
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