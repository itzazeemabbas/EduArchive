import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate()
  const [filters, setFilters] = useState({ university: '', course: '', year: '' })
  const apply = () => {
    const params = new URLSearchParams(filters)
    navigate(`/search?${params.toString()}`)
  }

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white border-b border-gray-100">
      <div className="container-max py-24 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
          Find Any Question Paper in <span className="text-primary">Seconds</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          University papers, entrance exams, courses — all in one place.
        </p>

        <div className="mt-10 card p-5 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <select className="h-12 rounded-lg border border-gray-200 px-3"
              value={filters.university}
              onChange={e => setFilters({...filters, university: e.target.value})}>
              <option value="">Select University</option>
              <option value="MIT">MIT</option>
              <option value="Stanford">Stanford</option>
              <option value="Harvard">Harvard</option>
              <option value="IIT Delhi">IIT Delhi</option>
            </select>
            <select className="h-12 rounded-lg border border-gray-200 px-3"
              value={filters.course}
              onChange={e => setFilters({...filters, course: e.target.value})}>
              <option value="">Select Course</option>
              <option value="B.Tech">B.Tech</option>
              <option value="MBA">MBA</option>
              <option value="MCA">MCA</option>
              <option value="B.Sc">B.Sc</option>
            </select>
            <select className="h-12 rounded-lg border border-gray-200 px-3"
              value={filters.year}
              onChange={e => setFilters({...filters, year: e.target.value})}>
              <option value="">Select Year</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
            <button onClick={apply} className="btn-primary h-12">Search</button>
          </div>
          <input
            className="mt-4 h-12 w-full rounded-lg border border-gray-200 px-4"
            placeholder="Or search for specific papers, subjects, or topics..."
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setFilters(prev => prev) // no-op to satisfy eslint; navigate on Enter
                navigate(`/search?q=${encodeURIComponent(e.currentTarget.value)}`)
              }
            }}
          />
        </div>
      </div>
    </section>
  )
}




