import express from "express";
import {
  addToCart,
  clearCart,
  decreaseProductQty,
  removeProductFromCart,
  userCart,
} from "../controllers/cart.js";
import { Authenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/add", Authenticated, addToCart);
router.get("/user", Authenticated, userCart);
router.delete("/remove/:productId", Authenticated, removeProductFromCart);
router.delete("/clear", Authenticated, clearCart);
router.post("/--qty", Authenticated, decreaseProductQty);

export default router;
