import { NextResponse } from "next/server";

import { ImportProjectType } from "@/src/components/mockedData/MockedData";

export async function GET(){

    try {
        const reposResponse = await fetch(process.env.URL_REPOSITORIES!, { method: "GET" });
        const data = await reposResponse.json();

        const response = data.map(({id, name, description, homepage, html_url, created_at }: ImportProjectType) => ({id, name, description, homepage, html_url, created_at}));

        if (response){
            return NextResponse.json({
                success: true, 
                data: response,
            })
        } else{
            throw new Error("Erro ao requisitar repositórios");
        }

    } catch (e : unknown) {
        if (e instanceof Error){
            return NextResponse.json({
                success: false, 
                data: null,
            })
        }
    }
}