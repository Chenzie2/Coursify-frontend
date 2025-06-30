#  Coursify Frontend

**Coursify is a role-based online course platform frontend, built with **React** and **Tailwind CSS**,<br>it  allows users to register, login, view courses, and instructors to manage learning content.<br> It connects seamlessly with a Flask backend for full-stack functionality.



## Screenshots

### Create Account
![Create Account](./screenshots/create-account.jng)

### Login Page
![Login ](screenshots/login.jpg)

### Instructor Dashboard
![Instructor Dashboard](<screenshots/instructor Dashboard.jpg>)
### Instructor Course
![Instructor course](<screenshots/instructor-course details.jpg>)

### Available Courses (All Users)
![Available Courses](<screenshots/available courses.jpg>)

### User Profile
![User Profile](<screenshots/user profile.jpg>)

### Enrolled Courses (Student View)
![Enrolled Courses](<screenshots/enrolled courses.jpg>)

### Enrolled Students (Instructor View)
![Enrolled Students](./screenshots/enrolled-students.jng)

## Create Account (User Account)
![Create Account](<screenshots/create account.jpg>)

## Create New Course(user course)
![Create New Course](<screenshots/create new course.jpg>)

## Enrolled student(Enrollments)
![Enrollments](<screenshots/enrolled student.jpg>)


## Technologies used included 

- **React.js**
- **Tailwind CSS**
- **React Router DOM**
- **Formik + Yup** 
- **JWT Auth** 
- **Lucide Icons**


## Key Features 

- **Role-based Authentication** 
- Instructors: Create and manage courses
- Students: Browse, enroll, and track progress
- Profile page with user details
- Reviews and progress tracking 

## Folder Structure

Coursify-frontend/

│ ├── components/ # Navbar, Forms, Cards, etc.
│ ├── pages/About.jsx, CourseDetails.jsx,Dashboard.jsx,InstrCourseDetails.jsx ,InstructorDashboard.jsx, InstructorProfile.jsx, LandingPage.jsx, Login.jsx, MyCourses.jsx, Register.jsx
│──src
│ ├── App.jsx 
│ └── main.jsx 
| └── index.css
| └──
├── screenshots
└── README.md

###  Clone the repo

git clone https://github.com/Chenzie2/Coursify-frontend
1. cd Coursify-frontend
2. Install dependencies

npm install
3. Start the development server

npm run dev
Ensure your Flask backend is running on http://127.0.0.1:5555
