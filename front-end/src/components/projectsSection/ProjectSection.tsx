'use client';
import { Projects } from "../mockedData/MockedData";
import Image from "next/image";
import ProjectCard from './projectCard';

import { IoIosSearch } from "react-icons/io";
import { useState } from "react";


export default function ProjectSection(){
    const [search, setSearch] = useState("");

    const visibleProjects = Projects.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase()));

    return (
        <section id="projectId" className="flex flex-col items-center justify-start mt-30 bg-radial from-[#020c2b] to-bg to-60%">
            <header className="flex flex-col items-center text-center gap-3 px-5">
                <Image src={"/images/logo-hero-2.png"} alt="Logo" width={80} height={80} />
                <h1 className="text-3xl font-semibold text-gray-300">Projetos desenvolvidos</h1>
                <p className="text-xl opacity-70 text-center max-w-4xl">Pondo conhecimentos em prática e validando tudo que acumulei até então</p>
            </header>

            <form className="flex justify-center w-full mt-8 ">
                <input className="focus:w-19/20 md:focus:w-13/20 w-9/10 sm:w-4/5 md:w-3/5  bg-linear-to-b from-gray-950 to-blue-950/50 border rounded-full py-3 px-6 border-blue-900 transition-all" 
                    value={search} onChange={(e) => setSearch(e.target.value)} id="idProject" type="text" name="project" placeholder="Buscar projetos..." />
                <button className="-ml-9" disabled>
                    <IoIosSearch size={24} className="text-gray-600"/>
                </button>
            </form>

            <div className="flex justify-center items-center flex-wrap gap-12 mt-14 md:px-12">
                {
                    visibleProjects.map(p => (
                        <ProjectCard key={p.id} id={p.id} name={p.name} thumbnail={typeof p.thumbnail == "string" ? p.thumbnail : ''} color={p.color} isClient={true} />
                    ))
                }
            </div>
        </section>
    );
} 