import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    ip: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true },
);
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
