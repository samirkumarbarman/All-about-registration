import User from '../models/userModel.js';
import { generateToken, verifyToken } from '../utils/generateToken.js';
import bcrypt from 'bcryptjs';

//Register New User
export const registerUser = async ({name, email, password, role}) =>{
    const existUser = await User.findOne({email});

    if (existUser) throw new Error("User Already exist");
    const newUser = await User.create({name, email, password, role});
    return newUser;
};


//Login USer
export const loginUser = async ({email, password}) =>{
    const user = await User.findOne({email});
    if(!user) throw new Error("Invalid Credentials");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid Credentials");

    return generateToken(user);
};
// Verify JWT Token
export const verifyUserToken = (token) => {
    return verifyToken(token);
};

//Google Oauth Login
export const googleLogin = async ({googleId, name, email, avatar }) =>{
    const user = await User.findOne({email});
    if (!user) {
        user = await User.create({googleId, name, email, avatar});
    }
    return generateToken(user);
};

//Role Based Authorization
export const authorizeRoles = (user, roles) => {
    if (!roles.includes(user.role)) {
      throw new Error("Access Denied: Insufficient Permissions");
    }
  };