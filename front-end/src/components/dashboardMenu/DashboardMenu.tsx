'use client';

import Image from "next/image";
import { Dispatch, SetStateAction } from "react";


import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { BsPersonBadge } from "react-icons/bs";
import { MdOutlineSchool } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import { GoProjectSymlink } from "react-icons/go";
import { FiAward } from "react-icons/fi";
import { RiStackLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { HiHome } from "react-icons/hi2";

type DashBoardMenuType = {
    visible: boolean,
    data: string,
    setVisible: Dispatch<SetStateAction<boolean>>,
    setData: Dispatch<SetStateAction<string>>,
}

export default function DashBoardMenu({ visible, data, setVisible, setData } : DashBoardMenuType){

    return(
        <nav className="fixed left-4 h-screen bg-linear-to-br from-gray-900 to-gray-950 border-2 border-gray-700 rounded-2xl text-gray-400 whitespace-nowrap p-4 overflow-x-hidden z-50 overflow-y-scroll transition-all duration-500" 
            style={{ width: `${visible ? '17.5rem' : '5rem'}`, scrollbarWidth: "none" }}
        >
            <button onClick={() => setVisible(prev => !prev)} className=" rounded-lg">
                {
                    visible ? (
                        <IoMdClose size={45} />
                    ) : (
                        <HiMenu size={45} /> 
                    )
                }
            </button>

            <div className="bg-black to-gray-100/20 border border-gray-700 rounded-lg flex items-center gap-8 mt-4">
                <Image src={'/images/logo-hero-1.png'} alt="Icon of the page" width={40} height={40} />
                <h1 className="text-md font-medium">Dashboard</h1>
            </div>
            

            <ul className="w-full mt-10">
                <li className="w-full p-1.5">
                    <button onClick={() => setData("Home")} className="w-full flex items-center gap-8 border border-transparent hover:border-gray-400 hover:bg-black active:scale-95 transition-transform duration-100 cursor-pointer py-2 rounded-lg"
                            style={{ background: `${data == 'Home' ? 'black' : 'transparent' }` }}
                        >
                        <HiHome className="shrink-0" size={32} /> Home
                    </button>
                </li>
                <li className="w-full p-1.5">
                    <button onClick={() => setData("AboutMe")} className="w-full flex items-center gap-8 border border-transparent hover:border-gray-400 hover:bg-black active:scale-95 transition-transform duration-100 cursor-pointer py-2 rounded-lg"
                            style={{ background: `${data == 'AboutMe' ? 'black' : 'transparent' }` }}
                        >
                        <BsPersonBadge className="shrink-0" size={32} /> Sobre mim
                    </button>
                </li>
                <li className="w-full p-1.5">
                    <button onClick={() => setData("Skills")} className="w-full flex items-center gap-8 border border-transparent hover:border-gray-400 hover:bg-black active:scale-95 transition-transform duration-100 cursor-pointer py-2 rounded-lg"
                            style={{ background: `${data == 'Skills' ? 'black' : 'transparent' }` }}
                        >
                        <RiStackLine className="shrink-0" size={32} /> Minhas skills
                    </button>
                </li>
                <li className="w-full p-1.5">
                    <button onClick={() => setData("Formation")} className="w-full flex items-center gap-8 border border-transparent hover:border-gray-400 hover:bg-black active:scale-95 transition-transform duration-100 cursor-pointer py-2 rounded-lg"
                            style={{ background: `${data == 'Formation' ? 'black' : 'transparent' }` }}
                        >
                        <MdOutlineSchool className="shrink-0" size={32} /> Formação acadêmica
                    </button>
                </li>
                <li className="w-full p-1.5">
                    <button onClick={() => setData("Certificates")} className="w-full flex items-center gap-8 border border-transparent hover:border-gray-400 hover:bg-black active:scale-95 transition-transform duration-100 cursor-pointer py-2 rounded-lg"
                            style={{ background: `${data == 'Certificates' ? 'black' : 'transparent' }` }}
                        >
                        <PiCertificate className="shrink-0" size={32} /> Cursos e certificados
                    </button>
                </li>
                <li className="w-full p-1.5">
                    <button onClick={() => setData("Projects")} className="w-full flex items-center gap-8 border border-transparent hover:border-gray-400 hover:bg-black active:scale-95 transition-transform duration-100 cursor-pointer py-2 rounded-lg"
                            style={{ background: `${data == 'Projects' ? 'black' : 'transparent' }` }}
                        >
                        <GoProjectSymlink className="shrink-0" size={32} /> Meus projetos
                    </button>
                </li>
                <li className="w-full p-1.5">
                    <button onClick={() => setData("Curiosities")} className="w-full flex items-center gap-8 border border-transparent hover:border-gray-400 hover:bg-black active:scale-95 transition-transform duration-100 cursor-pointer py-2 rounded-lg"
                            style={{ background: `${data == 'Curiosities' ? 'black' : 'transparent' }` }}
                        >
                        <FiAward className="shrink-0" size={32} /> Curiosidades
                    </button>
                </li>
            </ul>
            {/* <div className="flex justify-center w-full">
                <hr style={{ width: `${visible ? '100%' : '50%'}` }} className="border-none h-0.5 mt-12 rounded-full bg-gray-700 transition-all duration-500"/>
            </div> */}
            <div className="w-full p-1.5 mt-4">
                <button className="w-full flex items-center gap-8 border py-2 rounded-lg active:scale-95 transition-transform duration-100 cursor-pointer hover:bg-black">
                    <CiLogout className="shrink-0" size={28} /> Encerrar sessão
                </button>
            </div>

        </nav>
    );
}