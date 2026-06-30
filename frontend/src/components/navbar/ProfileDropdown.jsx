import { Link } from "react-router-dom";
import { GraduationCap, Heart, LogOut } from "lucide-react";

export default function ProfileDropdown({ user, onLogout, closeMenu }) {
    return (
        <div className="absolute right-0 mt-3 w-72 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
            {/* Header */}
            <div className="flex items-center p-5 border-b border-gray-200">
                <img
                    src={user?.profileImag}
                    alt={user?.username}
                    className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                    <p className="font-semibold text-gray-800">{user.username || "Default User"}</p>
                    <p className="text-sm text-gray-500">{user.email || "default@example.com"}</p>
                </div>
            </div>

            {/* Menu */}
            <div className="py-2">
                <Link 
                    to="/recommendations"
                    onClick={closeMenu}
                    className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100 transition-colors"

                >
                    <GraduationCap size={20} />
                    Recommendation
                </Link>
                <Link 
                    to="/favorites"
                    onClick={closeMenu}
                    className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100 transition-colors"
                >
                    <Heart size={20} />
                    Favorite list
                </Link>
                <button
                    onClick={() => {
                        closeMenu();
                        onLogout();
                    }}
                    className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100 transition-colors"
                >
                    <LogOut size={20} />
                    Log Out
                </button>
            </div>
        </div>
    );
}