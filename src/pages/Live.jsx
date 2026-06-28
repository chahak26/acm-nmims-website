import { useState, useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import CountdownTimer from '../components/CountdownTimer'

export default function Live() {
  const [dismissed, setDismissed] = useState(false)
  const [attendance, setAttendance] = useState(142)
  const [registered, setRegistered] = useState(187)

  useEffect(() => {
    const id = setInterval(() => {
      setAttendance(prev => prev + Math.floor(Math.random() * 3))
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const progress = Math.round((registered / 250) * 100)

  return (
    <div>
      <PageHeader title="Live Event Tracking" subtitle="Real-time updates, countdowns, and registration status." />

      {!dismissed && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="glass rounded-xl p-4 flex items-center justify-between border border-cyan/20">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <p className="text-sm text-white">
                <span className="font-semibold">Live:</span> WebSprint 2026 submissions close 30 June, 11:59 PM
              </p>
            </div>
            <button onClick={() => setDismissed(true)} className="text-slate-400 hover:text-white text-sm ml-4 shrink-0" aria-label="Dismiss">
              ✕
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-12">
        <section className="glass rounded-2xl p-8 text-center">
          <h2 className="font-display text-xl font-bold text-white mb-2">WebSprint 2026 Deadline</h2>
          <p className="text-slate-400 text-sm mb-6">Time remaining until submission closes</p>
          <CountdownTimer targetDate="2026-06-30T23:59:59" />
        </section>

        <div className="grid md:grid-cols-2 gap-6">
          <section className="glass rounded-2xl p-8">
            <h3 className="font-display text-lg font-bold text-white mb-4">Current Event Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">WebSprint 2026</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-green-500/20 text-green-400 font-medium">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">React Bootcamp Follow-up</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-yellow-500/20 text-yellow-400 font-medium">Upcoming</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">CodeStorm Hackathon 2026</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-slate-500/20 text-slate-400 font-medium">Planned</span>
              </div>
            </div>
          </section>

          <section className="glass rounded-2xl p-8">
            <h3 className="font-display text-lg font-bold text-white mb-4">Registration Tracking</h3>
            <p className="text-slate-400 text-sm mb-4">WebSprint 2026 — {registered}/250 registered</p>
            <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan to-purple transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-cyan text-sm mt-2 font-medium">{progress}% capacity</p>
          </section>
        </div>

        <section className="glass rounded-2xl p-8 text-center">
          <h3 className="font-display text-lg font-bold text-white mb-2">Live Attendance</h3>
          <p className="text-slate-400 text-sm mb-4">WebSprint Launch Session — 20 June 2026</p>
          <div className="font-display text-5xl font-bold gradient-text">{attendance}</div>
          <p className="text-slate-500 text-xs mt-2">Attendees (simulated live counter)</p>
        </section>
      </div>
    </div>
  )
}
