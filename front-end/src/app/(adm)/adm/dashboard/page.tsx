'use client';
import { useState } from "react";


import { AuthContext } from "@/src/app/contexts/AuthContext";
import { useContext } from "react";

import DashboardHeader from "@/src/components/dashboardHeader/DashBoardHeader";
import DashBoardMenu from "@/src/components/dashboardMenu/DashboardMenu";
import DashboardHome from "@/src/components/dashboardHome/DashboardHome";
import DashboardAboutMe from "@/src/components/dashboardAboutMe/DashboardAboutMe";
import DashboardSkills from "@/src/components/dashboardSkills/DashboardSkills";
import DashboardCuriosities from "@/src/components/dashboardCuriosities/DashboardCuriosities";
import DashboardProjects from "@/src/components/dashboardProjects/DashboardProjects";
import DashboardCertificates from "@/src/components/dashboardCertificates/DashboardCertificates";
import DashboardFormation from "@/src/components/dashboardFormation/DashboardFormation";


export default function DashboardPage(){
    const { user } = useContext(AuthContext);
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [data, setData] = useState<string>('Home');
    const [actionType, setActionType] = useState<string>('get');

    const components = [
        {
            id: "Home",
            component: <DashboardHome/>
        },
        {
            id: "AboutMe",
            component: <DashboardAboutMe actionType={actionType} />
        },
        {
            id: "Skills",
            component: <DashboardSkills actionType={actionType} />
        },
        {
            id: "Formation",
            component: <DashboardFormation actionType={actionType} />
        },
        {
            id: "Certificates",
            component: <DashboardCertificates actionType={actionType} />
        },
        {
            id: "Projects",
            component: <DashboardProjects actionType={actionType} />
        },
        {
            id: "Curiosities",
            component: <DashboardCuriosities actionType={actionType} />
        },
        
    ]

    return(
        <div className="w-full p-4 transition-all duration-500"
            style={{ paddingLeft: `${isVisible ? '19.5rem' : '6.5rem'}` }}
        >
            <DashBoardMenu visible={isVisible} setVisible={setIsVisible} setData={setData} data={data} />
            <DashboardHeader userName={user.name} actionType={actionType} setActionType={setActionType} data={data} />
            

            {
                components.find(c => c.id == data)?.component
            }
            
            <br/>
        </div>
    );
}