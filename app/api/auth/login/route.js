import { NextResponse } from "next/server";



export async function  POST(req){
    try {
        const { email ,password}= await req.json();

        if (!email || !password){
            return NextResponse.json({ message : "userName and password are required"},
                {status:400}
            );
        }

    } catch (error) {
        return NextResponse.json({message:error.message},{status:500})
    }
}