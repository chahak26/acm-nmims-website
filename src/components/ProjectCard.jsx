export default function ProjectCard({ project }) {
  const catColors = {
    IoT: 'text-cyan',
    'AI/ML': 'text-purple',
    Web: 'text-pink',
    'Open Source': 'text-green-400',
    Research: 'text-yellow-400',
  }

  return (
    <div className="glass rounded-2xl p-6 hover:border-purple/30 border border-transparent transition-all group">
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs font-medium ${catColors[project.category] || 'text-slate-400'}`}>{project.category}</span>
        <span className="text-xs text-slate-500">{project.year}</span>
      </div>
      <h3 className="font-semibold text-white group-hover:text-purple transition-colors mb-2">{project.title}</h3>
      <p className="text-slate-400 text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/5 text-slate-300">{t}</span>
        ))}
      </div>
      <div className="flex gap-3">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm text-cyan hover:underline">GitHub</a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm text-purple hover:underline">Live Demo</a>
        )}
      </div>
    </div>
  )
}
