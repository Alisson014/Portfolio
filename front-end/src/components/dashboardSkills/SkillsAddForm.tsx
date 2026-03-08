'use client';
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "@/src/app/contexts/AuthContext";

import { SkillsType } from "../mockedData/MockedData";

import { FaTrashAlt } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";

type SkillsAddFormType = {
    setIsUpdating: Dispatch<SetStateAction<boolean>>,
}

export default function SkillsAddForm( { setIsUpdating } : SkillsAddFormType ){
    const time = new Date();
    const { GetRecaptcha } = useContext(AuthContext);

    const [skillFormData, setSkillFormDate] = useState<SkillsType>({ id: 0, icon: '', name: '', description: '', addedAt: '', skillType: '', ability: '' });

    const inputRef = useRef<HTMLInputElement>(null);
    const [formData, setFormData] = useState(new FormData());
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleOnChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
            const newFormData = new FormData();
            newFormData.append('file', e.target.files[0]);
            setFormData(newFormData);
            setSkillFormDate({...skillFormData, icon: e.target.files[0]});
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
        setSkillFormDate({...skillFormData, [e.target.name]: e.target.value});
        setSkillFormDate(prev => ({...prev, addedAt: time.toISOString()}));
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();

        try {
            if (!skillFormData.name || !skillFormData.description || !skillFormData.addedAt || !skillFormData.skillType || !skillFormData.ability){
                throw new Error("Todos os campos devem ser preenchidos");
            }
            if (!skillFormData.icon || !formData || inputRef.current?.files?.length == 0 ){
                throw new Error("Selecione um arquivo");
            }

            if (!(skillFormData.skillType == "Hard" || skillFormData.skillType == "Soft")){
                throw new Error("Preencha o tipo de skill corretamente (Hard ou Soft)");
            }

            if (!(skillFormData.ability == "Front" || skillFormData.ability == "Back" || skillFormData.ability == "FullStack" || skillFormData.ability == "Programação" || skillFormData.ability == "Educação")){
                throw new Error("Preencha o tipo de habilidade corretamente");
            }

            const recaptchaSuccess = await GetRecaptcha();

            if(!recaptchaSuccess){
                throw new Error("Falha ao validar teste recaptcha");
            }

            setIsUpdating(true);

            // Post request

            toast.success("Adicionado!");
            setSkillFormDate({ id: 0, name: '', description: '', icon: '', addedAt: '', skillType: '', ability: '' });
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
                <h1 className="text-lg sm:text-2xl font-semibold">Adicionar Skill</h1>
            </header>
            <form onSubmit={onSubmit} className="contactForm flex flex-col items-start justify-start">    
                <input 
                    ref={inputRef} 
                    onChange={handleOnChangeImage} 
                    type="file" 
                    name="image" 
                    accept="image/png, image/jpg, image/jpeg, image/webp, image/pjpeg image/gif" 
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
                
                <input onChange={onChange} value={skillFormData.name} type="text" name="name" id="SkillNameId" placeholder="Nome da Skill" required />

                <input onChange={onChange} value={skillFormData.skillType} type="text" name="skillType" id="SkillskillTypeId" placeholder="Hard ou Soft:" required />

                <input onChange={onChange} value={skillFormData.ability} type="text" name="ability" id="SkillabilityId" placeholder="Habilidade:" required />

                <input onChange={onChange} value={skillFormData.description} type="text" name="description" id="SkillDescriptionId" placeholder="Descrição: " required />

                <button type="submit" className="w-full py-3 mt-4 bg-gray-900 rounded-md hover:bg-gray-950 border border-transparent hover:border-text cursor-pointer clickedAnimation">
                    Adicionar
                </button>
            </form>
        </div>
    );
}