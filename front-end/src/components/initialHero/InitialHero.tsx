'use client';
import Image from "next/image";
// import Link from "next/link";

import { BsStars } from "react-icons/bs";
import Star from "./Star";

const InitialHero = () => {

    const handleScroll = () => {
        const pos = document.getElementById('ReadMore');

        window.scrollTo({
            behavior: 'smooth',
            top: pos?.offsetTop,
        })
    }
    const stars = [
        {id: 1, bottom: 1}, {id: 2, bottom: 3}, {id: 3, bottom: 0.5}, {id: 4, bottom: 5}, {id: 5, bottom: 1.5}, {id: 6, bottom: 8},
        {id: 7, bottom: 2}, {id: 8, bottom: 0.8}, {id: 9, bottom: 0.9}, {id: 10, bottom: 6.5}, {id: 11, bottom: 2.5}, {id: 12, bottom: 4.5},
        {id: 13, bottom: 0.4}, {id: 14, bottom: 1}, {id: 15, bottom: 5.5}, {id: 16, bottom: 1.8}, {id: 17, bottom: 7.5}, {id: 18, bottom: 3.5},
        {id: 19, bottom: 0.95}, {id: 20, bottom: 3.8}

    ]

    return(
        <section className="relative flex w-full items-start justify-between px-4 sm:px-8 md:px-20 pb-8 -mt-20 z-20">
            <section className="absolute left-0 right-0 top-0 bottom-0">
                <div className="relative w-full h-full">
                    {stars.map((star => (
                        <Star key={star.id} initialLeft={star.id*5} bottom={star.bottom}/>
                    )))}
                    
                </div>
            </section>
            <article className="relative flex flex-col items-start gap-6 lg:w-1/2 -mt-30 sm:mt-0">
                <button className="flex justify-center items-center gap-1 bg-linear-to-b from-gray-950 to-indigo-950 border-1 rounded-full py-1.5 px-3 border-indigo-700 text-indigo-300">
                    <BsStars />
                    Desenvolvedor FullStack
                </button>
                <h1 className="text-text-title text-3xl sm:text-5xl lg:text-7xl tracking-tight">
                    Crescer, <strong className="text-primary font-normal">aprimorar</strong> e desenvolver 
                </h1>
                <p className="text-lg sm:text-xl opacity-70">
                    Técnico em Informática para internet, Desenvolvedor FullStack e um jovem fascinado pelo mundo da tecnologia digital,
                    com grande vontade de se desenvolver enquanto profissional e pessoa.
                    
                </p>
                <button onClick={handleScroll}
                  className="bg-linear-to-br from-blue-800 to-indigo-950 px-7 py-1 rounded-full text-lg cursor-pointer border-2 border-transparent hover:border-indigo-400"
                >
                    Ler mais
                </button>
            </article>

            <section className="relative hidden lg:flex items-start justify-end w-1/2 h-full">
                <Image src="/images/hero-image.png" alt="image alt..." width={500} height={100} className="-mt-30"/>
            </section>
        </section>
    );
}

export default InitialHero;