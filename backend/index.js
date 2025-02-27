import express from "express";
import connectDb from "./connection/db.js";

const app = express();
import "dotenv/config";
const PORT = process.env.PORT;

connectDb();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`listenting on ${PORT}`);
});
