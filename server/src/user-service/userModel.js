import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlength: 1024,
    },
    password: { type: String, required: true, minlength: 6, maxlength: 1024 },
    fullname: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
