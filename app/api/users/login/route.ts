import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"
import { connect } from "@/dbConfig/dbConfig";

type userType = {
    email: string | null,
    password: string 
};
connect();

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const { email, password } = reqBody;

        const user:any = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({error:"user not found"},{status:400})
        }

        const validPassword = await bcryptjs.compare(password, user.password)
        if (!validPassword) {
            return NextResponse.json({error:"Invalid password"},{status:400})
        }
        const tokendata = {
            id: user._id,
            username: user.username,
            email:user.email
        }
        const token = await jwt.sign(tokendata, process.env.JWT_SECRET!, { expiresIn: "1d" })
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
            token
        })
        response.cookies.set("token", token,{
            httpOnly:true
        })
        return response;
    } catch (e: any) {
        return NextResponse.json(
            { error: e.message },
            {status: 500}
        )
    }
}