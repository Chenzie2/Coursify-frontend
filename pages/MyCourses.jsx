import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mailIcon from '../src/images/icons8-gmail-50.png'; 

export default function MyCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("You must be logged in");

        const sessionRes = await fetch("https://coursify-backend-svup.onrender.com/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!sessionRes.ok) throw new Error("Invalid session. Please log in again.");
        const userData = await sessionRes.json();
        const { id: userId, role } = userData;

        if (role !== "student") {
          throw new Error("Only students can view enrolled courses.");
        }

        const enrollmentsRes = await fetch(`https://coursify-backend-svup.onrender.com/enrollments/${userId}`, {
          credentials: 'include',
        });

        if (!enrollmentsRes.ok) throw new Error('Failed to fetch your enrollments');
        const enrollmentsData = await enrollmentsRes.json();
        
        const coursesData = await Promise.all(
          enrollmentsData.map(async (enrollment) => {
            const courseRes = await fetch(`https://coursify-backend-svup.onrender.com/courses/${enrollment.course_id}`);
            if (!courseRes.ok) throw new Error(`Failed to fetch course ${enrollment.course_id}`);
            const courseData = await courseRes.json();

            return {
              ...courseData,
              progress: enrollment.progress,
            };
          })
        );

        setCourses(coursesData);
      } catch (err) {
        setError(err.message);
        if (err.message.includes("logged in") || err.message.includes("session")) {
          navigate('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 flex justify-center">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 space-y-6">
        <h2 className="text-3xl font-bold text-green-800">Your Enrolled Courses</h2>

        {loading && <p className="text-gray-600">Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && (
          <>
            {courses.length === 0 ? (
              <p className="text-gray-500">You are not enrolled in any courses yet.</p>
            ) : (
              <ul className="space-y-4">
                {courses.map((course) => (
                  <li
                    key={course.id}
                    className="border p-4 rounded-md shadow-sm hover:shadow-md transition-shadow space-y-2"
                  >
                    <h3 className="text-xl font-semibold text-green-700">{course.title}</h3>
                    <p className="text-gray-600">{course.description}</p>

                    <div className="text-sm text-gray-500">
                      <span className="font-medium">Level:</span> {course.level} |
                      <span className="ml-2 font-medium">Duration:</span> {course.duration} hrs |
                      <span className="ml-2 font-medium">Lessons:</span> {course.lesson_count}
                    </div>

                    <div className="text-sm text-green-700 font-medium">
                      Progress: {course.progress}%
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="text-sm text-gray-700">
                        <span className="font-medium">Instructor:</span>{' '}
                        {course.instructor?.first_name} {course.instructor?.last_name}
                      </div>

                      {course.instructor?.email && (
                        <a
                          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${course.instructor?.email}&su=Assignment+Submission&body=Hello,+`}
                          title="Email Instructor"
                          target="_blank"
                          className="hover:scale-110 transition-transform"
                        >
                          <img src={mailIcon} alt="Mail" className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
}


