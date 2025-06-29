import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import NavbarLoggedOut from "../components/NavbarLoggedOut";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import Footer from "../components/Footer";
import About from "../pages/About";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CourseDetails from "../pages/CourseDetails";
import MyCourses from "../pages/MyCourses";
import Dashboard from "../pages/Dashboard";
import InstructorProfile from "../pages/InstructorProfile";
import InstructorDashboard from "../pages/InstructorDashboard";
import InstrCourseDetails from "../pages/InstrCourseDetails";
import Home from "../pages/Home";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const hideLayout = ["/login", "/register"].includes(location.pathname);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {!hideLayout && (
        <>
          {user && token ? (
            <NavbarLoggedIn user={user} onLogout={handleLogout} />
          ) : (
            <NavbarLoggedOut />
          )}
        </>
      )}

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mycourses" element={<MyCourses />} />
          <Route path="/student/:id/courses/:courseId" element={<CourseDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/instructor/:id" element={<InstructorProfile />} />
          <Route path="/instructor/:id/dashboard" element={<InstructorDashboard />} />
          <Route path="/instructor/:id/courses/:courseId" element={<InstrCourseDetails />} />
          <Route path="/student/:id" element={<Home />} />

        </Routes>
      </div>

      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;
