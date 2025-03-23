import { NextFunction, Request, Response} from 'express';
import User from '../models/userModel';
import { hashPassword, comparePassword } from '../Utils/bcryptUtil';
import { generateToken } from '../Utils/jwtUtil';
import jwt from "jsonwebtoken";


export const register = async (req: Request, res: Response ) => {
    const { username, email, password } = req.body;
    const hashedPassword = await hashPassword(password);
    const user = await User.create({ userName: String, email: String, password: hashedPassword });
    res.json({ token: 
        generateToken(user.id) });
    
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await comparePassword(password, user.password) ) ) {
     res.status(401).json( { message: 'Invalid email or password'});
    }
    else {res.json({ token: generateToken(user.id)});
}
    };

export default authMiddleware;