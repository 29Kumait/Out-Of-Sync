import express from "express";
import connectDB from "./public/DB.js";
import todoRoutes from "./src/api/todoServer.js";

const app = express();
const port = 3000;

connectDB();

app.use(express.json());
app.use(express.static("public"));
app.use("/api", todoRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
