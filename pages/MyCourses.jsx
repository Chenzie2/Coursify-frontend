import React, { useState, useEffect } from 'react';

export default function MyCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Replace the URL below with your actual API endpoint
    fetch('https://your-api-url.com/api/courses')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch courses');
        return res.json();
      })
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-green-800 mb-4">My Courses</h2>
        {loading && <p className="text-gray-600">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && (
          courses.length === 0 ? (
            <p className="text-gray-600">You are not enrolled in any courses yet.</p>
          ) : (
            <ul className="space-y-4">
              {courses.map((course) => (
                <li key={course.id} className="border p-4 rounded-md shadow-sm">
                  <h3 className="text-lg font-semibold text-green-700">{course.title}</h3>
                  <p className="text-gray-600">{course.description}</p>
                </li>
              ))}
            </ul>
          )
        )}
      </div>
    </div>
  );
}