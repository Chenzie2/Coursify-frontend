import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseDetails from "../pages/CourseDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const handleTestToast = () => {
    toast.success("🎉 Toast is working!");
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <div>
              <h2>Welcome to Coursify</h2>
              <button onClick={handleTestToast}>Test Toast</button>
            </div>
          } />
          <Route path="/courses/:id" element={<CourseDetails />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
