'use client';
import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { toast } from "react-toastify";

import { AuthContext } from "@/src/app/contexts/AuthContext";

import { GoPasskeyFill } from "react-icons/go";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

type ChangePassword = {
    cod: string,
    password: string
    confirmedPassword: string
}

type ModalChangePasswordType = {
    isActive: boolean,
    setIsActive: Dispatch<SetStateAction<boolean>>
}

export default function ModalChangePassword({ isActive, setIsActive }: ModalChangePasswordType){
    const { GetRecaptcha } = useContext(AuthContext);
    const [formData, setformData] = useState<ChangePassword>({ cod: '', password: '', confirmedPassword: '' });
    const [isVisible, setIsVisible] = useState<boolean>(false);

    function onChange(e: React.ChangeEvent<HTMLInputElement>){
        setformData(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    async function handleCod(){
        try{
            const recaptchaSuccess = await GetRecaptcha();
            if(!recaptchaSuccess){
                throw new Error("Falha ao validar teste Recaptcha");
            } 

            // Code Request
            toast.info("Código enviado!");              
            
        } catch (e:unknown){
            if (e instanceof Error) {
                toast.error(e.message);
            }
        }
    }

    async function onSubmit(e: React.ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try {
            if(!formData.cod || !formData.password || !formData.confirmedPassword){
                throw new Error("Todos os dados são obrigatórios");
            }
            if(formData.password.length < 6){
                throw new Error("A senha deve ter ao menos 6 caracteres");
            }
            if(formData.password != formData.confirmedPassword){
                throw new Error("A confirmação está diferente da senha informada");
            }

            const recaptchaSuccess = await GetRecaptcha();
            if(!recaptchaSuccess){
                throw new Error("Falha ao validar Recaptcha");
            }

            //update request
            toast.success("Senha atualizada");
            setIsActive(false);
            
        } catch (e: unknown) {
            if(e instanceof Error){
                toast.error(e.message);
            }
        }
    }

    return(
        <div onClick={() => setIsActive(false)} className={`fixed h-screen w-full top-0 left-0 flex justify-center items-center bg-black/70 backdrop-blur-md px-2 pt-8 overflow-y-scroll scrollBar ${isActive ? 'opacity-100 z-50 mt-0' : 'opacity-0 -z-10 mt-10'} transition-all duration-300`}>
            <div onClick={(e) => e.stopPropagation()} className="flex flex-col justify-between max-w-150 w-full p-8 rounded-2xl backdrop-blur-3xl border-2 text-gray-300">
                <div>
                    <h1 className="text-center text-4xl font-semibold">Recuperar senha</h1>
                    <p className="text-lg text-center">Clique para enviar um código de acesso ao e-mail cadastrado:</p>
                    <div className="flex w-full justify-center gap-5">
                        <button onClick={() => setIsActive(false)} type="button" className="bg-transparent border hover:bg-gray-700/80 text-white w-60 py-2 mt-4 rounded-lg text-lg cursor-pointer clickedAnimation" > Cancelar </button>
                        <button onClick={handleCod} type="button" className="bg-white hover:bg-gray-700 hover:text-white text-black w-60 py-2 mt-4 rounded-lg text-lg cursor-pointer clickedAnimation" > Enviar código </button>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="flex flex-col justify-center" >
                    <label htmlFor="UserNameId" className="mt-4 w-full flex items-center gap-2" > <GoPasskeyFill size={20} /> Código: </label>
                    <input onChange={onChange} value={formData.cod} required
                        className="px-2 pb-2 pt-0.5 text-gray-300 border-b border-gray-200 w-full" 
                        type="text" name="cod" id="PasswordcodId" placeholder="Código " />

                    <label onClick={() => setIsVisible(prev => !prev)} htmlFor="UserNameId" className="mt-4 w-full flex items-center gap-2" > { isVisible ? (<FaEye size={20} />) : (<FaEyeSlash size={20} />) } Nova senha: </label>
                    <input onChange={onChange} value={formData.password} required
                        className="px-2 pb-2 pt-0.5 text-gray-300 border-b border-gray-200 w-full" 
                        type={isVisible ? 'text' : 'password'} name="password" id="passwordId" placeholder="Nova senha " />

                    <label htmlFor="UserNameId" className="mt-4 w-full flex items-center gap-2" > <RiLockPasswordFill size={20} /> Confirmar senha: </label>
                    <input onChange={onChange} value={formData.confirmedPassword} required
                        className="px-2 pb-2 pt-0.5 text-gray-300 border-b border-gray-200 w-full" 
                        type="password" name="confirmedPassword" id="confirmedPasswordId" placeholder="Confirmar senha " />

                    <button type="submit" className="bg-white text-black hover:bg-gray-900/60 hover:text-white w-full py-2 mt-4 rounded-lg text-lg cursor-pointer clickedAnimation" > Alterar </button>
                </form>
            </div>
        </div>
    );
}