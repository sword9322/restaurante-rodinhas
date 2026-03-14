import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'O Rodinhas | Marisqueira Tradicional em Sesimbra desde 1992',
  description:
    'Restaurante O Rodinhas - Marisqueira tradicional em Sesimbra desde 1992. Especialidades: choco frito, mariscos frescos, caracóis e petiscos regionais. #6 no TripAdvisor.',
  keywords: [
    'O Rodinhas',
    'restaurante Sesimbra',
    'marisqueira',
    'marisco fresco',
    'choco frito',
    'caracóis',
    'petiscos',
    'Sesimbra',
  ],
  openGraph: {
    title: 'O Rodinhas | Marisqueira Tradicional em Sesimbra',
    description:
      'Marisqueira tradicional fundada em 1992. Choco frito, mariscos frescos e petiscos regionais.',
    type: 'website',
    locale: 'pt_PT',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
