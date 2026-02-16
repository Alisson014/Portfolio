import AnimatedBg from "@/src/components/animatedBg/AnimatedBg";
import LoginForm from "@/src/components/loginForm/LoginForm";
import Navbar from "@/src/components/navbar/Navbar";

export default function LoginPage(){

    return(
        <div className="relative flex justify-center items-center w-full">
            <Navbar/>
            <AnimatedBg />
            <LoginForm />            
        </div>
    );
}