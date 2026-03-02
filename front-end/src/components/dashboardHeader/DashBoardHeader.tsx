'use client';
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

import { MdOutlineMailOutline, MdDeleteOutline } from "react-icons/md";
import { FaList } from "react-icons/fa6";
import { IoAddOutline } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";

type DashBoardHeaderType = {
    userName: string,
    actionType: string,
    setActionType: Dispatch<SetStateAction<string>>,
    data: string,
}

export default function DashboardHeader( { userName, actionType, setActionType, data } : DashBoardHeaderType){
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
        <header className="flex flex-col justify-between w-full bg-linear-to-br from-gray-900 to-gray-950 border-2 border-gray-800 h-25 sm:h-36 rounded-2xl p-3 sm:p-4">
            <div className="flex justify-between items-center flex-wrap gap-y-2 w-full">
                <h1 className=" sm:text-2xl font-semibold">{ greeting }, {userName}</h1>

                <ul className="hidden sm:flex justify-end items-center gap-0.5 sm:gap-2">
                    <li>
                        <button className="border-2 text-gray-500 p-1.5 rounded-full clickedAnimation cursor-pointer">
                            <MdOutlineMailOutline size={22} />
                        </button>
                    </li>
                    <li>
                        <button className="flex justify-center items-center rounded-full overflow-hidden">
                            <Image src={"https://github.com/Alisson014.png"} alt="user image" width={45} height={45} />
                        </button>
                    </li>
                </ul>
            </div>

            <ul className="flex justify-start items-center gap-1 sm:gap-4 w-full text-left my-2 font-semibold">
                <li>
                    <button onClick={() => setActionType("get")} className="flex justify-between items-center w-fil md:w-30 lg:w-40 bg-gray-800 py-2 px-2 lg:px-4 rounded-lg border-l-green-500 border-l-3 clickedAnimation cursor-pointer"
                        style={{ background: `${actionType == "get" ? 'black' : ''}` }}    
                    >
                        <p className="hidden md:block">Registros</p> <FaList size={15} />
                    </button>
                </li>
                {   !(data == "AboutMe") &&
                    <li>
                        <button onClick={() => setActionType("post")} className="flex justify-between items-center w-fil md:w-30 lg:w-40 bg-gray-800 py-2 px-2 lg:px-4 rounded-lg border-l-blue-500 border-l-3  clickedAnimation cursor-pointer"
                            style={{ background: `${actionType == "post" ? 'black' : ''}` }}    
                        >
                            <p className="hidden md:block">Adicionar</p> <IoAddOutline size={20} />
                        </button>
                    </li>
                }
                { (data == "AboutMe" || data == "Formation" || data == "Home") &&
                    <li>
                        <button onClick={() => setActionType("update")} className="flex justify-between items-center w-fil md:w-30 lg:w-40 bg-gray-800 py-2 px-2 lg:px-4 rounded-lg border-l-yellow-500 border-l-3 clickedAnimation cursor-pointer"
                            style={{ background: `${actionType == "update" ? 'black' : ''}` }}    
                        >
                            <p className="hidden md:block">Atualizar</p> <GrUpdate size={15} />
                        </button>
                    </li>
                }
                {   !(data == "AboutMe") &&
                    <li>
                        <button onClick={() => setActionType("delete")} className="flex justify-between items-center w-fil md:w-30 lg:w-40 bg-gray-800 py-2 px-2 lg:px-4 rounded-lg border-l-red-500 border-l-3 clickedAnimation cursor-pointer"
                            style={{ background: `${actionType == "delete" ? 'black' : ''}` }}    
                        >
                            <p className="hidden md:block">Deletar</p> <MdDeleteOutline size={20} />
                        </button>
                    </li>
                }
            </ul>
        </header>
    );
}