const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
    try{
   const authHeader = req.headers.authorization;
   if (!authHeader || !authHeader.startsWith("Bearer ")) {
    // Give me the Authorization information that the 
    // user sent with this request.
    return res.status(401).json({
        message: "Not authorized, no token"
    });
}
const token = authHeader.split(" ")[1];
// splite the string when space exists and take the 
// second string or 
// its like tooken extracter
const decoded = jwt.verify(token, process.env.JWT_SECRET);
// get user from mongo db

const user = await User.findById(decoded.id).select("-password");

if (!user) {
     return res.status(401).json({
         message: "User not found"
        });
    }
req.user = user;
// Attach this logged-in user to the current reques
// get the authenticated user
next();
// Authentication passed. Let the request continue to the protected route

} catch (error) {
        return res.status(401).json({
            message: "Not authorized, invalid token"
        });
    }
};
module.exports = protect;