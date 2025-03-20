import express from 'express';
import { getUser, getUsers, updateUserProfile, removeUser } from '../controllers/userController.js';
import { authorize } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/:id', authorize(['admin', 'super-admin']), getUser);

router.get('/', authorize(['admin', 'super-admin']), getUsers);

router.put('/:id', authorize(['user', 'admin', 'super-admin']), updateUserProfile);

router.delete('/:id', authorize(['admin', 'super-admin']), removeUser);

export default router;