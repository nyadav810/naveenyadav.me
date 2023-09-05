import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import 'app/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Naveen Yadav - Software Engineer For Hire',
  description:
    'Ex-Amazon Software Engineer for hire, specializing in web app development.',
  alternates: {
    canonical: 'https://naveenyadav.me',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-5xl mx-auto">{children}</div>
      </body>
    </html>
  )
}
