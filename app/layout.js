import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import LoadingScreen from '@/components/LoadingScreen'

export const metadata = {
  title: {
    default: "Kadir Keleş",
    template: "%s | Kadir Keleş"
  },
  description: "Yönetim Bilişim Sistemleri öğrencisi ve yazılım destek asistanı. Modern web teknolojileri ile kullanıcı odaklı çözümler geliştiriyorum.",
  keywords: ["portfolio", "yazılım", "web geliştirme", "Next.js", "React", "Freelancer", "Yönetim Bilişim Sistemleri", "Kadir Keleş"],
  authors: [{ name: "Kadir Keleş" }],
  creator: "Kadir Keleş",
  publisher: "Kadir Keleş",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://kadirkeles.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: '/',
    title: 'Kadir Keleş',
    description: 'Yönetim Bilişim Sistemleri öğrencisi ve yazılım destek asistanı. Modern web teknolojileri ile kullanıcı odaklı çözümler geliştiriyorum.',
    siteName: 'Kadir Keleş',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kadir Keleş',
    description: 'Yönetim Bilişim Sistemleri öğrencisi ve yazılım destek asistanı.',
    creator: '@kadirrkeles_',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.body.classList.remove('light');
                } else {
                  document.documentElement.classList.remove('dark');
                  document.body.classList.add('light');
                }
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider>
          <LoadingScreen />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

