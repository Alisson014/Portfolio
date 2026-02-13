import Image from "next/image";
import Link from "next/link";

export default function HeroFooter(){

    return(
        <section className=" flex justify-between items-center w-9/10 py-14 bg-linear-to-br from-black to-gray-900 rounded-tl-3xl rounded-br-3xl border border-gray-800 mt-10 overflow-hidden z-20">
            <header className="flex flex-col gap-6 pl-8 md:pl-14 max-w-2xl bg-linear-to-br ">
                <h1 className="text-3xl lg:text-5xl font-medium">A experiência de projeto que você busca</h1>
                <p className="text-md md:text-lg text-gray-400 max-w-lg">Entre em contato o quanto antes. Um bom projeto começa montando-se uma ótima equipe. </p>
                <div className="flex justify-start items-end gap-8">
                    <div className="flex flex-col">
                        <Image src='/images/smile.png' alt="little person caracter" width={130} height={130}/>
                        <Link className="-mt-8" href="https://www.google.com" >
                            <button className="bg-white text-black hover:bg-blue-500 hover:text-white px-4 py-1 sm:px-8 sm:py-2 rounded-md font-medium text-lg cursor-pointer">
                                Contato
                            </button>
                        </Link>
                    </div>

                    <Link href="https://www.google.com" >
                        <button className="bg-gray-800 text-white hover:bg-blue-500 px-4 py-1 sm:px-8 sm:py-2 rounded-md font-medium text-lg cursor-pointer">
                            Currículo
                        </button>
                    </Link>
                </div>
            </header>

            <div className="h-70">
                <Image src="/images/tech-black-hole-01.png" alt="An image of an abstract and technology black hole" width={620} height={620} 
                    className="-mt-8 ml-32 -rotate-30 "
                />
            </div>

        </section>
    );
}