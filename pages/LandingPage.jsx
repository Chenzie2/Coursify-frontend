import React, { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';

const LandingPage = () => {
  // Sample course data (replace with API fetch later)
  const courses = [
    { id: 1, title: 'Python Programming', instructor: 'Edwin Kipyego', level: 'Beginner', duration: 30, image: 'src/assets/Python Programming.jpg' },
    { id: 2, title: 'Data Science with Python', instructor: 'Edwin Kipyego', level: 'Advanced', duration: 45, image: 'src/assets/Data Science.avif' },
    { id: 3, title: 'Web Development with Flask', instructor: 'Celestine Mecheo', level: 'Intermediate', duration: 40, image: 'src/assets/Web Development.avif' },
    { id: 4, title: 'Data Structures', instructor: 'Celestine Mecheo', level: 'Beginner', duration: 35, image: 'src/assets/Data Structures.jpg' },
    { id: 5, title: 'Machine Learning Basics', instructor: 'Edwin Kipyego', level: 'Intermediate', duration: 50, image: 'src/assets/MachineLearning.jpg' },
    { id: 6, title: 'Deep Learning', instructor: 'Edwin Kipyego', level: 'Advanced', duration: 60, image: 'src/assets/Deeplearning.jpg' },
    { id: 7, title: 'Front-End Development', instructor: 'Celestine Mecheo', level: 'Beginner', duration: 25, image: 'src/assets/Frontend.png' },
    { id: 8, title: 'React for Beginners', instructor: 'Celestine Mecheo', level: 'Beginner', duration: 30, image: 'src/assets/React.png' },
    { id: 9, title: 'APIs with Flask', instructor: 'Edwin Kipyego', level: 'Intermediate', duration: 35, image: 'src/assets/APIs with Flask.png' },
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
    <div className="min-h-screen bg-gray-50">
     
     /* Hero Section */
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

      
      /* Courses Section */
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-800">Available Courses</h2>
          <p className="text-lg text-center mb-12 text-gray-600 max-w-3xl mx-auto">
            Discover courses from fellow learners or share your own expertise
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <CourseCard 
                key={course.id}
                title={course.title}
                instructor={course.instructor}
                level={course.level}
                duration={course.duration}
                image={course.image}
              />
            ))}
          </div>
        </div>
      </section>

      /* Testimonials */
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
  );
};

export default LandingPage;