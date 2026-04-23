'use client';
import { useEffect, useState } from "react";

import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineAutoGraph } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import { LuGraduationCap } from "react-icons/lu";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineOpenInNew, MdDeleteOutline} from "react-icons/md";

import { CertificatesType, FormationType, Messages, MessageType, ProjectsType, SkillsType, VisitorType } from "../mockedData/MockedData";

import './DashboardHome.css';
import AreaGraph from "../charts/AreaGraph";
import BarGraph from "../charts/BarGraph";
import PizzaGraph from "../charts/PizzaGraph";
import RadarGraph from "../charts/RadarGraph";
import ModalViewMessages from "../dashboardMessages/ModalViewMessages";
import ModalDeleteMessage from "../dashboardMessages/ModalDeleteMessage";
import { toast } from "react-toastify";


type DashboardHomeType = {
    Skills: Array<SkillsType>,
    Certificates: Array<CertificatesType>,
    Formation: Array<FormationType>,
    Projects: Array<ProjectsType>,
    Visitors: Array<VisitorType>,
}

export default function DashboardHome( { Certificates, Formation, Projects, Skills, Visitors } : DashboardHomeType ){
    const [isModalViewActive, setIsModalViewActive] = useState<boolean>(false);
    const [isModalDeleteActive, setIsModalDeleteActive] = useState<boolean>(false);
    const [message, setMessage] = useState<MessageType>({ id: 0, name: '', company: '', email: '', message: '', subject: '', sentAt: '' });
    const [index, setIndex] = useState<number>(0);

    const [isUpdating, setIsUpdating] = useState<boolean>(false);

    useEffect(() => {
        async function Refresh() {
            if(isUpdating){
                toast("Messages Updated");
            }

            setIsUpdating(false);
        }

        Refresh();
    }, [isUpdating])

    return(
        <div className="w-full py-4 appearAnimation">
            <div className="flex justify-center sm:justify-between items-center flex-wrap gap-2 w-full">
                <article className="flex items-end justify-between w-9/10 sm:w-11/50 min-w-40 bg-linear-to-br from-blue-700 to-cyan-600 p-4 rounded-lg hover:scale-105 hover:-translate-y-1 transition-transform duration-200">
                    <header>
                        <h2>Skills: </h2>
                        <h1 className="text-7xl font-bold">{Skills.length}</h1>
                    </header>
                    <MdOutlineAutoGraph className="opacity-50" size={80} />
                </article>

                <article className="flex items-end justify-between w-9/10 sm:w-11/50 min-w-40 bg-linear-to-br from-green-600 to-emerald-700 p-4 rounded-lg hover:scale-105 hover:-translate-y-1 transition-transform duration-200">
                    <header>
                        <h2>Certificados: </h2>
                        <h1 className="text-7xl font-bold">{Certificates.length}</h1>
                    </header>
                    <PiCertificate className="opacity-50" size={80} />
                </article>

                <article className="flex items-end justify-between w-9/10 sm:w-11/50 min-w-40 bg-linear-to-br from-yellow-500 to-orange-700 p-4 rounded-lg hover:scale-105 hover:-translate-y-1 transition-transform duration-200">
                    <header>
                        <h2>Formações: </h2>
                        <h1 className="text-7xl font-bold">{Formation.length}</h1>
                    </header>
                    <LuGraduationCap className="opacity-50" size={80} />
                </article>

                <article className="flex items-end justify-between w-9/10 sm:w-11/50 min-w-40 bg-linear-to-br from-red-500 to-red-800 p-4 rounded-lg hover:scale-105 hover:-translate-y-1 transition-transform duration-200">
                    <header>
                        <h2>Projetos: </h2>
                        <h1 className="text-7xl font-bold">{Projects.length}</h1>
                    </header>
                    <GoProjectSymlink className="opacity-50" size={80} />
                </article>
            </div>

            <div className="grid grid-cols-1 place-items-stretch gap-4 w-full mt-4">
                <div className="w-full max-h-60 bg-linear-to-br from-gray-900 to-gray-950 border border-gray-700 p-4 rounded-lg">
                    <header className="flex justify-between items-center w-full pb-2">
                        <div className="flex items-center gap-4">
                            <MdOutlineMailOutline size={30} /> 
                            <h1 className="text-sm sm:text-md">Mensagens recebidas</h1>
                        </div>
                    </header>
                    <table className="flex flex-col w-full h-4/5 messageTable">
                        <thead className="bg-gray-800/60 flex flex-col justify-around pl-4 rounded-t-lg">
                            <tr className="grid grid-cols-2 sm:grid-cols-4 py-2">
                                <td>Empresa</td>
                                <td className="hidden sm:block">Assunto</td>
                                <td>Ação</td>
                                <td className="hidden sm:block">Enviada em</td>
                            </tr>
                        </thead>
                        <tbody className="rounded-b-lg overflow-y-scroll">
                            {
                                Messages.map(m => (
                                    <tr key={m.id} className="grid grid-cols-2 sm:grid-cols-4 w-full pt-2 pb-1 pl-4">
                                        <td>{m.company}</td>
                                        <td title="Confirmação de vínculo" className="hidden sm:block">{m.subject}</td>
                                        <td className="flex justify-start items-center gap-2">
                                            <button onClick={() => {setMessage(m); setIsModalViewActive(true)}}> <MdOutlineOpenInNew className="text-green-500 cursor-pointer clickedAnimation" size={20} /> </button>
                                            <button onClick={() => {setIndex(m.id); setIsModalDeleteActive(true)}} > <MdDeleteOutline className="text-red-500 cursor-pointer clickedAnimation" size={20} /> </button>
                                        </td>
                                        <td className="hidden sm:block">{m.sentAt.slice(0, 10)}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 place-items-stretch gap-4 w-full">
                    <BarGraph Certificates={Certificates} Formation={Formation} Projects={Projects} Skills={Skills}  />
                    <div className="grid grid-cols-1 place-items-stretch gap-4 w-full">
                        <AreaGraph Visitors={Visitors}/>
                        <div className="grid grid-cols-1 md:grid-cols-2 place-items-stretch gap-4 w-full">
                            <PizzaGraph Skills={Skills} />
                            <RadarGraph Skills={Skills} />
                        </div>
                    </div>
                </div>
            </div>

            { message.id != 0 && <ModalViewMessages isActive={isModalViewActive} setIsActive={setIsModalViewActive} message={message} setIsUpdating={setIsUpdating} /> }
            { index != 0 && <ModalDeleteMessage index={index} isActive={isModalDeleteActive} setIsActive={setIsModalDeleteActive} setIsUpdating={setIsUpdating} /> }
        </div>
    );
}