import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import 'app/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const title = 'Freelance Software Developer | Naveen Yadav'
const description =
  'I specialize in building web apps using TypeScript, React, and AWS. I have 9 years of software industry experience. Use my expertise to supercharge your online business and customer experience.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: 'https://naveenyadav.me',
  },
  openGraph: {
    type: 'website',
    url: 'https://naveenyadav.me',
    title,
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
        <div className="mx-auto max-w-6xl md:px-8">{children}</div>
      </body>
    </html>
  )
}
