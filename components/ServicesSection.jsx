'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useTheme } from './ThemeProvider'

const services = [
  {
    id: 'landing-page',
    title: 'LANDING PAGE (TEK SAYFA)',
    oldPrice: '₺5.000',
    newPrice: '₺2.499+',
    features: [
      'Tek Sayfa',
      'Hosting & Domain',
      'Mobil Uyumluluk',
      'Telefon & Whatsapp Entegrasyonu',
      'Google Search Console',
      'SSL Sertifikası',
      'SEO Uyumluluk',
      'Hız & Performans',
      'Harita Entegrasyonu',
    ],
  },
  {
    id: 'kurumsal',
    title: 'KURUMSAL WEB SİTESİ',
    oldPrice: '₺10.000',
    newPrice: '₺4.999+',
    features: [
      '4–6 Sayfa',
      'Profesyonel Tasarım',
      'Çoklu Dil Desteği (TR–EN)',
      'Hosting & Domain',
      'Mobil Uyumluluk',
      'Google Search Console',
      'SSL Sertifikası',
      'SEO Uyumluluk',
      'Hız & Performans',
      'Harita Entegrasyonu',
    ],
  },
  {
    id: 'profesyonel',
    title: 'PROFESYONEL WEB SİTESİ',
    oldPrice: '₺20.000',
    newPrice: '₺9.999+',
    features: [
      'Sınırsız Sayfa',
      'Yönetim Paneli (Admin)',
      'Kuruma Özel UX/UI Tasarımı',
      'Gelişmiş SEO Çözümleri',
      'Raporlama & Analytics',
      'Sürekli Bakım Desteği',
    ],
  },
]

export default function ServicesSection() {
  const { theme } = useTheme()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sector: '',
    description: '',
  })

  const handleOpenModal = (service) => {
    setSelectedPackage(service)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      sector: '',
      description: '',
    })
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleWhatsAppSend = () => {
    const message = `Merhaba! ${selectedPackage.title} paketi için teklif istiyorum.

  Bilgilerim:

• Ad Soyad: ${formData.name || 'Belirtilmedi'}
• E-posta: ${formData.email || 'Belirtilmedi'}
• Telefon: ${formData.phone || 'Belirtilmedi'}
• Sektör: ${formData.sector || 'Belirtilmedi'}
• Web Sitesi Özellikleri: ${formData.description || 'Belirtilmedi'}

  Paket: ${selectedPackage.title}

  Fiyat: ${selectedPackage.newPrice}

Detaylı görüşmek isterim.`

    const whatsappUrl = `https://wa.me/905383645834?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      <section id="hizmetler" className={`section-padding transition-colors duration-300 ${theme === 'light' ? 'bg-white' : 'bg-[#0B0F19]'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold drop-shadow-md mb-4 font-poppins uppercase tracking-tight ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Hizmet Paketleri
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${theme === 'light' ? 'text-gray-600' : 'text-[#9CA3AF]'}`}>
              İhtiyaçlarınıza uygun profesyonel web çözümleri
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className={`relative rounded-2xl p-6 border shadow-lg transition-all duration-200 ease-in-out hover:scale-[1.03] hover:-translate-y-1 overflow-hidden group flex flex-col h-full ${theme === 'light' ? 'bg-gray-50 border-gray-200' : 'bg-[#141927] border-[#2D3348]'}`}
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(123, 97, 255, 0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)'
                }}
              >
                {/* İNDİRİM Ribbon - Fixed Position */}
                <div 
                  className="absolute top-2 left-3 z-20 rounded-md px-3 py-1 text-xs font-semibold text-white uppercase shadow-lg"
                  style={{
                    backgroundColor: '#7B61FF',
                    boxShadow: '0 4px 15px rgba(123, 97, 255, 0.4)',
                  }}
                >
                  İNDİRİM!
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Title with top padding for ribbon */}
                  <div className="pt-6 flex-1 flex flex-col">
                    <h3 
                      className={`text-sm sm:text-base md:text-lg font-bold mb-6 font-poppins uppercase tracking-tight leading-tight ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}
                    >
                      {service.title}
                    </h3>
                    
                    {/* Price Highlight */}
                    <div className={`mb-6 p-4 rounded-xl ${theme === 'light' ? 'bg-gray-100' : 'bg-[#1C2233]'}`}>
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-gray-500 line-through text-base font-medium">
                          {service.oldPrice}
                        </span>
                        <span className="text-3xl font-bold bg-gradient-to-r from-[#7B61FF] to-[#3B82F6] bg-clip-text text-transparent">
                          {service.newPrice}
                        </span>
                      </div>
                      <p className={`text-xs font-medium ${theme === 'light' ? 'text-gray-600' : 'text-[#9CA3AF]'}`}>
                        Tek seferlik ödeme • KDV Dahil
                      </p>
                    </div>

                    {/* Features List */}
                    <ul className="mb-6 space-y-2 flex-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <span 
                            className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: '#7B61FF' }}
                          ></span>
                          <span className={`text-sm font-medium ${theme === 'light' ? 'text-gray-800' : 'text-[#E5E7EB]'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button - Always at bottom */}
                  <motion.button
                    onClick={() => handleOpenModal(service)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className="w-full h-12 text-base font-medium text-white rounded-xl transition-all duration-300 bg-gradient-to-r from-[#7B61FF] to-[#3B82F6] hover:opacity-90 flex-shrink-0"
                  >
                    Teklif Al
                  </motion.button>
                </div>

                {/* Subtle Glow on Hover */}
                <div
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, #7B61FF, transparent)',
                  }}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedPackage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50 overflow-y-auto p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className={`p-6 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-[#141927] text-white'}`}
            >
              {/* Modal Header with Close Button */}
              <div className="mb-6 relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleCloseModal()
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
                  {selectedPackage.title}
                </h3>
                <p className={`text-sm uppercase tracking-wide ${theme === 'light' ? 'text-gray-600' : 'text-[#9CA3AF]'}`}>
                  Formu doldurarak WhatsApp üzerinden teklif alın
                </p>
              </div>

              {/* Form */}
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {/* Ad Soyad */}
                <div>
                  <label className={`block text-xs uppercase tracking-wide font-semibold mb-2 opacity-80 ${theme === 'light' ? 'text-gray-700' : 'text-[#9CA3AF]'}`}>
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-[#7B61FF] focus:border-transparent transition-all outline-none ${theme === 'light' ? 'bg-gray-100 text-gray-900 border-gray-300' : 'bg-[#1C2233] text-white border-[#2D3348]'}`}
                    placeholder="Adınız ve soyadınız"
                  />
                </div>

                {/* E-posta */}
                <div>
                  <label className={`block text-xs uppercase tracking-wide font-semibold mb-2 opacity-80 ${theme === 'light' ? 'text-gray-700' : 'text-[#9CA3AF]'}`}>
                    E-posta
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-[#7B61FF] focus:border-transparent transition-all outline-none ${theme === 'light' ? 'bg-gray-100 text-gray-900 border-gray-300' : 'bg-[#1C2233] text-white border-[#2D3348]'}`}
                    placeholder="email@example.com"
                  />
                </div>

                {/* Telefon */}
                <div>
                  <label className={`block text-xs uppercase tracking-wide font-semibold mb-2 opacity-80 ${theme === 'light' ? 'text-gray-700' : 'text-[#9CA3AF]'}`}>
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-[#7B61FF] focus:border-transparent transition-all outline-none ${theme === 'light' ? 'bg-gray-100 text-gray-900 border-gray-300' : 'bg-[#1C2233] text-white border-[#2D3348]'}`}
                    placeholder="05XX XXX XX XX"
                  />
                </div>

                {/* Paket (Auto-filled, disabled) */}
                <div>
                  <label className={`block text-xs uppercase tracking-wide font-semibold mb-2 opacity-80 ${theme === 'light' ? 'text-gray-700' : 'text-[#9CA3AF]'}`}>
                    Hangi Paket?
                  </label>
                  <input
                    type="text"
                    value={selectedPackage.title}
                    disabled
                    className={`w-full p-3 rounded-lg border cursor-not-allowed ${theme === 'light' ? 'bg-gray-100 border-gray-300 text-gray-600' : 'bg-[#1C2233]/50 border-[#2D3348] text-[#9CA3AF]'}`}
                  />
                </div>

                {/* Sektör */}
                <div>
                  <label className={`block text-xs uppercase tracking-wide font-semibold mb-2 opacity-80 ${theme === 'light' ? 'text-gray-700' : 'text-[#9CA3AF]'}`}>
                    Web sitesi hangi sektöre hizmet edecek?
                  </label>
                  <input
                    type="text"
                    name="sector"
                    value={formData.sector}
                    onChange={handleInputChange}
                    className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-[#7B61FF] focus:border-transparent transition-all outline-none ${theme === 'light' ? 'bg-gray-100 text-gray-900 border-gray-300' : 'bg-[#1C2233] text-white border-[#2D3348]'}`}
                    placeholder="Örn: Hukuk, İnşaat, Eğitim, Danışmanlık..."
                  />
                </div>

                {/* Web Sitesi Özellikleri */}
                <div>
                  <label className={`block text-xs uppercase tracking-wide font-semibold mb-2 opacity-80 ${theme === 'light' ? 'text-gray-700' : 'text-[#9CA3AF]'}`}>
                    Web Sitesi Özellikleri
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="3"
                    className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-[#7B61FF] focus:border-transparent transition-all outline-none resize-none ${theme === 'light' ? 'bg-gray-100 text-gray-900 border-gray-300' : 'bg-[#1C2233] text-white border-[#2D3348]'}`}
                    placeholder="Detaylı açıklama..."
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <motion.button
                    type="button"
                    onClick={handleCloseModal}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className={`w-full sm:flex-1 h-12 rounded-lg font-semibold transition-all duration-300 ${theme === 'light' ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-[#2D3348] text-[#E5E7EB] hover:bg-[#3B4257]'}`}
                  >
                    İptal Et
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={handleWhatsAppSend}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className="w-full sm:flex-1 h-12 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span className="hidden sm:inline">WhatsApp'tan Gönder</span>
                    <span className="sm:hidden">Gönder</span>
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
