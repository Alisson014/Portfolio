'use client';
import { useEffect, useState } from "react";
import { aboutMe } from "@/src/components/mockedData/MockedData";

import { LuSquarePen } from "react-icons/lu";
import AboutMeForm from "./AboutMeForm";
import { toast } from "react-toastify";


export default function DashboardAboutMe( { actionType } : { actionType: string } ){
    const [isUpdating, setIsUpdating] = useState<boolean>(false);

    useEffect(() => {
        if (isUpdating){
            toast("Atualizando texto default");
        }
    },[isUpdating]);

    return(
        <div className="w-full p-4 mt-4 bg-linear-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl appearAnimation">
            <header className="flex items-center gap-2"> 
                <LuSquarePen size={35} />
                <h1 className="text-lg sm:text-3xl font-semibold">Sobre Mim</h1>
            </header>

            <div className={`flex flex-col-reverse md:grid ${actionType == 'update' ? 'md:grid-cols-2' : 'grid-cols-1'} place-items-stretch mt-4 transition-all duration-500`}>
                <div className="w-full pl-2">
                    <h2 className="text-xl font-medium">Resumo</h2>
                    <p className="mt-1">{aboutMe.resume}</p>
                    <br/>
                    <h2 className="text-xl font-medium">Introdução</h2>
                    <p className="mt-1">{aboutMe.intrudicing}</p>
                    <br/>
                    <h2 className="text-xl font-medium">Parágrafo 1</h2>
                    <p className="mt-1">{aboutMe.paragraph1}</p>
                    <br/>
                    <h2 className="text-xl font-medium">Parágrafo 2</h2>
                    <p className="mt-1">{aboutMe.paragraph2}</p>
                    <br/>
                </div>

                {
                    actionType == "update" ? (
                        <AboutMeForm data={ aboutMe } setIsUpdating={setIsUpdating} />
                    ) : (
                        <></>
                    )
                }
            </div>
        </div>
    );
}