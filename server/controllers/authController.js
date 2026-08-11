const bcrypt = require("bcryptjs");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const validateSignup = require("../middleware/validationMiddleware");

const signup = async (req, res) => {
    try {
        const { name, email, password, confirmPassword, division, year} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

    
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            division,
            year
        
        });

        
        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                division: user.division,
                year: user.year
            }
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Please provide email and password"
            });
        }

        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                division: user.division,
                year: user.year,
                token: generateToken(user._id)
            });
        } else {
            res.status(401).json({
                message: "Invalid email or password"
            });
        }

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


module.exports = { 
    loginUser,   
    signup
 };