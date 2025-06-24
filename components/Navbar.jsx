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

}