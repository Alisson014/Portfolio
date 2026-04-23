import Image from "next/image";

type SkillType = {
    icon: string,
    name: string,
    description: string,
}

export default function Skill({icon, name, description} : SkillType){

    return(
        <article className="flex flex-col items-center gap-2 bg-linear-to-br from-gray-900 to-gray-950 py-2 px-10 rounded-lg border-2 border-gray-900 group hover:scale-105 hover:-translate-y-2 hover:from-blue-900/50 hover:border-blue-500/50 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.5)] transition-all duration-300">
            <div className="flex justify-center items-center p-2 border-2 border-blue-950 rounded-full bg-linear-to-br from-gray-950 to-black group-hover:scale-110 group-hover:border-blue-800 transition-all duration-500">
                <Image className="opacity-60 group-hover:opacity-100 transition-opacity duration-500" src={icon} alt="Skill icon" width={40} height={40}/>
            </div>
                <h1 className="text-xl text-center">{name}</h1>
            <div className=" text-center">
                <p className="text-gray-500 max-w-50">{description}</p>
            </div>
        </article>
    );
}