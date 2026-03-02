'use client';
import dynamic from "next/dynamic";
const ModalPDF = dynamic(() => import('./ModalPDF'), {
  ssr: false,
  loading: () => <p>Carregando visualizador...</p>,
});

import { useState, useEffect, useRef } from "react";

import Certificate from "./Certificate";

import { LuAward } from "react-icons/lu";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

import { Certificates as CertificatesData } from "../mockedData/MockedData";

export default function Certificates(){

    const [isActive, setIsActive] = useState(false);
    const [pdf, setPdf] = useState(0);
    const [index, setIndex] = useState(0);
    
    const intercalator = useRef(false);
    const valid = useRef(false);
    
    useEffect(() => {
        if (!valid.current){
            if(document.referrer != '/'){
                valid.current = true;
                return;
            }
        }

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
        if(isRight && index < CertificatesData.length){
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
                        CertificatesData.map(c => (
                            <Certificate key={c.id} setPdf={setPdf} setIsActive={setIsActive} id={c.id} name={c.name} company={c.company} index={index} isClient={true} />
                        ))
                    }
                </div>

                <button onClick={() => handleIndex(true)} disabled={index>=CertificatesData.length-1} className="flex justify-center items-center cursor-pointer w-3/50 disabled:opacity-30 group">
                    <div className="flex justify-center items-center bg-[#3c3d4d] w-10 h-10 rounded-full group-active:scale-80 transition-transform duration-200">
                        <RiArrowRightSLine className="text-2xl" />
                    </div>
                </button>
            </div>
        
            <ModalPDF isActive={isActive} setIsActive={setIsActive} pdf={CertificatesData[pdf].pdf} />
        
        </section>
    );
}