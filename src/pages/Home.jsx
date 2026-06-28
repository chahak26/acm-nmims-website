import { Link } from 'react-router-dom'
import StatsCounter from '../components/StatsCounter'
import EventCard from '../components/EventCard'
import achievements from '../data/achievements.json'
import events from '../data/events.json'

export default function Home() {
  const upcoming = events.slice(-3).reverse()
  const featured = achievements.competitions.slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,212,255,0.1),transparent_50%)]" />
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-purple/10 rounded-full blur-3xl animate-pulse-glow hidden lg:block" />
        <div className="absolute bottom-1/4 left-10 w-56 h-56 bg-cyan/10 rounded-full blur-3xl animate-pulse-glow hidden lg:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="max-w-3xl">
            <p className="font-display text-cyan text-sm tracking-widest uppercase mb-4 animate-float">
              WebSprint 2026 &middot; ACM NMIMS Indore
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">
              <span className="gradient-text">Preserving Legacy.</span>
              <br />
              <span className="text-white">Showcasing Innovation.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-xl leading-relaxed">
              Official ACM Student Chapter at NMIMS University, Indore. Building the future of computing through workshops, hackathons, and community.
            </p>
            <p className="mt-2 font-display text-sm tracking-wider text-purple">CODE. CREATE. CONQUER.</p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/join" className="gradient-btn px-6 py-3 rounded-xl text-white font-semibold text-sm">
                Join ACM &rarr;
              </Link>
              <Link to="/events" className="glass px-6 py-3 rounded-xl text-white font-semibold text-sm hover:border-cyan/30 border border-transparent transition-all">
                Explore Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <StatsCounter stats={achievements.stats} />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-8">
            <h2 className="font-display text-xl font-bold text-cyan mb-3">Our Vision</h2>
            <p className="text-slate-400 leading-relaxed">
              To be the leading student computing community at NMIMS Indore, fostering innovation, technical excellence, and global ACM recognition through impactful events and projects.
            </p>
          </div>
          <div className="glass rounded-2xl p-8">
            <h2 className="font-display text-xl font-bold text-purple mb-3">Our Mission</h2>
            <p className="text-slate-400 leading-relaxed">
              To empower STME students with hands-on technical skills, industry exposure, and a collaborative platform for building real-world solutions through ACM's global network.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl font-bold text-white">Recent Events</h2>
            <Link to="/events" className="text-cyan text-sm hover:underline">View All &rarr;</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {upcoming.map((e) => <EventCard key={e.id} event={e} />)}
          </div>
        </div>
      </section>

      {/* Featured Achievements */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-white mb-8">Featured Achievements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((a, i) => (
              <div key={i} className="glass rounded-2xl p-6 border-l-2 border-purple">
                <p className="text-xs text-purple mb-2">{a.date}</p>
                <h3 className="font-semibold text-white mb-2">{a.title}</h3>
                <p className="text-slate-400 text-sm">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple/10 to-cyan/10 pointer-events-none" />
            <div className="relative">
              <h2 className="font-display text-3xl sm:text-4xl font-bold gradient-text">Two Years of Innovation. One Digital Legacy.</h2>
              <p className="text-slate-400 mt-4 max-w-lg mx-auto">Join the ACM Student Chapter and be part of Indore's most active computing community.</p>
              <Link to="/join" className="inline-block gradient-btn px-8 py-3 rounded-xl text-white font-semibold mt-6">
                Become a Member
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
