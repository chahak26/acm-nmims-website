import { useState, useEffect } from 'react'

export default function CountdownTimer({ targetDate }) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const tick = () => {
      const diff = new Date(targetDate) - new Date()
      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ]

  return (
    <div className="flex gap-3 sm:gap-4 justify-center">
      {units.map(({ label, value }) => (
        <div key={label} className="glass rounded-xl p-4 sm:p-6 text-center min-w-[70px] sm:min-w-[90px] glow-cyan">
          <div className="font-display text-2xl sm:text-4xl font-bold gradient-text">{String(value).padStart(2, '0')}</div>
          <div className="text-slate-400 text-xs mt-1">{label}</div>
        </div>
      ))}
    </div>
  )
}
