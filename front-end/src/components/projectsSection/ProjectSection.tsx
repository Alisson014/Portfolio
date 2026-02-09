'use client';
import Image from "next/image";
import ProjectCard from './projectCard';

import { IoIosSearch } from "react-icons/io";
import { useState } from "react";


export default function ProjectSection(){
    const [search, setSearch] = useState("");

    const projects = [
        { id: '0', title: 'Web portfolio desenvolvido com NextJs', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', thumbnail: '/images/thumbnail-p-01.jpg', color: '#2196F3' },
        { id: '1', title: 'Simulação de monitoramento do clima', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae itaque nisi nulla dolore vitae labore totam asperiores suscipit distinctio aspernatur. Cupiditate sint quisquam fugit eos molestiae harum vitae quam dolor.', thumbnail: '/images/thumbnail-p-02.png', color: '#00BCD4' },
        { id: '2', title: 'Site sobre saúde em Fortaleza', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', thumbnail: '/images/thumbnail-p-03.png', color: '#FDD835' },
        { id: '3', title: 'Site sobre Jeriquaquara', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', thumbnail: '/images/thumbnail-p-04.png', color: '#0ea5e9' },
        { id: '4', title: 'Livraria desenvolvida apenas em HTML', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', thumbnail: '/images/thumbnail-p-05.png', color: '#3F51B5' },
        { id: '5', title: 'Game Store desenvolvida em equipe', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', thumbnail: '/images/thumbnail-p-06.png', color: '#10b981' },
    ]


    const visibleProjects = projects.filter(p => p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase()));

    return (
        <section className="flex flex-col items-center justify-start mt-18 bg-radial from-[#020c2b] to-bg to-60%">
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
                        <ProjectCard key={p.id} title={p.title} thumbnail={p.thumbnail} color={p.color} />
                    ))
                }
            </div>
        </section>
    );
} 