// // src/pages/Courses.jsx
// import React from "react";

// const courses = [
//   {
//     id: 1,
//     title: "Web Development",
//     description: "Learn HTML, CSS, JavaScript, React and build modern websites.",
//     emoji: "💻",
//   },
//   {
//     id: 2,
//     title: "Data Science",
//     description: "Explore Python, Machine Learning, and Data Visualization.",
//     emoji: "📊",
//   },
//   {
//     id: 3,
//     title: "Cyber Security",
//     description: "Master ethical hacking, network security and forensics.",
//     emoji: "🔒",
//   },
//   {
//     id: 4,
//     title: "AI & Machine Learning",
//     description: "Understand AI models, deep learning and neural networks.",
//     emoji: "🤖",
//   },
// ];

// const Courses = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-6 py-12">
//       <h1 className="text-4xl font-bold text-center mb-12">Our Courses</h1>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {courses.map((course) => (
//           <div
//             key={course.id}
//             className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300"
//           >
//             <div className="text-5xl mb-4">{course.emoji}</div>
//             <h2 className="text-2xl font-semibold">{course.title}</h2>
//             <p className="text-gray-600 mt-2">{course.description}</p>
//             <button className="btn-primary mt-4 w-full">View Details</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Courses;


// src/pages/Courses.jsx
import React, { useState } from "react";

const allCourses = [
  {
    id: 1,
    title: "Web Development",
    description: "Learn HTML, CSS, JavaScript, React and build modern websites.",
    emoji: "💻",
    category: "Development",
    university: "Harvard",
    year: "2023",
  },
  {
    id: 2,
    title: "Data Science",
    description: "Explore Python, Machine Learning, and Data Visualization.",
    emoji: "📊",
    category: "Data",
    university: "MIT",
    year: "2024",
  },
  {
    id: 3,
    title: "Cyber Security",
    description: "Master ethical hacking, network security and forensics.",
    emoji: "🔒",
    category: "Security",
    university: "Stanford",
    year: "2022",
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    description: "Understand AI models, deep learning and neural networks.",
    emoji: "🤖",
    category: "AI",
    university: "Harvard",
    year: "2024",
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "Build Android and iOS apps with Flutter and React Native.",
    emoji: "📱",
    category: "Development",
    university: "Oxford",
    year: "2023",
  },
];

const Courses = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [university, setUniversity] = useState("All");
  const [year, setYear] = useState("All");

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || course.category === category;
    const matchesUniversity = university === "All" || course.university === university;
    const matchesYear = year === "All" || course.year === year;

    return matchesSearch && matchesCategory && matchesUniversity && matchesYear;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Courses</h1>

      {/* Shiny Filter Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {/* Search */}
        <div className="bg-white shadow-lg hover:shadow-xl rounded-2xl p-4 transition">
          <label className="block text-sm font-semibold text-gray-600 mb-2">🔍 Search</label>
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-12 px-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category */}
        <div className="bg-white shadow-lg hover:shadow-xl rounded-2xl p-4 transition">
          <label className="block text-sm font-semibold text-gray-600 mb-2">📂 Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full h-12 px-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Categories</option>
            <option value="Development">Development</option>
            <option value="Data">Data</option>
            <option value="Security">Security</option>
            <option value="AI">AI</option>
          </select>
        </div>

        {/* University */}
        <div className="bg-white shadow-lg hover:shadow-xl rounded-2xl p-4 transition">
          <label className="block text-sm font-semibold text-gray-600 mb-2">🎓 University</label>
          <select
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            className="w-full h-12 px-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Universities</option>
            <option value="Harvard">Harvard</option>
            <option value="MIT">MIT</option>
            <option value="Stanford">Stanford</option>
            <option value="Oxford">Oxford</option>
          </select>
        </div>

        {/* Year */}
        <div className="bg-white shadow-lg hover:shadow-xl rounded-2xl p-4 transition">
          <label className="block text-sm font-semibold text-gray-600 mb-2">📅 Year</label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full h-12 px-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Years</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-4">{course.emoji}</div>
              <h2 className="text-2xl font-semibold">{course.title}</h2>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                🎓 {course.university} | 📅 {course.year}
              </p>
              <button className="btn-primary mt-4 w-full">View Details</button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">No courses found.</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
