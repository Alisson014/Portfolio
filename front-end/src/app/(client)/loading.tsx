export default function Loading(){

    return (
        <div className="absolute top-0 left-0 w-screen h-screen flex flex-col justify-center items-center gap-6">
            <div className="p-15 rounded-full border-2 border-t-transparent border-l-blue-600 border-b-blue-600 border-r-blue-600 animate-spin duration-500">
            </div>
            <p>Carregando...</p>
        </div>
    );
}