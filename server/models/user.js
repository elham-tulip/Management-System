const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        password: {
            type: String,
            required: true,
            minlength: 8
        },

        role: {
            type: String,
            enum: ["Admin", "Supervisor", "User"],
            default: "User"
        },

        division: {
            type: String,
            required: true,
            trim: true
        },

        year: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
    // check whether the password the user typed during login matches
    //  the hashed password stored in MongoDB.
};
const User = mongoose.models.User || mongoose.model("User", userSchema);


module.exports = User;