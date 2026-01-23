if (process.env.NODE_ENV !== "production") {
  try {
    require("dotenv").config();
  } catch (error) {
    console.log("dotenv not loaded");
  }
}

import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import connectDB from "./util/db";
import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";

const app: Application = express();
const PORT = process.env.PORT || 9000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

connectDB();

app.use("/user", userRoutes);
app.use("/post", postRoutes);

app.listen(PORT, () => {
  console.log(`App started on port: ${PORT}`);
});
