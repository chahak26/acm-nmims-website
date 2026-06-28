import { useEffect, useCallback } from 'react'

export default function GalleryLightbox({ image, onClose }) {
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  if (!image) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-10 right-0 text-white hover:text-cyan transition-colors text-sm" aria-label="Close">
          Close (Esc)
        </button>
        <img src={image.image} alt={image.title} className="w-full rounded-2xl object-cover max-h-[80vh]" loading="lazy" />
        <div className="mt-3 text-center">
          <h3 className="text-white font-semibold">{image.title}</h3>
          <p className="text-slate-400 text-sm">{image.category} &middot; {image.date}</p>
        </div>
      </div>
    </div>
  )
}
