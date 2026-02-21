import { Curiosities } from "../mockedData/MockedData";
import Curiosity from "./Curiosity";

import { MdPersonSearch } from "react-icons/md";


export default function CuriositiesSection(){


    return(
        <section id="curiosityId" className="w-full mt-18 py-18 px-6 sm:px-12 flex flex-col bg-radial from-[#020c2b] to-bg to-60%">
            <header className="flex flex-col items-center text-center gap-4">
                <div className="text-blue-400">
                    <MdPersonSearch size={44} />
                </div>
                <h1 className="text-3xl sm:text-4xl font-medium">Algumas curiosidades</h1>
                <p className="max-w-4xl text-gray-400 text-md">Pequenos detalhes, mas que compõem o repertório de uma carreira consolidada por dedicação, esforço, resultados e aprendizagam contínua.</p>
            </header>

            <div className="flex justify-center flex-wrap mt-10 gap-7">
                {
                    Curiosities.map(c => (
                        <Curiosity key={c.id} image={c.image} name={c.name} description={c.description} link={c.link} />
                    ))
                }
            </div>
        </section>
    );
}