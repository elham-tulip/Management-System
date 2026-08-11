const mongoose = require("mongoose");
const attendanceSchema = new mongoose.Schema(
    {
     member:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref: "Member"
        //  connects the attendance 
        // record to your Member model.
     },
     date:{
        type:Date,
        required:true,
        default:Date.now
     },
     status:{
        type:String,
        required:true,
        enum:["Present","Absent"]
     }

    },
    {
        timestamps:true
    }
);
const Attendance = mongoose.model("Attendance", attendanceSchema);

module.exports = Attendance;