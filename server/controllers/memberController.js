const Member = require("../models/Member");

const getMembers = async (req, res) => {
    try {
        const members = await Member.find();

        res.status(200).json(members);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

    const createMember = async (req, res) => {
    try {
        const { name, email, division, year } = req.body;

        const existingMember = await Member.findOne({ email });

        if (existingMember) {
            return res.status(400).json({
                message: "Member with this email already exists"
            });
        }

        const member = await Member.create({
            name,
            email,
            division,
            year
        });

        res.status(201).json({
            message: "Member created successfully",
            member
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

    const getMemberById = async (req, res) => {
    try {
        const member = await Member.findById(req.params.id);

        if (!member) {
            return res.status(404).json({
                message: "Member not found"
            });
        }

        res.status(200).json(member);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const updateMember = async (req, res) => {
    try {
        const member = await Member.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
                // apply validation rule
            }
        );

        if (!member) {
            return res.status(404).json({
                message: "Member not found"
            });
        }

        res.status(200).json({
            message: "Member updated successfully",
            member
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
const deleteMember = async (req, res) => {
    try {
        const member = await Member.findByIdAndDelete(req.params.id);

        if (!member) {
            return res.status(404).json({
                message: "Member not found"
            });
        }

        res.status(200).json({
            message: "Member deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
    

module.exports = {
    getMembers,
    createMember,
    getMemberById,
    createMember,
    updateMember,
    deleteMember
};