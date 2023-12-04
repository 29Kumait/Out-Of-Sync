import express from "express";
import dotenv from "dotenv";
import router from "./public/routes.js";
import path from "path";
dotenv.config({ path: "./.env" });
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
