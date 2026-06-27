const authorizeRole = (...roles) => {
    return (req, res, next) => {
        try{
            const userRole = req.user.roleId;
            if (!roles.includes(userRole)) {
                return res.status(403).json({ message: "Access denied! Insufficient permissions." });
            }
            next();
        } catch(err){
            return res.status(403).json({ message: "Authorization failed!" });
        }
    }
};

export default authorizeRole;