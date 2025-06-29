import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from '../components/Navbar';
import About from '../pages/About';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CourseDetails from '../pages/CourseDetails';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
