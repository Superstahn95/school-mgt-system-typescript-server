import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
});

export const Class = mongoose.model("Class", classSchema);
