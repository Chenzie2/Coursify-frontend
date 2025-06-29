import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import gmailIcon from "../src/images/icons8-gmail-50.png"
import massGmailIcon from "../src/images/icons8-gmail-50 (1).png";
import googleMeetIcon from "../src/images/icons8-google-meet-50.png";

function InstrCourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ title: "", description: "" });

  useEffect(() => {
    fetch(`http://127.0.0.1:5555/courses/${courseId}`)
      .then((r) => r.json())
      .then((data) => {
        setCourse(data);
        setForm({ title: data.title, description: data.description });
      });

    fetch(`http://127.0.0.1:5555/courses/${courseId}/students`)
      .then((r) => r.json())
      .then((data) => {
        if (data.students) setStudents(data.students);
      });
  }, [courseId]);

  const handleEditToggle = () => setEditMode(!editMode);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:5555/courses/${courseId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((r) => r.json())
      .then((updated) => {
        setCourse(updated);
        setEditMode(false);
      });
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this course?");
    if (!confirmDelete) return;

    fetch(`http://127.0.0.1:5555/courses/${courseId}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        navigate(`/instructor/${course.instructor_id}/dashboard`);
      }
    });
  };

  if (!course) return <p className="text-center mt-10">Loading course...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-slate-200">
      {editMode ? (
        <form onSubmit={handleSubmit} className="space-y-4 mb-6 text-black">
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Course Title"
            required
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Course Description"
            required
          />
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={handleEditToggle}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4 text-black">{course.title}</h1>
          <p className="mb-4 text-gray-700">{course.description}</p>

          <div className="flex gap-4 mb-6">
            <button
              onClick={handleEditToggle}
              className="bg-white text-green-600 px-4 py-2 rounded hover:bg-green-600 hover:text-white border"
            >
              Edit Course
            </button>
            <button
              onClick={handleDelete}
              className="bg-white text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white border"
            >
              Delete Course
            </button>
          </div>
        </>
      )}

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-black">Enrolled Students</h2>
        {students.length > 0 && (
          <div className="flex space-x-5">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${students.map(s => s.email).join(',')}&su=Course+Update&body=Dear+student,`}
              target="_blank"
              title="Send Email to All Students"
              rel="noopener noreferrer"
            >
              <img
                src={massGmailIcon}
                alt="Send Emails to All Students"
                className="w-[40px] h-[40px] cursor-pointer"
              />
            </a>
            <a
              href="https://meet.google.com/"
              target="_blank"
              title="Create a Meeting"
              rel="noopener noreferrer"
            >
              <img
                src={googleMeetIcon}
                alt="Create a Meeting"
                className="w-[40px] h-[40px] cursor-pointer"
              />
            </a>
          </div>
        )}
      </div>

      <ul className="space-y-2">
        {students.map((student, index) => (
          <li
            key={index}
            className="p-4 bg-slate-50 border-white rounded-xl flex justify-between items-center"
          >
            <div className="flex space-x-4">
              <span className="font-medium text-black">{student.name}</span>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${student.email}&su=Progress+Update&body=Hello+${encodeURIComponent(student.name)},`}
                rel="noopener noreferrer"
                target="_blank"
                title="Send Email"
              >
                <img
                  src={gmailIcon}
                  alt="Send Email to Student"
                  className="w-5 h-5 cursor-pointer"
                />
              </a>
            </div>
            <span className="text-gray-600">Progress: {student.progress}%</span>
          </li>
        ))}
        {students.length === 0 && (
          <li className="text-gray-500 italic text-center mt-4">
            No students enrolled in this course yet.
          </li>
        )}
      </ul>
    </div>
  );
}

export default InstrCourseDetails;
