import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MyCourses from '../pages/MyCourses';
import CourseDetails from '../pages/CourseDetails';

function App() {
  

  return (
    
    
    <Routes>
     
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/mycourses" element={<MyCourses />} />
      <Route path="/courses/:id" element={<CourseDetails />} />
    </Routes>
   
  );
}

export default App;
