"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Building, Award } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Statistics() {
  const { t } = useLanguage()

  const stats = [
    {
      icon: TrendingUp,
      value: "95%",
      label: t("stats.success"),
      description: t("stats.successDesc"),
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      value: "15,000+",
      label: t("hero.stats.users"),
      description: t("stats.usersDesc"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Building,
      value: "1,200+",
      label: t("hero.stats.companies"),
      description: t("stats.companiesDesc"),
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      value: "98%",
      label: t("hero.stats.satisfaction"),
      description: t("stats.satisfactionDesc"),
      color: "from-amber-500 to-orange-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500/20 to-red-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-red-500/20 to-amber-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("stats.title")}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("stats.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold mb-2 bg-gradient-to-r from-amber-400 to-red-400 bg-clip-text text-transparent"
                >
                  {stat.value}
                </motion.div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-400 transition-colors">
                  {stat.label}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
