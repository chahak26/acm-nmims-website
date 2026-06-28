import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import GalleryLightbox from '../components/GalleryLightbox'
import gallery from '../data/gallery.json'

const categories = ['All', ...new Set(gallery.map(g => g.category))]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const filtered = active === 'All' ? gallery : gallery.filter(g => g.category === active)

  return (
    <div>
      <PageHeader title="Gallery" subtitle="Event photos, team moments, and highlights from our chapter activities." />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === c ? 'gradient-btn text-white' : 'glass text-slate-400 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item) => (
            <button
              key={item.id}
              onClick={() => setLightbox(item)}
              className="block w-full break-inside-avoid glass rounded-2xl overflow-hidden group cursor-pointer text-left"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="font-medium text-white text-sm">{item.title}</h3>
                <p className="text-slate-500 text-xs mt-1">{item.category} · {item.date}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 glass rounded-2xl p-8 text-center">
          <h3 className="font-display text-lg font-bold text-white mb-2">Video Highlights</h3>
          <p className="text-slate-400 text-sm mb-4">Event recap videos and chapter highlights coming soon.</p>
          <div className="aspect-video max-w-2xl mx-auto rounded-xl bg-navy-card flex items-center justify-center">
            <span className="text-slate-500 text-sm">Video embed placeholder</span>
          </div>
        </div>
      </div>

      <GalleryLightbox image={lightbox} onClose={() => setLightbox(null)} />
    </div>
  )
}
