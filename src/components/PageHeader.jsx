import Reveal from './Reveal'

export default function PageHeader({ title, subtitle }) {
  return (
    <div className="relative pt-24 pb-12 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="max-w-7xl mx-auto relative">
        <Reveal direction="up">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal direction="up" delay={150}>
            <p className="mt-3 text-slate-400 text-lg max-w-2xl">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </div>
  )
}
