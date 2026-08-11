const Member = require("../models/Member");
const Attendance = require("../models/Attendance");

const getDashboardStats = async (req, res) => {
  try {
    const totalMembers = await Member.countDocuments();

    const divisions = await Member.distinct("division");
    const totalDivisions = divisions.length;

    const present = await Attendance.countDocuments({
      status: "Present",
    });

    const absent = await Attendance.countDocuments({
      status: "Absent",
    });

    const totalAttendance = present + absent;

    const attendanceRate =
      totalAttendance === 0
        ? 0
        : Math.round((present / totalAttendance) * 100);

    res.status(200).json({
      totalMembers,
      totalDivisions,
      attendanceRate,
      upcomingSessions: 0,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};