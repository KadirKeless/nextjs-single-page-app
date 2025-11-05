'use client'

import { useTheme } from './ThemeProvider'

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer className={`py-4 text-center transition-colors duration-300 ${theme === 'light' ? 'bg-white border-t border-gray-200' : 'bg-[#0B0F19] border-t border-[#2D3348]'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
          © {new Date().getFullYear()} Kadir Keleş. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  )
}

