import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { error } from "console";
import { NextResponse } from "next/server";

connect();

export async function GET(res: any) {
    try {
        const users = await User.find({}).select("-password");
        return NextResponse.json({
            message: "all users",
            success: true,
            users
        })
    } catch (e:any) {
        return NextResponse.json(
            {error: e.message},
            {status:500}
        )
    }
}