'use client';
import { SetStateAction } from "react";
import { toast } from "react-toastify";

import { MdDeleteOutline } from "react-icons/md";

type ModalDeleteMessageType = {
    index: number,
    isActive: boolean,
    setIsActive: React.Dispatch<SetStateAction<boolean>>,
}

export default function ModalDeleteMessage({ index, isActive, setIsActive } : ModalDeleteMessageType ){

    async function handleDelete(){
        try {
            if(!index){
                throw new Error("Uma mensagem deve ser selecionada");
            }

            //Delete request
            toast.success("Mensagem deletada!");
            setIsActive(false);
            
        } catch (e: unknown) {
            if(e instanceof Error){
                toast.error(e.message);
            }
        }
    }

    return(
        <div onClick={() => setIsActive(false)} className={`fixed flex justify-center items-center top-0 left-0 w-screen h-screen ${isActive ? 'opacity-100 mt-0 z-50' : 'opacity-0 mt-10 -z-10'} bg-black/50 transition-all duration-500`}>
            <div onClick={(e) => e.stopPropagation()} className={`flex flex-col justify-center items-center w-75 p-4 bg-gray-900 rounded-2xl overflow-hidden`}>
                <MdDeleteOutline className="group-hover:fill-red-500" size={30} />
                <h1 className="text-xl font-semibold">Deletar Formação?</h1>
                <p className="max-w-75 text-center text-gray-400 mt-2">Esta é uma ação permanente e não poderá ser desfeita</p>
                <div className="flex justify-around items-center w-full mt-4">
                    <button onClick={() => setIsActive(false)} className="border py-1 w-30 rounded-full cursor-pointer hover:bg-gray-800">Cancelar</button>
                    <button onClick={handleDelete} className="border border-transparent py-1 w-30 rounded-full bg-red-700 cursor-pointer hover:border-text">Deletar</button>
                </div>
            </div>
        </div>
    );
}