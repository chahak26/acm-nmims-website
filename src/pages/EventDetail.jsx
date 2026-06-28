import { useParams, Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import events from '../data/events.json'

export default function EventDetail() {
  const { id } = useParams()
  const event = events.find(e => e.id === Number(id))

  if (!event) {
    return (
      <div className="pt-24 text-center pb-20">
        <h1 className="text-2xl text-white">Event not found</h1>
        <Link to="/events" className="text-cyan mt-4 inline-block hover:underline">Back to Events</Link>
      </div>
    )
  }

  return (
    <div>
      <PageHeader title={event.title} subtitle={`${event.type} · ${new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}`} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="glass rounded-2xl p-8 space-y-6">
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="glass px-3 py-1 rounded-full text-cyan">{event.type}</span>
            <span className="text-slate-400">Speaker: {event.speaker}</span>
            <span className="text-slate-400">{event.registrations} registrations</span>
            {event.certificate && <span className="text-green-400">Certificate provided</span>}
          </div>

          <p className="text-slate-300 leading-relaxed">{event.description}</p>

          <div>
            <h3 className="font-semibold text-white mb-3">Resources</h3>
            <div className="flex flex-wrap gap-2">
              {event.resources.map((r) => (
                <span key={r} className="glass px-3 py-1.5 rounded-lg text-sm text-slate-300">{r}</span>
              ))}
            </div>
          </div>

          <Link to="/events" className="inline-block text-cyan text-sm hover:underline">&larr; Back to Events</Link>
        </div>
      </div>
    </div>
  )
}
