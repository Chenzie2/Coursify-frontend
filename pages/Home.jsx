import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Home() {
  const { id } = useParams();
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    fetch(`http://127.0.0.1:5555/courses`)
      .then((r) => r.json())
      .then(setCourses)
      .catch(console.error);
  }, [id]);

  const handleCourseClick = (courseId) => {
    navigate(`/student/${id}/courses/${courseId}`);
  };

  return (
    <div className="relative max-w-5xl mx-auto mt-10 px-6 pb-24">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">
        Available Courses
      </h1>

      {/* COURSES LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => handleCourseClick(course.id)}
            className="cursor-pointer bg-white shadow-md p-6 rounded-xl border border-slate-200 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-2 text-green-600">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

