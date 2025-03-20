import { verifyUserToken } from '../services/authServices.js';

export const authorize = (roles) => {
    return (req, res, next) => {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const user = verifyUserToken(token);
            if (!roles.includes(user.role)) {
                throw new Error("Access Denied: Insufficient Permissions");
            }
            req.user = user;
            next();
        } catch (error) {
            res.status(403).json({ message: error.message });
        }
    };
};

export const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};