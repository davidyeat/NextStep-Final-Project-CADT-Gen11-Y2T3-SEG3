import { NavLink } from "react-router-dom";
import Logo from "../navbar/Logo";
import {
    Building2,
    ChevronLeft,
    ChevronRight,
    LayoutDashboard,
    BadgeDollarSign,
    BookOpen,
    Settings,
    Users,
    X,
} from "lucide-react";
import { adminNavItems } from "../../utils/constants";

const iconMap = {
    LayoutDashboard,
    Building2,
    BadgeDollarSign,
    BookOpen,
    Users,
    Settings,
};

export default function Sidebar({ isCollapsed, onToggleCollapse, isMobileOpen, onClose }) {
    const baseLink ="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition-all";
    const activeLink = "bg-sky-50 text-sky-700 shadow-sm";
    const inactiveLink = "text-slate-600 hover:bg-slate-100 hover:text-slate-900";

    const content = (
        <div className="flex h-full flex-col">
            <div className="flex items-center justify-between px-4 py-4">
                {/* Header */}
                <div className="flex items-center gap-3">
                    {!isCollapsed ? (
                        <div>
                            <Logo />
                        </div>
                    ) : null}
                </div>
                
                {/* Collapse Toggle */}
                <button
                    type="button"
                    onClick={onToggleCollapse}
                    className="hidden rounded-full border border-slate-200 bg-white p-2 text-slate-500 transition hover:text-slate-900 md:inline-flex"
                >
                    {isCollapsed ? (
                        <ChevronRight className="h-4 w-4" />
                    ) : (
                        <ChevronLeft className="h-4 w-4" />
                    )}
                </button>
            </div>
            
            {/* Navigation Link Side bar */}
            <nav className="mt-4 flex-1 space-y-1 px-3">
                {adminNavItems.map((item) => {
                    const Icon = iconMap[item.icon] || LayoutDashboard;

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === "/admin"}
                            onClick={onClose}
                            className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink} ${isCollapsed ? "justify-center px-0" : ""}`
                        }
                        >
                            <Icon className="h-4 w-4" />
                            {!isCollapsed ? <span>{item.name}</span> : null}
                        </NavLink>
                    );
                })}
            </nav>
            
            {/* Close Panel */}
            <div className="border-t border-slate-200 p-4">
                <button
                    type="button"
                    onClick={onClose}
                    className="flex w-full items-center gap-3 rounded-xl bg-slate-900 px-3 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                <X className="h-4 w-4" />
                    {!isCollapsed ? <span>Close panel</span> : null}
                </button>
            </div>
        </div>
    );

    return (
        <>
        <aside
            className={`fixed inset-y-0 left-0 z-40 w-72 border-r border-slate-200 bg-white shadow-sm transition duration-300 md:sticky md:top-0 md:h-screen ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} ${isCollapsed ? "md:w-24" : "md:w-72"}`}
        >
            {content}
        </aside>

        {isMobileOpen ? (
            <div
                className="fixed inset-0 z-30 bg-slate-950/40 md:hidden"
                onClick={onClose}
            />
        ) : null}
        </>
    );
}
