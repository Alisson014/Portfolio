'use client';
import Image from "next/image";
import ProjectCard from './projectCard';

import { IoIosSearch } from "react-icons/io";
import { useState } from "react";


export default function ProjectSection(){
    const [search, setSearch] = useState("");

    const projects = [
        { id: '0', name: 'Web portfolio', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', thumbnail: '/images/thumbnail-p-01.jpg', color: '#2196F3', gitHub: 'https://github.com/Alisson014/Portfolio', stacks: [{name: "Desenvolvimento Web", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}, {name: "Node JS", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}, {name: "Tailwind CSS", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}], link: "#" },
        { id: '1', name: 'Monitoramento climático', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae itaque nisi nulla dolore vitae labore totam asperiores suscipit distinctio aspernatur. Cupiditate sint quisquam fugit eos molestiae harum vitae quam dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae itaque nisi nulla dolore vitae labore totam asperiores suscipit distinctio aspernatur. Cupiditate sint quisquam fugit eos molestiae harum vitae quam dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae itaque nisi nulla dolore vitae labore totam asperiores suscipit distinctio aspernatur. Cupiditate sint quisquam fugit eos molestiae harum vitae quam dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae itaque nisi nulla dolore vitae labore totam asperiores suscipit distinctio aspernatur. Cupiditate sint quisquam fugit eos molestiae harum vitae quam dolor.', thumbnail: '/images/thumbnail-p-02.png', color: '#00BCD4', gitHub: 'https://github.com/Alisson014/MonitoramentoClimatico', stacks: [{name: "Desenvolvimento Web", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}, {name: "Node JS", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}, {name: "Tailwind CSS", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}], link: "https://monitoramento-climatico-henna.vercel.app/" },
        { id: '2', name: 'Saúde em Fortaleza', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', thumbnail: '/images/thumbnail-p-03.png', color: '#FDD835', gitHub: 'https://github.com/Alisson014/PrefeituraDeFortaleza', stacks: [{name: "Desenvolvimento Web", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}, {name: "Node JS", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}, {name: "Tailwind CSS", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}], link: "https://alisson014.github.io/PrefeituraDeFortaleza/" },
        { id: '3', name: 'Jeriquaquara', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', thumbnail: '/images/thumbnail-p-04.png', color: '#0ea5e9', gitHub: 'https://github.com/Alisson014/JeriGit', stacks: [{name: "Desenvolvimento Web", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}, {name: "Node JS", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}, {name: "Tailwind CSS", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}], link: "https://alisson014.github.io/JeriGit/" },
        { id: '4', name: 'Livraria HTML', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', thumbnail: '/images/thumbnail-p-05.png', color: '#3F51B5', gitHub: 'https://github.com/Alisson014/All-Books', stacks: [{name: "Desenvolvimento Web", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}, {name: "Node JS", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}, {name: "Tailwind CSS", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}], link: "https://all-books.vercel.app/" },
        { id: '5', name: 'Game Store', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', thumbnail: '/images/thumbnail-p-06.png', color: '#10b981', gitHub: 'https://github.com/vaghenrique/FSN2-GRUPO06-VIDEOGAME', stacks: [{name: "Desenvolvimento Web", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}, {name: "Node JS", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}, {name: "Tailwind CSS", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}], link: "https://vaghenrique.github.io/FSN2-GRUPO06-VIDEOGAME/" },
    ]   


    const visibleProjects = projects.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase()));

    return (
        <section className="flex flex-col items-center justify-start mt-30 bg-radial from-[#020c2b] to-bg to-60%">
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
                        <ProjectCard key={p.id} id={p.id} name={p.name} thumbnail={p.thumbnail} color={p.color} />
                    ))
                }
            </div>
        </section>
    );
} 