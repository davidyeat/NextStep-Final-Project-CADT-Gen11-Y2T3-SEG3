const attemptsByIp = new Map();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;

const authRateLimit = (req, res, next) => {
    const now = Date.now();
    const key = req.ip;
    const recentAttempts = (attemptsByIp.get(key) || [])
        .filter((timestamp) => now - timestamp < WINDOW_MS);

    if (recentAttempts.length >= MAX_ATTEMPTS) {
        return res.status(429).json({
            message: "Too many login attempts. Please try again in 15 minutes."
        });
    }

    recentAttempts.push(now);
    attemptsByIp.set(key, recentAttempts);
    next();
};

export default authRateLimit;
