import Certificates from "./certificate";

import Image from "next/image";
import { LuGraduationCap } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { LuSchool } from "react-icons/lu";
import { FaComputer } from "react-icons/fa6";



export default function FormationSection(){

    const formations = [
        {
            id: 1,
            name: 'IFCE',
            description: 'Técnico em informática para internet pelo Instituto Federal do Ceará',
            icon: <LuSchool className="text-5xl p-1 text-blue-800 bg-blue-500/10 rounded-lg group-hover:scale-110 transition-transform" />,
        },
        {
            id: 2,
            name: 'C-Jovem',
            description: 'Desenvolvimento FullStack pelo programa Capacita Brasil / C-Jovem',
            icon: <FaComputer className="text-5xl p-1 text-blue-800 bg-blue-500/10 rounded-lg group-hover:scale-110 transition-transform" />,
        },
        {
            id: 3,
            name: 'UFCA',
            description: 'Engenharia de Software',
            icon: <FaComputer className="text-5xl p-1 text-blue-800 bg-blue-500/10 rounded-lg group-hover:scale-110 transition-transform" />,
        }
    ]

    return (
        <section>
            <header className="mt-24 flex flex-col gap-4 items-center">
                <LuGraduationCap className="text-5xl sm:text-7xl text-blue-800 " />
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium bg-linear-to-r from-gray-700 to-blue-800 bg-clip-text text-transparent">Formação Acadêmica</h1>
                {/* <hr className="w-25 h-1 bg-linear-to-r from-blue-300 to-blue-800 border-none"/> */}
            </header>

            <section className="flex flex-wrap justify-center items-center mt-12 p-6 sm:p-8 mx-4 sm:mx-8 md:mx-12 ">
                <Image src={'/images/formation.png'} alt="formation image" width={450} height={450}
                className="rounded-2xl border-2 border-blue-950/50 hidden lg:flex" />
                <div className="max-w-110 bg-linear-to-br p-5 scale-115 lg:-ml-6 from-gray-900  to-gray-950 border-2 border-gray-900 rounded-xl">
                    <h1 className="text-2xl font-semibold text-gray-400">Aprendizagem</h1>
                    <p className="text-text opacity-60 text-sm">Em busca de um aprimoramento constante e focado, reailizei cursos e ingressei em instituições de ensino transformadoras.</p>
                    <p className="flex text-sm mt-1 text-gray-600"> 
                        <GoDotFill className="scale-70"/>
                        <GoDotFill className="scale-70"/>
                        <GoDotFill className="scale-70"/>
                    </p>

                    <div className="max-h-70 overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent">
                        {
                            formations.map( f => (
                                <article key={f.id} className="flex gap-4 w-full bg-linear-to-br from-gray-800/90 to-gray-900/70 p-2 mt-4 rounded-lg hover:from-gray-900 transition-colors duration-500 group">
                                    <div className="flex justify-center items-center">
                                        {f.icon}
                                    </div>
                                    <div>
                                        <h1 className="text-sm font-semibold">{f.name}</h1>
                                        <p className="mt-1 text-xs text-text opacity-60">{f.description}</p>
                                    </div>
                                </article>
                            ) )
                        }
                    </div>
                </div>
            </section>

            <Certificates />

            
        </section>
    );
}