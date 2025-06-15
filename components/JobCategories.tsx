"use client"

import { motion } from "framer-motion"
import { Utensils, Building, Heart, ShoppingBag, Wrench } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function JobCategories() {
  const { t } = useLanguage()

  const categories = [
    { icon: Building, name: t("categories.vacation"), count: 450, color: "from-blue-500 to-purple-500" },
    { icon: Building, name: t("categories.hotel"), count: 320, color: "from-green-500 to-teal-500" },
    { icon: Building, name: t("categories.office"), count: 280, color: "from-amber-500 to-orange-500" },
    { icon: Heart, name: t("categories.residential"), count: 220, color: "from-red-500 to-pink-500" },
    { icon: ShoppingBag, name: t("categories.commercial"), count: 190, color: "from-purple-500 to-indigo-500" },
    { icon: Heart, name: t("categories.hospital"), count: 160, color: "from-cyan-500 to-blue-500" },
    { icon: Utensils, name: t("categories.restaurant"), count: 140, color: "from-emerald-500 to-green-500" },
    { icon: Wrench, name: t("categories.maintenance"), count: 120, color: "from-orange-500 to-red-500" },
  ]

  return (
    <section className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{t("categories.title")}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("categories.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <category.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                {category.name}
              </h3>
              <p className="text-gray-500 text-sm">
                {category.count.toLocaleString()}
                {t("categories.jobs")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
