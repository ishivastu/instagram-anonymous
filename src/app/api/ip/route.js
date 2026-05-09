import axios from "axios";
import User from "@/lib/model";
import connectDB from "@/lib/db";
import { NextResponse } from "next/server";

connectDB();


export const  GET=async(request)=>{

try {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "Unknown";

  const users=await User.create({
    ip:ip
  });

  return NextResponse.json({
    message:"IP logged successfully",
    success:true,
    users
  });

} catch (error) {
  return NextResponse.json({
    message:"Error logging IP",
    success:false
  }, { status: 500 });

}

}

