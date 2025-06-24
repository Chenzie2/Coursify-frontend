import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';

export default function Register() {
const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

    const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      return setError('All fields are required.');
    }

    if (password !== confirmPassword) {
      return setError('Passwords do not match.');
    }

    // Mock register logic (replace with API call)
    console.log('Registering user:', formData);
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-lg p-8 space-y-6">
        <div className="text-center">
          <UserPlus className="mx-auto h-10 w-10 text-green-600" />
          <h2 className="mt-4 text-2xl font-bold text-green-800">Create an Account</h2>
          <p className="mt-1 text-sm text-gray-500">Join Coursify to start learning today</p>
        </div>
  )
}
