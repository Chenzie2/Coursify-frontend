import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';


export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

   const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

   const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields.');
      return;
    }

    // Mock login logic (replace with real API call)
    console.log('Logging in with:', formData);
    navigate('/mycourses');
  };

   return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-lg p-8 space-y-6">
        <div className="text-center">
          <LogIn className="mx-auto h-10 w-10 text-green-600" />
          <h2 className="mt-4 text-2xl font-bold text-green-800">Welcome Back</h2>
          <p className="mt-1 text-sm text-gray-500">Login to access your courses</p>
        </div>
        

}