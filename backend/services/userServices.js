import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';

//Get user by ID
export const getUserById = async (userId) => {
    const user = await User.findById(userId).select("-password"); 
    if (!user) throw new Error("User not found");
    return user;
  };

//Get All Users
export const getAllUsers = async () => {
    return await User.find().select("-password");
  };

//Update User Profile
export const updateUser = async (userId, updateData) => {
  if (updateData.password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(updateData.password, salt);
  }

  // Find the user by ID and update the user details
  const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true, runValidators: true });

  if (!updatedUser) {
      throw new Error('User not found');
  }

  return updatedUser;
};

//Delete User
export const deleteUser = async (userId) => {
    const user = await User.findByIdAndDelete(userId);
    if (!user) throw new Error("User not found");
    return { message: "User deleted successfully" };
};
  