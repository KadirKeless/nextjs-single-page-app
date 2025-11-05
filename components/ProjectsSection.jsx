'use client'

import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'

const projects = [
  {
    title: 'Kurumsal Web Sitesi',
    description: 'Modern ve responsive tasarıma sahip, SEO optimizasyonu yapılmış kurumsal web sitesi projesi.',
    image: '/images/project-placeholder-1.png',
    tags: ['Next.js', 'Tailwind CSS', 'SEO'],
  },
  {
    title: 'E-Ticaret Platformu',
    description: 'Kullanıcı dostu arayüz ve güvenli ödeme sistemi ile tam özellikli e-ticaret çözümü.',
    image: '/images/project-placeholder-2.png',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Yönetim Paneli',
    description: 'Dashboard ve içerik yönetimi için geliştirilmiş profesyonel yönetim paneli uygulaması.',
    image: '/images/project-placeholder-3.png',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    title: 'Portfolio Web Sitesi',
    description: 'Minimalist tasarım ve smooth animasyonlarla geliştirilmiş kişisel portfolio web sitesi.',
    image: '/images/project-placeholder-4.png',
    tags: ['React', 'Framer Motion', 'Tailwind'],
  },
]

export default function ProjectsSection() {
  const { theme } = useTheme()
  
  return (
    <section id="projeler" className="section-padding transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
            Projeler
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
            Gerçekleştirdiğim bazı projeler
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } }}
              className="bg-white dark:bg-[#1F2937] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="relative w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300"
                >
                  Detayları Gör
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

