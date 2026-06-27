/**
 * Cookie options for setting cookies in the application.
 */
export const cookieOptions = {
    httpOnly: true,
    secure: false, // Set to true if using HTTPS
    sameSite: 'strict',
    maxAge: 1 * 60 * 60 * 1000 // 1h
};