import { error } from "console";
import { NextResponse } from "next/server"



export  const GET = () => {
    try {
        const response = NextResponse.json({
            message: "Logout successfully",
            success:true
        }
        
        )
        response.cookies.set("token", "", { httpOnly: true, expires: new Date() })
        return response;
    } catch (e:any) {
        return NextResponse.json({error:e.message},{status:500})
    }
}