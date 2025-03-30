import express from 'express';
import connectDB from './config/db.js';
import passport from './config/passport.js';
import session from 'express-session';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoute.js';
import userRoutes from './routes/userRoute.js';
import errorHandler from './middlewares/errorhandler.js';
import corsMiddleware from './middlewares/corsMiddleware.js';

dotenv.config();
connectDB();

const app = express();

app.use(corsMiddleware);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const corsoptions ={
    origin: 'http://localhost:5173',
    optionSuccessStatus: 200
}

app.use(session({
    secret: process.env.SESSION_SECRET, // This should be a secret key stored in your .env file
    resave: false,                      // Forces the session to be saved back to the session store
    saveUninitialized: false,           // Don't create a session until something is stored
    cookie: { secure: false }           // Secure should be true if using HTTPS
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

export default app;