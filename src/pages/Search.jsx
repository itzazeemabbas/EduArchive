import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

function useQuery() {
  const { search } = useLocation()
  return useMemo(() => new URLSearchParams(search), [search])
}

const PaperRow = ({ title, university, subject, downloads }) => (
  <div className="card p-4 flex items-center justify-between">
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{university} • {subject}</p>
    </div>
    <div className="text-sm text-gray-500">{downloads} downloads</div>
  </div>
)

export default function Search() {
  const q = useQuery()
  const data = [
    { title: 'Data Structures & Algorithms - Final Exam 2024', university: 'MIT', downloads: '1,245', subject: 'Computer Science' },
    { title: 'Organic Chemistry - Midterm 2024', university: 'Harvard', downloads: '987', subject: 'Chemistry' },
    { title: 'Machine Learning - Assignment 2024', university: 'Stanford', downloads: '2,156', subject: 'AI/ML' },
  ]

  const query = q.get('q') || ''
  const year = q.get('year') || ''
  const course = q.get('course') || ''
  const university = q.get('university') || ''

  const filtered = data.filter(item => {
    const matchesText = !query || item.title.toLowerCase().includes(query.toLowerCase())
    const matchesYear = !year || item.title.includes(year)
    const matchesCourse = !course || item.title.toLowerCase().includes(course.toLowerCase())
    const matchesUni = !university || item.university.toLowerCase() === university.toLowerCase()
    return matchesText && matchesYear && matchesCourse && matchesUni
  })

  return (
    <section className="container-max py-16">
      <h1 className="text-3xl font-extrabold">Search Results</h1>
      {(query || year || course || university) ? (
        <p className="mt-2 text-gray-600">Showing results for your filters.</p>
      ) : (
        <p className="mt-2 text-gray-600">Use the search bar to find papers.</p>
      )}

      <div className="mt-8 grid gap-4">
        {filtered.length ? filtered.map((row, i) => <PaperRow key={i} {...row} />) : (
          <div className="text-gray-500">No results found.</div>
        )}
      </div>
    </section>
  )
}
