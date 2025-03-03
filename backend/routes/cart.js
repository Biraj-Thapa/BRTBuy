import express from "express";
import { addToCart, removeProductFromCart, userCart } from "../controllers/cart.js";
const router=express.Router()

router.post("/add",addToCart)
router.get("/user",userCart)
router.delete("/remove/:productId",removeProductFromCart)

export default router