import { Bell, Menu, Search, UserCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Navbar({ title, onMenuClick }) {
    const { user, logout } = useAuth();

    return (
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="flex items-center justify-between px-4 py-3 md:px-6">
                {/* Title */}
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={onMenuClick}
                        className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                    <div>
                        <h2 className="font-heading text-xl font-bold text-gray-900">{title}</h2>
                    </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                     {/* Search */}
                    <label className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 md:flex">
                        <Search className="h-4 w-4" />
                        <input
                        type="text"
                        placeholder="Search..."
                        className="w-75 border-0 bg-transparent outline-none placeholder:text-slate-400"
                        />
                    </label>
                    
                    {/* Notification */}
                    <button
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-50"
                    >
                        <Bell className="h-5 w-5" />
                    </button>

                    {/* Profile */}
                    <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2 py-1.5">
                        <UserCircle2 className="h-8 w-8 text-slate-500" />
                        <div className="hidden text-left md:block">
                            <p className="text-sm font-medium text-slate-800">
                                {user?.username || "Admin"}
                            </p>
                            <p className="text-xs text-slate-500">Administrator</p>
                        </div>
                    </div>
                    
                    {/* Log out */}
                    <button
                        type="button"
                        onClick={logout}
                        className="hidden rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 md:inline-flex"
                    >
                        Logout
                    </button>

                    <Link
                        to="/"
                        className="hidden rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 md:inline-flex"
                    >
                        View site
                    </Link>
                </div>
            </div>
        </header>
    );
}
