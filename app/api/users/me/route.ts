import { connect } from "@/dbConfig/dbConfig";
import { getDecodeData } from "@/helper/DecodeTokenData";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function GET(request:NextRequest){
    try {

        
        const userId = await getDecodeData(request);

       
        const user = await User.findOne({_id: userId}).
        select("-password");
        return NextResponse.json({
            message: "User found",
            data: user
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
        
    }
}