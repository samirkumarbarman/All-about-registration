import express from 'express';
import { register, login, verifyToken, googleAuth, authorize } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/verify-token', verifyToken);
router.post('/google-auth', googleAuth);

export default router;