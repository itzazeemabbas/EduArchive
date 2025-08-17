import { useState } from 'react'

export default function Upload() {
  const [form, setForm] = useState({ title: '', subject: '', year: '2024', file: null })
  const [ok, setOk] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setOk(true)
  }

  return (
    <section className="container-max py-16">
      <h1 className="text-4xl font-extrabold">Upload Papers</h1>
      <p className="mt-2 text-gray-600">Share your question papers and resources with the community.</p>

      <form onSubmit={submit} className="mt-8 card p-6 max-w-xl">
        <label className="block text-sm font-medium">Title</label>
        <input className="mt-1 w-full h-11 rounded-lg border border-gray-200 px-3" value={form.title} onChange={e=>setForm({...form, title: e.target.value})} required />

        <label className="block text-sm font-medium mt-4">Subject</label>
        <input className="mt-1 w-full h-11 rounded-lg border border-gray-200 px-3" value={form.subject} onChange={e=>setForm({...form, subject: e.target.value})} required />

        <label className="block text-sm font-medium mt-4">Year</label>
        <select className="mt-1 w-full h-11 rounded-lg border border-gray-200 px-3" value={form.year} onChange={e=>setForm({...form, year: e.target.value})}>
          <option>2024</option><option>2023</option><option>2022</option><option>2021</option>
        </select>

        <label className="block text-sm font-medium mt-4">File</label>
        <input type="file" className="mt-1 w-full" onChange={e=>setForm({...form, file: e.target.files?.[0]})} />

        <button className="btn-primary mt-5" type="submit">Submit</button>
        {ok && <p className="mt-4 text-green-600">Thanks for contributing! Your upload will be reviewed.</p>}
      </form>
    </section>
  )
}
