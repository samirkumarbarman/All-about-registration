import express from 'express';
import { getUser, getUsers, updateUserProfile, removeUser } from '../controllers/userController.js';
import { authorize, isAuthenticated } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/:id', isAuthenticated, authorize(['admin', 'super-admin']), getUser);

router.get('/', isAuthenticated, authorize(['admin', 'super-admin']), getUsers);

router.put('/:id',isAuthenticated, authorize(['user', 'admin', 'super-admin']), updateUserProfile);

router.delete('/:id',isAuthenticated, authorize(['admin', 'super-admin']), removeUser);

export default router;