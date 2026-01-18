'use client';


const HeroBlackHole = () => {

    return(
        <section className="flex w-full h-100 overflow-hidden justify-center items-center -mt-8">
            <video autoPlay muted loop className=" object-cover rotate-180 -mt-50">
                <source src="videos/blackHole.mp4" type="video/mp4"></source>
            </video>
        </section>
    );
}

export default HeroBlackHole;