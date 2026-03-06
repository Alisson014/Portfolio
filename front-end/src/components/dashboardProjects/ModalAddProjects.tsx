'use client';
import { Dispatch, SetStateAction, useRef, useState, useContext, useEffect } from "react";
import { AuthContext } from "@/src/app/contexts/AuthContext";

import { ImportProjectType, ProjectsType } from "../mockedData/MockedData";
import { CiImageOn } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

type ModalAddProjectType = {
    isActive: boolean,
    setIsActive: Dispatch<SetStateAction<boolean>>,
    setIsUpdating: Dispatch<SetStateAction<boolean>>
    ImportedProject: ImportProjectType
}

export default function ModalAddProject({ isActive, setIsActive, setIsUpdating, ImportedProject } : ModalAddProjectType){
    const time = new Date();
    const { GetRecaptcha } = useContext(AuthContext);
    const [stacks, setStacks] = useState<Array<string>>([]);
    const [ProjectFormData, setProjectsFormData] = useState<ProjectsType>({ id: ImportedProject?.id, name: '', description: ImportedProject?.description, color: '#000000', gitHub: ImportedProject?.html_url, link: ImportedProject?.homepage, stacks: stacks, thumbnail: '', addedAt: ''});

    const inputRef = useRef<HTMLInputElement>(null);
    const [formData, setFormData] = useState(new FormData());
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const inputRefStack = useRef<HTMLInputElement>(null);

    const handleOnChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
            const newFormData = new FormData();
            newFormData.append('file', e.target.files[0]);
            setFormData(newFormData);
            setProjectsFormData({...ProjectFormData, thumbnail: e.target.files[0]});
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
    };

    function onChange(e: React.ChangeEvent<HTMLInputElement>){
        setProjectsFormData({...ProjectFormData,[e.target.name] : e.target.value });
        setProjectsFormData(prev => ({...prev, addedAt: time.toISOString()}));
    }

    useEffect(() => {
        setProjectsFormData(prevData => ({...prevData, stacks: stacks}));
    }, [stacks]);

    async function handleAddStack(stackValue : string){
        if(stackValue && stackValue != null){
            if (stacks.includes(stackValue)){
                setStacks(prevStacks => prevStacks.filter(s => s !== stackValue));
            } else {
                setStacks(prevStacks => [...prevStacks, stackValue]);
            }
        }
    }

    async function onSubmit(e: React.ChangeEvent<HTMLFormElement>){
        e.preventDefault();

        try {
            if(ProjectFormData.id == 0 || !ProjectFormData.name || !ProjectFormData.description || !ProjectFormData.color || !ProjectFormData.gitHub || !ProjectFormData.link || !ProjectFormData.thumbnail || ProjectFormData.stacks.length == 0 || !formData || !ProjectFormData.addedAt){
                throw new Error("Todos os dados são obrigatórios");
            }

            const recaptchaSuccess = await GetRecaptcha();

            if(!recaptchaSuccess){
                throw new Error("Falha ao validar teste recaptcha");
            }

            setIsUpdating(true);

            // Post request
            console.log(ProjectFormData);
            toast.success("Projeto adicionado");
            removeFile();
            setStacks([]);
            setProjectsFormData({ id: ImportedProject?.id, name: '', description: ImportedProject?.description, color: '#000000', gitHub: ImportedProject?.html_url, link: ImportedProject?.homepage, stacks: stacks, thumbnail: '', addedAt: ''});
            setIsActive(false);
            
        } catch (e: unknown) {
            if(e instanceof Error){
                console.log(ProjectFormData);
                console.log(e);
                toast.error(e.message);
            }
        }
    }

    return(
        <div onClick={() => setIsActive(false)} className={`fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black/50 ${isActive ? 'opacity-100 mt-0 z-50' : 'opacity-0 mt-10 -z-20'} transition-all duration-300`}>

            <div onClick={(e) => e.stopPropagation()} className=" p-4 bg-linear-to-br from-gray-900 to-gray-950 border border-gray-800 min-w-72 rounded-md">
                <section className="min-w-70">
                    <header>
                        <h1 className="text-xl font-semibold">{ImportedProject?.name}</h1>
                    </header>

                    <form onSubmit={onSubmit} className="w-full mt-2 pr-2">
                        <input onChange={onChange} value={ProjectFormData.name} className="w-full bg-gray-950 border border-gray-800 py-1.5 px-3 rounded-md" 
                            type="text" name="name" id="newProjectNameId" placeholder="Nome do Projeto" required />
                        <div className="flex items-center justify-between px-3 py-1 mt-2 bg-gray-950 border border-gray-800 rounded-md text-gray-500">
                            <label htmlFor="newProjectColorId">Selecionar cor</label>
                            <input onChange={onChange} value={ProjectFormData.color} className=" w-8 h-8 rounded-md cursor-pointer" 
                                type="color" name="color" id="newProjectColorId" placeholder="Selecione a cor" required />
                        </div>

                        <input 
                            ref={inputRef} 
                            onChange={handleOnChangeImage} 
                            type="file" 
                            name="thumbnail" 
                            accept="image/*" 
                            required 
                            className="hidden"
                        />
        
                        <button onClick={onChooseFile} type="button" className="group w-full mt-2 py-1 px-3 cursor-pointer rounded-md bg-gray-950 flex justify-between items-center border border-gray-700 text-gray-500 hover:bg-gray-950 transition-all duration-300">
                            <p className="group-hover:text-gray-400 transition-all duration-300">Carregar Imagem</p>
                            <span className="text-gray-500 group-hover:text-blue-500 transition-all duration-300"><CiImageOn size={28}/></span>
                        </button>
        
        
                        <div className="flex items-stretch gap-4 mt-2 w-full">
                            { selectedFile &&
                                <div className="group overflow-hidden min-w-20 w-full mb-2 flex items-center justify-between bg-gray-950 border border-gray-700 rounded-lg">
                                    <p className="text-sm ml-3 text-neutral-400 group-hover:text-neutral-200">{ selectedFile.name }</p>
        
                                    <button type="button" onClick={removeFile} className=" flex items-center justify-center ">
                                        <span className="hover:bg-black hover:text-white group-hover:text-blue-300 w-10 h-10 flex justify-center items-center"><FaTrashAlt/></span>
                                    </button>
                                </div>
                            }                            
                        </div>

                        <div className="flex items-center gap-2">
                            <input className="w-full bg-gray-950 border border-gray-800 py-1.5 px-3 rounded-md" 
                                ref={inputRefStack} type="text" name="stacks" id="newProjectStacksId" placeholder="Adicionar stacks" required />

                            <button onClick={() => inputRefStack.current && handleAddStack(inputRefStack.current.value)} type="button" className="bg-gray-950 border border-gray-800 py-1.5 px-2 rounded-md cursor-pointer clickedAnimation"> Add </button>
                        </div>

                        <div className="flex justify-center items-center gap-2 flex-wrap max-w-70 mt-2">
                            {
                                stacks.map( s => (
                                    <button type="button" key={s} className="bg-gray-800 py-0.5 px-2 rounded-md cursor-pointer" onClick={() => handleAddStack(s)}>{s}</button>
                                ))
                            }
                        </div>


                        <button className="w-full py-2 bg-gray-950 mt-4 rounded-md border border-gray-800 cursor-pointer hover:border-border clickedAnimation">Adicionar</button>
                    </form>
                </section>
            </div>
        </div>
    );
}