import { useEffect, useState, useRef } from 'react'

function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return { count, ref }
}

function StatItem({ value, label, suffix = '+' }) {
  const { count, ref } = useCountUp(value)
  return (
    <div ref={ref} className="glass rounded-2xl p-6 text-center glow-cyan">
      <div className="font-display text-3xl sm:text-4xl font-bold gradient-text animate-count">
        {count}{suffix}
      </div>
      <div className="text-slate-400 text-sm mt-2">{label}</div>
    </div>
  )
}

export default function StatsCounter({ stats }) {
  const items = [
    { value: stats.eventsOrganized, label: 'Events Organized' },
    { value: stats.membersActive, label: 'Active Members' },
    { value: stats.projectsCompleted, label: 'Projects Completed' },
    { value: stats.awardsWon, label: 'Awards Won' },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <StatItem key={item.label} {...item} />
      ))}
    </div>
  )
}
