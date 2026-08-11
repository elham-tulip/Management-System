const User = require("../models/user");

const getUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");

        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const createUser = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            role,
            division,
            year
        } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User with this email already exists"
            });
        }

        const user = await User.create({
            name,
            email,
            password,
            role,
            division,
            year
        });

        const userResponse = user.toObject();
        // converts it into a normal JavaScript object so we can modify it
        delete userResponse.password;
        // removes the password from the object before
        //  sending it to the client

        res.status(201).json({
            message: "User created successfully",
            user: userResponse
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
const updateUser = async (req, res) => {
    try {
        const { name, email, role, division, year } = req.body;

        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                name,
                email,
                role,
                division,
                year
            },
            {
                new: true,
                runValidators: true
            }
        ).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User updated successfully",
            user
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};