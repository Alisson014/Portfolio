'use client';
import { ChangeEvent, Dispatch, SetStateAction, useState, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "@/src/app/contexts/AuthContext";

import { Formation, FormationType } from "../mockedData/MockedData";

import { GrUpdate } from "react-icons/gr";

type CertificatesAddFormType = {
    setIsUpdating: Dispatch<SetStateAction<boolean>>,
}

export default function FormationUpdateForm( { setIsUpdating } : CertificatesAddFormType ){
    const { GetRecaptcha } = useContext(AuthContext);

    const [FormationFormData, setCertificateFormData] = useState<FormationType>({ id: 1, name: '', description: '' });


    function onChange(e: ChangeEvent<HTMLInputElement>){
        setCertificateFormData({...FormationFormData, [e.target.name]: e.target.value});
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        setIsUpdating(false);

        try {
            if (!FormationFormData.id || FormationFormData.name == "" || FormationFormData.description == ""){
                throw new Error("Todos os campos devem ser preenchidos");
            }

            if (!Formation.find(f => f.id == FormationFormData.id)){
                throw new Error("Informe um ID válido");
            }

            const recaptchaSuccess = await GetRecaptcha();

            if(!recaptchaSuccess){
                throw new Error("Falha ao validar teste recaptcha");
            }

            setIsUpdating(true);

            // Post request

            toast.success("Formação Atualizada!");
            setCertificateFormData({ id: 1, name: '', description: '' });
            
        } catch (e : unknown) {
            if ( e instanceof Error){
                toast.error(e.message);
            }
        }

    } 

    return(
        <div className="w-full bg-linear-to-br from-gray-900 to-gray-950 border border-gray-700 rounded-lg p-4 mb-4 appearAnimation">
            <header className="flex items-center gap-2">
                <GrUpdate size={35} />
                <h1 className="text-lg sm:text-2xl font-semibold">Atualizar Formação</h1>
            </header>
            <form onSubmit={onSubmit} className="contactForm flex flex-col items-start justify-start">    
                <input onChange={onChange} value={FormationFormData.id} type="text" name="id" id="FormationId" placeholder="Id do registro:" required />

                <input onChange={onChange} value={FormationFormData.name} type="text" name="name" id="FormationNameId" placeholder="Nome da instiituição: " required />

                <input onChange={onChange} value={FormationFormData.description} type="text" name="description" id="FormationDescriptionId" placeholder="Descrição: " required />

                <button type="submit" className="w-full py-3 mt-4 bg-gray-900 rounded-md hover:bg-gray-950 border border-transparent hover:border-text cursor-pointer clickedAnimation">
                    Adicionar
                </button>
            </form>
        </div>
    );
}