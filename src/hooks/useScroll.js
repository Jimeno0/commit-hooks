import { useEffect, useState } from 'react'

export const useScroll = (initialValue) => {
  const [scroll, setScroll] = useState(initialValue)

  const handleScroll = (e) => {
    const height = e.target.scrollTop
    setScroll(height)
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, true)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return scroll
}
