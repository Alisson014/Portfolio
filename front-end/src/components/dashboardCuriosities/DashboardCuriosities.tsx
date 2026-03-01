import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Curiosity from "../curiositiesSection/Curiosity";
import { Curiosities } from "@/src/components/mockedData/MockedData";
import CuriositiesAddForm from "./CuriositiesAddForm";
import CuriositiesDeleteForm from "./CuriositiesDeleteForm";

import { LuAward } from "react-icons/lu";


type DashboardCuriositiesType = {
    actionType: string,
}

export default function DashboardCuriosities({ actionType } : DashboardCuriositiesType){
    const [isUpdating, setIsUpdating] = useState<boolean>(false);

    const components = [
        {
            id: "post",
            component: <CuriositiesAddForm setIsUpdating={setIsUpdating} />
        },
        {
            id: "delete",
            component: <CuriositiesDeleteForm setIsUpdating={setIsUpdating} data={Curiosities} />
        }
    ]

    useEffect(() => {
        if(isUpdating){
            toast("Default data updated");
        }
    },[isUpdating]);

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