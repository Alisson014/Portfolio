import { RiLoader5Line } from "react-icons/ri";

type LoginButtonType = {
    handle: () => void,
    isLoading: boolean,
    label: "Deletar",
}

export default function ModalDeleteButton( { handle, isLoading, label } : LoginButtonType ){

    return(
        <button disabled={isLoading} type="button" onClick={handle} className="border border-transparent py-1 w-30 rounded-full bg-red-700 cursor-pointer hover:border-text" > 
            {
                !isLoading ? label : (
                    <RiLoader5Line className="animate-spin duration-1000 text-white mx-auto" size={24} />
                )
            }
        </button>
    );
}