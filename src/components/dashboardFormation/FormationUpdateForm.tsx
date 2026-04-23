'use client';
import { ChangeEvent, Dispatch, SetStateAction, useState, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "@/src/app/contexts/AuthContext";

import { FormationType } from "../mockedData/MockedData";

import { GrUpdate } from "react-icons/gr";
import DashboardButton from "../buttons/DashboardButton";

type CertificatesAddFormType = {
    setIsUpdating: Dispatch<SetStateAction<boolean>>,
    Formation: Array<FormationType>,
}

export default function FormationUpdateForm( { setIsUpdating, Formation } : CertificatesAddFormType ){
    const time = new Date();
    const { GetRecaptcha } = useContext(AuthContext);
    const [FormationFormData, setCertificateFormData] = useState<FormationType>({ id: 1, name: '', description: '', addedAt: '' });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function onChange(e: ChangeEvent<HTMLInputElement>){
        setCertificateFormData({...FormationFormData, [e.target.name]: e.target.value});
        setCertificateFormData(prev => ({...prev, addedAt: time.toISOString()}));
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        setIsLoading(true);

        try {
            if (!FormationFormData.id || !FormationFormData.name || !FormationFormData.description || !FormationFormData.addedAt){
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

            toast.success("Atualizado!");
            setCertificateFormData({ id: 1, name: '', description: '', addedAt: '' });
            
        } catch (e : unknown) {
            if ( e instanceof Error){
                toast.error(e.message);
            }
        } finally {
            setIsLoading(false);
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

                <DashboardButton isLoading={isLoading} label="Atualizar" />
            </form>
        </div>
    );
}