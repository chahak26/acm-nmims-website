import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function PageTransition({ children }) {
  const location = useLocation()
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(false)
    const id = requestAnimationFrame(() => setShow(true))
    return () => cancelAnimationFrame(id)
  }, [location.pathname])

  return (
    <div className={`page-enter ${show ? 'page-enter-active' : ''}`}>
      {children}
    </div>
  )
}
