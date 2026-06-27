import { verifyAccessToken } from "../utils/jwt.js";

const authenticationToken = (req, res, next) => {
    try {
        // Check for token in cookies
        const token = req.cookies.accessToken; 
        if (!token) {
            return res.status(401).json({ message: "Access token is missing!" });
        }

        const decoded = verifyAccessToken(token);
        req.user = decoded; // Attach the decoded user information to the request object
        next();
    } catch (err) {
        return res.status(403).json({ message: "Invalid or expired access token!" });
    }
}

export default authenticationToken;