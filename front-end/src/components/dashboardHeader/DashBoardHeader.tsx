'use client';
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

import { MdOutlineMailOutline, MdDeleteOutline } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaList } from "react-icons/fa6";
import { IoAddOutline } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";

type DashBoardHeaderType = {
    userName: string,
    actionType: string,
    setActionType: Dispatch<SetStateAction<string>>,
}

export default function DashboardHeader( { userName, actionType, setActionType } : DashBoardHeaderType){
    function getDate() {
        const time = new Date();
        const hour = time.getHours();

        if (Number(hour) < 12){
            return "Bom dia";
        } else if (Number(hour) < 18) {
            return "Boa tarde";
        } else if (Number(hour) < 24){
            return "Boa noite";
        }

        return "Bem-vindo";
    };

    const greeting = getDate();

//bg-[url('/images/24681296_6940220.jpg')] bg-cover bg-center
    return(
        <header className="flex flex-col justify-between w-full bg-linear-to-br from-gray-900 to-gray-950 border-2 border-gray-800 min-h-40 rounded-2xl p-5">
            <div className="flex justify-between items-center w-full">
                <h1 className="text-2xl font-semibold">{ greeting }, {userName}</h1>

                <ul className="flex justify-end items-center gap-2">
                    <li>
                        <button className="border-2 text-gray-500 p-1.5 rounded-full clickedAnimation cursor-pointer">
                            <MdOutlineMailOutline size={22} />
                        </button>
                    </li>
                    <li>
                        <button className="border-2 text-gray-500 p-1.5 rounded-full clickedAnimation cursor-pointer">
                            <IoMdNotificationsOutline size={22} />
                        </button>
                    </li>
                    <li>
                        <button className="flex justify-center items-center rounded-full overflow-hidden">
                            <Image src={"https://github.com/Alisson014.png"} alt="user image" width={45} height={45} />
                        </button>
                    </li>
                </ul>
            </div>

            <ul className="flex justify-start items-center gap-4 w-full text-left font-semibold">
                <li>
                    <button onClick={() => setActionType("get")} className="flex justify-between items-center min-w-40 bg-gray-800 py-2 rounded-lg border-l-green-500 border-l-3 px-4 clickedAnimation cursor-pointer"
                        style={{ background: `${actionType == "get" ? 'black' : ''}` }}    
                    >
                        Registros <FaList size={15} />
                    </button>
                </li>
                <li>
                    <button onClick={() => setActionType("post")} className="flex justify-between items-center min-w-40 bg-gray-800 py-2 rounded-lg border-l-blue-500 border-l-3 px-4 clickedAnimation cursor-pointer"
                        style={{ background: `${actionType == "post" ? 'black' : ''}` }}    
                    >
                        Adicionar <IoAddOutline size={20} />
                    </button>
                </li>
                <li>
                    <button onClick={() => setActionType("update")} className="flex justify-between items-center min-w-40 bg-gray-800 py-2 rounded-lg border-l-yellow-500 border-l-3 px-4 clickedAnimation cursor-pointer"
                        style={{ background: `${actionType == "update" ? 'black' : ''}` }}    
                    >
                        Atualizar <GrUpdate size={15} />
                    </button>
                </li>
                <li>
                    <button onClick={() => setActionType("delete")} className="flex justify-between items-center min-w-40 bg-gray-800 py-2 rounded-lg border-l-red-500 border-l-3 px-4 clickedAnimation cursor-pointer"
                        style={{ background: `${actionType == "delete" ? 'black' : ''}` }}    
                    >
                        Deletar <MdDeleteOutline size={20} />
                    </button>
                </li>
            </ul>
        </header>
    );
}