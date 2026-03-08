'use client';
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "@/src/app/contexts/AuthContext";

import { CuriositiesType } from "../mockedData/MockedData";

import { FaTrashAlt } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";

type CuriositiessAddFormType = {
    setIsUpdating: Dispatch<SetStateAction<boolean>>,
}

export default function CuriositiesAddForm( { setIsUpdating } : CuriositiessAddFormType ){
    const { GetRecaptcha } = useContext(AuthContext);

    const [CuriositiesFormData, setCuriositiesFormData] = useState<CuriositiesType>({ id: 0, name: '', description: '', image: '', link: '' });

    const inputRef = useRef<HTMLInputElement>(null);
    const [formData, setFormData] = useState(new FormData());
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleOnChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
            const newFormData = new FormData();
            newFormData.append('file', e.target.files[0]);
            setFormData(newFormData);
            setCuriositiesFormData({...CuriositiesFormData, image: e.target.files[0]});
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
        setCuriositiesFormData({...CuriositiesFormData, [e.target.name]: e.target.value});
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();

        try {
            if (CuriositiesFormData.name == "" || CuriositiesFormData.description == "" || CuriositiesFormData.link == ""){
                throw new Error("Todos os campos devem ser preenchidos");
            }

            if (!CuriositiesFormData.image || !formData || inputRef.current?.files?.length == 0){
                throw new Error("Selecione um arquivo");
            }

            const recaptchaSuccess = await GetRecaptcha();

            if(!recaptchaSuccess){
                throw new Error("Falha ao validar teste recaptcha");
            }

            setIsUpdating(true);

            // Post request

            toast.success("Adicionado!");
            setCuriositiesFormData({ id: 0, name: '', description: '', image: '', link: '' });
            removeFile();
            
        } catch (e : unknown) {
            if ( e instanceof Error){
                toast.error(e.message);
            }
        }

    } 

    return(
        <div className="w-full bg-linear-to-br from-gray-900 to-gray-950 border border-gray-700 rounded-lg p-4 mb-4 appearAnimation">
            <header className="flex items-center gap-2">
                <IoAddOutline size={35} />
                <h1 className="text-lg sm:text-2xl font-semibold">Adicionar Curiosidade</h1>
            </header>
            <form onSubmit={onSubmit} className="contactForm flex flex-col items-start justify-start">    
                <input 
                    ref={inputRef} 
                    onChange={handleOnChangeImage} 
                    type="file" 
                    name="pdf" 
                    accept="image/*" 
                    className="hidden w-60 h-35 text-lg font-thin flex-col items-center border-2 border-neutral-600"
                />

                <button onClick={onChooseFile} type="button" className="group w-full mt-2 py-3 px-3 text-lg cursor-pointer rounded-md bg-gray-900 flex justify-between items-center border border-gray-700 text-gray-500 hover:bg-gray-950 transition-all duration-300">
                    <p className="group-hover:text-gray-400 transition-all duration-300">Carregar Imagem</p>
                    <span className="text-gray-500 group-hover:text-blue-500 transition-all duration-300"><CiImageOn size={28}/></span>
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
                
                <input onChange={onChange} value={CuriositiesFormData.name} type="text" name="name" id="CuriositiesNameId" placeholder="Nome: " required />

                <input onChange={onChange} value={CuriositiesFormData.description} type="text" name="description" id="CuriositiesDescriptionId" placeholder="Descrição: " required />

                <input onChange={onChange} value={CuriositiesFormData.link} type="text" name="link" id="CuriositiesDescriptionId" placeholder="Link: " required />

                <button type="submit" className="w-full py-3 mt-4 bg-gray-900 rounded-md hover:bg-gray-950 border border-transparent hover:border-text cursor-pointer clickedAnimation">
                    Adicionar
                </button>
            </form>
        </div>
    );
}