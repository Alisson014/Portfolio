'use client';
import { ChangeEvent, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { AuthContext } from "@/src/app/contexts/AuthContext";
import { User, UserType } from "../mockedData/MockedData";

import { IoChatbubblesOutline } from "react-icons/io5";
import { UserIcon } from "lucide-react";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { BiSolidEdit } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import { toast } from "react-toastify";
import ModalChangePassword from "./ModalChangePassword";

export default function UserData() {
    const { GetRecaptcha } = useContext(AuthContext);
    const router = useRouter()
    const [userFormData, setUserFormData] = useState<UserType>({ id: User.id, name: User.name, email: User.email , icon: User.icon, password: '', contactEmail: User.contactEmail, github: User.github, instagram: User.instagram, linkedin: User.linkedin });
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<boolean>(false);

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        setUserFormData(prevUser => ({...prevUser, [e.target.name] : e.target.value}));
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        
        try {
            if( !userFormData.name || !userFormData.email || !userFormData.icon || !userFormData.contactEmail || !userFormData.github || !userFormData.instagram || !userFormData.linkedin ){
                throw new Error("Todos os dados são obrigatórios");
            }

            const recaptchaSuccess = await GetRecaptcha();

            if(!recaptchaSuccess){
                throw new Error("Falha ao validar teste recaptcha");
            }

            // Update user request

            toast.success("Informações atualizadas");
            // Get user request
            setUserFormData({ id: User.id, name: User.name, email: User.email , icon: User.icon, password: '', contactEmail: User.contactEmail, github: User.github, instagram: User.instagram, linkedin: User.linkedin });
            
        } catch (e : unknown) {
            if(e instanceof Error){
                toast.error(e.message);
                console.log(userFormData);
            }
        }
    }

    return(
        <section className="absolute flex flex-col justify-start md:justify-center items-center gap-2 bg-black/30 w-full h-screen overflow-y-scroll scrollBar pt-10 pb-22 px-2 sm:px-4 ">
            <button onClick={() => router.back()} className="fixed top-4 left-4 text-xl hover:underline cursor-pointer">
                ◁ Voltar
            </button>

            <header className="text-center text-white">
                <UserIcon className="mx-auto" size={40} />
                <h1 className="text-3xl font-semibold mb-8">Informações de Usuário</h1>
            </header>
            
            <form onSubmit={onSubmit} className="flex flex-col justify-start max-w-200 w-full text-white ">
                <div className="grid md:grid-cols-2 gap-8 place-items-stretch">
                    <div className="flex flex-col justify-center items-center min-w-75 w-full p-8 rounded-2xl backdrop-blur-3xl border-2">
                        <Image src={User.icon} alt="User image" width={50} height={50} className="rounded-full mx-auto" />
                        <h1 className="text-xl text-center font-medium">Dados pessoais</h1>

                        <label htmlFor="UserNameId" className="mt-4 w-full flex items-center gap-2" > <UserIcon size={20} /> Nome: </label>
                        <input onChange={onChange} value={userFormData.name}  disabled={!isEditing} required
                            className="px-2 pb-2 pt-0.5 text-gray-300 border-b border-gray-200 w-full" 
                            type="text" name="name" id="UserNameId" placeholder="Nome" />
                        
                        <label htmlFor="UserEmail" className="mt-4 w-full flex items-center gap-2" ><MdOutlineMailOutline size={20} /> Email: </label>
                        <input onChange={onChange} value={userFormData.email}  disabled={!isEditing} required
                            className="px-2 pb-2 pt-0.5 text-gray-300 border-b border-gray-200 w-full" 
                            type="email" name="email" id="UserEmail" placeholder="Email" />

                        <button onClick={() => setIsActive(true)} type="button" className="mt-3 text-center hover:underline">Recuperar senha</button>
                    </div>
                    
                    <div className=" min-w-75 w-full p-8 rounded-2xl backdrop-blur-3xl border-2">
                        <IoChatbubblesOutline className="mx-auto" size={40} />
                        <h1 className="mb-4 text-xl text-center font-medium">Redes Sociais</h1>

                        <label htmlFor="UserContactEmail" className="flex items-center gap-2 mt-3" > <MdOutlineMailOutline size={20} /> Email para Contato: </label>
                        <input onChange={onChange} value={userFormData.contactEmail} disabled={!isEditing} required
                            className="px-2 pb-2 pt-0.5 text-gray-300 border-b border-gray-200 w-full" 
                            type="email" name="contactEmail" id="UserContactEmail" placeholder="Email para contato" />
                        
                        <label htmlFor="UserLinkedin" className="flex items-center gap-2 mt-3" > <CiLinkedin size={23} /> Linkedin: </label>
                        <input onChange={onChange} value={userFormData.linkedin} disabled={!isEditing} required
                            className="px-2 pb-2 pt-0.5 text-gray-300 border-b border-gray-200 w-full" 
                            type="text" name="linkedin" id="UserLinkedin" placeholder="Linkedin" />

                        <label htmlFor="UserGitHub" className="flex items-center gap-2 mt-3" > <FaGithub size={20} /> GituHub: </label>
                        <input onChange={onChange} value={userFormData.github} disabled={!isEditing} required
                            className="px-2 pb-2 pt-0.5 text-gray-300 border-b border-gray-200 w-full" 
                            type="text" name="github" id="UserGitHub" placeholder="GitHub" />

                        <label htmlFor="UserInstagram" className="flex items-center gap-2 mt-3" > <FaInstagram size={20} /> Instagram: </label>
                        <input onChange={onChange} value={userFormData.instagram} disabled={!isEditing} required
                            className="px-2 pb-2 pt-0.5 text-gray-300 border-b border-gray-200 w-full" 
                            type="text" name="instagram" id="UserInstagram" placeholder="Instagram" />
                    </div>
                </div>
                
                <button type="submit" disabled={!isEditing} className="backdrop-blur-3xl hover:bg-gray-900/80 hover:text-white text-white border-2 w-full py-2 mt-4 rounded-lg text-lg cursor-pointer clickedAnimation" > Editar </button>
            </form>

            <nav className="fixed bottom-0 mx-auto flex items-start gap-4 p-4 rounded-t-2xl backdrop-blur-3xl border-t-2 border-x-2 ">
                <button onClick={() => setIsEditing(true)} className={`p-2 rounded-md border cursor-pointer hover:bg-gray-300 hover:text-gray-800 clickedAnimation ${isEditing ? 'bg-gray-300 text-gray-800' : 'bg-gray-800/50 text-gray-400'}`}>
                    <BiSolidEdit size={25} />
                </button>
                <button onClick={() => setIsEditing(false)} className={`p-2 rounded-md border cursor-pointer hover:bg-gray-300 hover:text-gray-800 clickedAnimation ${!isEditing ? 'bg-gray-300 text-gray-800' : 'bg-gray-800/50 text-gray-400'}`}>
                    <GrView size={25} />
                </button>
            </nav>

            <ModalChangePassword isActive={isActive} setIsActive={setIsActive} />
        </section>
    );
}