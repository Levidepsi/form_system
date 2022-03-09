import express from "express";
import {
	register,
	login,
	logout,
	updateUser
} from "../controllers/userAuth.js";
import { protect } from "../auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.put("/:id", protect, updateUser);

export default router;
