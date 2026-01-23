'use client';
import { useEffect, useState } from "react";
import './Star.css';

export default function Star({initialLeft, bottom}) {
    const [left, setLeft] = useState(initialLeft);

    

    useEffect(() => {
        const randomLeft = () => {
            setLeft(Math.floor(Math.random() * 100));
        }
        const changeLeft = setInterval(() => randomLeft(), 24000);

        return () => clearInterval(changeLeft);
    }, []);

    return(
        <div className="absolute rounded-full bg-white opacity-70 animationUP"
        style={{
            width: '2px',
            height: '2px',
            boxShadow: '0 0 5px white',
            left: `${left}%`,
            animationDelay: `${bottom}s`,
            transition: 'ease-in-out 14s',
            bottom: '-10px'
        }}>

        </div>
    );
}