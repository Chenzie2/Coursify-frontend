import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, Home, BookOpen, Users, LogIn, LogOut, GraduationCap,
} from 'lucide-react';

function Navbar({ isLoggedIn, onLogin, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

}