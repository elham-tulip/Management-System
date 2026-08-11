const dns = require("dns");
dns.setServers(["8.8.8.8"]);



const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = require("./config/db");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

const createAdmin = async () => {
    try {
        await connectDB();

        const existingAdmin = await User.findOne({
            email: "admin@example.com"
        });

        if (existingAdmin) {
            console.log("Admin already exists");
            process.exit(0);
        }

        const hashedPassword = await bcrypt.hash("Admin12345", 10);

        const admin = await User.create({
            name: "Admin",
            email: "admin@example.com",
            password: hashedPassword,
            role: "Admin",
            division: "IT",
            year: 4
        });

        console.log("Admin created successfully!");
        console.log("Email:", admin.email);
        console.log("Role:", admin.role);

        process.exit(0);
    } catch (error) {
        console.error("Error creating admin:", error.message);
        process.exit(1);
    }
};

createAdmin();