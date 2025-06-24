import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function CourseDetails() {
  const { id } = useParams();

  const mockCourses = {
    1: {
      id: 1,
      title: 'Python Programming',
      description: 'Learn Python from scratch. Skills gained: problem solving, logic building, basic automation.',
      duration: 30,
      level: 'Beginner',
      lesson_count: 10,
      instructor: {
        first_name: 'Edwin',
        last_name: 'Kipyego',
        email: 'edwin.kipyego@gmail.com'
      },
      reviews: [
        { id: 1, user: { username: 'Joy Malinda' }, rating: 4.5, comment: 'Really helpful!' },
        { id: 2, user: { username: 'Grace Zawadi' }, rating: 4.2, comment: 'Nice pacing and examples.' }
      ]
    },
    2: {
      id: 2,
      title: 'Web Development with Flask',
      description: 'Build web apps using Flask. Skills gained: routing, REST APIs, templates, backend logic.',
      duration: 40,
      level: 'Intermediate',
      lesson_count: 12,
      instructor: {
        first_name: 'Celestine',
        last_name: 'Mecheo',
        email: 'celestine@gmail.com'
      },
      reviews: [
        { id: 3, user: { username: 'Boniface Muguro' }, rating: 4.0, comment: 'Well structured course!' },
        { id: 4, user: { username: 'Aquila Jedidia' }, rating: 4.6, comment: 'Great real-world examples.' }
      ]
    },
    3: {
      id: 3,
      title: 'Machine Learning Basics',
      description: 'ML concepts explained clearly. Skills gained: regression, classification, model evaluation.',
      duration: 50,
      level: 'Intermediate',
      lesson_count: 14,
      instructor: {
        first_name: 'Edwin',
        last_name: 'Kipyego',
        email: 'edwin.kipyego@gmail.com'
      },
      reviews: [
        { id: 5, user: { username: 'Joy Malinda' }, rating: 4.8, comment: 'Very insightful!' }
      ]
    }
  };

  const course = mockCourses[id];
  const currentUser = { id: 2, username: 'Joy Malinda' };

  const handleEnroll = () => {
    toast.success('Enrollment successful!');
  };

  if (!course) return <p className="text-red-600 font-semibold">Course not found.</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{course.title}</h1>
      <h2 className="text-xl text-gray-600 mb-6">Course Details</h2>

      <div className="mb-6 space-y-2">
        <p><span className="font-semibold">Instructor:</span> {course.instructor.first_name} {course.instructor.last_name}</p>
        <p><span className="font-semibold">Email:</span> {course.instructor.email}</p>
        <p><span className="font-semibold">Level:</span> {course.level}</p>
        <p><span className="font-semibold">Lessons:</span> {course.lesson_count}</p>
        <p><span className="font-semibold">Duration:</span> {course.duration} hours</p>
        <p><span className="font-semibold">Description:</span> {course.description}</p>
      </div>

     <button
  onClick={handleEnroll}
  className="bg-blue-200 hover:bg-blue-700 text-slate-900 font-semibold px-6 py-2 rounded-lg shadow-md transition duration-200"
>
  Enroll
</button>

      <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
      {course.reviews && course.reviews.length > 0 ? (
        <ul className="space-y-6">
          {course.reviews.map((review) => (
            <li key={review.id} className="border-b pb-4">
              <p className="font-medium">{review.user.username}:</p>
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
  );
}
