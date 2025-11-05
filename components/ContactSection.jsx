'use client'

import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'

export default function ContactSection() {
  const { theme } = useTheme()

  const handleWhatsAppClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    const message = 'Merhaba!\n\nPortföy siteniz üzerinden ulaşıyorum. Projeleriniz ve hizmetleriniz hakkında bilgi almak istiyorum.'
    const whatsappUrl = `https://wa.me/905383645834?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="iletisim" className="section-padding transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
            İletişim
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
            Projeleriniz veya sorularınız için benimle iletişime geçin
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Info & Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
              {/* İletişim Bilgileri */}
              <div className={`p-6 rounded-2xl shadow-lg h-full ${theme === 'light' ? 'bg-white border border-gray-200' : 'bg-[#1F2937] border border-gray-700'}`}>
                <h3 className={`text-xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                  İletişim Bilgileri
                </h3>
                <div className="space-y-3">
                  {/* Email */}
                  <motion.a
                    href="mailto:kadirkeles3402@gmail.com"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className={`flex items-center gap-3 p-3 rounded-xl hover:bg-opacity-80 transition-colors group ${
                      theme === 'light' 
                        ? 'bg-primary/10 hover:bg-primary/20' 
                        : 'bg-primary/20 hover:bg-primary/30'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      theme === 'light' 
                        ? 'bg-primary/10 group-hover:bg-primary' 
                        : 'bg-primary/20 group-hover:bg-primary/40'
                    } transition-colors`}>
                      <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className={`text-xs uppercase tracking-wide font-semibold ${theme === 'light' ? 'text-gray-500' : 'text-[#9CA3AF]'}`}>
                        E-posta
                      </p>
                      <p className={`text-sm font-medium ${theme === 'light' ? 'text-gray-700' : 'text-[#E5E7EB]'}`}>
                        kadirkeles3402@gmail.com
                      </p>
                    </div>
                  </motion.a>

                  {/* Phone */}
                  <motion.a
                    href="tel:+905383645834"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className={`flex items-center gap-3 p-3 rounded-xl hover:bg-opacity-80 transition-colors group ${
                      theme === 'light' 
                        ? 'bg-primary/10 hover:bg-primary/20' 
                        : 'bg-primary/20 hover:bg-primary/30'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      theme === 'light' 
                        ? 'bg-primary/10 group-hover:bg-primary' 
                        : 'bg-primary/20 group-hover:bg-primary/40'
                    } transition-colors`}>
                      <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className={`text-xs uppercase tracking-wide font-semibold ${theme === 'light' ? 'text-gray-500' : 'text-[#9CA3AF]'}`}>
                        Telefon
                      </p>
                      <p className={`text-sm font-medium ${theme === 'light' ? 'text-gray-700' : 'text-[#E5E7EB]'}`}>
                        +90 538 364 58 34
                      </p>
                    </div>
                  </motion.a>

                  {/* WhatsApp */}
                  <motion.button
                    onClick={handleWhatsAppClick}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl hover:bg-opacity-80 transition-colors group ${
                      theme === 'light' 
                        ? 'bg-primary/10 hover:bg-primary/20' 
                        : 'bg-primary/20 hover:bg-primary/30'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      theme === 'light' 
                        ? 'bg-primary/10 group-hover:bg-primary' 
                        : 'bg-primary/20 group-hover:bg-primary/40'
                    } transition-colors`}>
                      <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div className="flex-1 text-left">
                      <p className={`text-xs uppercase tracking-wide font-semibold ${theme === 'light' ? 'text-gray-500' : 'text-[#9CA3AF]'}`}>
                        WhatsApp
                      </p>
                      <p className={`text-sm font-medium ${theme === 'light' ? 'text-gray-700' : 'text-[#E5E7EB]'}`}>
                        WhatsApp ile Mesaj Gönder
                      </p>
                    </div>
                  </motion.button>
                </div>
              </div>

              {/* Sosyal Medya */}
              <div className={`p-6 rounded-2xl shadow-lg h-full ${theme === 'light' ? 'bg-white border border-gray-200' : 'bg-[#1F2937] border border-gray-700'}`}>
                <h3 className={`text-xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                  Sosyal Medya
                </h3>
                <div className="space-y-3">
                  <motion.a
                    href="https://www.linkedin.com/in/kadir-kele%C5%9F-070b1927a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className={`flex items-center gap-3 p-3 rounded-xl hover:bg-opacity-80 transition-colors group ${
                      theme === 'light' 
                        ? 'bg-primary/10 hover:bg-primary/20' 
                        : 'bg-primary/20 hover:bg-primary/30'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      theme === 'light' 
                        ? 'bg-primary/10 group-hover:bg-primary' 
                        : 'bg-primary/20 group-hover:bg-primary/40'
                    } transition-colors`}>
                      <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                    <span className={`text-sm font-medium ${theme === 'light' ? 'text-gray-700' : 'text-[#E5E7EB]'}`}>LinkedIn</span>
                  </motion.a>

                  <motion.a
                    href="https://www.instagram.com/kadirrkeles_?igsh=MWQ0MzdibnkxZjRieg%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className={`flex items-center gap-3 p-3 rounded-xl hover:bg-opacity-80 transition-colors group ${
                      theme === 'light' 
                        ? 'bg-primary/10 hover:bg-primary/20' 
                        : 'bg-primary/20 hover:bg-primary/30'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      theme === 'light' 
                        ? 'bg-primary/10 group-hover:bg-primary' 
                        : 'bg-primary/20 group-hover:bg-primary/40'
                    } transition-colors`}>
                      <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <span className={`text-sm font-medium ${theme === 'light' ? 'text-gray-700' : 'text-[#E5E7EB]'}`}>Instagram</span>
                  </motion.a>

                  <motion.a
                    href="https://github.com/KadirKeless"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className={`flex items-center gap-3 p-3 rounded-xl hover:bg-opacity-80 transition-colors group ${
                      theme === 'light' 
                        ? 'bg-primary/10 hover:bg-primary/20' 
                        : 'bg-primary/20 hover:bg-primary/30'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      theme === 'light' 
                        ? 'bg-primary/10 group-hover:bg-primary' 
                        : 'bg-primary/20 group-hover:bg-primary/40'
                    } transition-colors`}>
                      <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <span className={`text-sm font-medium ${theme === 'light' ? 'text-gray-700' : 'text-[#E5E7EB]'}`}>GitHub</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}
