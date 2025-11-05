'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTheme } from './ThemeProvider'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    let ticking = false

    const toggleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Sayfa yukarıdan 300px aşağı kaydırıldığında butonu göster
          if (window.pageYOffset > 300) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    toggleVisibility() // Initial check

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ 
            duration: 0.2,
            ease: [0.4, 0, 0.2, 1]
          }}
          onClick={scrollToTop}
          className={`fixed bottom-16 right-6 z-50 w-10 h-10 md:w-11 md:h-11 rounded-full hidden md:flex items-center justify-center shadow-lg transition-all duration-300 ${
            theme === 'light'
              ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-xl'
              : 'bg-primary text-white hover:bg-primary/90 hover:shadow-xl'
          }`}
          aria-label="Yukarı git"
        >
          <svg 
            className="w-5 h-5 md:w-5 md:h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

