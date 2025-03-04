import express from "express";
import { addToCart, clearCart, decreaseProductQty, removeProductFromCart, userCart } from "../controllers/cart.js";
const router=express.Router()

router.post("/add",addToCart)
router.get("/user",userCart)
router.delete("/remove/:productId",removeProductFromCart)
router.delete("/clear",clearCart)
router.post("/--qty",decreaseProductQty)

export default router