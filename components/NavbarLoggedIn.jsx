import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  LogOut,
  BookOpen,
  Home,
  User,
  Layers,
  UserRound,
} from "lucide-react";

export default function NavbarLoggedIn({ user, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname;

  const getLinkClass = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium ${
      currentPath === path
        ? "bg-green-700 text-white shadow"
        : "text-gray-700 hover:bg-gray-100 hover:text-green-800"
    }`;

  const roleLink =
    user.role === "student"
      ? { name: "Enrolled Courses", path: "/mycourses", icon: BookOpen }
      : { name: "My Courses", path: `/instructor/${user?.id}/dashboard`, icon: Layers };

  const navLinks = [
    user.role === "student"
    ? { name: "Dashboard", path: `/${user?.role}/${user?.id}`, icon: Home }
    : { name: "Profile", path: `/${user?.role}/${user?.id}`, icon: UserRound},
    roleLink
  ];
  

  const handleNavigate = () => {
    navigate(`/${user?.role}/${user?.id}`);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={handleNavigate}
          className="text-green-800 text-2xl font-extrabold flex items-center gap-2"
        >
          <User className="w-6 h-6 text-green-600" />
          Coursify
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className={getLinkClass(link.path)}>
              <link.icon className="w-4 h-4" />
              {link.name}
            </Link>
          ))}

          <button
            onClick={() => {
              onLogout();
              navigate("/");
            }}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-sm rounded-md shadow"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={getLinkClass(link.path)}
              onClick={() => setIsOpen(false)}
            >
              <link.icon className="w-4 h-4" />
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              onLogout();
              setIsOpen(false);
              navigate("/");
            }}
            className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm shadow"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
