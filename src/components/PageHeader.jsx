export default function PageHeader({ title, subtitle }) {
  return (
    <div className="relative pt-24 pb-12 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">{title}</h1>
        {subtitle && <p className="mt-3 text-slate-400 text-lg max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  )
}
