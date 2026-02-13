import { IoChatbubblesOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { SiInstagram } from "react-icons/si";
import { RiMailCheckLine } from "react-icons/ri";
import Link from "next/link";



export default function SocialMedia(){

    return(
        <div className="w-full flex flex-col items-center gap-2 pb-8 px-4">
            <IoChatbubblesOutline size={30} className="text-blue-400" />
            <h1 className="text-3xl font-semibold">Redes sociais </h1>
            <p className="text-gray-400 text-center">Senta-se à vontade para me contactar pelas seguintes redes sociais também</p>
            <div className="flex justify-center items-center gap-6 sm:gap-12 pt-4 text-blue-600 px-1">
                <Link href="https://www.linkedin.com/in/jos%C3%A9-alisson-dias-da-costa-59375b322/" target="_blank">
                    <div className="bg-gray-900 rounded-full p-1 ">
                        <CiLinkedin  size={46} />
                    </div>
                </Link>
                <Link href="https://github.com/Alisson014/" target="_blank">
                    <div className="bg-gray-900 rounded-full p-2.5">
                        <VscGithub size={35} />
                    </div>
                </Link>
                <Link href="mailto:josealissondiasdacostaf10@gmail.com" target="_blank" type="mailto" >
                    <div className="bg-gray-900 rounded-full p-2">
                        <RiMailCheckLine size={37} />
                    </div>  
                </Link>
                <Link href="https://www.instagram.com/j.alissons014/" target="_blank">
                    <div className="bg-gray-900 rounded-full p-2.5">
                        <SiInstagram size={36} />
                    </div>
                </Link>
            </div>
        </div>
    );
}