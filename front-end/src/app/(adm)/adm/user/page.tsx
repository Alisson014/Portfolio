
import AnimatedBg from "@/src/components/animatedBg/AnimatedBg";
import UserData from "@/src/components/userData/UserData";


export default function UserPage(){

    return (
        <div className="relative grid place-items-stretch w-full h-full">
            <AnimatedBg />
            <UserData />
        </div>
    );
}