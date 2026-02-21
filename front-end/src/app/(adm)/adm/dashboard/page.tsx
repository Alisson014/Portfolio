'use client';
import { useState } from "react";


import { AuthContext } from "@/src/app/contexts/AuthContext";
import { useContext } from "react";

import DashboardHeader from "@/src/components/dashboardHeader/DashBoardHeader";
import DashBoardMenu from "@/src/components/dashboardMenu/DashboardMenu";



export default function DashboardPage(){
    const { user } = useContext(AuthContext);
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [data, setData] = useState<string>('AboutMe');
    const [actionType, setActionType] = useState<string>('get');

    return(
        <div className="w-full h-full p-4 bg-radial from-blue-950/20 to-black transition-all duration-500"
            style={{ paddingLeft: `${isVisible ? '19.5rem' : '7rem'}` }}
        >
            <DashBoardMenu visible={isVisible} setVisible={setIsVisible} setData={setData} data={data} />
            <DashboardHeader userName={user.name} actionType={actionType} setActionType={setActionType} />
            <button onClick={() => setIsVisible(prev => !prev)}>Menu - </button>
            {data} - {actionType}
        </div>
    );
}