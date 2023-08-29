import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import 'app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Naveen Yadav',
  description:
    'Ex-Amazon Software Engineer for hire, specializing in web app development.',
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
