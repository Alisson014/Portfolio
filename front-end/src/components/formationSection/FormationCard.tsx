
import { FaComputer } from "react-icons/fa6";

type FormationCardType = {
    id: number,
    name: string,
    description: string,
    isClient: boolean,
}

export default function FormationCard({ id, name, description, isClient } : FormationCardType){

    return(
        <article className="flex gap-4 w-full bg-linear-to-br from-gray-800/90 to-gray-900/70 p-2 mt-4 rounded-lg hover:from-gray-900 transition-colors duration-500 group">
            <div className="flex justify-center items-center">
                {
                    isClient ? (
                        <FaComputer className="text-5xl p-1 text-blue-800 bg-blue-500/10 rounded-lg group-hover:scale-110 transition-transform" />
                    ) : (
                        <h1 className="text-2xl font-semibold px-4 bg-blue-500/10 rounded-lg">Id: {id}</h1>
                    )
                }
            </div>
            <div>
                <h1 className="text-sm font-semibold">{name}</h1>
                <p className="mt-1 text-xs text-text opacity-60">{description}</p>
            </div>
        </article>
    );
}