/**
 * Cookie options for setting cookies in the application.
 */
export const cookieOptions = {
    httpOnly: true,
    secure: ENV.NODE_ENV === "production",
    sameSite: ENV.NODE_ENV === "production" ? "lax" : "strict",
    maxAge: 1 * 60 * 60 * 1000 // 1h
};
import ENV from "../config/index.js";
