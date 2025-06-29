import React from 'react';

function About() {
  return (
    <div className="bg-white p-6 md:p-10 max-w-4xl mx-auto text-gray-800 rounded-2xl shadow-md space-y-6 mt-10">
      <h1 className="text-3xl md:text-4xl font-extrabold text-green-700">About Coursify</h1>

      <p className="text-lg leading-relaxed">
        At <span className="font-bold text-green-800">Coursify</span>, we believe that education should be accessible, engaging, and empowering. 
        Whether you're a passionate learner or an expert instructor, our platform brings together students and educators in a space built for growth.
      </p>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900"> What We Offer</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Explore Curated Courses</strong> – From beginner tutorials to advanced mastery paths.</li>
          <li><strong>Enroll Seamlessly</strong> – No hassle, just learning.</li>
          <li><strong>Track Your Learning</strong> – Personalized dashboards to keep you focused and motivated.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900"> Why Coursify?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Modern design with user-friendly interfaces</li>
          <li>Secure authentication for peace of mind</li>
          <li>Real-time updates with a dynamic experience</li>
          <li>A growing library of rich, diverse content</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900"> Join the Coursify Community</h2>
        <p className="mt-2">
          Whether you're here to <strong>learn something new</strong> or <strong>share your expertise</strong>, you're in the right place.
          Welcome to <span className="font-bold text-green-700">Coursify</span> — where knowledge meets opportunity.
        </p>
      </div>
    </div>
  );
}

export default About;
