const authorize = (...roles) => {
    // Create a function called authorize that
    //  can receive one or more allowed roles
   return (req, res, next) => {

        if (!roles.includes(req.user.role))
            // If the user's role is NOT in the allowed roles...
            {
            return res.status(403).json({
                message: "Access Denied"
            });
        }
       next()
    };
};
module.exports = authorize;    