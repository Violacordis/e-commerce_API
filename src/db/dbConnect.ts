import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;

const dbConnect = async () => {
  try {
    await mongoose.connect(MONGODB_URL as string);
    console.log("MongoDB connected Successfully");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
