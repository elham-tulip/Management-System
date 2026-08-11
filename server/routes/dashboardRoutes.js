const express = require("express");
const { getDashboardStats } = require("../controllers/dashboardController");

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const router = express.Router();
 
router.get(
    "/",
    protect,
    authorize("Admin", "Supervisor", "User"),
    getDashboardStats
);

module.exports = router;