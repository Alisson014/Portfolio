import Image from "next/image";
import Link from "next/link";

import { IoPersonSharp } from "react-icons/io5";


export default function Curiosity({image, name, description, link } : {image: string, name: string, description: string, link:string }){
    return(
        <article className="p-2 bg-gray-900 flex flex-col items-center rounded-3xl w-90 h-110 overflow-hidden group">
            <div className="relative flex w-full min-h-106 group-hover:min-h-68 transition-all duration-500 overflow-hidden">
                <Image className=" rounded-2xl object-cover transition-all duration-500" src={image} alt="Image of a curiosity" width={500} height={500} />
                <div className="absolute z-20 min-h-106 top-0 w-full bg-linear-to-b from-transparent to-gray-950/70 group-hover:to-transparent transition-colors duration-500">

                </div>
            </div>
            <header className="pt-3 pl-4 text-left">
                <h1 className="relative z-30 text-2xl font-semibold -translate-y-14 group-hover:translate-y-0 transition-all duration-500 ">{name}</h1>
                <p className="text-gray-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000">{description}</p>
                <div className="flex justify-between items-center w-full mt-4 translate-y-14 group-hover:translate-y-0 transition-all duration-700">
                    <div className="flex gap-1 items-center">
                        <IoPersonSharp size={18} />AJ
                    </div>

                    <Link href={link} target="_blank">
                        <button className="bg-gray-800 px-4 py-2 rounded-xl cursor-pointer hover:bg-gray-950">
                            Ver Mais
                        </button>
                    </Link>
                </div>
            </header>
            
        </article>
    );
}