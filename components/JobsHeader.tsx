"use client"

import { motion } from "framer-motion"
import { Search, Filter, MapPin, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/contexts/LanguageContext"

export default function JobsHeader() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-gradient-to-br from-amber-500 to-red-500 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("jobs.title")}</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">{t("jobs.subtitle")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl p-6 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder={t("hero.search.job")}
                className="pl-10 h-12 border-gray-200 focus:border-amber-400 text-gray-800"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder={t("hero.search.location")}
                className="pl-10 h-12 border-gray-200 focus:border-amber-400 text-gray-800"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder={t("jobType.fullTime")}
                className="pl-10 h-12 border-gray-200 focus:border-amber-400 text-gray-800"
              />
            </div>
            <Button className="h-12 bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600">
              <Search className="h-5 w-5 mr-2" />
              {t("hero.search.button")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
