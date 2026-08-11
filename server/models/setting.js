const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
            unique: true
        },

        appearance: {
            type: String,
            enum: ["Light", "Dark"],
            default: "Light"
        },

        autoAddEventsToCalendar: {
            type: Boolean,
            default: true
        },

        phonePublic: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

const Setting =
    mongoose.models.Setting ||
    mongoose.model("Setting", settingSchema);

module.exports = Setting;