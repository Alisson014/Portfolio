import Certificates from "./Certificates";
import { Formation } from "../mockedData/MockedData";

import Image from "next/image";
import { LuGraduationCap } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import FormationCard from "./FormationCard";

export default function FormationSection(){


    return (
        <section id="formationId">
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
                            Formation.map( f => (
                                <FormationCard key={f.id} id={f.id} name={f.name} description={f.description} isClient={true} />
                            ) )
                        }
                    </div>
                </div>
            </section>

            <Certificates />

            
        </section>
    );
}