import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function InstructorProfile() {
  const { id } = useParams();
  const [instructor, setInstructor] = useState(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    age: "",
    gender: ""
  });
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://coursify-backend-svup.onrender.com/users/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch instructor data");
        return res.json();
      })
      .then((data) => {
        setInstructor(data);
        setFormData({
          first_name: data.first_name || "",
          last_name: data.last_name || "",
          email: data.email || "",
          age: data.age || "",
          gender: data.gender || ""
        });
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://coursify-backend-svup.onrender.com/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update profile");
        return res.json();
      })
      .then((updated) => {
        setInstructor(updated);
        setIsEditing(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  if (loading) {
    return <div className="text-center mt-10 text-gray-600">Loading profile...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500 font-semibold">Error: {error}</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl border border-slate-200">
      <h1 className="text-3xl font-semibold mb-6 text-center text-black">Your Profile</h1>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <div>
            <label className="block font-semibold">First Name:</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block font-semibold">Last Name:</label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block font-semibold">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block font-semibold">Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block font-semibold">Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Male">Female</option>
            </select>
          </div>
          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-4 text-black">
          <p><span className="font-semibold">Name:</span> {instructor.first_name} {instructor.last_name}</p>
          <p><span className="font-semibold">Email:</span> {instructor.email}</p>
          <p><span className="font-semibold">Age:</span> {instructor.age}</p>
          <p><span className="font-semibold">Gender:</span> {instructor.gender}</p>
          <div className="mt-6 flex gap-4">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-white text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white border"
            >
              Edit Profile
            </button>
            <Link
              to={`/instructor/${id}/dashboard`}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default InstructorProfile;
