// ./src/api/todoServer.js
import express from "express";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/todos", async (req, res) => {
  const todosCollection = req.db("list").collection("todoList");
  try {
    const todos = await todosCollection.find({}).toArray();
    res.json(todos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching todos", error: error.message });
  }
});

router.post("/todos", async (req, res) => {
  const todosCollection = req.db("list").collection("todoList");
  try {
    const newTodo = {
      title: req.body.title,
      completed: false,
    };
    const result = await todosCollection.insertOne(newTodo);
    if (result.ops && result.ops.length > 0) {
      res.status(201).json(result.ops[0]);
    } else {
      throw new Error("Insertion failed");
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating todo", error: error.message });
  }
});

router.delete("/todos/:id", async (req, res) => {
  const todosCollection = req.db("list").collection("todoList");
  try {
    const id = req.params.id;
    console.log("Received ID for deletion:", id); // Log the received ID

    // Validate the ID format
    if (!ObjectId.isValid(id)) {
      console.log("Invalid ID format:", id); // Log invalid ID
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const result = await todosCollection.deleteOne({ _id: new ObjectId(id) });
    console.log("Delete result:", result); // Log the result of the delete operation

    if (result.deletedCount === 0) {
      console.log("No document found with ID:", id); // Log when no document is found
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json({ message: "Todo deleted" });
  } catch (error) {
    console.error("Error in DELETE /todos/:id:", error); // Log the error
    res
      .status(500)
      .json({ message: "Error deleting todo", error: error.message });
  }
});

export default router;
