'use client';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import FormationCard from "../formationSection/FormationCard";
import FormationAddForm from "./FormationAddForm";
import FormationUpdateForm from "./FormationUpdateForm";
import FormationDeleteForm from "./FormationDeleteForm";
import { Formation as FormationData } from "../mockedData/MockedData";

import { MdOutlineSchool } from "react-icons/md";



type DashboardFormationType = {
    actionType: string,
}

export default function DashboardFormation({ actionType } : DashboardFormationType){

    const [isUpdating, setIsUpdating] = useState<boolean>(false);

    const components = [
        {
            id: "post",
            component: <FormationAddForm setIsUpdating={setIsUpdating} />
        },
        {
            id: "update",
            component: <FormationUpdateForm setIsUpdating={setIsUpdating} />
        },
        {
            id: "delete",
            component: <FormationDeleteForm setIsUpdating={setIsUpdating} data={FormationData} />
        }
    ]


    useEffect(() => {
        if(isUpdating){
            toast("Registros atualizados");
        }
    },[isUpdating]);

    return(
        <div className="w-full py-4 appearAnimation">
            <header className="flex items-center gap-2"> 
                <MdOutlineSchool size={35} />
                <h1 className="text-lg sm:text-3xl font-semibold">Certificados</h1>
            </header>

            <div className={`flex flex-col-reverse md:grid ${actionType == "post" || actionType == "update" || actionType == "delete" ? 'md:grid-cols-2' : 'grid-cols-1'} gap-4 place-items-start w-full mt-4`}>
                <div className="w-full">
                    {
                        FormationData.map(f => (
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