import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";
import useOutsideClick from "../../hooks/useOutsiteClick.js"

export default function UserMenu({ user, onLogout }) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    useOutsideClick(menuRef, () => setIsOpen(false));

    return (
        <div
            ref={menuRef} className="relative"
        >
            <button
                onClick={() => setIsOpen((current) => !current)}
                className="flex items-center gap-2 rounded-full hover:bg-gray-100 p-2 transition"
            >
                <img
                    src={user?.profileImage} 
                    alt={user?.username}
                    className="h-11 w-11 rounded-full object-cover border-2 border-blue-600"
                />

                <ChevronDown size={18}
                    className={`transition-transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            {isOpen && (
                <ProfileDropdown 
                    user={user} 
                    onLogout={onLogout} 
                    closeMenu={() => setIsOpen(false)}
                />
            )}

        </div>
    );
};