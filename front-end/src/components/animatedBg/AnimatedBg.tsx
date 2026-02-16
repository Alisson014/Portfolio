'use client';
import { useState, useEffect } from "react";

import Image from "next/image";

export default function AnimatedBg(){
    const bgs = [
        "/images/login-bg-01.png",
        "/images/bg-contact-1.png",
        "/images/login-bg-02.png",
        "/images/bg-contact-2.png",
        "/images/login-bg-03.jpg",
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsTransitioning(prev => !prev);

            if(isTransitioning){
                setNextIndex((nextIndex + 1) % bgs.length );
            } else {
                setCurrentIndex((currentIndex + 1) % bgs.length);
            }
        }, 3500);

        return () => clearInterval(timer);
    }, [isTransitioning]);


    const currentImage = bgs[currentIndex];
    const nextImage = bgs[nextIndex];

    return(
        <div className="relative h-screen w-full">
            <Image 
                className="absolute top-0 left-0 h-full w-full object-cover transition-all duration-3000" src={nextImage} alt="Background image" width={2000} height={2000} />
            <Image style={{ opacity: `${ isTransitioning ? '1.5' : '0' }` }} 
                className="absolute top-0 left-0 h-full w-full object-cover transition-all duration-3000" src={currentImage} alt="Background image" width={2000} height={2000} />
        </div>
    );
}