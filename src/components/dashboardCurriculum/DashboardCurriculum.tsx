'use client';
import { SetStateAction, useRef, useState } from "react";
import { toast } from "react-toastify";


import { PiFilePdf, PiFilePdfFill } from "react-icons/pi";
import { FaTrashAlt } from "react-icons/fa";

type DashboardCurriculumType = {
    isActive: boolean,
    setIsActive: React.Dispatch<SetStateAction<boolean>>,
}


export default function DashboardCurriculum({ isActive, setIsActive } : DashboardCurriculumType ){

    const inputRef = useRef<HTMLInputElement>(null);
    const [formData, setFormData] = useState(new FormData());
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleOnChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
            const newFormData = new FormData();
            newFormData.append('file', e.target.files[0]);
            setFormData(newFormData);
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

    async function onSubmit(e: React.ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try {
            if(!formData || inputRef.current?.files?.length == 0){
                throw new Error("Selecione um arquivo");
            }

            // Update curriculum request
            console.log("Execute?")
            toast.success("Currículo atualizado");
            removeFile();
            setIsActive(false);
            
        } catch (e : unknown) {
            if(e instanceof Error){
                toast.error(e.message);
            }
        }
    }

    return(
        <div onClick={() => setIsActive(false)} className={`fixed w-screen h-screen flex justify-end items-stretch p-4 ${isActive ? 'left-0 bg-black/50' : 'left-full bg-transparent'} top-0 z-50 transition-all duration-500`}>
            <div onClick={(e) => e.stopPropagation()} className="h-full bg-gray-200 text-black text-left p-8 rounded-l-md max-w-120 min-w-72 w-full -mr-4">
                <form onSubmit={onSubmit} className="flex flex-col justify-between h-full">
                    <div>
                        <header className="flex items-center gap-3">
                            <PiFilePdfFill size={34} />
                            <h1 className="text-xl font-semibold">Atualizar Curriculo</h1>
                        </header>
                        <p className="mt-1">Este é uma ação permanente, ao atualizar o arquivo, isto não poderá ser desfeito.</p>
                        {/* <hr className="mt-4" /> */}
                    
                        <input 
                            ref={inputRef} 
                            onChange={handleOnChangeImage} 
                            type="file" 
                            name="pdf" 
                            accept="application/pdf" 
                            className="hidden w-60 h-35 text-lg font-thin flex-col items-center border-2 border-neutral-600"
                        />
        
                        <button onClick={onChooseFile} type="button" className="group w-full mt-6 py-3 px-3 text-lg cursor-pointer rounded-md bg-gray-900 flex justify-between items-center border border-gray-700 text-gray-500 hover:bg-gray-950 transition-all duration-300">
                            <p className="text-md font-normal group-hover:text-gray-400 transition-all duration-300">Carregar Certificado</p>
                            <span className="text-gray-500 group-hover:text-blue-500 transition-all duration-300"><PiFilePdf size={28}/></span>
                        </button>
        
        
                        <div className="flex items-stretch gap-4 mt-2 w-full">
                            { selectedFile &&
                                <div className="group overflow-hidden min-w-20 w-full flex items-center justify-between bg-gray-950 border border-gray-700 rounded-lg">
                                    <p className="text-sm ml-3 text-neutral-400 group-hover:text-neutral-200">{ selectedFile.name }</p>
        
                                    <button type="button" onClick={removeFile} className=" flex items-center justify-center ">
                                        <span className="hover:bg-black hover:text-white group-hover:text-blue-300 w-12 h-12 flex justify-center items-center"><FaTrashAlt className="text-gray-400" /></span>
                                    </button>
                                </div>
                            }
                            
                        </div>
                    </div>

                    <div className="w-full flex justify-around items-center flex-wrap gap-2">
                        <button onClick={() => setIsActive(false)} type="button" className="px-8 py-1 border rounded-md cursor-pointer text-lg hover:bg-gray-500 hover:border-gray-500 clickedAnimation" >Cancelar</button>
                        <button type="submit" className="px-8 py-1 bg-black text-white rounded-md border border-black cursor-pointer text-lg hover:bg-gray-500 hover:border-gray-500 clickedAnimation " >Atualizar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}