'use client';
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "@/src/app/contexts/AuthContext";

import { CertificatesType } from "../mockedData/MockedData";

import { FaTrashAlt } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import { PiFilePdf } from "react-icons/pi";
import DashboardButton from "../buttons/DashboardButton";

type CertificatesAddFormType = {
    setIsUpdating: Dispatch<SetStateAction<boolean>>,
}

export default function CertificatesAddForm( { setIsUpdating } : CertificatesAddFormType ){
    const time = new Date();
    const { GetRecaptcha } = useContext(AuthContext);
    const [CertificateFormData, setCertificateFormData] = useState<CertificatesType>({ id: 0, pdf: '', name: '', company: '', addedAt: '' });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const [formData, setFormData] = useState(new FormData());
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleOnChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
            const newFormData = new FormData();
            newFormData.append('file', e.target.files[0]);
            setFormData(newFormData);
            setCertificateFormData({...CertificateFormData, pdf: e.target.files[0]});
        }
    };

    const onChooseFile = () => {
        if(selectedFile == null){
            inputRef.current?.click();
        }
    };

    const removeFile = () => {
        setSelectedFile(null);
        setFormData(new FormData());
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    function onChange(e: ChangeEvent<HTMLInputElement>){
        setCertificateFormData({...CertificateFormData, [e.target.name]: e.target.value});
        setCertificateFormData(prev => ({...prev, addedAt: time.toISOString()}));
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        setIsLoading(true);

        try {
            if (!CertificateFormData.name || !CertificateFormData.company || !CertificateFormData.addedAt){
                throw new Error("Todos os campos devem ser preenchidos");
            }

            if( !CertificateFormData.pdf || !formData || inputRef.current?.files?.length == 0 ){
                throw new Error("Selecione um arquivo")
            }

            const recaptchaSuccess = await GetRecaptcha();

            if(!recaptchaSuccess){
                throw new Error("Falha ao validar teste recaptcha");
            }

            setIsUpdating(true);

            // Post request

            toast.success("Adicionado!");
            setCertificateFormData({ id: 0, name: '', company: '', pdf: '', addedAt: '' });
            removeFile();
            
        } catch (e : unknown) {
            if ( e instanceof Error){
                toast.error(e.message);
            }
        } finally {
            setIsLoading(false);
        }

    } 

    return(
        <div className="w-full bg-linear-to-br from-gray-900 to-gray-950 border border-gray-700 rounded-lg p-4 mb-4 appearAnimation">
            <header className="flex items-center gap-2">
                <IoAddOutline size={35} />
                <h1 className="text-lg sm:text-2xl font-semibold">Adicionar Certificado</h1>
            </header>
            <form onSubmit={onSubmit} className="contactForm flex flex-col items-start justify-start">    
                <input 
                    ref={inputRef} 
                    onChange={handleOnChangeImage} 
                    type="file" 
                    name="pdf" 
                    accept="application/pdf" 
                    className="hidden w-60 h-35 text-lg font-thin flex-col items-center border-2 border-neutral-600"
                />

                <button onClick={onChooseFile} type="button" className="group w-full mt-2 py-3 px-3 text-lg cursor-pointer rounded-md bg-gray-900 flex justify-between items-center border border-gray-700 text-gray-500 hover:bg-gray-950 transition-all duration-300">
                    <p className="group-hover:text-gray-400 transition-all duration-300">Carregar Certificado</p>
                    <span className="text-gray-500 group-hover:text-blue-500 transition-all duration-300"><PiFilePdf size={28}/></span>
                </button>


                <div className="flex items-stretch gap-4 mt-2 w-full">
                    { selectedFile &&
                        <div className="group overflow-hidden min-w-20 w-full flex items-center justify-between bg-gray-950 border border-gray-700 rounded-lg">
                            <p className="text-sm ml-3 text-neutral-400 group-hover:text-neutral-200">{ selectedFile.name }</p>

                            <button type="button" onClick={removeFile} className=" flex items-center justify-center ">
                                <span className="hover:bg-black hover:text-white group-hover:text-blue-300 w-12 h-12 flex justify-center items-center"><FaTrashAlt/></span>
                            </button>
                        </div>
                    }
                    
                </div>
                
                <input onChange={onChange} value={CertificateFormData.name} type="text" name="name" id="CertificateNameId" placeholder="Nome do curso" required />

                <input onChange={onChange} value={CertificateFormData.company} type="text" name="company" id="CertificateCompanyId" placeholder="Empresa ou emissor: " required />

                <DashboardButton isLoading={isLoading} label="Adicionar" />
            </form>
        </div>
    );
}