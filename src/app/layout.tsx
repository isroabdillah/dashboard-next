import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Template Dashboard (PT. Arkatama Multi Solusindo)',
  description: 'Template Dashboard (PT. Arkatama Multi Solusindo)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F2F2F4]`}>{children}</body>
    </html>
  )
}
