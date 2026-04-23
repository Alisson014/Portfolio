'use client';
import { SetStateAction } from "react";

import FormationCard from "../formationSection/FormationCard";
import FormationAddForm from "./FormationAddForm";
import FormationUpdateForm from "./FormationUpdateForm";
import FormationDeleteForm from "./FormationDeleteForm";

import { FormationType } from "../mockedData/MockedData";

import { MdOutlineSchool } from "react-icons/md";



type DashboardFormationType = {
    actionType: string,
    Formation: Array<FormationType>,
    setIsUpdating: React.Dispatch<SetStateAction<boolean>>,
}

export default function DashboardFormation({ actionType, Formation, setIsUpdating } : DashboardFormationType){

    const components = [
        {
            id: "post",
            component: <FormationAddForm setIsUpdating={setIsUpdating} />
        },
        {
            id: "update",
            component: <FormationUpdateForm Formation={Formation} setIsUpdating={setIsUpdating} />
        },
        {
            id: "delete",
            component: <FormationDeleteForm setIsUpdating={setIsUpdating} data={Formation} />
        }
    ]

    return(
        <div className="w-full py-4 appearAnimation">
            <header className="flex items-center gap-2"> 
                <MdOutlineSchool size={35} />
                <h1 className="text-lg sm:text-3xl font-semibold">Certificados</h1>
            </header>

            <div className={`flex flex-col-reverse md:grid ${actionType == "post" || actionType == "update" || actionType == "delete" ? 'md:grid-cols-2' : 'grid-cols-1'} gap-4 place-items-start w-full mt-4`}>
                <div className="w-full">
                    {
                        Formation.map(f => (
                            <FormationCard key={f.id} id={f.id} name={f.name} description={f.description} isClient={false} />
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