'use client';
import { useEffect, useState } from "react";


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

import { Skills, Certificates, Formation, Projects, aboutMe, Visitors, Curiosities } from "@/src/components/mockedData/MockedData";
import { toast } from "react-toastify";

export default function DashboardPage(){
    const { user } = useContext(AuthContext);
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [data, setData] = useState<string>('Home');
    const [actionType, setActionType] = useState<string>('get');

    const [isUpdatingAboutMe, setIsUpdatingAboutMe] = useState<boolean>(false);
    useEffect(() => {
        async function Refresh(){
            if(isUpdatingAboutMe){
                toast("Home Was updated");
                setIsUpdatingAboutMe(false);
            }
        }

        Refresh();
    }, [isUpdatingAboutMe]);

    const [isUpdatingSkill, setIsUpdatingSkill] = useState<boolean>(false);
    useEffect(() => {
        async function Refresh(){
            if(isUpdatingSkill){
                toast("Skill data updated!");
                setIsUpdatingSkill(false);
            }
        }
        Refresh();
    }, [isUpdatingSkill]);

    const [isUpdatingFormation, setIsUpdatingFormation] = useState<boolean>(false);
    useEffect(() => {
        async function Refresh(){
            if(isUpdatingFormation){
                toast("Formation data updated!");
                setIsUpdatingFormation(false);
            }
        }

        Refresh();
    }, [isUpdatingFormation]);

    const [isUpdatingCertificates, setIsUpdatingCertificates] = useState<boolean>(false);
    useEffect(() => {
        async function Refresh(){
            if(isUpdatingCertificates){
                toast("Certificates data updated!");
                setIsUpdatingCertificates(false);
            }
        }
        Refresh();
    }, [isUpdatingCertificates]);

    const [isUpdatingProject, setIsUpdatingProjects] = useState<boolean>(false);
    useEffect(() => {
        async function Refresh(){
            if(isUpdatingProject){
                toast("Projects data updated!");
                setIsUpdatingProjects(false);
            }
        }

        Refresh();
    }, [isUpdatingProject]);

    const [isUpdatingCuriosities, setIsUpdatingCuriosities] = useState<boolean>(false);
    useEffect(() => {
        async function Refresh(){
            if(isUpdatingCuriosities){
                toast("Curiosities data updated!");
                setIsUpdatingCuriosities(false);
            }
        }

        Refresh();
    }, [isUpdatingCuriosities]);

    const components = [
        {
            id: "Home",
            component: <DashboardHome Certificates={Certificates} Formation={Formation} Projects={Projects} Skills={Skills} Visitors={Visitors} />
        },
        {
            id: "AboutMe",
            component: <DashboardAboutMe actionType={actionType} data={aboutMe} setIsUpdating={setIsUpdatingAboutMe} />
        },
        {
            id: "Skills",
            component: <DashboardSkills Skills={Skills} actionType={actionType} setIsUpdating={setIsUpdatingSkill} />
        },
        {
            id: "Formation",
            component: <DashboardFormation Formation={Formation} actionType={actionType} setIsUpdating={setIsUpdatingFormation} />
        },
        {
            id: "Certificates",
            component: <DashboardCertificates Certificates={Certificates} actionType={actionType} setIsUpdating={setIsUpdatingCertificates} />
        },
        {
            id: "Projects",
            component: <DashboardProjects Projects={Projects} actionType={actionType} setIsUpdating={setIsUpdatingProjects} />
        },
        {
            id: "Curiosities",
            component: <DashboardCuriosities Curiosities={Curiosities} actionType={actionType} setIsUpdating={setIsUpdatingCuriosities} />
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