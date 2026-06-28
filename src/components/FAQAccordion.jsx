import { useState } from 'react'

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(null)

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="glass rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
          >
            <span className="font-medium text-white pr-4">{item.q}</span>
            <svg className={`w-5 h-5 text-cyan shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  )
}
