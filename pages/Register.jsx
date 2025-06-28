import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';


export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: '', last_name: '', email: '',
    password: '', confirmPassword: '', age: '',
    gender: '', role: '',
  });

  const [error, setError] = useState('');

    const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

    const handleSubmit = async (e) => {
    e.preventDefault();

    const { first_name, last_name, email, password, confirmPassword, age, gender, role } = formData;

    if (!first_name || !last_name || !email || !password || !confirmPassword || !age || !gender || !role) {
      return setError('All fields are required.');
    }

    if (password !== confirmPassword) {
      return setError('Passwords do not match.');
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name, last_name, email, password, age: parseInt(age), gender, role
        }),
      });

      const data = await response.json();
      if (response.ok) {
        navigate('/login');
      } else {
        setError(data.error || 'Registration failed.');
      }
    } catch (err) {
      setError('Server error.');
    }
  };

