import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { TODO_FORM_ID, TODO_INPUT_ID, TODO_DISPLAY_ID } from "../constants.js";

dotenv.config({ path: "./.env" });

const router = express.Router();

let db;

MongoClient.connect(
  process.env.MONGODB_URL,
  { useUnifiedTopology: true },
  (err, client) => {
    if (err) throw err;
    db = client.db();
  }
);

// GET all todos
router.get("/todos", async (req, res) => {
  const todos = await db.collection("todos").find().toArray();
  res.json(todos);
});

// POST a new todo
router.post("/todos", async (req, res) => {
  const newTodo = {
    title: req.body.title,
    userId: 1,
    completed: false,
  };
  const result = await db.collection("todos").insertOne(newTodo);
  res.json(result.ops[0]);
});

// DELETE a specific todo
router.delete("/todos/:id", async (req, res) => {
  const { ObjectId } = require("mongodb");
  const id = new ObjectId(req.params.id);
  const result = await db.collection("todos").deleteOne({ _id: id });
  res.json(result);
});

export default router;
