import express from "express";
import { addAddress, getAddress } from "../controllers/address.js";
import { Authenticated } from "../middlewares/auth.js";

const router = express.Router;

router.post("/add", Authenticated, addAddress);
router.get("/get", Authenticated, getAddress);

export default router;
