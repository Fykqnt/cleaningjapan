import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/contexts/LanguageContext"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cleaning Japan - Hỗ trợ tìm việc làm dọn dẹp tại Nhật Bản",
  description: "Trang thông tin việc làm dọn dẹp trên toàn Nhật Bản. Người mới cũng có thể! Hãy tìm nơi làm việc mà bạn có thể phát huy năng lực.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
