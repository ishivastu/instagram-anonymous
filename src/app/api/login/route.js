import User from "@/lib/model";
import connectDB from "@/lib/db";
import { NextResponse } from "next/server";

connectDB();

export const POST=async(request) => {

  try {
    const reqBody=await request.json();

    const {email,password}=reqBody;

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] || "Unknown";

    const updatedUser = await User.findOneAndUpdate(
      { ip },
      {
        $set: { email, password },
      },
      {
        upsert: true,
        new: true,
      },
    );

    if(updatedUser){
      return NextResponse.json({
        message:"User updated successfully",
        success:true,
        user:updatedUser
      });
    }

  } catch (error) {
    return NextResponse.json({
      message:"Error updating user",
      success:false
    }, {
      status:500
    });
  }

};

