import { Link } from "react-router-dom";

export default function AuthButtons() {
    return (
        <div className="hidden lg:flex gap-4">
            <Link 
                to="/login" 
                className="rounded-full border border-blue-600 px-6 py-2 text-blue-600 hover:bg-blue-50 transition"
            >
                Login
            </Link>

            <Link 
                to="/sign-up"
                className="rounded-full bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 transition"
            >
                Sign Up
            </Link>
        </div>
    );
};