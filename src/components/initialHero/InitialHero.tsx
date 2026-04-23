'use client';
import Image from "next/image";
import { aboutMe, stars } from "../mockedData/MockedData";

import { BsStars } from "react-icons/bs";
import Star from "./Star";

const InitialHero = () => {

    const handleScroll = () => {
        const pos = document.getElementById('ReadMore');

        window.scrollTo({
            behavior: 'smooth',
            top: (pos?.offsetTop ?? 0) - 70,
        })
    }
    

    return(
        <div className="relative flex w-full items-start justify-between px-4 sm:px-8 md:px-20 pb-8 -mt-20 z-20">
            <div className="absolute left-0 right-0 top-0 bottom-0">
                <div className="relative w-full h-full">
                    {stars.map((star => (
                        <Star key={star.id} initialLeft={star.id*5} delay={star.daley}/>
                    )))}
                    
                </div>
            </div>
            <article className="relative flex flex-col items-start gap-6 lg:w-1/2 -mt-30 sm:mt-0">
                <button className="flex justify-center items-center gap-1 bg-linear-to-b from-gray-950 to-indigo-950 border rounded-full py-1.5 px-3 border-indigo-700 text-indigo-300">
                    <BsStars />
                    Desenvolvedor FullStack
                </button>
                <h1 className="text-text-title text-3xl sm:text-5xl lg:text-7xl tracking-tight">
                    Crescer, <strong className="text-primary font-normal">aprimorar</strong> e desenvolver 
                </h1>
                <p className="text-lg sm:text-xl opacity-70">
                    { aboutMe.resume }
                </p>
                <button onClick={handleScroll}
                  className="bg-linear-to-br from-blue-800 to-indigo-950 px-7 py-1 rounded-full text-lg cursor-pointer border-2 border-transparent hover:border-indigo-400 clickedAnimation"
                >
                    Ler mais
                </button>
            </article>

            <div className="relative hidden lg:flex items-start justify-end w-1/2 h-full">
                <Image src="/images/hero-image.png" alt="image alt..." width={500} height={500} className="-mt-30"/>
            </div>
        </div>
    );
}

export default InitialHero;