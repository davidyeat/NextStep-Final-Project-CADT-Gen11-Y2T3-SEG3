import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth.js";

import Logo from "./Logo.jsx";
import NavLinks from "./NavLinks.jsx";
import AuthButtons from "./AuthButtons.jsx";
import UserMenu from "./UserMenu.jsx";
import MobileMenu from "./MobileMenu.jsx";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { user, loading, isAuthenticated, logout } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (loading) {
        return (
            <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                    <div className="h-8 w-36 animate-pulse rounded bg-gray-200" />

                    <div className="hidden lg:flex gap-6">
                        <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
                        <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
                        <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
                    </div>


                    <div className="h-10 w-24 animate-pulse rounded bg-gray-200" />

                </div>
            </header>
        );
    }

    return (
        <header className={`sticky top-0 z-40 w-full bg-white backdrop-blur-sm transition-all duration-300 ${isScrolled ? "shadow-md" : "shadow-sm"}`}>
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <Logo />
                <NavLinks />
                <div className="hidden lg:flex items-center">
                    {isAuthenticated ? (
                        <UserMenu user={user} onLogout={logout} />
                    ) : (
                        <AuthButtons />
                    )}
                </div>
                <div className="sticky top-0 z-40 flex items-center lg:hidden">
                    <MobileMenu 
                        isAuthenticated={isAuthenticated}
                        user={user}
                        onLogout={logout}
                    />
                </div>
            </div>
        </header>
    );
}