'use client';
import { Skills } from "../mockedData/MockedData";
import Skill from "./Skill";

import Image from "next/image";

export default function SkillsSection(){
    const handleScrollProjects = () => {
        const pos = document.getElementById('projectId');

        window.scrollTo({
            top: (pos?.offsetTop ?? 0) - 70,
            behavior: "smooth", 
        })
    }

    const handleScrollFormation = () => {
        const pos = document.getElementById('formationId');

        window.scrollTo({
            top: (pos?.offsetTop ?? 0) - 70,
            behavior: "smooth", 
        })
    }


    return (
        <section id="skillId" className="w-full mt-24">
            <header className="flex flex-col justify-start items-center gap-3 px-5 bg-radial from-[#020c2b] to-bg to-60%">
                <Image src="/images/logo-hero-1.png" alt="logo of the hero" width={80} height={80} />
                <h1 className="text-3xl font-semibold text-gray-300 ">Minhas Habilidades</h1>
                <p className="text-xl opacity-70 text-center max-w-4xl">Projetos de excelência exigem domínio técnico, mas uma colaboração assertiva também. Alinhando <span className="text-blue-400">hard</span> e <span className="text-blue-400">soft</span> skills, sigo em constante evolução para sempre dedicar o melhor de mim a cada novo desafio.</p>
                <div className="flex gap-2 sm:gap-4 mt-5">
                    <button onClick={handleScrollProjects} className="bg-linear-to-br from-blue-600 to-blue-950 px-4 sm:px-7 py-1 rounded-full text-sm sm:text-lg cursor-pointer hover:from-blue-300 hover:to-indigo-800 hover:text-bg transition-all duration-100 clickedAnimation">
                        Conferir Projetos
                    </button>
                    <button onClick={handleScrollFormation} className="bg-linear-to-br from-gray-900 to-blue-950 px-4 sm:px-7 py-1 rounded-full text-sm sm:text-lg cursor-pointer hover:from-blue-300 hover:to-indigo-800 hover:text-bg transition-all duration-100 clickedAnimation">
                        Minha Formação
                    </button>
                </div>
            </header>

            <div className="flex items-start justify-center flex-wrap gap-5 py-12 md:px-12">
                {Skills.map((skill) => (
                    <Skill key={skill.id} name={skill.name} icon={skill.icon} description={skill.description} />
                ))}
            </div>
        </section>
    );
}