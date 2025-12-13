import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.MONGO_URI;

export async function connectMongo() {
  try {
    await mongoose.connect(URI, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
}
