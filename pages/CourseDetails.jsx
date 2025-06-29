import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../components/Footer';

export default function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  console.log(`Fetching from http://localhost:5000/courses/${id}`);
  fetch(`http://localhost:5000/courses/${id}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch course');
      }
      return res.json();
    })
    .then((data) => {
      console.log("Data received:", data);
      setCourse(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setError(err.message);
      setLoading(false);
    });
}, [id]);


  const handleEnroll = () => {
    toast.success('Enrollment successful!');
  };

  if (loading) return <p className="text-gray-600 font-semibold">Loading...</p>;
  if (error || !course) return <p className="text-red-600 font-semibold">Course not found.</p>;

  return (
    <div className="py-10 flex items-center justify-center px-4 bg-white">
      <div className="max-w-3xl mx-auto px-6 py-10 bg-white border rounded-2xl text-center font-sans text-slate-800 shadow-xl">

        <div className='mb-6'>
          <h1 className="text-4xl font-extrabold text-black mb-1">{course.title}</h1>
          <p>{course.description}</p>
        </div>

        <hr className="border-t border-green-600 my-6 mb-8" />

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1 bg-white rounded-lg p-6 text-left hover:scale-105 transition-transform shadow">
            <h2 className="text-xl text-green-500 font-semibold mb-1">Instructor</h2>
            <p><span className="font-semibold">Name:</span> {course.instructor?.first_name} {course.instructor?.last_name}</p>
            <p><span className="font-semibold">Email:</span> {course.instructor?.email}</p>
          </div>
          <div className='flex-1 bg-white rounded-lg p-6 text-left hover:scale-105 transition-transform shadow'>
            <h2 className="text-xl text-green-500 font-semibold mb-1">Course Details</h2>
            <p><span className="font-semibold">Level:</span> {course.level}</p>
            <p><span className="font-semibold">Lessons:</span> {course.lesson_count}</p>
            <p><span className="font-semibold">Duration:</span> {course.duration} hours</p>
          </div>
        </div>

        <button
          onClick={handleEnroll}
          className="bg-white text-green-600 border border-green-600 hover:bg-green-600 hover:text-white font-semibold px-6 py-3 rounded-lg transition duration-300 mb-8 animate-pulse">
          Enroll
        </button>

        <div className='bg-white border border-green-600 rounded-lg p-4'>
          <h3 className="text-xl text-green-500 font-semibold mb-3">Reviews</h3>
          {course.reviews && course.reviews.length > 0 ? (
            <ul className="space-y-6">
              {course.reviews.map((review) => (
                <li key={review.id}>
                  <p className="font-medium">{review.user?.username || 'Anonymous'}:</p>
                  <p className="text-gray-700">{review.comment}</p>
                  <div className="text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>{i < Math.round(review.rating) ? '★' : '☆'}</span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>

    </div>
  );
}

