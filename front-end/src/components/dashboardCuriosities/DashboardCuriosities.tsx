import { SetStateAction } from "react";

import Curiosity from "../curiositiesSection/Curiosity";
import CuriositiesAddForm from "./CuriositiesAddForm";
import CuriositiesDeleteForm from "./CuriositiesDeleteForm";

import { CuriositiesType } from "@/src/components/mockedData/MockedData";

import { LuAward } from "react-icons/lu";


type DashboardCuriositiesType = {
    actionType: string,
    Curiosities: Array<CuriositiesType>,
    setIsUpdating: React.Dispatch<SetStateAction<boolean>>,
}

export default function DashboardCuriosities({ actionType, Curiosities, setIsUpdating } : DashboardCuriositiesType){

    const components = [
        {
            id: "post",
            component: <CuriositiesAddForm setIsUpdating={setIsUpdating} />
        },
        {
            id: "delete",
            component: <CuriositiesDeleteForm setIsUpdating={setIsUpdating} data={Curiosities} />
        }
    ];

    return(
        <div className="w-full h-full py-4 appearAnimation">
            <header className="flex items-center gap-2"> 
                <LuAward size={35} />
                <h1 className="text-lg sm:text-3xl font-semibold">Curiosidades</h1>
            </header>

            <div className={`flex flex-col-reverse md:grid ${actionType == "post" || actionType == "delete" ? 'md:grid-cols-2' : 'grid-cols-1'} gap-2 place-items-start w-full mt-4`}>
                <div className="flex justify-center sm:justify-start flex-wrap gap-4 w-full">
                    {
                        Curiosities.map(c => (
                            <Curiosity key={c.id} name={c.name} image={typeof c.image === 'string' ? c.image : '#'} description={c.description} link={c.link} />
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