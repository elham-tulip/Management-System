const express = require("express");

const {
    getMembers,
    createMember,
    getMemberById,
    updateMember,
    deleteMember
} = require("../controllers/memberController");

const protect = require("../middleware/authMiddleware");
// Is this person logged in?
const authorize = require("../middleware/roleMiddleware");
// Does this person have permission?
const router = express.Router();

router.get(
    "/",
    protect,
    authorize("Admin", "Supervisor", "User"),
    getMembers
);

router.get(
    "/:id",
    protect,
    authorize("Admin", "Supervisor", "User"),
    getMemberById
);

router.post(
    "/",
    protect,
    authorize("Admin"),
    createMember
);

router.put(
    "/:id",
    protect,
    authorize("Admin"),
    updateMember
);

router.delete(
    "/:id",
    protect,
    authorize("Admin"),
    deleteMember
);

module.exports = router;
