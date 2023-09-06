import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import 'app/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const title =
  'Freelance Software Developer | TypeScript, React, AWS | Naveen Yadav'
const description =
  'Freelance Software Developer with 9 years of experience. Use my expertise to supercharge your online business and customer experience.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: 'https://naveenyadav.me',
  },
  openGraph: {
    type: 'website',
    url: 'https://naveenyadav.me',
    title: 'naveenyadav.me',
    description,
    images: [
      {
        url: 'https://s3.us-west-2.amazonaws.com/naveenyadav.me/naveen_in_barcelona.png',
      },
    ],
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
