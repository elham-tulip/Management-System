const express = require("express");
const { loginUser,signup } = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");
const validateSignup = require("../middleware/validationMiddleware");
const router = express.Router();

router.post("/signup",validateSignup, signup);
router.post("/login", loginUser);

router.get("/profile", protect, (req, res) => {
    res.json({
        message: "You are authorized",
        user: req.user
    });
});

router.get("/admin", protect, authorize("Admin"), (req, res) => {
    res.json({
        message: "Welcome Admin"
    });
});

router.get(
    "/supervisor",
    protect,
    authorize("Supervisor"),
    (req, res) => {
        res.json({
            message: "Welcome Supervisor"
        });
    }
);

router.get(
    "/user",
    protect,
    authorize("User"),
    (req, res) => {
        res.json({
            message: "Welcome User"
        });
    }
);


module.exports = router;