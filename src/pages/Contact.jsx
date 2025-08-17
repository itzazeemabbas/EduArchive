import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="container-max py-16">
      <h1 className="text-4xl font-extrabold">Contact Us</h1>
      <p className="mt-2 text-gray-600">Have a question or suggestion? We'd love to hear from you.</p>

      <form onSubmit={submit} className="mt-8 card p-6 max-w-xl">
        <label className="block text-sm font-medium">Name</label>
        <input className="mt-1 w-full h-11 rounded-lg border border-gray-200 px-3" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} required />

        <label className="block text-sm font-medium mt-4">Email</label>
        <input type="email" className="mt-1 w-full h-11 rounded-lg border border-gray-200 px-3" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} required />

        <label className="block text-sm font-medium mt-4">Message</label>
        <textarea className="mt-1 w-full min-h-[120px] rounded-lg border border-gray-200 px-3 py-2" value={form.message} onChange={e=>setForm({...form, message: e.target.value})} required />

        <button className="btn-primary mt-5" type="submit">Send Message</button>

        {sent && <p className="mt-4 text-green-600">Thanks! We'll get back to you soon.</p>}
      </form>
    </section>
  )
}
