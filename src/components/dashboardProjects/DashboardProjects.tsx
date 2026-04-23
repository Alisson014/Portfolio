import { SetStateAction } from "react";

import ProjectCard from "../projectsSection/projectCard";
import ProjectsAddForm from "./ProjectsAddForm";
import ProjectsDeleteForm from "./ProjectsDeleteForm";

import { ProjectsType } from "../mockedData/MockedData";

import { GoProjectSymlink } from "react-icons/go";


type DashboardCuriositiesType = {
    actionType: string,
    Projects: Array<ProjectsType>,
    setIsUpdating: React.Dispatch<SetStateAction<boolean>>,
}

export default function DashboardProjects({ actionType, Projects, setIsUpdating } : DashboardCuriositiesType){

    const components = [
        {
            id: "post",
            component: <ProjectsAddForm setIsUpdating={setIsUpdating} data={Projects} />
        },
        {
            id: "delete",
            component: <ProjectsDeleteForm setIsUpdating={setIsUpdating} data={Projects} />
        }
    ];

    return(
        <div className="w-full h-full py-4 appearAnimation">
            <header className="flex items-center gap-2"> 
                <GoProjectSymlink size={35} />
                <h1 className="text-lg sm:text-3xl font-semibold">Projetos</h1>
            </header>

            <div className={`flex flex-col-reverse md:grid ${actionType == "post" || actionType == "delete" ? 'md:grid-cols-2' : 'grid-cols-1'} gap-2 place-items-start w-full mt-4`}>
                <div className="flex justify-center sm:justify-start flex-wrap gap-4 w-full">
                    {
                        Projects.map(p => (
                            typeof p.thumbnail === 'string' && (
                                <ProjectCard key={p.id} id={p.id} color={p.color} name={p.name} thumbnail={p.thumbnail} isClient={false} />
                            )
                        ))
                    }
                </div>

                {
                    components.find(c => c.id == actionType)?.component
                }
            </div>
        </div>
    );
}