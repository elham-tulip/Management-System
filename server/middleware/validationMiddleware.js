const validateSignup = (req, res, next) => {

    const { name, email, password, confirmPassword, division, year } = req.body;

    if (!name || !email || !password || !confirmPassword || !division || !year) {
        return res.status(400).json({
            message: "All required fields must be provided"
        });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({
            message: "Please provide a valid email"
        });
    }
     if (password.length < 8) {
        return res.status(400).json({
            message: "Password must be at least 8 characters"
        });
    }

    if (password !== confirmPassword) {
    return res.status(400).json({
        message: "Passwords do not match"
    });
   }
    next();

};

 module.exports = validateSignup;
