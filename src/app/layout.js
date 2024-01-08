import { Inter } from 'next/font/google'
import './globals.css'
import '@/styles/main.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'eKisan Darshan',
  description: 'eKisan Darshan, Our website helps farmers wholesellers and daily consumers to buy and sell their products',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
