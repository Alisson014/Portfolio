'use client';
import { AuthContext } from "@/src/app/contexts/AuthContext";
import { useContext } from "react";


export default function DashboardPage(){
    const { user } = useContext(AuthContext);

    return(
        <div>
            <br /><br /><br /><br /><br />
            <h1>Dashboard</h1>
            <h1>Bem-vindo! {user.name}</h1>
        </div>
    );
}