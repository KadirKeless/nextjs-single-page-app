'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTheme } from './ThemeProvider'

export default function HeroSection() {
  const { theme } = useTheme()
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const roles = [
    'Yönetim Bilişim Sistemleri Öğrencisi',
    'Yazılım Destek Asistanı',
    'Freelancer Web Geliştirici',
  ]
  
  useEffect(() => {
    const currentRole = roles[currentIndex]
    let timeout
    
    if (!isDeleting && displayedText.length < currentRole.length) {
      // Yazma işlemi
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1))
      }, 100)
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      // Yazma tamamlandı, bekleme
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
    } else if (isDeleting && displayedText.length > 0) {
      // Silme işlemi
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1))
      }, 50)
    } else if (isDeleting && displayedText.length === 0) {
      // Silme tamamlandı, başa dön
      setIsDeleting(false)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }
    
    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentIndex, roles])

  const handleOpenContactModal = () => {
    setIsContactModalOpen(true)
  }

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false)
  }

  const handleWhatsAppClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    const message = 'Merhaba!\n\nPortföy siteniz üzerinden ulaşıyorum. Projeleriniz ve hizmetleriniz hakkında bilgi almak istiyorum.'
    const whatsappUrl = `https://wa.me/905383645834?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <section id="anasayfa" className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h1
              variants={itemVariants}
              className={`text-5xl md:text-7xl font-bold leading-tight ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}
            >
              <span className="text-primary">Merhaba,</span>
              <br />
              Ben Kadir
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className={`text-xl md:text-2xl leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}
            >
              <span>{displayedText}</span>
              <span className="animate-pulse">|</span>
            </motion.p>
            <motion.p
              variants={itemVariants}
              className={`text-lg leading-relaxed ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}
            >
              Modern web teknolojileri ile kullanıcı odaklı çözümler geliştiriyorum.
            </motion.p>
            <motion.div variants={itemVariants}>
              <motion.button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  handleOpenContactModal()
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                type="button"
                className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary/90"
              >
                İletişim
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative w-full aspect-video max-w-2xl mx-auto"
          >
            <div className="relative w-full h-full">
              <img
                src="/videos/div-unscreen.gif"
                alt="Kadir Keleş Animasyon"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  handleCloseContactModal()
                }
              }}
              className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50 overflow-y-auto p-2 sm:p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className={`p-4 sm:p-6 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto mx-auto ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-[#141927] text-white'}`}
            >
              {/* Modal Header */}
              <div className="mb-6 relative">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleCloseContactModal()
                  }}
                  className={`absolute -top-2 -right-2 z-50 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg ${theme === 'light' ? 'bg-white text-gray-600 hover:bg-gray-100 hover:scale-110 border border-gray-200' : 'bg-[#2D3348] text-[#E5E7EB] hover:bg-[#3B4257] hover:scale-110 border border-[#3B4257]'}`}
                  aria-label="Kapat"
                  type="button"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <h3 
                  className={`text-2xl font-bold mb-2 font-poppins pr-10 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}
                >
                  İletişim
                </h3>
                <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-[#9CA3AF]'}`}>
                  Benimle iletişime geçin
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {/* Email */}
                <div className={`p-4 rounded-xl ${theme === 'light' ? 'bg-gray-50' : 'bg-[#141927]'}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${theme === 'light' ? 'bg-primary/10' : 'bg-primary/20'}`}>
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className={`text-xs uppercase tracking-wide font-semibold ${theme === 'light' ? 'text-gray-500' : 'text-[#9CA3AF]'}`}>
                        E-posta
                      </p>
                      <a 
                        href="mailto:kadirkeles3402@gmail.com" 
                        className={`text-sm font-medium hover:text-primary transition-colors ${theme === 'light' ? 'text-gray-700' : 'text-[#E5E7EB]'}`}
                      >
                        kadirkeles3402@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className={`p-4 rounded-xl ${theme === 'light' ? 'bg-gray-50' : 'bg-[#141927]'}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${theme === 'light' ? 'bg-primary/10' : 'bg-primary/20'}`}>
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className={`text-xs uppercase tracking-wide font-semibold ${theme === 'light' ? 'text-gray-500' : 'text-[#9CA3AF]'}`}>
                        Telefon
                      </p>
                      <a 
                        href="tel:+905383645834" 
                        className={`text-sm font-medium hover:text-primary transition-colors ${theme === 'light' ? 'text-gray-700' : 'text-[#E5E7EB]'}`}
                      >
                        +90 538 364 58 34
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className={`p-4 rounded-xl ${theme === 'light' ? 'bg-gray-50' : 'bg-[#141927]'}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${theme === 'light' ? 'bg-primary/10' : 'bg-primary/20'}`}>
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs uppercase tracking-wide font-semibold mb-1.5 ${theme === 'light' ? 'text-gray-500' : 'text-[#9CA3AF]'}`}>
                        WhatsApp
                      </p>
                      <motion.button
                        onClick={handleWhatsAppClick}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        className="inline-flex px-2 py-1 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 items-center justify-center gap-1 text-[10px] whitespace-nowrap"
                      >
                        <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        <span>Mesaj gönder</span>
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className={`p-4 rounded-xl ${theme === 'light' ? 'bg-gray-50' : 'bg-[#141927]'}`}>
                  <h4 className={`text-lg font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    Sosyal Medya
                  </h4>
                  <div className="space-y-3">
                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/kadir-kele%C5%9F-070b1927a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-lg hover:bg-opacity-80 transition-colors group ${theme === 'light' ? 'bg-primary/10 hover:bg-primary/20' : 'bg-primary/20 hover:bg-primary/30'}`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${theme === 'light' ? 'bg-primary/10 group-hover:bg-primary' : 'bg-primary/20 group-hover:bg-primary/40'} transition-colors`}>
                        <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </div>
                      <span className={`font-medium ${theme === 'light' ? 'text-gray-700' : 'text-[#E5E7EB]'}`}>LinkedIn</span>
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/kadirrkeles_?igsh=MWQ0MzdibnkxZjRieg%3D%3D&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-lg hover:bg-opacity-80 transition-colors group ${theme === 'light' ? 'bg-primary/10 hover:bg-primary/20' : 'bg-primary/20 hover:bg-primary/30'}`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${theme === 'light' ? 'bg-primary/10 group-hover:bg-primary' : 'bg-primary/20 group-hover:bg-primary/40'} transition-colors`}>
                        <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <span className={`font-medium ${theme === 'light' ? 'text-gray-700' : 'text-[#E5E7EB]'}`}>Instagram</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Close Button at Bottom */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <motion.button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleCloseContactModal()
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className={`w-full px-4 py-2.5 rounded-lg font-medium transition-all duration-300 ${theme === 'light' ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-[#2D3348] text-[#E5E7EB] hover:bg-[#3B4257]'}`}
                >
                  Kapat
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
