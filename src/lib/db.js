import mongoose from "mongoose";

const connectDB=async()=>{
  try {
    mongoose.connect(process.env.MOGODB_URL);
    console.log("MongoDB connected");
  } catch (error) {

    console.log(error);

  }
}

export default connectDB;
