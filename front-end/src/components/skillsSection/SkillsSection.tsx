import Skill from "./Skill";

import Image from "next/image";
import { IoIosPeople } from "react-icons/io";
import { DiJavascript1, DiPostgresql  } from "react-icons/di";
import { SiNextdotjs, SiPrisma, SiTailwindcss  } from "react-icons/si";
import { FaReact, FaGitAlt, FaGithub, FaNodeJs, FaPython } from "react-icons/fa";

export default function SkillsSection(){

    const skills = [
        {
            id: 1,
            icon: <SiNextdotjs className="text-5xl text-blue-950 group-hover:text-blue-800"/>,
            name: 'Next Js',
            description: 'Tecnologia atualíssima para FullStack.',
        },
        {
            id: 2,
            icon: <FaReact className="text-5xl text-blue-950 group-hover:text-blue-800"/>,
            name: 'React',
            description: 'Conexão com ferramentas importantíssimas',
        },
        {
            id: 3,
            icon: <FaGitAlt className="text-5xl text-blue-950 group-hover:text-blue-800"/>,
            name: 'Git',
            description: 'A base para um bom vercionamento',
        },
        {
            id: 4,
            icon: <DiJavascript1  className="text-5xl text-blue-950 group-hover:text-blue-800"/>,
            name: 'JavaScript',
            description: 'Linguagem de programação consolidada',
        },
        {
            id: 5,
            icon: <FaGithub  className="text-5xl text-blue-950 group-hover:text-blue-800"/>,
            name: 'GitHub',
            description: 'Gerenciamento de projetos e repositórios',
        },
        {
            id: 6,
            icon: <FaNodeJs  className="text-5xl text-blue-950 group-hover:text-blue-800"/>,
            name: 'Node js',
            description: 'Um "motor" para aplicações backend',
        },
        {
            id: 7,
            icon: <DiPostgresql  className="text-5xl text-blue-950 group-hover:text-blue-800"/>,
            name: 'PostgreSQL',
            description: 'Gerenciamento de banco de dados',
        },
        {
            id: 8,
            icon: <SiPrisma  className="text-5xl text-blue-950 group-hover:text-blue-800"/>,
            name: 'Prisma ORM',
            description: 'Conexão facilitado com banco de dados',
        },
        {
            id: 9,
            icon: <FaPython  className="text-5xl text-blue-950 group-hover:text-blue-800"/>,
            name: 'Python',
            description: 'Um linguagem literalmente de alto nível',
        },
        {
            id: 10,
            icon: <IoIosPeople  className="text-5xl text-blue-950 group-hover:text-blue-800"/>,
            name: 'Trabalho em equipe',
            description: 'Consolidando a experiência de projeto',
        },
        {
            id: 11,
            icon: <SiTailwindcss  className="text-5xl text-blue-950 group-hover:text-blue-800"/>,
            name: 'Tailwind CSS',
            description: 'Estilizando e performando código',
        },
        
    ]

    return (
        <section className="w-full mt-24">
            <header className="flex flex-col justify-start items-center gap-3 px-5 bg-radial from-[#020c2b] to-bg to-60%">
                <Image src="/images/logo-hero-1.png" alt="logo of the hero" width={80} height={80} />
                <h1 className="text-3xl font-semibold text-gray-300 ">Minhas Habilidades</h1>
                <p className="text-xl opacity-70 text-center max-w-4xl">Projetos de excelência exigem domínio técnico, mas uma colaboração assertiva também. Alinhando <span className="text-blue-400">hard</span> e <span className="text-blue-400">soft</span> skills, sigo em constante evolução para sempre dedicar o melhor de mim a cada novo desafio.</p>
                <div className="flex gap-2 sm:gap-4 mt-5">
                    <button className="bg-linear-to-br from-blue-600 to-blue-950 px-4 sm:px-7 py-1 rounded-full text-sm sm:text-lg cursor-pointer hover:from-blue-300 hover:to-indigo-800 hover:text-bg transition-all duration-100">
                        Conferir Projetos
                    </button>
                    <button className="bg-linear-to-br from-gray-900 to-blue-950 px-4 sm:px-7 py-1 rounded-full text-sm sm:text-lg cursor-pointer hover:from-blue-300 hover:to-indigo-800 hover:text-bg transition-all duration-100">
                        Minha Formação
                    </button>
                </div>
            </header>

            <section className="flex items-start justify-center flex-wrap gap-5 py-12 md:px-12">
                {skills.map((skill) => (
                    <Skill key={skill.id} name={skill.name} icon={skill.icon} description={skill.description} />
                ))}
            </section>
        </section>
    );
}