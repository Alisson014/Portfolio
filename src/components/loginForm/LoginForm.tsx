'use client';

import { toast } from "react-toastify";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useState, ChangeEvent, useContext } from "react";
import { AuthContext } from "@/src/app/contexts/AuthContext";

import { MdEmail } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";

import CodButton from "@/src/components/buttons/CodButton";
import LoginButton from "../buttons/LoginButton";

type FormDataType = {
    email: string,
    password: string,
}

export default function LoginForm(){
    const [forgottenPassword, setForgottenPassword] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isLoadingWhenNoPassword, setIsLoadingWhenNoPassword] = useState<boolean>(false);

    const [formData, setFormData] = useState<FormDataType>({ email: '', password: '' });
    const [cod, setCod] = useState('');

    const { executeRecaptcha } = useGoogleReCaptcha();    

    const { GetRecaptcha, LogIn } = useContext(AuthContext);

    function handleChange (e: ChangeEvent<HTMLInputElement>) {
        setFormData({ ...formData, [e.target?.name]: e.target?.value });
    }

    function handleChangeCod(e: ChangeEvent<HTMLInputElement>) {
        setCod(e.target.value);
    }

    async function handleCod(){

        try{

            if (!executeRecaptcha){
                toast.error("Recaptcha não está funcionando.");
                return
            }

            const recaptchaSuccess = await GetRecaptcha();

            if(!recaptchaSuccess){
                throw new Error("Você não passou no teste do Recaptcha.");
                
            } 

            // Code Request
            toast.info("Código enviado!");              
            
        } catch (e:unknown){
            if (e instanceof Error) {
                toast.error(e.message);
            }
        }
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        setIsLoading(true);
        
        try {
            if (!executeRecaptcha){
                toast.error("Recaptcha não está funcionando.");
                return
            }
            
            const recaptchaSuccess = await GetRecaptcha();

            if(!recaptchaSuccess){
                throw new Error("Você não passou no teste do Recaptcha.");
                
            }

            await LogIn(formData);
            setFormData({ email: '', password: '' });
            toast.success("Login Realizado com sucesso!");

        } catch (e: unknown){
            if (e instanceof Error){
                toast.error(e.message);    
            }
        } finally {
            setIsLoading(false);
        }
    }

    async function onSubmitCod(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        setIsLoadingWhenNoPassword(true);

        try{

            const recaptchaSuccess = await GetRecaptcha();

            if(!recaptchaSuccess){
                throw new Error("Você não passou no teste do Recaptcha.")  
            }
            // Validation Cod Request
            toast.success("Código válido!");
            setCod('');

        } catch (e : unknown){
            if (e instanceof Error){
                toast.error(e.message);
            }
        } finally {
            setIsLoadingWhenNoPassword(false);
        }
        

    }

    return(
        <div className="absolute flex justify-start w-full overflow-hidden">
            <div className="flex justify-center w-screen shrink-0 transition-all duration-200 sm:duration-400" style={{ translate: `${ forgottenPassword ? '-100vw' : '0px' }` }}>
                <div className="min-w-xs min-h-90 w-1/3 p-8 rounded-2xl backdrop-blur-3xl border-2 text-white">
                    <h1 className="text-center text-4xl font-semibold">Login</h1>

                    <form onSubmit={onSubmit} className="flex flex-col items-center">
                        <label className="text-lg font-medium mt-4 w-full" htmlFor="userEmail">E-mail: </label>
                        <div className="w-full flex items-end justify-center gap-2 mb-4">
                            <MdEmail size={23} />
                            <input 
                                value={formData.email} 
                                onChange={handleChange} 
                                className="px-1 focus:outline-none w-9/10 focus:w-full pt-3  transition-all duration-300 border-b-2 rounded-t-md" 
                                type="email" 
                                name="email" 
                                id="userEmail" 
                                placeholder="E-mail cadastrado"
                                required 
                            />
                        </div>
                        <label className="text-lg font-medium w-full" htmlFor="userPassword">Senha: </label>
                        <div className="w-full flex items-end justify-center gap-2 mb-4">
                            <button className="cursor-pointer" type="button" onClick={() => setIsVisible(prev => !prev)}>
                                { isVisible ? (
                                    <IoEyeSharp size={23} />
                                ) 
                                : (
                                    <IoEyeOffSharp size={23} />
                                ) }
                            </button>
                            <input 
                            value={formData.password} 
                            onChange={handleChange}
                            className="px-1 focus:outline-none w-9/10 focus:w-full pt-3  transition-all duration-300 border-b-2 rounded-t-md" 
                            type={`${ isVisible ? 'text' : 'password' }`} 
                            name="password" 
                            id="userPassword" 
                            placeholder="Sua senha"
                            required />
                        </div>

                        <button type="button" className="hover:underline text-center cursor-pointer clickedAnimation" onClick={() => setForgottenPassword(true)} > Esqueci a senha </button>
                        <LoginButton isLoading={isLoading} label="Entrar" />
                    </form>
                </div>
            </div>

            <div className="flex justify-center w-screen shrink-0 transition-all duration-200 sm:duration-400" style={{ translate: `${ forgottenPassword ? '-100vw' : '0vw' }` }}>
                <div className="flex flex-col justify-between min-w-xs min-h-90 w-1/3 p-8 rounded-2xl backdrop-blur-3xl border-2 text-white">
                    <div>
                        <h1 className="text-center text-4xl font-semibold">Esqueci a senha</h1>
                        <p className="text-lg text-center">Clique para enviar um código de acesso ao e-mail cadastrado:</p>
                        <div className="flex w-full justify-center gap-5">
                            <button type="button" onClick={() => setForgottenPassword(false)} className="bg-transparent border hover:bg-gray-700/80 text-white w-full py-2 mt-4 rounded-lg text-lg cursor-pointer clickedAnimation" > Cancelar </button>
                            <CodButton handle={handleCod} label="Enviar Código" type="button"  />
                        </div>
                    </div>
                    <form className="flex flex-col justify-center" onSubmit={onSubmitCod}>
                        <input 
                            onChange={handleChangeCod}
                            value={cod}
                            className="px-1 focus:outline-none w-full focus:w-102/100 pt-3  transition-all duration-300 border-b-2 rounded-t-md" 
                            type="password" 
                            name="cod" 
                            id="codID" 
                            placeholder="Digite o código" 
                            autoComplete="off"
                            required 
                        />
                        <LoginButton isLoading={isLoadingWhenNoPassword} label="Entrar" />
                    </form>
                </div>
            </div>
        </div>
    );
}