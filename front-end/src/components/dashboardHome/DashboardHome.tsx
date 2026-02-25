
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineAutoGraph } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import { LuGraduationCap } from "react-icons/lu";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineOpenInNew, MdDeleteOutline} from "react-icons/md";

import './DashboardHome.css';
import AreaGraph from "../charts/AreaGraph";
import BarGraph from "../charts/BarGraph";
import PizzaGraph from "../charts/PizzaGraph";
import RadarGraph from "../charts/RadarGraph";


export default function DashboardHome(){

    return(
        <div className="w-full py-4 appearAnimation">
            <div className="flex justify-center sm:justify-between items-center flex-wrap gap-2 w-full">
                <article className="flex items-end justify-between w-9/10 sm:w-11/50 min-w-40 bg-linear-to-br from-blue-700 to-cyan-600 p-4 rounded-lg hover:scale-105 hover:-translate-y-1 transition-transform duration-200">
                    <header>
                        <h2>Skills: </h2>
                        <h1 className="text-7xl font-bold">11</h1>
                    </header>
                    <MdOutlineAutoGraph className="opacity-50" size={80} />
                </article>

                <article className="flex items-end justify-between w-9/10 sm:w-11/50 min-w-40 bg-linear-to-br from-green-600 to-emerald-700 p-4 rounded-lg hover:scale-105 hover:-translate-y-1 transition-transform duration-200">
                    <header>
                        <h2>Certificados: </h2>
                        <h1 className="text-7xl font-bold">8</h1>
                    </header>
                    <PiCertificate className="opacity-50" size={80} />
                </article>

                <article className="flex items-end justify-between w-9/10 sm:w-11/50 min-w-40 bg-linear-to-br from-yellow-500 to-orange-700 p-4 rounded-lg hover:scale-105 hover:-translate-y-1 transition-transform duration-200">
                    <header>
                        <h2>Formações: </h2>
                        <h1 className="text-7xl font-bold">3</h1>
                    </header>
                    <LuGraduationCap className="opacity-50" size={80} />
                </article>

                <article className="flex items-end justify-between w-9/10 sm:w-11/50 min-w-40 bg-linear-to-br from-red-500 to-red-800 p-4 rounded-lg hover:scale-105 hover:-translate-y-1 transition-transform duration-200">
                    <header>
                        <h2>Projetos: </h2>
                        <h1 className="text-7xl font-bold">6</h1>
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
                            <tr className="grid grid-cols-3 py-2">
                                <td>Empresa</td>
                                <td>Assunto</td>
                                <td>Ação</td>
                            </tr>
                        </thead>
                        <tbody className="rounded-b-lg overflow-y-scroll">
                            <tr className="grid grid-cols-3 w-full pt-2 pb-1 pl-4">
                                <td>Netflix</td>
                                <td title="Confirmação de vínculo">Confirmação de vínculo</td>
                                <td className="flex justify-start items-center gap-2">
                                    <MdOutlineOpenInNew className="text-green-500 cursor-pointer clickedAnimation" size={20} />
                                    <MdDeleteOutline className="text-red-500 cursor-pointer clickedAnimation" size={20} />
                                </td>
                            </tr>
                            <tr className="grid grid-cols-3 w-full pt-2 pb-1 pl-4">
                                <td>Google</td>
                                <td title="Confirmação de vínculo">Confirmação de vínculo</td>
                                <td className="flex justify-start items-center gap-2">
                                    <MdOutlineOpenInNew className="text-green-500 cursor-pointer clickedAnimation" size={20} />
                                    <MdDeleteOutline className="text-red-500 cursor-pointer clickedAnimation" size={20} />
                                </td>
                            </tr>
                            <tr className="grid grid-cols-3 w-full pt-2 pb-1 pl-4">
                                <td>Amazon</td>
                                <td title="Confirmação de vínculo">Confirmação de vínculo</td>
                                <td className="flex justify-start items-center gap-2">
                                    <MdOutlineOpenInNew className="text-green-500 cursor-pointer clickedAnimation" size={20} />
                                    <MdDeleteOutline className="text-red-500 cursor-pointer clickedAnimation" size={20} />
                                </td>
                            </tr>
                            <tr className="grid grid-cols-3 w-full pt-2 pb-1 pl-4">
                                <td>PM</td>
                                <td title="Confirmação de vínculo">Confirmação de vínculo</td>
                                <td className="flex justify-start items-center gap-2">
                                    <MdOutlineOpenInNew className="text-green-500 cursor-pointer clickedAnimation" size={20} />
                                    <MdDeleteOutline className="text-red-500 cursor-pointer clickedAnimation" size={20} />
                                </td>
                            </tr>
                            <tr className="grid grid-cols-3 w-full pt-2 pb-1 pl-4">
                                <td>Editora Brasil</td>
                                <td title="Confirmação de vínculo">Confirmação de vínculo</td>
                                <td className="flex justify-start items-center gap-2">
                                    <MdOutlineOpenInNew className="text-green-500 cursor-pointer clickedAnimation" size={20} />
                                    <MdDeleteOutline className="text-red-500 cursor-pointer clickedAnimation" size={20} />
                                </td>
                            </tr>
                            <tr className="grid grid-cols-3 w-full pt-2 pb-1 pl-4">
                                <td>Microsoft</td>
                                <td title="Confirmação de vínculo">Confirmação de vínculo</td>
                                <td className="flex justify-start items-center gap-2">
                                    <MdOutlineOpenInNew className="text-green-500 cursor-pointer clickedAnimation" size={20} />
                                    <MdDeleteOutline className="text-red-500 cursor-pointer clickedAnimation" size={20} />
                                </td>
                            </tr>
                            <tr className="grid grid-cols-3 w-full pt-2 pb-1 pl-4">
                                <td>Netflix</td>
                                <td title="Confirmação de vínculo">Confirmação de vínculo</td>
                                <td className="flex justify-start items-center gap-2">
                                    <MdOutlineOpenInNew className="text-green-500 cursor-pointer clickedAnimation" size={20} />
                                    <MdDeleteOutline className="text-red-500 cursor-pointer clickedAnimation" size={20} />
                                </td>
                            </tr>
                            <tr className="grid grid-cols-3 w-full pt-2 pb-1 pl-4">
                                <td>Netflix</td>
                                <td title="Confirmação de vínculo">Confirmação de vínculo</td>
                                <td className="flex justify-start items-center gap-2">
                                    <MdOutlineOpenInNew className="text-green-500 cursor-pointer clickedAnimation" size={20} />
                                    <MdDeleteOutline className="text-red-500 cursor-pointer clickedAnimation" size={20} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 place-items-stretch gap-4 w-full">
                    <BarGraph />
                    <div className="grid grid-cols-1 place-items-stretch gap-4 w-full">
                        <AreaGraph/>
                        <div className="grid grid-cols-1 md:grid-cols-2 place-items-stretch gap-4 w-full">
                            <PizzaGraph />
                            <RadarGraph />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}