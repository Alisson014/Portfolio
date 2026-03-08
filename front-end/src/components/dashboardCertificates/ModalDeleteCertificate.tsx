'use client';

import { Dispatch, SetStateAction, useContext } from "react";

import { AuthContext } from "@/src/app/contexts/AuthContext";

import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

type ModalDeleteSkillType = {
    setIsVisible: Dispatch<SetStateAction<boolean>>, 
    setIsUpdating: Dispatch<SetStateAction<boolean>>, 
    setItems: Dispatch<SetStateAction<Array<number>>>, 
    isVisible: boolean, 
    ids: Array<number>,
}

export default function ModalDeleteCertificate({ setIsVisible, isVisible, setIsUpdating, ids, setItems } : ModalDeleteSkillType){
    const { GetRecaptcha } = useContext(AuthContext);

    async function handleDelete(){

        try {
            if (ids.length == 0){
                throw new Error("Selecione ao menos um certificado");
            }

            const recaptchaSuccess = await GetRecaptcha();

            if (!recaptchaSuccess){
                throw new Error("Falha ao validar teste recaptcha");
            }

            // Delete request
            setIsUpdating(true);
            setItems([]);
            toast.success("Deletado!");
            setIsVisible(false);

        } catch (e : unknown) {
            if (e instanceof Error) {
                toast.error(e.message);
            }
        }
    }

    return(
        <div onClick={() => setIsVisible(false)} className={`fixed flex justify-center items-center top-0 left-0 w-screen h-screen z-40 bg-black/50 transition-all duration-300`}
            style={{opacity: `${isVisible ? '1.5' : '0'}`,zIndex: `${isVisible ? '50' : '-10'}`, marginTop: `${isVisible ? '0px' : '80px'}` }}    
        >
            <div onClick={(e) => e.stopPropagation()} className={`flex flex-col justify-center items-center w-75 p-4 bg-gray-900 rounded-2xl overflow-hidden`}>
                <MdDeleteOutline className="group-hover:fill-red-500" size={30} />
                <h1 className="text-xl font-semibold">Deletar Certificado?</h1>
                <p className="max-w-75 text-center text-gray-400 mt-2">Esta é uma ação permanente e não poderá ser desfeita</p>
                <div className="flex justify-around items-center w-full mt-4">
                    <button onClick={() => setIsVisible(false)} className="border py-1 w-30 rounded-full cursor-pointer hover:bg-gray-800">Cancelar</button>
                    <button onClick={handleDelete} className="border border-transparent py-1 w-30 rounded-full bg-red-700 cursor-pointer hover:border-text">Deletar</button>
                </div>
            </div>
        </div>
    );
}