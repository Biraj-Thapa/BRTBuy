import express from "express"
import { addProduct, getProduct } from "../controllers/product.js";
 const router= express.Router()

 router.post("/add",addProduct)
 router.get("/allProduct",getProduct)

 export default router




