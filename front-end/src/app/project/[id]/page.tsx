'use client';
import { useParams } from "next/navigation";
import Image from "next/image";

import ProjectNotFound from "../../project-not-found";

import { TiArrowDown } from "react-icons/ti";
import { GiStripedSun } from "react-icons/gi";
import Link from "next/link";


export default function ProjectPage() {
    const { id } = useParams();

    const projects = [
        { id: '0', name: 'Web portfolio', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', thumbnail: '/images/thumbnail-p-01.jpg', color: '#2196F3', gitHub: 'https://github.com/Alisson014/Portfolio', stacks: [{name: "Desenvolvimento Web", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}, {name: "Node JS", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}, {name: "Tailwind CSS", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}], link: "#" },
        { id: '1', name: 'Monitoramento climático', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae itaque nisi nulla dolore vitae labore totam asperiores suscipit distinctio aspernatur. Cupiditate sint quisquam fugit eos molestiae harum vitae quam dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae itaque nisi nulla dolore vitae labore totam asperiores suscipit distinctio aspernatur. Cupiditate sint quisquam fugit eos molestiae harum vitae quam dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae itaque nisi nulla dolore vitae labore totam asperiores suscipit distinctio aspernatur. Cupiditate sint quisquam fugit eos molestiae harum vitae quam dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae itaque nisi nulla dolore vitae labore totam asperiores suscipit distinctio aspernatur. Cupiditate sint quisquam fugit eos molestiae harum vitae quam dolor.', thumbnail: '/images/thumbnail-p-02.png', color: '#00BCD4', gitHub: 'https://github.com/Alisson014/MonitoramentoClimatico', stacks: [{name: "Desenvolvimento Web", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}, {name: "Node JS", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}, {name: "Tailwind CSS", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}], link: "https://monitoramento-climatico-henna.vercel.app/" },
        { id: '2', name: 'Saúde em Fortaleza', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', thumbnail: '/images/thumbnail-p-03.png', color: '#FDD835', gitHub: 'https://github.com/Alisson014/PrefeituraDeFortaleza', stacks: [{name: "Desenvolvimento Web", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}, {name: "Node JS", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}, {name: "Tailwind CSS", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}], link: "https://alisson014.github.io/PrefeituraDeFortaleza/" },
        { id: '3', name: 'Jeriquaquara', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', thumbnail: '/images/thumbnail-p-04.png', color: '#0ea5e9', gitHub: 'https://github.com/Alisson014/JeriGit', stacks: [{name: "Desenvolvimento Web", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}, {name: "Node JS", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}, {name: "Tailwind CSS", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}], link: "https://alisson014.github.io/JeriGit/" },
        { id: '4', name: 'Livraria HTML', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', thumbnail: '/images/thumbnail-p-05.png', color: '#3F51B5', gitHub: 'https://github.com/Alisson014/All-Books', stacks: [{name: "Desenvolvimento Web", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}, {name: "Node JS", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}, {name: "Tailwind CSS", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}], link: "https://all-books.vercel.app/" },
        { id: '5', name: 'Game Store', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', thumbnail: '/images/thumbnail-p-06.png', color: '#10b981', gitHub: 'https://github.com/vaghenrique/FSN2-GRUPO06-VIDEOGAME', stacks: [{name: "Desenvolvimento Web", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}, {name: "Node JS", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}, {name: "Tailwind CSS", description: "Lorem ipsun dolor sit amet consectetur adipisicing"}], link: "https://vaghenrique.github.io/FSN2-GRUPO06-VIDEOGAME/" },
    ]

    const project = projects.find(p => p.id == id);

    if (!project) return ProjectNotFound();

    return(
        <div className="pt-20  overflow-hidden">
            <div className="w-full relative flex justify-center items-center">
                <Image src={project.thumbnail} alt="Project image" width={1600} height={1600} className="w-full z-10" />
                <div className="absolute w-full top-0 bottom-0 bg-bg/90 z-20 flex flex-col gap-2 md:gap-8 justify-center items-center text-center">
                    {/* <GrDiamond className=" rounded-full p-4" size={84} /> */}
                    <Image src="/images/logo-hero-1.png" alt="Developer Icon" width={80} height={80} />
                    <h1 className="text-2xl md:text-4xl uppercase font-semibold">{project.name}</h1>
                    {/* <hr className="w-3/5 border-none h-0.5 bg-gray-500"/> */}
                    <p className="text-lg md:text-2xl text-gray-400 ">Surpreenda-se com mais um projeto desenvolvido por José Alisson</p>
                    <TiArrowDown className="text-gray-600" size={40} />
                </div>
            </div>

            <div className="w-12/10 px-10 py-12 -ml-5 -rotate-3 bg-linear-to-br from-gray-800 to-gray-950 mt-8 md:-mt-20 relative z-20">
                <div className="rotate-3 py-12 sm:pl-6 max-w-[90vw]">
                    <h1 className="font-semibold text-3xl">Sobre o Projeto</h1>
                    <br/>
                    <p className="text-xl">{project.description}</p>
                    <br /><br /><br /> <br />
                </div>
            </div>

            <div className="flex justify-between items-center flex-wrap gap-20 w-full bg-black relative -mt-20 py-20 px-12 z-30">
                <div className="flex flex-col justify-center items-center gap-2">
                    <h1 className="text-3xl text-gray-400">Stacks utilizadas</h1>
                </div>
                <div className="flex justify-around items-center flex-wrap gap-10 w-7/10 py-5">
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

            <div style={{ background: `${project.color}` }} className="flex justify-around items-center grayscale-10 py-20 px-12 ">
                    <Link href={project.gitHub} target="_blank">
                        <button style={{ color: `${project.color}` }} className="bg-white outline-white outline-2 outline-offset-4 text-xl px-8 py-1 rounded-full cursor-pointer hover:outline-offset-8 hover:scale-110 transition-all duration-200">Git Hub</button>
                    </Link>

                    <Link href={project.link} target="_blank">
                        <button style={{ color: `${project.color}` }} className="bg-white outline-white outline-2 outline-offset-4 text-xl px-8 py-1 rounded-full cursor-pointer hover:outline-offset-8 hover:scale-110 transition-all duration-200">Web Site</button>
                    </Link>
            </div>
        </div>
    );
}