'use client';
import { Projects } from "@/src/components/mockedData/MockedData";
import { useParams } from "next/navigation";
import Image from "next/image";

import ProjectNotFound from "../../project-not-found";

import { GiStripedSun } from "react-icons/gi";
import Link from "next/link";


export default function ProjectPage() {
    const { id } = useParams();

    const project = Projects.find(p => p.id == Number(id));

    if (!project) return ProjectNotFound();

    return(
        <div className="pt-20  overflow-hidden">
            <div className="w-full relative flex justify-center items-center pt-35 sm:pt-0">
                <Link href={"/"}>
                    <button className="absolute top-1 left-1 z-40 hover:underline cursor-pointer text-md clickedAnimation">◁ Voltar</button>
                </Link>
                <Image src={project.thumbnail} alt="Project image" width={1600} height={1600} className="w-full z-10" />
                <div className="absolute w-full top-0 bottom-0 bg-bg/90 z-20 flex flex-col sm:gap-4 justify-center items-center text-center py-20 sm:py-0 px-2">
                    <button className="flex justify-center items-center gap-1 text-sm sm:text-lg bg-linear-to-b from-gray-950 to-blue-950/50 border rounded-full py-1.5 px-3 border-blue-700 text-blue-300">
                        <Image className="grayscale-50" src="/images/logo-hero-1.png" alt="Developer Icon" width={20} height={20} />    
                        A project by José Alisson
                    </button>
                    <div className="relative max-w-fit w-full shrink-0 p-1 border-r-4 overflow-hidden cursorAnimation">
                        <h1 className="text-2xl md:text-6xl whitespace-nowrap font-semibold">{project.name}</h1>
                    </div>
                    <p className="max-w-4xl text-lg md:text-2xl text-gray-400 appearTextP">Um projeto desenvolvido por meio de tecnologias e stacks acumuladas 
                        ao longo de uma jornada repleta de conhecimento, aprendizagem, amigos e prática.
                    </p>
                    <div className="flex gap-4 sm:gap-8 mt-4">
                        <Link href={project.gitHub} target="_blank">
                            <button className="bg-linear-to-br from-blue-700 to-cyan-700 px-10 py-2 text-sm sm:text-xl rounded-full cursor-pointer clickedAnimation">
                                GitHub
                            </button>
                        </Link>
                        <Link href={project?.link} target="_blank">
                            <button className="bg-black px-10 py-2 text-sm sm:text-xl rounded-full cursor-pointer clickedAnimation">
                                Web Site
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="w-12/10 px-10 py-12 -ml-5 -rotate-3 bg-linear-to-br from-gray-800 to-gray-950 mt-5 md:-mt-20 relative z-20">
                <div className="rotate-3 py-12 sm:pl-6 max-w-[90vw]">
                    <h1 className="font-semibold text-3xl">Sobre o Projeto</h1>
                    <br/>
                    <p className="text-xl">{project.description}</p>
                    <br /><br /><br /> <br />
                </div>
            </div>

            <div className="flex justify-center lg:justify-between items-center flex-wrap gap-20 w-full bg-gray-950 relative -mt-20 py-20 px-12 z-30">
                <div className="flex flex-col justify-center items-center gap-2 w-full">
                    <h1 className="text-5xl text-gray-400 font-medium">Stacks utilizadas</h1>
                </div>
                <div className="flex justify-around items-center flex-wrap gap-10 w-full py-5">
                    {
                        project.stacks.map( stack => (
                            <article key={stack.name} className="flex flex-col items-center text-center gap-2 max-w-60 hover:scale-110 transition-all duration-200">
                                <GiStripedSun className="text-blue-500/50" size={44} />
                                <h1 className="text-xl font-medium">{stack.name}</h1>
                                <p className="text-sm text-gray-400">{stack.description}</p>
                            </article>
                        ) )
                    }
                </div>
            </div>
        </div>
    );
}