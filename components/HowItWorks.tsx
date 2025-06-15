"use client"

import { motion } from "framer-motion"
import { Send, Users, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function HowItWorks() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: Send,
      title: t("howItWorks.step1.title"),
      description: t("howItWorks.step1.desc"),
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Users,
      title: t("howItWorks.step2.title"),
      description: t("howItWorks.step2.desc"),
      color: "from-green-500 to-teal-500",
    },
    {
      icon: CheckCircle,
      title: t("howItWorks.step3.title"),
      description: t("howItWorks.step3.desc"),
      color: "from-amber-500 to-orange-500",
    },
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{t("howItWorks.title")}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("howItWorks.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-amber-300 to-red-300 transform -translate-x-1/2 z-0" />
              )}

              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <step.icon className="h-10 w-10 text-white" />
                </motion.div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
