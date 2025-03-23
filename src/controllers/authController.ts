import { Request, Response, NextFunction } from "express";
import UserModel from "../models/userModel";
import { generateToken } from "../Utils/jwtUtil";
import { hashPassword, comparePassword } from "../Utils/bcryptUtil";
import { CustomError } from "../types/customErrors";

// Register a new user
export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userName, email, password } = req.body;
        if (!userName || !email || !password) {
            throw new CustomError("All fields are required", 400);
        }

        // Check if user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            throw new CustomError("User already exists", 400);
        }

        // Hash password and save user
        const hashedPassword = await hashPassword(password);
        const user = new UserModel({ userName, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        next(error);
    }
};

// Login user and return JWT
export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new CustomError("Email and password are required", 400);
        }

        const user = await UserModel.findOne({ email });
        if (!user) {
            throw new CustomError("Invalid credentials", 401);
        }

        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            throw new CustomError("Invalid credentials", 401);
        }

        const token = generateToken(user._id.toString());
        res.json({ token });
    } catch (error) {
        next(error);
    }
};
