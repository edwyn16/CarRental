import User from "../models/User.js";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

// Generate JWT Token
const generateToken = (userId) => {
    const payload = userId;
    return JWT.sign(payload, process.env.JWT_SECRET);
}

export const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        // Registration logic here
        if (!name || !email || !password || password.length < 8) {
            return res.json({success: false, message: "Fill all fields correctly."});
        }

        const userExists = await User.findOne({email})
        if (userExists) {
            return res.json({success: false, message: "User already exists."});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({name, email, password: hashedPassword});
        const token = generateToken(user._id.toString())
        res.json({success: true, message: "User registered successfully.", token})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

// Login User
export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        // Login logic here
        const  user = await User.findOne({email});
        if (!email) {
            return res.json({success: false, message: "User not found."});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({success: false, message: "Invalid credentials."});
        }

        const token = generateToken(user._id.toString())
        res.json({success: true, token})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

// Get User Data Using Token (JWT)
export const getUserData = async (req, res) => {
    try {
        const {user} = req;
        res.json({ success: true, user })
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}