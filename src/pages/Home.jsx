import { Link } from 'react-router-dom'
import StatsCounter from '../components/StatsCounter'
import EventCard from '../components/EventCard'
import Reveal from '../components/Reveal'
import HeroBackground from '../components/HeroBackground'
import Marquee from '../components/Marquee'
import achievements from '../data/achievements.json'
import events from '../data/events.json'

const marqueeItems = [
  'Workshops', 'Hackathons', 'CodeStorm', 'WebSprint 2026',
  'ACM Global', 'STME Indore', 'Open Source', 'AI/ML',
  'Cloud Computing', 'Women in Computing', 'Tech Talks', 'Innovation',
]

export default function Home() {
  const upcoming = events.slice(-3).reverse()
  const featured = achievements.competitions.slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <HeroBackground />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,212,255,0.08),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-3xl">
            <p className="font-display text-cyan text-sm tracking-widest uppercase mb-4 hero-fade-in">
              WebSprint 2026 &middot; ACM NMIMS Indore
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">
              <span className="gradient-text hero-fade-in hero-fade-in-d1 inline-block">Preserving Legacy.</span>
              <br />
              <span className="text-white hero-fade-in hero-fade-in-d2 inline-block">Showcasing Innovation.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-xl leading-relaxed hero-fade-in hero-fade-in-d3">
              Official ACM Student Chapter at NMIMS University, Indore. Building the future of computing through workshops, hackathons, and community.
            </p>
            <p className="mt-2 font-display text-sm tracking-wider text-purple hero-fade-in hero-fade-in-d3">
              CODE. CREATE. CONQUER.
            </p>
            <div className="flex flex-wrap gap-4 mt-8 hero-fade-in hero-fade-in-d4">
              <Link to="/join" className="gradient-btn px-6 py-3 rounded-xl text-white font-semibold text-sm">
                Join ACM &rarr;
              </Link>
              <Link to="/events" className="glass px-6 py-3 rounded-xl text-white font-semibold text-sm hover:border-cyan/30 border border-transparent transition-all hover:-translate-y-0.5">
                Explore Events
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hero-fade-in hero-fade-in-d5 hidden sm:flex flex-col items-center gap-2">
            <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
              <div className="w-1 h-2 rounded-full bg-cyan animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      {/* Stats */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <StatsCounter stats={achievements.stats} />
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <Reveal direction="left" delay={0}>
            <div className="glass rounded-2xl p-8 card-hover h-full border-l-2 border-cyan/50">
              <h2 className="font-display text-xl font-bold text-cyan mb-3">Our Vision</h2>
              <p className="text-slate-400 leading-relaxed">
                To be the leading student computing community at NMIMS Indore, fostering innovation, technical excellence, and global ACM recognition through impactful events and projects.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right" delay={100}>
            <div className="glass rounded-2xl p-8 card-hover h-full border-l-2 border-purple/50">
              <h2 className="font-display text-xl font-bold text-purple mb-3">Our Mission</h2>
              <p className="text-slate-400 leading-relaxed">
                To empower STME students with hands-on technical skills, industry exposure, and a collaborative platform for building real-world solutions through ACM's global network.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-2xl font-bold text-white">Recent Events</h2>
              <Link to="/events" className="text-cyan text-sm hover:underline transition-all hover:translate-x-1 inline-block">View All &rarr;</Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {upcoming.map((e, i) => (
              <Reveal key={e.id} delay={i * 120}>
                <EventCard event={e} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Achievements */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-white mb-8">Featured Achievements</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((a, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="glass rounded-2xl p-6 border-l-2 border-purple card-hover h-full group">
                  <p className="text-xs text-purple mb-2 font-display tracking-wider">{a.date}</p>
                  <h3 className="font-semibold text-white mb-2 group-hover:text-purple transition-colors">{a.title}</h3>
                  <p className="text-slate-400 text-sm">{a.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Reveal direction="scale">
            <div className="cta-glow rounded-3xl p-[1px]">
              <div className="cta-glow-inner rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
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
          </Reveal>
        </div>
      </section>
    </div>
  )
}
