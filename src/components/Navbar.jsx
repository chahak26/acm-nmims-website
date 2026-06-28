import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/team', label: 'Team' },
  { to: '/projects', label: 'Projects' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/live', label: 'Live' },
  { to: '/join', label: 'Join ACM' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 glass transition-all duration-300 ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/images/acm-logo.png"
              alt="ACM NMIMS Indore"
              className="h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <span className="font-display font-bold text-sm sm:text-base hidden sm:block">
              ACM <span className="text-cyan">NMIMS</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                  location.pathname === to
                    ? 'text-cyan bg-white/5 nav-link-active'
                    : 'text-slate-300 hover:text-white hover:bg-white/5 hover:-translate-y-0.5'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 transition-transform duration-300" style={{ transform: open ? 'rotate(90deg)' : 'none' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-white/5 pb-4 mobile-menu-enter">
          {links.map(({ to, label }, i) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm transition-all ${
                location.pathname === to ? 'text-cyan bg-white/5' : 'text-slate-300 hover:text-white hover:pl-8'
              }`}
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
