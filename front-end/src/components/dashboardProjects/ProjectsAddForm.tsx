'use client';
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { ProjectsType, ImportProjectType } from "../mockedData/MockedData";

import { IoAddOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import ModalAddProject from "./ModalAddProjects";

type ProjectsAddFormType = {
    setIsUpdating: Dispatch<SetStateAction<boolean>>,
    data: Array<ProjectsType>,
}

export default function ProjectsAddForm({ setIsUpdating, data } : ProjectsAddFormType){
    const [projects, setProjects] = useState<ImportProjectType[]>([]);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [importedPorject, setImportedProject] = useState<ImportProjectType>({ id: 0, name: '', description: '', created_at: '', homepage: '', html_url: '' }); 

    const fetchRepositories = async () => {
        try {            
            const response = await fetch('/api/get-repositories', { method: "GET" });
            const repoData = await response.json();
            
            if(!await repoData.success){
                throw new Error("Erro ao buscar repositórios");
            }
            
            return repoData.data;
                
        } catch (e : unknown) {
            if (e instanceof Error){
                toast.error(e.message);
            }
        }
        
    };

    useEffect(() => {
        fetchRepositories().then((response) => {
            if(response){
                const unUsed = response.filter( (proj: ImportProjectType) => !data.some(p => p.id === proj.id) && proj.homepage != null );

                setProjects(unUsed);
            }
        });
    }, [data]);


    return(
        <div className="w-full bg-linear-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl appearAnimation p-2 sm:p-4 ">
            <header className="flex items-center gap-2">
                <IoAddOutline size={35} />
                <h1 className="text-lg sm:text-2xl font-semibold">Adicionar Projeto</h1>
            </header>

            <table className="rounded-lg mt-4 w-full border overflow-hidden">
                <thead className="bg-gray-300 text-black rounded-t-md">
                    <tr className="grid grid-cols-2 sm:grid-cols-3 py-3 px-2 sm:px-4 font-semibold text-lg">
                        <td>Nome:</td>
                        <td className="hidden sm:block">Criado em:</td>
                    </tr>
                </thead>
                <tbody className="block max-h-100 overflow-y-scroll scrollBar">
                    {
                        projects.map(r => (
                            <tr key={r.id} className="grid grid-cols-2 sm:grid-cols-3 border-t border-gray-800 bg-black w-full py-4 pl-2 sm:pl-4 pr-2 sm:pr-8 hover:bg-gray-950">
                                <td className="flex justify-start items-center text-ellipsis whitespace-nowrap overflow-hidden">{r.name}</td>
                                <td className="hidden sm:flex justify-center items-center">{r.created_at.slice(0, 10)}</td>
                                <td className="flex justify-end items-center">
                                    <button onClick={() => { setIsActive(true); setImportedProject(projects[projects.indexOf(r)]) }} className="bg-white text-black py-1 px-4 rounded-md cursor-pointer hover:bg-gray-300">Add</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {
                importedPorject.id != 0 && <ModalAddProject ImportedProject={importedPorject} isActive={isActive} setIsActive={setIsActive} setIsUpdating={setIsUpdating} />
            }
        </div>
    );
}