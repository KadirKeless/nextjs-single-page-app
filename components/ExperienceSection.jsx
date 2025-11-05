'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { useTheme } from './ThemeProvider'

const education = [
  {
    type: 'lise',
    title: 'Özden Cengiz Anadolu Lisesi',
    logo: '/images/ozdencengiz.png',
    period: '2017 - 2021',
    description: [
      'Özden Cengiz Anadolu Lisesi\'nde lise eğitimimi tamamladım.',
    ],
  },
  {
    type: 'universite',
    title: 'FMV Işık Üniversitesi - Yönetim Bilişim Sistemleri',
    logo: '/images/isikuni.png',
    period: '2022 - Devam ediyor',
    description: [
      'FMV Işık Üniversitesi Yönetim Bilişim Sistemleri Lisans Programı\'na tam burslu olarak kabul edildim.',
      'Eğitim sürecimde yazılım geliştirme, veri yönetimi, sistem analizi ve dijital dönüşüm konularında hem teorik hem pratik bilgi birikimi edindim.',
    ],
  },
]

const experiences = [
  {
    title: 'Uluslararası TÜBİTAK Projesi - IntalaLAB',
    position: 'Bursiyer Araştırmacı Öğrenci',
    logo: '/images/Dikey.png',
    period: 'Mayıs 2024 - Kasım 2024',
    description: [
      'Uluslararası TÜBİTAK projesi "Trustable and Sustainable Open Platform for Smart Honey Value Chains (TOP4HoneyChains)" kapsamında bursiyer araştırmacı öğrenci olarak görev aldım.',
      'Projenin web geliştirme sürecinde hem front-end arayüzlerinin tasarımı hem de back-end altyapısının geliştirilmesi aşamalarında aktif rol aldım.',
      'API entegrasyonları, veri akışı yönetimi ve sistem testleri gibi görevlerde yer alarak uygulamanın teknik bütünlüğüne katkı sağladım.',
      'Laboratuvardaki diğer projelerin yazılım mimarilerini ve geliştirme süreçlerini gözlemleyerek teknik bilgi ve deneyimimi derinleştirdim.',
      'Bu süreçte web geliştirme, API entegrasyonu, veri yönetimi, analitik düşünme, problem çözme ve ekip çalışması becerilerimi önemli ölçüde geliştirdim.',
    ],
  },
  {
    title: 'Mercanlar Otomotiv Tic. A.Ş.',
    position: 'Part Time Yazılım Destek Asistanı',
    logo: '/images/Mercanlar-Group.png',
    period: 'Şubat 2025 - Devam Ediyor',
    description: [
      'Şirketin iç süreçlerinde kullanılan yazılım sistemlerinin geliştirilmesi, takibi ve bakımında aktif rol alıyorum.',
      'Web geliştirme alanında hem front-end hem back-end tarafında çalışarak full stack projelerde görev alıyorum.',
      'Modern teknolojiler ve framework\'ler kullanarak sistemlerin performansını ve kullanıcı deneyimini iyileştiriyorum.',
      'Departmanlar arası iş akışını destekleyen dijital çözümler tasarlıyor ve entegrasyon süreçlerine katkı sağlıyorum.',
      'Bu görev sayesinde yazılım geliştirme, hata analizi, süreç optimizasyonu ve modern teknolojilerle deneyim kazanıyorum.',
    ],
  },
]

export default function ExperienceSection() {
  const { theme } = useTheme()
  const [expandedEducationIndex, setExpandedEducationIndex] = useState(null)
  const [expandedExperienceIndex, setExpandedExperienceIndex] = useState(null)

  const renderEducationItem = (edu, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      onClick={() => setExpandedEducationIndex(expandedEducationIndex === index ? null : index)}
      className={`relative border-l-4 border-primary pl-6 md:pl-8 py-6 rounded-r-lg transition-colors duration-300 cursor-pointer ${theme === 'light' ? 'bg-gray-50 border-gray-200 hover:bg-gray-100' : 'bg-[#1F2937] border-[#374151] hover:bg-[#253141]'}`}
    >
      {/* Timeline dot */}
      <div className="absolute -left-[10px] top-6 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-[#0B0F19]"></div>

      <div className="space-y-4">
        {/* Header with Logo */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            {/* Logo */}
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 relative">
              <Image
                src={edu.logo}
                alt={edu.title}
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className={`text-xl md:text-2xl font-bold mb-2 break-words ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                {edu.title}
              </h3>
              <p className={`text-sm md:text-base font-medium ${theme === 'light' ? 'text-gray-600' : 'text-[#9CA3AF]'}`}>
                {edu.period}
              </p>
            </div>
          </div>
          {edu.description && edu.description.length > 0 ? (
            <motion.svg
              animate={{ rotate: expandedEducationIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`w-5 h-5 flex-shrink-0 mt-1 md:mr-4 ${theme === 'light' ? 'text-gray-600' : 'text-[#9CA3AF]'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          ) : null}
        </div>

        {/* Description */}
        <AnimatePresence>
          {expandedEducationIndex === index && edu.description && edu.description.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="space-y-3 mt-4">
                {edu.description.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className={`text-base md:text-lg leading-relaxed break-words ${theme === 'light' ? 'text-gray-700' : 'text-[#E5E7EB]'}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )

  const renderExperienceItem = (exp, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      onClick={() => setExpandedExperienceIndex(expandedExperienceIndex === index ? null : index)}
      className={`relative border-l-4 border-primary pl-6 md:pl-8 py-6 rounded-r-lg transition-colors duration-300 cursor-pointer ${theme === 'light' ? 'bg-gray-50 border-gray-200 hover:bg-gray-100' : 'bg-[#1F2937] border-[#374151] hover:bg-[#253141]'}`}
    >
      {/* Timeline dot */}
      <div className="absolute -left-[10px] top-6 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-[#0B0F19]"></div>

      <div className="space-y-4">
        {/* Header with Logo */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            {/* Logo */}
            {exp.logo && (
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 relative">
                <Image
                  src={exp.logo}
                  alt={exp.title}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className={`text-xl md:text-2xl font-bold mb-2 break-words ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                {exp.title}
              </h3>
              {exp.position && (
                <p className={`text-lg font-semibold mb-1 ${theme === 'light' ? 'text-primary' : 'text-[#7B61FF]'}`}>
                  {exp.position}
                </p>
              )}
              <p className={`text-sm md:text-base font-medium ${theme === 'light' ? 'text-gray-600' : 'text-[#9CA3AF]'}`}>
                {exp.period}
              </p>
            </div>
          </div>
          {exp.description && exp.description.length > 0 ? (
            <motion.svg
              animate={{ rotate: expandedExperienceIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`w-5 h-5 flex-shrink-0 mt-1 md:mr-4 ${theme === 'light' ? 'text-gray-600' : 'text-[#9CA3AF]'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          ) : null}
        </div>

        {/* Description */}
        <AnimatePresence>
          {expandedExperienceIndex === index && exp.description && exp.description.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="space-y-3 mt-4">
                {exp.description.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className={`text-base md:text-lg leading-relaxed break-words ${theme === 'light' ? 'text-gray-700' : 'text-[#E5E7EB]'}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )

  return (
    <section id="ozgecmis" className={`section-padding transition-colors duration-300 ${theme === 'light' ? 'bg-white' : 'bg-[#0B0F19]'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
            Özgeçmiş
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
            Eğitim ve iş deneyimlerim
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Eğitim Bölümü */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className={`text-3xl md:text-4xl font-bold mb-8 ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}
            >
              Eğitim
            </motion.h3>
            <div className="space-y-8">
              {education.map((edu, index) => renderEducationItem(edu, index))}
            </div>
          </div>

          {/* Deneyimler Bölümü */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className={`text-3xl md:text-4xl font-bold mb-8 ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}
            >
              Deneyimler
            </motion.h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => renderExperienceItem(exp, index))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
