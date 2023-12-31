import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Qrscan from './page'
import { QrProvider } from './importsheet'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WaveOn QR Auth',
  description: 'WaveOn QR Auth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <QrProvider>
        <body className={inter.className}>{children}</body>
      </QrProvider>
    </html>
  )
}
