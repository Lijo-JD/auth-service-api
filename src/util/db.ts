import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  const mongoUri = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`;

  if (!mongoUri) {
    throw new Error("MONGO_CONNECTION_URI is not defined");
  }

  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000
    });

    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // fail fast
  }
};

export default connectDB;