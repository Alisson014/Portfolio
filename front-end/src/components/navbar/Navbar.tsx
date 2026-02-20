'use client';
import Link from "next/link";
import Image from "next/image";

import { PiArrowFatLinesDownFill } from "react-icons/pi";

const Navbar = () => {
    const handleScrollHome = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    const handleScrollSkill = () => {
        const pos = document.getElementById('skillId');

        window.scrollTo({
            top: (pos?.offsetTop ?? 0) - 70,
            behavior: "smooth", 
        })
    }

    const handleScrollProjects = () => {
        const pos = document.getElementById('projectId');

        window.scrollTo({
            top: (pos?.offsetTop ?? 0) - 70,
            behavior: "smooth", 
        })
    }

        const handleScrollCuriosities = () => {
        const pos = document.getElementById('curiosityId');

        window.scrollTo({
            top: (pos?.offsetTop ?? 0) - 70,
            behavior: "smooth", 
        })
    }

    return(
        <nav className="fixed z-50 top-0 left-0 w-screen flex items-center justify-between bg-nav py-2 px-3 backdrop-blur-sm 
            xl:px-16 lg:px-8
        ">
            <Link href={"/"}>
                <div className="flex justify-center items-center lg:gap-6 gap-2">
                    <Image src="/images/logo-image.png" alt="Logo Image" width={70} height={70} />
                    <p className="hidden sm:flex clickedAnimation">José Alisson</p>
                </div>
            </Link>

            <ul className="hidden lg:flex gap-16 bg-nav py-2.5 px-6 rounded-4xl">
                <li className="hover:text-white transition-all clickedAnimation">
                    <Link href="/" onClick={handleScrollHome} >Home </Link>
                </li>
                <li className="hover:text-white transition-all clickedAnimation">
                    <Link onClick={handleScrollSkill} href="/">Skills</Link>
                </li>
                <li className="hover:text-white transition-all clickedAnimation">
                    <Link onClick={handleScrollProjects} href="/">Projetos</Link>
                </li>
                <li className="hover:text-white transition-all clickedAnimation">
                    <Link onClick={handleScrollCuriosities} href="/">Curiosidades</Link>
                </li>
            </ul>

            <ul className="flex items-center justify-center gap-1 sm:gap-4 text-white">
                <li className=" flex items-center justify-center overflow-hidden rounded-full group clickedAnimation">
                    <Link className="relative flex items-center justify-center bg-linear-to-br from-blue-500 to-indigo-800 px-7 py-1 " href="/contact">
                        <p className="relative z-20">Contato</p>
                        <div className="z-10 absolute rounded-full bg-linear-to-br from-gray-700 to-blue-800 p-0 group-hover:p-14 transition-all duration-500 "></div>
                    </Link>
                    
                </li>
                <li>
                    <Link href="/Curriculo (1).pdf" target="_blank">
                        <button className="bg-linear-to-b from-card to-gray-800 flex items-center justify-between gap-2 border-2 border-neutral-100 rounded-full px-1.5 py-0.5 cursor-pointer hover:from-white hover:to-white hover:text-black clickedAnimation">
                            <PiArrowFatLinesDownFill /> Currículo
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;