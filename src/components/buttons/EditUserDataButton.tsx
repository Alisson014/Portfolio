import { RiLoader5Line } from "react-icons/ri";

type EditUserDataButtonType = {
    isEditing: boolean,
    isLoading: boolean,
    label: "Editar",
}

export default function EditUserDataButton( { isLoading, label, isEditing } : EditUserDataButtonType ){

    return(
        <button disabled={isLoading || isEditing} type="submit" className="backdrop-blur-3xl hover:bg-gray-900/80 hover:text-white text-white border-2 w-full py-2 mt-4 rounded-lg text-lg cursor-pointer clickedAnimation" > 
            {
                !isLoading ? label : (
                    <RiLoader5Line className="animate-spin duration-1000 text-white mx-auto" size={30} />
                )
            }
        </button>
    );
}