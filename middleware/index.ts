import { request } from "http";
import { NextRequest, NextResponse } from "next/server";


export function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname

    const isPublic = path === '/login' || path === '/signup' || path === '/verifyEmail'

    const token = req.cookies.get('token')?.value || ''

    if (isPublic && token) {
        return NextResponse.redirect(new URL('/',req.nextUrl))
    }

    if (!isPublic && !token) {
        return NextResponse.redirect(new URL('/login',req.nextUrl))
    }
}