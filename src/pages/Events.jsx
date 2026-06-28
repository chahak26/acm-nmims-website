import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import EventCard from '../components/EventCard'
import events from '../data/events.json'

const filters = ['All', 'Workshop', 'Hackathon', 'Talk', 'Webinar']

export default function Events() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? events : events.filter(e => e.type === active)

  return (
    <div>
      <PageHeader title="Events Archive" subtitle="Workshops, hackathons, talks, and webinars from the past two academic years." />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === f
                  ? 'gradient-btn text-white'
                  : 'glass text-slate-400 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <p className="text-slate-500 text-sm mb-6">{filtered.length} event{filtered.length !== 1 ? 's' : ''} found</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((e) => <EventCard key={e.id} event={e} />)}
        </div>
      </div>
    </div>
  )
}
