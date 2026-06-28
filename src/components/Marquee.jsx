export default function Marquee({ items }) {
  const doubled = [...items, ...items]

  return (
    <div className="marquee-wrap py-4 border-y border-white/5 bg-navy-light/50">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
