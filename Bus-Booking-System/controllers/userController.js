const User = require('../models/User');

const addUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        const user = await User.create({ name, email });

        return res.status(201).json({
            message: "User added successfully",
            userId: user.id
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error adding user",
            error
        });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json(users);

    } catch (error) {
        return res.status(500).json({
            message: "Error fetching users",
            error
        });
    }
};

module.exports = {
    addUser,
    getAllUsers
};
