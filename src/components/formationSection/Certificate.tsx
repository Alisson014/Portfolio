import { Dispatch, SetStateAction } from "react";

import { LuAward } from "react-icons/lu";

type CertificateType = {
    setPdf: Dispatch<SetStateAction<number>>,
    setIsActive: Dispatch<SetStateAction<boolean>>,
    id: number,
    index: number,
    name: string,
    company: string,
    isClient: boolean,
}

export default function Certificate( { setPdf, setIsActive, id, index, name, company, isClient } : CertificateType ){

    return(
        <article onClick={() => { setPdf(id); setIsActive(true) }} key={id} id={`cert-${id}`} className={`flex flex-col justify-between shrink-0 ${isClient ? 'w-74' : 'w-72'} p-6 scale-80 sm:scale-100 rounded-2xl bg-linear-to-br ${id % 2 != 0 ? 'from-blue-500 to-indigo-800' : 'from-blue-500 to-cyan-600'} ${id == index ? 'scale-90 sm:scale-110' : isClient ? 'opacity-40' : ''} transition-transform group cursor-pointer z-10`}>
            <header className="relative">
                <p className="group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:scale-110 transition-transform duration-300">Certificado</p>
                <h1 className="font-bold text-xl group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:scale-110 transition-transform duration-300">{name}</h1>
                <LuAward className="absolute top-0 right-0 text-5xl opacity-40 group-hover:scale-140 transition-transform duration-300"/>
            </header>

            <p className="mt-8">{company}</p>
        </article>
    );
}