import { RiLoader5Line } from "react-icons/ri";

type LoginButtonType = {
    isLoading: boolean,
    label: "Atualizar",
}

export default function CurriculumButton( { isLoading, label } : LoginButtonType ){

    return(
        <button disabled={isLoading} type="submit" className="px-8 py-1 bg-black text-white rounded-md border border-black cursor-pointer text-lg hover:bg-gray-500 hover:border-gray-500 clickedAnimation " > 
            {
                !isLoading ? label : (
                    <RiLoader5Line className="animate-spin duration-1000 text-white mx-auto" size={30} />
                )
            }
        </button>
    );
}