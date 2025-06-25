import React from 'react';

const CourseCard = ({ title, instructor, level, duration, image }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100 h-full flex flex-col">
      {/* Image Placeholder */}
      <div className="h-48 bg-blue-100 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
            <span className="text-blue-600 font-medium">Course Image</span>
          </div>
        )}
      </div>
      
      {/* Course Info */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {level}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4">By: {instructor}</p>
        
        <div className="mt-auto flex justify-between items-center">
          <span className="text-sm text-gray-500">{duration} hours</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;