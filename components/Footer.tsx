"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Footer() {
  const { t, language } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold">{language === "ja" ? "クリーニングジャパン" : "Cleaning Japan"}</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {language === "ja"
                ? "日本在住のベトナム人の皆様の就職活動を全力でサポートします。理想の職場を見つけて、充実したキャリアを築きましょう。"
                : "Chúng tôi hỗ trợ hết mình cho hoạt động tìm việc của các bạn người Việt Nam đang sinh sống tại Nhật Bản. Hãy tìm nơi làm việc lý tưởng và xây dựng sự nghiệp viên mãn."}
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">{language === "ja" ? "クイックリンク" : "Liên kết nhanh"}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/jobs" className="text-gray-300 hover:text-amber-400 transition-colors">
                  {language === "ja" ? "求人検索" : "Tìm kiếm việc làm"}
                </Link>
              </li>
              <li>
                <Link href="/companies" className="text-gray-300 hover:text-amber-400 transition-colors">
                  {language === "ja" ? "企業一覧" : "Danh sách công ty"}
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-amber-400 transition-colors">
                  {language === "ja" ? "サポート" : "Hỗ trợ"}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-amber-400 transition-colors">
                  {language === "ja" ? "会社概要" : "Giới thiệu công ty"}
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">{language === "ja" ? "サポート" : "Hỗ trợ"}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-gray-300 hover:text-amber-400 transition-colors">
                  {language === "ja" ? "ヘルプセンター" : "Trung tâm trợ giúp"}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-amber-400 transition-colors">
                  {language === "ja" ? "よくある質問" : "Câu hỏi thường gặp"}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-amber-400 transition-colors">
                  {language === "ja" ? "プライバシーポリシー" : "Chính sách bảo mật"}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-amber-400 transition-colors">
                  {language === "ja" ? "利用規約" : "Điều khoản sử dụng"}
                </Link>
              </li>
              <li>
                <Link href="/career-advice" className="text-gray-300 hover:text-amber-400 transition-colors">
                  {language === "ja" ? "キャリア相談" : "Tư vấn nghề nghiệp"}
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            {language === "ja"
              ? "© 2024 クリーニングジャパン. All rights reserved. | 日本在住ベトナム人向け清掃求人サイト"
              : "© 2024 Cleaning Japan. Tất cả quyền được bảo lưu. | Trang việc làm dọn dẹp dành cho người Việt tại Nhật"}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
