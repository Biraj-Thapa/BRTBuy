import express from "express";
import { register,login,users,profile } from "../controllers/user.js";
import { Authenticated } from "../middlewares/auth.js";

const router=express.Router()

router.post("/register",register)
router.post("/login",login)
router.get("/users",users)
router.get("/profile", Authenticated, profile);



export default router