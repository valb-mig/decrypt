import type { Metadata } from 'next';
import {  Pixelify_Sans  } from 'next/font/google';
import '/public/styles/globals.css';

const pixelifySans = Pixelify_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Decrypt',
  description: 'Simple binary code decoder! :D',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pixelifySans.className}>{children}</body>
    </html>
  )
}
