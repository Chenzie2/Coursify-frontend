import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GraduationCap, LogIn } from "lucide-react";

export default function NavbarLoggedOut() {
  const location = useLocation();
  const currentPath = location.pathname;

  const getLinkClass = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium ${
      currentPath === path
        ? "bg-green-700 text-white shadow"
        : "text-gray-700 hover:bg-gray-100 hover:text-green-800"
    }`;

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-green-800 text-2xl font-extrabold flex items-center gap-2"
        >
          <GraduationCap className="w-6 h-6 text-green-600" />
          Coursify
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/login" className={getLinkClass("/login")}>
            <LogIn className="w-4 h-4" />
            Login
          </Link>
          <Link
            to="/register"
            className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm shadow"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
