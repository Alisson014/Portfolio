'use client';
import { useEffect, useState } from "react";

import { Skills } from "../mockedData/MockedData";

import Skill from "../skillsSection/Skill";
import SkillsAddForm from "./SkillsAddForm";
// import SkillsUpdateForm from "./SkillsUpdateForm";
import SkillsDeleteForm from "./SkillsDeleteForm";
import { toast } from "react-toastify";

type DashboardSkillsType = {
    actionType: string,
}

export default function DashboardSkills( { actionType } : DashboardSkillsType ){
    const [isUpdating, setIsUpdating] = useState<boolean>(false);

    const components = [
        {
            id: 'post',
            component: <SkillsAddForm setIsUpdating={setIsUpdating} />
        },
        {
            id: 'delete',
            component: <SkillsDeleteForm setIsUpdating={setIsUpdating} data={Skills} />
        }
    ]


    useEffect(() => {
        if(isUpdating){
            toast("Get data updated!");
        }
    }, [isUpdating]);

    return(
        <div className={`flex flex-col-reverse md:grid ${actionType == 'post' || actionType == 'delete' ? 'md:grid-cols-2' : 'grid-cols-1'} place-items-start w-full mt-4 appearAnimation`}>
            <div className="flex justify-center md:justify-start items-start flex-wrap gap-4 mb-4">
                {
                    Skills.map( skill => (
                        <Skill key={skill.id} description={skill.description} icon={skill.icon} name={skill.name} />
                    ) )
                }
            </div>

            {
                components.find(c => c.id == actionType)?.component
            }

        </div>
    );
}