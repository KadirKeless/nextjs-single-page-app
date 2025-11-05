'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="hakkimda" className="section-padding bg-white dark:bg-[#111827] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative w-full aspect-[12/11] rounded-2xl overflow-hidden shadow-xl ring-4 ring-primary/20">
            <Image
              src="/images/kadir.JPEG"
              alt="Hakkımda"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100"
            >
              Hakkımda
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              İstanbul doğumluyum, teknolojiye ve yeniliğe meraklı bir Yönetim Bilişim Sistemleri öğrencisiyim. 2022 yılında FMV Işık Üniversitesi Yönetim Bilişim Sistemleri bölümüne tam burslu olarak başladım ve o günden bu yana öğrendiklerimi pratiğe dökmeye odaklandım.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Web geliştirme ve kullanıcı deneyimi (UX/UI) konularına özel ilgi duyuyorum. Uluslararası bir TÜBİTAK projesi olan TOP4HoneyChains'te bursiyer olarak görev alarak ekip çalışması ve proje geliştirme konusunda değerli deneyimler kazandım.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Şu anda Mercanlar Otomotiv Tic. A.Ş.'de part-time Yazılım Destek Asistanı olarak çalışıyor, modern web teknolojileriyle hem frontend hem backend alanında kendimi geliştiriyorum.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Ayrıca freelance olarak markalara özel kurumsal web siteleri tasarlıyor ve geliştiriyorum. Amacım, kullanıcı dostu, performanslı ve ölçeklenebilir çözümler üretmeye devam etmek.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
