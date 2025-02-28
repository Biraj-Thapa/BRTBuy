import express from "express"
import { addProduct, deleteProductById, getProduct, getProductById, updateProductById } from "../controllers/product.js";
 const router= express.Router()

 router.post("/add",addProduct)
 router.get("/allProduct",getProduct)
 router.get("/:id",getProductById)
 router.put("/:id",updateProductById)
 router.delete("/:id",deleteProductById)

 export default router




