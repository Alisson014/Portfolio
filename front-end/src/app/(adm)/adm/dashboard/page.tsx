'use client';
import { useState } from "react";


import { AuthContext } from "@/src/app/contexts/AuthContext";
import { useContext } from "react";

import DashboardHeader from "@/src/components/dashboardHeader/DashBoardHeader";
import DashBoardMenu from "@/src/components/dashboardMenu/DashboardMenu";
import DashboardHome from "@/src/components/dashboardHome/DashboardHome";
import DashboardAboutMe from "@/src/components/dashboardAboutMe/DashboardAboutMe";
import DashboardSkills from "@/src/components/dashboardSkills/DashboardSkills";

import DashboardCertificates from "@/src/components/dashboardCertificates/DashboardCertificates";


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
            component: <div className="h-full w-full appearAnimation">Formation</div>
        },
        {
            id: "Certificates",
            component: <DashboardCertificates actionType={actionType} />
        },
        {
            id: "Projects",
            component: <div className="h-full w-full appearAnimation">Projects</div>
        },
        {
            id: "Curiosities",
            component: <div className="h-full w-full appearAnimation">Curiosities</div>
        },
        
    ]

    return(
        <div className="w-full p-4 transition-all duration-500"
            style={{ paddingLeft: `${isVisible ? '19.5rem' : '6.5rem'}` }}
        >
            <DashBoardMenu visible={isVisible} setVisible={setIsVisible} setData={setData} data={data} />
            <DashboardHeader userName={user.name} actionType={actionType} setActionType={setActionType} />
            

            {
                components.find(c => c.id == data)?.component
            }
            
            <br/>
        </div>
    );
}