import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function CourseDetails() {
  const { courseId } = useParams()
  //const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }

    fetch(`http://localhost:5555/courses/${courseId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch course');
        }
        return res.json();
      })
      .then((data) => {
        setCourse(data);
        setLoading(false);
        
        if (userData) {
          checkEnrollment(data.id, JSON.parse(userData).id);
        }
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [courseId]);

  const checkEnrollment = async (courseId, userId) => {
    try {
      const response = await fetch(`http://localhost:5555/enrollments/check?user_id=${userId}&course_id=${courseId}`);
      const data = await response.json();
      setIsEnrolled(data.isEnrolled);
    } catch (err) {
      console.error('Error checking enrollment:', err);
    }
  };

  const handleEnroll = async () => {
    if (!user) {
      toast.error('Please log in to enroll in courses');
      return;
    }

    try {
      const response = await fetch('http://localhost:5555/enrollments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          user_id: user.id,
          course_id: course.id,
          progress: 0,
          review_score: null,
          certificate_issued: false
        })
      });

      if (response.ok) {
        toast.success('Successfully enrolled in the course!');
        setIsEnrolled(true);
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || 'Enrollment failed');
      }
    } catch (err) {
      console.error('Enrollment error:', err);
      toast.error('Failed to enroll. Please try again.');
    }
  };

  if (loading) return <p className="text-gray-600 font-semibold">Loading...</p>;
  if (error || !course) return <p className="text-red-600 font-semibold">Course not found.</p>;

  return (
    <div className="py-10 flex items-center justify-center px-4 bg-white">
      <div className="max-w-3xl mx-auto w-200 px-6 py-10 bg-white rounded-2xl text-center font-sans text-slate-800 shadow-xl">

        <div className='mb-6'>
          <h1 className="text-4xl font-extrabold text-gray-700 mb-1">{course.title}</h1>
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

        {isEnrolled ? (
          <div className="bg-green-100 text-green-800 font-semibold px-6 py-3 rounded-lg mb-8">
            You are already enrolled in this course
          </div>
        ) : (
          <button
            onClick={handleEnroll}
            className="bg-white text-green-600 border border-green-600 hover:bg-green-600 hover:text-white font-semibold px-6 py-3 rounded-lg transition duration-300 mb-8 animate-pulse"
          >
            Enroll
          </button>
        )}

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