import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const categories = [
    { name: 'Frontend', icon: '🖥️' },
    { name: 'Data Science', icon: '📊' },
    { name: 'Machine Learning', icon: '🤖' },
    { name: 'Backend', icon: '🛠️' },
    { name: 'DevOps', icon: '⚙️' },
    { name: 'Security', icon: '🔐' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section 
        className="py-24 bg-cover bg-center text-white relative"
        style={{ backgroundImage: 'url("/assets/heroimage.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-green-700/40"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Welcome to Coursify! <br />
            Where knowledge goes both ways.
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether you're here to teach what you know or learn something new, Coursify is your space to connect, grow, and share with a curious community.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/login"
              className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 hover:text-green-800 hover:shadow transition"
            >
              Log In
            </Link>
            <Link
              to="/register"
              className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 hover:shadow transition"
            >
              Join for Free
            </Link>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Course Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
            {categories.map((cat, index) => (
              <div key={index} className="bg-green-50 w-full text-center p-6 rounded-xl shadow-md border border-green-100 flex flex-col items-center">
                <span className="text-3xl mb-2">{cat.icon}</span>
                <p className="text-green-700 font-semibold text-sm">{cat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Featured Courses</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Course 1 */}
            <div className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col">
              <div className="h-48 bg-gray-100">
                <img
                  src="src/assets/Python Programming.jpg"
                  alt="Python Programming"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Python Programming</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded self-start">Beginner</span>
              </div>
            </div>

            {/* Course 2 */}
            <div className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col">
              <div className="h-48 bg-gray-100">
                <img
                  src="src/assets/MachineLearning.jpg"
                  alt="Machine Learning Basics"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Machine Learning Basics</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded self-start">Intermediate</span>
              </div>
            </div>

            {/* Course 3 */}
            <div className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col">
              <div className="h-48 bg-gray-100">
                <img
                  src="src/assets/React.png"
                  alt="React for Beginners"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">React for Beginners</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded self-start">Beginner</span>
              </div>
            </div>

            {/* Course 4 */}
            <div className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col">
              <div className="h-48 bg-gray-100">
                <img
                  src="src/assets/Data Science.avif"
                  alt="Data Science with Python"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Data Science with Python</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded self-start">Advanced</span>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-12 text-center">
            <Link
              to="/courses"
              className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-green-100 hover:text-green-800 hover:shadow transition"
            >
              Go to All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-green-800">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Create a course, enroll in others, and reflect on what you've learned. Coursify makes collaborative learning simple.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "1. Create or Join", desc: "Start a course as an instructor or jump into an existing one as a learner." },
              { title: "2. Learn Together", desc: "Engage with content, ask questions, and grow alongside a community." },
              { title: "3. Reflect & Improve", desc: "Leave feedback and see what others are saying about your course journey." }
            ].map((step, i) => (
              <div key={i} className="bg-green-50 p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-green-700 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-green-800">Why Choose Coursify?</h2>
          <p className="text-lg text-center mb-12 text-gray-600 max-w-2xl mx-auto">
            Coursify is more than just a course platform; it's a dynamic learning community built around sharing, growth, and real feedback.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Teach and Learn, Together",
                desc: "Be both a student and an instructor. Share your skills and learn from others in a collaborative environment."
              },
              {
                title: "Reflections That Matter",
                desc: "Go beyond ratings. Students leave thoughtful reflections on what they truly gained from each course."
              },
              {
                title: "Track Your Journey",
                desc: "Access all your enrolled and created courses in one place and monitor your growth over time."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition">
                <h3 className="font-semibold text-lg text-green-700 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
