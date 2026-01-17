'use client';
import Link from "next/link";
import Image from "next/image";

import { PiArrowFatLinesDownFill } from "react-icons/pi";

const Navbar = () => {

    return(
        <nav className="fixed top-0 left-0 w-screen flex items-center justify-between bg-nav py-2 px-3 backdrop-blur-sm 
            xl:px-16 lg:px-8
        ">
            <div className="flex justify-center items-center lg:gap-6 gap-2">
                <Image src="/images/logo-image.png" alt="Logo Image" width={70} height={70} />
                <p className="hidden sm:flex">José Alisson</p>
            </div>

            <ul className="hidden lg:flex gap-16 bg-nav py-2.5 px-6 rounded-4xl">
                <li className="hover:text-white transition-all ">
                    <Link href="/">Sobre </Link>
                </li>
                <li className="hover:text-white transition-all ">
                    <Link href="/">Skills</Link>
                </li>
                <li className="hover:text-white transition-all ">
                    <Link href="/">Projetos</Link>
                </li>
                <li className="hover:text-white transition-all ">
                    <Link href="/">Curiosidades</Link>
                </li>
            </ul>

            <ul className="flex items-center justify-center gap-1 sm:gap-4 text-white">
                <li className=" flex items-center justify-center overflow-hidden rounded-full group">
                    <Link className="relative flex items-center justify-center bg-linear-to-br from-blue-500 to-indigo-800 px-7 py-1 " href="/">
                        <p className="relative z-20">Contact</p>
                        <div className="z-10 absolute rounded-full bg-linear-to-br from-gray-700 to-blue-800 p-0 group-hover:p-14 transition-all duration-500"></div>
                    </Link>
                    
                </li>
                <li>
                    <button className="bg-linear-to-b from-card to-gray-800 flex items-center justify-between gap-2 border-2 border-neutral-100 rounded-full px-1.5 py-0.5 cursor-pointer hover:from-white hover:to-white hover:text-black">
                        <PiArrowFatLinesDownFill /> Currículo
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;