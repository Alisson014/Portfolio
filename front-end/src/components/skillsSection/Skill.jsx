

export default function Skill({icon, name, description}){

    return(
        // <article className="flex items-center gap-2 bg-linear-to-br from-gray-900 to-gray-950 p-2 rounded-full border-2 border-gray-900">
        //     <div className="flex justify-center items-center px-4 py-4 border-2 border-blue-950 rounded-full bg-linear-to-br from-gray-950 to-black">
        //         <SiNextdotjs className="text-5xl text-blue-950"/>
        //     </div>
        //     <div className="pr-4">
        //         <h1 className="text-xl">Next js</h1>
        //         <p className="text-gray-500 max-w-50">Tecnologia atualíssima para FullStack.</p>
        //     </div>
        // </article>
        // 

        <article className="flex flex-col items-center gap-2 bg-linear-to-br from-gray-900 to-gray-950 py-2 px-10 rounded-lg border-2 border-gray-900 group hover:scale-105 hover:-translate-y-2 hover:from-blue-900/50 hover:border-blue-500/50 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.5)] transition-all duration-300">
            <div className="flex justify-center items-center  py-1 px-1 border-2 border-blue-950 rounded-full bg-linear-to-br from-gray-950 to-black group-hover:scale-110 group-hover:border-blue-800 transition-all duration-500">
                {icon}
            </div>
                <h1 className="text-xl">{name}</h1>
            <div className=" text-center">
                <p className="text-gray-500 max-w-50">{description}</p>
            </div>
        </article>
    );
}