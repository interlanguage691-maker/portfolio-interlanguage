import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ChatButtons from "@/components/chat-buttons"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "InterLanguage - Trung tâm Tiếng Anh",
  description: "Trung tâm Tiếng Anh InterLanguage - Nơi bạn học tiếng Anh hiệu quả",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ChatButtons />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
