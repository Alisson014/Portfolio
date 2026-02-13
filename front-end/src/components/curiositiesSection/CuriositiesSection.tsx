
import Curiosity from "./Curiosity";

import { MdPersonSearch } from "react-icons/md";


export default function CuriositiesSection(){

    const curiosities = [
        { id: 0, image: '/images/curiosity-01.png', name: 'Reportagem', description: 'Presença na mídia local como aluno destaque na região.', link: 'https://globoplay.globo.com/v/13343428/' },
        { id: 1, image: '/images/curiosity-02.png', name: 'Revista IFCE', description: 'Ocupando um pouco a capa da revista ifce, edição de 2025', link: 'https://www.calameo.com/books/005132292eaa19c6ff2ab' },
        { id: 2, image: '/images/curiosity-03.png', name: 'Notícia no IFCE', description: 'Reconhecimento pela trajetória e resultados em competições.', link: 'https://portal.ifce.edu.br/campus/crato/noticias/estudantes-conquistaram-26-premiacoes-em-olimpiadas-do-conhecimento/' },
    ]

    return(
        <section className="w-full mt-18 py-18 px-6 sm:px-12 flex flex-col bg-radial from-[#020c2b] to-bg to-60%">
            <header className="flex flex-col items-center text-center gap-4">
                <div className="text-blue-400">
                    <MdPersonSearch size={44} />
                </div>
                <h1 className="text-3xl sm:text-4xl font-medium">Algumas curiosidades</h1>
                <p className="max-w-4xl text-gray-400 text-md">Pequenos detalhes, mas que compõem o repertório de uma carreira consolidada por dedicação, esforço, resultados e aprendizagam contínua.</p>
            </header>

            <div className="flex justify-center flex-wrap mt-10 gap-7">
                {
                    curiosities.map(c => (
                        <Curiosity key={c.id} image={c.image} name={c.name} description={c.description} link={c.link} />
                    ))
                }
            </div>
        </section>
    );
}