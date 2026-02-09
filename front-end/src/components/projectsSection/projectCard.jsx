import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ thumbnail, title, color }){

    return(
        <article className="relative flex text-white flex-col gap-2 rounded-2xl overflow-hidden max-w-90 h-70 group">
            <Image className="group-hover:scale-105 transition-transform duration-300" src={thumbnail} alt="project card image" width={350} height={350} />
            <div className={`absolute -bottom-14 -left-18 w-12/10 h-40 rounded-3xl -rotate-8 ml-2 group-hover:-bottom-10 transition-all duration-300`}
                style={{ background: `${color}` }}
            ></div>
            <div className="absolute -bottom-14 h-35 flex flex-col justify-around  w-full group-hover:bottom-0 transition-all duration-300">
                <div className="flex justify-between items-center w-full px-6">
                    <Image src="/images/developer-icon.png" alt="Developer's icon" width={60} height={60} />
                    <p className="text-md font-medium max-w-46 text-center">{title}</p>
                </div>
                <Link href="/" className="flex justify-end px-8 py-3">
                    <button className="border px-6 py-1 rounded-full hover:bg-white hover:text-blue-500 cursor-pointer">Ver Mais</button>
                </Link>
            </div>
        </article>
    );
}