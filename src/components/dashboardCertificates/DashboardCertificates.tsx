'use client';

import dynamic from 'next/dynamic';
import { SetStateAction, useState } from "react";


import { CertificatesType } from "../mockedData/MockedData";
import Certificate from "../formationSection/Certificate";
import CertificatesAddForm from './CertificatesAddForm';

const ModalPDF = dynamic(() => import('@/src/components/formationSection/ModalPDF'), {
  ssr: false,
  loading: () => <p>Carregando visualizador...</p>, // Opcional: um fallback
});

import { LuAward } from "react-icons/lu";
import CetificatesDeleteForm from './CertificatesDeleteForm';

type DashboardCertificatesType = {
    actionType: string,
    Certificates: Array<CertificatesType>,
    setIsUpdating: React.Dispatch<SetStateAction<boolean>>,
}

export default function DashboardCertificates({ actionType, Certificates, setIsUpdating } : DashboardCertificatesType){
    const [pdf, setPdf] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const components = [
        {
            id: "post",
            component: <CertificatesAddForm setIsUpdating={setIsUpdating} />
        },
        {
            id: "delete",
            component: <CetificatesDeleteForm data={Certificates} setIsUpdating={setIsUpdating} />
        }
    ];

    return(
        <div className="w-full h-full py-4 appearAnimation">
            <header className="flex items-center gap-2"> 
                <LuAward size={35} />
                <h1 className="text-lg sm:text-3xl font-semibold">Certificados</h1>
            </header>

            <div className={`flex flex-col-reverse md:grid ${actionType == "post" || actionType == "delete" ? 'md:grid-cols-2' : 'grid-cols-1'} gap-2 place-items-start w-full mt-4`}>
                <div className="flex justify-center scale-80 sm:scale-100 sm:justify-start flex-wrap gap-2">
                    {
                        Certificates.map(c => (
                            <Certificate key={c.id} id={c.id} name={c.name} index={-1} company={c.company} setPdf={setPdf} setIsActive={setIsActive} isClient={false} />
                        ))
                    }
                </div>

                {
                    components.find(c => c.id == actionType)?.component
                }
            </div>

            <ModalPDF isActive={isActive} setIsActive={setIsActive} pdf={Certificates[pdf].pdf} />
        </div>
    );
}