'use client';
import { useEffect, useState } from "react";
import './Star.css';

import { IoIosPeople } from "react-icons/io";
import { DiJavascript1, DiPostgresql  } from "react-icons/di";
import { SiNextdotjs, SiPrisma, SiTailwindcss  } from "react-icons/si";
import { FaReact, FaGitAlt, FaGithub, FaNodeJs, FaPython } from "react-icons/fa";

export default function Bubble({initialLeft, bottom}: { initialLeft: number, bottom: number }) {
    const [left, setLeft] = useState(initialLeft);

    const stacks = [
            {
                icon: <SiNextdotjs className="text-5xl text-white"/>,
            },
            {
                icon: <FaReact className="text-5xl text-white"/>,
            },
            {
                icon: <FaGitAlt className="text-5xl text-white"/>,
            },
            {
                icon: <DiJavascript1  className="text-5xl text-white"/>,
            },
            {
                icon: <FaGithub  className="text-5xl text-white"/>,
            },
            {
                icon: <FaNodeJs  className="text-5xl text-white"/>,
            },
            {
                icon: <DiPostgresql  className="text-5xl text-white"/>,
            },
            {
                icon: <SiPrisma  className="text-5xl text-white"/>,
            },
            {
                icon: <FaPython  className="text-5xl text-white"/>,
            },
            {
                icon: <IoIosPeople  className="text-5xl text-white"/>,
            },
            {
                icon: <SiTailwindcss  className="text-5xl text-white"/>,
            },
            
        ]

    useEffect(() => {
        const randomLeft = () => {
            setLeft(Math.floor(Math.random() * 100));
        }
        const changeLeft = setInterval(() => randomLeft(), 24000);

        return () => clearInterval(changeLeft);
    }, []);

    return(
        <div className="p-3 absolute rounded-2xl bg-linear-to-br from-gray-800 to-gray-950 animationUP "
        style={{
            left: `${left}%`,
            animationDelay: `${bottom}s`,
            transition: 'ease-in-out 14s',
            bottom: '-10px'
        }}>
            {(stacks[initialLeft]?.icon)}
        </div>
    );
}