import { Link } from 'react-router-dom'

export default function EventCard({ event }) {
  const typeColors = {
    Workshop: 'bg-cyan/20 text-cyan',
    Hackathon: 'bg-purple/20 text-purple',
    Talk: 'bg-pink/20 text-pink',
    Webinar: 'bg-green-500/20 text-green-400',
  }

  return (
    <Link to={`/events/${event.id}`} className="glass rounded-2xl p-6 hover:border-cyan/30 border border-transparent transition-all group block">
      <div className="flex items-start justify-between mb-3">
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${typeColors[event.type] || 'bg-white/10 text-slate-300'}`}>
          {event.type}
        </span>
        <span className="text-xs text-slate-500">{new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
      </div>
      <h3 className="font-semibold text-white group-hover:text-cyan transition-colors mb-2">{event.title}</h3>
      <p className="text-slate-400 text-sm line-clamp-2 mb-3">{event.description}</p>
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>{event.speaker}</span>
        <span>{event.registrations} registered</span>
      </div>
    </Link>
  )
}
