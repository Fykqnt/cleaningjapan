"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, Bell } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const scrollToFeaturedJobs = () => {
    const featuredJobsSection = document.getElementById("featured-jobs")
    if (featuredJobsSection) {
      featuredJobsSection.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false) // Close mobile menu if open
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white/95 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 bg-gradient-to-br from-amber-500 to-red-500 rounded-lg flex items-center justify-center"
            >
              <span className="text-white font-bold text-lg">V</span>
            </motion.div>
            <span className="text-xl font-bold text-gray-800">
              {language === "ja" ? "クリーニングジャパン" : "Cleaning Japan"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-600 transition-colors">
              {t("header.home")}
            </Link>
            <button onClick={scrollToFeaturedJobs} className="text-gray-700 hover:text-amber-600 transition-colors">
              {t("header.jobList")}
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setLanguage("ja")}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  language === "ja" ? "bg-white text-amber-600 shadow-sm" : "text-gray-600 hover:text-amber-600"
                }`}
              >
                JP
              </button>
              <button
                onClick={() => setLanguage("vn")}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  language === "vn" ? "bg-white text-amber-600 shadow-sm" : "text-gray-600 hover:text-amber-600"
                }`}
              >
                VN
              </button>
            </div>

            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-amber-200 py-4"
            >
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-gray-700 hover:text-amber-600 transition-colors">
                  {t("header.home")}
                </Link>
                <button
                  onClick={scrollToFeaturedJobs}
                  className="text-gray-700 hover:text-amber-600 transition-colors text-left"
                >
                  {t("header.jobList")}
                </button>

                {/* Mobile Language Switcher */}
                <div className="flex items-center bg-gray-100 rounded-lg p-1 w-fit">
                  <button
                    onClick={() => setLanguage("ja")}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                      language === "ja" ? "bg-white text-amber-600 shadow-sm" : "text-gray-600 hover:text-amber-600"
                    }`}
                  >
                    JP
                  </button>
                  <button
                    onClick={() => setLanguage("vn")}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                      language === "vn" ? "bg-white text-amber-600 shadow-sm" : "text-gray-600 hover:text-amber-600"
                    }`}
                  >
                    VN
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
