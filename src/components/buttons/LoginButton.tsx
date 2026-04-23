import { RiLoader5Line } from "react-icons/ri";

type LoginButtonType = {
    isLoading: boolean,
    label: "Entrar" | "Alterar",
}

export default function LoginButton( { isLoading, label } : LoginButtonType ){

    return(
        <button disabled={isLoading} type="submit" className="bg-white text-black hover:bg-gray-900/60 hover:text-white w-full py-2 mt-4 rounded-lg text-lg cursor-pointer clickedAnimation" > 
            {
                !isLoading ? label : (
                    <RiLoader5Line className="animate-spin duration-1000 text-white mx-auto" size={30} />
                )
            }
        </button>
    );
}