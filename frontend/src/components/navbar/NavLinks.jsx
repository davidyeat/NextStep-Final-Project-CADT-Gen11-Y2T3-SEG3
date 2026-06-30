import { NavLink } from "react-router-dom";
import navItems from "./navLinksData.js";

export default function NavLinks() {
  return (
    <ul className="hidden lg:flex items-center gap-6">
      {navItems.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          // className="text-lg font-medium text-gray-700 hover:text-blue-600"
          className={({ isActive }) =>
            `text-lg font font-medium transition ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </ul>
  );
}
