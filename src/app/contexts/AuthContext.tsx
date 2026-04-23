'use client';
import { createContext, useEffect, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { LoginRequest, recoverUser } from "../api/auth-simulation/route";
import { setCookie, parseCookies } from "nookies";
import { useRouter } from "next/navigation"; 

type UserType = {
    name: string,
    email: string,
}

type LogInType = {
    email: string,
    password: string,
}

type AuthContextType = {
    isAuthenticated : boolean,
    user: UserType,
    LogIn: (data: LogInType) => Promise<void>,
    GetRecaptcha: () => Promise<boolean>,
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children, }: Readonly<{ children: React.ReactNode; }>){
    const { executeRecaptcha } = useGoogleReCaptcha();    
    const router = useRouter();
    const [user, setUser] = useState<UserType>({ name: '', email: '' });

    const isAuthenticated = !!user;

    useEffect(() => {
        const { 'portfolio.token':token } = parseCookies();

        if (token){
            recoverUser().then(response => {
                setUser( response.user);
            });
        }
        
    }, []); 

    async function LogIn({ email, password }: LogInType){
        const { token, user } = await LoginRequest( { email, password } );

        setCookie(undefined, 'portfolio.token', token, {
            maxAge: 60 * 60 * 1, // 1 hour
        })
        
        setUser(user);

        router.push('/adm/dashboard');
    }

    async function GetRecaptcha(){
        if (!executeRecaptcha) {
            throw new Error('Recaptcha não está funcionando');
        }
        
        const token = await executeRecaptcha("form_submit");

        const responseRecaptcha = await fetch('/api/verify-recaptcha', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({ token })
        });


        const dataRecaptcha = await responseRecaptcha.json();

        return dataRecaptcha.success;
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, LogIn, GetRecaptcha }} >
            {children}
        </AuthContext.Provider>
    );
}