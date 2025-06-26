import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'], // All weights you'll use
  display: 'swap', // Better loading performance
  preload: true, // Preload for better performance
})

export const metadata: Metadata = {
  title: "Dawit - Software Developer Portfolio",
  description: "Full-stack software developer specializing in React, Node.js, Laravel, and Spring Boot",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.className}`}>
  <body className={inter.className}>{children}</body>
</html>
  )
}
