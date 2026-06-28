import { useState } from 'react'
import PageHeader from '../components/PageHeader'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('All fields are required.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <div>
      <PageHeader title="Contact Us" subtitle="Reach out to the ACM NMIMS Indore Student Chapter." />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-2">Location</h3>
              <p className="text-slate-400 text-sm">NMIMS University, Indore<br />School of Technology Management & Engineering (STME)</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <p className="text-cyan text-sm">acm.nmims.indore@gmail.com</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-2">Social Media</h3>
              <div className="flex gap-4 mt-2">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan text-sm transition-colors">LinkedIn</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan text-sm transition-colors">Instagram</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan text-sm transition-colors">GitHub</a>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="glass rounded-2xl p-8 text-center border border-green-500/20">
                <div className="text-4xl mb-3">✓</div>
                <h3 className="font-semibold text-white text-lg">Message Sent!</h3>
                <p className="text-slate-400 text-sm mt-2">We'll respond within 2-3 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-4">
                <h3 className="font-display text-lg font-bold text-white mb-2">Send a Message</h3>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan/50" />
                <input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan/50" />
                <textarea placeholder="Your Message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan/50 resize-none" />
                <button type="submit" className="gradient-btn w-full py-3 rounded-xl text-white font-semibold text-sm">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
