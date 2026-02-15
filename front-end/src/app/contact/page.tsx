import ContactForm from "@/src/components/contactForm/ContactForm";
import SocialMedia from "@/src/components/footer/SocialMedia";
import Bubble from "@/src/components/initialHero/IconStack";

import Image from "next/image"

import { FaGlobe, FaCode  } from "react-icons/fa";
import { MdEmail, MdComputer } from "react-icons/md";


export default function ContactPage(){
    const stars = [
        {id: 1, bottom: 1}, {id: 2, bottom: 3}, {id: 3, bottom: 0.5}, {id: 4, bottom: 5}, {id: 5, bottom: 1.5}, {id: 6, bottom: 8},
        {id: 7, bottom: 2}, {id: 8, bottom: 0.8}, {id: 9, bottom: 0.9}, {id: 10, bottom: 6.5}, {id: 11, bottom: 2.5}, {id: 12, bottom: 4.5},
        {id: 13, bottom: 0.4}, {id: 14, bottom: 1}, {id: 15, bottom: 5.5}, {id: 16, bottom: 1.8}, {id: 17, bottom: 7.5}, {id: 18, bottom: 3.5},
        {id: 19, bottom: 0.95}, {id: 20, bottom: 3.8}

    ]

    return(
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

                    {/* {stars.map((star => (
                        <Star key={star.id} initialLeft={star.id*5} bottom={star.bottom}/>
                    )))} */}

                    {stars.slice(0, 10).map((star => (
                        <Bubble key={star.id} initialLeft={star.id} bottom={star.bottom}/>
                    )))}
                </div>
            </div>

            <SocialMedia />
        </div>
    );
}