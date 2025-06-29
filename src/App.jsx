import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../pages/About';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CourseDetails from '../pages/CourseDetails';
import MyCourses from '../pages/MyCourses';

function App() {
  const location = useLocation();
  const hideLayout = ['/login', '/register'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideLayout && <Navbar />}

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
           <Route path="/mycourses" element={<MyCourses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />         
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;
