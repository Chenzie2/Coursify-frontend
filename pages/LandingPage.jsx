
import React from 'react'

function LandingPage() {
  return (
    <div>
      
    </div>
  )
}

export default LandingPage




import React, { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';

const LandingPage = () => {
  // Sample course data (replace with API fetch later)
  const courses = [
    { id: 1, title: 'Python Programming', level: 'Beginner', image: 'src/assets/Python Programming.jpg' },
    { id: 2, title: 'Data Science with Python',  level: 'Advanced', image: 'src/assets/Data Science.avif' },
    { id: 3, title: 'Web Development with Flask', level: 'Intermediate', image: 'src/assets/Web Development.avif' },
    { id: 4, title: 'Data Structures',  level: 'Beginner', image: 'src/assets/Data Structures.jpg' },
    { id: 5, title: 'Machine Learning Basics', level: 'Intermediate', image: 'src/assets/MachineLearning.jpg' },
    { id: 6, title: 'Deep Learning', level: 'Advanced', image: 'src/assets/Deeplearning.jpg' },
    { id: 7, title: 'Front-End Development', level: 'Beginner', image: 'src/assets/Frontend.png' },
    { id: 8, title: 'React for Beginners', level: 'Beginner', image: 'src/assets/React.png' },
    { id: 9, title: 'APIs with Flask', level: 'Intermediate', image: 'src/assets/APIs with Flask.png' },
  ];

  // Testimonials from your seed data
  const testimonials = [
    {
      id: 1,
      name: 'Joy Malinda',
      course: 'Python Programming',
      rating: 4.5,
      comment: 'Really helpful course for beginners!'
    },
    {
      id: 2,
      name: 'Boniface Muguro',
      course: 'Data Science with Python',
      rating: 5.0,
      comment: 'Excellent content! Edwin explains complex concepts clearly.'
    },
    {
      id: 3,
      name: 'Aquila Jedidia',
      course: 'Machine Learning Basics',
      rating: 4.8,
      comment: 'ML was made easy! Perfect pace and practical examples.'
    }
  ];

  // Slider state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

return (
  <>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Welcome to Coursify! <br />
            Where knowledge goes both ways.
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether you're here to teach what you know or learn something new, Coursify is your space to connect, grow, and share with a curious community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-all">
              Explore Courses
            </button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Available Courses</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map(course => (
        <div key={course.id} className="group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
          {/* Image */}
          <div className="h-48 bg-gray-100 overflow-hidden">
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Content */}
          <div className="p-4 flex-grow flex flex-col">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium text-lg text-gray-900 line-clamp-2">
                {course.title}
              </h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded whitespace-nowrap">
                {course.level}
              </span>
            </div>
            
            {/* View Details Button */}
            <div className="mt-auto">
              <button className="w-full text-blue-600 hover:text-blue-800 font-medium text-sm py-2 border-t border-gray-100 hover:bg-blue-50 transition-colors">
                View Details →
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-800">Learning Experiences</h2>
          <p className="text-lg text-center mb-12 text-gray-600 max-w-2xl mx-auto">
            Hear from our community of students and instructors
          </p>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-blue-200">
            <div className="flex justify-center text-yellow-400 mb-6 text-2xl">
              {'★'.repeat(Math.floor(testimonials[currentTestimonial].rating))}
              {'☆'.repeat(5 - Math.floor(testimonials[currentTestimonial].rating))}
              <span className="ml-2 text-blue-600 text-sm font-medium">
                ({testimonials[currentTestimonial].rating.toFixed(1)})
              </span>
            </div>
            
            <blockquote className="text-center">
              <p className="text-gray-700 text-xl italic leading-relaxed mb-8 px-4">
                "{testimonials[currentTestimonial].comment}"
              </p>
              <footer className="flex flex-col items-center">
                <p className="font-semibold text-blue-800 text-lg">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-blue-600 text-sm mt-1">
                  Studied: {testimonials[currentTestimonial].course}
                </p>
              </footer>
            </blockquote>

            <div className="flex justify-center mt-8 gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-blue-600 w-4' : 'bg-blue-200'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
);
};

export default LandingPage;

