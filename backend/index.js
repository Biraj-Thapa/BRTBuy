import express from "express";
import connectDb from "./connection/db.js";
import userRouter from "./routes/user.js";
import productRouter from "./routes/product.js";

const app = express();
import "dotenv/config";
const PORT = process.env.PORT;

app.use(express.json());

connectDb();
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);


app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`listenting on ${PORT}`);
});
