import './css/globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// https://stackoverflow.com/questions/57609931/next-js-with-fortawesome-and-ssr
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Is Eurail Cheaper?',
  description: 'Travel Planner for Comparing Prices',
  // favicon:
}

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
