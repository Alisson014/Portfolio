import { NextResponse } from "next/server";

export async function POST (req: Request){
    const body = await req.json();
    const { token } = body;
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    //console.log(token);

    const verificationResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
        {
            method: 'POST',
        }   
    );

    const verification = await verificationResponse.json();

    //console.log(verification);

    if( verification.success && verification.score > 0.5 ){
        return NextResponse.json({
            success: true, 
            score: verification.score,
        })
    } else {
        return NextResponse.json({
            success: false,
            socre: verification.score,
            errorCodes: verification['error-codes'],
        })
    }
    
}