import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Is Eurail Cheaper?',
  description: 'Travel Planner for Comparing Prices',
  // favicon:
}

// <a href="https://www.flaticon.com/free-icons/price-comparison" title="price comparison icons">Price comparison icons created by amonrat rungreangfangsai - Flaticon</a>

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
