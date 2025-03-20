import { registerUser, loginUser, verifyUserToken, googleLogin, authorizeRoles } from '../services/authServices.js';

// Register Controller
export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const newUser = await registerUser({ name, email, password, role });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Login Controller
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await loginUser({ email, password });
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Verify Token Controller
export const verifyToken = (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const userData = verifyUserToken(token);
        res.status(200).json(userData);
    } catch (error) {
        res.status(401).json({ message: "Invalid Token" });
    }
};

// Google Login Controller
export const googleAuth = async (req, res) => {
    try {
        const { googleId, name, email, avatar } = req.body;
        const token = await googleLogin({ googleId, name, email, avatar });
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
