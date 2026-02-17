'use client';

import { toast } from "react-toastify";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useState, ChangeEvent } from "react";


import { MdEmail } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";



export default function LoginForm(){
    const [forgottenPassword, setForgottenPassword] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [cod, setCod] = useState('');

    const { executeRecaptcha } = useGoogleReCaptcha();    

    async function getRecaptcha(){
        if (!executeRecaptcha){
            toast.error("Recaptcha não está funcionando.");
            return
        }

        const token = await executeRecaptcha("form_submit");

        const responseRecaptcha = await fetch('/api/verify-recaptcha', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({ token })
        });


        const dataRecaptcha = await responseRecaptcha.json();

        if (dataRecaptcha.score < 0.5){
            toast.error("Você é um robo, tente mais tarde.");
        }

        return dataRecaptcha.success;
    }

    function handleChange (e: ChangeEvent<HTMLInputElement>) {
        setFormData({ ...formData, [e.target?.name]: e.target?.value });
        console.log(formData);
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

            const recaptchaSuccess = await getRecaptcha();

            if(recaptchaSuccess){
                // Code Request
                toast.info("Código enviado!");              
            } else{
                throw new Error("Você não passou no teste do Recaptcha.");
            }
            
        } catch (e:unknown){
            if (e instanceof Error) {
                toast.error(e.message);
            }
        }
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        
        try {
            const recaptchaSuccess = await getRecaptcha();

            if(recaptchaSuccess){
                // Login request

                setFormData({ email: '', password: '' });
                toast.success("Login Realizado com sucesso!");
            } else {
                throw new Error("Você não passou no teste do Recaptcha.");
            }

        } catch (e: unknown){
            if (e instanceof Error){
                toast.error(e.message);    
            }
        }
    }

    async function onSubmitCod(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();

        try{

            const recaptchaSuccess = await getRecaptcha();

            if(recaptchaSuccess){
                // Validation Cod Request

                toast.success("Código válido!");
                setCod('');
            } else {
                throw new Error("Você não passou no teste do Recaptcha.");
            }
        } catch (e : unknown){
            if (e instanceof Error){
                toast.error(e.message);
            }
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

                        <button type="button" className="hover:underline text-center cursor-pointer" onClick={() => setForgottenPassword(true)} > Esqueci a senha </button>
                        <button type="submit" className="bg-white hover:bg-gray-900/60 hover:text-white text-black w-full py-2 mt-4 rounded-lg text-lg cursor-pointer" > Entrar </button>
                    </form>
                </div>
            </div>

            <div className="flex justify-center w-screen shrink-0 transition-all duration-200 sm:duration-400" style={{ translate: `${ forgottenPassword ? '-100vw' : '0vw' }` }}>
                <div className="flex flex-col justify-between min-w-xs min-h-90 w-1/3 p-8 rounded-2xl backdrop-blur-3xl border-2 text-white">
                    <div>
                        <h1 className="text-center text-4xl font-semibold">Esqueci a senha</h1>
                        <p className="text-lg text-center">Clique para enviar um código de acesso ao e-mail cadastrado:</p>
                        <div className="flex w-full justify-center gap-5">
                            <button type="button" onClick={() => setForgottenPassword(false)} className="bg-transparent border hover:bg-gray-700/80 text-white w-60 py-2 mt-4 rounded-lg text-lg cursor-pointer" > Cancelar </button>
                            <button type="button" onClick={handleCod} className="bg-white hover:bg-gray-900/60 text-black w-60 py-2 mt-4 rounded-lg text-lg cursor-pointer" > Enviar código </button>
                        </div>
                    </div>
                    <form className="flex flex-col justify-center" onSubmit={onSubmitCod}>
                        <input 
                            onChange={handleChangeCod}
                            value={cod}
                            className="px-1 focus:outline-none w-full focus:w-102/100 pt-3  transition-all duration-300 border-b-2 rounded-t-md" 
                            type="text" 
                            name="cod" 
                            id="codID" 
                            placeholder="Digite o código" 
                            autoComplete="off"
                            required 
                        />
                        <button type="submit" className="bg-white text-black hover:bg-gray-900/60 hover:text-white w-full py-2 mt-4 rounded-lg text-lg cursor-pointer" > Entrar </button>
                    </form>
                </div>
            </div>
        </div>
    );
}