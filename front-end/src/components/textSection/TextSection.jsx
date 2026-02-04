'use client';
import { useEffect, useState, useRef } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { SiAlwaysdata } from "react-icons/si";


export default function TextSection() {
    const [isOpened, setIsOpened] = useState(false);
    const [heights, setHeights] = useState({initial: 0, expanded: 0});

    const initialCardRef = useRef(null);
    const fullContentRef = useRef(null);

    useEffect(() => {
        const observer = new ResizeObserver(() => {
            if (initialCardRef.current && fullContentRef.current) {
                setHeights({
                    initial: initialCardRef.current.clientHeight,
                    expanded: fullContentRef.current.clientHeight
                });
            }
        });

        if (initialCardRef.current) observer.observe(initialCardRef.current);
        if (fullContentRef.current) observer.observe(fullContentRef.current);

        return () => observer.disconnect();  
    }, []);

    

    const handleExpend = () => {
        setIsOpened(!isOpened);
    }

    return (
        <div id="ReadMore" style={{height: isOpened ? `${heights.expanded}px` : `${heights.initial+5}px`, transition: 'ease-in-out 1s'}} className="overflow-hidden transition-all duration-1000">
            <section ref={fullContentRef} className="flex flex-col gap-5 mx-4 sm:mx-8 md:mx-12">
                <article ref={initialCardRef} className="flex flex-col items-start gap-5 w-full bg-linear-to-br from-gray-900  to-gray-950 border-2 border-gray-900 p-6 sm:p-8  rounded-xl">
                    <h1 className="text-2xl">Sobre Mim</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laborum tempora distinctio rem, fugit at pariatur, 
                        enim quaerat nihil nobis sed cum aspernatur asperiores praesentium, placeat repellat! Maxime, voluptas quo. Lorem 
                        ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur repellat deleniti eligendi architecto doloribus 
                        ullam consectetur libero accusamus unde fugit nam laborum, mollitia iure numquam eos quas quam debitis!
                    </p>
                    <button onClick={handleExpend}
                    className="flex items-center justify-between border-2 text-sm text-gray-500 border-gray-600 rounded-full px-3 py-0.5 group hover:bg-gray-600 cursor-pointer" >
                        <p className="group-hover:text-gray-900">{isOpened ? 'Mostrar Menos' : 'Mostrar Mais'}</p>
                        <MdOutlineKeyboardArrowRight  className={`translate-x-2 text-2xl text-gray-600 scale-120 group-hover:text-gray-900 ${isOpened ? 'rotate-90' : ''} transition-all duration-500`} />
                    </button>
                </article>

                <article className="relative flex gap-4 w-full bg-linear-to-br from-gray-900 to-gray-950 border-2 border-gray-900 p-8 rounded-xl">
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laborum tempora distinctio rem, fugit at pariatur, 
                        enim quaerat nihil nobis sed cum aspernatur asperiores praesentium, placeat repellat! Maxime, voluptas quo. Lorem 
                        ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur repellat deleniti eligendi architecto doloribus 
                        ullam consectetur libero accusamus unde fugit nam laborum, mollitia iure numquam eos quas quam debitis!
                    </p>
                    <p className="hidden sm:flex">
                        <SiAlwaysdata className="text-7xl p-2 rotate-y-180 rotate-180" />
                    </p>
                    
                </article>

                <article className="flex gap-5 w-full bg-linear-to-br from-gray-900 to-gray-950 border-2 border-gray-900 p-8 rounded-xl">
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laborum tempora distinctio rem, fugit at pariatur, 
                        enim quaerat nihil nobis sed cum aspernatur asperiores praesentium, placeat repellat! Maxime, voluptas quo. Lorem 
                        ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur repellat deleniti eligendi architecto doloribus 
                        ullam consectetur libero accusamus unde fugit nam laborum, mollitia iure numquam eos quas quam debitis!
                    </p>
                    <p className="hidden sm:flex">
                        <FaArrowUpRightDots className="text-7xl p-2" />
                    </p>
                    
                </article>
            </section>
        </div>
    );
}