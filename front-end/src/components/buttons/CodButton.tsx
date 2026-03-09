'use client';
import { useState } from "react";


import { RiLoader5Line } from "react-icons/ri";

type LoginButtonType = {
    handle: () => void,
    type: "submit" | "button",
    label: string,
}

export default function CodButton( { handle, label, type } : LoginButtonType ){
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function handleClicked(){
        handle();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }

    return(
        <button disabled={isLoading} type={type} onClick={handleClicked} className="bg-white text-black hover:bg-gray-900/60 hover:text-white w-full py-2 mt-4 rounded-lg text-lg cursor-pointer clickedAnimation" > 
            {
                !isLoading ? label : (
                    <RiLoader5Line className="animate-spin duration-1000 text-black mx-auto" size={30} />
                )
            }
        </button>
    );
}