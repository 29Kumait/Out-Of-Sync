import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const todoRouter = express.Router();
let db;

const connectDB = async () => {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URL);
    db = client.db();
    console.log("Connected to todo MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  }
};

connectDB();

// Middleware to check if the database is connected
todoRouter.use((req, res, next) => {
  if (!db) {
    return res.status(503).json({ message: "Database not available" });
  }
  req.db = db;
  next();
});

// GET all todos
todoRouter.get("/todos", async (req, res) => {
  try {
    const todos = await req.db.collection("todos").find().toArray();
    res.json(todos);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching todos", error: err.message });
  }
});

// POST a new todo
todoRouter.post("/todos", async (req, res) => {
  try {
    const newTodo = {
      title: req.body.title,
      userId: 1, // Consider dynamically setting this based on user context
      completed: false,
    };
    const result = await req.db.collection("todos").insertOne(newTodo);
    res.json(result.ops[0]);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating todo", error: err.message });
  }
});

// DELETE a specific todo
todoRouter.delete("/todos/:id", async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const result = await req.db.collection("todos").deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json({ message: "Todo deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting todo", error: err.message });
  }
});

export default todoRouter;
