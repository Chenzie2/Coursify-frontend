import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function InstructorDashboard() {
  const { id } = useParams();
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    fetch(`http://127.0.0.1:5555/instructors/${id}/courses`)
      .then((r) => r.json())
      .then(setCourses)
      .catch(console.error);
  }, [id]);

  const handleCourseClick = (courseId) => {
    navigate(`/instructor/${id}/courses/${courseId}`);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      duration: "",
      level: "",
      lesson_count: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      duration: Yup.number().required("Required").min(1, "Must be at least 1"),
      level: Yup.string().required("Required"),
      lesson_count: Yup.number().required("Required").min(1, "Must be at least 1"),
    }),
    onSubmit: (values, { resetForm }) => {
      const payload = {
        ...values,
        instructor_id: parseInt(id),
        lesson_count: parseInt(values.lesson_count),
      };

      fetch("http://127.0.0.1:5555/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((r) => {
          if (!r.ok) throw new Error("Course creation failed");
          return r.json();
        })
        .then((res) => {
          setCourses((prev) => [...prev, res.course]);
          resetForm();
          setShowForm(false);
        })
        .catch(console.error);
    },
  });

  const handleCancel = () => {
    setShowForm(false);
    formik.resetForm();
  };

  return (
    <div className="relative max-w-5xl mx-auto mt-10 px-6 pb-24">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">
        Instructor Dashboard
      </h1>

      {/* COURSES LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => handleCourseClick(course.id)}
            className="cursor-pointer bg-white shadow-md p-6 rounded-xl border border-slate-200 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-2 text-green-600">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>
          </div>
        ))}
      </div>

      {/* CREATE FORM */}
      {showForm && (
        <div className="fixed bottom-24 right-6 w-200 bg-white p-6 rounded-xl shadow-xl border z-50 text-black">
          <h2 className="text-xl font-semibold mb-4 text-green-600">Create New Course</h2>
          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Course Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              className="w-full mb-3 p-2 border rounded"
            />
            {formik.touched.title && formik.errors.title && (
              <p className="text-red-500 text-sm">{formik.errors.title}</p>
            )}

            <textarea
              name="description"
              placeholder="Course Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              className="w-full mb-3 p-2 border rounded"
            />
            {formik.touched.description && formik.errors.description && (
              <p className="text-red-500 text-sm">{formik.errors.description}</p>
            )}

            <input
              type="text"
              name="duration"
              placeholder="Duration (Number of Hours)"
              value={formik.values.duration}
              onChange={formik.handleChange}
              className="w-full mb-3 p-2 border rounded"
            />
            {formik.touched.duration && formik.errors.duration && (
              <p className="text-red-500 text-sm">{formik.errors.duration}</p>
            )}

            <input
              type="text"
              name="level"
              placeholder="Level (Beginner, Intermediate, Advanced)"
              value={formik.values.level}
              onChange={formik.handleChange}
              className="w-full mb-3 p-2 border rounded"
            />
            {formik.touched.level && formik.errors.level && (
              <p className="text-red-500 text-sm">{formik.errors.level}</p>
            )}

            <input
              type="number"
              name="lesson_count"
              placeholder="Lesson Count"
              value={formik.values.lesson_count}
              onChange={formik.handleChange}
              className="w-full mb-4 p-2 border rounded"
            />
            {formik.touched.lesson_count && formik.errors.lesson_count && (
              <p className="text-red-500 text-sm">{formik.errors.lesson_count}</p>
            )}

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      )}

      {/* FLOATING BUTTON */}
      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-24 right-6 bg-green-600 hover:bg-green-700 hover:scale-110 transition text-white px-5 py-3 rounded-full shadow-lg"
      >
        + New Course
      </button>
    </div>
  );
}

export default InstructorDashboard;

