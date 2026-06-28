import PageHeader from '../components/PageHeader'
import blog from '../data/blog.json'

export default function Blog() {
  return (
    <div>
      <PageHeader title="Blog & Newsletters" subtitle="Chapter announcements, event recaps, and monthly newsletters." />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {blog.map((post) => (
            <article key={post.id} className="glass rounded-2xl p-6 hover:border-purple/20 border border-transparent transition-all group">
              <span className="text-xs px-2.5 py-1 rounded-full bg-purple/20 text-purple font-medium">{post.category}</span>
              <h3 className="font-semibold text-white mt-3 group-hover:text-cyan transition-colors">{post.title}</h3>
              <p className="text-slate-400 text-sm mt-2 line-clamp-3">{post.excerpt}</p>
              <p className="text-slate-500 text-xs mt-4">
                {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
