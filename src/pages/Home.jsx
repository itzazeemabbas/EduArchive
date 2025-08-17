import Hero from '../components/Hero'

const UniversityCard = ({ name, emoji, papers }) => (
  <div className="card p-6 hover:shadow-lg transition-shadow">
    <div className="text-5xl">{emoji}</div>
    <h3 className="mt-3 text-xl font-bold">{name}</h3>
    <p className="text-primary font-semibold">{papers} Papers Available</p>
    <button className="btn-primary mt-4">Browse Papers</button>
  </div>
)

const CourseCard = ({ name, emoji, subjects }) => (
  <div className="card p-6 hover:shadow-lg transition-shadow">
    <div className="text-4xl">{emoji}</div>
    <h3 className="mt-3 text-xl font-bold">{name}</h3>
    <p className="text-gray-600">{subjects} Subjects</p>
    <button className="btn-primary mt-4 w-full">View Papers</button>
  </div>
)

export default function Home() {
  const universities = [
    { name: 'MIT', emoji: '🏛️', papers: '2,450' },
    { name: 'Stanford', emoji: '🌲', papers: '1,890' },
    { name: 'Harvard', emoji: '🎓', papers: '3,200' },
    { name: 'IIT Delhi', emoji: '🏢', papers: '4,100' },
    { name: 'Oxford', emoji: '📚', papers: '2,800' },
    { name: 'Cambridge', emoji: '🏰', papers: '2,650' },
  ]

  const courses = [
    { name: 'B.Tech', emoji: '⚙️', subjects: 45 },
    { name: 'MBA', emoji: '💼', subjects: 28 },
    { name: 'MCA', emoji: '💻', subjects: 32 },
    { name: 'B.Sc', emoji: '🔬', subjects: 38 },
    { name: 'M.Tech', emoji: '🛠️', subjects: 25 },
    { name: 'PhD', emoji: '🎓', subjects: 15 },
  ]

  const papers = [
    { title: 'Data Structures & Algorithms - Final Exam 2024', university: 'MIT', downloads: '1,245', subject: 'Computer Science' },
    { title: 'Organic Chemistry - Midterm 2024', university: 'Harvard', downloads: '987', subject: 'Chemistry' },
    { title: 'Machine Learning - Assignment 2024', university: 'Stanford', downloads: '2,156', subject: 'AI/ML' },
    { title: 'Financial Management - Case Study 2024', university: 'Wharton', downloads: '756', subject: 'Business' },
    { title: 'Quantum Physics - Lab Report 2024', university: 'Caltech', downloads: '543', subject: 'Physics' },
  ]

  return (
    <>
      <Hero />

      <section className="container-max py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold">Browse by University</h2>
          <p className="text-gray-600">Find papers from top universities worldwide</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {universities.map((u) => <UniversityCard key={u.name} {...u} />)}
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-100">
        <div className="container-max py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold">Browse by Courses</h2>
            <p className="text-gray-600">Explore papers by academic programs</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => <CourseCard key={c.name} {...c} />)}
          </div>
        </div>
      </section>

      <section className="container-max py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold">Trending Papers</h2>
          <p className="text-gray-600">Most downloaded question papers this month</p>
        </div>
        <div className="space-y-4">
          {papers.map((p, i) => (
            <div key={i} className="card p-6 flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">{p.title}</h3>
                <div className="mt-1 text-sm text-gray-600 flex flex-wrap gap-4">
                  <span>🏛️ {p.university}</span>
                  <span>🏷️ {p.subject}</span>
                  <span>⬇️ {p.downloads} downloads</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex gap-2">
                <button className="btn-primary">Preview</button>
                <button className="inline-flex items-center justify-center rounded-lg bg-green-600 text-white px-5 py-3 font-semibold hover:bg-green-500 transition-shadow shadow-soft">Download</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-t border-gray-100">
        <div className="container-max py-16 text-center">
          <h2 className="text-3xl font-extrabold">Help Fellow Students</h2>
          <p className="mt-2 text-gray-600">Share your question papers and course materials to help the community grow</p>
          <div className="mt-8 card p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <div className="h-12 w-12 rounded-full bg-blue-100 mx-auto flex items-center justify-center">📤</div>
                <h3 className="mt-3 font-semibold">Easy Upload</h3>
                <p className="text-sm text-gray-600">Drag & drop your files</p>
              </div>
              <div>
                <div className="h-12 w-12 rounded-full bg-green-100 mx-auto flex items-center justify-center">✅</div>
                <h3 className="mt-3 font-semibold">Quick Review</h3>
                <p className="text-sm text-gray-600">We verify all uploads</p>
              </div>
              <div>
                <div className="h-12 w-12 rounded-full bg-purple-100 mx-auto flex items-center justify-center">🔗</div>
                <h3 className="mt-3 font-semibold">Share & Earn</h3>
                <p className="text-sm text-gray-600">Get recognition points</p>
              </div>
            </div>
            <a href="/upload" className="btn-primary mt-8 inline-block">Upload Your Papers</a>
          </div>
        </div>
      </section>
    </>
  )
}
