import User from "@/lib/model";
import connectDB from "@/lib/db";
import { NextResponse } from "next/server";

connectDB();

export const POST=async(request) => {

  try {
    const reqBody=await request.json();

    const {email,password}=reqBody;

    const user=await User.create({
      email:email,
      password:password
    });

    return NextResponse.json({
      message:"User created successfully",
      success:true,
      user
    });

  } catch (error) {
    return NextResponse.json({
      message:"Error creating user",
      success:false
    }, {
      status:500
    });
  }

};
