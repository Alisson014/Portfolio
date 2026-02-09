'use client';
import dynamic from "next/dynamic";
const ModalPDF = dynamic(() => import('./ModalPDF.jsx'), {
  ssr: false,
  loading: () => <p>Carregando visualizador...</p>,
});

import { useState, useEffect, useRef } from "react";

import { LuAward } from "react-icons/lu";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";



export default function Certificates(){
    const [isActive, setIsActive] = useState(false);
    const [pdf, setPdf] = useState(0);
    const [index, setIndex] = useState(0);
    const intercalator = useRef(false);
    const certificates = [
        { id: 0, name: 'Desenvolvimento FullStack', company: 'Capacita / C-jovem', pdf: '/certificado_cnh.pdf' },
        { id: 1, name: 'Técnico Informática para Internet', company: 'IFCE', pdf: '/Plano de Testes-spotify.pdf (1).pdf' },
        { id: 2, name: 'Empreendedorismo', company: 'Sebrae', pdf: '/Curriculo (1).pdf' },
        { id: 3, name: 'Inglês Técnico', company: 'Dell', pdf: '/certificado_feira.pdf' },
        { id: 4, name: 'Jornada Inteligência Artificial', company: 'Hashtag', pdf: '/certificado_cnh.pdf' },
        { id: 5, name: 'Minecurso Pensando como Backend Developer', company: 'SeInfo IFCE', pdf: '/certificado_feira.pdf' },
        
    ]

    
    useEffect(() => {
        if(!intercalator.current){
            intercalator.current = true;
            return;
        }

        const element = document.getElementById(`cert-${index}`);
        if (element){
            element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center',
                });
            }
    }, [index]);
    

    function handleIndex(isRight:boolean){
        if(isRight && index < certificates.length){
            setIndex(index+1);
        }

        if(!isRight && index > 0){
            setIndex(index-1);
        }
    }

    return (
        <section className="mt-18 mx-1 sm:mx-8 md:mx-12">
            <header className="flex flex-col items-center gap-5 text-center">
                <LuAward className="text-4xl text-primary"/>
                <h1 className="text-3xl font-medium text-gray-300">Certificações e Cursos </h1>
                <p className="text-lg">Alinhando esforço com resultados e evoluindo para conquistar um conhecimento cada vez mais sólido e eficiente.</p>
            </header>

            <div className="flex justify-around sm:justify-between w-full">
                <button onClick={() => handleIndex(false)} disabled={index<=0} className="flex justify-center items-center cursor-pointer w-3/50 disabled:opacity-30 group">
                    <div className="flex justify-center items-center bg-[#3c3d4d] w-10 h-10 rounded-full group-active:scale-80 transition-transform duration-200">
                        <RiArrowLeftSLine className="text-2xl"/>
                    </div>
                </button>

                <div className="flex gap-4 sm:gap-8 justify-start overflow-hidden w-17/20 mt-12 sm:py-4 sm:px-4">
                    {
                        certificates.map(c => (
                            <article onClick={() => { setPdf(c.id); setIsActive(true) }} key={c.id} id={`cert-${c.id}`} className={`flex flex-col justify-between shrink-0 w-74 p-6 scale-80 sm:scale-100 rounded-2xl bg-linear-to-br ${c.id % 2 != 0 ? 'from-blue-500 to-indigo-800' : 'from-blue-500 to-cyan-600'} ${c.id == index ? 'scale-90 sm:scale-110' : 'opacity-40'} transition-transform group cursor-pointer`}>
                                <header className="relative">
                                    <p className="group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:scale-110 transition-transform duration-300">Certificado</p>
                                    <h1 className="font-bold text-xl group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:scale-110 transition-transform duration-300">{c.name}</h1>
                                    <LuAward className="absolute top-0 right-0 text-5xl opacity-40 group-hover:scale-140 transition-transform duration-300"/>
                                </header>

                                <p className="mt-8">{c.company}</p>
                            </article>
                        ))
                    }
                </div>

                <button onClick={() => handleIndex(true)} disabled={index>=certificates.length-1} className="flex justify-center items-center cursor-pointer w-3/50 disabled:opacity-30 group">
                    <div className="flex justify-center items-center bg-[#3c3d4d] w-10 h-10 rounded-full group-active:scale-80 transition-transform duration-200">
                        <RiArrowRightSLine className="text-2xl" />
                    </div>
                </button>
            </div>
        
            <ModalPDF isActive={isActive} setIsActive={setIsActive} pdf={certificates[pdf].pdf} />
        
        </section>
    );
}