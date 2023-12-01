import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import todoRoutes from "./src/api/todoServer.js"; // Adjust the path according to your directory structure

dotenv.config({ path: "./.env" });

const router = express.Router();
let db;

const connectDB = async () => {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URL);
    db = client.db();

    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  }
};

connectDB();

router.use((req, res, next) => {
  req.db = db;
  next();
});

router.use("/api", todoRoutes);

export default router;
console.log(`Current working directory: ${process.cwd()}`);
