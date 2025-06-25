import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
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
          <Link
            to={`/courses/${course.id}`}
            className="block w-full text-center text-blue-600 hover:text-blue-800 font-medium text-sm py-2 border-t border-gray-100 hover:bg-blue-50 transition-colors"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;