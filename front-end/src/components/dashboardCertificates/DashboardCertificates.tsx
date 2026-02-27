'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';


import { Certificates, Certificates as certificatesData } from "../mockedData/MockedData";
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
}

export default function DashboardCertificates({ actionType } : DashboardCertificatesType){
    const [pdf, setPdf] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isUpdating, setIsUpdating] = useState<boolean>(false);

    const components = [
        {
            id: "post",
            component: <CertificatesAddForm setIsUpdating={setIsUpdating} />
        },
        {
            id: "delete",
            component: <CetificatesDeleteForm data={Certificates} setIsUpdating={setIsUpdating} />
        }
    ]

    useEffect(() => {
        if(isUpdating){
            toast("Default data updated");
        }
    },[isUpdating]);

    return(
        <div className="w-full h-full py-4 appearAnimation">
            <header className="flex items-center gap-2"> 
                <LuAward size={35} />
                <h1 className="text-lg sm:text-3xl font-semibold">Certificados</h1>
            </header>

            <div className={`flex flex-col-reverse md:grid ${actionType == "post" || actionType == "delete" ? 'md:grid-cols-2' : 'grid-cols-1'} gap-2 place-items-start w-full mt-4`}>
                <div className="flex justify-center scale-80 sm:scale-100 sm:justify-start flex-wrap gap-2">
                    {
                        certificatesData.map(c => (
                            <Certificate key={c.id} id={c.id} name={c.name} index={-1} company={c.company} setPdf={setPdf} setIsActive={setIsActive} isClient={false} />
                        ))
                    }
                </div>

                {
                    components.find(c => c.id == actionType)?.component
                }
            </div>

            <ModalPDF isActive={isActive} setIsActive={setIsActive} pdf={certificatesData[pdf].pdf} />
        </div>
    );
}