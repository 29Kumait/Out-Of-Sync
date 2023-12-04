//server.js

import express from "express";
import { run as initializeMongoClient } from "./mongoClient.js";
import mongodb from "mongodb";
const { MongoClient, ObjectId } = mongodb; // Use ObjectId here
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 5000;

initializeMongoClient()
  .then((client) => {
    const todoCollection = client.db("list").collection("note");

    app.get("/todos", async (req, res) => {
      try {
        const todos = await todoCollection.find({}).toArray();
        res.status(200).json(todos);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

    app.post("/todos", async (req, res) => {
      try {
        const newTodo = req.body; // Make sure to validate and sanitize this in a real app
        const result = await todoCollection.insertOne(newTodo);
        res.status(201).json(result);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

    app.delete("/todos/:id", async (req, res) => {
      try {
        const id = new mongodb.ObjectId(req.params.id);
        const result = await todoCollection.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
          return res.status(404).json({ message: "Todo not found" });
        }
        res.status(200).json({ message: "Todo deleted successfully" });
      } catch (err) {
        console.error(err); // Log the detailed error
        res.status(500).json({ error: err.message }); // Send back the detailed error message
      }
    });

    app.listen(port, () => console.log(`Server is running on port ${port}`));
  })
  .catch((error) => {
    console.error("Failed to start the server", error);
  });
