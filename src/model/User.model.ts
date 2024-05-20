import mongoose from "mongoose";

enum UserRole {
  Student = "student",
  Teacher = "teacher",
  Admin = "admin",
}

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    otherNames: { type: String },
    address: { type: String, required: true },
    role: { type: String, enum: Object.values(UserRole), required: true },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
