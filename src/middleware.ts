import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req:NextRequest,ev:NextFetchEvent) {
    if(req.cookies.has("soccer_cookie")){
        req.nextUrl.pathname = "/";
        return NextResponse.redirect(req.nextUrl);
    }
}

export const config = {
    matcher: [`/login`],
}