import jwt from "jsonwebtoken";

//Generate Jwt Token
export const generateToken = (user) =>{
    return jwt.sign({user: user._id, role: user.role}, process.env.JWT_SECRET, { expiresIn : "7d"});
};

//verify jwt token
export const verifyToken = (token) =>{
    try{
    return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        throw new Error("Session Expired");
    }
};