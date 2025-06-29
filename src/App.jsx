import React, { useState} from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';
import Navbar from '../components/Navbar';

import About from '../pages/About'; 
// import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
//import MyCourses from '../pages/MyCourses';
import CourseDetails from '../pages/CourseDetails';

function App() {
   const location = useLocation();
  const hideNavbar = ['/login', '/register'].includes(location.pathname);


  return (
    //  <ToastContainer position="top-right" autoClose={3000} />

    <>
    {!hideNavbar && <Navbar />}
    
    
    <Routes>
     
      {/* <Route path="/" element={<LandingPage />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/mycourses" element={<MyCourses />} /> */}
      <Route path="/courses/:id" element={<CourseDetails />} />
      /* <Route path="/about" element={<About />} />*/
      
    </Routes>
   </>
  );
}

export default App;
