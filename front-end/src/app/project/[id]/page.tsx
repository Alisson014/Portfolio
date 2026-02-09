'use client';
import { useParams } from "next/navigation";
import ProjectNotFound from "../../project-not-found";
import Image from "next/image";


export default function ProjectPage() {
    const { id } = useParams();

    const projects = [
        { id: '0', title: 'Web portfolio desenvolvido com NextJs', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', thumbnail: '/images/thumbnail-p-01.jpg', color: '#2196F3' },
        { id: '1', title: 'Simulação de monitoramento do clima', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae itaque nisi nulla dolore vitae labore totam asperiores suscipit distinctio aspernatur. Cupiditate sint quisquam fugit eos molestiae harum vitae quam dolor.', thumbnail: '/images/thumbnail-p-02.png', color: '#00BCD4' },
        { id: '2', title: 'Site sobre saúde em Fortaleza', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', thumbnail: '/images/thumbnail-p-03.png', color: '#FDD835' },
        { id: '3', title: 'Site sobre Jeriquaquara', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', thumbnail: '/images/thumbnail-p-04.png', color: '#0ea5e9' },
        { id: '4', title: 'Livraria desenvolvida apenas em HTML', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', thumbnail: '/images/thumbnail-p-05.png', color: '#3F51B5' },
        { id: '5', title: 'Game Store desenvolvida em equipe', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident ipsa vel omnis cupiditate quibusdam, blanditiis porro id iure doloribus doloremque, pariatur dignissimos tempore repellat, velit perferendis reiciendis suscipit deserunt.', thumbnail: '/images/thumbnail-p-06.png', color: '#10b981' },
    ]

    const project = projects.find(p => p.id == id);

    if (!project) return ProjectNotFound();

    return(
        <div>
            <section className="flex justify-around items-center">
                <div className="">
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                </div>
                <Image src={project.thumbnail} alt="Project image" width={600} height={600} className="w-1/2" />
            </section>
            
            
        </div>
    );
}