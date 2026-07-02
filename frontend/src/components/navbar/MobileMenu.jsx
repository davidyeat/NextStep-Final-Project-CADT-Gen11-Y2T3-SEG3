import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, GraduationCap, Heart, LogOut } from "lucide-react";
import navItems from "./navLinksData.js";
import Logo from "./Logo.jsx";

export default function MobileMenu({ isAuthenticated, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="p-2 rounded-3xl cursor-pointer hover:bg-gray-100 transition"
      >
        <Menu size={23} />
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="absolute inset-x-0 top-0 bg-white shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
            <Logo onClick={closeMenu} />
            <button
              type="button"
              onClick={closeMenu}
              className="p-1.5 rounded-3xl cursor-pointer hover:bg-gray-100 transition text-gray-400"
            >
              <X size={23} />
            </button>
          </div>
          <div>
            {/* Navigation */}
            <nav className="px-4 py-4 space-y-1">
              {navItems.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) => `block px-4 py-3 rounded-lg text-sm text-gray-500 font-medium transition-colors cursor-pointer duration-200
                  ${
                    isActive
                      ? " bg-indigo-500 text-white font-medium rounded-xl"
                      : " hover:bg-gray-100 hover:rounded-2xl"
                  }`}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Bottom Section */}
            <div className="border-t border-gray-200 flex flex-col justify-between h-full">
              {isAuthenticated ? (
                <div className="py-2">
                  <Link
                    to="/recommendations"
                    onClick={closeMenu}
                    className="flex items-center gap-3 px-6 py-4 hover:bg-gray-100"
                  >
                    <GraduationCap size={20} />
                    Recommendation
                  </Link>

                  <Link
                    to="/favorites"
                    onClick={closeMenu}
                    className="flex items-center gap-3 px-6 py-4 hover:bg-gray-100"
                  >
                    <Heart size={20} />
                    Favorite
                  </Link>

                  <button
                    type="button"
                    onClick={() => {
                      closeMenu();
                      onLogout();
                    }}
                    className="flex w-full items-center gap-3 px-6 py-4 text-red-600 hover:bg-red-50"
                  >
                    <LogOut size={20} />
                    Log Out
                  </button>
                </div>
              ) : (
                <div className="mt-auto p-2 flex gap-4">
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="text-center rounded-2xl border border-blue-600 px-4 py-3 text-blue-600"
                  >
                    Sign In
                  </Link>

                  <Link
                    to="/sign-up"
                    onClick={closeMenu}
                    className="text-center rounded-2xl bg-blue-600 px-4 py-3 text-white"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
