import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import FAQAccordion from '../components/FAQAccordion'

const benefits = [
  { title: 'ACM Digital Library', desc: 'Access to millions of research papers, journals, and conference proceedings.' },
  { title: 'Global Network', desc: 'Connect with 100,000+ ACM members and professionals worldwide.' },
  { title: 'Workshops & Events', desc: 'Free or discounted access to chapter workshops, hackathons, and tech talks.' },
  { title: 'Career Support', desc: 'Resume reviews, mock interviews, and industry mentorship from alumni.' },
  { title: 'Project Opportunities', desc: 'Collaborate on real-world projects with the technical team.' },
  { title: 'Leadership Roles', desc: 'Opportunities to lead committees, events, and chapter initiatives.' },
]

const faqs = [
  { q: 'Who can join ACM NMIMS Indore?', a: 'Any student enrolled in STME at NMIMS Indore can join. No prior technical experience is required.' },
  { q: 'Is there a membership fee?', a: 'Chapter membership is free. ACM student membership (global) has a nominal fee with guidance available from the chapter.' },
  { q: 'How do I apply for a committee role?', a: 'Fill out the volunteer application form on this page. Selections are made at the start of each academic year.' },
  { q: 'What is the Web-Master role?', a: 'The Web-Master maintains the chapter website, updates content, and manages digital infrastructure. Selected based on WebSprint performance.' },
  { q: 'Can I participate in events without joining?', a: 'Most events are open to all STME students. Membership gives priority registration and leadership opportunities.' },
  { q: 'How often are workshops held?', a: 'We organize 2-3 workshops per month covering web development, AI/ML, cloud, cybersecurity, and more.' },
  { q: 'Do I get certificates for events?', a: 'Yes, most workshops and all hackathons provide participation or achievement certificates.' },
  { q: 'How can I contribute to open-source through ACM?', a: 'Our Open Source Contribution Drive and technical team guide members through finding repos and making PRs.' },
]

export default function JoinACM() {
  const [form, setForm] = useState({ name: '', email: '', branch: '', year: '', role: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.branch || !form.year) {
      setError('Please fill in all required fields.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <div>
      <PageHeader title="Membership & Recruitment" subtitle="Join the ACM Student Chapter and unlock opportunities." />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-6">ACM Benefits</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="glass rounded-2xl p-6">
                <h3 className="font-semibold text-cyan mb-2">{b.title}</h3>
                <p className="text-slate-400 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass rounded-2xl p-4 border border-purple/20">
          <div className="p-4">
            <h2 className="font-display text-lg font-bold text-white mb-2">Recruitment Notice</h2>
            <p className="text-slate-400 text-sm">
              The official Web-Master position for 2026–27 will be determined by WebSprint 2026 performance. Submit your project before 30 June, 11:59 PM.
            </p>
            <a href="https://forms.gle/DoeMttV7M61Lbo2PA" target="_blank" rel="noopener noreferrer" className="inline-block text-purple text-sm mt-3 hover:underline">
              WebSprint Submission Form &rarr;
            </a>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-6">Volunteer Application</h2>
            {submitted ? (
              <div className="glass rounded-2xl p-8 text-center border border-green-500/20">
                <div className="text-4xl mb-3">✓</div>
                <h3 className="font-semibold text-white text-lg">Application Submitted!</h3>
                <p className="text-slate-400 text-sm mt-2">We'll get back to you soon. Welcome to ACM!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-4">
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <input type="text" placeholder="Full Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan/50" />
                <input type="email" placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan/50" />
                <select value={form.branch} onChange={(e) => setForm({ ...form, branch: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan/50">
                  <option value="" className="bg-navy">Select Branch *</option>
                  <option value="CSE" className="bg-navy">B.Tech CSE</option>
                  <option value="IT" className="bg-navy">B.Tech IT</option>
                  <option value="Other" className="bg-navy">Other</option>
                </select>
                <select value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan/50">
                  <option value="" className="bg-navy">Select Year *</option>
                  <option value="1" className="bg-navy">1st Year</option>
                  <option value="2" className="bg-navy">2nd Year</option>
                  <option value="3" className="bg-navy">3rd Year</option>
                  <option value="4" className="bg-navy">4th Year</option>
                </select>
                <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan/50">
                  <option value="" className="bg-navy">Role Interest</option>
                  <option value="technical" className="bg-navy">Technical Team</option>
                  <option value="design" className="bg-navy">Design Team</option>
                  <option value="events" className="bg-navy">Event Management</option>
                  <option value="content" className="bg-navy">Content & Media</option>
                </select>
                <button type="submit" className="gradient-btn w-full py-3 rounded-xl text-white font-semibold text-sm">
                  Submit Application
                </button>
              </form>
            )}
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-6">FAQ</h2>
            <FAQAccordion items={faqs} />
          </div>
        </section>
      </div>
    </div>
  )
}
