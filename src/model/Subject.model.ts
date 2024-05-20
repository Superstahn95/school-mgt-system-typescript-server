import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  outline: [
    {
      class: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
      lessons: [
        {
          topic: { type: String, required: true },
          duration: { type: String, required: true },
          description: { type: String, required: true },
          courseDoc: {
            type: Object,
            url: { type: String, required: true },
            public_id: { type: String, required: true },
          },
        },
      ],
    },
  ],
});

export const Subject = mongoose.model("Class", subjectSchema);
