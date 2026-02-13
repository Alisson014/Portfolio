
import Image from "next/image";
import HeroFooter from "./HeroFooter";
import SocialMedia from "./SocialMedia";

import { FaGlobe } from "react-icons/fa";
import Link from "next/link";


export default function Footer(){

    return(
        <footer className="flex flex-col items-center w-full pt-18">
            <SocialMedia />
            <HeroFooter />
            <div className="flex justify-between items-start flex-wrap pt-65 px-4 sm:px-14 pb-10 w-full bg-black border-t border-t-gray-900 -mt-50 z-10">
                <Image className="scale-80 md:scale-100" src={"/images/logo-hero-1.png"} alt="My logo image" width={300} height={300} />

                <div className="max-w-100">
                    <h1 className="flex items-center gap-2 text-xl font-semibold">
                        <FaGlobe size={20} />
                        José Alisson
                    </h1>
                    <h2 className="font-semibold mt-5">Créditos</h2>
                    <p className="text-gray-400">Imagens geradas com Gemini</p>
                    <Link href={"https://www.builtatlightspeed.com/demo/sanidhyy-space-portfolio"} target="_blank" className="text-gray-400 hover:underline"> ▷ Inspiração para hero inicial </Link>
                    <h2 className="font-semibold mt-5">Outras informações</h2>
                    <p className="text-gray-400">Design do projeto inspirado em conceitos da comunidade e adaptados</p>
                    <p className="text-gray-400">Um projeto NextJs</p>

                    <div className="flex justify-start flex-wrap gap-6 mt-8 mb-5">
                        <div>
                            <strong className="font-bold">GitHub</strong>
                            <p className="mt-2">Alisson014</p>
                        </div>

                        <div>
                            <strong className="font-bold">E-mail</strong>
                            <p className="mt-2">josealissondiasdacostaf10@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-start items-start gap-20 sm:gap-28">
                    <div className="flex flex-col gap-4">
                        <h2 className="font-semibold text-lg">Redes sociais</h2>
                        <Link href={"https://www.linkedin.com/in/jos%C3%A9-alisson-dias-da-costa-59375b322/"} target="_blank" className="mt-5 text-gray-400 hover:underline"> ▷ Linkedin </Link>
                        <Link href={"https://github.com/Alisson014/"} target="_blank" className="text-gray-400 hover:underline"> ▷ GitHub </Link>
                        <Link href={"mailto:josealissondiasdacostaf10@gmail.com"} target="_blank" className="text-gray-400 hover:underline"> ▷ E-mail </Link>
                        <Link href={"https://www.instagram.com/j.alissons014/"} target="_blank" className="text-gray-400 hover:underline"> ▷ Instagram </Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="font-semibold text-lg">Navegação</h2>
                        <Link href={"https://www.linkedin.com/in/jos%C3%A9-alisson-dias-da-costa-59375b322/"} target="_blank" className="mt-5 text-gray-400 hover:underline"> ▷ Home </Link>
                        <Link href={"https://github.com/Alisson014/"} target="_blank" className="text-gray-400 hover:underline"> ▷ Skills </Link>
                        <Link href={"mailto:josealissondiasdacostaf10@gmail.com"} target="_blank" className="text-gray-400 hover:underline"> ▷ Projetos </Link>
                        <Link href={"https://www.instagram.com/j.alissons014/"} target="_blank" className="text-gray-400 hover:underline"> ▷ Curiosidades </Link>
                        <Link href={"https://www.instagram.com/j.alissons014/"} target="_blank" className="text-gray-400 hover:underline"> ▷ Contato </Link>
                        <Link href={"/Curriculo (1).pdf"} target="_blank" className="text-gray-400 hover:underline"> ▷ Curriculo </Link>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center bg-gray-900 py-4">
                &copy; José Alisson - 2026
            </div>
        </footer>
    );
}