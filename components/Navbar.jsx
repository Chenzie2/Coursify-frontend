import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, Home, BookOpen, Users, LogIn, LogOut, GraduationCap,
} from 'lucide-react';

function Navbar({ isLoggedIn, onLogin, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

    const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Courses', path: '/mycourses', icon: BookOpen },
    { name: 'About', path: '/about', icon: Users },
  ];

  const getLinkClass = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium ${
      currentPath === path
        ? 'bg-green-700 text-white shadow'
        : 'text-gray-700 hover:bg-gray-100 hover:text-green-800'
    }`;

    return (
        <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-green-800 text-2xl font-extrabold flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-green-600" />
          Coursify
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className={getLinkClass(link.path)}>
              <link.icon className="w-4 h-4" />
              {link.name}
            </Link>
          ))}
          {isLoggedIn ? (
            <button
              onClick={onLogout}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-sm rounded-md shadow"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          ) : (
            <div className="flex gap-3">
              <Link
                to="/login"
                className="border border-green-700 text-green-800 px-4 py-2 text-sm rounded-md hover:bg-green-50"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 text-sm rounded-md shadow"
              >
                Join for Free
              </Link>
            </div>
          )}
        </div>
         {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
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
          {isLoggedIn ? (
            <button
              onClick={() => {
                onLogout();
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm shadow"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          ) : (
            <div className="space-y-2">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block w-full border border-green-700 text-green-800 px-4 py-2 text-sm rounded-md hover:bg-green-50"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-green-700 hover:bg-green-800 text-white px-4 py-2 text-sm rounded-md shadow"
              >
                Join for Free
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}


    
