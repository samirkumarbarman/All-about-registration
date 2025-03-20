import { getUserById, getAllUsers, updateUser, deleteUser } from '../services/userServices.js';

// Get User by ID Controller
export const getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await getUserById(userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Get All Users Controller
export const getUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update User Controller
export const updateUserProfile = async (req, res) => {
    try {
        const userId = req.params.id;
        const updateData = req.body;
        const updatedUser = await updateUser(userId, updateData);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete User Controller
export const removeUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const result = await deleteUser(userId);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};