import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientWrapper from '../components/ClientWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HEALLY - Your Learning Ally',
  description: 'Welcome to HEALLY, your AI-powered personalized learning platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased relative`}>
        {children}
        <ClientWrapper />
      </body>
    </html>
  )
} 