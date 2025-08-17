// import { Link, NavLink, useNavigate } from 'react-router-dom'
// import { useState } from 'react'

// export default function Navbar() {
//   const [open, setOpen] = useState(false)
//   const navigate = useNavigate()
//   const [q, setQ] = useState('')

//   const doSearch = (e) => {
//     e.preventDefault()
//     navigate(`/search?q=${encodeURIComponent(q)}`)
//     setOpen(false)
//   }

//   const activeClass = 'text-primary font-semibold'
//   const baseClass = 'text-gray-600 hover:text-primary transition-colors'

//   return (
//     <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
//       <div className="container-max h-16 flex items-center justify-between">
//         <Link to="/" className="flex items-center gap-2 font-extrabold text-xl text-primary">
//           <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">EA</span>
//           <span>EduArchive</span>
//         </Link>

//         <nav className="hidden md:flex items-center gap-8">
//           <NavLink to="/" className={({isActive}) => isActive ? activeClass : baseClass}>Home</NavLink>
//           <NavLink to="/about" className={({isActive}) => isActive ? activeClass : baseClass}>About</NavLink>
//           <NavLink to="/upload" className={({isActive}) => isActive ? activeClass : baseClass}>Upload</NavLink>
//           <NavLink to="/search" className={({isActive}) => isActive ? activeClass : baseClass}>Search</NavLink>
//           <NavLink to="/contact" className={({isActive}) => isActive ? activeClass : baseClass}>Contact</NavLink>
//         </nav>

//         <form onSubmit={doSearch} className="hidden md:flex items-center gap-2">
//           <input
//             value={q}
//             onChange={e => setQ(e.target.value)}
//             placeholder="Quick search..."
//             className="h-10 w-56 rounded-lg border border-gray-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
//           />
//           <button className="btn-primary h-10 py-0">Search</button>
//         </form>

//         <button onClick={() => setOpen(v => !v)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <path d="M3 6h18M3 12h18M3 18h18" />
//           </svg>
//         </button>
//       </div>

//       {open && (
//         <div className="md:hidden border-t border-gray-100 bg-white">
//           <div className="container-max py-3 flex flex-col gap-2">
//             <form onSubmit={doSearch} className="flex items-center gap-2">
//               <input
//                 value={q}
//                 onChange={e => setQ(e.target.value)}
//                 placeholder="Quick search..."
//                 className="h-10 flex-1 rounded-lg border border-gray-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
//               />
//               <button className="btn-primary h-10 py-0">Search</button>
//             </form>
//             <div className="grid grid-cols-2 gap-2 text-sm">
//               <NavLink to="/" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-gray-100">Home</NavLink>
//               <NavLink to="/about" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-gray-100">About</NavLink>
//               <NavLink to="/upload" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-gray-100">Upload</NavLink>
//               <NavLink to="/search" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-gray-100">Search</NavLink>
//               <NavLink to="/contact" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-gray-100">Contact</NavLink>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   )
// }



import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, Moon } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const doSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(q)}`);
    setOpen(false);
  };

  const activeClass = "text-blue-600 font-semibold";
  const baseClass = "text-gray-700 hover:text-blue-600 transition-colors";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto h-16 flex items-center justify-between px-6">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="EduArchive Logo" className="h-10 w-auto" />
          <span className="font-bold text-2xl text-gray-800">EduArchive</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : baseClass)}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? activeClass : baseClass)}>About</NavLink>
          <NavLink to="/courses" className={({ isActive }) => (isActive ? activeClass : baseClass)}>Courses</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? activeClass : baseClass)}>Contact</NavLink>
        </nav>

        {/* Actions (Search + Dark Mode + Login Button) */}
        <div className="hidden md:flex items-center gap-4">
          <form onSubmit={doSearch} className="flex items-center gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Quick search..."
              className="h-10 w-40 rounded-lg border border-gray-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
          </form>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Moon className="w-5 h-5 text-gray-700" />
          </button>
          <Link
            to="/login"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="container mx-auto py-3 flex flex-col gap-2 px-6">
            <form onSubmit={doSearch} className="flex items-center gap-2">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Quick search..."
                className="h-10 flex-1 rounded-lg border border-gray-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="btn-primary h-10 py-0">Search</button>
            </form>
            <NavLink to="/" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-gray-100">Home</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-gray-100">About</NavLink>
            <NavLink to="/courses" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-gray-100">Courses</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-gray-100">Contact</NavLink>
            <Link to="/login" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg bg-blue-600 text-white text-center hover:bg-blue-700">Login</Link>
          </div>
        </div>
      )}
    </header>
  );
}
