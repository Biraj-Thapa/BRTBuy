import express from "express";
import connectDb from "./connection/db.js";
import userRouter from "./routes/user.js";
import productRouter from "./routes/product.js";
import cartRouter from "./routes/cart.js";
import addressRouter from "./routes/address.js"
import cors from "cors"

const app = express();
import "dotenv/config";
const PORT = process.env.PORT;

app.use(express.json());

app.use(cors({
  origin:true,
  methods:[ "GET","POST","PUT","DELETE"],
  credentials:true
}))

connectDb();
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/address", addressRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`listenting on ${PORT}`);
});
