import { RiLoader5Line } from "react-icons/ri";

type LoginButtonType = {
    isLoading: boolean,
    label: string,
}

export default function DashboardButton( { isLoading, label } : LoginButtonType ){

    return(
        <button disabled={isLoading} type="submit" className="w-full py-3 h-13 mt-4 bg-gray-900 rounded-md hover:bg-gray-950 border border-transparent hover:border-text cursor-pointer clickedAnimation" > 
            {
                !isLoading ? label : (
                    <RiLoader5Line className="animate-spin duration-1000 text-white mx-auto" size={30} />
                )
            }
        </button>
    );
}