let { users, nextId } = require('../data/data.cjs');

function getAllUsers(req, res) { // Get all users
    if (users.length == 0) {
        res.status(404).json({ success: false, message: "No users found" });
        return;
    }
    res.status(200).json({ success: true, data: users });
}

function getUserById(req, res) { // Get user by ID
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, data: user });
}

function createUser(req, res) { // Create a new user
    const newUser = req.body;
    if (!newUser.userName) {
        return res.status(400).json({ success: false, message: "User name is required" });
    }
    else if (users.some(u => u.userName === newUser.userName)) {
        return res.status(409).json({ success: false, message: "User already exists" });
    }
    newUser.id = nextId++;
    users.push(newUser);
    res.status(201).json({ success: true, data: newUser });
}

function deleteUser(req, res) { // Delete user by ID
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({ success: false, message: "User not found" });
    }
    users = users.filter(u => u.id !== userId);
    res.status(200).json({ success: true, message: "User deleted successfully" });
}

module.exports = { getAllUsers, getUserById, createUser, deleteUser };