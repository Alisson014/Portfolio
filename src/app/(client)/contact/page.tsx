import { ToastContainer, Bounce } from "react-toastify";

import ContactForm from "@/src/components/contactForm/ContactForm";
import SocialMedia from "@/src/components/footer/SocialMedia";
import ReCaptchaProvider from "@/src/components/recaptchaProvider/ReCaptchaProvider";

import Image from "next/image"

import { FaGlobe, FaCode  } from "react-icons/fa";
import { MdEmail, MdComputer } from "react-icons/md";


export default function ContactPage(){

    return(
            <ReCaptchaProvider>
                <div className="w-full bg-[#060b13]">
                    <div className="relative grid justify-center items-center w-full h-70 overflow-hidden">
                        <Image src="/images/bg-contact-1.png" className="w-full h-full object-cover" alt="Apresentation image" width={2200} height={2200}/>
                        <div className="absolute flex justify-center items-center w-full h-full bg-black/60">
                            <h1 className="text-5xl font-medium text-white">Contato</h1>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 px-2 sm:px-8 py-24 w-full">
                        <div id="elementHeight" className=" flex flex-col items-center justify-start  lg:w-9/10 min-w-xs gap-8">
                            <div className="bg-gray-900 w-full p-8 rounded-lg">
                                <h1 className="flex items-center gap-2 text-3xl font-semibold">
                                    <FaGlobe size={20} />
                                    José Alisson
                                </h1>

                                <div className="flex flex-wrap justify-between w-full mt-10 gap-y-8">
                                    <div>
                                        <h1 className="flex items-center gap-2 text-lg font-semibold">
                                            <MdEmail size={20} />
                                            E-mail:
                                        </h1>
                                        <p className="text-gray-400">josealissondiasdacostaf10@gmail.com</p>
                                    </div>

                                    <div>
                                        <h1 className="flex items-center gap-2 text-lg font-semibold">
                                            <MdComputer size={20} />
                                            Técnico:
                                        </h1>
                                        <p className="text-gray-400">Em informática para internet</p>
                                    </div>

                                    <div>
                                        <h1 className="flex items-center gap-2 text-lg font-semibold">
                                            <FaCode size={20} />
                                            Dev:
                                        </h1>
                                        <p className="text-gray-400">Desenvolvedor FullStack</p>
                                    </div>

                                    <div>
                                        <h1 className="flex items-center gap-2 text-lg font-semibold">
                                            <FaCode size={20} />
                                            Engenharia
                                        </h1>
                                        <p className="text-gray-400">Graduando em engenharia de software</p>
                                    </div>                            
                                </div>
                            </div>

                            <ContactForm />
                        </div>

                        <div className="relative flex justify-center items-center w-full lg:w-9/10 min-w-xs h-50 md:h-full bg-linear-to-t from-gray-900 to-black rounded-lg overflow-hidden">
                            
                            <div className="absolute w-full h-full flex justify-center items-center z-20">
                                <Image src={"/images/logo-hero-1.png"} alt="Developer icon" width={100} height={100} />
                            </div>

                            <div className="absolute w-full h-full flex justify-center items-center z-10">
                                <Image src={"/images/login-bg-01.png"} className="object-cover w-full h-full" alt="Developer icon" width={1000} height={1000} />
                            </div>
                        </div>
                    </div>

                    <SocialMedia />
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition={Bounce}
                />
            </ReCaptchaProvider>
            
    );
}