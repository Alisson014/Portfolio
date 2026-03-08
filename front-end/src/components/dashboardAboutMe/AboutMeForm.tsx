'use client';
import { ChangeEvent, useState, useContext, SetStateAction, Dispatch } from "react";

import { AbouteMeType } from "../mockedData/MockedData";
import { AuthContext } from "@/src/app/contexts/AuthContext";

import { GrUpdate } from "react-icons/gr";
import { toast } from "react-toastify";

type AboutMeFormType = {
    data : AbouteMeType, 
    setIsUpdating: Dispatch<SetStateAction<boolean>> 
}

export default function AboutMeForm({ data, setIsUpdating } : AboutMeFormType){
    const { GetRecaptcha } = useContext(AuthContext);

    const [aboutMeData, setAboutMeData] = useState<AbouteMeType>( data );

    function onChange( e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ){
        setAboutMeData({...aboutMeData, [e.target.name] : e.target.value})
    }

    async function onSubmit( e: ChangeEvent<HTMLFormElement> ){
        e.preventDefault();
        setIsUpdating(false);

        try {
            if(!aboutMeData.resume || !aboutMeData.intrudicing || !aboutMeData.paragraph1 || !aboutMeData.paragraph2 ){
                throw new Error("Todos os campos devem ser preenchidos");
            }

            const recaptchaSuccess = await GetRecaptcha();

            if(!recaptchaSuccess){
                throw new Error("Erro ao validar teste Recaptcha");
            }

            // Update request

            toast.success("Atualizado!");
            setIsUpdating(true);
            
        } catch (e: unknown) {
            if (e instanceof Error){
                toast.error(e.message);
            }
        }
    }

    return(
        <div className="w-full mb-4 md:-mt-12 bg-linear-to-br from-gray-900 to-gray-950 border border-gray-800 p-4 rounded-lg appearAnimation">
            <header className="flex items-center gap-2">
                <GrUpdate size={22} />
                <h2 className="text-xl font-medium"> Atualizar dados</h2>
            </header>
            <form onSubmit={onSubmit} className="mt-4 flex flex-col items-start contactForm">
                <h3 className="text-lg text-gray-400"> Resumo </h3>
                <textarea onChange={onChange} className="scrollBar" id="resumeId" name="resume" rows={3} value={aboutMeData.resume} required />

                <h3 className="text-lg text-gray-400"> Introdução </h3>
                <textarea onChange={onChange} className="scrollBar" id="resumeId" name="intrudicing" rows={5} value={aboutMeData.intrudicing} required />

                <h3 className="text-lg text-gray-400"> Parágrafo 1 </h3>
                <textarea onChange={onChange} className="scrollBar" id="resumeId" name="paragraph1" rows={5} value={aboutMeData.paragraph1} required />
                
                <h3 className="text-lg text-gray-400"> Parágrafo 2 </h3>
                <textarea onChange={onChange} className="scrollBar" id="resumeId" name="paragraph2" rows={5} value={aboutMeData.paragraph2} required />

                <button className="w-full bg-gray-800 py-3 mt-2 rounded-md hover:bg-gray-950 hover:border cursor-pointer clickedAnimation" type="submit">Atualizar</button>
            </form>
        </div>
    );
}