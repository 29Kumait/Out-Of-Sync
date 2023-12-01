// server.js
import express from "express";
import dotenv from "dotenv";
import router from "./public/routes.js";

dotenv.config({ path: "./.env" });

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use("/", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
