import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MediCare+ | Premium Healthcare Services",
  description:
    "Experience world-class healthcare with our team of dedicated professionals. Comprehensive medical services with compassion and excellence.",
  keywords: "healthcare, medical services, doctors, hospital, clinic, medical care, health insurance",
  authors: [{ name: "MediCare+ Medical Center" }],
  openGraph: {
    title: "MediCare+ | Premium Healthcare Services",
    description: "Experience world-class healthcare with our team of dedicated professionals.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MediCare+ | Premium Healthcare Services",
    description: "Experience world-class healthcare with our team of dedicated professionals.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
