'use client';
import { SetStateAction } from "react";
import { AbouteMeType } from "@/src/components/mockedData/MockedData";

import { LuSquarePen } from "react-icons/lu";
import AboutMeForm from "./AboutMeForm";

type DashboardAboutMeType = {
    actionType: string,
    data: AbouteMeType,
    setIsUpdating: React.Dispatch<SetStateAction<boolean>>,
}


export default function DashboardAboutMe( { actionType, data, setIsUpdating } : DashboardAboutMeType ){


    return(
        <div className="w-full p-4 mt-4 bg-linear-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl appearAnimation">
            <header className="flex items-center gap-2"> 
                <LuSquarePen size={35} />
                <h1 className="text-lg sm:text-3xl font-semibold">Sobre Mim</h1>
            </header>

            <div className={`flex flex-col-reverse md:grid ${actionType == 'update' ? 'md:grid-cols-2' : 'grid-cols-1'} place-items-stretch mt-4 transition-all duration-500`}>
                <div className="w-full pl-2">
                    <h2 className="text-xl font-medium">Resumo</h2>
                    <p className="mt-1">{data.resume}</p>
                    <br/>
                    <h2 className="text-xl font-medium">Introdução</h2>
                    <p className="mt-1">{data.intrudicing}</p>
                    <br/>
                    <h2 className="text-xl font-medium">Parágrafo 1</h2>
                    <p className="mt-1">{data.paragraph1}</p>
                    <br/>
                    <h2 className="text-xl font-medium">Parágrafo 2</h2>
                    <p className="mt-1">{data.paragraph2}</p>
                    <br/>
                </div>

                {
                    actionType == "update" ? (
                        <AboutMeForm data={ data } setIsUpdating={setIsUpdating} />
                    ) : (
                        <></>
                    )
                }
            </div>
        </div>
    );
}