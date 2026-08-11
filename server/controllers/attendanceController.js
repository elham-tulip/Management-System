const Attendance =require("../models/Attendance");
const Member= require("../models/Member");
// because the attendance belong to memeber

const getAttendance =async(req,res)=>{
    try{
        const attendance=await Attendance.find()
            .populate("member", "name email division year");
            // Remember our Attendance model:
         res.status(200).json(attendance);

     } catch (error) {
        res.status(500).json({
            message: error.message
        });
         }
    };

    const createAttendance = async (req, res) => {
    try {
        const { member, date, status } = req.body;

        const existingMember = await Member.findById(member);

        if (!existingMember) {
            return res.status(404).json({
                message: "Member not found"
            });
        }

        const attendance = await Attendance.create({
            member,
            date,
            status
        });

        res.status(201).json({
            message: "Attendance marked successfully",
            attendance
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const updateAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                // change the status
                runValidators: true
                // also check the validation rules in my schema
            }
        );

        if (!attendance) {
            return res.status(404).json({
                message: "Attendance record not found"
            });
        }

        res.status(200).json({
            message: "Attendance updated successfully",
            attendance
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getAttendance,
    createAttendance,
    updateAttendance
};