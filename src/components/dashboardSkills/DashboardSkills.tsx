'use client';
import { SetStateAction } from "react";

import { SkillsType } from "../mockedData/MockedData";

import Skill from "../skillsSection/Skill";
import SkillsAddForm from "./SkillsAddForm";
import SkillsDeleteForm from "./SkillsDeleteForm";
// import SkillsUpdateForm from "./SkillsUpdateForm";

import { RiStackLine } from "react-icons/ri";

type DashboardSkillsType = {
    actionType: string,
    Skills: Array<SkillsType>,
    setIsUpdating: React.Dispatch<SetStateAction<boolean>>,
}

export default function DashboardSkills( { actionType, Skills, setIsUpdating } : DashboardSkillsType ){

    const components = [
        {
            id: 'post',
            component: <SkillsAddForm setIsUpdating={setIsUpdating} />
        },
        {
            id: 'delete',
            component: <SkillsDeleteForm setIsUpdating={setIsUpdating} data={Skills} />
        }
    ];

    return(
        <div className="w-full mt-4 appearAnimation">
            <header className="flex items-center gap-2"> 
                <RiStackLine size={35} />
                <h1 className="text-lg sm:text-3xl font-semibold">Skills</h1>
            </header>
            <div className={`flex flex-col-reverse md:grid ${actionType == 'post' || actionType == 'delete' ? 'md:grid-cols-2' : 'grid-cols-1'} place-items-start w-full mt-4`}>
                <div className="flex justify-center md:justify-start items-start flex-wrap gap-4 mb-4">
                    {
                        Skills.map( skill => (
                            <Skill key={skill.id} description={skill.description} icon={(typeof skill.icon == "string" ? skill.icon : '#')} name={skill.name} />
                        ) )
                    }
                </div>

                {
                    components.find(c => c.id == actionType)?.component
                }

            </div>
        </div>
    );
}