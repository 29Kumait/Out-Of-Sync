import express from "express";
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});