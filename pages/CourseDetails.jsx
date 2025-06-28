import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/courses/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch course details");
        return res.json();
      })
      .then((data) => setCourse(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <p className="text-red-500 text-center mt-4">Error: {error}</p>;
  if (!course) return <p className="text-center mt-4">Loading course details...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-2xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{course.title}</h1>
      <p className="text-gray-600 mb-4 italic">{course.description}</p>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-sm text-gray-500">Duration</p>
          <p className="font-medium text-gray-700">{course.duration} hours</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Level</p>
          <p className="font-medium text-gray-700">{course.level}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Lesson Count</p>
          <p className="font-medium text-gray-700">{course.lesson_count}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Instructor</p>
          <p className="font-medium text-gray-700">
            {course.instructor.first_name} {course.instructor.last_name} <br />
            <span className="text-sm text-gray-500">{course.instructor.email}</span>
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Reviews</h2>
        {course.reviews.length > 0 ? (
          <ul className="space-y-4">
            {course.reviews.map((review) => (
              <li
                key={review.id}
                className="bg-gray-50 p-4 rounded-lg border border-gray-200"
              >
                <p className="text-gray-700">
                  <span className="font-semibold">{review.user.username}</span> rated{" "}
                  <span className="text-yellow-500 font-semibold">{review.rating}/5</span>
                </p>
                <p className="text-gray-600 mt-1">{review.comment}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">No reviews yet.</p>
        )}
      </div>
    </div>
  );
}

export default CourseDetails;
