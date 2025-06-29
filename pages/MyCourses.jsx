import React, { useState, useEffect } from 'react';

export default function MyCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // First, check who's logged in//
        const sessionRes = await fetch('http://127.0.0.1:5000/check_session', {
          credentials: 'include',
        });

        if (!sessionRes.ok) throw new Error('You must be logged in');

        const userData = await sessionRes.json();
        const userId = userData.id;
        const userRole = userData.role;
        setRole(userRole);

        // Then fetch courses depending on role
        let coursesRes;

        if (userRole === 'student') {
          coursesRes = await fetch(`http://127.0.0.1:5000/students/${userId}/courses`);
        } else if (userRole === 'instructor') {
          coursesRes = await fetch(`http://127.0.0.1:5000/instructors/${userId}/courses`);
        } else {
          throw new Error('Unknown user role');
        }

        if (!coursesRes.ok) throw new Error('Failed to fetch courses');

        const data = await coursesRes.json();
        setCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 flex justify-center">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 space-y-6">
        <h2 className="text-3xl font-bold text-green-800">
          {role === 'student' && 'Courses You Are Enrolled In'}
          {role === 'instructor' && 'Courses You Have Created'}
        </h2>

        {loading && <p className="text-gray-600">Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && (
          <>
            {courses.length === 0 ? (
              <p className="text-gray-500">
                {role === 'student'
                  ? 'You are not enrolled in any courses yet.'
                  : 'You have not created any courses yet.'}
              </p>
            ) : (
              <ul className="space-y-4">
                {courses.map((course) => (
                  <li key={course.id} className="border p-4 rounded-md shadow-sm">
                    <h3 className="text-xl font-semibold text-green-700">{course.title}</h3>
                    <p className="text-gray-600">{course.description}</p>
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
