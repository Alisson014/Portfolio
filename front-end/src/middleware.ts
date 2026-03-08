import { NextRequest, NextResponse, type MiddlewareConfig } from "next/server";

const AdmRoutes = [
    { path: '/adm/login', isNotAuth: 'next' },
    { path: '/adm/dashboard', isNotAuth: 'redirect' },
    { path: '/adm/user', isNotAuth: 'redirect' },
] as const;

const WHERE_TO_REDIRECT = '/adm/login';


export function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const currentRote = AdmRoutes.find(route => route.path == path);
    const authToken = req.cookies.get("portfolio.token");
    
    if (!authToken && currentRote?.isNotAuth == "redirect"){
        const redirectUrl = req.nextUrl.clone();
        redirectUrl.pathname = WHERE_TO_REDIRECT;

        return NextResponse.redirect(redirectUrl);
    }

    

    return NextResponse.next();
}


export const config: MiddlewareConfig = {
    matcher: [
        '/((?!api_next/static|_next/image|icon.png|sitemap.xml|robots.txt|application/pdf).*)',
    ],
}