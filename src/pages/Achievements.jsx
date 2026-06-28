import PageHeader from '../components/PageHeader'
import StatsCounter from '../components/StatsCounter'
import achievements from '../data/achievements.json'

export default function Achievements() {
  return (
    <div>
      <PageHeader title="Achievements & Awards" subtitle="Competition wins, hackathon results, and chapter milestones." />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        <StatsCounter stats={achievements.stats} />

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-6">Competition Wins</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.competitions.map((c, i) => (
              <div key={i} className="glass rounded-2xl p-6 border-t-2 border-cyan">
                <span className="text-xs text-cyan">{c.date}</span>
                <h3 className="font-semibold text-white mt-2 mb-2">{c.title}</h3>
                <p className="text-slate-400 text-sm">{c.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-6">ACM Recognitions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.recognitions.map((r, i) => (
              <div key={i} className="glass rounded-2xl p-6">
                <span className="text-xs text-purple">{r.date}</span>
                <h3 className="font-semibold text-white mt-2 mb-2">{r.title}</h3>
                <p className="text-slate-400 text-sm">{r.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-6">Chapter Milestones</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-purple to-pink hidden sm:block" />
            <div className="space-y-4">
              {achievements.milestones.map((m, i) => (
                <div key={i} className="flex gap-6 items-center sm:pl-10 relative">
                  <div className="hidden sm:block absolute left-2.5 w-3 h-3 rounded-full bg-purple border-2 border-navy" />
                  <div className="glass rounded-xl p-4 flex-1 flex items-center gap-4">
                    <span className="font-display font-bold text-cyan text-sm shrink-0">{m.year}</span>
                    <p className="text-slate-300 text-sm">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
