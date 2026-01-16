'use client';
import Image from "next/image";
import Link from "next/link";

import { SiLinkedin } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";

const Navbar = () => {

    return(
        <nav className="fixed top-0 left-0 w-screen flex items-center justify-around bg-nav py-2 backdrop-blur-sm ">
            <div>
                {/* <Image src={"#"} alt="Logo Image" /> */}
                José Alisson
            </div>

            <ul className="flex gap-16 bg-nav py-2.5 px-6 rounded-4xl">
                <li>
                    <Link href="/">Sobre </Link>
                </li>
                <li>
                    <Link href="/">Skills</Link>
                </li>
                <li>
                    <Link href="/">Projetos</Link>
                </li>
                <li>
                    <Link href="/">Curiosidades</Link>
                </li>
            </ul>

            <ul className="flex items-center justify-center gap-1 text-white">
                {/* <li>
                    <Link href="/">
                        <CiLinkedin  className="text-2xl" />
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <SiLinkedin className="text-2xl" />
                    </Link>
                </li> */}
                <li>
                    <button >
                        {/* <Image></Image> */}
                    </button>
                </li>
                <li>
                    <Link className="bg-linear-to-br from-blue-500 to-indigo-800 px-7 pt-1.5 pb-2 rounded-full" href="/">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;