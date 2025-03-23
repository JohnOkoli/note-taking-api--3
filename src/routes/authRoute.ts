import express from "express";
import { register, login } from "../controllers/authController"

const router = express.Router();

router.post("/register", register);        // Route for user registration
router.post('/login', login)           // Route for user login

export default router;