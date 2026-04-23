'use client';
import { Dispatch, SetStateAction, useState } from "react";

import ModalDeleteProjects from "./ModalDeleteProjects";

import { ProjectsType } from "../mockedData/MockedData";
import { MdDeleteOutline } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";

type SkillsAddDeleteType = {
    setIsUpdating: Dispatch<SetStateAction<boolean>>,
    data: Array<ProjectsType>,
}

export default function ProjectsDeleteForm( { setIsUpdating, data } : SkillsAddDeleteType ){
    const [items, setItems] = useState<Array<number>>([]);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    function appendItem(id: number){
        if(items.includes(id)){
            setItems(prevItems => prevItems.filter(i => i !== id));
        } else {
            setItems(prevItems => [...prevItems, id]);
        }
    }

    return(
        <div className="w-full bg-black border border-gray-700 rounded-lg p-4 appearAnimation">
            <header className="flex items-center gap-2">
                <MdDeleteOutline size={35} />
                <h1 className="text-lg sm:text-2xl font-semibold">Deletar Projeto</h1>
            </header>
            <div className="flex flex-col items-center gap-2 mt-4">
                {
                    data.map( d => (
                        <article key={d.id} onClick={() => appendItem(d.id)} className="flex justify-between items-center w-full bg-gray-950 border border-gray-700 py-3 px-3 rounded-lg group hover:scale-103 transition-all duration-200 cursor-pointer" style={{ backgroundColor: ` ${items.includes(d.id) ? '#B91C1C' : '' }` }}>
                        <div className="flex items-center gap-3">
                            <GoProjectSymlink size={30} />
                            <p>{d.name}</p>
                        </div>

                        <MdDeleteOutline className="group-hover:fill-red-500" size={30} />
                    </article>
                    ) )
                }
                <button onClick={() => setIsVisible(true)} className="w-full py-3 mt-4 bg-gray-900 rounded-lg border border-transparent hover:border-text hover:bg-gray-950 clickedAnimation cursor-pointer">Deletar</button>
            </div>

            <ModalDeleteProjects ids={items} setItems={setItems} isVisible={isVisible} setIsVisible={setIsVisible} setIsUpdating={setIsUpdating} />
        </div>
    );
}